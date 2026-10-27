#!/usr/bin/env node
// Cliente mínimo (sem dependências) da API Open de Afiliados da Shopee Brasil (GraphQL), usado
// pela rotina da Loja do Bitcoin (docs/rotinas/shopee.md) para achar produto real, pegar a foto
// do anúncio e gerar o link de afiliado. Leitura de catálogo; nada aqui altera conta ou compra.
//
// CREDENCIAIS: só por ambiente, nunca em arquivo do repositório, diff, PR, commit ou log.
//   SHOPEE_APP_ID e SHOPEE_SECRET (variáveis de ambiente do ambiente de execução) ou, na falta
//   delas, o arquivo ~/.config/blogdobitcoin/shopee.env (fora do repo, modo 600, linhas CHAVE=valor).
//
// Uso:
//   node scripts/shopee.mjs check
//   node scripts/shopee.mjs search "<palavras>" [--sort sales|relevance|price-desc|price-asc|commission]
//        [--limit 20] [--page 1] [--min-rating 4.5] [--min-sales 5] [--json]
//   node scripts/shopee.mjs item <itemId> [--json]
//   node scripts/shopee.mjs link <https://shopee.com.br/product/<shopId>/<itemId>> [--sub loja,slug]
//   node scripts/shopee.mjs image <itemId> <caminho-sem-extensão>   (grava .jpg, .png ou .webp)
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, join } from "node:path";

const ENDPOINT = "https://open-api.affiliate.shopee.com.br/graphql";
// sortType da API: 1 relevância, 2 mais vendidos, 3 preço maior, 4 preço menor, 5 maior comissão.
// Para escolher produto da loja use "sales" ou "relevance". Nunca escolha por comissão.
const SORT = { relevance: 1, sales: 2, "price-desc": 3, "price-asc": 4, commission: 5 };
const FIELDS =
  "itemId shopId productName price priceMin priceMax imageUrl productLink offerLink commissionRate ratingStar sales shopName shopType priceDiscountRate";
const MIN_IMAGE_BYTES = 15 * 1024;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function fail(message, code = 1) {
  console.error(`shopee: ${message}`);
  process.exit(code);
}

function credentials() {
  let appId = process.env.SHOPEE_APP_ID;
  let secret = process.env.SHOPEE_SECRET;
  if (!appId || !secret) {
    const file = join(homedir(), ".config", "blogdobitcoin", "shopee.env");
    if (existsSync(file)) {
      for (const line of readFileSync(file, "utf8").split("\n")) {
        const m = /^\s*(SHOPEE_APP_ID|SHOPEE_SECRET)\s*=\s*(.*?)\s*$/.exec(line);
        if (!m) continue;
        if (m[1] === "SHOPEE_APP_ID" && !appId) appId = m[2];
        if (m[1] === "SHOPEE_SECRET" && !secret) secret = m[2];
      }
    }
  }
  if (!appId || !secret) {
    fail(
      "credenciais ausentes. Defina SHOPEE_APP_ID e SHOPEE_SECRET no ambiente (ou em ~/.config/blogdobitcoin/shopee.env). " +
        "Sem elas a rotina da Shopee termina sem publicar (\"nada novo hoje\"), nunca com dado inventado.",
      2
    );
  }
  return { appId, secret };
}

/** Chamada GraphQL assinada (SHA256 de AppId + timestamp + corpo + Secret). Repete em falha transitória. */
async function call(query, tries = 3) {
  const { appId, secret } = credentials();
  let last;
  for (let i = 1; i <= tries; i++) {
    const payload = JSON.stringify({ query });
    const ts = Math.floor(Date.now() / 1000);
    const signature = createHash("sha256").update(appId + ts + payload + secret).digest("hex");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `SHA256 Credential=${appId}, Timestamp=${ts}, Signature=${signature}` },
        body: payload,
        signal: AbortSignal.timeout(20_000),
      });
      const text = await res.text();
      let json;
      try {
        json = JSON.parse(text);
      } catch {
        throw new Error(`resposta que não é JSON (HTTP ${res.status})`);
      }
      if (json.errors?.length) {
        const err = json.errors[0];
        const msg = err?.message ?? "erro desconhecido";
        const e = new Error(msg);
        e.retryable = /rate|limit|timeout|busy|try again/i.test(msg);
        throw e;
      }
      return json.data;
    } catch (e) {
      last = e;
      const transient = e.retryable !== false && !/Invalid Signature|invalid|Unauthorized/i.test(String(e.message));
      if (!transient || i === tries) break;
      await sleep(2000 * i);
    }
  }
  fail(`falha na API: ${last?.message ?? last}`);
}

function parseArgs(argv) {
  const pos = [];
  const opts = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--json") opts.json = true;
    else if (a.startsWith("--")) opts[a.slice(2)] = argv[++i];
    else pos.push(a);
  }
  return { pos, opts };
}

const brl = (v) => `R$ ${Number(v).toFixed(2).replace(".", ",")}`;
const priceText = (n) => (n.priceMin === n.priceMax ? brl(n.priceMin) : `${brl(n.priceMin)} a ${brl(n.priceMax)}`);
/** Nome com caractere quebrado ou "?" no meio da palavra: tradução automática ruim, anúncio a evitar. */
const garbled = (name) => name.includes("�") || /[a-zà-ú]\?[a-zà-ú]/i.test(name);

function printTable(nodes) {
  for (const n of nodes) {
    const flags = [garbled(n.productName) ? "NOME-QUEBRADO" : "", n.shopType?.length ? `loja-tipo:${n.shopType.join(",")}` : ""].filter(Boolean).join(" ");
    console.log(
      `${n.itemId}\tloja ${n.shopId}\t${priceText(n)}\t★${n.ratingStar}\t${n.sales} vendas\t${n.shopName}\t${n.productName.slice(0, 90)}${flags ? `\t[${flags}]` : ""}`
    );
  }
}

async function search(keyword, opts) {
  if (!keyword) fail('uso: search "<palavras>"');
  const sort = SORT[opts.sort ?? "sales"];
  if (!sort) fail(`--sort inválido (${Object.keys(SORT).join(", ")})`);
  const limit = Math.min(Math.max(Number(opts.limit ?? 20) || 20, 1), 50);
  const page = Math.max(Number(opts.page ?? 1) || 1, 1);
  const data = await call(
    `{ productOfferV2(keyword: ${JSON.stringify(keyword)}, sortType: ${sort}, limit: ${limit}, page: ${page}) { nodes { ${FIELDS} } pageInfo { page limit hasNextPage } } }`
  );
  let nodes = data.productOfferV2.nodes;
  const minRating = Number(opts["min-rating"] ?? 0);
  const minSales = Number(opts["min-sales"] ?? 0);
  nodes = nodes.filter((n) => Number(n.ratingStar) >= minRating && Number(n.sales) >= minSales);
  if (opts.json) console.log(JSON.stringify(nodes, null, 2));
  else if (nodes.length === 0) console.log("(nenhum anúncio passou nos filtros)");
  else printTable(nodes);
}

async function getItem(itemId) {
  if (!/^\d{1,18}$/.test(String(itemId ?? ""))) fail("uso: item <itemId numérico>");
  const data = await call(`{ productOfferV2(itemId: ${itemId}, limit: 1) { nodes { ${FIELDS} } } }`);
  return data.productOfferV2.nodes[0] ?? null;
}

async function item(itemId, opts) {
  const n = await getItem(itemId);
  if (!n) fail(`anúncio ${itemId} não encontrado (saiu do ar ou fora do programa de afiliados)`, 3);
  if (opts.json) console.log(JSON.stringify(n, null, 2));
  else {
    printTable([n]);
    console.log(`link de afiliado: ${n.offerLink}\nlink do produto:  ${n.productLink}\nimagem:           ${n.imageUrl}`);
  }
}

async function link(url, opts) {
  if (!/^https:\/\/shopee\.com\.br\/(product\/\d+\/\d+|[^\s"]+-i\.\d+\.\d+)(\?[^\s"]*)?$/.test(url ?? "")) {
    fail("uso: link https://shopee.com.br/product/<shopId>/<itemId>");
  }
  const subs = (opts.sub ?? "blogdobitcoin")
    .split(",")
    .map((s) => s.trim())
    .filter((s) => /^[A-Za-z0-9_-]{1,30}$/.test(s))
    .slice(0, 5);
  const data = await call(
    `mutation { generateShortLink(input: { originUrl: ${JSON.stringify(url)}, subIds: ${JSON.stringify(subs)} }) { shortLink } }`
  );
  console.log(data.generateShortLink.shortLink);
}

/** Largura e altura de JPEG ou PNG (o suficiente para o campo image do produto). */
function dimensions(buf) {
  if (buf.length > 24 && buf.readUInt32BE(0) === 0x89504e47) return { type: "png", width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  if (buf[0] === 0xff && buf[1] === 0xd8) {
    let o = 2;
    while (o + 9 < buf.length) {
      if (buf[o] !== 0xff) {
        o++;
        continue;
      }
      const marker = buf[o + 1];
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
        return { type: "jpg", height: buf.readUInt16BE(o + 5), width: buf.readUInt16BE(o + 7) };
      }
      o += 2 + buf.readUInt16BE(o + 2);
    }
    return { type: "jpg" };
  }
  if (buf.toString("ascii", 0, 4) === "RIFF" && buf.toString("ascii", 8, 12) === "WEBP") return { type: "webp" };
  return { type: "desconhecido" };
}

async function image(itemId, outBase) {
  if (!outBase) fail("uso: image <itemId> <caminho-sem-extensão>");
  const n = await getItem(itemId);
  if (!n) fail(`anúncio ${itemId} não encontrado`, 3);
  const host = (() => {
    try {
      const u = new URL(n.imageUrl);
      return u.protocol === "https:" ? u.hostname : "";
    } catch {
      return "";
    }
  })();
  if (!/(^|\.)(shopee\.com\.br|susercontent\.com)$/.test(host)) fail(`domínio de imagem inesperado: ${n.imageUrl}`);
  const res = await fetch(n.imageUrl, { signal: AbortSignal.timeout(30_000) });
  if (res.status !== 200) fail(`imagem respondeu HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < MIN_IMAGE_BYTES) fail(`imagem pequena demais (${buf.length} bytes, mínimo ${MIN_IMAGE_BYTES})`);
  const dim = dimensions(buf);
  const ext = dim.type === "desconhecido" ? "bin" : dim.type;
  if (ext === "bin") fail("formato de imagem não reconhecido");
  const out = `${outBase}.${ext}`;
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, buf);
  console.log(JSON.stringify({ file: out, bytes: buf.length, ...dim, source: n.imageUrl }));
  console.log("Abra a imagem e confira que é o produto certo (nunca imagem de outro anúncio, banner ou gerada por IA).");
}

async function check() {
  const data = await call(`{ productOfferV2(keyword: "bitcoin", limit: 1) { nodes { itemId } } }`);
  console.log(`shopee: credenciais ok (${data.productOfferV2.nodes.length} resultado de teste)`);
}

const [cmd, ...rest] = process.argv.slice(2);
const { pos, opts } = parseArgs(rest);
switch (cmd) {
  case "check":
    await check();
    break;
  case "search":
    await search(pos.join(" ").trim(), opts);
    break;
  case "item":
    await item(pos[0], opts);
    break;
  case "link":
    await link(pos[0], opts);
    break;
  case "image":
    await image(pos[0], pos[1]);
    break;
  default:
    fail("comando: check | search | item | link | image (veja o cabeçalho do arquivo)", 2);
}

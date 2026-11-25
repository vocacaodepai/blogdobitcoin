#!/usr/bin/env node
/**
 * Guarda-corpo do conteúdo editorial (content/articles/*.ts e content/news/*.ts).
 *
 * Guarda-corpo também de content/products/*.ts. O HTML dos artigos é renderizado com dangerouslySetInnerHTML, então este
 * script garante que nada perigoso entre no site, mesmo vindo das rotinas
 * automáticas de escrita. Roda em `npm run lint`, `npm run check:content` e
 * antes de todo `npm run build` (prebuild). Sai com código 1 se houver erro.
 */
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { homedir } from "node:os";
import { join, resolve } from "node:path";

const ROOT = resolve(new URL("..", import.meta.url).pathname);
const ARTICLES_DIR = resolve(ROOT, "content/articles");
const NEWS_DIR = resolve(ROOT, "content/news");

// Artigos com data igual ou posterior a esta seguem o padrão editorial novo
// (>= 10 links internos, >= 900 palavras, 3 keyPoints, FAQ). Os mais antigos só geram aviso.
const STRICT_FROM_DATE = "2026-01-01";
// Notícias com data igual ou posterior a esta precisam do mesmo tamanho de texto
// dos artigos (>= 900 palavras, >= 3 h2). As notícias já publicadas antes ficam como estão.
const NEWS_STRICT_FROM_DATE = "2026-01-01";
const MIN_INTERNAL_LINKS = 8;
const CATEGORIES = new Set(["bitcoin", "iniciantes", "mercado", "altcoins", "seguranca", "brasil", "historia", "cripto-indica"]);
const NEWS_TOPICS = new Set(["bitcoin", "mercado", "altcoins", "regulacao", "seguranca", "adocao"]);
const PRODUCT_CATEGORIES = new Set(["hardware-wallets", "backup-seed", "livros", "vestuario", "colecionaveis"]);
const PRODUCTS_DIR = resolve(ROOT, "content/products");
const AMAZON_TAG = "blogdobitcoin-20";
const PRODUCT_STORES = new Set(["amazon", "shopee"]);
// Link curto de afiliado da Shopee (gerado por scripts/shopee.mjs link). Link comum shopee.com.br não paga comissão.
const SHOPEE_SHORT_LINK_RE = /^https:\/\/s\.shopee\.com\.br\/[A-Za-z0-9_-]+$/;
// Hosts conferidos com new URL (nunca por pedaço de texto): qualquer domínio da Shopee e das lojas da Amazon.
const SHOPEE_HOST_RE = /(^|\.)(shopee\.[a-z.]+|shp\.ee|shope\.ee)$/i;
const AMAZON_HOST_RE = /(^|\.)(amazon\.[a-z.]+|amzn\.[a-z]+|a\.co)$/i;
const AMAZON_BR_HOST_RE = /^(www\.)?amazon\.com\.br$/i;
const MIN_BUY_BUTTONS = 5;
const MIN_PRODUCT_IMAGE_BYTES = 15 * 1024;
const CTA = { amazon: "Comprar agora na Amazon ↗", shopee: "Comprar agora na Shopee ↗" };
// Carteira de hardware vinda de vendedor de marketplace é o golpe clássico (aparelho violado ou com seed anotada).
const HARDWARE_WALLET_RE =
  /\b(ledger|trezor|coldcard|bitbox|keepkey|tangem|safepal|keystone|foundation passport|carteira (?:fria|de hardware|f[ií]sica)|hardware wallet|cold ?wallet)\b/i;
const MIN_WORDS_STRICT = 900;
const MIN_WORDS_WARN = 600;

// "Hoje" no fuso editorial (America/Sao_Paulo): datas futuras são erro.
const TODAY = new Intl.DateTimeFormat("en-CA", {
  timeZone: "America/Sao_Paulo",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date());

const FORBIDDEN = [
  { re: /<\s*script\b/i, label: "<script>" },
  { re: /<\s*iframe\b/i, label: "<iframe>" },
  { re: /<\s*object\b/i, label: "<object>" },
  { re: /<\s*embed\b/i, label: "<embed>" },
  { re: /<\s*form\b/i, label: "<form>" },
  { re: /<\s*input\b/i, label: "<input>" },
  { re: /<\s*button\b/i, label: "<button>" },
  { re: /<\s*style\b/i, label: "<style>" },
  { re: /<\s*link\b/i, label: "<link>" },
  { re: /<\s*meta\b/i, label: "<meta>" },
  { re: /<\s*base\b/i, label: "<base>" },
  { re: /<\s*svg\b/i, label: "<svg> inline" },
  { re: /<\s*math\b/i, label: "<math>" },
  { re: /(?:^|[\s"'/])on[a-z]+\s*=/i, label: "atributo on*= (handler inline)" },
  { re: /<[a-z][a-z0-9]*\b[^>]*?\s[a-z:-]+\s*=\s*[^"'\s>]/i, label: "atributo sem aspas (use sempre aspas duplas)" },
  { re: /<[a-z][a-z0-9]*\/[a-z]/i, label: "barra colada em atributo (<img/src=...)" },
  { re: /&(?:#x?[0-9a-f]+|[a-z]+);?\s*[a-z]*:/i, label: "entidade HTML formando esquema de URL" },
  { re: /\b(?:srcset|ping|formaction|xlink:href|dynsrc)\s*=/i, label: "atributo perigoso" },
  { re: /javascript\s*:/i, label: "javascript: em URL" },
  { re: /vbscript\s*:/i, label: "vbscript: em URL" },
  { re: /data\s*:\s*text\/html/i, label: "data:text/html" },
  { re: /srcdoc\s*=/i, label: "srcdoc=" },
  { re: /expression\s*\(/i, label: "expression() em CSS" },
  { re: /\bstyle\s*=/i, label: "atributo style= (use as classes do site)" },
  { re: /\$\{/, label: "interpolação ${...} dentro do template literal" },
];

const ALLOWED_TAGS = new Set([
  "p", "h2", "h3", "h4", "ul", "ol", "li", "a", "strong", "em", "b", "i", "u",
  "br", "hr", "blockquote", "code", "pre", "table", "thead", "tbody", "tr",
  "th", "td", "div", "span", "img", "figure", "figcaption", "sup", "sub",
  "small", "mark", "del", "ins", "dl", "dt", "dd", "cite", "abbr", "kbd",
]);

const errors = [];
const warnings = [];

function readField(block, name) {
  const m = new RegExp(`\\n\\s*${name}:\\s*"([^"]*)"`).exec(block);
  return m ? m[1] : "";
}

function readContent(block) {
  // Respeita crase escapada; o escape em si é rejeitado depois (padrão editorial: nada de crase).
  const m = /\n\s*content:\s*`((?:\\[\s\S]|[^`\\])*)`/.exec(block);
  return m ? m[1] : "";
}

function decodeEntities(text) {
  return text
    .replace(/&#x([0-9a-f]+);?/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);?/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&colon;/gi, ":")
    .replace(/&tab;|&newline;/gi, "")
    .replace(/&amp;/gi, "&");
}

/** Host (minúsculo) de uma URL http(s); "" se não for URL válida. */
function hostOf(href) {
  try {
    const u = new URL(href);
    return u.protocol === "https:" || u.protocol === "http:" ? u.hostname.toLowerCase() : "";
  } catch {
    return "";
  }
}

function extractArticles() {
  const items = [];
  let files;
  try {
    files = readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".ts") && f !== "index.ts");
  } catch (e) {
    errors.push(`artigos: não consegui ler ${ARTICLES_DIR}: ${e.message}`);
    return items;
  }
  for (const file of files) {
    const src = readFileSync(resolve(ARTICLES_DIR, file), "utf8");
    const fileSlug = file.slice(0, -3);
    if (!/export const article: Article = \{/.test(src)) {
      errors.push(`artigos/${fileSlug}: arquivo precisa exportar \`export const article: Article = { ... }\``);
      continue;
    }
    const slug = readField(src, "slug");
    if (slug !== fileSlug) errors.push(`artigos/${fileSlug}: nome do arquivo difere do slug "${slug}"`);
    items.push({
      kind: "artigos",
      slug: fileSlug,
      date: readField(src, "date"),
      updated: readField(src, "updated"),
      title: readField(src, "title"),
      excerpt: readField(src, "excerpt"),
      articleKind: readField(src, "kind"),
      category: readField(src, "category"),
      historyYear: /\n\s*historyYear:\s*\d{4}/.test(src),
      products: (() => {
        const m = /\n\s*products:\s*\[([^\]]*)\]/.exec(src);
        return m ? [...m[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]) : [];
      })(),
      hasKeyPoints: /\n\s*keyPoints:\s*\[/.test(src),
      hasFaq: /\n\s*faq:\s*\[/.test(src),
      hasReview: /\n\s*review:\s*\{/.test(src),
      reviewScore: (() => {
        const m = /\n\s*review:\s*\{[\s\S]*?\n\s*score:\s*([\d.]+)/.exec(src);
        return m ? Number(m[1]) : null;
      })(),
      content: readContent(src),
      raw: src,
    });
  }
  return items;
}

function extractNews() {
  const items = [];
  let files;
  try {
    files = readdirSync(NEWS_DIR).filter((f) => f.endsWith(".ts") && f !== "index.ts");
  } catch (e) {
    errors.push(`noticias: não consegui ler ${NEWS_DIR}: ${e.message}`);
    return items;
  }
  for (const file of files) {
    const src = readFileSync(resolve(NEWS_DIR, file), "utf8");
    const fileSlug = file.slice(0, -3);
    if (!/export const item: NewsItem = \{/.test(src)) {
      errors.push(`noticias/${fileSlug}: arquivo precisa exportar \`export const item: NewsItem = { ... }\``);
      continue;
    }
    const slug = readField(src, "slug");
    if (slug !== fileSlug) errors.push(`noticias/${fileSlug}: nome do arquivo difere do slug "${slug}"`);
    items.push({
      kind: "noticias",
      slug: fileSlug,
      date: readField(src, "date"),
      title: readField(src, "title"),
      summary: readField(src, "summary"),
      content: readContent(src),
      sourceUrl: readField(src, "sourceUrl"),
      topic: readField(src, "topic"),
      publishedAt: readField(src, "publishedAt"),
      raw: src,
    });
  }
  return items;
}

function extractProducts() {
  const items = [];
  let files;
  try {
    files = readdirSync(PRODUCTS_DIR).filter((f) => f.endsWith(".ts") && f !== "index.ts");
  } catch (e) {
    errors.push(`produtos: não consegui ler ${PRODUCTS_DIR}: ${e.message}`);
    return items;
  }
  for (const file of files) {
    const src = readFileSync(resolve(PRODUCTS_DIR, file), "utf8");
    const fileSlug = file.slice(0, -3);
    if (!/export const product: Product = \{/.test(src)) {
      errors.push(`produtos/${fileSlug}: arquivo precisa exportar \`export const product: Product = { ... }\``);
      continue;
    }
    items.push({
      slug: fileSlug,
      fieldSlug: readField(src, "slug"),
      name: readField(src, "name"),
      category: readField(src, "category"),
      brand: readField(src, "brand"),
      shortDescription: readField(src, "shortDescription"),
      store: readField(src, "store"),
      asin: readField(src, "asin"),
      shopee: (() => {
        const m = /\n\s*shopee:\s*\{([^}]*)\}/.exec(src);
        if (!m) return null;
        const num = (k) => Number((new RegExp(`${k}:\\s*(\\d+)`).exec(m[1]) ?? [])[1] ?? 0);
        const str = (k) => (new RegExp(`${k}:\\s*"([^"]*)"`).exec(m[1]) ?? [])[1] ?? "";
        return { itemId: num("itemId"), shopId: num("shopId"), affiliateUrl: str("affiliateUrl"), sellerName: str("sellerName") };
      })(),
      priceMin: Number((/\n\s*priceMin:\s*(\d+)/.exec(src) ?? [])[1] ?? 0),
      priceMax: Number((/\n\s*priceMax:\s*(\d+)/.exec(src) ?? [])[1] ?? 0),
      date: readField(src, "date"),
      priceCheckedAt: readField(src, "priceCheckedAt"),
      imageUrl: (/\n\s*image:\s*\{[^}]*?url:\s*"([^"]+)"/.exec(src) ?? [])[1] ?? "",
      relatedArticles: (() => {
        const m = /\n\s*relatedArticles:\s*\[([^\]]*)\]/.exec(src);
        return m ? [...m[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]) : [];
      })(),
      raw: src,
    });
  }
  return items;
}

function checkProducts(products, articleSlugs) {
  const dateRe = /^\d{4}-\d{2}-\d{2}$/;
  const seenAsin = new Map();
  const seenItem = new Map();
  for (const p of products) {
    const where = `produtos/${p.slug}`;
    if (p.fieldSlug !== p.slug) errors.push(`${where}: nome do arquivo difere do slug "${p.fieldSlug}"`);
    if (!p.name) errors.push(`${where}: sem name`);
    if (!PRODUCT_CATEGORIES.has(p.category)) errors.push(`${where}: category inválida "${p.category}"`);
    const store = p.store || "amazon";
    if (!PRODUCT_STORES.has(store)) errors.push(`${where}: store inválida "${p.store}" (amazon ou shopee)`);
    else if (store === "amazon") {
      if (!/^[A-Z0-9]{10}$/.test(p.asin)) errors.push(`${where}: asin inválido "${p.asin}" (10 caracteres, A-Z e 0-9)`);
      else if (seenAsin.has(p.asin)) errors.push(`${where}: asin repetido (já em produtos/${seenAsin.get(p.asin)})`);
      else seenAsin.set(p.asin, p.slug);
      if (p.shopee) errors.push(`${where}: produto da Amazon não pode ter o bloco shopee`);
    } else {
      if (p.asin) errors.push(`${where}: produto da Shopee não tem asin`);
      const sh = p.shopee;
      if (!sh) errors.push(`${where}: produto da Shopee precisa do bloco shopee { itemId, shopId, affiliateUrl, sellerName }`);
      else {
        if (!(sh.itemId > 0)) errors.push(`${where}: shopee.itemId inválido`);
        else if (seenItem.has(sh.itemId)) errors.push(`${where}: shopee.itemId repetido (já em produtos/${seenItem.get(sh.itemId)})`);
        else seenItem.set(sh.itemId, p.slug);
        if (!(sh.shopId > 0)) errors.push(`${where}: shopee.shopId inválido`);
        if (!SHOPEE_SHORT_LINK_RE.test(sh.affiliateUrl)) errors.push(`${where}: shopee.affiliateUrl precisa ser o link curto https://s.shopee.com.br/... (use scripts/shopee.mjs link)`);
        if (!sh.sellerName) errors.push(`${where}: shopee.sellerName vazio`);
      }
      // Marketplace de vendedores independentes: nunca carteira de hardware (nem pelo nome, marca ou descrição).
      if (p.category === "hardware-wallets") errors.push(`${where}: carteira de hardware não entra na loja pela Shopee (só Amazon, de vendedor oficial)`);
      for (const [label, text] of [["name", p.name], ["brand", p.brand], ["shortDescription", p.shortDescription]]) {
        if (HARDWARE_WALLET_RE.test(text)) errors.push(`${where}: ${label} cita carteira de hardware (produto da Shopee não pode ser carteira de hardware)`);
      }
      // Foto do anúncio baixada por shopee.mjs image: arquivo próprio, nunca link remoto.
      if (!/^\/images\/products\/[a-z0-9-]+\.(jpg|png|webp)$/.test(p.imageUrl)) {
        errors.push(`${where}: produto da Shopee precisa da foto própria em /images/products/<slug>.jpg|png|webp (use scripts/shopee.mjs image)`);
      }
      if (!(p.priceMin > 0) || !(p.priceMax > 0) || p.priceMin > p.priceMax) errors.push(`${where}: produto da Shopee precisa de priceMin e priceMax (min <= max, em reais)`);
      if (!dateRe.test(p.priceCheckedAt)) errors.push(`${where}: produto da Shopee precisa de priceCheckedAt (AAAA-MM-DD)`);
      else if (p.priceCheckedAt > TODAY) errors.push(`${where}: priceCheckedAt no futuro`);
    }
    // Faixa de preço: descartar se max > 3 x min (provável anúncio misturando variações ou outro item). Vale para as duas lojas.
    if (p.priceMin && p.priceMax && p.priceMax > 3 * p.priceMin) errors.push(`${where}: faixa de preço com max > 3 x min`);
    if (!dateRe.test(p.date)) errors.push(`${where}: date inválida "${p.date}"`);
    else if (p.date > TODAY) errors.push(`${where}: data no futuro`);
    if (!/^(\/images\/|https:\/\/)/.test(p.imageUrl)) errors.push(`${where}: image.url precisa ser /images/... ou https`);
    else if (p.imageUrl.startsWith("/images/")) {
      const file = resolve(ROOT, "public", p.imageUrl.slice(1));
      if (!existsSync(file)) errors.push(`${where}: foto ${p.imageUrl} não existe em public/`);
      else if (statSync(file).size < MIN_PRODUCT_IMAGE_BYTES) errors.push(`${where}: foto ${p.imageUrl} com menos de 15 KB`);
    }
    if (/—/.test(p.raw)) errors.push(`${where}: travessão (—) no texto`);
    if (/R\$\s?\d/.test(p.raw.replace(/priceMin|priceMax/g, ""))) {
      warnings.push(`${where}: valor em R$ escrito no texto do produto (use priceMin/priceMax, a página monta a faixa)`);
    }
    for (const a of p.relatedArticles) {
      if (!articleSlugs.has(a)) errors.push(`${where}: relatedArticles aponta para artigo inexistente "${a}"`);
    }
  }
}

// Rotas fixas do site (pastas de app/ com page.tsx, sem segmento dinâmico) e os slugs das
// rotas dinâmicas que não são artigo, notícia nem produto. Link interno para fora disso é erro.
function staticRoutes(dir = resolve(ROOT, "app"), prefix = "") {
  const out = new Set();
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.isFile() && /^(page|route)\.(tsx?|jsx?)$/.test(e.name)) out.add(prefix || "/");
    if (!e.isDirectory() || e.name.startsWith("[") || e.name.startsWith("_") || e.name === "api") continue;
    const seg = e.name.startsWith("(") ? "" : `/${e.name}`;
    for (const r of staticRoutes(resolve(dir, e.name), prefix + seg)) out.add(r);
  }
  return out;
}

function slugsIn(file) {
  return new Set([...readFileSync(resolve(ROOT, file), "utf8").matchAll(/^\s*slug:\s*"([^"]+)"/gm)].map((m) => m[1]));
}

const STATIC_ROUTES = staticRoutes();
const COIN_SLUGS = slugsIn("content/coins.ts");
const GLOSSARY_SLUGS = slugsIn("content/glossario.ts");

/** null se o caminho interno existe; senão, o motivo. */
function internalRouteProblem(href) {
  const [pathPart, hash] = href.split("#");
  const path = pathPart.split("?")[0].replace(/\/$/, "") || "/";
  if (STATIC_ROUTES.has(path)) {
    if (path === "/glossario" && hash && !GLOSSARY_SLUGS.has(hash) && !hash.startsWith("letra-")) return `verbete inexistente no glossário (#${hash})`;
    return null;
  }
  let m;
  if ((m = path.match(/^\/categoria\/([^/]+)(?:\/pagina\/\d+)?$/))) return CATEGORIES.has(m[1]) ? null : "categoria inexistente";
  if ((m = path.match(/^\/moedas\/([^/]+)$/))) return COIN_SLUGS.has(m[1]) ? null : "moeda sem ficha em content/coins.ts";
  if (/^\/(artigos|noticias)\/pagina\/\d+$/.test(path)) return null;
  return "rota inexistente";
}

/** Valores da credencial da Shopee que existem neste computador (ambiente e ~/.config), só para procurar vazamento. */
function localSecretValues() {
  const values = new Set();
  const add = (v) => {
    if (v && v.length >= 8) values.add(v);
  };
  add(process.env.SHOPEE_APP_ID?.trim());
  add(process.env.SHOPEE_SECRET?.trim());
  const file = join(homedir(), ".config", "blogdobitcoin", "shopee.env");
  if (existsSync(file)) {
    for (const line of readFileSync(file, "utf8").split(/\r?\n/)) {
      const m = /^\s*(?:export\s+)?SHOPEE_(?:APP_ID|SECRET)\s*=\s*(.*?)\s*$/.exec(line);
      if (m) add(m[1].replace(/^(["'])(.*)\1$/, "$2").replace(/\s+#.*$/, ""));
    }
  }
  return [...values];
}

/**
 * Credencial da Shopee nunca vai para o repositório: só variável de ambiente ou ~/.config (fora do repo).
 * Dois jeitos de pegar: o padrão `SHOPEE_SECRET=valor` e o valor real da credencial (quando ela existe aqui)
 * em qualquer arquivo de texto, seja qual for a extensão. A mensagem nunca imprime o valor.
 */
function checkSecrets() {
  const secretRe = /SHOPEE_(?:SECRET|APP_ID)\s*[=:]\s*["']?[A-Za-z0-9]{8,}/;
  const values = localSecretValues().map((v) => Buffer.from(v));
  const skipDirs = new Set(["node_modules", ".next", ".git", "out"]);
  const binary = /\.(jpe?g|png|webp|gif|avif|ico|woff2?|ttf|otf|pdf|mp4|webm|zip|gz)$/i;
  const walk = (dir) => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      if (skipDirs.has(e.name)) continue;
      const full = resolve(dir, e.name);
      if (e.isDirectory()) {
        walk(full);
        continue;
      }
      if (!e.isFile() || binary.test(e.name) || e.name === "tsconfig.tsbuildinfo") continue;
      if (statSync(full).size > 5 * 1024 * 1024) continue;
      const buf = readFileSync(full);
      const rel = full.slice(ROOT.length + 1);
      if (values.some((v) => buf.includes(v))) errors.push(`segredo: o valor da credencial da Shopee está escrito em ${rel} (apague e use só variável de ambiente)`);
      else if (secretRe.test(buf.toString("utf8"))) errors.push(`segredo: credencial da Shopee escrita em ${rel} (use só variável de ambiente)`);
    }
  };
  walk(ROOT);
}

function check() {
  checkSecrets();
  const articles = extractArticles();
  const news = extractNews();
  const products = extractProducts();
  const productSlugs = new Set(products.map((p) => p.slug));
  const articleSlugs = new Set(articles.map((a) => a.slug));
  const newsSlugs = new Set(news.map((n) => n.slug));

  for (const [label, list] of [["artigos", articles], ["noticias", news]]) {
    const seen = new Map();
    for (const it of list) seen.set(it.slug, (seen.get(it.slug) ?? 0) + 1);
    for (const [slug, n] of seen) if (n > 1) errors.push(`${label}/${slug}: slug duplicado (${n}x)`);
  }

  const slugRe = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  const dateRe = /^\d{4}-\d{2}-\d{2}$/;

  for (const it of [...articles, ...news]) {
    const where = `${it.kind}/${it.slug}`;
    const strict =
      it.kind === "artigos" && (it.date >= STRICT_FROM_DATE || (it.updated && it.updated >= STRICT_FROM_DATE));
    const strictNews = it.kind === "noticias" && it.date >= NEWS_STRICT_FROM_DATE;

    if (!slugRe.test(it.slug)) {
      errors.push(`${where}: slug com caracteres inválidos (use só a-z, 0-9 e hífen, sem acentos)`);
    }
    if (it.slug.length > 90) warnings.push(`${where}: slug com ${it.slug.length} caracteres (ideal < 90)`);
    if (!dateRe.test(it.date)) errors.push(`${where}: date inválida "${it.date}" (use AAAA-MM-DD)`);
    else if (it.date > TODAY) errors.push(`${where}: data no futuro (${it.date} > hoje ${TODAY} em America/Sao_Paulo)`);
    if (it.updated && it.updated < it.date) errors.push(`${where}: updated (${it.updated}) anterior a date (${it.date})`);
    if (!it.title) errors.push(`${where}: sem title`);
    if (it.title.length > 70) warnings.push(`${where}: title com ${it.title.length} caracteres (Google corta em ~60-70)`);
    if (it.kind === "artigos") {
      if (!it.excerpt) errors.push(`${where}: sem excerpt`);
      else if (it.excerpt.length > 180) warnings.push(`${where}: excerpt com ${it.excerpt.length} caracteres (meta description ideal < 160)`);
      if (it.articleKind && it.articleKind !== "guia" && it.articleKind !== "review") {
        errors.push(`${where}: kind inválido "${it.articleKind}"`);
      }
      if (it.articleKind === "review" && !it.hasReview) errors.push(`${where}: kind "review" sem o objeto review`);
      if (!CATEGORIES.has(it.category)) errors.push(`${where}: category inválida "${it.category}"`);
      if (it.category === "historia" && !it.historyYear) errors.push(`${where}: Memórias do Bitcoin precisa de historyYear`);
      for (const ps of it.products) {
        if (!productSlugs.has(ps)) errors.push(`${where}: products aponta para produto inexistente "${ps}"`);
      }
      if (it.reviewScore !== null && (it.reviewScore < 0 || it.reviewScore > 10)) {
        errors.push(`${where}: review.score fora de 0-10`);
      }
    }
    if (it.kind === "noticias") {
      if (!/^https:\/\//.test(it.sourceUrl)) errors.push(`${where}: sourceUrl precisa ser https`);
      if (!it.summary) errors.push(`${where}: sem summary`);
      if (it.date >= STRICT_FROM_DATE && !it.content) errors.push(`${where}: notícia sem content`);
      if (it.topic && !NEWS_TOPICS.has(it.topic)) errors.push(`${where}: topic inválido "${it.topic}"`);
      if (!it.topic) warnings.push(`${where}: notícia sem topic`);
      if (it.publishedAt && !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2})?-03:00$/.test(it.publishedAt)) {
        errors.push(`${where}: publishedAt fora do formato AAAA-MM-DDTHH:MM:SS-03:00`);
      }
    }

    if (it.kind === "artigos" && !it.content) {
      errors.push(`${where}: artigo sem content`);
      continue;
    }
    if (!it.content) continue;

    if (/\\/.test(it.content)) errors.push(`${where}: barra invertida/crase escapada dentro de content (não use crase nem \\ no HTML)`);
    const decoded = decodeEntities(it.content);
    for (const { re, label } of FORBIDDEN) {
      if (re.test(it.content) || re.test(decoded)) errors.push(`${where}: HTML proibido (${label})`);
    }
    // Travessão: proibido pelo padrão editorial (marca de texto de máquina).
    const editorial = [it.title, it.excerpt ?? "", it.summary ?? "", it.content].join("\n");
    if (/—/.test(editorial)) {
      const msg = `${where}: travessão (—) no texto; use dois-pontos, vírgula, parênteses ou ponto`;
      if (strict || (it.kind === "noticias" && it.date >= STRICT_FROM_DATE)) errors.push(msg);
      else warnings.push(msg);
    }

    const tagRe = /<\s*\/?\s*([a-zA-Z][a-zA-Z0-9]*)\b/g;
    let t;
    const badTags = new Set();
    while ((t = tagRe.exec(it.content))) {
      const tag = t[1].toLowerCase();
      if (!ALLOWED_TAGS.has(tag)) badTags.add(tag);
    }
    if (badTags.size) errors.push(`${where}: tag(s) não permitida(s): ${[...badTags].join(", ")}`);

    if (/<h1\b/i.test(it.content)) errors.push(`${where}: <h1> no corpo (o título já é o h1)`);

    const hrefRe = /href\s*=\s*["']([^"']*)["']/g;
    let h;
    let external = 0;
    const internalTargets = new Set();
    while ((h = hrefRe.exec(it.content))) {
      const href = h[1].trim();
      if (href.startsWith("/artigos/")) {
        const target = href.slice("/artigos/".length).split(/[#?]/)[0].replace(/\/$/, "");
        if (target === it.slug && it.kind === "artigos") warnings.push(`${where}: link para si mesmo`);
        if (!articleSlugs.has(target)) errors.push(`${where}: link interno quebrado -> ${href}`);
        internalTargets.add(href);
      } else if (href.startsWith("/noticias/")) {
        const target = href.slice("/noticias/".length).split(/[#?]/)[0].replace(/\/$/, "");
        if (!newsSlugs.has(target)) errors.push(`${where}: link interno quebrado -> ${href}`);
        internalTargets.add(href);
      } else if (href.startsWith("/loja/")) {
        const target = href.slice("/loja/".length).split(/[#?]/)[0].replace(/\/$/, "");
        if (target && !productSlugs.has(target)) errors.push(`${where}: link para produto inexistente -> ${href}`);
        internalTargets.add(href);
      } else if (href.startsWith("/")) {
        const problem = internalRouteProblem(href);
        if (problem) errors.push(`${where}: link interno quebrado (${problem}) -> ${href}`);
        internalTargets.add(href.split("#")[0].replace(/\/$/, "") || "/");
      } else if (/^https:\/\//i.test(href)) {
        external++;
      } else if (/^http:\/\//i.test(href)) {
        errors.push(`${where}: link externo sem https -> ${href}`);
      } else if (href.startsWith("#") || href.startsWith("mailto:")) {
        // ok
      } else {
        errors.push(`${where}: href suspeito -> ${href}`);
      }
    }

    // Links de afiliado: sempre conferidos pelo host (new URL) no conteúdo decodificado, nunca por pedaço de texto.
    // Uma loja por artigo; Shopee só com o link curto de um produto da Shopee listado em `products` do próprio artigo.
    const cited = it.kind === "artigos" ? it.products.map((s) => products.find((p) => p.slug === s)).filter(Boolean) : [];
    const citedStores = new Set(cited.map((p) => p.store || "amazon"));
    if (citedStores.size > 1) errors.push(`${where}: artigo mistura produtos da Amazon e da Shopee (uma loja por artigo)`);
    const articleStore = citedStores.has("shopee") ? "shopee" : "amazon";
    const citedShopee = new Set(cited.filter((p) => (p.store || "amazon") === "shopee" && p.shopee).map((p) => p.shopee.affiliateUrl));
    const rawDecoded = it.raw ? decodeEntities(it.raw) : "";
    for (const m of rawDecoded.matchAll(/https?:\/\/[^\s"'`<>)\\]+/gi)) {
      if (!SHOPEE_HOST_RE.test(hostOf(m[0]))) continue;
      if (!SHOPEE_SHORT_LINK_RE.test(m[0])) errors.push(`${where}: link da Shopee que não é o link curto de afiliado -> ${m[0]}`);
      else if (!citedShopee.has(m[0])) errors.push(`${where}: link da Shopee que não é de um produto da Shopee listado em products -> ${m[0]}`);
    }
    const anchorRe = /<a\b([^>]*)>/gi;
    let an;
    while ((an = anchorRe.exec(decoded))) {
      const href = (/href\s*=\s*["']([^"']*)["']/i.exec(an[1]) ?? [])[1] ?? "";
      const host = hostOf(href);
      const sponsored = /\brel\s*=\s*["'][^"']*sponsored/i.test(an[1]);
      if (SHOPEE_HOST_RE.test(host)) {
        if (!sponsored) errors.push(`${where}: link da Shopee sem rel="sponsored ..."`);
      } else if (AMAZON_HOST_RE.test(host)) {
        if (!AMAZON_BR_HOST_RE.test(host)) errors.push(`${where}: link da Amazon que não é amazon.com.br (a tag de afiliado não dá para conferir) -> ${href}`);
        else if (!href.includes(`tag=${AMAZON_TAG}`)) errors.push(`${where}: link da Amazon sem tag=${AMAZON_TAG} -> ${href}`);
        if (!sponsored) errors.push(`${where}: link da Amazon sem rel="sponsored ..."`);
        if (articleStore === "shopee") errors.push(`${where}: link da Amazon em artigo de produtos da Shopee -> ${href}`);
      }
    }
    // Botão de compra: texto, rel e target sempre iguais, e a loja do link é a loja dos produtos do artigo.
    const buyRe = /<div class="buy-btn">\s*<a\b([^>]*)>([\s\S]*?)<\/a>/gi;
    let bb;
    let buyCount = 0;
    while ((bb = buyRe.exec(decoded))) {
      buyCount++;
      const href = (/href\s*=\s*["']([^"']*)["']/i.exec(bb[1]) ?? [])[1] ?? "";
      const host = hostOf(href);
      const text = bb[2].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
      const store = SHOPEE_HOST_RE.test(host) ? "shopee" : AMAZON_BR_HOST_RE.test(host) ? "amazon" : null;
      if (!store) {
        errors.push(`${where}: botão de compra com link que não é da Amazon (amazon.com.br) nem da Shopee -> ${href}`);
        continue;
      }
      if (store !== articleStore) errors.push(`${where}: botão de compra da ${store === "shopee" ? "Shopee" : "Amazon"} em artigo de produtos da ${articleStore === "shopee" ? "Shopee" : "Amazon"}`);
      if (text !== CTA[store]) errors.push(`${where}: botão de compra com texto "${text}" (use exatamente "${CTA[store]}")`);
      if (!/\btarget\s*=\s*["']_blank["']/i.test(bb[1])) errors.push(`${where}: botão de compra sem target="_blank"`);
      const rel = (/\brel\s*=\s*["']([^"']*)["']/i.exec(bb[1]) ?? [])[1] ?? "";
      for (const need of ["sponsored", "noopener", "noreferrer"]) {
        if (!rel.split(/\s+/).includes(need)) errors.push(`${where}: botão de compra sem rel="${need}"`);
      }
    }
    if (it.kind === "artigos" && it.category === "cripto-indica") {
      if (cited.length === 0) errors.push(`${where}: artigo de Cripto Indica sem produtos em products (todo produto citado existe em content/products/)`);
      if (buyCount < MIN_BUY_BUTTONS) errors.push(`${where}: só ${buyCount} botão(ões) de compra (mínimo ${MIN_BUY_BUTTONS} por artigo de Cripto Indica)`);
      const cta = (/\n\s*ctaLabel:\s*"([^"]*)"/.exec(it.raw) ?? [])[1];
      if (cta && `${cta} ↗` !== CTA[articleStore]) errors.push(`${where}: review.ctaLabel "${cta}" (use "${CTA[articleStore].replace(" ↗", "")}")`);
    }

    // Links externos precisam de rel seguro (o renderizador também força, mas o conteúdo deve vir certo).
    const extAnchorRe = /<a\b[^>]*href\s*=\s*["']https?:\/\/[^"']*["'][^>]*>/gi;
    let ea;
    while ((ea = extAnchorRe.exec(it.content))) {
      const tag = ea[0];
      if (!/\brel\s*=\s*["'][^"']*noopener/i.test(tag)) {
        warnings.push(`${where}: link externo sem rel="noopener" -> ${tag.slice(0, 80)}`);
      }
    }

    const srcRe = /<img[^>]*\ssrc\s*=\s*["']([^"']*)["']/gi;
    let s;
    while ((s = srcRe.exec(it.content))) {
      const src = s[1].trim();
      if (!/^(https:\/\/(images\.pexels\.com|pixabay\.com|cdn\.pixabay\.com|upload\.wikimedia\.org)\/|\/)/i.test(src)) {
        errors.push(`${where}: <img src> fora dos domínios permitidos -> ${src}`);
      }
    }
    const imgNoAlt = /<img\b(?![^>]*\balt\s*=)[^>]*>/i;
    if (imgNoAlt.test(it.content)) errors.push(`${where}: <img> sem alt`);

    if (it.kind === "artigos" || it.kind === "noticias") {
      const words = it.content.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
      const h2s = (it.content.match(/<h2\b/gi) ?? []).length;
      const uniqueInternal = internalTargets.size;
      const issues = [];
      if (words < MIN_WORDS_STRICT) issues.push(`só ${words} palavras (mínimo ${MIN_WORDS_STRICT})`);
      if (h2s < 3) issues.push(`só ${h2s} <h2>`);
      if (it.kind === "artigos") {
        if (uniqueInternal < MIN_INTERNAL_LINKS) issues.push(`${uniqueInternal} link(s) interno(s) distinto(s) (mínimo ${MIN_INTERNAL_LINKS})`);
        if (external < 1) issues.push("nenhum link externo para fonte");
        if (!it.hasKeyPoints) issues.push("sem keyPoints");
        if (!it.hasFaq) issues.push("sem faq");
      }
      if (issues.length) {
        const msg = `${where}: ${issues.join("; ")}`;
        const isStrict = it.kind === "artigos" ? strict : strictNews;
        if (isStrict) errors.push(msg);
        else if (words < MIN_WORDS_WARN || (it.kind === "artigos" && uniqueInternal < 3)) warnings.push(msg);
      }
    }
  }

  checkProducts(products, articleSlugs);
  return { articles: articles.length, news: news.length, products: products.length };
}

const stats = check();

for (const w of warnings) console.warn(`aviso: ${w}`);
if (errors.length) {
  for (const e of errors) console.error(`ERRO: ${e}`);
  console.error(`\ncheck-content: ${errors.length} erro(s) encontrado(s). Corrija antes de publicar.`);
  process.exit(1);
}
console.log(
  `check-content: ok (${stats.articles} artigos, ${stats.news} notícias, ${stats.products} produtos, ${warnings.length} aviso(s))`
);

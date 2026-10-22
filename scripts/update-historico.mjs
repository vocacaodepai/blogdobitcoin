#!/usr/bin/env node
/**
 * Gera public/data/btc-historico.json: fechamento MENSAL do Bitcoin em dólar
 * (média de mercado da blockchain.com) e o dólar PTAX de venda do último dia
 * útil do mês (Banco Central do Brasil), com o preço em reais calculado pelos
 * dois. Alimenta as calculadoras (DCA, "se eu tivesse investido") e o gráfico
 * "Tudo" de /bitcoin. Roda manualmente ou na rotina de manutenção:
 *
 *   npm run data:historico
 *
 * Fontes públicas, sem chave: api.blockchain.info/charts e olinda.bcb.gov.br.
 */
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const ROOT = resolve(new URL("..", import.meta.url).pathname);
const OUT = resolve(ROOT, "public/data/btc-historico.json");

function mmddyyyy(d) {
  return `${String(d.getUTCMonth() + 1).padStart(2, "0")}-${String(d.getUTCDate()).padStart(2, "0")}-${d.getUTCFullYear()}`;
}

async function getJson(url) {
  for (let i = 0; i < 4; i++) {
    try {
      const res = await fetch(url, { headers: { "User-Agent": "BlogDoBitcoin/1.0 (https://www.blogdobitcoin.com.br)" } });
      if (res.ok) return res.json();
      console.warn(`update-historico: HTTP ${res.status} em ${url}`);
    } catch (e) {
      console.warn(`update-historico: falha em ${url}: ${e.message}`);
    }
    await new Promise((r) => setTimeout(r, 2000 * (i + 1)));
  }
  throw new Error(`não consegui baixar ${url}`);
}

const btc = await getJson("https://api.blockchain.info/charts/market-price?timespan=all&sampled=false&metadata=false&format=json");
const byMonthUsd = new Map();
for (const { x, y } of btc.values) {
  if (!(y > 0)) continue;
  const d = new Date(x * 1000);
  const key = `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}`;
  byMonthUsd.set(key, { usd: y, day: d.toISOString().slice(0, 10) }); // último valor do mês
}

const start = new Date(Date.UTC(2010, 0, 1));
const end = new Date();
const ptaxUrl =
  "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)" +
  `?@dataInicial='${mmddyyyy(start)}'&@dataFinalCotacao='${mmddyyyy(end)}'&$format=json&$select=cotacaoVenda,dataHoraCotacao&$top=10000`;
const ptax = await getJson(ptaxUrl);
const byMonthFx = new Map();
for (const r of ptax.value) {
  const key = r.dataHoraCotacao.slice(0, 7);
  byMonthFx.set(key, r.cotacaoVenda); // último dia útil do mês (dados vêm em ordem)
}

const months = [...byMonthUsd.keys()].sort();
const rows = [];
let lastFx = null;
for (const m of months) {
  const fx = byMonthFx.get(m) ?? lastFx;
  if (fx == null) continue;
  lastFx = fx;
  const { usd, day } = byMonthUsd.get(m);
  rows.push([m, Number(usd.toFixed(usd < 1 ? 4 : 2)), Number(fx.toFixed(4)), Number((usd * fx).toFixed(usd * fx < 1 ? 4 : 2)), day]);
}

const out = {
  generatedAt: new Date().toISOString(),
  description:
    "Fechamento mensal do Bitcoin: preço médio de mercado em dólar (blockchain.com) no último dia disponível do mês e dólar PTAX de venda (Banco Central do Brasil) do último dia útil do mês. Preço em reais = dólar x PTAX.",
  sources: [
    { label: "Blockchain.com, Market Price (USD)", url: "https://www.blockchain.com/explorer/charts/market-price" },
    { label: "Banco Central do Brasil, PTAX", url: "https://www.bcb.gov.br/estabilidadefinanceira/historicocotacoes" },
  ],
  columns: ["mes", "usd", "ptax", "brl", "dia"],
  rows,
};
writeFileSync(OUT, JSON.stringify(out));
console.log(`update-historico: ${rows.length} meses (${rows[0]?.[0]} a ${rows.at(-1)?.[0]}) em public/data/btc-historico.json`);

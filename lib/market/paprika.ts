/**
 * Ranking de mercado pela API pública da CoinPaprika (sem chave, CORS
 * liberado, cotações em real e dólar). No servidor, a mesma URL é usada por
 * todas as páginas (/mercado, /moedas/*, home) com cache de 5 minutos, então
 * o Next faz uma chamada só a cada 5 minutos para o site inteiro.
 */
import { fetchWithTimeout } from "./http";

export const PAPRIKA_API = "https://api.coinpaprika.com/v1";
/** URL única do ranking (não mude por página: o cache compartilhado depende dela). */
export const PAPRIKA_TICKERS_URL = `${PAPRIKA_API}/tickers?quotes=BRL,USD&limit=200`;

export type Quote = {
  price: number;
  volume_24h: number;
  market_cap: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  percent_change_30d: number;
  percent_change_1y: number;
  ath_price: number | null;
  ath_date: string | null;
  percent_from_price_ath: number | null;
};

export type PaprikaTicker = {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  total_supply: number;
  max_supply: number;
  last_updated: string;
  quotes: { BRL: Quote; USD: Quote };
};

/** Moeda no formato usado pelos componentes (enxuto, cabe no HTML da página). */
export type CoinRow = {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  priceBrl: number;
  priceUsd: number;
  marketCapBrl: number;
  volumeBrl: number;
  ch1h: number;
  ch24h: number;
  ch7d: number;
  ch30d: number;
  ch1y: number;
  /** Máxima histórica em dólar (a "em real" da CoinPaprika é o topo em dólar vezes o câmbio de hoje). */
  athUsd: number | null;
  athDate: string | null;
  fromAth: number | null;
  /** Oferta total (a CoinPaprika gratuita não informa a circulante). */
  supply: number;
  maxSupply: number;
  /** Stablecoin (atrelada a moeda fiduciária) ou token embrulhado/em staking de outra moeda. */
  pegged: boolean;
};

export type GlobalStats = {
  marketCapUsd: number;
  volumeUsd: number;
  btcDominance: number;
  marketCapChange24h: number;
  coins: number;
};

const PEGGED_IDS = new Set([
  "usdt-tether", "usdc-usd-coin", "dai-dai", "usds-usds", "susds-susds", "usde-ethena-usde", "usd1-usd1",
  "usdg-global-dollar", "fdusd-first-digital-usd", "pyusd-paypal-usd", "tusd-trueusd", "busd-binance-usd",
  "steth-lido-staked-ether", "wsteth-wrapped-liquid-staked-ether-20", "wbtc-wrapped-bitcoin",
  "cbbtc-coinbase-wrapped-btc", "weth-weth", "weeth-wrapped-eeth", "reth-rocket-pool-eth", "bsc-usd-binance-bridged-usdt-bnb-smart-chain",
  "xaut-tether-gold", "paxg-pax-gold", "eurc-euro-coin", "usdd-usdd", "frax-frax", "lbtc-lombard-staked-btc",
]);

function isPegged(t: PaprikaTicker): boolean {
  if (PEGGED_IDS.has(t.id)) return true;
  const name = t.name.toLowerCase();
  if (/\b(wrapped|staked|bridged)\b/.test(name)) return true;
  // Stablecoin de dólar (inclusive as que rendem juros, como as "syrup" e "s"): nome com USD/dólar
  // e preço perto de 1 dólar.
  const u = t.quotes.USD;
  if (/usd|dollar|dai|eur/i.test(`${t.symbol} ${t.name}`) && Math.abs(u.price - 1) < 0.3) return true;
  return Math.abs(u.price - 1) < 0.02 && Math.abs(u.percent_change_7d) < 1.5;
}

export function toRow(t: PaprikaTicker): CoinRow {
  const b = t.quotes.BRL;
  return {
    id: t.id,
    name: t.name,
    symbol: t.symbol,
    rank: t.rank,
    priceBrl: b.price,
    priceUsd: t.quotes.USD.price,
    marketCapBrl: b.market_cap,
    volumeBrl: b.volume_24h,
    ch1h: b.percent_change_1h,
    ch24h: b.percent_change_24h,
    ch7d: b.percent_change_7d,
    // O plano gratuito da CoinPaprika não traz 30 dias e 1 ano de verdade (vem 0 em dólar);
    // esses dois períodos chegam da CoinGecko no navegador (lib/market/coingecko.ts).
    ch30d: Number.NaN,
    ch1y: Number.NaN,
    athUsd: t.quotes.USD.ath_price,
    athDate: t.quotes.USD.ath_date,
    fromAth: b.percent_from_price_ath,
    supply: t.total_supply,
    maxSupply: t.max_supply,
    pegged: isPegged(t),
  };
}

/** Logo da moeda (CDN da CoinPaprika). */
export function coinLogo(id: string): string {
  return `https://static.coinpaprika.com/coin/${id}/logo.png`;
}

export async function fetchMarket(init?: RequestInit): Promise<CoinRow[]> {
  const res = await fetchWithTimeout(PAPRIKA_TICKERS_URL, init);
  if (!res.ok) throw new Error(`coinpaprika ${res.status}`);
  const data = (await res.json()) as PaprikaTicker[];
  const rows = data
    .filter((t) => t.quotes?.BRL && t.quotes?.USD && t.rank > 0)
    .sort((a, b) => a.rank - b.rank)
    .map(toRow);
  return markDerivatives(rows);
}

/**
 * Tokens que só representam outra moeda (WBTC, cbBTC, WETH, stETH, rsETH...):
 * símbolo com BTC/ETH e preço colado no da moeda original. Entram na lista,
 * mas o filtro "sem stablecoins" esconde, como faz o CryptoBubbles.
 */
function markDerivatives(rows: CoinRow[]): CoinRow[] {
  const btc = rows.find((r) => r.id === "btc-bitcoin")?.priceBrl;
  const eth = rows.find((r) => r.id === "eth-ethereum")?.priceBrl;
  return rows.map((r) => {
    if (r.pegged || r.id === "btc-bitcoin" || r.id === "eth-ethereum") return r;
    const sym = r.symbol.toUpperCase();
    const likeBtc = btc && sym.includes("BTC") && Math.abs(r.priceBrl / btc - 1) < 0.1;
    const likeEth = eth && sym.includes("ETH") && r.priceBrl / eth > 0.9 && r.priceBrl / eth < 1.4;
    return likeBtc || likeEth ? { ...r, pegged: true } : r;
  });
}

export async function fetchGlobal(init?: RequestInit): Promise<GlobalStats> {
  const res = await fetchWithTimeout(`${PAPRIKA_API}/global`, init);
  if (!res.ok) throw new Error(`coinpaprika global ${res.status}`);
  const g = await res.json();
  return {
    marketCapUsd: g.market_cap_usd,
    volumeUsd: g.volume_24h_usd,
    btcDominance: g.bitcoin_dominance_percentage,
    marketCapChange24h: g.market_cap_change_24h,
    coins: g.cryptocurrencies_number,
  };
}

/** Ranking no servidor (cache de 5 min, compartilhado entre páginas); [] se falhar. */
export async function getMarketServer(): Promise<CoinRow[]> {
  try {
    return await fetchMarket({ next: { revalidate: 300 } } as RequestInit);
  } catch {
    return [];
  }
}

export async function getGlobalServer(): Promise<GlobalStats | null> {
  try {
    return await fetchGlobal({ next: { revalidate: 300 } } as RequestInit);
  } catch {
    return null;
  }
}

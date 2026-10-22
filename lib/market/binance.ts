/**
 * Cotações em tempo real pela API pública de dados de mercado da Binance
 * (data-api.binance.vision: só dados de mercado, sem chave, com CORS liberado).
 * Funciona no navegador e no servidor. Pares em real (BTCBRL, ETHBRL...) dão o
 * preço negociado no Brasil; BTCUSDT dá a referência em dólar.
 */
export const BINANCE_API = "https://data-api.binance.vision/api/v3";

export type Ticker24h = {
  symbol: string;
  last: number;
  open: number;
  high: number;
  low: number;
  changePct: number;
  /** Volume em unidades da moeda base (ex.: BTC). */
  volume: number;
  /** Volume na moeda de cotação (ex.: R$). */
  quoteVolume: number;
  closeTime: number;
};

type RawTicker = {
  symbol: string;
  lastPrice: string;
  openPrice: string;
  highPrice: string;
  lowPrice: string;
  priceChangePercent: string;
  volume: string;
  quoteVolume: string;
  closeTime: number;
};

function parseTicker(t: RawTicker): Ticker24h {
  return {
    symbol: t.symbol,
    last: Number(t.lastPrice),
    open: Number(t.openPrice),
    high: Number(t.highPrice),
    low: Number(t.lowPrice),
    changePct: Number(t.priceChangePercent),
    volume: Number(t.volume),
    quoteVolume: Number(t.quoteVolume),
    closeTime: t.closeTime,
  };
}

/** Ticker de 24h de vários pares numa chamada só. */
export async function fetchTickers24h(symbols: string[], init?: RequestInit): Promise<Record<string, Ticker24h>> {
  const url = `${BINANCE_API}/ticker/24hr?symbols=${encodeURIComponent(JSON.stringify(symbols))}`;
  const res = await fetch(url, init);
  if (!res.ok) throw new Error(`binance ${res.status}`);
  const data = (await res.json()) as RawTicker[];
  return Object.fromEntries(data.map((t) => [t.symbol, parseTicker(t)]));
}

/** Vela: [abertura (ms), abertura, máxima, mínima, fechamento]. */
export type Candle = { t: number; o: number; h: number; l: number; c: number };

export async function fetchKlines(
  symbol: string,
  interval: "1m" | "5m" | "15m" | "1h" | "4h" | "1d" | "1w",
  limit: number,
  init?: RequestInit
): Promise<Candle[]> {
  const url = `${BINANCE_API}/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`;
  const res = await fetch(url, init);
  if (!res.ok) throw new Error(`binance klines ${res.status}`);
  const data = (await res.json()) as [number, string, string, string, string][];
  return data.map((k) => ({ t: k[0], o: Number(k[1]), h: Number(k[2]), l: Number(k[3]), c: Number(k[4]) }));
}

/** Pares em real mostrados na barra de cotações do topo (todos existem na Binance). */
export const TICKER_BAR_PAIRS = [
  { symbol: "BTCBRL", name: "Bitcoin", short: "BTC", href: "/bitcoin" },
  { symbol: "ETHBRL", name: "Ethereum", short: "ETH", href: "/moedas/ethereum" },
  { symbol: "USDTBRL", name: "Tether (dólar cripto)", short: "USDT", href: "/moedas/tether" },
  { symbol: "SOLBRL", name: "Solana", short: "SOL", href: "/moedas/solana" },
  { symbol: "XRPBRL", name: "XRP", short: "XRP", href: "/moedas/xrp" },
  { symbol: "BNBBRL", name: "BNB", short: "BNB", href: "/moedas/bnb" },
  { symbol: "DOGEBRL", name: "Dogecoin", short: "DOGE", href: "/moedas/dogecoin" },
  { symbol: "ADABRL", name: "Cardano", short: "ADA", href: "/moedas/cardano" },
  { symbol: "LINKBRL", name: "Chainlink", short: "LINK", href: "/moedas/chainlink" },
  { symbol: "LTCBRL", name: "Litecoin", short: "LTC", href: "/moedas/litecoin" },
  { symbol: "AVAXBRL", name: "Avalanche", short: "AVAX", href: "/moedas/avalanche" },
  { symbol: "SUIBRL", name: "Sui", short: "SUI", href: "/moedas/sui" },
] as const;

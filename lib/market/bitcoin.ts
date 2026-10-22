/**
 * Cotação do Bitcoin com fontes em cascata. Usada no servidor (HTML inicial
 * das páginas, bom para o Google) e no navegador (atualização a cada 10 s).
 *
 * 1. Binance (pares BTCBRL e BTCUSDT): preço, variação, máxima e mínima de 24h.
 * 2. Mercado Bitcoin (BTC-BRL) + Kraken (XBTUSD), se a Binance falhar.
 * 3. Coinbase (spot BRL e USD), último recurso, sem variação de 24h.
 */
import { fetchTickers24h } from "./binance";

export type BtcQuote = {
  brl: number;
  usd: number;
  /** Variação de 24h em % (no par em real). */
  change24h: number | null;
  high24h: number | null;
  low24h: number | null;
  open24h: number | null;
  /** Volume de 24h em BTC na fonte. */
  volumeBtc: number | null;
  /** Dólar implícito (BRL / USD). */
  usdBrl: number;
  source: string;
  /** Momento da leitura (ms). */
  at: number;
};

async function fromBinance(init?: RequestInit): Promise<BtcQuote> {
  const t = await fetchTickers24h(["BTCBRL", "BTCUSDT"], init);
  const b = t.BTCBRL;
  const u = t.BTCUSDT;
  if (!b || !u || !(b.last > 0) || !(u.last > 0)) throw new Error("binance sem dados");
  return {
    brl: b.last,
    usd: u.last,
    change24h: b.changePct,
    high24h: b.high,
    low24h: b.low,
    open24h: b.open,
    volumeBtc: b.volume,
    usdBrl: b.last / u.last,
    source: "Binance (BTC/BRL e BTC/USDT)",
    at: Date.now(),
  };
}

async function fromMercadoBitcoin(init?: RequestInit): Promise<BtcQuote> {
  const [mbRes, krRes] = await Promise.all([
    fetch("https://api.mercadobitcoin.net/api/v4/tickers?symbols=BTC-BRL", init),
    fetch("https://api.kraken.com/0/public/Ticker?pair=XBTUSD", init),
  ]);
  if (!mbRes.ok || !krRes.ok) throw new Error("mb/kraken falhou");
  const mb = (await mbRes.json())[0] as { last: string; open: string; high: string; low: string; vol: string };
  const kr = (await krRes.json()) as { result: Record<string, { c: [string] }> };
  const usd = Number(Object.values(kr.result)[0].c[0]);
  const brl = Number(mb.last);
  const open = Number(mb.open);
  if (!(brl > 0) || !(usd > 0)) throw new Error("mb/kraken sem dados");
  return {
    brl,
    usd,
    change24h: open > 0 ? ((brl - open) / open) * 100 : null,
    high24h: Number(mb.high),
    low24h: Number(mb.low),
    open24h: open,
    volumeBtc: Number(mb.vol),
    usdBrl: brl / usd,
    source: "Mercado Bitcoin (BTC/BRL) e Kraken (BTC/USD)",
    at: Date.now(),
  };
}

async function fromCoinbase(init?: RequestInit): Promise<BtcQuote> {
  const res = await fetch("https://api.coinbase.com/v2/exchange-rates?currency=BTC", init);
  if (!res.ok) throw new Error("coinbase falhou");
  const rates = (await res.json()).data.rates as Record<string, string>;
  const brl = Number(rates.BRL);
  const usd = Number(rates.USD);
  if (!(brl > 0) || !(usd > 0)) throw new Error("coinbase sem dados");
  return {
    brl,
    usd,
    change24h: null,
    high24h: null,
    low24h: null,
    open24h: null,
    volumeBtc: null,
    usdBrl: brl / usd,
    source: "Coinbase (spot)",
    at: Date.now(),
  };
}

/** Cotação do Bitcoin pela primeira fonte que responder. */
export async function fetchBtcQuote(init?: RequestInit): Promise<BtcQuote> {
  const sources = [fromBinance, fromMercadoBitcoin, fromCoinbase];
  let lastError: unknown = null;
  for (const s of sources) {
    try {
      return await s(init);
    } catch (e) {
      lastError = e;
    }
  }
  throw lastError ?? new Error("sem cotação");
}

/** Versão para o servidor: nunca lança erro (null se tudo falhar), com cache de 60 s. */
export async function getBtcQuoteServer(): Promise<BtcQuote | null> {
  try {
    return await fetchBtcQuote({ next: { revalidate: 60 } } as RequestInit);
  } catch {
    return null;
  }
}

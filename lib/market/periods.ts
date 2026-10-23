import { BINANCE_API, fetchKlines, type Candle } from "./binance";
import { fetchWithTimeout } from "./http";

const DAY = 86_400_000;

/** Preço de referência de cada período, para comparar com o preço de agora (par BTC/BRL). */
export type PeriodBases = {
  h1: number | null;
  d7: number | null;
  d30: number | null;
  d90: number | null;
  ytd: number | null;
  y1: number | null;
};

export type PeriodData = { daily: Candle[]; h1: number | null; d7: number | null };

/**
 * Preço aproximado num instante, pela vela diária que o contém: interpola entre a abertura
 * (00:00 UTC) e o fechamento. Usar o fechamento de um índice fixo dava "N dias" de N-1.
 */
function priceAt(daily: Candle[], at: number): number | null {
  for (let i = daily.length - 1; i >= 0; i--) {
    const c = daily[i];
    if (c.t > at) continue;
    if (at >= c.t + DAY) return c.c;
    return c.o + (c.c - c.o) * ((at - c.t) / DAY);
  }
  return null;
}

/** Abertura da janela móvel exata (1h, 7d) da Binance: o preço de exatamente 1 hora ou 7 dias atrás. */
async function rollingOpen(windowSize: "1h" | "7d", init?: RequestInit): Promise<number | null> {
  try {
    const res = await fetchWithTimeout(`${BINANCE_API}/ticker?symbol=BTCBRL&windowSize=${windowSize}`, init);
    if (!res.ok) return null;
    const open = Number(((await res.json()) as { openPrice?: string }).openPrice);
    return Number.isFinite(open) && open > 0 ? open : null;
  } catch {
    return null;
  }
}

export async function fetchPeriodData(init?: RequestInit): Promise<PeriodData> {
  const [daily, h1, d7] = await Promise.all([fetchKlines("BTCBRL", "1d", 400, init), rollingOpen("1h", init), rollingOpen("7d", init)]);
  return { daily, h1, d7 };
}

export function periodBases(data: PeriodData, now: number): PeriodBases {
  const { daily } = data;
  // 1º de janeiro em UTC, como as velas diárias da Binance (no fuso do Brasil o dia 1º ficava de fora).
  const yearStart = Date.UTC(new Date(now).getUTCFullYear(), 0, 1);
  const ytd = daily.find((c) => c.t >= yearStart);
  return {
    h1: data.h1,
    d7: data.d7 ?? priceAt(daily, now - 7 * DAY),
    d30: priceAt(daily, now - 30 * DAY),
    d90: priceAt(daily, now - 90 * DAY),
    ytd: ytd && ytd.t === yearStart ? ytd.o : null,
    y1: priceAt(daily, now - 365 * DAY),
  };
}

/** Bases calculadas no servidor, para o HTML de /bitcoin já sair com as variações (SEO). */
export async function getPeriodBasesServer(): Promise<PeriodBases | null> {
  try {
    return periodBases(await fetchPeriodData({ next: { revalidate: 300 } }), Date.now());
  } catch {
    return null;
  }
}

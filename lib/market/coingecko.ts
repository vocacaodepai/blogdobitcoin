/**
 * Variação de 30 dias e 1 ano pela API pública da CoinGecko, chamada pelo
 * navegador do visitante (o plano gratuito da CoinPaprika não traz esses dois
 * períodos). Casamento por símbolo, conferindo o valor de mercado para não
 * misturar moedas diferentes com o mesmo símbolo.
 */
import type { CoinRow } from "./paprika";
import { fetchWithTimeout } from "./http";

export type LongChange = { mcap: number; ch30d: number | null; ch1y: number | null };

type GeckoMarket = {
  symbol: string;
  market_cap: number | null;
  price_change_percentage_30d_in_currency?: number | null;
  price_change_percentage_1y_in_currency?: number | null;
};

export async function fetchLongChanges(init?: RequestInit): Promise<Record<string, LongChange>> {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=30d,1y";
  const res = await fetchWithTimeout(url, init);
  if (!res.ok) throw new Error(`coingecko ${res.status}`);
  const data = (await res.json()) as GeckoMarket[];
  const out: Record<string, LongChange> = {};
  for (const c of data) {
    const sym = c.symbol.toUpperCase();
    const mcap = c.market_cap ?? 0;
    if (out[sym] && out[sym].mcap >= mcap) continue; // símbolo repetido: fica a maior
    out[sym] = {
      mcap,
      ch30d: c.price_change_percentage_30d_in_currency ?? null,
      ch1y: c.price_change_percentage_1y_in_currency ?? null,
    };
  }
  return out;
}

/** Preenche 30d e 1 ano nas linhas do ranking quando a CoinGecko respondeu (senão ficam sem valor). */
export function withLongChanges(rows: CoinRow[], long: Record<string, LongChange> | null): CoinRow[] {
  if (!long) return rows;
  return rows.map((r) => {
    const l = long[r.symbol.toUpperCase()];
    if (!l || !(l.mcap > 0) || !(r.marketCapBrl > 0)) return r;
    const ratio = l.mcap / r.marketCapBrl;
    if (ratio < 0.5 || ratio > 2) return r; // provável moeda diferente com o mesmo símbolo
    return { ...r, ch30d: l.ch30d ?? Number.NaN, ch1y: l.ch1y ?? Number.NaN };
  });
}

"use client";

/**
 * Hooks de dados ao vivo (navegador). Cada chave é compartilhada: o selo do
 * topo, a barra de cotações e o painel de /bitcoin usam a mesma busca.
 */
import { useEffect, useMemo, useState } from "react";
import { fetchTickers24h, TICKER_BAR_PAIRS, type Ticker24h } from "./binance";
import { fetchBtcQuote, type BtcQuote } from "./bitcoin";
import { fetchLongChanges, withLongChanges, type LongChange } from "./coingecko";
import { fetchFearGreed, type FearGreedPoint } from "./feargreed";
import { fetchDifficulty, fetchFees, fetchTipHeight, type DifficultyAdjustment, type Fees } from "./mempool";
import { fetchGlobal, fetchMarket, type CoinRow, type GlobalStats } from "./paprika";
import { fetchPeriodData, type PeriodData } from "./periods";
import { usePolling } from "./usePolling";

/** Intervalo de atualização do preço do Bitcoin (10 segundos). */
export const BTC_REFRESH_MS = 10_000;

export function useBtcQuote(initial: BtcQuote | null = null) {
  return usePolling<BtcQuote>("btc-quote", () => fetchBtcQuote(), BTC_REFRESH_MS, initial, 12);
}

// O BTC da barra vem da mesma busca do selo e do painel (btc-quote, 10 s); as outras moedas,
// numa busca só a cada 30 s. Antes eram duas buscas na Binance a cada 10 s em toda página.
const BAR_SYMBOLS = TICKER_BAR_PAIRS.filter((p) => p.symbol !== "BTCBRL").map((p) => p.symbol);
export function useTickerBar() {
  return usePolling<Record<string, Ticker24h>>("ticker-bar", () => fetchTickers24h(BAR_SYMBOLS), 30_000);
}

export function useMarket(initial: CoinRow[] | null = null) {
  return usePolling<CoinRow[]>("market", () => fetchMarket(), 60_000, initial && initial.length ? initial : null);
}

/** Variação de 30 dias e 1 ano (CoinGecko, a cada 10 min). */
export function useLongChanges() {
  return usePolling<Record<string, LongChange>>("long-changes", () => fetchLongChanges(), 10 * 60_000);
}

/** Ranking ao vivo já com 30 dias e 1 ano quando disponíveis. */
export function useMarketWithLong(initial: CoinRow[] | null = null) {
  const market = useMarket(initial);
  const { data: long } = useLongChanges();
  const base = market.data ?? initial;
  const rows = useMemo(() => withLongChanges(base ?? [], long), [base, long]);
  return { ...market, rows, hasLong: Boolean(long) };
}

export function useGlobal(initial: GlobalStats | null = null) {
  return usePolling<GlobalStats>("global", () => fetchGlobal(), 120_000, initial);
}

export function useTipHeight(initial: number | null = null) {
  return usePolling<number>("tip-height", () => fetchTipHeight(), 60_000, initial);
}

export function useFees() {
  return usePolling<Fees>("fees", () => fetchFees(), 60_000);
}

export function useDifficulty() {
  return usePolling<DifficultyAdjustment>("difficulty", () => fetchDifficulty(), 300_000);
}

export function useFearGreed(initial: FearGreedPoint[] | null = null, limit = 31) {
  return usePolling<FearGreedPoint[]>(
    `fear-greed-${limit}`,
    () => fetchFearGreed(limit),
    30 * 60_000,
    initial && initial.length ? initial : null
  );
}

/** Velas diárias e horárias do BTC/BRL, para as variações por período (atualiza a cada 5 min). */
/** Velas diárias e janelas móveis de 1h e 7d do BTC/BRL, para a variação por período. */
export function usePeriodData() {
  return usePolling<PeriodData>("btc-periods", () => fetchPeriodData(), 5 * 60_000);
}

/** Relógio que força nova renderização a cada `ms` (contagem regressiva, "há 5 s"). */
export function useNow(ms = 1000): number {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), ms);
    return () => clearInterval(id);
  }, [ms]);
  return now;
}

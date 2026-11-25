/**
 * Regras fixas do protocolo do Bitcoin: recompensa por bloco, halvings a cada
 * 210.000 blocos e oferta máxima de 21 milhões. Tudo calculado a partir da
 * altura do bloco (a altura atual vem da mempool.space).
 */
export const HALVING_INTERVAL = 210_000;
export const INITIAL_SUBSIDY = 50;
export const MAX_SUPPLY = 21_000_000;
/** Alvo de tempo entre blocos (10 minutos). */
export const TARGET_BLOCK_SECONDS = 600;

/** Datas dos halvings já ocorridos (blocos 210.000, 420.000, 630.000 e 840.000). */
export const PAST_HALVINGS = [
  { number: 1, height: 210_000, date: "2012-11-28", subsidyAfter: 25 },
  { number: 2, height: 420_000, date: "2016-07-09", subsidyAfter: 12.5 },
  { number: 3, height: 630_000, date: "2020-05-11", subsidyAfter: 6.25 },
  { number: 4, height: 840_000, date: "2024-04-20", subsidyAfter: 3.125 },
] as const;

/** Recompensa (subsídio) de um bloco na altura dada, em BTC. */
export function subsidyAt(height: number): number {
  const epoch = Math.floor(height / HALVING_INTERVAL);
  if (epoch >= 64) return 0;
  return INITIAL_SUBSIDY / 2 ** epoch;
}

/** Bitcoins emitidos até a altura dada (inclusive o bloco gênese, que não é gastável). */
export function supplyAt(height: number): number {
  let total = 0;
  let remaining = height + 1;
  let epoch = 0;
  while (remaining > 0 && epoch < 64) {
    const blocks = Math.min(remaining, HALVING_INTERVAL);
    total += blocks * (INITIAL_SUBSIDY / 2 ** epoch);
    remaining -= blocks;
    epoch++;
  }
  return total;
}

export type HalvingInfo = {
  height: number;
  /** Número do próximo halving (5 = o de 1.050.000). */
  nextNumber: number;
  nextHeight: number;
  blocksLeft: number;
  /** Progresso da época atual (0 a 1). */
  progress: number;
  subsidyNow: number;
  subsidyNext: number;
  supply: number;
  supplyPct: number;
  /** Estimativa da data do próximo halving (ms), pelo tempo médio informado ou 10 min. */
  estimatedAt: number;
};

export function halvingInfo(height: number, avgBlockSeconds = TARGET_BLOCK_SECONDS, now = Date.now()): HalvingInfo {
  const epoch = Math.floor(height / HALVING_INTERVAL);
  const nextHeight = (epoch + 1) * HALVING_INTERVAL;
  const blocksLeft = nextHeight - height;
  const supply = supplyAt(height);
  return {
    height,
    nextNumber: epoch + 1,
    nextHeight,
    blocksLeft,
    progress: (height - epoch * HALVING_INTERVAL) / HALVING_INTERVAL,
    subsidyNow: subsidyAt(height),
    subsidyNext: subsidyAt(nextHeight),
    supply,
    supplyPct: (supply / MAX_SUPPLY) * 100,
    estimatedAt: now + blocksLeft * avgBlockSeconds * 1000,
  };
}

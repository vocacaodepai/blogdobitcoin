/** Dados da rede Bitcoin pela API pública da mempool.space (sem chave, CORS liberado). */
import { fetchWithTimeout } from "./http";

export const MEMPOOL_API = "https://mempool.space/api";

export type Fees = { fastestFee: number; halfHourFee: number; hourFee: number; economyFee: number; minimumFee: number };

export type DifficultyAdjustment = {
  progressPercent: number;
  difficultyChange: number;
  estimatedRetargetDate: number;
  remainingBlocks: number;
  nextRetargetHeight: number;
  /** Tempo médio entre blocos na época atual, em ms. */
  timeAvg: number;
};

export async function fetchTipHeight(init?: RequestInit): Promise<number> {
  const res = await fetchWithTimeout(`${MEMPOOL_API}/blocks/tip/height`, init);
  if (!res.ok) throw new Error(`mempool ${res.status}`);
  return Number(await res.text());
}

export async function fetchFees(init?: RequestInit): Promise<Fees> {
  const res = await fetchWithTimeout(`${MEMPOOL_API}/v1/fees/recommended`, init);
  if (!res.ok) throw new Error(`mempool fees ${res.status}`);
  return res.json();
}

export async function fetchDifficulty(init?: RequestInit): Promise<DifficultyAdjustment> {
  const res = await fetchWithTimeout(`${MEMPOOL_API}/v1/difficulty-adjustment`, init);
  if (!res.ok) throw new Error(`mempool difficulty ${res.status}`);
  return res.json();
}

/** Altura atual no servidor (cache de 5 min); null se a API não responder. */
export async function getTipHeightServer(): Promise<number | null> {
  try {
    return await fetchTipHeight({ next: { revalidate: 300 } } as RequestInit);
  } catch {
    return null;
  }
}

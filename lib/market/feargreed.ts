/** Índice de medo e ganância do mercado cripto (alternative.me, público, sem chave). */
import { fetchWithTimeout } from "./http";

export type FearGreedPoint = { value: number; label: string; timestamp: number };

const LABELS: Record<string, string> = {
  "Extreme Fear": "Medo extremo",
  Fear: "Medo",
  Neutral: "Neutro",
  Greed: "Ganância",
  "Extreme Greed": "Ganância extrema",
};

/** Faixas da própria alternative.me: 0-25, 26-46, 47-54, 55-75 e 76-100 (conferidas no histórico da API). */
export function fearGreedLabel(value: number): string {
  if (value <= 25) return "Medo extremo";
  if (value <= 46) return "Medo";
  if (value <= 54) return "Neutro";
  if (value <= 75) return "Ganância";
  return "Ganância extrema";
}

export function fearGreedColor(value: number): string {
  if (value <= 25) return "#d92d20";
  if (value <= 46) return "#f97316";
  if (value <= 54) return "#eab308";
  if (value <= 75) return "#84cc16";
  return "#16a34a";
}

export async function fetchFearGreed(limit = 31, init?: RequestInit): Promise<FearGreedPoint[]> {
  const res = await fetchWithTimeout(`https://api.alternative.me/fng/?limit=${limit}`, init);
  if (!res.ok) throw new Error(`fng ${res.status}`);
  const data = (await res.json()).data as { value: string; value_classification: string; timestamp: string }[];
  return data.map((d) => ({
    value: Number(d.value),
    label: LABELS[d.value_classification] ?? fearGreedLabel(Number(d.value)),
    timestamp: Number(d.timestamp) * 1000,
  }));
}

export async function getFearGreedServer(limit = 31): Promise<FearGreedPoint[]> {
  try {
    return await fetchFearGreed(limit, { next: { revalidate: 1800 } } as RequestInit);
  } catch {
    return [];
  }
}

/** Cor de TEXTO da faixa (tokens --fng-0..4 com contraste AA em cada tema); a cor viva fica no arco. */
export function fearGreedTextColor(value: number): string {
  if (value <= 25) return "var(--fng-0)";
  if (value <= 46) return "var(--fng-1)";
  if (value <= 54) return "var(--fng-2)";
  if (value <= 75) return "var(--fng-3)";
  return "var(--fng-4)";
}

/** Fichas editoriais das moedas (/moedas/<slug>), em content/coins.ts. */
import { coins } from "@/content/coins";
import type { CoinProfile } from "@/lib/types";

export type { CoinProfile } from "@/lib/types";
export { coins };

const bySlug = new Map(coins.map((c) => [c.slug, c]));

export function getCoin(slug: string): CoinProfile | undefined {
  return bySlug.get(slug);
}

/** paprikaId -> slug, para o ranking e as bolhas linkarem as páginas que existem. */
export function coinProfilesMap(): Record<string, string> {
  return Object.fromEntries(coins.map((c) => [c.paprikaId, c.slug]));
}

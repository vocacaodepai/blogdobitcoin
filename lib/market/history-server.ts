import { readFileSync } from "node:fs";
import { join } from "node:path";
import { parseHistory, type HistoryFile, type HistoryRow } from "./history";

let cache: { rows: HistoryRow[]; generatedAt: string; sources: HistoryFile["sources"] } | null = null;

/** Lê public/data/btc-historico.json no servidor (build/ISR), para as calculadoras saírem prontas no HTML. */
export function getBtcHistory() {
  if (!cache) {
    const file = JSON.parse(readFileSync(join(process.cwd(), "public/data/btc-historico.json"), "utf8")) as HistoryFile;
    cache = { rows: parseHistory(file), generatedAt: file.generatedAt, sources: file.sources };
  }
  return cache;
}

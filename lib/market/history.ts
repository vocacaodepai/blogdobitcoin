/** Histórico mensal do Bitcoin (public/data/btc-historico.json, gerado por scripts/update-historico.mjs). */
export type HistoryRow = { month: string; usd: number; ptax: number; brl: number; day: string };

export type HistoryFile = {
  generatedAt: string;
  description: string;
  sources: { label: string; url: string }[];
  columns: string[];
  rows: [string, number, number, number, string][];
};

export function parseHistory(file: HistoryFile): HistoryRow[] {
  return file.rows.map(([month, usd, ptax, brl, day]) => ({ month, usd, ptax, brl, day }));
}

/** "2017-12" -> "dez/2017". */
export function monthLabel(month: string): string {
  const [y, m] = month.split("-").map(Number);
  const names = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
  return `${names[m - 1]}/${y}`;
}

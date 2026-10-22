/** Linha do tempo e curiosidades de /historia (content/historia.ts) e glossário (content/glossario.ts). */
import { curiosities, timeline } from "@/content/historia";
import { glossary } from "@/content/glossario";

export { curiosities, glossary, timeline };

/** "2010-05-22" -> "22 mai 2010"; "2010-05" -> "mai 2010". */
export function timelineDate(date: string): string {
  const [y, m, d] = date.split("-").map(Number);
  const months = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
  if (!m) return String(y);
  return d ? `${d} ${months[m - 1]} ${y}` : `${months[m - 1]} ${y}`;
}

/** Verbetes agrupados pela primeira letra (sem acento). */
export function glossaryByLetter() {
  const groups = new Map<string, typeof glossary>();
  for (const t of [...glossary].sort((a, b) => a.term.localeCompare(b.term, "pt-BR"))) {
    const letter = t.term.normalize("NFD").replace(/[̀-ͯ]/g, "").charAt(0).toUpperCase();
    const key = /[A-Z]/.test(letter) ? letter : "#";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(t);
  }
  return [...groups.entries()];
}

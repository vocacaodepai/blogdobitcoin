/** Lê número digitado no padrão brasileiro ("1.234,56") ou internacional ("1234.56"). */
export function parseAmount(raw: string): number | null {
  const s = raw.replace(/\s|R\$|US\$|BTC|sats?/gi, "").trim();
  if (!s) return null;
  let norm = s;
  if (s.includes(",")) norm = s.replace(/\./g, "").replace(",", ".");
  else if (/^\d{1,3}(\.\d{3})+$/.test(s)) norm = s.replace(/\./g, "");
  const n = Number(norm);
  return Number.isFinite(n) && n >= 0 ? n : null;
}

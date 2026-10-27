/**
 * Lê número digitado no padrão brasileiro ("1.234,56") ou internacional ("1234.56").
 * `dotDecimal`: num valor em BTC ou em moeda cripto, "1.234" com um ponto só é decimal
 * (ninguém digita mil e tantos bitcoins com ponto de milhar).
 */
export function parseAmount(raw: string, { dotDecimal = false }: { dotDecimal?: boolean } = {}): number | null {
  const s = raw.replace(/\s|R\$|US\$|BTC|sats?/gi, "").trim();
  if (!s) return null;
  let norm = s;
  if (s.includes(",")) norm = s.replace(/\./g, "").replace(",", ".");
  else if (dotDecimal && /^\d*\.\d+$/.test(s)) norm = s;
  // "1.000" e "10.000" são milhar; "0.005" é decimal (grupo de milhar nunca começa com 0).
  else if (/^[1-9]\d{0,2}(\.\d{3})+$/.test(s)) norm = s.replace(/\./g, "");
  const n = Number(norm);
  return Number.isFinite(n) && n >= 0 ? n : null;
}

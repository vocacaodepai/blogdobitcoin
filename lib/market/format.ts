/** Formatação de valores de mercado no padrão brasileiro (R$ 1.234,56; 12,3%). */

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

// toLocaleString com opções cria um Intl.NumberFormat novo a cada chamada; o ranking chama
// isso centenas de vezes por render. Aqui cada combinação é criada uma vez só.
const formatters = new Map<string, Intl.NumberFormat>();
function nf(locale: "pt-BR" | "en-US", min: number | undefined, max: number): Intl.NumberFormat {
  const key = `${locale}|${min ?? ""}|${max}`;
  let f = formatters.get(key);
  if (!f) {
    f = new Intl.NumberFormat(locale, min == null ? { maximumFractionDigits: max } : { minimumFractionDigits: min, maximumFractionDigits: max });
    formatters.set(key, f);
  }
  return f;
}

/** Casas decimais adequadas ao tamanho do número (moedas de centavos precisam de mais). */
function decimalsFor(value: number): number {
  const v = Math.abs(value);
  if (v >= 100) return 2;
  if (v >= 1) return 2;
  if (v >= 0.01) return 4;
  if (v >= 0.0001) return 6;
  return 8;
}

export function formatBRL(value: number, opts: { decimals?: number } = {}): string {
  if (!Number.isFinite(value)) return "R$ --";
  const d = opts.decimals ?? decimalsFor(value);
  if (d === 2) return brl.format(value);
  return `R$ ${nf("pt-BR", d, d).format(value)}`;
}

export function formatUSD(value: number, opts: { decimals?: number } = {}): string {
  if (!Number.isFinite(value)) return "US$ --";
  const d = opts.decimals ?? decimalsFor(value);
  const n = d === 2 ? usd.format(value).replace("$", "") : nf("en-US", d, d).format(value);
  return `US$ ${n.replace(/^-/, "")}`.replace("US$ ", value < 0 ? "-US$ " : "US$ ");
}

/** Número no padrão brasileiro sem moeda. */
export function formatNumber(value: number, decimals = 2): string {
  if (!Number.isFinite(value)) return "--";
  return nf("pt-BR", decimals, decimals).format(value);
}

/** "+3,21%" / "-0,85%". */
export function formatPct(value: number | null | undefined, decimals = 2): string {
  if (value == null || !Number.isFinite(value)) return "--";
  const sign = value > 0 ? "+" : value < 0 ? "−" : "";
  return `${sign}${nf("pt-BR", decimals, decimals).format(Math.abs(value))}%`;
}

/** Valores grandes por extenso curto: "R$ 8,22 tri", "R$ 132,5 bi", "R$ 45,3 mi". */
export function formatCompactBRL(value: number): string {
  return `R$ ${formatCompact(value)}`;
}

export function formatCompactUSD(value: number): string {
  return `US$ ${formatCompact(value)}`;
}

export function formatCompact(value: number): string {
  if (!Number.isFinite(value)) return "--";
  const v = Math.abs(value);
  const fmt = (n: number, suffix: string) => `${nf("pt-BR", undefined, n >= 100 ? 0 : n >= 10 ? 1 : 2).format(n)} ${suffix}`;
  if (v >= 1e12) return fmt(value / 1e12, "tri");
  if (v >= 1e9) return fmt(value / 1e9, "bi");
  if (v >= 1e6) return fmt(value / 1e6, "mi");
  if (v >= 1e3) return fmt(value / 1e3, "mil");
  return nf("pt-BR", undefined, 2).format(value);
}

/** Quantidade de BTC com até 8 casas, sem zeros sobrando. */
export function formatBtc(value: number): string {
  if (!Number.isFinite(value)) return "--";
  return `${value.toLocaleString("pt-BR", { minimumFractionDigits: 0, maximumFractionDigits: 8 })} BTC`;
}

export function formatSats(value: number): string {
  if (!Number.isFinite(value)) return "--";
  return `${Math.round(value).toLocaleString("pt-BR")} sats`;
}

/** Classe de cor para variação positiva/negativa. */
export function changeColor(value: number | null | undefined): string {
  if (value == null || !Number.isFinite(value) || value === 0) return "text-muted";
  return value > 0 ? "text-up" : "text-down";
}

/** "agora", "há 8 s", "há 3 min". */
export function formatAgo(ms: number): string {
  const s = Math.max(0, Math.round(ms / 1000));
  if (s < 3) return "agora";
  if (s < 60) return `há ${s} s`;
  const m = Math.round(s / 60);
  if (m < 60) return `há ${m} min`;
  return `há ${Math.round(m / 60)} h`;
}

/** Hora em Brasília ("14:32:05"). */
export function formatClock(ts: number): string {
  return new Date(ts).toLocaleTimeString("pt-BR", { timeZone: "America/Sao_Paulo" });
}

import { formatPct } from "@/lib/market/format";

/** Variação percentual colorida (verde sobe, vermelho cai) com seta. */
export function ChangeBadge({
  value,
  className = "",
  solid = false,
  decimals = 2,
}: {
  value: number | null | undefined;
  className?: string;
  /** Fundo colorido (pílula) em vez de só texto colorido. */
  solid?: boolean;
  decimals?: number;
}) {
  const v = value ?? null;
  const up = v != null && v > 0;
  const down = v != null && v < 0;
  const arrow = up ? "▲" : down ? "▼" : "";
  const color = up ? "text-up" : down ? "text-down" : "text-muted";
  const bg = solid
    ? up
      ? "bg-up/12 ring-1 ring-up/25"
      : down
        ? "bg-down/12 ring-1 ring-down/25"
        : "bg-surface-2"
    : "";
  return (
    <span
      className={`tabular inline-flex items-center gap-1 whitespace-nowrap font-mono font-semibold ${color} ${solid ? `rounded-md px-1.5 py-0.5 ${bg}` : ""} ${className}`}
    >
      {arrow && (
        <span aria-hidden="true" className="text-[0.7em]">
          {arrow}
        </span>
      )}
      {formatPct(v, decimals)}
    </span>
  );
}

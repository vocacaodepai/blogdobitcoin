"use client";

import { fearGreedColor, fearGreedLabel, type FearGreedPoint } from "@/lib/market/feargreed";
import { useFearGreed } from "@/lib/market/live";
import { Sparkline } from "./Sparkline";

function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = ((deg - 180) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function arc(cx: number, cy: number, r: number, from: number, to: number) {
  const a = polar(cx, cy, r, from);
  const b = polar(cx, cy, r, to);
  return `M${a.x.toFixed(2)},${a.y.toFixed(2)} A${r},${r} 0 0 1 ${b.x.toFixed(2)},${b.y.toFixed(2)}`;
}

const BANDS = [
  { from: 0, to: 25, color: "#d92d20" },
  { from: 25, to: 46, color: "#f97316" },
  { from: 46, to: 54, color: "#eab308" },
  { from: 54, to: 75, color: "#84cc16" },
  { from: 75, to: 100, color: "#16a34a" },
];

/**
 * Índice de medo e ganância (0 = medo extremo, 100 = ganância extrema) em um
 * medidor semicircular, com ontem, semana passada, mês passado e o histórico.
 */
export function FearGreedGauge({
  initial,
  compact = false,
  limit = 31,
}: {
  initial: FearGreedPoint[] | null;
  compact?: boolean;
  limit?: number;
}) {
  const { data } = useFearGreed(initial, limit);
  const points = data ?? [];
  const current = points[0];
  const value = current?.value ?? 50;
  const needle = polar(100, 100, 70, (value / 100) * 180);
  const ago = (i: number) => points[i];

  return (
    <section aria-labelledby="fng-titulo" className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
      <h2 id="fng-titulo" className="font-display text-xl font-bold tracking-tight">
        Índice de medo e ganância
      </h2>
      <div className={`mt-3 grid gap-5 ${compact ? "" : "sm:grid-cols-[220px_1fr] sm:items-center"}`}>
        <div className="mx-auto w-full max-w-[240px]">
          <svg viewBox="0 0 200 118" role="img" aria-label={current ? `Índice em ${value}: ${current.label}` : "Carregando o índice"}>
            {BANDS.map((b) => (
              <path key={b.from} d={arc(100, 100, 80, (b.from / 100) * 180 + 1, (b.to / 100) * 180 - 1)} stroke={b.color} strokeWidth="14" fill="none" strokeLinecap="round" opacity="0.9" />
            ))}
            {current && (
              <>
                <line x1="100" y1="100" x2={needle.x} y2={needle.y} stroke="var(--foreground)" strokeWidth="3" strokeLinecap="round" />
                <circle cx="100" cy="100" r="6" fill="var(--foreground)" />
              </>
            )}
            <text x="100" y="86" textAnchor="middle" fontSize="28" fontWeight="700" fill="var(--foreground)" fontFamily="var(--font-display)">
              {current ? value : "--"}
            </text>
          </svg>
          <p className="-mt-1 text-center font-display text-lg font-bold" style={{ color: current ? fearGreedColor(value) : undefined }}>
            {current ? current.label || fearGreedLabel(value) : "Carregando"}
          </p>
        </div>
        {!compact && (
          <div>
            <dl className="grid grid-cols-3 gap-2">
              {[
                { l: "Ontem", p: ago(1) },
                { l: "Há 7 dias", p: ago(7) },
                { l: "Há 30 dias", p: ago(30) },
              ].map(({ l, p }) => (
                <div key={l} className="rounded-lg border border-border bg-background/60 px-3 py-2">
                  <dt className="label-mono text-muted">{l}</dt>
                  <dd className="mt-1 font-mono text-sm font-semibold" style={{ color: p ? fearGreedColor(p.value) : undefined }}>
                    {p ? `${p.value} · ${p.label || fearGreedLabel(p.value)}` : "--"}
                  </dd>
                </div>
              ))}
            </dl>
            {points.length > 5 && (
              <div className="mt-3">
                <p className="label-mono text-muted">Últimos {points.length} dias</p>
                <Sparkline values={[...points].reverse().map((p) => p.value)} width={420} height={56} className="mt-1 h-14 w-full" />
              </div>
            )}
          </div>
        )}
      </div>
      <p className="mt-3 text-xs leading-relaxed text-muted">
        Fonte: alternative.me (atualiza uma vez por dia). O índice mede o humor do mercado (volatilidade, volume, redes
        sociais, dominância e buscas); não prevê preço.
      </p>
    </section>
  );
}

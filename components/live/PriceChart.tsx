"use client";

import { useMemo, useState } from "react";
import { formatBRL, formatPct } from "@/lib/market/format";

export type ChartPoint = { t: number; v: number };

const W = 720;
const H = 280;
// Datas do eixo ficam em HTML abaixo do SVG (em texto de 11 px de verdade): dentro do viewBox de
// 720 de largura elas encolhiam para menos de 5 px no celular.
const PAD = { top: 16, right: 12, bottom: 8, left: 12 };

function fmtTick(t: number, spanMs: number): string {
  const d = new Date(t);
  if (spanMs <= 2 * 86400_000) {
    return d.toLocaleTimeString("pt-BR", { timeZone: "America/Sao_Paulo", hour: "2-digit", minute: "2-digit" });
  }
  if (spanMs <= 120 * 86400_000) {
    return d.toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo", day: "2-digit", month: "short" });
  }
  return d.toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo", month: "short", year: "numeric" });
}

function fmtFull(t: number, spanMs: number): string {
  const d = new Date(t);
  if (spanMs <= 40 * 86400_000) {
    return d.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo", day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" });
  }
  return d.toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo", day: "2-digit", month: "short", year: "numeric" });
}

/**
 * Gráfico de área em SVG, sem biblioteca: linha colorida pela direção do
 * período, máxima/mínima marcadas e leitura do ponto sob o cursor/dedo.
 * `log` usa escala logarítmica (útil no histórico desde 2010).
 */
export function PriceChart({
  points,
  log = false,
  format = (v: number) => formatBRL(v),
  label = "Preço",
}: {
  points: ChartPoint[];
  log?: boolean;
  format?: (v: number) => string;
  label?: string;
}) {
  const [hover, setHover] = useState<number | null>(null);

  const geo = useMemo(() => {
    if (points.length < 2) return null;
    const tr = (v: number) => (log ? Math.log10(Math.max(v, 1e-6)) : v);
    const vals = points.map((p) => tr(p.v));
    let min = Math.min(...vals);
    let max = Math.max(...vals);
    const padV = (max - min) * 0.08 || 1;
    min -= padV;
    max += padV;
    const t0 = points[0].t;
    const t1 = points[points.length - 1].t;
    const x = (t: number) => PAD.left + ((t - t0) / (t1 - t0 || 1)) * (W - PAD.left - PAD.right);
    const y = (v: number) => PAD.top + (1 - (tr(v) - min) / (max - min)) * (H - PAD.top - PAD.bottom);
    const line = points.map((p, i) => `${i ? "L" : "M"}${x(p.t).toFixed(1)},${y(p.v).toFixed(1)}`).join("");
    const area = `${line}L${x(t1).toFixed(1)},${H - PAD.bottom}L${x(t0).toFixed(1)},${H - PAD.bottom}Z`;
    let iMax = 0;
    let iMin = 0;
    points.forEach((p, i) => {
      if (p.v > points[iMax].v) iMax = i;
      if (p.v < points[iMin].v) iMin = i;
    });
    const ticks = [0, 0.25, 0.5, 0.75, 1].map((f) => t0 + f * (t1 - t0));
    return { x, y, line, area, iMax, iMin, ticks, span: t1 - t0 };
  }, [points, log]);

  if (!geo) {
    return (
      <div className="flex h-[280px] items-center justify-center rounded-xl border border-dashed border-border text-sm text-muted">
        Carregando o gráfico...
      </div>
    );
  }

  const first = points[0];
  const last = points[points.length - 1];
  const up = last.v >= first.v;
  const color = up ? "var(--up)" : "var(--down)";
  const h = hover != null ? points[hover] : null;
  const change = ((last.v - first.v) / first.v) * 100;

  function onMove(e: React.PointerEvent<SVGSVGElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * W;
    let best = 0;
    let bestD = Infinity;
    for (let i = 0; i < points.length; i++) {
      const d = Math.abs(geo!.x(points[i].t) - px);
      if (d < bestD) {
        bestD = d;
        best = i;
      }
    }
    setHover(best);
  }

  return (
    <figure className="relative">
      <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2 font-mono text-xs">
        {h ? (
          <span>
            <span className="text-muted">{fmtFull(h.t, geo.span)}: </span>
            <span className="tabular font-semibold">{format(h.v)}</span>
          </span>
        ) : (
          <span className="text-muted">
            {label} no período:{" "}
            <span className={`tabular font-semibold ${up ? "text-up" : "text-down"}`}>{formatPct(change)}</span>
          </span>
        )}
        <span className="text-muted">
          Máx. <span className="tabular text-foreground">{format(points[geo.iMax].v)}</span> · Mín.{" "}
          <span className="tabular text-foreground">{format(points[geo.iMin].v)}</span>
        </span>
      </div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-auto w-full touch-pan-y select-none"
        role="img"
        aria-label={`Gráfico de ${label.toLowerCase()}: de ${format(first.v)} a ${format(last.v)} (${formatPct(change)})`}
        onPointerMove={onMove}
        onPointerDown={onMove}
        onPointerLeave={() => setHover(null)}
      >
        <defs>
          <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.28" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((f) => (
          <line
            key={f}
            x1={PAD.left}
            x2={W - PAD.right}
            y1={PAD.top + f * (H - PAD.top - PAD.bottom)}
            y2={PAD.top + f * (H - PAD.top - PAD.bottom)}
            stroke="var(--border)"
            strokeDasharray="3 5"
          />
        ))}
        <path d={geo.area} fill="url(#chart-fill)" />
        <path d={geo.line} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" />
        {h && (
          <g>
            <line x1={geo.x(h.t)} x2={geo.x(h.t)} y1={PAD.top} y2={H - PAD.bottom} stroke="var(--muted)" strokeDasharray="2 3" />
            <circle cx={geo.x(h.t)} cy={geo.y(h.v)} r="4.5" fill={color} stroke="var(--surface)" strokeWidth="2" />
          </g>
        )}
      </svg>
      <div className="relative mt-1 h-4 font-mono text-[11px] text-muted" aria-hidden="true">
        {geo.ticks.map((t, i) => {
          const last = i === geo.ticks.length - 1;
          return (
            <span
              key={t}
              // No celular só a primeira, a do meio e a última, para os rótulos não se encostarem.
              className={`absolute top-0 whitespace-nowrap ${i % 2 === 1 ? "hidden sm:block" : ""}`}
              style={{
                left: `${(geo.x(t) / W) * 100}%`,
                transform: i === 0 ? undefined : last ? "translateX(-100%)" : "translateX(-50%)",
              }}
            >
              {fmtTick(t, geo.span)}
            </span>
          );
        })}
      </div>
    </figure>
  );
}

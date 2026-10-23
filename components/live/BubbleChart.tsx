"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { formatBRL, formatCompactBRL, formatPct } from "@/lib/market/format";
import { useMarketWithLong } from "@/lib/market/live";
import { coinLogo, type CoinRow } from "@/lib/market/paprika";
import { ChangeBadge } from "./ChangeBadge";

type Period = "ch1h" | "ch24h" | "ch7d" | "ch30d" | "ch1y";
type SizeBy = "change" | "cap";

const PERIODS: { key: Period; label: string }[] = [
  { key: "ch1h", label: "1 hora" },
  { key: "ch24h", label: "24 horas" },
  { key: "ch7d", label: "7 dias" },
  { key: "ch30d", label: "30 dias" },
  { key: "ch1y", label: "1 ano" },
];

type Node = { id: string; r: number; x: number; y: number; vx: number; vy: number };

/** Cor da bolha: verde se subiu, vermelho se caiu, mais forte quanto maior a variação. */
function bubbleColors(change: number) {
  const m = Math.min(1, Math.abs(change) / 15);
  const a = 0.28 + m * 0.6;
  return change >= 0
    ? { fill: `rgba(22, 163, 74, ${a.toFixed(2)})`, stroke: "rgba(74, 222, 128, 0.9)" }
    : { fill: `rgba(217, 45, 32, ${a.toFixed(2)})`, stroke: "rgba(248, 113, 113, 0.9)" };
}

/**
 * Bolhas do mercado cripto (inspirado no CryptoBubbles): cada moeda é uma
 * bolha; o tamanho mostra a variação (ou o valor de mercado) e a cor mostra se
 * subiu ou caiu no período escolhido. As bolhas se acomodam com uma física
 * simples, dá para arrastar e tocar para ver os detalhes.
 */
export function BubbleChart({ initial, profiles }: { initial: CoinRow[]; profiles: Record<string, string> }) {
  const { rows, hasLong } = useMarketWithLong(initial);
  const [period, setPeriod] = useState<Period>("ch24h");
  const [sizeBy, setSizeBy] = useState<SizeBy>("change");
  const [count, setCount] = useState(100);
  const [hidePegged, setHidePegged] = useState(true);
  const [selected, setSelected] = useState<string | null>(null);
  const [size, setSize] = useState({ w: 960, h: 600 });

  const wrapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const nodes = useRef<Map<string, Node>>(new Map());
  const groups = useRef<Map<string, SVGGElement>>(new Map());
  const drag = useRef<{ id: string; dx: number; dy: number; moved: number } | null>(null);
  // Acorda o laço de física (ele dorme quando as bolhas param, para não gastar CPU à toa).
  const wake = useRef<() => void>(() => {});

  const items = useMemo(
    () =>
      rows
        .filter((r) => (hidePegged ? !r.pegged : true))
        .slice(0, count)
        .filter((r) => Number.isFinite(r[period]))
        .map((r) => ({ row: r, change: r[period] })),
    [rows, hidePegged, count, period]
  );

  // Raio de cada bolha: a área total ocupa cerca de 55% do quadro.
  const radii = useMemo(() => {
    const metric = items.map((it) => (sizeBy === "change" ? Math.abs(it.change) + 0.4 : Math.sqrt(Math.max(it.row.marketCapBrl, 1))));
    const total = metric.reduce((a, b) => a + b, 0) || 1;
    const area = size.w * size.h * 0.55;
    const out = new Map<string, number>();
    items.forEach((it, i) => {
      const r = Math.sqrt(((metric[i] / total) * area) / Math.PI);
      out.set(it.row.id, Math.max(9, Math.min(r, Math.min(size.w, size.h) * 0.22)));
    });
    return out;
  }, [items, sizeBy, size]);

  // Tamanho do quadro acompanha a largura da página.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const w = Math.round(entry.contentRect.width);
      const h = Math.round(w < 640 ? Math.max(460, w * 1.15) : Math.min(720, Math.max(480, w * 0.6)));
      setSize((s) => (s.w === w && s.h === h ? s : { w, h }));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Sincroniza os nós da física com as moedas visíveis.
  useEffect(() => {
    const map = nodes.current;
    const ids = new Set(items.map((i) => i.row.id));
    for (const id of [...map.keys()]) if (!ids.has(id)) map.delete(id);
    items.forEach((it, i) => {
      const r = radii.get(it.row.id) ?? 10;
      const n = map.get(it.row.id);
      if (n) n.r = r;
      else {
        const angle = i * 2.399963; // espiral áurea: espalha as bolhas novas sem sorteio
        const dist = Math.min(size.w, size.h) * 0.42 * Math.sqrt((i + 1) / (items.length + 1));
        map.set(it.row.id, {
          id: it.row.id,
          r,
          x: size.w / 2 + Math.cos(angle) * dist,
          y: size.h / 2 + Math.sin(angle) * dist,
          vx: 0,
          vy: 0,
        });
      }
    });
    wake.current();
  }, [items, radii, size]);

  // Laço de física: atração ao centro, colisão entre bolhas e paredes.
  useEffect(() => {
    let raf = 0;
    let running = false;
    let still = 0;
    const step = () => {
      const list = [...nodes.current.values()];
      const before = list.map((n) => [n.x, n.y]);
      const cx = size.w / 2;
      const cy = size.h / 2;
      for (const n of list) {
        if (drag.current?.id === n.id) continue;
        n.vx += (cx - n.x) * 0.0006;
        n.vy += (cy - n.y) * 0.0009;
      }
      for (let i = 0; i < list.length; i++) {
        const a = list[i];
        for (let j = i + 1; j < list.length; j++) {
          const b = list[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const min = a.r + b.r + 1.5;
          const d2 = dx * dx + dy * dy;
          if (d2 >= min * min) continue;
          const d = Math.sqrt(d2) || 0.01;
          const push = (min - d) / 2;
          const ux = dx / d;
          const uy = dy / d;
          const aFixed = drag.current?.id === a.id;
          const bFixed = drag.current?.id === b.id;
          if (!aFixed) {
            a.x -= ux * push * (bFixed ? 2 : 1);
            a.y -= uy * push * (bFixed ? 2 : 1);
            a.vx -= ux * 0.05;
            a.vy -= uy * 0.05;
          }
          if (!bFixed) {
            b.x += ux * push * (aFixed ? 2 : 1);
            b.y += uy * push * (aFixed ? 2 : 1);
            b.vx += ux * 0.05;
            b.vy += uy * 0.05;
          }
        }
      }
      for (const n of list) {
        if (drag.current?.id !== n.id) {
          n.vx *= 0.86;
          n.vy *= 0.86;
          n.x += n.vx;
          n.y += n.vy;
        }
        if (n.x < n.r) {
          n.x = n.r;
          n.vx *= -0.4;
        }
        if (n.x > size.w - n.r) {
          n.x = size.w - n.r;
          n.vx *= -0.4;
        }
        if (n.y < n.r) {
          n.y = n.r;
          n.vy *= -0.4;
        }
        if (n.y > size.h - n.r) {
          n.y = size.h - n.r;
          n.vy *= -0.4;
        }
        const g = groups.current.get(n.id);
        if (g) g.setAttribute("transform", `translate(${n.x.toFixed(1)} ${n.y.toFixed(1)})`);
      }
      // Quase parado por ~1,5 s e sem arrasto: dorme até a próxima interação ou dado novo.
      let moved = 0;
      list.forEach((n, i) => {
        moved = Math.max(moved, Math.abs(n.x - before[i][0]) + Math.abs(n.y - before[i][1]));
      });
      still = !drag.current && moved < 0.05 ? still + 1 : 0;
      if (still > 90) {
        running = false;
        return;
      }
      raf = requestAnimationFrame(step);
    };
    wake.current = () => {
      still = 0;
      if (running) return;
      running = true;
      raf = requestAnimationFrame(step);
    };
    wake.current();
    return () => {
      cancelAnimationFrame(raf);
      running = false;
      wake.current = () => {};
    };
  }, [size]);

  function toLocal(e: React.PointerEvent): { x: number; y: number } {
    const svg = svgRef.current;
    if (!svg) return { x: 0, y: 0 };
    const rect = svg.getBoundingClientRect();
    return { x: ((e.clientX - rect.left) / rect.width) * size.w, y: ((e.clientY - rect.top) / rect.height) * size.h };
  }

  function onDown(e: React.PointerEvent, id: string) {
    const n = nodes.current.get(id);
    if (!n) return;
    const p = toLocal(e);
    drag.current = { id, dx: p.x - n.x, dy: p.y - n.y, moved: 0 };
    wake.current();
    (e.currentTarget as Element).setPointerCapture?.(e.pointerId);
  }

  function onMove(e: React.PointerEvent) {
    const d = drag.current;
    if (!d) return;
    const n = nodes.current.get(d.id);
    if (!n) return;
    const p = toLocal(e);
    const nx = p.x - d.dx;
    const ny = p.y - d.dy;
    d.moved += Math.abs(nx - n.x) + Math.abs(ny - n.y);
    n.x = nx;
    n.y = ny;
    n.vx = 0;
    n.vy = 0;
  }

  function onUp() {
    const d = drag.current;
    drag.current = null;
    if (d && d.moved < 6) setSelected((s) => (s === d.id ? null : d.id));
  }

  const sel = selected ? rows.find((r) => r.id === selected) ?? null : null;
  const selHref = sel ? (sel.id === "btc-bitcoin" ? "/bitcoin" : profiles[sel.id] ? `/moedas/${profiles[sel.id]}` : null) : null;
  const ups = items.filter((i) => i.change > 0).length;

  const btn = (active: boolean) =>
    `inline-flex h-8 items-center rounded-lg border px-3 text-xs font-medium transition ${
      active ? "border-brand bg-brand text-brand-foreground" : "border-border bg-surface text-muted hover:text-foreground"
    }`;

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Período da variação">
          {PERIODS.map((p) => {
            const needsLong = p.key === "ch30d" || p.key === "ch1y";
            const disabled = needsLong && !hasLong;
            return (
              <button
                key={p.key}
                type="button"
                className={`${btn(period === p.key)} disabled:cursor-not-allowed disabled:opacity-40`}
                aria-pressed={period === p.key}
                disabled={disabled}
                title={disabled ? "Carregando a variação deste período" : undefined}
                onClick={() => setPeriod(p.key)}
              >
                {p.label}
              </button>
            );
          })}
        </div>
        <span className="mx-1 hidden h-5 w-px bg-border sm:block" aria-hidden="true" />
        <div className="flex gap-1.5" role="group" aria-label="Tamanho da bolha">
          <button type="button" className={btn(sizeBy === "change")} aria-pressed={sizeBy === "change"} onClick={() => setSizeBy("change")}>
            Tamanho: variação
          </button>
          <button type="button" className={btn(sizeBy === "cap")} aria-pressed={sizeBy === "cap"} onClick={() => setSizeBy("cap")}>
            Tamanho: valor de mercado
          </button>
        </div>
        <label className="ml-auto inline-flex items-center gap-2 text-xs text-muted">
          Moedas
          <select
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="h-8 rounded-lg border border-border bg-surface px-2 text-xs text-foreground"
          >
            {[50, 100, 150].map((n) => (
              <option key={n} value={n}>
                Top {n}
              </option>
            ))}
          </select>
        </label>
        <label className="inline-flex items-center gap-2 text-xs text-muted">
          <input type="checkbox" checked={hidePegged} onChange={(e) => setHidePegged(e.target.checked)} className="h-4 w-4 accent-[var(--brand)]" />
          Sem stablecoins
        </label>
      </div>

      <div ref={wrapRef} className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${size.w} ${size.h}`}
          className="block h-auto w-full touch-pan-y select-none"
          role="img"
          aria-label={`Bolhas das ${items.length} maiores criptomoedas: ${ups} em alta e ${items.length - ups} em queda em ${PERIODS.find((p) => p.key === period)?.label}`}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerLeave={onUp}
          onPointerCancel={() => {
            // Rolagem da página que começou numa bolha: não seleciona nem prende a bolha.
            drag.current = null;
          }}
        >
          {items.map((it, i) => {
            const r = radii.get(it.row.id) ?? 10;
            // Posição inicial na mesma espiral do efeito de sincronização: o HTML do servidor já sai
            // com as bolhas espalhadas (antes ficavam todas no canto até o JS carregar). Depois a
            // física move o grupo direto no DOM, e o React só mexe aqui se a ordem mudar.
            const angle = i * 2.399963;
            const dist = Math.min(size.w, size.h) * 0.42 * Math.sqrt((i + 1) / (items.length + 1));
            const x0 = Math.round(size.w / 2 + Math.cos(angle) * dist);
            const y0 = Math.round(size.h / 2 + Math.sin(angle) * dist);
            const c = bubbleColors(it.change);
            const showText = r >= 13;
            const showLogo = r >= 30;
            return (
              <g
                key={it.row.id}
                ref={(el) => {
                  if (el) groups.current.set(it.row.id, el);
                  else groups.current.delete(it.row.id);
                }}
                className="bubble-node"
                transform={`translate(${x0} ${y0})`}
                onPointerDown={(e) => onDown(e, it.row.id)}
              >
                <circle r={r} fill={c.fill} stroke={selected === it.row.id ? "#ffffff" : c.stroke} strokeWidth={selected === it.row.id ? 3 : 1.5} />
                {showLogo && <image href={coinLogo(it.row.id)} x={-r * 0.26} y={-r * 0.72} width={r * 0.52} height={r * 0.52} />}
                {showText && (
                  <>
                    <text
                      y={showLogo ? r * 0.12 : -r * 0.05}
                      textAnchor="middle"
                      fill="#ffffff"
                      fontWeight="700"
                      fontSize={Math.max(8, Math.min(26, r * 0.38))}
                      fontFamily="var(--font-display)"
                    >
                      {it.row.symbol}
                    </text>
                    <text
                      y={showLogo ? r * 0.45 : r * 0.32}
                      textAnchor="middle"
                      fill="rgba(255,255,255,0.9)"
                      fontSize={Math.max(7, Math.min(18, r * 0.27))}
                      fontFamily="var(--font-mono)"
                    >
                      {formatPct(it.change, Math.abs(it.change) >= 10 ? 0 : 1)}
                    </text>
                  </>
                )}
                <title>{`${it.row.name}: ${formatPct(it.change)} em ${PERIODS.find((p) => p.key === period)?.label}`}</title>
              </g>
            );
          })}
        </svg>
        {items.length === 0 && (
          <p className="absolute inset-0 flex items-center justify-center text-sm text-white/70">Carregando as bolhas...</p>
        )}
      </div>

      {/* Alternativa às bolhas para teclado e leitor de tela: a mesma lista, com o mesmo painel. */}
      <details className="mt-3 rounded-xl border border-border bg-surface">
        <summary className="cursor-pointer px-4 py-2.5 text-sm font-medium">Ver as moedas em lista</summary>
        <ul className="grid gap-1 px-2 pb-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <li key={it.row.id}>
              <button
                type="button"
                onClick={() => setSelected(it.row.id)}
                aria-pressed={selected === it.row.id}
                className="flex w-full items-center justify-between gap-3 rounded-lg px-2 py-1.5 text-left text-sm hover:bg-surface-2"
              >
                <span className="min-w-0 truncate">
                  {it.row.name} <span className="font-mono text-xs text-muted">{it.row.symbol}</span>
                </span>
                <ChangeBadge value={it.change} className="text-xs" />
              </button>
            </li>
          ))}
        </ul>
      </details>

      {sel && (
        <div aria-live="polite" className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 rounded-xl border border-border bg-surface p-4">
          <p className="font-display text-lg font-bold">
            {sel.name} <span className="font-mono text-sm text-muted">{sel.symbol} · #{sel.rank}</span>
          </p>
          <p className="tabular font-mono">{formatBRL(sel.priceBrl)}</p>
          <p className="flex flex-wrap gap-3 text-xs">
            {PERIODS.map((p) => (
              <span key={p.key}>
                <span className="text-muted">{p.label}: </span>
                <ChangeBadge value={sel[p.key]} />
              </span>
            ))}
          </p>
          <p className="text-xs text-muted">Valor de mercado {formatCompactBRL(sel.marketCapBrl)}</p>
          {selHref && (
            <Link href={selHref} className="ml-auto text-sm font-semibold text-accent hover:underline">
              Ver página da moeda →
            </Link>
          )}
        </div>
      )}
      <p className="mt-3 text-xs leading-relaxed text-muted">
        {ups} de {items.length} moedas em alta no período. Toque numa bolha para ver os detalhes ou arraste para mexer. Dados:
        CoinPaprika (1h, 24h e 7 dias, a cada 60 s) e CoinGecko (30 dias e 1 ano).
      </p>
    </div>
  );
}

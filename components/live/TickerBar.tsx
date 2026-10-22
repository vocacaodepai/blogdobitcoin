"use client";

import Link from "next/link";
import { useState } from "react";
import { TICKER_BAR_PAIRS } from "@/lib/market/binance";
import { formatBRL } from "@/lib/market/format";
import { useTickerBar } from "@/lib/market/live";
import { ChangeBadge } from "./ChangeBadge";

/**
 * Barra de cotações do topo do site: Bitcoin e as principais moedas em real
 * (pares da Binance), atualizada a cada 10 segundos. Rola sozinha; pausa no
 * hover, no foco, no toque ou pelo botão.
 */
export function TickerBar() {
  const { data, prev } = useTickerBar();
  const [paused, setPaused] = useState(false);

  const items = TICKER_BAR_PAIRS.map((p) => {
    const t = data?.[p.symbol];
    const before = prev?.[p.symbol];
    const dir = t && before ? Math.sign(t.last - before.last) : 0;
    return { ...p, t, dir };
  });
  const track = [...items, ...items];

  return (
    <div className="border-b border-white/10 bg-ink text-ink-foreground">
      <div className="mx-auto flex h-9 w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <Link
          href="/mercado"
          className="label-mono mr-3 flex shrink-0 items-center gap-2 text-white hover:text-brand"
        >
          <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-up" aria-hidden="true" />
          Ao vivo
        </Link>
        <button
          type="button"
          aria-pressed={paused}
          onClick={() => setPaused((p) => !p)}
          className="label-mono mr-3 hidden shrink-0 text-ink-foreground/60 transition hover:text-white sm:inline"
        >
          {paused ? "Retomar" : "Pausar"}
          <span className="sr-only"> rolagem das cotações</span>
        </button>
        <div
          className="ticker relative flex-1 overflow-hidden"
          role="region"
          aria-label="Cotações das criptomoedas em reais"
          data-paused={paused || undefined}
          onTouchStart={() => setPaused(true)}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-ink to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-ink to-transparent" />
          <ul className="ticker-track flex w-max items-center gap-7 whitespace-nowrap">
            {track.map((it, i) => (
              <li key={`${it.symbol}-${i}`} aria-hidden={i >= items.length}>
                <Link
                  href={it.href}
                  tabIndex={i >= items.length ? -1 : 0}
                  className="flex items-center gap-2 text-[13px] text-ink-foreground/90 hover:text-white"
                  title={`${it.name}: preço em reais e variação em 24 horas`}
                >
                  <span className={`font-mono text-[11px] font-semibold ${it.short === "BTC" ? "text-brand" : "text-ink-foreground/60"}`}>
                    {it.short}
                  </span>
                  <span
                    key={it.t?.last ?? "x"}
                    className={`tabular rounded px-0.5 font-mono ${it.dir > 0 ? "flash-up" : it.dir < 0 ? "flash-down" : ""}`}
                  >
                    {it.t ? formatBRL(it.t.last) : "R$ ..."}
                  </span>
                  {it.t && <ChangeBadge value={it.t.changePct} className="text-[11px]" />}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

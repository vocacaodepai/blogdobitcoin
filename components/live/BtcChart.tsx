"use client";

import { useState } from "react";
import { fetchKlines } from "@/lib/market/binance";
import { formatBRL, formatUSD } from "@/lib/market/format";
import { parseHistory, type HistoryFile } from "@/lib/market/history";
import { usePolling } from "@/lib/market/usePolling";
import { withBasePath } from "@/lib/seo";
import { PriceChart, type ChartPoint } from "./PriceChart";

type Range = "24h" | "7d" | "30d" | "1a" | "tudo";
type Currency = "BRL" | "USD";

const RANGES: { key: Range; label: string }[] = [
  { key: "24h", label: "24h" },
  { key: "7d", label: "7 dias" },
  { key: "30d", label: "30 dias" },
  { key: "1a", label: "1 ano" },
  { key: "tudo", label: "Desde 2010" },
];

const KLINES: Record<Exclude<Range, "tudo">, { interval: "15m" | "1h" | "4h" | "1d"; limit: number; refresh: number }> = {
  "24h": { interval: "15m", limit: 96, refresh: 60_000 },
  "7d": { interval: "1h", limit: 168, refresh: 5 * 60_000 },
  "30d": { interval: "4h", limit: 180, refresh: 15 * 60_000 },
  "1a": { interval: "1d", limit: 365, refresh: 60 * 60_000 },
};

async function loadHistory(currency: Currency): Promise<ChartPoint[]> {
  const res = await fetch(withBasePath("/data/btc-historico.json"));
  if (!res.ok) throw new Error("historico");
  const rows = parseHistory((await res.json()) as HistoryFile);
  return rows.map((r) => ({ t: new Date(`${r.day}T12:00:00Z`).getTime(), v: currency === "BRL" ? r.brl : r.usd }));
}

function RangeChart({ range, currency }: { range: Range; currency: Currency }) {
  const symbol = currency === "BRL" ? "BTCBRL" : "BTCUSDT";
  const cfg = range === "tudo" ? null : KLINES[range];
  const { data, error } = usePolling<ChartPoint[]>(
    `btc-chart-${range}-${currency}`,
    async () => {
      if (!cfg) return loadHistory(currency);
      const candles = await fetchKlines(symbol, cfg.interval, cfg.limit);
      return candles.map((c) => ({ t: c.t, v: c.c }));
    },
    cfg ? cfg.refresh : 6 * 60 * 60_000
  );
  if (error && !data) {
    return (
      <div className="flex h-[280px] items-center justify-center rounded-xl border border-dashed border-border text-sm text-muted">
        Não foi possível carregar o gráfico agora. Tentando de novo...
      </div>
    );
  }
  return (
    <PriceChart
      points={data ?? []}
      log={range === "tudo"}
      format={(v) => (currency === "BRL" ? formatBRL(v, { decimals: v < 100 ? 2 : 0 }) : formatUSD(v, { decimals: v < 100 ? 2 : 0 }))}
      label="Bitcoin"
    />
  );
}

/** Gráfico do Bitcoin com períodos (24h a desde 2010) e moeda (real ou dólar). */
export function BtcChart() {
  const [range, setRange] = useState<Range>("24h");
  const [currency, setCurrency] = useState<Currency>("BRL");
  const btn = (active: boolean) =>
    `inline-flex h-8 items-center rounded-lg border px-3 text-xs font-medium transition ${
      active ? "border-foreground bg-foreground text-background" : "border-border bg-surface text-muted hover:text-foreground"
    }`;
  return (
    <section aria-labelledby="grafico-btc" className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 id="grafico-btc" className="font-display text-xl font-bold tracking-tight">
          Gráfico do Bitcoin
        </h2>
        <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Período do gráfico">
          {RANGES.map((r) => (
            <button key={r.key} type="button" className={btn(range === r.key)} aria-pressed={range === r.key} onClick={() => setRange(r.key)}>
              {r.label}
            </button>
          ))}
          <span className="mx-1 h-5 w-px bg-border" aria-hidden="true" />
          {(["BRL", "USD"] as Currency[]).map((c) => (
            <button key={c} type="button" className={btn(currency === c)} aria-pressed={currency === c} onClick={() => setCurrency(c)}>
              {c === "BRL" ? "R$" : "US$"}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <RangeChart key={`${range}-${currency}`} range={range} currency={currency} />
      </div>
      <p className="mt-3 text-xs leading-relaxed text-muted">
        {range === "tudo"
          ? "Desde 2010: fechamento mensal em escala logarítmica (blockchain.com e dólar PTAX do Banco Central para o valor em real)."
          : `Velas da Binance (${currency === "BRL" ? "par BTC/BRL" : "par BTC/USDT"}), fechamento de cada intervalo.`}
      </p>
    </section>
  );
}

"use client";

import type { BtcQuote } from "@/lib/market/bitcoin";
import { formatBRL } from "@/lib/market/format";
import { useBtcCandles, useBtcQuote } from "@/lib/market/live";
import { ChangeBadge } from "./ChangeBadge";

/** Preço de fechamento N dias atrás nas velas diárias (a última vela é o dia em curso). */
function closeDaysAgo(daily: { t: number; c: number }[], days: number): number | null {
  const i = daily.length - 1 - days;
  return i >= 0 ? daily[i].c : null;
}

/** Variação do Bitcoin em 1h, 24h, 7 dias, 30 dias, 90 dias, no ano e em 1 ano, calculada sobre o preço ao vivo. */
export function PeriodChanges({ initial }: { initial: BtcQuote | null }) {
  const { data: quote } = useBtcQuote(initial);
  const { data: candles } = useBtcCandles();
  const price = quote?.brl ?? null;

  const ref = (() => {
    if (!candles || !price) return null;
    const { daily, hourly } = candles;
    const yearStart = new Date(new Date().getFullYear(), 0, 1).getTime();
    const ytdCandle = daily.find((c) => c.t >= yearStart);
    return [
      { label: "1 hora", base: hourly.length >= 2 ? hourly[hourly.length - 2].c : null },
      { label: "24 horas", base: quote?.open24h ?? (hourly.length >= 25 ? hourly[hourly.length - 25].c : null) },
      { label: "7 dias", base: closeDaysAgo(daily, 7) },
      { label: "30 dias", base: closeDaysAgo(daily, 30) },
      { label: "90 dias", base: closeDaysAgo(daily, 90) },
      { label: "No ano", base: ytdCandle ? ytdCandle.o : null },
      { label: "1 ano", base: closeDaysAgo(daily, 365) },
    ];
  })();

  return (
    <section aria-labelledby="variacao-periodo" className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
      <h2 id="variacao-periodo" className="font-display text-xl font-bold tracking-tight">
        Variação do Bitcoin por período
      </h2>
      <p className="mt-1 text-sm text-muted">Comparação do preço de agora com o fechamento de cada período, no par BTC/BRL.</p>
      <dl className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-7">
        {(ref ?? [{ label: "1 hora" }, { label: "24 horas" }, { label: "7 dias" }, { label: "30 dias" }, { label: "90 dias" }, { label: "No ano" }, { label: "1 ano" }]).map(
          (r) => {
            const base = "base" in r ? r.base : null;
            const pct = base && price ? ((price - base) / base) * 100 : null;
            return (
              <div key={r.label} className="rounded-lg border border-border bg-background/60 px-3 py-2.5">
                <dt className="label-mono text-muted">{r.label}</dt>
                <dd className="mt-1">
                  <ChangeBadge value={pct} className="text-sm" />
                  {base ? (
                    <span className="tabular mt-0.5 block font-mono text-[11px] text-muted">de {formatBRL(base, { decimals: 0 })}</span>
                  ) : (
                    <span className="mt-0.5 block font-mono text-[11px] text-muted">carregando</span>
                  )}
                </dd>
              </div>
            );
          }
        )}
      </dl>
    </section>
  );
}

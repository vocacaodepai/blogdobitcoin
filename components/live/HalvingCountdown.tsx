"use client";

import { formatNumber } from "@/lib/market/format";
import { halvingInfo, MAX_SUPPLY, PAST_HALVINGS, TARGET_BLOCK_SECONDS } from "@/lib/market/halving";
import { useDifficulty, useNow, useTipHeight } from "@/lib/market/live";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

/**
 * Contagem regressiva do próximo halving do Bitcoin, pela altura atual do
 * bloco (mempool.space) e pelo tempo médio real entre blocos da época de
 * dificuldade atual. Mostra também a oferta já emitida e os halvings passados.
 */
export function HalvingCountdown({
  initialHeight,
  compact = false,
}: {
  initialHeight: number | null;
  compact?: boolean;
}) {
  const { data: height } = useTipHeight(initialHeight);
  const { data: diff } = useDifficulty();
  const now = useNow(1000);

  if (!height) {
    return (
      <section className="rounded-2xl border border-border bg-surface p-6 text-sm text-muted">
        Carregando a altura atual da blockchain...
      </section>
    );
  }

  const avgSec = diff?.timeAvg ? diff.timeAvg / 1000 : TARGET_BLOCK_SECONDS;
  const info = halvingInfo(height, avgSec, now);
  const msLeft = Math.max(0, info.estimatedAt - now);
  const days = Math.floor(msLeft / 86400_000);
  const hours = Math.floor((msLeft % 86400_000) / 3600_000);
  const minutes = Math.floor((msLeft % 3600_000) / 60_000);
  const seconds = Math.floor((msLeft % 60_000) / 1000);
  const dateLabel = new Date(info.estimatedAt).toLocaleDateString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <section aria-labelledby="halving-titulo" className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 id="halving-titulo" className="font-display text-xl font-bold tracking-tight">
          Próximo halving do Bitcoin
        </h2>
        <span className="label-mono text-muted">{info.nextNumber}º halving · bloco {formatNumber(info.nextHeight, 0)}</span>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-2 text-center">
        {[
          { v: formatNumber(days, 0), l: "dias" },
          { v: pad(hours), l: "horas" },
          { v: pad(minutes), l: "min" },
          { v: pad(seconds), l: "seg" },
        ].map((x) => (
          <div key={x.l} className="rounded-xl border border-border bg-background/70 py-3">
            <p className="tabular font-display text-2xl font-bold sm:text-4xl" suppressHydrationWarning>
              {x.v}
            </p>
            <p className="label-mono text-muted">{x.l}</p>
          </div>
        ))}
      </div>

      <p className="mt-4 text-sm leading-relaxed">
        Faltam <strong className="tabular">{formatNumber(info.blocksLeft, 0)} blocos</strong>. No ritmo atual (um bloco a cada{" "}
        {formatNumber(avgSec / 60, 1)} min em média), o halving deve acontecer por volta de <strong suppressHydrationWarning>{dateLabel}</strong>. A recompensa
        por bloco cai de <strong>{formatNumber(info.subsidyNow, 4).replace(/0+$/, "").replace(/,$/, "")} BTC</strong> para{" "}
        <strong>{formatNumber(info.subsidyNext, 5).replace(/0+$/, "").replace(/,$/, "")} BTC</strong>.
      </p>

      <div className="mt-4">
        <div className="flex justify-between font-mono text-[11px] text-muted">
          <span>Época atual: {(info.progress * 100).toLocaleString("pt-BR", { maximumFractionDigits: 1 })}% concluída</span>
          <span>Bloco atual {formatNumber(height, 0)}</span>
        </div>
        <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-surface-2" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(info.progress * 100)} aria-label="Progresso até o próximo halving">
          <div className="h-full rounded-full bg-gradient-to-r from-brand to-accent-2" style={{ width: `${info.progress * 100}%` }} />
        </div>
      </div>

      {!compact && (
        <>
          <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-background/60 px-3 py-2.5">
              <p className="label-mono text-muted">Bitcoins já emitidos</p>
              <p className="tabular mt-1 font-mono text-sm font-semibold">{formatNumber(info.supply, 0)} BTC</p>
            </div>
            <div className="rounded-lg border border-border bg-background/60 px-3 py-2.5">
              <p className="label-mono text-muted">Do limite de 21 milhões</p>
              <p className="tabular mt-1 font-mono text-sm font-semibold">{formatNumber(info.supplyPct, 2)}%</p>
            </div>
            <div className="rounded-lg border border-border bg-background/60 px-3 py-2.5">
              <p className="label-mono text-muted">Ainda por minerar</p>
              <p className="tabular mt-1 font-mono text-sm font-semibold">{formatNumber(MAX_SUPPLY - info.supply, 0)} BTC</p>
            </div>
          </div>
          <div className="mt-5 overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[420px] text-sm">
              <thead className="bg-surface-2 text-left">
                <tr>
                  <th className="px-3 py-2 font-semibold">Halving</th>
                  <th className="px-3 py-2 font-semibold">Data</th>
                  <th className="px-3 py-2 font-semibold">Bloco</th>
                  <th className="px-3 py-2 font-semibold">Recompensa depois</th>
                </tr>
              </thead>
              <tbody>
                {PAST_HALVINGS.map((h) => (
                  <tr key={h.number} className="border-t border-border">
                    <td className="px-3 py-2">{h.number}º</td>
                    <td className="px-3 py-2">{new Date(`${h.date}T12:00:00Z`).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })}</td>
                    <td className="tabular px-3 py-2 font-mono">{formatNumber(h.height, 0)}</td>
                    <td className="tabular px-3 py-2 font-mono">{String(h.subsidyAfter).replace(".", ",")} BTC</td>
                  </tr>
                ))}
                <tr className="border-t border-border bg-brand/5">
                  <td className="px-3 py-2 font-semibold">{info.nextNumber}º (próximo)</td>
                  <td className="px-3 py-2" suppressHydrationWarning>
                    estimativa: {dateLabel}
                  </td>
                  <td className="tabular px-3 py-2 font-mono">{formatNumber(info.nextHeight, 0)}</td>
                  <td className="tabular px-3 py-2 font-mono">{String(info.subsidyNext).replace(".", ",")} BTC</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
      <p className="mt-3 text-xs text-muted">
        Altura do bloco e tempo médio: mempool.space. A data é estimativa: depende da velocidade real da mineração.
      </p>
    </section>
  );
}

"use client";

import Link from "next/link";
import type { BtcQuote } from "@/lib/market/bitcoin";
import { formatBRL, formatClock, formatNumber, formatPct, formatUSD } from "@/lib/market/format";
import { BTC_REFRESH_MS, useBtcQuote, useNow } from "@/lib/market/live";
import { LogoIcon } from "@/components/Logo";
import { ChangeBadge } from "./ChangeBadge";

function Stat({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-lg border border-border bg-background/60 px-3 py-2.5">
      <dt className="label-mono text-muted">{label}</dt>
      <dd className="tabular mt-1 font-mono text-sm font-semibold" title={hint}>
        {value}
      </dd>
    </div>
  );
}

/**
 * Painel do preço do Bitcoin ao vivo: preço em real e dólar, variação de 24h,
 * variação desde a última atualização (a cada ciclo de 10 s), contagem para a
 * próxima leitura, máxima/mínima, volume, dólar implícito e satoshis por real.
 */
export function BtcLivePanel({
  initial,
  variant = "full",
  headingLevel = "h2",
}: {
  initial: BtcQuote | null;
  variant?: "full" | "hero";
  headingLevel?: "h1" | "h2";
}) {
  const { data, prev, history, updatedAt, nextAt, loading, error } = useBtcQuote(initial);
  const now = useNow(1000);
  const Heading = headingLevel;

  const tickDelta = data && prev ? data.brl - prev.brl : null;
  const tickPct = data && prev && prev.brl > 0 ? ((data.brl - prev.brl) / prev.brl) * 100 : null;
  const dir = tickDelta == null ? 0 : Math.sign(tickDelta);
  const secondsLeft = nextAt ? Math.max(0, Math.ceil((nextAt - now) / 1000)) : null;
  const progress = nextAt ? Math.min(1, Math.max(0, 1 - (nextAt - now) / BTC_REFRESH_MS)) : 0;
  const satsPerReal = data ? 1e8 / data.brl : null;

  return (
    <section
      aria-label="Preço do Bitcoin ao vivo"
      className="relative isolate overflow-hidden rounded-2xl border border-border bg-surface p-5 sm:p-7"
    >
      <div aria-hidden="true" className="btc-glow pointer-events-none absolute inset-0 -z-10 opacity-70" />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <LogoIcon size={40} />
          <div>
            <Heading className="font-display text-xl font-bold tracking-tight sm:text-2xl">
              Bitcoin <span className="font-mono text-base font-medium text-muted">BTC</span>
            </Heading>
            <p className="label-mono text-muted">Preço do Bitcoin hoje em reais</p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5">
          <span
            className={`inline-block h-2 w-2 rounded-full ${error && !data ? "bg-warn" : "pulse-dot bg-up"}`}
            aria-hidden="true"
          />
          <span className="label-mono text-muted">
            {error && !data ? "Reconectando" : "Ao vivo · a cada 10 s"}
          </span>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-end gap-x-5 gap-y-2">
        <p
          key={data?.brl ?? "vazio"}
          className={`tabular rounded-lg px-1 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl ${dir > 0 ? "flash-up" : dir < 0 ? "flash-down" : ""}`}
          aria-live="polite"
        >
          {data ? formatBRL(data.brl) : "R$ ..."}
        </p>
        <div className="pb-1.5">
          {data?.change24h != null && <ChangeBadge value={data.change24h} solid className="text-sm" />}
          <span className="ml-2 font-mono text-xs text-muted">em 24 horas</span>
        </div>
      </div>
      <p className="tabular mt-1 font-mono text-base text-muted sm:text-lg">
        {data ? formatUSD(data.usd) : "US$ ..."}
      </p>

      <div className="mt-5 rounded-xl border border-border bg-background/70 p-3.5 sm:p-4">
        <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
          <p>
            <span className="text-muted">Desde a última atualização: </span>
            {tickDelta == null ? (
              <span className="font-mono text-muted">aguardando o próximo ciclo</span>
            ) : (
              <span className={`tabular font-mono font-semibold ${dir > 0 ? "text-up" : dir < 0 ? "text-down" : "text-muted"}`}>
                {dir > 0 ? "▲ +" : dir < 0 ? "▼ −" : ""}
                {formatBRL(Math.abs(tickDelta))} ({formatPct(tickPct, 3)})
              </span>
            )}
          </p>
          <p className="font-mono text-xs text-muted">
            {updatedAt ? `Atualizado às ${formatClock(updatedAt)}` : "Carregando"}
            {secondsLeft != null && !loading ? ` · próxima em ${secondsLeft} s` : loading ? " · atualizando" : ""}
          </p>
        </div>
        <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-surface-2" aria-hidden="true">
          <div className="h-full rounded-full bg-brand transition-[width] duration-1000 ease-linear" style={{ width: `${progress * 100}%` }} />
        </div>
      </div>

      {variant === "full" && (
        <dl className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
          <Stat label="Máxima 24h" value={data?.high24h ? formatBRL(data.high24h, { decimals: 0 }) : "--"} />
          <Stat label="Mínima 24h" value={data?.low24h ? formatBRL(data.low24h, { decimals: 0 }) : "--"} />
          <Stat label="Abertura 24h" value={data?.open24h ? formatBRL(data.open24h, { decimals: 0 }) : "--"} />
          <Stat
            label="Volume 24h"
            value={data?.volumeBtc ? `${formatNumber(data.volumeBtc, 0)} BTC` : "--"}
            hint="Volume negociado no par em real da fonte da cotação"
          />
          <Stat label="Dólar implícito" value={data ? formatBRL(data.usdBrl) : "--"} hint="Preço em real dividido pelo preço em dólar" />
          <Stat label="R$ 1 compra" value={satsPerReal ? `${formatNumber(satsPerReal, 0)} sats` : "--"} hint="1 bitcoin = 100 milhões de satoshis" />
        </dl>
      )}

      {variant === "full" && history.length > 1 && (
        <div className="mt-5">
          <p className="label-mono text-muted">Variação a cada ciclo (últimas atualizações)</p>
          <ol className="mt-2 grid gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
            {history.slice(0, 9).map((h, i) => {
              const older = history[i + 1];
              const d = older ? h.data.brl - older.data.brl : null;
              return (
                <li
                  key={h.at}
                  className="flex items-center justify-between rounded-lg border border-border bg-background/50 px-3 py-1.5 font-mono text-xs"
                >
                  <span className="text-muted">{formatClock(h.at)}</span>
                  <span className="tabular">{formatBRL(h.data.brl, { decimals: 0 })}</span>
                  <span className={`tabular w-24 text-right ${d == null ? "text-muted" : d > 0 ? "text-up" : d < 0 ? "text-down" : "text-muted"}`}>
                    {d == null ? "início" : `${d > 0 ? "+" : ""}${formatNumber(d, 0)}`}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      )}

      <p className="mt-4 text-xs leading-relaxed text-muted">
        Fonte: {data?.source ?? "Binance"}. Cotação informativa, pode diferir da sua corretora.{" "}
        {variant === "hero" ? (
          <Link href="/bitcoin" className="font-medium text-accent hover:underline">
            Ver gráfico, halving e mais dados →
          </Link>
        ) : (
          <Link href="/aviso-de-risco" className="font-medium text-accent hover:underline">
            Não é recomendação de investimento.
          </Link>
        )}
      </p>
    </section>
  );
}

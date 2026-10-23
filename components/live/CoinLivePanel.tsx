"use client";

import { formatBRL, formatClock, formatCompactBRL, formatNumber, formatUSD } from "@/lib/market/format";
import { useMarketWithLong } from "@/lib/market/live";
import type { CoinRow } from "@/lib/market/paprika";
import { ChangeBadge } from "./ChangeBadge";
import { CoinLogo } from "./CoinLogo";

/** Preço ao vivo de uma moeda do ranking (CoinPaprika, a cada 60 s), com variações, valor de mercado e máxima histórica. */
export function CoinLivePanel({
  paprikaId,
  name,
  symbol,
  initialMarket,
}: {
  paprikaId: string;
  name: string;
  symbol: string;
  initialMarket: CoinRow[];
}) {
  const { rows, prev, updatedAt } = useMarketWithLong(initialMarket);
  const c = rows.find((r) => r.id === paprikaId) ?? null;
  const before = prev?.find((r) => r.id === paprikaId);
  const dir = c && before ? Math.sign(c.priceBrl - before.priceBrl) : 0;

  const stats = c
    ? [
        { l: "Posição no ranking", v: `#${c.rank}` },
        { l: "Valor de mercado", v: formatCompactBRL(c.marketCapBrl) },
        { l: "Volume em 24h", v: formatCompactBRL(c.volumeBrl) },
        { l: "Oferta total", v: `${formatNumber(c.supply, 0)} ${symbol}` },
        { l: "Oferta máxima", v: c.maxSupply > 0 ? `${formatNumber(c.maxSupply, 0)} ${symbol}` : "sem limite fixo" },
        {
          l: "Máxima histórica (em dólar)",
          v: c.athUsd
            ? `${formatUSD(c.athUsd)}${c.athDate ? ` (${new Date(c.athDate).toLocaleDateString("pt-BR", { month: "short", year: "numeric", timeZone: "UTC" })})` : ""}`
            : "--",
        },
      ]
    : [];

  return (
    <section aria-label={`Preço de ${name} ao vivo`} className="rounded-2xl border border-border bg-surface p-5 sm:p-7">
      <div className="flex items-center gap-3">
        <CoinLogo id={paprikaId} symbol={symbol} size={40} />
        <div>
          <p className="font-display text-xl font-bold">
            {name} <span className="font-mono text-base font-medium text-muted">{symbol}</span>
          </p>
          <p className="label-mono text-muted">Preço em reais ao vivo</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-end gap-x-4 gap-y-1">
        <p key={c?.priceBrl ?? "x"} className={`tabular rounded px-1 font-display text-4xl font-bold sm:text-5xl ${dir > 0 ? "flash-up" : dir < 0 ? "flash-down" : ""}`}>
          {c ? formatBRL(c.priceBrl) : "R$ ..."}
        </p>
        {c && <ChangeBadge value={c.ch24h} solid className="mb-2 text-sm" />}
      </div>
      <p className="tabular font-mono text-muted">{c ? formatUSD(c.priceUsd) : "US$ ..."}</p>
      {c && (
        <dl className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-5">
          {(
            [
              ["1h", c.ch1h],
              ["24h", c.ch24h],
              ["7 dias", c.ch7d],
              ["30 dias", c.ch30d],
              ["1 ano", c.ch1y],
            ] as const
          ).map(([l, v]) => (
            <div key={l} className="rounded-lg border border-border bg-background/60 px-3 py-2">
              <dt className="label-mono text-muted">{l}</dt>
              <dd className="mt-0.5">
                <ChangeBadge value={v} className="text-sm" />
              </dd>
            </div>
          ))}
        </dl>
      )}
      {stats.length > 0 && (
        <dl className="mt-3 grid grid-cols-2 gap-2 lg:grid-cols-3">
          {stats.map((s) => (
            <div key={s.l} className="rounded-lg border border-border bg-background/60 px-3 py-2">
              <dt className="label-mono text-muted">{s.l}</dt>
              <dd className="tabular mt-0.5 font-mono text-sm font-semibold">{s.v}</dd>
            </div>
          ))}
        </dl>
      )}
      <p className="mt-3 text-xs text-muted">
        Fonte: CoinPaprika (cotação global em real){updatedAt ? `, atualizado às ${formatClock(updatedAt)}` : ""}. Atualiza a cada 60 s.
      </p>
    </section>
  );
}

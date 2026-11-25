"use client";

import Link from "next/link";
import { formatBRL, formatCompactBRL, formatNumber } from "@/lib/market/format";
import { useGlobal, useMarket } from "@/lib/market/live";
import type { CoinRow, GlobalStats } from "@/lib/market/paprika";
import { ChangeBadge } from "./ChangeBadge";
import { CoinLogo } from "./CoinLogo";

function Movers({ title, rows, profiles }: { title: string; rows: CoinRow[]; profiles: Record<string, string> }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <p className="label-mono text-muted">{title}</p>
      <ol className="mt-2 space-y-1.5">
        {rows.map((r) => {
          const href = r.id === "btc-bitcoin" ? "/bitcoin" : profiles[r.id] ? `/moedas/${profiles[r.id]}` : null;
          const inner = (
            <>
              <CoinLogo id={r.id} symbol={r.symbol} size={18} />
              <span className="min-w-0 flex-1 truncate text-sm font-medium">{r.name}</span>
              <span className="tabular font-mono text-xs text-muted">{formatBRL(r.priceBrl)}</span>
              <ChangeBadge value={r.ch24h} className="w-20 justify-end text-xs" />
            </>
          );
          return (
            <li key={r.id}>
              {href ? (
                <Link href={href} className="flex items-center gap-2 hover:text-accent">
                  {inner}
                </Link>
              ) : (
                <span className="flex items-center gap-2">{inner}</span>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/**
 * Panorama do mercado cripto: valor total, volume, dominância do Bitcoin e as
 * maiores altas e quedas de 24h entre as 100 maiores (sem stablecoins).
 */
export function MarketOverview({
  initialGlobal,
  initialRows,
  profiles,
  showMovers = true,
}: {
  initialGlobal: GlobalStats | null;
  initialRows: CoinRow[];
  profiles: Record<string, string>;
  showMovers?: boolean;
}) {
  const { data: g } = useGlobal(initialGlobal);
  const { data } = useMarket(initialRows);
  const rows = data ?? initialRows;
  const btc = rows.find((r) => r.id === "btc-bitcoin");
  const usdBrl = btc && btc.priceUsd > 0 ? btc.priceBrl / btc.priceUsd : null;
  const top = rows.filter((r) => r.rank <= 100 && !r.pegged);
  const gainers = [...top].sort((a, b) => b.ch24h - a.ch24h).slice(0, 5);
  const losers = [...top].sort((a, b) => a.ch24h - b.ch24h).slice(0, 5);

  const cards = [
    {
      label: "Valor total do mercado",
      value: g && usdBrl ? formatCompactBRL(g.marketCapUsd * usdBrl) : "--",
      extra: g ? <ChangeBadge value={g.marketCapChange24h} className="text-xs" /> : null,
    },
    { label: "Volume em 24h", value: g && usdBrl ? formatCompactBRL(g.volumeUsd * usdBrl) : "--", extra: null },
    {
      label: "Dominância do Bitcoin",
      value: g ? `${formatNumber(g.btcDominance, 1)}%` : "--",
      extra: <span className="text-xs text-muted">do valor total</span>,
    },
    { label: "Dólar (via BTC)", value: usdBrl ? formatBRL(usdBrl) : "--", extra: <span className="text-xs text-muted">BTC em R$ / BTC em US$</span> },
  ];

  return (
    <div>
      <dl className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
        {cards.map((c) => (
          <div key={c.label} className="rounded-xl border border-border bg-surface px-4 py-3">
            <dt className="label-mono text-muted">{c.label}</dt>
            <dd className="tabular mt-1 flex flex-wrap items-baseline gap-2 font-display text-lg font-bold">
              {c.value} {c.extra}
            </dd>
          </div>
        ))}
      </dl>
      {showMovers && top.length > 0 && (
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <Movers title="Maiores altas em 24h (top 100)" rows={gainers} profiles={profiles} />
          <Movers title="Maiores quedas em 24h (top 100)" rows={losers} profiles={profiles} />
        </div>
      )}
    </div>
  );
}

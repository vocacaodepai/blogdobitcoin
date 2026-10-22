"use client";

import Link from "next/link";
import { formatBRL } from "@/lib/market/format";
import { useBtcQuote } from "@/lib/market/live";
import { LogoIcon } from "@/components/Logo";
import { ChangeBadge } from "./ChangeBadge";

/** Selo compacto com o preço do Bitcoin ao vivo, no cabeçalho de todas as páginas. */
export function BtcPricePill({ className = "" }: { className?: string }) {
  const { data, prev } = useBtcQuote();
  const dir = data && prev ? Math.sign(data.brl - prev.brl) : 0;
  return (
    <Link
      href="/bitcoin"
      className={`group inline-flex h-9 shrink-0 items-center gap-2 whitespace-nowrap rounded-lg border border-border bg-surface px-2.5 text-sm transition hover:border-brand/60 ${className}`}
      aria-label={data ? `Preço do Bitcoin agora: ${formatBRL(data.brl)}` : "Preço do Bitcoin hoje"}
    >
      <LogoIcon size={18} />
      <span
        key={data?.brl ?? "x"}
        className={`tabular rounded px-0.5 font-mono text-[13px] font-semibold ${dir > 0 ? "flash-up" : dir < 0 ? "flash-down" : ""}`}
      >
        {data ? formatBRL(data.brl, { decimals: 0 }) : "R$ ..."}
      </span>
      {data?.change24h != null && <ChangeBadge value={data.change24h} className="text-[11px]" />}
    </Link>
  );
}

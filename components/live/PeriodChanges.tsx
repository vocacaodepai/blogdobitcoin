"use client";

import type { BtcQuote } from "@/lib/market/bitcoin";
import { formatBRL } from "@/lib/market/format";
import { usePeriodData, useBtcQuote, useNow } from "@/lib/market/live";
import { periodBases, type PeriodBases } from "@/lib/market/periods";
import { ChangeBadge } from "./ChangeBadge";

/**
 * Variação do Bitcoin em 1h, 24h, 7 dias, 30 dias, 90 dias, no ano e em 1 ano, sobre o preço
 * ao vivo. As bases chegam calculadas do servidor (o HTML já sai com os números) e o
 * navegador recalcula a cada 5 minutos. 24h usa a abertura da janela móvel da própria cotação.
 */
export function PeriodChanges({ initial, initialBases }: { initial: BtcQuote | null; initialBases: PeriodBases | null }) {
  const { data: quote } = useBtcQuote(initial);
  const { data: periods } = usePeriodData();
  const now = useNow(60_000);
  const price = quote?.brl ?? null;
  const bases = periods ? periodBases(periods, now) : initialBases;

  const rows: { label: string; base: number | null | undefined }[] = [
    { label: "1 hora", base: bases?.h1 },
    { label: "24 horas", base: quote?.open24h },
    { label: "7 dias", base: bases?.d7 },
    { label: "30 dias", base: bases?.d30 },
    { label: "90 dias", base: bases?.d90 },
    { label: "No ano", base: bases?.ytd },
    { label: "1 ano", base: bases?.y1 },
  ];

  return (
    <section aria-labelledby="variacao-periodo" className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
      <h2 id="variacao-periodo" className="font-display text-xl font-bold tracking-tight">
        Variação do Bitcoin por período
      </h2>
      <p className="mt-1 text-sm text-muted">Comparação do preço de agora com o preço do início de cada período, no par BTC/BRL.</p>
      <dl className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-7">
        {rows.map((r) => {
          const pct = r.base && price ? ((price - r.base) / r.base) * 100 : null;
          return (
            <div key={r.label} className="rounded-lg border border-border bg-background/60 px-3 py-2.5">
              <dt className="label-mono text-muted">{r.label}</dt>
              <dd className="mt-1">
                <ChangeBadge value={pct} className="text-sm" />
                {r.base ? (
                  <span className="tabular mt-0.5 block font-mono text-[11px] text-muted">de {formatBRL(r.base, { decimals: 0 })}</span>
                ) : (
                  <span className="mt-0.5 block font-mono text-[11px] text-muted">carregando</span>
                )}
              </dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
}

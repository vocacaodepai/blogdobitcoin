"use client";

import { formatBRL, formatNumber, formatPct } from "@/lib/market/format";
import { useBtcQuote, useDifficulty, useFees, useTipHeight } from "@/lib/market/live";

/** Tamanho de uma transação simples (1 entrada SegWit nativa, 2 saídas), em bytes virtuais. */
const TYPICAL_VBYTES = 141;

/** Taxas recomendadas da rede (sat/vB), próximo ajuste de dificuldade e altura do bloco. */
export function NetworkStats({ initialHeight }: { initialHeight: number | null }) {
  const { data: fees } = useFees();
  const { data: diff } = useDifficulty();
  const { data: height } = useTipHeight(initialHeight);
  const { data: quote } = useBtcQuote();
  const feeBrl = (rate: number) => (quote ? formatBRL(((rate * TYPICAL_VBYTES) / 1e8) * quote.brl) : "--");

  const retarget = diff
    ? new Date(diff.estimatedRetargetDate).toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo", day: "2-digit", month: "short" })
    : null;

  const items = [
    { label: "Taxa rápida (próximo bloco)", value: fees ? `${fees.fastestFee} sat/vB` : "--" },
    { label: "Taxa em ~30 min", value: fees ? `${fees.halfHourFee} sat/vB` : "--" },
    { label: "Taxa em ~1 hora", value: fees ? `${fees.hourFee} sat/vB` : "--" },
    { label: "Taxa econômica", value: fees ? `${fees.economyFee} sat/vB` : "--" },
    { label: "Altura do bloco", value: height ? formatNumber(height, 0) : "--" },
    { label: "Tempo médio por bloco", value: diff ? `${formatNumber(diff.timeAvg / 60000, 1)} min` : "--" },
    {
      label: "Próximo ajuste de dificuldade",
      value: diff ? `${formatPct(diff.difficultyChange)} em ${retarget}` : "--",
    },
    { label: "Blocos até o ajuste", value: diff ? formatNumber(diff.remainingBlocks, 0) : "--" },
  ];

  return (
    <section aria-labelledby="rede-titulo" className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
      <h2 id="rede-titulo" className="font-display text-xl font-bold tracking-tight">
        Rede Bitcoin agora
      </h2>
      <p className="mt-1 text-sm text-muted">
        Quanto custa mandar uma transação e como está a mineração. Taxa em satoshis por byte virtual (sat/vB).
      </p>
      {fees && (
        <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
          <div className="rounded-xl border border-brand/40 bg-brand/5 px-4 py-3">
            <p className="label-mono text-muted">Enviar bitcoin agora (rápido)</p>
            <p className="tabular mt-1 font-display text-2xl font-bold">cerca de {feeBrl(fees.fastestFee)}</p>
          </div>
          <div className="rounded-xl border border-border bg-background/60 px-4 py-3">
            <p className="label-mono text-muted">Sem pressa (cerca de 1 hora)</p>
            <p className="tabular mt-1 font-display text-2xl font-bold">cerca de {feeBrl(fees.hourFee)}</p>
          </div>
        </div>
      )}
      <dl className="mt-4 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
        {items.map((i) => (
          <div key={i.label} className="rounded-lg border border-border bg-background/60 px-3 py-2.5">
            <dt className="label-mono text-muted">{i.label}</dt>
            <dd className="tabular mt-1 font-mono text-sm font-semibold">{i.value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-xs leading-relaxed text-muted">
        Fonte: mempool.space, atualizado a cada minuto. O custo em reais considera uma transação simples (uma entrada e duas
        saídas, cerca de {TYPICAL_VBYTES} bytes virtuais); transações com muitas entradas custam mais. Corretoras cobram a
        própria taxa de saque, que pode ser bem maior.
      </p>
    </section>
  );
}

"use client";

import { useMemo, useState } from "react";
import type { BtcQuote } from "@/lib/market/bitcoin";
import { formatBRL, formatNumber, formatPct } from "@/lib/market/format";
import { monthLabel, type HistoryRow } from "@/lib/market/history";
import { useBtcQuote } from "@/lib/market/live";
import { parseAmount } from "@/lib/market/parse";
import { PriceChart } from "@/components/live/PriceChart";

/**
 * Calculadora de DCA (aporte mensal fixo) em bitcoin: simula comprar o mesmo
 * valor em reais todo mês, no preço de fechamento do mês, e compara com o
 * valor de hoje pela cotação ao vivo.
 */
export function DcaCalculator({ history, initialQuote }: { history: HistoryRow[]; initialQuote: BtcQuote | null }) {
  const { data: q } = useBtcQuote(initialQuote);
  const months = history.map((h) => h.month);
  const defaultStart = months[Math.max(0, months.length - 61)] ?? months[0];
  const [monthly, setMonthly] = useState("200");
  const [start, setStart] = useState(defaultStart);
  const [end, setEnd] = useState(months[months.length - 1]);

  const result = useMemo(() => {
    const amount = parseAmount(monthly);
    if (!amount || amount <= 0) return null;
    const slice = history.filter((h) => h.month >= start && h.month <= end);
    if (slice.length === 0) return null;
    let btc = 0;
    let invested = 0;
    const series: { t: number; invested: number; value: number }[] = [];
    for (const h of slice) {
      btc += amount / h.brl;
      invested += amount;
      series.push({ t: new Date(`${h.day}T12:00:00Z`).getTime(), invested, value: btc * h.brl });
    }
    return { amount, btc, invested, buys: slice.length, series };
  }, [monthly, start, end, history]);

  const price = q?.brl ?? history[history.length - 1]?.brl ?? 0;
  const valueNow = result ? result.btc * price : 0;
  const profit = result ? valueNow - result.invested : 0;
  const avgPrice = result ? result.invested / result.btc : 0;

  return (
    <section aria-labelledby="dca-titulo" className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
      <h2 id="dca-titulo" className="font-display text-xl font-bold tracking-tight">
        Simule um aporte mensal em bitcoin
      </h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <label className="block">
          <span className="label-mono text-muted">Valor por mês (R$)</span>
          <input
            inputMode="decimal"
            value={monthly}
            onChange={(e) => setMonthly(e.target.value)}
            className="tabular mt-1 h-11 w-full rounded-lg border border-border bg-background px-3 font-mono outline-none focus:border-brand"
          />
        </label>
        <label className="block">
          <span className="label-mono text-muted">Primeiro aporte</span>
          <select
            value={start}
            onChange={(e) => {
              const s = e.target.value;
              setStart(s);
              // O último aporte nunca fica antes do primeiro (senão o período some e a conta zera).
              if (end < s) setEnd(s);
            }}
            className="mt-1 h-11 w-full rounded-lg border border-border bg-background px-3 text-sm"
          >
            {months.map((m) => (
              <option key={m} value={m}>
                {monthLabel(m)}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="label-mono text-muted">Último aporte</span>
          <select value={end} onChange={(e) => setEnd(e.target.value)} className="mt-1 h-11 w-full rounded-lg border border-border bg-background px-3 text-sm">
            {months
              .filter((m) => m >= start)
              .map((m) => (
                <option key={m} value={m}>
                  {monthLabel(m)}
                </option>
              ))}
          </select>
        </label>
      </div>

      {result ? (
        <>
          <dl className="mt-5 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
            <div className="rounded-xl border border-border bg-background/60 px-4 py-3">
              <dt className="label-mono text-muted">Total investido</dt>
              <dd className="tabular mt-1 font-display text-lg font-bold">{formatBRL(result.invested)}</dd>
              <dd className="text-xs text-muted">{result.buys} aportes</dd>
            </div>
            <div className="rounded-xl border border-border bg-background/60 px-4 py-3">
              <dt className="label-mono text-muted">Bitcoin acumulado</dt>
              <dd className="tabular mt-1 font-display text-lg font-bold">{formatNumber(result.btc, 6)} BTC</dd>
              <dd className="text-xs text-muted">{formatNumber(result.btc * 1e8, 0)} sats</dd>
            </div>
            <div className="rounded-xl border border-border bg-background/60 px-4 py-3">
              <dt className="label-mono text-muted">Valeria hoje</dt>
              <dd className="tabular mt-1 font-display text-lg font-bold">{formatBRL(valueNow)}</dd>
              <dd className={`tabular text-xs font-semibold ${profit >= 0 ? "text-up" : "text-down"}`}>
                {profit >= 0 ? "+" : ""}
                {formatBRL(profit)} ({formatPct((profit / result.invested) * 100)})
              </dd>
            </div>
            <div className="rounded-xl border border-border bg-background/60 px-4 py-3">
              <dt className="label-mono text-muted">Preço médio de compra</dt>
              <dd className="tabular mt-1 font-display text-lg font-bold">{formatBRL(avgPrice, { decimals: 0 })}</dd>
              <dd className="text-xs text-muted">por bitcoin</dd>
            </div>
          </dl>
          <div className="mt-5">
            <p className="label-mono mb-2 text-muted">Valor da carteira no fim de cada mês (simulação)</p>
            <PriceChart points={result.series.map((s) => ({ t: s.t, v: s.value }))} format={(v) => formatBRL(v, { decimals: 0 })} label="Carteira" />
          </div>
        </>
      ) : (
        <p className="mt-5 text-sm text-muted">
          {(parseAmount(monthly) ?? 0) > 0 ? "Escolha um último aporte igual ou depois do primeiro." : "Digite um valor mensal maior que zero."}
        </p>
      )}
      <p className="mt-3 text-xs leading-relaxed text-muted">
        Simulação com o preço de fechamento de cada mês (blockchain.com x dólar PTAX do Banco Central), sem taxas, spread nem
        impostos. Resultado passado não garante resultado futuro. Não é recomendação de investimento.
      </p>
    </section>
  );
}

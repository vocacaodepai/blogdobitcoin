"use client";

import { useMemo, useState } from "react";
import type { BtcQuote } from "@/lib/market/bitcoin";
import { formatBRL, formatNumber, formatPct } from "@/lib/market/format";
import { monthLabel, type HistoryRow } from "@/lib/market/history";
import { useBtcQuote } from "@/lib/market/live";
import { parseAmount } from "@/lib/market/parse";

const PRESETS = [
  { month: "2010-08", label: "Primeiros meses (ago/2010)" },
  { month: "2012-11", label: "1º halving (nov/2012)" },
  { month: "2016-07", label: "2º halving (jul/2016)" },
  { month: "2017-12", label: "Topo de dez/2017" },
  { month: "2020-03", label: "Pandemia (mar/2020)" },
  { month: "2020-05", label: "3º halving (mai/2020)" },
  { month: "2021-11", label: "Topo de nov/2021" },
  { month: "2022-11", label: "Quebra da FTX (nov/2022)" },
  { month: "2024-04", label: "4º halving (abr/2024)" },
];

/**
 * "Se eu tivesse investido": quanto valeria hoje um valor em reais aplicado em
 * bitcoin num mês do passado, comparado com o mesmo valor guardado em dólar.
 */
export function LumpSumCalculator({ history, initialQuote }: { history: HistoryRow[]; initialQuote: BtcQuote | null }) {
  const { data: q } = useBtcQuote(initialQuote);
  const months = history.map((h) => h.month);
  const [amount, setAmount] = useState("100");
  const [month, setMonth] = useState("2017-12");

  const price = q?.brl ?? history[history.length - 1]?.brl ?? 0;
  const usdBrlNow = q?.usdBrl ?? history[history.length - 1]?.ptax ?? 0;
  const row = history.find((h) => h.month === month);
  const value = parseAmount(amount);

  const calc = useMemo(() => {
    if (!row || !value) return null;
    const btc = value / row.brl;
    const now = btc * price;
    const dollars = (value / row.ptax) * usdBrlNow;
    return { btc, now, multiple: now / value, dollars };
  }, [row, value, price, usdBrlNow]);

  const yearly = useMemo(() => {
    const out: { month: string; brl: number }[] = [];
    for (let y = 2011; y <= new Date().getFullYear(); y++) {
      const r = history.find((h) => h.month === `${y}-01`);
      if (r) out.push({ month: r.month, brl: r.brl });
    }
    return out;
  }, [history]);

  return (
    <section aria-labelledby="lump-titulo" className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
      <h2 id="lump-titulo" className="font-display text-xl font-bold tracking-tight">
        Quanto valeria hoje?
      </h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="label-mono text-muted">Valor investido (R$)</span>
          <input
            inputMode="decimal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="tabular mt-1 h-11 w-full rounded-lg border border-border bg-background px-3 font-mono focus:border-brand"
          />
        </label>
        <label className="block">
          <span className="label-mono text-muted">Mês da compra</span>
          <select value={month} onChange={(e) => setMonth(e.target.value)} className="mt-1 h-11 w-full rounded-lg border border-border bg-background px-3 text-sm">
            {months.map((m) => (
              <option key={m} value={m}>
                {monthLabel(m)}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {PRESETS.filter((p) => months.includes(p.month)).map((p) => (
          <button
            key={p.month}
            type="button"
            onClick={() => setMonth(p.month)}
            aria-pressed={month === p.month}
            className={`inline-flex h-8 items-center rounded-lg border px-3 text-xs font-medium transition ${
              month === p.month ? "border-brand bg-brand text-brand-foreground" : "border-border bg-background text-muted hover:text-foreground"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {calc && row ? (
        <div className="mt-5 rounded-xl border border-brand/40 bg-brand/5 p-4 sm:p-5">
          <p className="text-sm text-muted">
            {formatBRL(value!)} em bitcoin em {monthLabel(row.month)} (preço de {formatBRL(row.brl)} por BTC) comprariam{" "}
            <strong className="text-foreground">{formatNumber(calc.btc, calc.btc < 0.01 ? 8 : 4)} BTC</strong>.
          </p>
          <p className="tabular mt-2 font-display text-2xl font-bold [overflow-wrap:anywhere] sm:text-4xl" suppressHydrationWarning>
            {formatBRL(calc.now)}
          </p>
          <p className="mt-1 text-sm">
            <span className={calc.multiple >= 1 ? "font-semibold text-up" : "font-semibold text-down"}>
              {formatPct((calc.multiple - 1) * 100, 0)}
            </span>{" "}
            <span className="text-muted">
              ({formatNumber(calc.multiple, calc.multiple >= 100 ? 0 : 2)} vezes o valor). O mesmo dinheiro guardado em dólar valeria{" "}
              {formatBRL(calc.dollars)}.
            </span>
          </p>
        </div>
      ) : (
        <p className="mt-5 text-sm text-muted">Digite um valor maior que zero.</p>
      )}

      <div className="mt-6">
        <h3 className="font-display text-base font-bold">R$ 100 em bitcoin no começo de cada ano valeriam hoje</h3>
        <div className="mt-2 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[420px] text-sm">
            <thead className="bg-surface-2 text-left">
              <tr>
                <th className="px-3 py-2 font-semibold">Compra</th>
                <th className="px-3 py-2 text-right font-semibold">Preço do BTC</th>
                <th className="px-3 py-2 text-right font-semibold">R$ 100 viraram</th>
              </tr>
            </thead>
            <tbody>
              {yearly.map((y) => {
                const now = (100 / y.brl) * price;
                return (
                  <tr key={y.month} className="border-t border-border">
                    <td className="px-3 py-2">{monthLabel(y.month)}</td>
                    <td className="tabular px-3 py-2 text-right font-mono">{formatBRL(y.brl, { decimals: y.brl < 100 ? 2 : 0 })}</td>
                    <td className={`tabular px-3 py-2 text-right font-mono ${now >= 100 ? "text-up" : "text-down"}`} suppressHydrationWarning>
                      {formatBRL(now, { decimals: 0 })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-muted">
        Preço do mês: fechamento mensal (blockchain.com) convertido pelo dólar PTAX do Banco Central. Valor de hoje: cotação ao
        vivo. Sem taxas nem impostos. O passado não garante o futuro; não é recomendação de investimento.
      </p>
    </section>
  );
}

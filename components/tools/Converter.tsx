"use client";

import { useMemo, useState } from "react";
import type { BtcQuote } from "@/lib/market/bitcoin";
import { formatBRL, formatNumber, formatUSD } from "@/lib/market/format";
import { useBtcQuote, useMarket } from "@/lib/market/live";
import type { CoinRow } from "@/lib/market/paprika";
import { parseAmount } from "@/lib/market/parse";

type Unit = "BTC" | "SATS" | "BRL" | "USD" | `coin:${string}`;

const PRESETS: { label: string; amount: string; unit: Unit }[] = [
  { label: "1 BTC", amount: "1", unit: "BTC" },
  { label: "0,01 BTC", amount: "0,01", unit: "BTC" },
  { label: "10.000 sats", amount: "10.000", unit: "SATS" },
  { label: "R$ 100", amount: "100", unit: "BRL" },
  { label: "R$ 1.000", amount: "1.000", unit: "BRL" },
  { label: "US$ 100", amount: "100", unit: "USD" },
];

/**
 * Conversor de Bitcoin: BTC, satoshis, real e dólar (e as principais moedas do
 * ranking), com a cotação ao vivo atualizada a cada 10 segundos.
 */
export function Converter({ initialQuote, initialMarket }: { initialQuote: BtcQuote | null; initialMarket: CoinRow[] }) {
  const { data: q } = useBtcQuote(initialQuote);
  const { data: market } = useMarket(initialMarket);
  const coins = useMemo(() => (market ?? initialMarket).filter((c) => !c.pegged && c.id !== "btc-bitcoin").slice(0, 40), [market, initialMarket]);
  const [amount, setAmount] = useState("1");
  const [unit, setUnit] = useState<Unit>("BTC");

  const value = parseAmount(amount, { dotDecimal: unit === "BTC" || unit.startsWith("coin:") });
  const brlPerBtc = q?.brl ?? null;
  const usdBrl = q?.usdBrl ?? null;

  // Tudo passa por reais.
  const inBrl = (() => {
    if (value == null || !brlPerBtc || !usdBrl) return null;
    if (unit === "BTC") return value * brlPerBtc;
    if (unit === "SATS") return (value / 1e8) * brlPerBtc;
    if (unit === "BRL") return value;
    if (unit === "USD") return value * usdBrl;
    const c = coins.find((x) => `coin:${x.id}` === unit);
    return c ? value * c.priceBrl : null;
  })();

  const btc = inBrl != null && brlPerBtc ? inBrl / brlPerBtc : null;
  const results = [
    { label: "Em bitcoin", value: btc != null ? `${formatNumber(btc, btc < 0.0001 ? 8 : 6)} BTC` : "--" },
    { label: "Em satoshis", value: btc != null ? `${formatNumber(btc * 1e8, 0)} sats` : "--" },
    { label: "Em reais", value: inBrl != null ? formatBRL(inBrl) : "--" },
    { label: "Em dólares", value: inBrl != null && usdBrl ? formatUSD(inBrl / usdBrl) : "--" },
  ];

  return (
    <section aria-labelledby="conversor-titulo" className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
      <h2 id="conversor-titulo" className="font-display text-xl font-bold tracking-tight">
        Converter bitcoin, satoshis, real e dólar
      </h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_220px]">
        <label className="block">
          <span className="label-mono text-muted">Valor</span>
          <input
            inputMode="decimal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="tabular mt-1 h-12 w-full rounded-lg border border-border bg-background px-3 font-mono text-lg outline-none focus:border-brand"
            aria-describedby="conversor-ajuda"
          />
        </label>
        <label className="block">
          <span className="label-mono text-muted">De</span>
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value as Unit)}
            className="mt-1 h-12 w-full rounded-lg border border-border bg-background px-3 text-sm"
          >
            <option value="BTC">Bitcoin (BTC)</option>
            <option value="SATS">Satoshis (sats)</option>
            <option value="BRL">Real (R$)</option>
            <option value="USD">Dólar (US$)</option>
            {coins.length > 0 && (
              <optgroup label="Outras moedas">
                {coins.map((c) => (
                  <option key={c.id} value={`coin:${c.id}`}>
                    {c.name} ({c.symbol})
                  </option>
                ))}
              </optgroup>
            )}
          </select>
        </label>
      </div>
      <p id="conversor-ajuda" className="mt-1.5 text-xs text-muted">
        Use vírgula para os centavos (ex.: 0,005 ou 1.500,50).
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {PRESETS.map((p) => (
          <button
            key={p.label}
            type="button"
            onClick={() => {
              setAmount(p.amount);
              setUnit(p.unit);
            }}
            className="inline-flex h-8 items-center rounded-lg border border-border bg-background px-3 text-xs font-medium text-muted transition hover:border-brand hover:text-foreground"
          >
            {p.label}
          </button>
        ))}
      </div>
      <dl className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {results.map((r) => (
          <div key={r.label} className="rounded-xl border border-border bg-background/60 px-4 py-3">
            <dt className="label-mono text-muted">{r.label}</dt>
            <dd className="tabular mt-1 break-all font-display text-xl font-bold">{r.value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-xs text-muted">
        Cotação: {q ? `${formatBRL(q.brl)} por bitcoin (${q.source})` : "carregando"}. Outras moedas: CoinPaprika. Valores
        informativos; a corretora aplica spread e taxas.
      </p>
    </section>
  );
}

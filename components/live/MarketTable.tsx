"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { formatBRL, formatCompactBRL, formatClock } from "@/lib/market/format";
import { useMarketWithLong } from "@/lib/market/live";
import type { CoinRow } from "@/lib/market/paprika";
import { ChangeBadge } from "./ChangeBadge";
import { CoinLogo } from "./CoinLogo";

type SortKey = "rank" | "name" | "priceBrl" | "ch1h" | "ch24h" | "ch7d" | "ch30d" | "marketCapBrl" | "volumeBrl";

const COLUMNS: { key: SortKey; label: string; className?: string; numeric?: boolean }[] = [
  { key: "rank", label: "#", numeric: true, className: "hidden sm:table-cell" },
  { key: "name", label: "Moeda" },
  { key: "priceBrl", label: "Preço", numeric: true },
  { key: "ch1h", label: "1h", numeric: true, className: "hidden md:table-cell" },
  { key: "ch24h", label: "24h", numeric: true },
  { key: "ch7d", label: "7d", numeric: true, className: "hidden sm:table-cell" },
  { key: "ch30d", label: "30d", numeric: true, className: "hidden lg:table-cell" },
  { key: "marketCapBrl", label: "Valor de mercado", numeric: true, className: "hidden md:table-cell" },
  { key: "volumeBrl", label: "Volume 24h", numeric: true, className: "hidden xl:table-cell" },
];

/** Rota da página de uma moeda (só as que têm ficha editorial), ou null. */
function coinHref(id: string, profiles: Record<string, string>): string | null {
  if (id === "btc-bitcoin") return "/bitcoin";
  const slug = profiles[id];
  return slug ? `/moedas/${slug}` : null;
}

/**
 * Ranking das criptomoedas em reais (estilo CoinMarketCap/CoinGecko), com
 * busca, ordenação, filtro de stablecoins e atualização a cada 60 segundos.
 * O HTML inicial já vem do servidor com os números (bom para o Google).
 */
export function MarketTable({
  initial,
  profiles,
  limit = 100,
  showControls = true,
}: {
  initial: CoinRow[];
  /** paprikaId -> slug de /moedas/<slug>. */
  profiles: Record<string, string>;
  limit?: number;
  showControls?: boolean;
}) {
  const { rows, prev, updatedAt, hasLong } = useMarketWithLong(initial);
  const [query, setQuery] = useState("");
  const [hidePegged, setHidePegged] = useState(false);
  const [sort, setSort] = useState<{ key: SortKey; dir: 1 | -1 }>({ key: "rank", dir: 1 });
  const [showAll, setShowAll] = useState(false);

  const prevPrice = useMemo(() => new Map((prev ?? []).map((r) => [r.id, r.priceBrl])), [prev]);

  const visible = useMemo(() => {
    const q = query
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .toLowerCase()
      .trim();
    let list = rows.filter((r) => (hidePegged ? !r.pegged : true));
    if (q) list = list.filter((r) => r.name.toLowerCase().includes(q) || r.symbol.toLowerCase().includes(q));
    const { key, dir } = sort;
    list = [...list].sort((a, b) => {
      if (key === "name") return a.name.localeCompare(b.name, "pt-BR") * dir;
      const av = Number.isFinite(a[key] as number) ? (a[key] as number) : -Infinity;
      const bv = Number.isFinite(b[key] as number) ? (b[key] as number) : -Infinity;
      return av === bv ? a.rank - b.rank : (av > bv ? 1 : -1) * dir;
    });
    return list.slice(0, q ? 200 : showAll ? 200 : limit);
  }, [rows, query, hidePegged, sort, showAll, limit]);

  function toggleSort(key: SortKey) {
    setSort((s) => (s.key === key ? { key, dir: (s.dir * -1) as 1 | -1 } : { key, dir: key === "rank" || key === "name" ? 1 : -1 }));
  }

  return (
    <div>
      {showControls && (
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <label className="relative flex-1 sm:max-w-xs">
            <span className="sr-only">Buscar moeda</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar moeda (ex.: Solana, XRP)"
              className="h-10 w-full rounded-lg border border-border bg-surface px-3 text-sm transition focus:border-brand"
            />
          </label>
          <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-muted">
            <input type="checkbox" checked={hidePegged} onChange={(e) => setHidePegged(e.target.checked)} className="h-4 w-4 accent-[var(--brand)]" />
            Ocultar stablecoins e tokens atrelados
          </label>
          <span className="ml-auto font-mono text-[11px] text-muted">
            {updatedAt ? `Atualizado às ${formatClock(updatedAt)} · a cada 60 s` : "Dados de mercado em reais · atualiza a cada 60 s"}
          </span>
        </div>
      )}

      <div className="overflow-x-auto rounded-xl border border-border bg-surface">
        <table className="w-full text-sm sm:min-w-[560px]">
          <thead className="bg-surface-2">
            <tr>
              {COLUMNS.filter((c) => hasLong || c.key !== "ch30d").map((c) => (
                <th
                  key={c.key}
                  scope="col"
                  aria-sort={sort.key === c.key ? (sort.dir === 1 ? "ascending" : "descending") : "none"}
                  className={`whitespace-nowrap px-2 py-2.5 font-semibold sm:px-3 ${c.numeric && c.key !== "rank" ? "text-right" : "text-left"} ${c.key === "name" ? "sticky left-0 z-10 bg-surface-2" : ""} ${c.className ?? ""}`}
                >
                  <button type="button" onClick={() => toggleSort(c.key)} className="inline-flex items-center gap-1 hover:text-accent">
                    {c.label}
                    <span aria-hidden="true" className="text-[10px] text-muted">
                      {sort.key === c.key ? (sort.dir === 1 ? "▲" : "▼") : ""}
                    </span>
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visible.map((r) => {
              const href = coinHref(r.id, profiles);
              const before = prevPrice.get(r.id);
              const dir = before ? Math.sign(r.priceBrl - before) : 0;
              const nameCell = (
                <span className="flex items-center gap-2.5">
                  <CoinLogo id={r.id} symbol={r.symbol} size={22} />
                  <span className="min-w-0">
                    <span className="block max-w-[6.5rem] truncate font-medium sm:max-w-[11rem]">{r.name}</span>
                    <span className="block font-mono text-[11px] text-muted">{r.symbol}</span>
                  </span>
                </span>
              );
              return (
                <tr key={r.id} className="border-t border-border transition hover:bg-surface-2/60">
                  <td className="tabular hidden px-3 py-2.5 font-mono text-xs text-muted sm:table-cell">{r.rank}</td>
                  <td className="sticky left-0 z-10 bg-surface px-2 py-2.5 sm:px-3">
                    {href ? (
                      <Link href={href} className="hover:text-accent">
                        {nameCell}
                      </Link>
                    ) : (
                      nameCell
                    )}
                  </td>
                  <td className="px-2 py-2.5 text-right sm:px-3">
                    <span key={r.priceBrl} className={`tabular rounded px-1 font-mono text-xs sm:text-sm ${dir > 0 ? "flash-up" : dir < 0 ? "flash-down" : ""}`}>
                      {formatBRL(r.priceBrl)}
                    </span>
                  </td>
                  <td className="hidden px-3 py-2.5 text-right md:table-cell">
                    <ChangeBadge value={r.ch1h} className="text-xs" />
                  </td>
                  <td className="px-2 py-2.5 text-right sm:px-3">
                    <ChangeBadge value={r.ch24h} className="text-xs" />
                  </td>
                  <td className="hidden px-3 py-2.5 text-right sm:table-cell">
                    <ChangeBadge value={r.ch7d} className="text-xs" />
                  </td>
                  {hasLong && (
                    <td className="hidden px-3 py-2.5 text-right lg:table-cell">
                      <ChangeBadge value={r.ch30d} className="text-xs" />
                    </td>
                  )}
                  <td className="tabular hidden px-3 py-2.5 text-right font-mono text-xs md:table-cell">{formatCompactBRL(r.marketCapBrl)}</td>
                  <td className="tabular hidden px-3 py-2.5 text-right font-mono text-xs xl:table-cell">{formatCompactBRL(r.volumeBrl)}</td>
                </tr>
              );
            })}
            {visible.length === 0 && (
              <tr>
                <td colSpan={COLUMNS.length - (hasLong ? 0 : 1)} className="px-3 py-8 text-center text-muted">
                  {rows.length === 0 ? "Carregando o ranking..." : "Nenhuma moeda encontrada com essa busca."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {showControls && !query && rows.length > limit && (
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="inline-flex h-10 items-center rounded-lg border border-border bg-surface px-4 text-sm font-medium transition hover:border-brand"
          >
            {showAll ? `Mostrar só as ${limit} maiores` : `Mostrar as ${Math.min(200, rows.length)} maiores`}
          </button>
        </div>
      )}
      <p className="mt-3 text-xs leading-relaxed text-muted">
        Fonte: CoinPaprika (cotação global convertida para real); variação de 30 dias: CoinGecko. O preço pode diferir um pouco do praticado nas corretoras
        brasileiras. Informativo, não é recomendação de investimento.
      </p>
    </div>
  );
}

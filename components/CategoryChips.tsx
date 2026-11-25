import Link from "next/link";
import { categories } from "@/lib/articles";

/** Linha de chips de navegação do site inteiro (rola horizontal no mobile). */
export function CategoryChips({
  active,
  className = "",
}: {
  /** slug da categoria ativa, "todos", "noticias", "mercado-ao-vivo" ou "loja" */
  active?: string;
  className?: string;
}) {
  const items = [
    { href: "/bitcoin", label: "Preço do Bitcoin", key: "preco-bitcoin" },
    { href: "/mercado", label: "Ranking cripto", key: "mercado-ao-vivo" },
    { href: "/noticias", label: "Notícias", key: "noticias" },
    { href: "/artigos", label: "Todos os artigos", key: "todos" },
    ...categories.map((c) => ({ href: `/categoria/${c.slug}`, label: c.label, key: c.slug })),
    { href: "/ferramentas", label: "Ferramentas", key: "ferramentas" },
    { href: "/loja", label: "Loja do Bitcoin", key: "loja" },
  ];
  return (
    <nav aria-label="Seções do site" className={`relative ${className}`}>
      <ul className="no-scrollbar flex snap-x gap-2 overflow-x-auto pb-1">
        {items.map((it) => {
          const isActive = it.key === active;
          return (
            <li key={it.key} className="snap-start">
              <Link
                href={it.href}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex h-8 items-center whitespace-nowrap rounded-lg border px-3 text-xs font-medium transition ${
                  isActive
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-surface text-muted hover:border-accent/50 hover:text-foreground"
                }`}
              >
                {it.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

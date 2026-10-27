import Link from "next/link";
import type { Product } from "@/lib/types";
import { getFeaturedProducts } from "@/lib/products";
import { ProductCard } from "./ProductCard";

/** Vitrine curta da Loja do Bitcoin para a home e o fim das páginas. */
export function StorePromo({
  products,
  title = "Loja do Bitcoin: o hodler quer desconto!",
  subtitle = "Carteiras de hardware, livros, camisetas e presentes do mundo cripto, com review honesta de cada um.",
  limit = 4,
}: {
  products?: Product[];
  title?: string;
  subtitle?: string;
  limit?: number;
}) {
  const list = (products ?? getFeaturedProducts(limit)).slice(0, limit);
  if (list.length === 0) return null;
  return (
    <section aria-labelledby="loja-promo">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="label-mono text-accent">Loja do Bitcoin</p>
          <h2 id="loja-promo" className="mt-1 font-display text-xl font-bold tracking-tight sm:text-2xl">
            {title}
          </h2>
          <p className="mt-1 text-sm text-muted">{subtitle}</p>
        </div>
        <Link href="/loja" className="hidden shrink-0 font-mono text-xs font-medium text-muted transition hover:text-accent sm:inline">
          Ver a loja →
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {list.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
      <p className="mt-3 text-xs text-muted">
        Links de afiliado da Amazon e da Shopee: se você comprar por eles, o Blog do Bitcoin pode receber uma comissão, sem custo extra.{" "}
        <Link href="/publicidade-e-afiliados" className="font-medium text-accent hover:underline">
          Saiba mais
        </Link>
        .
      </p>
    </section>
  );
}

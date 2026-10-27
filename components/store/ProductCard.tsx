import Link from "next/link";
import type { Product } from "@/lib/types";
import { getProductCategory, priceCardNote, priceMissingText, priceRangeText, productStoreInfo } from "@/lib/products";
import { ProductBuyButton } from "./ProductBuyButton";

function ScoreBadge({ score }: { score: number }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md bg-ink/85 px-1.5 py-0.5 font-mono text-[11px] font-semibold text-white">
      <span className="text-brand">★</span>
      {score.toFixed(1).replace(".", ",")}
    </span>
  );
}

/** Card de produto da Loja do Bitcoin: foto oficial, nota, faixa de mercado e botões. */
export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const href = `/loja/${product.slug}`;
  const range = priceRangeText(product);
  const cat = getProductCategory(product.category);
  const store = productStoreInfo(product);
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface card-hover">
      <Link href={href} className="relative block aspect-square overflow-hidden bg-white" tabIndex={-1} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image.url}
          alt={product.image.alt}
          width={product.image.width}
          height={product.image.height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-contain p-5 transition duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-brand px-2.5 py-1 text-[11px] font-bold text-brand-foreground shadow-sm">
            {product.badge}
          </span>
        )}
        {product.review && (
          <span className="absolute right-3 top-3">
            <ScoreBadge score={product.review.score} />
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-4">
        {cat && (
          <p className="label-mono text-accent">
            {cat.label} <span className="text-muted">· {store.label}</span>
          </p>
        )}
        <h3 className="mt-1 line-clamp-2 font-display text-base font-bold leading-snug">
          <Link href={href} className="transition hover:text-accent">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1.5 line-clamp-2 flex-1 text-xs leading-relaxed text-muted">{product.shortDescription}</p>
        <p className="mt-3 text-sm">
          {range ? (
            <>
              <span className="tabular font-display font-bold">{range}</span>
              <span className="block text-[11px] text-muted">{priceCardNote(product)}</span>
            </>
          ) : (
            <span className="text-xs font-semibold text-muted">{priceMissingText(product)}</span>
          )}
        </p>
        <div className="mt-4 flex flex-col gap-2">
          <ProductBuyButton product={product} size="sm" />
          <Link
            href={href}
            className="inline-flex h-10 items-center justify-center rounded-xl border border-border text-sm font-semibold transition hover:border-brand hover:text-accent"
          >
            Ler a review completa
          </Link>
        </div>
      </div>
    </article>
  );
}

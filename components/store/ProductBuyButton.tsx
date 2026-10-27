import type { Product } from "@/lib/types";
import { productBuyUrl, productStoreInfo } from "@/lib/products";

/** Botão de compra do produto: "Comprar agora na Amazon" ou "... na Shopee", com o link de afiliado real da loja. */
export function ProductBuyButton({
  product,
  className = "",
  size = "lg",
}: {
  product: Product;
  className?: string;
  size?: "lg" | "sm";
}) {
  const store = productStoreInfo(product);
  return (
    <a
      href={productBuyUrl(product)}
      target="_blank"
      rel="sponsored noopener noreferrer nofollow"
      aria-label={`${store.ctaLabel}: ${product.name}`}
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-brand font-display font-bold text-brand-foreground shadow-[0_6px_16px_-6px_color-mix(in_srgb,var(--brand)_55%,transparent)] transition hover:-translate-y-px hover:opacity-90 ${
        size === "lg" ? "min-h-12 px-6 py-3 text-base" : "h-10 px-4 text-sm"
      } ${className}`}
    >
      {store.ctaLabel} <span aria-hidden="true">↗</span>
    </a>
  );
}

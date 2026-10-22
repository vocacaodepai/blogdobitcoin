import type { Product } from "@/lib/types";
import { productAmazonUrl } from "@/lib/products";

/** Botão de compra do produto: sempre "Comprar agora na Amazon", link de afiliado real. */
export function ProductBuyButton({
  product,
  className = "",
  size = "lg",
}: {
  product: Product;
  className?: string;
  size?: "lg" | "sm";
}) {
  return (
    <a
      href={productAmazonUrl(product)}
      target="_blank"
      rel="sponsored noopener noreferrer nofollow"
      aria-label={`Comprar agora na Amazon: ${product.name}`}
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-brand font-display font-bold text-brand-foreground shadow-[0_6px_16px_-6px_color-mix(in_srgb,var(--brand)_55%,transparent)] transition hover:-translate-y-px hover:opacity-90 ${
        size === "lg" ? "min-h-12 px-6 py-3 text-base" : "h-10 px-4 text-sm"
      } ${className}`}
    >
      Comprar agora na Amazon <span aria-hidden="true">↗</span>
    </a>
  );
}

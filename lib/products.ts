/**
 * Loja do Bitcoin: produtos em content/products/<slug>.ts (um arquivo por
 * produto), reunidos pelo índice gerado content/products/index.ts.
 */
import { products as allProducts } from "@/content/products";
import { amazonUrl } from "@/lib/articles";
import type { Product, ProductCategory } from "@/lib/types";
import { productCategories } from "@/lib/types";

export type { Product, ProductCategory } from "@/lib/types";
export { productCategories } from "@/lib/types";

export const products: Product[] = allProducts;

const bySlug = new Map(products.map((p) => [p.slug, p]));

const CATEGORY_ORDER = new Map<string, number>(productCategories.map((c, i) => [c.slug, i]));

function byShelf(a: Product, b: Product) {
  return (
    (CATEGORY_ORDER.get(a.category) ?? 99) - (CATEGORY_ORDER.get(b.category) ?? 99) ||
    (a.sortOrder ?? 99) - (b.sortOrder ?? 99) ||
    a.name.localeCompare(b.name, "pt-BR")
  );
}

/** Produtos na ordem da vitrine (por categoria, depois sortOrder). */
export function sortedProducts(): Product[] {
  return [...products].sort(byShelf);
}

export function getProductBySlug(slug: string): Product | undefined {
  return bySlug.get(slug);
}

export function getProductCategory(slug: string) {
  return productCategories.find((c) => c.slug === slug);
}

export function isProductCategory(slug: string): slug is ProductCategory {
  return productCategories.some((c) => c.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return sortedProducts().filter((p) => p.category === category);
}

/** Destaques da vitrine (featured primeiro, completando com os demais). */
export function getFeaturedProducts(limit = 4): Product[] {
  const all = sortedProducts();
  return [...all.filter((p) => p.featured), ...all.filter((p) => !p.featured)].slice(0, limit);
}

/** Outros produtos: mesma categoria primeiro. */
export function getRelatedProducts(current: Product, limit = 4): Product[] {
  const others = sortedProducts().filter((p) => p.slug !== current.slug);
  return [...others.filter((p) => p.category === current.category), ...others.filter((p) => p.category !== current.category)].slice(0, limit);
}

export function productAmazonUrl(p: Product): string {
  return amazonUrl(p.asin);
}

const brl0 = (n: number) => `R$ ${Math.round(n).toLocaleString("pt-BR")}`;

/** "R$ 700 a R$ 900" (faixa de mercado pesquisada), ou null se não houver pesquisa. */
export function priceRangeText(p: Product): string | null {
  if (p.priceMin == null || p.priceMax == null) return null;
  if (p.priceMin === p.priceMax) return `cerca de ${brl0(p.priceMin)}`;
  return `${brl0(p.priceMin)} a ${brl0(p.priceMax)}`;
}

/** Data da pesquisa de preço em "out/2026". */
export function priceCheckedLabel(p: Product): string | null {
  if (!p.priceCheckedAt) return null;
  return new Date(`${p.priceCheckedAt}T12:00:00-03:00`).toLocaleDateString("pt-BR", { month: "short", year: "numeric" });
}

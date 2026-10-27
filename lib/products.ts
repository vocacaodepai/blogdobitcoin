/**
 * Loja do Bitcoin: produtos em content/products/<slug>.ts (um arquivo por
 * produto), reunidos pelo índice gerado content/products/index.ts.
 */
import { products as allProducts } from "@/content/products";
import { amazonUrl } from "@/lib/articles";
import type { Product, ProductCategory, ProductStore } from "@/lib/types";
import { productCategories, productStores } from "@/lib/types";

export type { Product, ProductCategory, ProductStore } from "@/lib/types";
export { productCategories, productStores } from "@/lib/types";

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

/** Loja do produto (Amazon quando o campo store não existe). */
export function productStore(p: Product): ProductStore {
  return p.store ?? "amazon";
}

export function productStoreInfo(p: Product) {
  const slug = productStore(p);
  return productStores.find((s) => s.slug === slug) ?? productStores[0];
}

/** Link de compra com a tag ou o link curto de afiliado da loja do produto. */
export function productBuyUrl(p: Product): string {
  if (productStore(p) === "shopee") {
    if (!p.shopee?.affiliateUrl) throw new Error(`Produto da Shopee sem shopee.affiliateUrl: ${p.slug}`);
    return p.shopee.affiliateUrl;
  }
  return amazonUrl(p.asin ?? "");
}

/** Lojas de um conjunto de produtos para usar depois de "da": "Amazon", "Shopee" ou "Amazon e da Shopee". */
export function storesLabel(stores: Iterable<ProductStore>): string {
  const set = new Set(stores);
  const labels = productStores.filter((s) => set.has(s.slug)).map((s) => s.label);
  return labels.length === 0 ? productStores[0].label : labels.join(" e da ");
}

const brl0 = (n: number) => `R$ ${Math.round(n).toLocaleString("pt-BR")}`;

/** "R$ 700 a R$ 900" (faixa de mercado pesquisada), ou null se não houver pesquisa. */
export function priceRangeText(p: Product): string | null {
  if (p.priceMin == null || p.priceMax == null) return null;
  if (p.priceMin === p.priceMax) return `cerca de ${brl0(p.priceMin)}`;
  return `${brl0(p.priceMin)} a ${brl0(p.priceMax)}`;
}

/** Nota curta sob a faixa de preço nos cards. */
export function priceCardNote(p: Product): string {
  return productStore(p) === "shopee" ? "faixa do anúncio na Shopee" : "faixa de mercado em lojas online";
}

/** Texto quando não há faixa de preço. */
export function priceMissingText(p: Product): string {
  return `Veja o preço do dia na ${productStoreInfo(p).label}`;
}

/** Explicação da faixa de preço na página do produto (checked = "out/2026"). */
export function priceExplanation(p: Product, checked: string | null): string {
  const when = checked ? ` (${checked})` : "";
  return productStore(p) === "shopee"
    ? `Faixa do anúncio na Shopee${when}. Preço, cupom e frete mudam; o valor do dia aparece no botão.`
    : `Preço consultado em várias lojas online${when}, não é o preço da Amazon. O valor do dia aparece no botão.`;
}

/** Parágrafo "Variação de preço" da review (range = "R$ 30 a R$ 45", ou null sem faixa). */
export function priceReviewText(p: Product, range: string | null, checked: string | null): string {
  if (!range) return "O preço varia entre vendedores e épocas do ano.";
  return productStore(p) === "shopee"
    ? `A faixa de ${range} é a do anúncio na Shopee${checked ? ` em ${checked}` : ""}. Preço, cupom e frete mudam de um dia para o outro e entre vendedores do mesmo produto.`
    : `A faixa de mercado de ${range} foi consultada na internet como um todo, em várias lojas online, e não é o preço da Amazon${checked ? ` (pesquisa de ${checked})` : ""}.`;
}

/** Data da pesquisa de preço em "out/2026". */
export function priceCheckedLabel(p: Product): string | null {
  if (!p.priceCheckedAt) return null;
  return new Date(`${p.priceCheckedAt}T12:00:00-03:00`).toLocaleDateString("pt-BR", { month: "short", year: "numeric" });
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/article/Breadcrumbs";
import { JsonLd } from "@/components/article/JsonLd";
import { ProductBuyButton } from "@/components/store/ProductBuyButton";
import { ProductReview } from "@/components/store/ProductReview";
import { StorePromo } from "@/components/store/StorePromo";
import { getArticleBySlug, site, type Article } from "@/lib/articles";
import { getProductBySlug, getProductCategory, getRelatedProducts, priceCheckedLabel, priceRangeText, products } from "@/lib/products";
import { absoluteUrl, alternatesFor, breadcrumbJsonLd, metaDescription } from "@/lib/seo";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  if (!p) return {};
  const title = p.review?.title ?? `${p.name}: review e onde comprar`;
  const description = metaDescription(p.review?.summary ?? p.shortDescription);
  return {
    title: { absolute: `${title} | Loja do Bitcoin` },
    description,
    alternates: alternatesFor(`/loja/${p.slug}`),
    openGraph: {
      type: "website",
      url: absoluteUrl(`/loja/${p.slug}`),
      title,
      description,
      siteName: site.name,
      locale: site.locale,
      images: [{ url: absoluteUrl(p.image.url), width: p.image.width, height: p.image.height, alt: p.image.alt }],
    },
  };
}

export default async function ProductPage({ params }: { params: Params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const path = `/loja/${product.slug}`;
  const cat = getProductCategory(product.category);
  const range = priceRangeText(product);
  const checked = priceCheckedLabel(product);
  const articles = (product.relatedArticles ?? []).map((s) => getArticleBySlug(s)).filter((a): a is Article => Boolean(a));
  const related = getRelatedProducts(product, 4);

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    brand: { "@type": "Brand", name: product.brand },
    image: absoluteUrl(product.image.url),
    description: product.shortDescription,
    category: cat?.label,
    url: absoluteUrl(path),
    ...(product.review
      ? {
          review: {
            "@type": "Review",
            name: product.review.title,
            author: { "@type": "Organization", name: site.name, url: site.url },
            reviewRating: { "@type": "Rating", ratingValue: product.review.score, bestRating: 10, worstRating: 0 },
            reviewBody: product.review.summary,
            positiveNotes: {
              "@type": "ItemList",
              itemListElement: product.pros.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p })),
            },
            negativeNotes: {
              "@type": "ItemList",
              itemListElement: product.cons.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c })),
            },
          },
        }
      : {}),
  };
  const faqLd =
    product.review && product.review.faq.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: product.review.faq.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
        }
      : null;

  return (
    <>
      <JsonLd data={productLd} />
      {faqLd && <JsonLd data={faqLd} />}
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Loja do Bitcoin", path: "/loja" },
          { name: product.name, path },
        ])}
      />
      <Container className="pt-8 sm:pt-10">
        <Breadcrumbs items={[{ name: "Início", href: "/" }, { name: "Loja do Bitcoin", href: "/loja" }, { name: product.name }]} />
        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
          <div className="flex items-center justify-center overflow-hidden rounded-2xl border border-border bg-white p-6 sm:p-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.image.url}
              alt={product.image.alt}
              width={product.image.width}
              height={product.image.height}
              fetchPriority="high"
              className="max-h-[480px] w-auto object-contain"
            />
          </div>
          <div>
            {cat && (
              <Link href={`/loja#${cat.slug}`} className="label-mono text-accent hover:underline">
                {cat.label}
              </Link>
            )}
            <h1 className="mt-2 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{product.name}</h1>
            <p className="mt-1 text-sm text-muted">Marca: {product.brand}</p>
            {product.badge && (
              <span className="mt-3 inline-block rounded-full bg-brand px-3 py-1 text-xs font-bold text-brand-foreground">{product.badge}</span>
            )}
            <p className="mt-4 text-base leading-relaxed text-muted">{product.shortDescription}</p>
            {product.review && (
              <a href="#review" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                <span className="rounded-md bg-ink px-2 py-1 font-mono text-white">
                  <span className="text-brand">★</span> {product.review.score.toFixed(1).replace(".", ",")}
                </span>
                <span className="text-accent hover:underline">nota do Blog do Bitcoin · ler a review</span>
              </a>
            )}
            <div className="mt-5 rounded-xl border border-border bg-surface p-4">
              <p className="label-mono text-muted">Faixa de mercado</p>
              <p className="tabular mt-1 font-display text-2xl font-bold">{range ?? "Veja o preço do dia na Amazon"}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                {range
                  ? `Preço consultado em várias lojas online${checked ? ` (${checked})` : ""}, não é o preço da Amazon. O valor do dia aparece no botão.`
                  : "O preço muda entre vendedores e épocas; o valor do dia aparece no botão."}
              </p>
            </div>
            <div className="mt-5">
              <ProductBuyButton product={product} className="w-full sm:w-auto" />
            </div>
            <ul className="mt-5 space-y-1.5 text-sm">
              {product.pros.slice(0, 3).map((p) => (
                <li key={p} className="flex gap-2">
                  <span aria-hidden="true" className="font-bold text-up">
                    ✓
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            {product.category === "hardware-wallets" && (
              <p className="mt-5 rounded-lg border border-border border-l-4 border-l-warn bg-surface px-4 py-3 text-xs leading-relaxed text-muted">
                Segurança: compre só de vendedor oficial ou autorizado. Se a carteira chegar com as palavras de recuperação já
                anotadas ou com a caixa violada, não use: é golpe conhecido.
              </p>
            )}
          </div>
        </div>
      </Container>

      <Container className="mt-14 max-w-4xl">
        <ProductReview product={product} />
      </Container>

      {articles.length > 0 && (
        <Container as="section" className="mt-14">
          <h2 className="mb-5 font-display text-xl font-bold tracking-tight sm:text-2xl">Leia também</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </Container>
      )}

      <Container className="mt-14 pb-16">
        <StorePromo products={related} title="Outros produtos da Loja do Bitcoin" subtitle="Mais itens com review honesta e link direto para a Amazon." />
      </Container>
    </>
  );
}

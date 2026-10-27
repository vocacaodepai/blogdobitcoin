import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { ArticleCard } from "@/components/ArticleCard";
import { Container } from "@/components/Container";
import { CoverImage, getCoverPhoto } from "@/components/CoverImage";
import { FaqAccordion } from "@/components/FaqAccordion";
import { QuizWidget } from "@/components/QuizWidget";
import { ReadingProgress } from "@/components/ReadingProgress";
import { SectionHeading } from "@/components/SectionHeading";
import { FeaturedList } from "@/components/Sidebar";
import { AuthorAvatar } from "@/components/article/AuthorAvatar";
import { AuthorBox } from "@/components/article/AuthorBox";
import { Breadcrumbs } from "@/components/article/Breadcrumbs";
import { JsonLd } from "@/components/article/JsonLd";
import { KeyTakeaways } from "@/components/article/KeyTakeaways";
import { NextArticle } from "@/components/article/NextArticle";
import { ReviewDisclosure, ReviewVerdict } from "@/components/article/ReviewVerdict";
import { ShareBar } from "@/components/article/ShareBar";
import { TableOfContents } from "@/components/article/TableOfContents";
import { TocDetails } from "@/components/article/TocDetails";
import { faqJsonLd } from "@/components/article/schema";
import { ProductCard } from "@/components/store/ProductCard";
import { StorePromo } from "@/components/store/StorePromo";
import { getProductBySlug, productStore, productStoreInfo, storesLabel, type Product } from "@/lib/products";
import { articles, getArticleBySlug, getCategory, getNextArticle, getRelatedArticles, isAffiliateUrl, site } from "@/lib/articles";
import { author } from "@/lib/author";
import { prepareArticleHtml, tocH2 } from "@/lib/html";
import { absoluteUrl, breadcrumbJsonLd, formatDate, metaDescription, readingTime, alternatesFor } from "@/lib/seo";

type Params = Promise<{ slug: string }>;

// Só os endereços conhecidos no build: slug inventado vira 404, sem gravar página nem imagem no cache.
export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const path = `/artigos/${article.slug}`;
  const title = article.seoTitle ?? article.title;
  const description = metaDescription(article.metaDescription ?? article.excerpt);
  const label = getCategory(article.category)?.label ?? article.category;

  return {
    title,
    description,
    alternates: alternatesFor(path),
    openGraph: {
      type: "article",
      url: absoluteUrl(path),
      title: article.title,
      description,
      siteName: site.name,
      locale: site.locale,
      publishedTime: article.date,
      modifiedTime: article.updated ?? article.date,
      authors: [absoluteUrl(author.url)],
      section: label,
      tags: [label, article.kind === "review" ? "Review" : "Guia"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description,
    },
  };
}

export default async function ArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const path = `/artigos/${article.slug}`;
  const url = absoluteUrl(path);
  const category = getCategory(article.category);
  const label = category?.label ?? article.category;
  const isReview = article.kind === "review" && !!article.review;
  const authorName = article.author ?? author.name;
  const isHouseAuthor = authorName === author.name;
  const updated = article.updated && article.updated !== article.date ? article.updated : undefined;
  const minutes = readingTime(article.content);

  // Uma passada só: `words` não depende dos cortes. Abaixo de 900 palavras,
  // o corpo fica inteiro (nenhum anúncio in-article).
  const withAds = prepareArticleHtml(article.content, { adBreaks: [2, 5] });
  const prepared = withAds.words >= 900 ? withAds : { ...withAds, parts: [withAds.parts.join("")] };
  const toc = tocH2(prepared.toc);

  const related = getRelatedArticles(article, 3);
  const next = getNextArticle(article);
  const cover = await getCoverPhoto(article.imageQuery, article.seed, article.coverImage);

  const authorLd = isHouseAuthor
    ? { "@type": "Person", name: author.name, url: absoluteUrl(author.url), image: absoluteUrl(author.image) }
    : { "@type": "Person", name: authorName };

  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: article.title,
    description: metaDescription(article.metaDescription ?? article.excerpt),
    image: [absoluteUrl(`${path}/opengraph-image`), ...(cover ? [cover.url] : [])],
    datePublished: article.date,
    dateModified: article.updated ?? article.date,
    author: authorLd,
    publisher: { "@id": `${site.url}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    isPartOf: { "@id": `${site.url}/#website` },
    articleSection: label,
    keywords: label,
    wordCount: prepared.words,
    inLanguage: "pt-BR",
    url,
  };

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Início", path: "/" },
    { name: label, path: `/categoria/${article.category}` },
    { name: article.title, path },
  ]);

  const review = article.review;
  const isProduct = article.category === "cripto-indica";
  const citedProducts = (article.products ?? []).map((s) => getProductBySlug(s)).filter((p): p is Product => Boolean(p));
  const reviewed = citedProducts[0];
  const storeText = storesLabel(citedProducts.map((p) => productStore(p)));
  const isHistory = article.category === "historia";
  const showRiskNote = ["mercado", "iniciantes", "altcoins", "bitcoin"].includes(article.category);
  // Review só de produto da loja (Cripto Indica). Preço nunca exato: a oferta é a faixa de
  // mercado pesquisada (AggregateOffer), e só quando ela existe.
  const reviewLd =
    isReview && review && isProduct
      ? {
          "@context": "https://schema.org",
          "@type": "Review",
          name: article.title,
          url,
          author: authorLd,
          publisher: { "@id": `${site.url}/#organization` },
          datePublished: article.date,
          dateModified: article.updated ?? article.date,
          inLanguage: "pt-BR",
          itemReviewed: {
            "@type": "Product",
            name: reviewed?.name ?? review.tool,
            ...(reviewed
              ? {
                  url: absoluteUrl(`/loja/${reviewed.slug}`),
                  image: absoluteUrl(reviewed.image.url),
                  ...(reviewed.brand ? { brand: { "@type": "Brand", name: reviewed.brand } } : {}),
                  ...(reviewed.priceMin && reviewed.priceMax
                    ? { offers: { "@type": "AggregateOffer", lowPrice: reviewed.priceMin, highPrice: reviewed.priceMax, priceCurrency: "BRL" } }
                    : {}),
                }
              : {}),
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: review.score,
            bestRating: 10,
            worstRating: 0,
          },
          reviewBody: article.excerpt,
          positiveNotes: {
            "@type": "ItemList",
            itemListElement: review.pros.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p })),
          },
          negativeNotes: {
            "@type": "ItemList",
            itemListElement: review.cons.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c })),
          },
        }
      : null;

  const faqLd = faqJsonLd(article.faq);

  return (
    <>
      <ReadingProgress />
      <JsonLd data={blogPosting} />
      <JsonLd data={breadcrumbs} />
      {reviewLd && <JsonLd data={reviewLd} />}
      {faqLd && <JsonLd data={faqLd} />}

      <article>
        <Container className="pt-8 sm:pt-10">
          <header className="max-w-3xl">
            <Breadcrumbs
              items={[
                { name: "Início", href: "/" },
                { name: label, href: `/categoria/${article.category}` },
                { name: article.title },
              ]}
            />
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <Link
                href={`/categoria/${article.category}`}
                className="label-mono rounded-lg border border-border bg-surface px-2.5 py-1 text-accent transition hover:border-accent"
              >
                {label}
              </Link>
              {isReview && (
                <span className="label-mono rounded-lg bg-ink px-2.5 py-1 text-ink-foreground">
                  <span className="text-brand">★</span> Review
                </span>
              )}
              {isHistory && article.historyYear && (
                <Link href="/historia" className="label-mono rounded-lg bg-brand/15 px-2.5 py-1 text-accent transition hover:bg-brand/25">
                  ₿ Memória de {article.historyYear}
                </Link>
              )}
            </div>
            <h1 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">{article.excerpt}</p>

            <div className="mt-6 flex flex-col gap-4 border-y border-border py-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-xs text-muted">
                <span className="flex items-center gap-2">
                  <AuthorAvatar name={authorName} />
                  {isHouseAuthor ? (
                    <Link href={author.url} className="font-medium text-foreground transition hover:text-accent">
                      {author.name}
                    </Link>
                  ) : (
                    <span className="font-medium text-foreground">{authorName}</span>
                  )}
                </span>
                <span aria-hidden="true" className="hidden sm:inline">
                  ·
                </span>
                <span>
                  Publicado em <time dateTime={article.date}>{formatDate(article.date)}</time>
                </span>
                {updated && (
                  <>
                    <span aria-hidden="true" className="hidden sm:inline">
                      ·
                    </span>
                    <span>
                      Atualizado em <time dateTime={updated}>{formatDate(updated)}</time>
                    </span>
                  </>
                )}
                <span aria-hidden="true" className="hidden sm:inline">
                  ·
                </span>
                <span>{minutes} min de leitura</span>
              </div>
              <ShareBar url={url} title={article.title} />
            </div>
          </header>

          <CoverImage
            query={article.imageQuery}
            seed={article.seed}
            alt={article.title}
            className="mt-8 max-w-3xl"
            priority
            sizes="(max-width: 1024px) 100vw, 800px"
            showCredit
            creditPlacement="below"
            label={label}
            override={article.coverImage}
          />
        </Container>

        <Container className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="min-w-0">
            {isReview && review && (
              <div className="mb-8">
                <ReviewVerdict review={review} defaultCta={reviewed ? productStoreInfo(reviewed).ctaLabel : undefined} />
                <ReviewDisclosure affiliate={review.affiliate || isAffiliateUrl(review.url)} store={storeText} />
              </div>
            )}

            {isProduct && !(isReview && review) && (
              <div className="mb-8 max-w-[68ch]">
                <ReviewDisclosure affiliate kind="comparativo" store={storeText} />
              </div>
            )}

            {article.keyPoints && article.keyPoints.length > 0 && (
              <div className="mb-8 max-w-[68ch]">
                <KeyTakeaways points={article.keyPoints} />
              </div>
            )}

            <TocDetails entries={toc} className="mb-8 max-w-[68ch] lg:hidden" />

            {prepared.parts.map((html, i) => (
              <Fragment key={i}>
                {i > 0 && <AdSlot format="in-article" className="ad-in-article my-8 max-w-[68ch]" />}
                <div className="prose-article max-w-[68ch]" dangerouslySetInnerHTML={{ __html: html }} />
              </Fragment>
            ))}

            <div className="max-w-[68ch]">
              {citedProducts.length > 0 && (
                <section aria-labelledby="produtos-citados" className="mt-10">
                  <h2 id="produtos-citados" className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                    Produtos citados nesta análise
                  </h2>
                  <p className="mt-1 text-sm text-muted">Cada um tem review completa na Loja do Bitcoin.</p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    {citedProducts.map((p) => (
                      <ProductCard key={p.slug} product={p} />
                    ))}
                  </div>
                </section>
              )}
              {showRiskNote && (
                <aside className="mt-10 rounded-xl border border-border border-l-4 border-l-warn bg-surface p-4 text-sm leading-relaxed text-muted">
                  <span className="label-mono block text-warn">Aviso</span>
                  Conteúdo educativo, não é recomendação de investimento. Criptomoedas são voláteis e você pode perder dinheiro.
                  Leia o{" "}
                  <Link href="/aviso-de-risco" className="font-medium text-accent hover:underline">
                    aviso de risco
                  </Link>{" "}
                  antes de decidir.
                </aside>
              )}
              <AuthorBox className="mt-10" />
              {article.faq && <FaqAccordion items={article.faq} />}
              {article.quiz && <QuizWidget questions={article.quiz} />}
            </div>
          </div>

          <aside className="space-y-6" aria-label="Barra lateral do artigo">
            <AdSlot format="rectangle" />
            <div className="space-y-6 lg:sticky lg:top-20">
              <TableOfContents entries={toc} className="hidden lg:block" />
              <FeaturedList exclude={[article.slug]} title="Leia também" limit={4} />
            </div>
          </aside>
        </Container>
      </article>

      <Container className="mt-14 pb-20">
        <AdSlot format="leaderboard" className="mb-12" />
        {related.length > 0 && (
          <section aria-label="Continue lendo">
            <SectionHeading
              label={label}
              title="Continue lendo"
              href={`/categoria/${article.category}`}
              linkText={`Mais em ${label}`}
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <ArticleCard key={r.slug} article={r} />
              ))}
            </div>
          </section>
        )}
        <NextArticle article={next} />
        {!isProduct && (
          <div className="mt-14">
            <StorePromo />
          </div>
        )}
      </Container>
    </>
  );
}

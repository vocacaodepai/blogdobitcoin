import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ScoreScaleNote } from "@/components/ScoreScaleNote";
import { JsonLd } from "@/components/article/JsonLd";
import { ReviewCriteria } from "@/components/listing/ReviewCriteria";
import { ProductCard } from "@/components/store/ProductCard";
import { getArticlesByCategory, site } from "@/lib/articles";
import { getProductsByCategory, productCategories, sortedProducts } from "@/lib/products";
import { absoluteUrl, alternatesFor, breadcrumbJsonLd, OG_IMAGE } from "@/lib/seo";

const TITLE = "Loja do Bitcoin: carteiras, livros e camisetas";
const DESCRIPTION =
  "Loja do Bitcoin: carteiras de hardware, backup da seed, livros sobre Bitcoin, camisetas e presentes cripto, com review honesta e link para comprar na Amazon ou na Shopee.";

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | ${site.name}` },
  description: DESCRIPTION,
  alternates: alternatesFor("/loja"),
  openGraph: { images: [OG_IMAGE], type: "website", url: absoluteUrl("/loja"), title: TITLE, description: DESCRIPTION, siteName: site.name, locale: site.locale },
};

export default function LojaPage() {
  const all = sortedProducts();
  const shelves = productCategories
    .map((c) => ({ category: c, items: getProductsByCategory(c.slug) }))
    .filter((s) => s.items.length > 0);
  const guides = getArticlesByCategory("cripto-indica").slice(0, 3);

  const listLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Loja do Bitcoin",
    numberOfItems: all.length,
    itemListElement: all.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.name, url: absoluteUrl(`/loja/${p.slug}`) })),
  };

  return (
    <>
      <JsonLd data={listLd} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Início", path: "/" }, { name: "Loja do Bitcoin", path: "/loja" }])} />
      <section className="relative isolate overflow-hidden border-b border-border bg-surface">
        <div aria-hidden="true" className="btc-glow pointer-events-none absolute inset-0 -z-10 opacity-60" />
        <Container className="py-10 sm:py-14">
          <PageHeader
            label="Loja do Bitcoin"
            title="O hodler quer desconto!"
            description="Produtos do mundo cripto que valem o seu dinheiro: carteiras de hardware para guardar seus bitcoins com segurança, livros, camisetas e presentes. Cada um tem review honesta com nota de 0 a 10 e o link direto para comprar na Amazon ou na Shopee."
            crumbs={[{ name: "Início", href: "/" }, { name: "Loja do Bitcoin" }]}
          >
            <nav aria-label="Seções da loja" className="mt-6">
              <ul className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
                {shelves.map((s) => (
                  <li key={s.category.slug}>
                    <a
                      href={`#${s.category.slug}`}
                      className="inline-flex h-8 items-center whitespace-nowrap rounded-lg border border-border bg-background px-3 text-xs font-medium text-muted transition hover:border-brand hover:text-foreground"
                    >
                      {s.category.label} ({s.items.length})
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </PageHeader>
        </Container>
      </section>

      <Container className="mt-8">
        <div className="rounded-xl border border-border border-l-4 border-l-warn bg-surface p-4 text-sm leading-relaxed text-muted sm:p-5">
          <span className="label-mono block text-warn">Como funciona a loja</span>
          <p className="mt-1.5">
            Não vendemos nada diretamente: os botões levam à Amazon Brasil ou à Shopee Brasil (o card mostra a loja), e a compra, a
            entrega e a garantia são com a loja e o vendedor. Os links são de afiliado, então podemos receber uma comissão sem custo
            extra para você. Nos produtos da Amazon, a faixa de preço é pesquisada em várias lojas online (não é o preço da Amazon);
            nos da Shopee, é a faixa do anúncio na data indicada, e preço, cupom e frete mudam. Em ambos, o valor do dia aparece no
            botão. Carteira de hardware: compre só de vendedor oficial ou autorizado e nunca use um aparelho que já venha com as
            palavras de recuperação anotadas.
          </p>
        </div>
      </Container>

      <Container className="mt-10 space-y-14">
        {shelves.length === 0 && (
          <p className="rounded-xl border border-dashed border-border bg-surface p-8 text-center text-muted">
            Os primeiros produtos da loja estão chegando.
          </p>
        )}
        {shelves.map((s, si) => (
          <section key={s.category.slug} id={s.category.slug} aria-labelledby={`loja-${s.category.slug}`} className="scroll-mt-24">
            <h2 id={`loja-${s.category.slug}`} className="font-display text-2xl font-bold tracking-tight">
              {s.category.label}
            </h2>
            <p className="mt-1 text-sm text-muted">{s.category.description}</p>
            <div className="mt-5 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {s.items.map((p, i) => (
                <ProductCard key={p.slug} product={p} priority={si === 0 && i < 4} />
              ))}
            </div>
          </section>
        ))}
      </Container>

      <Container className="mt-14 pb-16">
        {guides.length > 0 && (
          <section aria-labelledby="loja-guias" className="mb-10">
            <h2 id="loja-guias" className="font-display text-xl font-bold tracking-tight">
              Comparativos da Cripto Indica
            </h2>
            <ul className="mt-3 space-y-2">
              {guides.map((g) => (
                <li key={g.slug}>
                  <Link href={`/artigos/${g.slug}`} className="font-medium text-accent hover:underline">
                    {g.title} →
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
        <ScoreScaleNote />
        <ReviewCriteria />
      </Container>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { Container } from "@/components/Container";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/article/JsonLd";
import { faqJsonLd } from "@/components/article/schema";
import { CoinLivePanel } from "@/components/live/CoinLivePanel";
import { getArticleBySlug, site, type Article } from "@/lib/articles";
import { coins, getCoin } from "@/lib/coins";
import { formatBRL } from "@/lib/market/format";
import { getMarketServer } from "@/lib/market/paprika";
import { absoluteUrl, alternatesFor, breadcrumbJsonLd, metaDescription } from "@/lib/seo";

export const revalidate = 300;

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return coins.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const coin = getCoin(slug);
  if (!coin) return {};
  const title = `Preço do ${coin.name} (${coin.symbol}) hoje em reais`;
  const description = metaDescription(
    `Cotação do ${coin.name} (${coin.symbol}) hoje em real e dólar, ao vivo: variação em 24h, 7 dias e 1 ano, valor de mercado, o que é, para que serve e os riscos.`
  );
  return {
    title: { absolute: `${title} | ${site.name}` },
    description,
    alternates: alternatesFor(`/moedas/${coin.slug}`),
    openGraph: { type: "website", url: absoluteUrl(`/moedas/${coin.slug}`), title, description, siteName: site.name, locale: site.locale },
  };
}

export default async function CoinPage({ params }: { params: Params }) {
  const { slug } = await params;
  const coin = getCoin(slug);
  if (!coin) notFound();

  const market = await getMarketServer();
  const row = market.find((r) => r.id === coin.paprikaId);
  const related = (coin.relatedArticles ?? []).map((s) => getArticleBySlug(s)).filter((a): a is Article => Boolean(a));
  const others = coins.filter((c) => c.slug !== coin.slug);
  const path = `/moedas/${coin.slug}`;

  const faq = [
    {
      question: `Quanto vale 1 ${coin.name} hoje em reais?`,
      answer: row
        ? `Na última leitura do servidor, 1 ${coin.symbol} valia cerca de ${formatBRL(row.priceBrl)}. O valor do painel acima é atualizado a cada minuto, com a cotação global da CoinPaprika convertida para real, e pode diferir um pouco do preço da sua corretora.`
        : `O valor aparece no painel acima, atualizado a cada minuto com a cotação global da CoinPaprika convertida para real. O preço da sua corretora pode ser um pouco diferente por causa de spread e taxas.`,
    },
    {
      question: `Quem criou o ${coin.name} e quando?`,
      answer: `O ${coin.name} (${coin.symbol}) foi lançado em ${coin.launched}. Criação: ${coin.creator}. O consenso da rede é ${coin.consensus.toLowerCase()}.`,
    },
    {
      question: `O ${coin.name} tem limite de oferta?`,
      answer: `Oferta máxima: ${coin.maxSupply}. Compare com o Bitcoin, que tem limite fixo de 21 milhões de unidades e emissão que cai pela metade a cada halving.`,
    },
    {
      question: `Vale a pena comprar ${coin.name}?`,
      answer: `O Blog do Bitcoin não faz recomendação de investimento. Antes de comprar qualquer criptomoeda, entenda para que ela serve, os riscos listados nesta página e quanto você aceita perder, porque o preço pode cair muito em pouco tempo.`,
    },
  ];

  const pageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Preço do ${coin.name} (${coin.symbol}) hoje`,
    url: absoluteUrl(path),
    inLanguage: "pt-BR",
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@type": "Thing", name: coin.name, ...(coin.website ? { sameAs: coin.website } : {}) },
  };

  return (
    <>
      <JsonLd data={pageLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Ranking das criptomoedas", path: "/mercado" },
          { name: coin.name, path },
        ])}
      />
      {faqJsonLd(faq) && <JsonLd data={faqJsonLd(faq)} />}
      <Container className="pt-8 sm:pt-10">
        <PageHeader
          label={`${coin.symbol} ao vivo`}
          title={`Preço do ${coin.name} hoje`}
          description={`Cotação do ${coin.name} (${coin.symbol}) em real e dólar, com variação, valor de mercado e o que você precisa saber antes de comprar.`}
          crumbs={[{ name: "Início", href: "/" }, { name: "Mercado", href: "/mercado" }, { name: coin.name }]}
        />
      </Container>
      <Container className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0 space-y-8">
          <CoinLivePanel paprikaId={coin.paprikaId} name={coin.name} symbol={coin.symbol} initialMarket={market} />

          <section className="prose-article max-w-[68ch]" aria-labelledby="o-que-e">
            <h2 id="o-que-e">O que é o {coin.name}</h2>
            {coin.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="table-wrap">
              <table>
                <tbody>
                  <tr>
                    <th scope="row">Lançamento</th>
                    <td>{coin.launched}</td>
                  </tr>
                  <tr>
                    <th scope="row">Criação</th>
                    <td>{coin.creator}</td>
                  </tr>
                  <tr>
                    <th scope="row">Consenso</th>
                    <td>{coin.consensus}</td>
                  </tr>
                  <tr>
                    <th scope="row">Oferta máxima</th>
                    <td>{coin.maxSupply}</td>
                  </tr>
                  {coin.website && (
                    <tr>
                      <th scope="row">Site oficial</th>
                      <td>
                        <a href={coin.website} target="_blank" rel="noopener noreferrer nofollow">
                          {coin.website.replace(/^https:\/\//, "").replace(/\/$/, "")}
                        </a>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <h2>Para que serve</h2>
            <ul>
              {coin.useCases.map((u, i) => (
                <li key={i}>{u}</li>
              ))}
            </ul>
            <h2>Riscos e pontos de atenção</h2>
            <ul>
              {coin.risks.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
            <p>
              Para comparar com o líder do mercado, veja o <Link href="/bitcoin">preço do Bitcoin hoje</Link> e o{" "}
              <Link href="/mercado">ranking completo</Link>. Antes de comprar, leia o <Link href="/aviso-de-risco">aviso de risco</Link>{" "}
              e o guia de <Link href="/artigos/golpes-com-criptomoedas-como-se-proteger">golpes com criptomoedas</Link>.
            </p>
          </section>
          <div className="max-w-[68ch]">
            <FaqAccordion items={faq} />
          </div>
        </div>
        <aside className="space-y-6" aria-label="Outras moedas">
          <section className="rounded-xl border border-border bg-surface p-5">
            <h2 className="label-mono text-muted">Outras moedas</h2>
            <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
              <li>
                <Link href="/bitcoin" className="font-medium hover:text-accent">
                  Bitcoin (BTC)
                </Link>
              </li>
              {others.map((c) => (
                <li key={c.slug}>
                  <Link href={`/moedas/${c.slug}`} className="hover:text-accent">
                    {c.name} ({c.symbol})
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </Container>
      {related.length > 0 && (
        <Container as="section" className="mt-12 pb-16">
          <h2 className="mb-5 font-display text-xl font-bold tracking-tight sm:text-2xl">Para entender melhor</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </Container>
      )}
    </>
  );
}

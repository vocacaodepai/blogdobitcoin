import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { Container } from "@/components/Container";
import { FaqAccordion } from "@/components/FaqAccordion";
import { NewsList } from "@/components/NewsRow";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { JsonLd } from "@/components/article/JsonLd";
import { faqJsonLd } from "@/components/article/schema";
import { BtcChart } from "@/components/live/BtcChart";
import { BtcLivePanel } from "@/components/live/BtcLivePanel";
import { FearGreedGauge } from "@/components/live/FearGreedGauge";
import { HalvingCountdown } from "@/components/live/HalvingCountdown";
import { NetworkStats } from "@/components/live/NetworkStats";
import { PeriodChanges } from "@/components/live/PeriodChanges";
import { getArticlesByCategory, getHistoryArticles, site } from "@/lib/articles";
import { getBtcQuoteServer } from "@/lib/market/bitcoin";
import { getFearGreedServer } from "@/lib/market/feargreed";
import { formatBRL } from "@/lib/market/format";
import { getTipHeightServer } from "@/lib/market/mempool";
import { sortedNews } from "@/lib/news";
import { absoluteUrl, alternatesFor, breadcrumbJsonLd } from "@/lib/seo";

/** HTML refeito a cada 60 s: o Google já lê o preço no servidor; o navegador atualiza a cada 10 s. */
export const revalidate = 60;

const TITLE = "Preço do Bitcoin hoje em reais, ao vivo";
const DESCRIPTION =
  "Cotação do Bitcoin hoje em real e dólar, atualizada a cada 10 segundos: variação em 24h, 7 dias e 1 ano, gráfico, halving, taxas da rede e medo e ganância.";

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | ${site.name}` },
  description: DESCRIPTION,
  alternates: alternatesFor("/bitcoin"),
  openGraph: {
    type: "website",
    url: absoluteUrl("/bitcoin"),
    title: TITLE,
    description: DESCRIPTION,
    siteName: site.name,
    locale: site.locale,
  },
};

const FAQ = [
  {
    question: "Qual é o preço do Bitcoin hoje em reais?",
    answer:
      "O preço aparece no topo desta página e é atualizado a cada 10 segundos, a partir do par BTC/BRL negociado na Binance (com Mercado Bitcoin, Kraken e Coinbase como reserva). O valor muda o tempo todo, porque o Bitcoin é negociado 24 horas por dia, sete dias por semana, inclusive em feriados.",
  },
  {
    question: "Por que o preço do Bitcoin muda tanto?",
    answer:
      "O preço sai do encontro entre quem quer comprar e quem quer vender, sem banco central para segurar a cotação. Juros nos Estados Unidos, fluxo dos ETFs, notícias de regulação, o humor do mercado (veja o índice de medo e ganância) e a oferta limitada de 21 milhões pesam no curto prazo.",
  },
  {
    question: "Dá para comprar só um pedaço de um bitcoin?",
    answer:
      "Sim. Um bitcoin se divide em 100 milhões de satoshis, então dá para comprar valores pequenos, como R$ 50, em qualquer corretora brasileira. O conversor do site mostra quantos satoshis o seu dinheiro compra pela cotação de agora.",
  },
  {
    question: "Por que a cotação da minha corretora é diferente desta?",
    answer:
      "Cada corretora tem o próprio livro de ofertas, além de spread e taxas. A diferença costuma ser pequena entre as grandes, mas pode crescer em momentos de muita volatilidade. Use esta página como referência e confira sempre o preço final na hora de comprar ou vender.",
  },
  {
    question: "Quando é o próximo halving do Bitcoin?",
    answer:
      "O próximo halving acontece no bloco 1.050.000, quando a recompensa dos mineradores cai de 3,125 para 1,5625 BTC. A contagem regressiva desta página usa a altura real do bloco e o ritmo atual da mineração para estimar a data, que deve cair em 2028.",
  },
];

export default async function BitcoinPage() {
  const [quote, height, fng] = await Promise.all([getBtcQuoteServer(), getTipHeightServer(), getFearGreedServer(31)]);
  const articles = getArticlesByCategory("bitcoin").slice(0, 6);
  const memories = getHistoryArticles().slice(0, 3);
  const news = sortedNews()
    .filter((n) => n.topic === "bitcoin" || /bitcoin|btc/i.test(n.title))
    .slice(0, 6);

  const pageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    description: DESCRIPTION,
    url: absoluteUrl("/bitcoin"),
    inLanguage: "pt-BR",
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@type": "Thing", name: "Bitcoin", sameAs: "https://pt.wikipedia.org/wiki/Bitcoin" },
    ...(quote
      ? {
          mainEntity: {
            "@type": "ExchangeRateSpecification",
            currency: "BTC",
            currentExchangeRate: { "@type": "UnitPriceSpecification", price: Math.round(quote.brl * 100) / 100, priceCurrency: "BRL" },
          },
        }
      : {}),
  };

  return (
    <>
      <JsonLd data={pageLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Preço do Bitcoin hoje", path: "/bitcoin" },
        ])}
      />
      {faqJsonLd(FAQ) && <JsonLd data={faqJsonLd(FAQ)} />}

      <Container className="pt-8 sm:pt-10">
        <PageHeader
          label="Bitcoin ao vivo"
          title="Preço do Bitcoin hoje"
          description={
            quote
              ? `O Bitcoin estava cotado a ${formatBRL(quote.brl)} na última leitura do servidor. Abaixo, o preço ao vivo em real e dólar, atualizado a cada 10 segundos, com a variação de cada ciclo, gráfico, halving e rede.`
              : "Preço ao vivo do Bitcoin em real e dólar, atualizado a cada 10 segundos, com a variação de cada ciclo, gráfico, halving e rede."
          }
          crumbs={[{ name: "Início", href: "/" }, { name: "Preço do Bitcoin hoje" }]}
        />
      </Container>

      <Container className="mt-8 space-y-6">
        <BtcLivePanel initial={quote} />
        <PeriodChanges initial={quote} />
        <BtcChart />
        <div className="grid gap-6 lg:grid-cols-2">
          <HalvingCountdown initialHeight={height} />
          <FearGreedGauge initial={fng} />
        </div>
        <NetworkStats initialHeight={height} />

        <section className="grid gap-4 rounded-2xl border border-border bg-surface p-5 sm:grid-cols-3 sm:p-6" aria-label="Ferramentas do Bitcoin">
          {[
            { href: "/ferramentas/conversor", title: "Conversor de bitcoin", text: "Quantos satoshis o seu real compra, e quanto vale 0,01 BTC agora." },
            { href: "/ferramentas/calculadora-dca", title: "Calculadora DCA", text: "Simule um aporte mensal em bitcoin desde 2010, com a cotação de hoje." },
            { href: "/ferramentas/se-eu-tivesse-investido", title: "Se eu tivesse investido", text: "Quanto valeriam hoje R$ 100 em bitcoin comprados em qualquer mês." },
          ].map((t) => (
            <Link key={t.href} href={t.href} className="card-hover rounded-xl border border-border bg-background p-4">
              <p className="font-display text-base font-bold">{t.title} →</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{t.text}</p>
            </Link>
          ))}
        </section>
      </Container>

      <Container className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="min-w-0">
          <section className="prose-article max-w-[68ch]" aria-labelledby="sobre-o-bitcoin">
            <h2 id="sobre-o-bitcoin">O que é o Bitcoin e por que o preço muda</h2>
            <p>
              O Bitcoin é a primeira criptomoeda do mundo, criada em 2009 por alguém sob o pseudônimo de Satoshi Nakamoto. Ele
              funciona numa rede aberta, sem banco ou governo no controle, e tem um limite fixo de 21 milhões de unidades. A
              emissão de moedas novas cai pela metade a cada 210 mil blocos, no evento chamado halving.
            </p>
            <p>
              Como não existe uma cotação oficial, o preço do Bitcoin é o valor pelo qual compradores e vendedores fecham
              negócio nas corretoras, a qualquer hora do dia. Por isso ele varia muito: em poucas horas pode subir ou cair
              vários por cento. Para entender o básico, comece pelo guia{" "}
              <Link href="/artigos/o-que-e-bitcoin-e-como-funciona">o que é Bitcoin e como funciona</Link> e, antes de comprar,
              leia o <Link href="/aviso-de-risco">aviso de risco</Link>.
            </p>
            <h2>Como esta cotação é calculada</h2>
            <p>
              O preço em real vem do par BTC/BRL da Binance e o preço em dólar do par BTC/USDT, lidos a cada 10 segundos direto
              do seu navegador. Se a Binance não responder, o site usa o Mercado Bitcoin e a Kraken e, por último, a Coinbase. A
              variação &quot;desde a última atualização&quot; compara cada leitura com a anterior, e o histórico desde 2010 usa o
              fechamento mensal da blockchain.com convertido pelo dólar PTAX do Banco Central.
            </p>
          </section>
          <FaqAccordion items={FAQ} />
        </div>
        <aside className="space-y-6" aria-label="Mais sobre o Bitcoin">
          {memories.length > 0 && (
            <section className="rounded-xl border border-border bg-surface p-5">
              <h2 className="label-mono text-muted">Memórias do Bitcoin</h2>
              <ul className="mt-3 space-y-3">
                {memories.map((a) => (
                  <li key={a.slug}>
                    <ArticleCard article={a} variant="compact" />
                  </li>
                ))}
              </ul>
              <Link href="/historia" className="mt-4 inline-block font-mono text-xs text-accent hover:underline">
                Linha do tempo completa →
              </Link>
            </section>
          )}
        </aside>
      </Container>

      {news.length > 0 && (
        <Container as="section" className="mt-12">
          <SectionHeading label="Notícias" title="Últimas notícias do Bitcoin" href="/noticias" linkText="Todas as notícias" />
          <div className="rounded-xl border border-border bg-surface px-5 sm:px-6">
            <NewsList items={news} columns={2} />
          </div>
        </Container>
      )}

      {articles.length > 0 && (
        <Container as="section" className="mt-12 pb-16">
          <SectionHeading label="Aprenda" title="Guias sobre Bitcoin" href="/categoria/bitcoin" linkText="Ver todos" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </Container>
      )}
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/article/JsonLd";
import { faqJsonLd } from "@/components/article/schema";
import { MarketOverview } from "@/components/live/MarketOverview";
import { MarketTable } from "@/components/live/MarketTable";
import { site } from "@/lib/articles";
import { coinProfilesMap } from "@/lib/coins";
import { getGlobalServer, getMarketServer } from "@/lib/market/paprika";
import { absoluteUrl, alternatesFor, breadcrumbJsonLd, OG_IMAGE } from "@/lib/seo";

export const revalidate = 300;

const TITLE = "Ranking das criptomoedas hoje: preços em reais";
const DESCRIPTION =
  "As 100 maiores criptomoedas do mundo com preço em reais, variação de 1h, 24h, 7 e 30 dias, valor de mercado e volume, atualizadas a cada minuto.";

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | ${site.name}` },
  description: DESCRIPTION,
  alternates: alternatesFor("/mercado"),
  openGraph: { images: [OG_IMAGE], type: "website", url: absoluteUrl("/mercado"), title: TITLE, description: DESCRIPTION, siteName: site.name, locale: site.locale },
};

const FAQ = [
  {
    question: "O que é valor de mercado de uma criptomoeda?",
    answer:
      "É o preço de uma unidade multiplicado pela quantidade em circulação. É o critério usado para ordenar o ranking: mostra o tamanho da moeda, não se ela está barata ou cara. Uma moeda de centavos pode valer bilhões se tiver trilhões de unidades.",
  },
  {
    question: "Por que algumas moedas valem sempre perto de R$ 5?",
    answer:
      "São stablecoins como USDT e USDC, atreladas ao dólar: valem cerca de um dólar convertido para real. Elas aparecem no ranking porque têm valor de mercado alto, mas não sobem nem caem como as outras. Marque a opção para escondê-las da tabela.",
  },
  {
    question: "De onde vêm os preços do ranking?",
    answer:
      "Da CoinPaprika, que calcula a média global de várias corretoras e converte para real. O preço da sua corretora pode ser um pouco diferente por causa de spread, taxas e da liquidez do par em real.",
  },
  {
    question: "Estar no topo do ranking significa que a moeda é segura?",
    answer:
      "Não. O ranking mede tamanho, não qualidade. Moedas grandes já perderam quase todo o valor (como a Terra/Luna em 2022). Antes de comprar qualquer uma, entenda o projeto, os riscos e leia o aviso de risco do site.",
  },
];

export default async function MercadoPage() {
  const [rows, global] = await Promise.all([getMarketServer(), getGlobalServer()]);
  const profiles = coinProfilesMap();

  const listLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Ranking das criptomoedas por valor de mercado",
    numberOfItems: Math.min(rows.length, 100),
    itemListElement: rows.slice(0, 100).map((r) => ({
      "@type": "ListItem",
      position: r.rank,
      name: `${r.name} (${r.symbol})`,
      ...(r.id === "btc-bitcoin" ? { url: absoluteUrl("/bitcoin") } : profiles[r.id] ? { url: absoluteUrl(`/moedas/${profiles[r.id]}`) } : {}),
    })),
  };

  return (
    <>
      <JsonLd data={listLd} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Início", path: "/" }, { name: "Ranking das criptomoedas", path: "/mercado" }])} />
      {faqJsonLd(FAQ) && <JsonLd data={faqJsonLd(FAQ)} />}
      <Container className="pt-8 sm:pt-10">
        <PageHeader
          label="Mercado ao vivo"
          title="Ranking das criptomoedas"
          description="As maiores criptomoedas do mundo por valor de mercado, com preço em reais e variação ao vivo. Veja também quem mais sobe e cai no gráfico de bolhas."
          crumbs={[{ name: "Início", href: "/" }, { name: "Ranking das criptomoedas" }]}
        >
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href="/mercado/bolhas" className="inline-flex h-9 items-center rounded-lg bg-brand px-3.5 text-sm font-semibold text-brand-foreground hover:opacity-90">
              Ver bolhas cripto
            </Link>
            <Link href="/bitcoin" className="inline-flex h-9 items-center rounded-lg border border-border bg-surface px-3.5 text-sm font-semibold hover:border-brand">
              Preço do Bitcoin
            </Link>
            <Link href="/ferramentas/medo-e-ganancia" className="inline-flex h-9 items-center rounded-lg border border-border bg-surface px-3.5 text-sm font-semibold hover:border-brand">
              Medo e ganância
            </Link>
          </div>
        </PageHeader>
      </Container>
      <Container className="mt-8">
        <MarketOverview initialGlobal={global} initialRows={rows} profiles={profiles} />
      </Container>
      <Container className="mt-8">
        <MarketTable initial={rows} profiles={profiles} />
      </Container>
      <Container className="mt-10 max-w-4xl pb-16">
        <FaqAccordion items={FAQ} />
      </Container>
    </>
  );
}

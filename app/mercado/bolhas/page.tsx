import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/article/JsonLd";
import { BubbleChart } from "@/components/live/BubbleChart";
import { site } from "@/lib/articles";
import { coinProfilesMap } from "@/lib/coins";
import { getMarketServer } from "@/lib/market/paprika";
import { absoluteUrl, alternatesFor, breadcrumbJsonLd, OG_IMAGE } from "@/lib/seo";

export const revalidate = 300;

const TITLE = "Bolhas cripto: quem sobe e quem cai hoje";
const DESCRIPTION =
  "Veja o mercado cripto em bolhas: cada moeda é uma bolha, o tamanho mostra a variação e a cor mostra se subiu ou caiu em 1h, 24h, 7 dias, 30 dias ou 1 ano.";

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | ${site.name}` },
  description: DESCRIPTION,
  alternates: alternatesFor("/mercado/bolhas"),
  openGraph: { images: [OG_IMAGE], type: "website", url: absoluteUrl("/mercado/bolhas"), title: TITLE, description: DESCRIPTION, siteName: site.name, locale: site.locale },
};

export default async function BolhasPage() {
  const rows = await getMarketServer();
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Ranking das criptomoedas", path: "/mercado" },
          { name: "Bolhas cripto", path: "/mercado/bolhas" },
        ])}
      />
      <Container className="pt-8 sm:pt-10">
        <PageHeader
          label="Mercado ao vivo"
          title="Bolhas cripto"
          description="O mercado inteiro de uma vez: bolhas verdes subiram, vermelhas caíram, e quanto maior a bolha, maior a variação no período. Toque numa bolha para ver os detalhes."
          crumbs={[{ name: "Início", href: "/" }, { name: "Mercado", href: "/mercado" }, { name: "Bolhas cripto" }]}
        />
      </Container>
      <Container className="mt-6">
        <BubbleChart initial={rows} profiles={coinProfilesMap()} />
      </Container>
      <Container className="mt-10 max-w-3xl pb-16">
        <section className="prose-article">
          <h2>Como ler as bolhas</h2>
          <p>
            Cada bolha é uma das maiores criptomoedas por valor de mercado. A cor diz a direção (verde para alta, vermelho para
            queda) e a intensidade cresce com o tamanho da variação. No modo &quot;tamanho: variação&quot;, as moedas que mais se
            mexeram ficam maiores; no modo &quot;valor de mercado&quot;, o tamanho mostra quem é grande de verdade, e o Bitcoin domina
            a tela.
          </p>
          <p>
            Um dia de muitas bolhas vermelhas costuma acompanhar quedas do Bitcoin, que puxa o resto do mercado. Para ver os números
            exatos, use o <Link href="/mercado">ranking das criptomoedas</Link>; para o humor geral, o{" "}
            <Link href="/ferramentas/medo-e-ganancia">índice de medo e ganância</Link>. Variação passada não indica o que vem
            depois: leia o <Link href="/aviso-de-risco">aviso de risco</Link>.
          </p>
        </section>
      </Container>
    </>
  );
}

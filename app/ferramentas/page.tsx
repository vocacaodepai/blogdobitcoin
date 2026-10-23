import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/article/JsonLd";
import { site } from "@/lib/articles";
import { absoluteUrl, alternatesFor, breadcrumbJsonLd, OG_IMAGE } from "@/lib/seo";

const TITLE = "Ferramentas de Bitcoin e cripto";
const DESCRIPTION =
  "Ferramentas grátis de Bitcoin em português: conversor BTC/sats/real, calculadora DCA, se eu tivesse investido, halving, medo e ganância, ranking e bolhas.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesFor("/ferramentas"),
  openGraph: { images: [OG_IMAGE], type: "website", url: absoluteUrl("/ferramentas"), title: `${TITLE} | ${site.name}`, description: DESCRIPTION, siteName: site.name, locale: site.locale },
};

const TOOLS = [
  { href: "/bitcoin", title: "Preço do Bitcoin ao vivo", text: "Cotação em real e dólar a cada 10 segundos, variação de cada ciclo, gráfico desde 2010 e rede.", tag: "Ao vivo" },
  { href: "/ferramentas/conversor", title: "Conversor de bitcoin", text: "BTC, satoshis, real, dólar e as principais criptomoedas, pela cotação do momento.", tag: "Conversão" },
  { href: "/ferramentas/calculadora-dca", title: "Calculadora DCA", text: "Simule um aporte mensal fixo em bitcoin desde 2010 e veja o preço médio e o resultado.", tag: "Simulação" },
  { href: "/ferramentas/se-eu-tivesse-investido", title: "Se eu tivesse investido", text: "Quanto valeria hoje um valor aplicado em bitcoin em qualquer mês, comparado ao dólar.", tag: "Simulação" },
  { href: "/ferramentas/halving", title: "Contagem do halving", text: "Blocos que faltam, data estimada e recompensa atual, direto da blockchain.", tag: "Ao vivo" },
  { href: "/ferramentas/medo-e-ganancia", title: "Medo e ganância", text: "O humor do mercado cripto de 0 a 100, com histórico de um ano.", tag: "Indicador" },
  { href: "/mercado", title: "Ranking das criptomoedas", text: "As 100 maiores moedas em reais, com busca, filtros e variação por período.", tag: "Ao vivo" },
  { href: "/mercado/bolhas", title: "Bolhas cripto", text: "Quem sobe e quem cai, em bolhas dimensionadas pela variação.", tag: "Ao vivo" },
  { href: "/glossario", title: "Glossário cripto", text: "Do ATH ao UTXO: os termos do mundo cripto explicados em português.", tag: "Referência" },
  { href: "/historia", title: "Linha do tempo do Bitcoin", text: "Os marcos de 2008 até hoje e os fatos mais curiosos da história do Bitcoin.", tag: "Referência" },
];

export default function FerramentasPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Início", path: "/" }, { name: "Ferramentas", path: "/ferramentas" }])} />
      <Container className="pt-8 sm:pt-10">
        <PageHeader
          label="Ferramentas grátis"
          title={TITLE}
          description="Tudo o que dá para calcular, converter e acompanhar no Blog do Bitcoin, com dados ao vivo e sem cadastro."
          crumbs={[{ name: "Início", href: "/" }, { name: "Ferramentas" }]}
        />
      </Container>
      <Container className="mt-8 pb-16">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((t) => (
            <li key={t.href}>
              <Link href={t.href} className="card-hover flex h-full flex-col rounded-xl border border-border bg-surface p-5">
                <span className="label-mono text-accent">{t.tag}</span>
                <span className="mt-2 font-display text-lg font-bold">{t.title}</span>
                <span className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">{t.text}</span>
                <span className="mt-4 font-mono text-xs font-medium text-accent">Abrir →</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}

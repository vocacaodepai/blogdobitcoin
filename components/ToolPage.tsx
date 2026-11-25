import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/article/JsonLd";
import { faqJsonLd } from "@/components/article/schema";
import { site } from "@/lib/articles";
import { absoluteUrl, alternatesFor, breadcrumbJsonLd, OG_IMAGE } from "@/lib/seo";

export type ToolMeta = {
  path: string;
  /** Título curto da ferramenta (h1). */
  name: string;
  /** <title> com a palavra-chave. */
  seoTitle: string;
  description: string;
};

export function toolMetadata(t: ToolMeta): Metadata {
  return {
    title: { absolute: `${t.seoTitle} | ${site.name}` },
    description: t.description,
    alternates: alternatesFor(t.path),
    openGraph: { images: [OG_IMAGE], type: "website", url: absoluteUrl(t.path), title: t.seoTitle, description: t.description, siteName: site.name, locale: site.locale },
  };
}

const OTHER_TOOLS = [
  { href: "/ferramentas/conversor", label: "Conversor de bitcoin" },
  { href: "/ferramentas/calculadora-dca", label: "Calculadora DCA" },
  { href: "/ferramentas/se-eu-tivesse-investido", label: "Se eu tivesse investido" },
  { href: "/ferramentas/halving", label: "Contagem do halving" },
  { href: "/ferramentas/medo-e-ganancia", label: "Medo e ganância" },
  { href: "/mercado/bolhas", label: "Bolhas cripto" },
];

/** Moldura das páginas de ferramenta: cabeçalho, ferramenta, texto explicativo, FAQ e outras ferramentas. */
export function ToolPage({
  tool,
  intro,
  children,
  article,
  faq,
}: {
  tool: ToolMeta;
  intro: string;
  /** A ferramenta em si. */
  children: React.ReactNode;
  /** Texto explicativo (prose) abaixo da ferramenta. */
  article?: React.ReactNode;
  faq: { question: string; answer: string }[];
}) {
  // WebPage, não WebApplication: o Google exige nota (aggregateRating/review) em app e não há
  // avaliação real das ferramentas para declarar.
  const appLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: tool.name,
    url: absoluteUrl(tool.path),
    description: tool.description,
    inLanguage: "pt-BR",
    isPartOf: { "@id": `${site.url}/#website` },
  };
  return (
    <>
      <JsonLd data={appLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Ferramentas", path: "/ferramentas" },
          { name: tool.name, path: tool.path },
        ])}
      />
      {faqJsonLd(faq) && <JsonLd data={faqJsonLd(faq)} />}
      <Container className="pt-8 sm:pt-10">
        <PageHeader
          label="Ferramenta grátis"
          title={tool.name}
          description={intro}
          crumbs={[{ name: "Início", href: "/" }, { name: "Ferramentas", href: "/ferramentas" }, { name: tool.name }]}
        />
      </Container>
      <Container className="mt-8">{children}</Container>
      <Container className="mt-12 grid gap-10 pb-16 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="min-w-0">
          {article && <div className="prose-article max-w-[68ch]">{article}</div>}
          <div className="max-w-[68ch]">
            <FaqAccordion items={faq} />
          </div>
        </div>
        <aside aria-label="Outras ferramentas">
          <section className="rounded-xl border border-border bg-surface p-5">
            <h2 className="label-mono text-muted">Outras ferramentas</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {OTHER_TOOLS.filter((o) => o.href !== tool.path).map((o) => (
                <li key={o.href}>
                  <Link href={o.href} className="font-medium hover:text-accent">
                    {o.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </Container>
    </>
  );
}

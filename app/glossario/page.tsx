import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/article/JsonLd";
import { site } from "@/lib/articles";
import { glossary, glossaryByLetter } from "@/lib/history-content";
import { absoluteUrl, alternatesFor, breadcrumbJsonLd } from "@/lib/seo";

const TITLE = "Glossário cripto: termos de Bitcoin explicados";
const DESCRIPTION =
  "Glossário de Bitcoin e criptomoedas em português: blockchain, halving, seed, satoshi, stablecoin, DeFi, ETF, HODL e outros termos explicados de forma simples.";

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | ${site.name}` },
  description: DESCRIPTION,
  alternates: alternatesFor("/glossario"),
  openGraph: { type: "website", url: absoluteUrl("/glossario"), title: TITLE, description: DESCRIPTION, siteName: site.name, locale: site.locale },
};

export default function GlossarioPage() {
  const groups = glossaryByLetter();
  const ld = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Glossário cripto do Blog do Bitcoin",
    url: absoluteUrl("/glossario"),
    inLanguage: "pt-BR",
    hasDefinedTerm: glossary.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.definition,
      url: absoluteUrl(`/glossario#${t.slug}`),
    })),
  };
  return (
    <>
      <JsonLd data={ld} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Início", path: "/" }, { name: "Glossário cripto", path: "/glossario" }])} />
      <Container className="pt-8 sm:pt-10">
        <PageHeader
          label="Referência"
          title="Glossário cripto"
          description={`${glossary.length} termos do mundo do Bitcoin e das criptomoedas, explicados em uma ou duas frases, com link para o guia completo quando existe.`}
          crumbs={[{ name: "Início", href: "/" }, { name: "Glossário cripto" }]}
        >
          <nav aria-label="Letras" className="mt-6">
            <ul className="flex flex-wrap gap-1.5">
              {groups.map(([letter]) => (
                <li key={letter}>
                  <a href={`#letra-${letter}`} className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface font-mono text-xs font-semibold transition hover:border-brand">
                    {letter}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </PageHeader>
      </Container>
      <Container className="mt-10 max-w-4xl pb-16">
        {groups.map(([letter, terms]) => (
          <section key={letter} id={`letra-${letter}`} aria-label={`Letra ${letter}`} className="scroll-mt-24 border-t border-border py-6 first:border-t-0">
            <h2 className="font-display text-3xl font-bold text-accent">{letter}</h2>
            <dl className="mt-3 space-y-5">
              {terms.map((t) => (
                <div key={t.slug} id={t.slug} className="scroll-mt-24">
                  <dt className="font-display text-lg font-bold">
                    <a href={`#${t.slug}`} className="hover:text-accent">
                      {t.term}
                    </a>
                  </dt>
                  <dd className="mt-1 text-base leading-relaxed text-foreground/90">{t.definition}</dd>
                  {t.related && t.related.length > 0 && (
                    <dd className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                      {t.related.map((r) => (
                        <Link key={r.href} href={r.href} className="text-accent hover:underline">
                          {r.label} →
                        </Link>
                      ))}
                    </dd>
                  )}
                </div>
              ))}
            </dl>
          </section>
        ))}
      </Container>
    </>
  );
}

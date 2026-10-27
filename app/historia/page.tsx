import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/article/JsonLd";
import { getArticleBySlug, getHistoryArticles, site } from "@/lib/articles";
import { curiosities, timeline, timelineDate } from "@/lib/history-content";
import { absoluteUrl, alternatesFor, breadcrumbJsonLd, OG_IMAGE } from "@/lib/seo";

const TITLE = "História do Bitcoin: linha do tempo e fatos curiosos";
const DESCRIPTION =
  "A história do Bitcoin de 2008 até hoje: o whitepaper de Satoshi, o bloco gênese, a pizza de 10 mil bitcoins, os halvings, Mt. Gox, ETFs e fatos curiosos.";

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | ${site.name}` },
  description: DESCRIPTION,
  alternates: alternatesFor("/historia"),
  openGraph: { images: [OG_IMAGE], type: "website", url: absoluteUrl("/historia"), title: TITLE, description: DESCRIPTION, siteName: site.name, locale: site.locale },
};

export default function HistoriaPage() {
  const memories = getHistoryArticles();
  const years = [...new Set(timeline.map((e) => e.date.slice(0, 4)))];

  const ld = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: TITLE,
    description: DESCRIPTION,
    url: absoluteUrl("/historia"),
    inLanguage: "pt-BR",
    isPartOf: { "@id": `${site.url}/#website` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: timeline.length,
      itemListElement: timeline.map((e, i) => ({ "@type": "ListItem", position: i + 1, name: `${timelineDate(e.date)}: ${e.title}` })),
    },
  };

  return (
    <>
      <JsonLd data={ld} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Início", path: "/" }, { name: "História do Bitcoin", path: "/historia" }])} />
      <section className="relative isolate overflow-hidden border-b border-border bg-surface">
        <div aria-hidden="true" className="btc-glow pointer-events-none absolute inset-0 -z-10 opacity-50" />
        <Container className="py-10 sm:py-14">
          <PageHeader
            label="Memórias do Bitcoin"
            title="A história do Bitcoin"
            description="Do e-mail de Satoshi Nakamoto em 2008 aos ETFs em Wall Street: os marcos que fizeram o Bitcoin ser o que é hoje, os fatos mais curiosos e as histórias completas da série Memórias do Bitcoin."
            crumbs={[{ name: "Início", href: "/" }, { name: "História do Bitcoin" }]}
          >
            <nav aria-label="Anos da linha do tempo" className="mt-6">
              <ul className="no-scrollbar flex gap-1.5 overflow-x-auto pb-1">
                {years.map((y) => (
                  <li key={y}>
                    <a href={`#ano-${y}`} className="inline-flex h-8 items-center rounded-lg border border-border bg-background px-3 font-mono text-xs text-muted transition hover:border-brand hover:text-foreground">
                      {y}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </PageHeader>
        </Container>
      </section>

      {memories.length > 0 && (
        <Container as="section" className="mt-10" aria-labelledby="memorias">
          <h2 id="memorias" className="font-display text-2xl font-bold tracking-tight">
            Memórias do Bitcoin
          </h2>
          <p className="mt-1 text-sm text-muted">As histórias completas, contadas como reportagem e com as fontes originais.</p>
          <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {memories.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </Container>
      )}

      <Container as="section" className="mt-14" aria-labelledby="linha-do-tempo">
        <h2 id="linha-do-tempo" className="font-display text-2xl font-bold tracking-tight">
          Linha do tempo do Bitcoin
        </h2>
        <ol className="timeline mt-6 space-y-6">
          {timeline.map((e, i) => {
            const year = e.date.slice(0, 4);
            const firstOfYear = i === 0 || timeline[i - 1].date.slice(0, 4) !== year;
            const art = e.article ? getArticleBySlug(e.article) : undefined;
            return (
              <li key={`${e.date}-${e.title}`} id={firstOfYear ? `ano-${year}` : undefined} className="relative scroll-mt-24 pl-8 md:grid md:grid-cols-[7rem_1fr] md:gap-6 md:pl-0">
                <span aria-hidden="true" className="absolute left-[0.35rem] top-1.5 h-3 w-3 rounded-full border-2 border-surface bg-brand md:left-[7.35rem]" />
                <time dateTime={e.date} className="block font-mono text-xs font-semibold text-accent md:pt-0.5 md:text-right">
                  {timelineDate(e.date)}
                </time>
                <div className="mt-1 rounded-xl border border-border bg-surface p-4 md:mt-0 md:ml-6">
                  <h3 className="font-display text-base font-bold">{e.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{e.text}</p>
                  <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px]">
                    {e.priceNote && <span className="text-foreground">Preço: {e.priceNote}</span>}
                    {art && (
                      <Link href={`/artigos/${art.slug}`} className="text-accent hover:underline">
                        Ler a história completa →
                      </Link>
                    )}
                    {e.source && (
                      <a href={e.source.url} target="_blank" rel="noopener noreferrer nofollow" className="text-muted hover:text-foreground">
                        Fonte: {e.source.label}
                      </a>
                    )}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>

      <Container as="section" className="mt-16" aria-labelledby="curiosidades">
        <h2 id="curiosidades" className="font-display text-2xl font-bold tracking-tight">
          Fatos curiosos sobre o Bitcoin
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {curiosities.map((c) => {
            const art = c.article ? getArticleBySlug(c.article) : undefined;
            return (
              <article key={c.title} className="flex flex-col rounded-xl border border-border bg-surface p-5">
                <p className="label-mono text-accent">₿ Fato curioso</p>
                <h3 className="mt-2 font-display text-base font-bold leading-snug">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{c.text}</p>
                <p className="mt-3 flex flex-wrap gap-x-4 font-mono text-[11px]">
                  {art && (
                    <Link href={`/artigos/${art.slug}`} className="text-accent hover:underline">
                      Saiba mais →
                    </Link>
                  )}
                  {c.source && (
                    <a href={c.source.url} target="_blank" rel="noopener noreferrer nofollow" className="text-muted hover:text-foreground">
                      Fonte: {c.source.label}
                    </a>
                  )}
                </p>
              </article>
            );
          })}
        </div>
      </Container>

      <Container className="mt-14 pb-16">
        <div className="rounded-2xl border border-border bg-ink p-6 text-ink-foreground sm:p-8">
          <h2 className="font-display text-2xl font-bold text-white">E se você tivesse comprado lá atrás?</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-foreground/80">
            Escolha qualquer mês desde 2010 e veja quanto um valor em reais valeria hoje em bitcoin, pela cotação ao vivo.
          </p>
          <Link href="/ferramentas/se-eu-tivesse-investido" className="mt-5 inline-flex h-11 items-center rounded-lg bg-brand px-5 text-sm font-semibold text-brand-foreground hover:opacity-90">
            Fazer a conta →
          </Link>
        </div>
      </Container>
    </>
  );
}

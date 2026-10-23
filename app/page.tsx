import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryChips } from "@/components/CategoryChips";
import { Container } from "@/components/Container";
import { NewsList } from "@/components/NewsRow";
import { SectionHeading } from "@/components/SectionHeading";
import { FeaturedList } from "@/components/Sidebar";
import { BtcLivePanel } from "@/components/live/BtcLivePanel";
import { FearGreedGauge } from "@/components/live/FearGreedGauge";
import { HalvingCountdown } from "@/components/live/HalvingCountdown";
import { MarketOverview } from "@/components/live/MarketOverview";
import { MarketTable } from "@/components/live/MarketTable";
import { StorePromo } from "@/components/store/StorePromo";
import {
  type Article,
  type Category,
  articles,
  categories,
  getArticlesByCategory,
  getHistoryArticles,
  site,
  sortedArticles,
} from "@/lib/articles";
import { coinProfilesMap } from "@/lib/coins";
import { curiosities } from "@/lib/history-content";
import { getBtcQuoteServer } from "@/lib/market/bitcoin";
import { getFearGreedServer } from "@/lib/market/feargreed";
import { getTipHeightServer } from "@/lib/market/mempool";
import { getGlobalServer, getMarketServer } from "@/lib/market/paprika";
import { news, sortedNews } from "@/lib/news";
import { products } from "@/lib/products";
import { absoluteUrl, alternatesFor, metaDescription, safeJsonLd } from "@/lib/seo";

/** A home sai do servidor com o preço do Bitcoin e o ranking; o navegador atualiza sozinho. */
export const revalidate = 60;

const HOME_TITLE = "Blog do Bitcoin: preço do Bitcoin hoje, notícias e guias de cripto";
const HOME_DESCRIPTION = metaDescription(site.description);

export const metadata: Metadata = {
  title: { absolute: HOME_TITLE },
  description: HOME_DESCRIPTION,
  alternates: alternatesFor("/"),
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    locale: site.locale,
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
  twitter: { card: "summary_large_image", title: HOME_TITLE, description: HOME_DESCRIPTION },
};

const CATEGORY_TITLES: Record<Category, string> = {
  bitcoin: "Entenda o Bitcoin",
  iniciantes: "Primeiros passos em cripto",
  mercado: "Mercado e investimento",
  altcoins: "Além do Bitcoin",
  seguranca: "Proteja suas moedas",
  brasil: "Cripto no Brasil: lei e impostos",
  historia: "Memórias do Bitcoin",
  "cripto-indica": "Cripto Indica",
};

const PER_SECTION = 3;

function CategoryBlock({ category, items }: { category: (typeof categories)[number]; items: Article[] }) {
  return (
    <section aria-label={category.label}>
      <SectionHeading label={category.label} title={CATEGORY_TITLES[category.slug] ?? category.label} href={`/categoria/${category.slug}`} linkText="Ver categoria" />
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
    </section>
  );
}

/** Curiosidade do dia: muda uma vez por dia, sem sorteio (dia do ano). */
function curiosityOfTheDay() {
  if (curiosities.length === 0) return null;
  const now = new Date();
  const start = Date.UTC(now.getUTCFullYear(), 0, 0);
  const day = Math.floor((now.getTime() - start) / 86400000);
  return curiosities[day % curiosities.length];
}

export default async function Home() {
  const [quote, height, fng, market, global] = await Promise.all([
    getBtcQuoteServer(),
    getTipHeightServer(),
    getFearGreedServer(31),
    getMarketServer(),
    getGlobalServer(),
  ]);
  const profiles = coinProfilesMap();

  const all = sortedArticles();
  const nonIndica = all.filter((a) => a.category !== "cripto-indica");
  const [lead, ...others] = nonIndica;
  const secondary = others.slice(0, 2);
  const heroSlugs = [lead, ...secondary].filter(Boolean).map((a) => a.slug);

  const shown = new Set<string>(heroSlugs);
  const memories = getHistoryArticles()
    .filter((a) => !shown.has(a.slug))
    .slice(0, 3);
  for (const m of memories) shown.add(m.slug);

  const indica = getArticlesByCategory("cripto-indica").slice(0, 2);
  for (const p of indica) shown.add(p.slug);

  const categoryBlocks = categories
    .filter((c) => c.slug !== "historia" && c.slug !== "cripto-indica")
    .map((c) => ({
      category: c,
      items: getArticlesByCategory(c.slug)
        .filter((a) => !shown.has(a.slug))
        .slice(0, PER_SECTION),
    }))
    .filter((b) => b.items.length > 0);

  const latestNews = sortedNews().slice(0, 6);
  const moreNews = sortedNews().slice(6, 12);
  const curiosity = curiosityOfTheDay();

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Destaques do Blog do Bitcoin",
    numberOfItems: heroSlugs.length,
    itemListElement: [lead, ...secondary].filter(Boolean).map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: a.title,
      url: absoluteUrl(`/artigos/${a.slug}`),
    })),
  };

  return (
    <>
      <h1 className="sr-only">{HOME_TITLE}</h1>

      {/* Destaque do Bitcoin: preço ao vivo + últimas notícias */}
      <Container as="section" className="pt-6 sm:pt-8">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <BtcLivePanel initial={quote} variant="hero" />
          </div>
          <div className="lg:col-span-5">
            <div className="h-full rounded-2xl border border-border bg-surface px-5 pt-4 sm:px-6">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-lg font-bold tracking-tight">Últimas notícias</h2>
                <Link href="/noticias" className="font-mono text-xs text-muted hover:text-accent">
                  Ver todas →
                </Link>
              </div>
              {latestNews.length > 0 ? (
                <NewsList items={latestNews.slice(0, 5)} columns={1} />
              ) : (
                <p className="py-6 text-sm text-muted">As notícias do dia estão chegando.</p>
              )}
            </div>
          </div>
        </div>
      </Container>

      {/* Mercado agora */}
      <Container as="section" className="mt-10" aria-labelledby="mercado-agora">
        <SectionHeading label="Mercado ao vivo" title="Criptomoedas agora" href="/mercado" linkText="Ranking completo" />
        <MarketOverview initialGlobal={global} initialRows={market} profiles={profiles} />
        <div className="mt-4">
          <MarketTable initial={market} profiles={profiles} limit={10} showControls={false} />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/mercado" className="inline-flex h-10 items-center rounded-lg border border-border bg-surface px-4 text-sm font-semibold hover:border-brand">
            Ver as 100 maiores
          </Link>
          <Link href="/mercado/bolhas" className="inline-flex h-10 items-center rounded-lg bg-brand px-4 text-sm font-semibold text-brand-foreground hover:opacity-90">
            Ver as bolhas cripto
          </Link>
        </div>
      </Container>

      {/* Destaques editoriais */}
      {lead && (
        <Container as="section" className="mt-14">
          <SectionHeading label="Destaques" title="Para ler hoje" href="/artigos" linkText="Todos os artigos" />
          <div className="relative isolate">
            <div aria-hidden="true" className="hero-glow pointer-events-none absolute inset-x-0 -top-8 -z-10 h-3/4 opacity-25 blur-3xl" />
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              <div className="lg:col-span-8 lg:h-full">
                <ArticleCard article={lead} variant="featured" priority headingLevel="h3" className="lg:h-full" />
              </div>
              <div className="flex flex-col gap-4 lg:col-span-4">
                {secondary.map((a) => (
                  <ArticleCard key={a.slug} article={a} variant="horizontal" />
                ))}
                <FeaturedList exclude={heroSlugs} limit={4} />
              </div>
            </div>
          </div>
        </Container>
      )}

      <Container className="mt-8">
        <CategoryChips />
      </Container>

      <Container className="mt-6">
        <AdSlot format="leaderboard" />
      </Container>

      {/* Bitcoin em números */}
      <Container as="section" className="mt-12" aria-label="Bitcoin em números">
        <div className="grid gap-6 lg:grid-cols-2 [&>*]:min-w-0">
          <HalvingCountdown initialHeight={height} compact />
          <FearGreedGauge initial={fng} compact />
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { href: "/ferramentas/conversor", title: "Conversor", text: "BTC, sats, real e dólar ao vivo." },
            { href: "/ferramentas/calculadora-dca", title: "Calculadora DCA", text: "Aporte mensal em bitcoin desde 2010." },
            { href: "/ferramentas/se-eu-tivesse-investido", title: "Se eu tivesse investido", text: "Quanto valeria hoje?" },
          ].map((t) => (
            <Link key={t.href} href={t.href} className="card-hover rounded-xl border border-border bg-surface p-4">
              <p className="font-display text-base font-bold">{t.title} →</p>
              <p className="mt-1 text-sm text-muted">{t.text}</p>
            </Link>
          ))}
        </div>
      </Container>

      {/* Memórias do Bitcoin */}
      {(memories.length > 0 || curiosity) && (
        <Container as="section" className="mt-14" aria-label="Memórias do Bitcoin">
          <SectionHeading label="Memórias do Bitcoin" title="A história que explica o Bitcoin" href="/historia" linkText="Linha do tempo" />
          <div className="grid gap-6 lg:grid-cols-4">
            {curiosity && (
              <aside className="rounded-xl border border-brand/40 bg-brand/5 p-5 lg:col-span-1">
                <p className="label-mono text-accent">₿ Fato curioso do dia</p>
                <h3 className="mt-2 font-display text-lg font-bold leading-snug">{curiosity.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{curiosity.text}</p>
                <Link href={curiosity.article ? `/artigos/${curiosity.article}` : "/historia"} className="mt-3 inline-block font-mono text-xs text-accent hover:underline">
                  Saiba mais →
                </Link>
              </aside>
            )}
            <div className={`grid gap-6 sm:grid-cols-2 ${curiosity ? "lg:col-span-3 lg:grid-cols-3" : "lg:col-span-4 lg:grid-cols-3"}`}>
              {memories.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </Container>
      )}

      {/* Blocos por categoria + mais notícias */}
      <Container className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12">
        <div className="min-w-0 space-y-12">
          {categoryBlocks.map((b) => (
            <CategoryBlock key={b.category.slug} category={b.category} items={b.items} />
          ))}
        </div>
        <aside className="space-y-6" aria-label="Mais notícias">
          {moreNews.length > 0 && (
            <section className="rounded-xl border border-border bg-surface px-5 pt-4">
              <h2 className="label-mono text-muted">Mais notícias</h2>
              <NewsList items={moreNews} columns={1} />
            </section>
          )}
          <AdSlot format="rectangle" />
        </aside>
      </Container>

      {/* Loja do Bitcoin + Cripto Indica */}
      {products.length > 0 && (
        <Container className="mt-16">
          <StorePromo />
          {indica.length > 0 && (
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {indica.map((a) => (
                <ArticleCard key={a.slug} article={a} variant="horizontal" />
              ))}
            </div>
          )}
        </Container>
      )}

      {/* Faixa final */}
      <section className="mt-16 bg-ink text-ink-foreground">
        <Container className="py-14">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="label-mono text-ink-foreground/60">{site.name}</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Tudo sobre Bitcoin, em português e sem enrolação
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-foreground/80 sm:text-lg">{site.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/categoria/iniciantes" className="inline-flex h-11 items-center rounded-lg bg-brand px-5 text-sm font-semibold text-brand-foreground transition hover:opacity-90">
                  Comece pelo guia de iniciantes
                </Link>
                <Link href="/historia" className="inline-flex h-11 items-center rounded-lg border border-white/40 px-5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/5">
                  Conheça a história do Bitcoin
                </Link>
              </div>
            </div>
            <dl className="grid grid-cols-3 gap-4 lg:col-span-4">
              <div className="border-l border-white/15 pl-4">
                <dt className="label-mono text-ink-foreground/60">Guias</dt>
                <dd className="mt-1 font-mono text-2xl font-semibold text-white">{articles.length}</dd>
              </div>
              <div className="border-l border-white/15 pl-4">
                <dt className="label-mono text-ink-foreground/60">Notícias</dt>
                <dd className="mt-1 font-mono text-2xl font-semibold text-white">{news.length}</dd>
              </div>
              <div className="border-l border-white/15 pl-4">
                <dt className="label-mono text-ink-foreground/60">Moedas ao vivo</dt>
                <dd className="mt-1 font-mono text-2xl font-semibold text-white">{market.length || 200}</dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(itemListJsonLd) }} />
    </>
  );
}

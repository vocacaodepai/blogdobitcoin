import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/listing/JsonLd";
import { listingMetadata } from "@/components/listing/metadata";
import { countLabel } from "@/components/listing/paginate";
import { categories, countByCategory, site, sortedArticles } from "@/lib/articles";
import { author } from "@/lib/author";
import { absoluteUrl, breadcrumbJsonLd } from "@/lib/seo";

const PERSON_ID = `${site.url}/autor/bruno-danello#person`;

export const metadata: Metadata = listingMetadata({
  title: author.name,
  description: author.bio,
  path: author.url,
  type: "profile",
});

export default function AutorPage() {
  const all = sortedArticles();
  const recent = all.slice(0, 12);
  const counts = countByCategory();

  const profile = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: absoluteUrl(author.url),
    name: author.name,
    inLanguage: "pt-BR",
    isPartOf: { "@id": `${site.url}/#website` },
    mainEntity: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: author.name,
      url: absoluteUrl(author.url),
      jobTitle: author.role,
      image: absoluteUrl(author.image),
      description: author.bio,
      email: author.email,
      worksFor: { "@id": `${site.url}/#organization` },
    },
  };

  return (
    <>
      <JsonLd data={profile} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: author.name, path: author.url },
        ])}
      />
      <Container className="py-10 sm:py-14">
        <header className="grid gap-6 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={author.image}
            alt={`Foto de ${author.name}`}
            width={160}
            height={160}
            fetchPriority="high"
            className="h-24 w-24 rounded-xl border border-border object-cover sm:h-40 sm:w-40"
          />
          <div className="max-w-3xl">
            <p className="label-mono text-accent">Autor</p>
            <h1 className="mt-2 font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              {author.name}
            </h1>
            <p className="mt-2 font-display text-base font-semibold text-muted sm:text-lg">{author.role}</p>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{author.bio}</p>
            <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted">
              <div className="flex gap-2">
                <dt>E-mail</dt>
                <dd>
                  <a href={`mailto:${author.email}`} className="text-accent hover:underline">
                    {author.email}
                  </a>
                </dd>
              </div>
              <div className="flex gap-2">
                <dt>Artigos</dt>
                <dd>{all.length}</dd>
              </div>
            </dl>
          </div>
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12">
          <div className="max-w-[68ch] space-y-12">
            <section aria-labelledby="papel">
              <p className="label-mono text-muted">O editor</p>
              <h2 id="papel" className="mt-1 font-display text-xl font-bold tracking-tight sm:text-2xl">
                O que ele faz no Blog do Bitcoin
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
                <p>
                  {author.name} é o editor do Blog do Bitcoin. Ele define a pauta, escolhe as fontes,
                  revisa os textos e responde por tudo o que é publicado: artigos, notícias, reviews
                  da{" "}
                  <Link href="/loja" className="text-accent hover:underline">
                    Loja do Bitcoin
                  </Link>{" "}
                  e os textos de apoio das{" "}
                  <Link href="/ferramentas" className="text-accent hover:underline">
                    ferramentas
                  </Link>
                  . Artigos e notícias saem com a assinatura dele. Também é o criador do projeto
                  Vocação de Pai.
                </p>
                <p>
                  O público é o leitor brasileiro. Quem nunca comprou cripto e quer entender o básico,
                  e quem já tem moedas e quer acompanhar o{" "}
                  <Link href="/bitcoin" className="text-accent hover:underline">
                    Bitcoin
                  </Link>
                  , o{" "}
                  <Link href="/mercado" className="text-accent hover:underline">
                    mercado em reais
                  </Link>
                  , a{" "}
                  <Link href="/historia" className="text-accent hover:underline">
                    história
                  </Link>{" "}
                  e as{" "}
                  <Link href="/categoria/brasil" className="text-accent hover:underline">
                    regras e impostos no Brasil
                  </Link>
                  .
                </p>
              </div>
            </section>

            <section aria-labelledby="como-escreve">
              <p className="label-mono text-muted">Linha editorial</p>
              <h2 id="como-escreve" className="mt-1 font-display text-xl font-bold tracking-tight sm:text-2xl">
                Como ele escreve sobre cripto
              </h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-relaxed text-muted">
                <li>
                  <strong className="text-foreground">Educação primeiro.</strong> O texto explica como as
                  coisas funcionam, do básico ao técnico, em português claro. Termo difícil ganha
                  explicação no próprio texto ou no{" "}
                  <Link href="/glossario" className="text-accent hover:underline">
                    glossário
                  </Link>
                  .
                </li>
                <li>
                  <strong className="text-foreground">Segurança sempre junto.</strong> Carteira, backup da
                  seed, golpes comuns e cuidados antes de comprar ou guardar cripto aparecem sempre que o
                  assunto pede. Há uma categoria só para isso:{" "}
                  <Link href="/categoria/seguranca" className="text-accent hover:underline">
                    Segurança e Golpes
                  </Link>
                  .
                </li>
                <li>
                  <strong className="text-foreground">Honestidade sobre o risco.</strong> Cripto oscila
                  muito e pode cair forte em pouco tempo. Ninguém sabe o preço de amanhã, e o texto diz
                  isso com todas as letras.
                </li>
                <li>
                  <strong className="text-foreground">Nunca recomendação de investimento.</strong> O blog
                  não diz o que comprar, quando comprar nem quanto investir. Previsão de preço nunca
                  aparece como fato. Os detalhes estão no{" "}
                  <Link href="/aviso-de-risco" className="text-accent hover:underline">
                    aviso de risco
                  </Link>
                  .
                </li>
                <li>
                  <strong className="text-foreground">Cotação é informativa.</strong> Os preços do site vêm
                  de APIs públicas (Binance, Mercado Bitcoin, CoinPaprika e outras) e servem para consulta.
                  Não são cotação oficial para operar.
                </li>
              </ul>
            </section>

            <section aria-labelledby="como-produzimos">
              <p className="label-mono text-muted">Transparência</p>
              <h2 id="como-produzimos" className="mt-1 font-display text-xl font-bold tracking-tight sm:text-2xl">
                Como o conteúdo é produzido
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
                <p>
                  Os textos do Blog do Bitcoin são produzidos com apoio de ferramentas de IA e de rotinas
                  automáticas. Elas ajudam a pesquisar, a organizar as informações e a montar o primeiro
                  rascunho. A pauta, as regras que as rotinas seguem, a conferência das fontes, a escolha
                  do que entra e do que fica de fora e a revisão são de {author.name}.
                </p>
                <p>
                  Toda fonte externa é aberta e conferida antes de entrar no texto. Número, data ou
                  citação sem fonte confiável fica de fora. Nos reviews da Loja do Bitcoin e da{" "}
                  <Link href="/categoria/cripto-indica" className="text-accent hover:underline">
                    Cripto Indica
                  </Link>
                  , a análise parte da ficha técnica, do manual e das opiniões reais de compradores. Não há
                  teste físico, e o texto deixa isso claro. Os links para a Amazon são de afiliado, como
                  explicado em{" "}
                  <Link href="/publicidade-e-afiliados" className="text-accent hover:underline">
                    publicidade e afiliados
                  </Link>
                  .
                </p>
              </div>
            </section>

            <section aria-labelledby="correcoes">
              <p className="label-mono text-muted">Contato</p>
              <h2 id="correcoes" className="mt-1 font-display text-xl font-bold tracking-tight sm:text-2xl">
                Correções e contato
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
                <p>
                  Erros acontecem. Se você encontrar um dado errado, um link
                  quebrado ou uma afirmação que não se sustenta, escreva para{" "}
                  <a href={`mailto:${author.email}`} className="text-accent hover:underline">
                    {author.email}
                  </a>{" "}
                  ou use o{" "}
                  <Link href="/contato" className="text-accent hover:underline">
                    formulário de contato
                  </Link>
                  . Erro confirmado é corrigido em até 5 dias úteis. Num artigo, a correção de fato
                  ganha a marcação &quot;Atualizado em&quot; com a nova data.
                </p>
                <p>
                  Os critérios completos, incluindo fontes, correções, reviews e links de afiliado, estão
                  na{" "}
                  <Link href="/politica-editorial" className="text-accent hover:underline">
                    política editorial
                  </Link>
                  .
                </p>
              </div>
            </section>
          </div>

          <aside aria-labelledby="cobertura" className="space-y-6 lg:sticky lg:top-20 lg:self-start">
            <section className="rounded-xl border border-border bg-surface p-5">
              <h2 id="cobertura" className="label-mono text-muted">
                O que ele cobre
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {categories.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/categoria/${c.slug}`}
                      className="inline-flex h-8 items-center gap-2 rounded-lg border border-border bg-background px-3 text-xs font-medium text-foreground transition hover:border-accent/50 hover:text-accent"
                    >
                      {c.label}
                      <span className="font-mono text-[11px] text-muted">{counts[c.slug]}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
            <nav aria-labelledby="sobre-o-site" className="rounded-xl border border-border bg-surface p-5">
              <h2 id="sobre-o-site" className="label-mono text-muted">
                Sobre o site
              </h2>
              <ul className="mt-3 space-y-1">
                {[
                  { href: "/sobre", label: "Sobre o Blog do Bitcoin" },
                  { href: "/politica-editorial", label: "Política editorial" },
                  { href: "/publicidade-e-afiliados", label: "Publicidade e afiliados" },
                  { href: "/aviso-de-risco", label: "Aviso de risco" },
                  { href: "/contato", label: "Contato" },
                ].map((i) => (
                  <li key={i.href}>
                    <Link
                      href={i.href}
                      className="block rounded-lg px-2 py-1.5 text-sm font-medium transition hover:bg-surface-2 hover:text-accent"
                    >
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>

        <section aria-labelledby="recentes" className="mt-14">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="label-mono text-accent">Publicações</p>
              <h2 id="recentes" className="mt-1 font-display text-xl font-bold tracking-tight sm:text-2xl">
                Artigos mais recentes
              </h2>
            </div>
            <Link href="/artigos" className="shrink-0 font-mono text-xs font-medium text-muted transition hover:text-accent">
              Ver todos os {countLabel(all.length, "artigo", "artigos")} →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recent.map((article) => (
              <ArticleCard key={article.slug} article={article} headingLevel="h3" />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/artigos"
              className="inline-flex h-10 items-center rounded-lg border border-border bg-surface px-5 font-mono text-xs font-medium transition hover:border-accent/50 hover:text-accent"
            >
              Ver todos os artigos →
            </Link>
          </div>
        </section>
      </Container>
    </>
  );
}

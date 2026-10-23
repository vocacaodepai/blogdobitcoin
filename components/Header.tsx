import Link from "next/link";
import { categories } from "@/lib/articles";
import { BtcPricePill } from "./live/BtcPricePill";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { SearchDialog } from "./SearchDialog";
import { MobileMenu } from "./MobileMenu";

export type NavItem = {
  href: string;
  label: string;
  description?: string;
  /** Submenu (ex.: Artigos -> categorias). */
  children?: NavItem[];
  /** Botão de destaque no menu (Loja do Bitcoin). */
  highlight?: boolean;
};

export const INSTITUTIONAL_NAV = [
  { href: "/sobre", label: "Sobre o Blog do Bitcoin" },
  { href: "/autor/bruno-danello", label: "Quem escreve" },
  { href: "/contato", label: "Contato" },
  { href: "/aviso-de-risco", label: "Aviso de risco" },
  { href: "/politica-editorial", label: "Política editorial" },
  { href: "/publicidade-e-afiliados", label: "Publicidade e afiliados" },
  { href: "/politica-de-privacidade", label: "Política de privacidade" },
  { href: "/termos-de-uso", label: "Termos de uso" },
];

export const BITCOIN_NAV: NavItem[] = [
  { href: "/bitcoin", label: "Preço do Bitcoin hoje", description: "Cotação ao vivo em real e dólar, gráfico, variação e rede." },
  { href: "/ferramentas/halving", label: "Halving do Bitcoin", description: "Contagem regressiva para o próximo halving, bloco a bloco." },
  { href: "/categoria/bitcoin", label: "Artigos sobre Bitcoin", description: "Como funciona, mineração, Lightning, satoshis e mais." },
  { href: "/historia", label: "História do Bitcoin", description: "Linha do tempo, fatos curiosos e as Memórias do Bitcoin." },
];

export const MERCADO_NAV: NavItem[] = [
  { href: "/mercado", label: "Ranking das criptomoedas", description: "As 100 maiores moedas em reais, atualizadas a cada minuto." },
  { href: "/mercado/bolhas", label: "Bolhas cripto", description: "Quem sobe e quem cai, em bolhas que mostram a variação." },
  { href: "/ferramentas/medo-e-ganancia", label: "Medo e ganância", description: "O humor do mercado hoje, de 0 a 100." },
  { href: "/categoria/mercado", label: "Mercado e investimento", description: "Ciclos, ETFs, DCA e como ler o mercado com calma." },
];

export const TOOLS_NAV: NavItem[] = [
  { href: "/ferramentas/conversor", label: "Conversor de bitcoin", description: "BTC, satoshis, real e dólar com a cotação ao vivo." },
  { href: "/ferramentas/calculadora-dca", label: "Calculadora DCA", description: "Simule um aporte mensal em bitcoin desde 2010." },
  { href: "/ferramentas/se-eu-tivesse-investido", label: "Se eu tivesse investido", description: "Quanto valeria hoje um valor aplicado no passado." },
  { href: "/ferramentas/halving", label: "Contagem do halving", description: "Blocos que faltam e data estimada do próximo halving." },
  { href: "/glossario", label: "Glossário cripto", description: "Os termos do mundo cripto explicados em uma frase." },
  { href: "/ferramentas", label: "Todas as ferramentas", description: "Tudo o que dá para calcular e acompanhar no site." },
];

export function Header() {
  const articleItems: NavItem[] = [
    { href: "/artigos", label: "Todos os artigos", description: "Tudo o que publicamos, por categoria." },
    ...categories.map((c) => ({ href: `/categoria/${c.slug}`, label: c.label, description: c.description })),
  ];

  const primary: NavItem[] = [
    { href: "/bitcoin", label: "Bitcoin", children: BITCOIN_NAV },
    { href: "/mercado", label: "Mercado", children: MERCADO_NAV },
    { href: "/noticias", label: "Notícias" },
    { href: "/artigos", label: "Artigos", children: articleItems },
    { href: "/historia", label: "História" },
    { href: "/ferramentas", label: "Ferramentas", children: TOOLS_NAV },
    { href: "/loja", label: "Loja do Bitcoin", highlight: true },
  ];

  const linkClass =
    "whitespace-nowrap rounded-lg px-2.5 py-2 text-sm font-medium text-muted transition hover:bg-surface-2 hover:text-foreground";

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-surface/85 backdrop-blur-md supports-[backdrop-filter]:bg-surface/75">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
        <Logo priority className="mr-1" />

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Principal">
          {primary.map((i) =>
            i.children ? (
              <div key={i.href} className="group relative">
                <button
                  type="button"
                  aria-haspopup="true"
                  className="inline-flex items-center gap-1 whitespace-nowrap rounded-lg px-2.5 py-2 text-sm font-medium text-muted transition hover:bg-surface-2 hover:text-foreground group-focus-within:text-foreground"
                >
                  {i.label}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div className="invisible absolute left-0 top-full z-50 w-[540px] translate-y-1 pt-2 opacity-0 transition group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="grid grid-cols-2 gap-1 rounded-xl border border-border bg-surface p-2 shadow-xl">
                    {i.children.map((c) => (
                      <Link key={c.href} href={c.href} prefetch={false} className="rounded-lg px-3 py-2.5 transition hover:bg-surface-2">
                        <span className="block text-sm font-semibold">{c.label}</span>
                        <span className="mt-0.5 line-clamp-2 block text-xs leading-snug text-muted">{c.description}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : i.highlight ? (
              <Link
                key={i.href}
                href={i.href}
                className="mx-1 inline-flex h-9 items-center whitespace-nowrap rounded-lg bg-brand px-3.5 text-sm font-semibold text-brand-foreground shadow-sm ring-1 ring-brand/40 transition hover:opacity-90"
              >
                {i.label}
              </Link>
            ) : (
              <Link key={i.href} href={i.href} className={linkClass}>
                {i.label}
              </Link>
            ),
          )}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <span className="hidden sm:inline-flex">
            <BtcPricePill />
          </span>
          <SearchDialog />
          <span className="hidden xl:inline-flex">
            <ThemeToggle />
          </span>
          <MobileMenu primary={primary} institutional={INSTITUTIONAL_NAV} />
        </div>
      </div>
    </header>
  );
}

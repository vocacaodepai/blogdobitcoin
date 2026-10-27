/**
 * Tipos compartilhados do conteúdo editorial do Blog do Bitcoin.
 * Artigos em content/articles/<slug>.ts, notícias em content/news/<slug>.ts e
 * produtos da loja em content/products/<slug>.ts (um arquivo por item), reunidos
 * pelos índices gerados por scripts/build-content-index.mjs.
 */
export type FaqItem = { question: string; answer: string };

export type QuizQuestion = {
  question: string;
  options: string[];
  answer: number; // índice da opção correta
  explanation: string;
};

export const categories = [
  {
    slug: "bitcoin",
    label: "Bitcoin",
    description:
      "Tudo sobre o Bitcoin: como funciona, halving, mineração, Lightning, satoshis e por que ele é diferente de qualquer outra moeda.",
  },
  {
    slug: "iniciantes",
    label: "Para Iniciantes",
    description:
      "Primeiros passos em criptomoedas sem jargão: o que é, como comprar com segurança, onde guardar e os erros que mais custam caro.",
  },
  {
    slug: "mercado",
    label: "Mercado e Investimento",
    description:
      "Ciclos, ETFs, DCA, volatilidade e como ler o mercado cripto com calma. Conteúdo educativo, nunca recomendação de investimento.",
  },
  {
    slug: "altcoins",
    label: "Altcoins e Blockchain",
    description:
      "Ethereum, Solana, stablecoins, DeFi e o resto do ecossistema cripto explicados em português claro, com prós, contras e riscos.",
  },
  {
    slug: "seguranca",
    label: "Segurança e Golpes",
    description:
      "Autocustódia, seed phrase, carteiras de hardware e os golpes com cripto mais comuns no Brasil, com o passo a passo para se proteger.",
  },
  {
    slug: "brasil",
    label: "Regulação e Impostos",
    description:
      "Cripto no Brasil: Imposto de Renda, Receita Federal, Banco Central, exchanges brasileiras e o que muda na lei para quem investe.",
  },
  {
    slug: "historia",
    label: "Memórias do Bitcoin",
    description:
      "A história do Bitcoin contada como ela aconteceu: Satoshi, o bloco gênese, a pizza de 10 mil bitcoins, Mt. Gox e os fatos mais curiosos.",
  },
  {
    slug: "cripto-indica",
    label: "Cripto Indica",
    description:
      "Reviews e comparativos de produtos do mundo cripto (carteiras de hardware, livros, camisetas e acessórios), com nota por critério e link de compra.",
  },
] as const;

export type Category = (typeof categories)[number]["slug"];

/** Dados estruturados de um review (artigos com kind: "review"). */
export type ReviewData = {
  /** Nome do produto avaliado. */
  tool: string;
  /** Nota final de 0 a 10, com uma casa decimal. */
  score: number;
  /** Critérios avaliados, cada um com nota de 0 a 10. */
  criteria: { label: string; score: number }[];
  pros: string[];
  cons: string[];
  /** Faixa de mercado em texto, ex.: "R$ 700 a R$ 900". */
  price: string;
  /** Para quem o produto é ideal, em uma frase. */
  bestFor: string;
  /** Link de compra (afiliado Amazon) ou site oficial (https). */
  url: string;
  /** Se há links de afiliado no artigo (exibe o aviso). Padrão: false. */
  affiliate?: boolean;
  /** Texto do botão principal. Padrão: "Comprar agora na Amazon". */
  ctaLabel?: string;
};

export type Article = {
  slug: string;
  title: string;
  /** Título curto para a tag <title> (até ~60 caracteres). Padrão: title. */
  seoTitle?: string;
  excerpt: string;
  /** Meta description (120-160 caracteres). Padrão: excerpt. */
  metaDescription?: string;
  category: Category;
  /** Nota editorial 0-10 do produto recomendado (só cripto-indica comparativo). */
  productScore?: number;
  /** Produtos da loja citados no artigo (slugs de content/products), mostrados em cards no fim. */
  products?: string[];
  /** Ano principal do fato (só Memórias do Bitcoin), usado na linha do tempo de /historia. */
  historyYear?: number;
  date: string; // ISO (AAAA-MM-DD)
  /** Data da última atualização editorial (AAAA-MM-DD). */
  updated?: string;
  /** Minutos de leitura declarados; o site recalcula pelo texto (ver readingTime). */
  readTime: number;
  imageQuery: string;
  seed: number;
  /** Foto real (self-hosted em /public/images), usada no lugar do banco de imagens. */
  coverImage?: { url: string; width: number; height: number; credit: string; creditUrl: string };
  content: string; // HTML
  /** Tipo do artigo. Padrão: "guia". */
  kind?: "guia" | "review";
  /** Voz autoral do blog. Padrão: Bruno Danello. */
  author?: string;
  /** Resumo em 3 pontos exibido logo após a capa. */
  keyPoints?: string[];
  /** Dados do review (só para kind: "review"). */
  review?: ReviewData;
  /** Perguntas frequentes exibidas em acordeão ao fim do artigo. */
  faq?: FaqItem[];
  /** Quiz curto pra fixar o aprendizado, exibido ao fim do artigo. */
  quiz?: QuizQuestion[];
};

export type NewsFaqItem = FaqItem;
export type NewsQuizQuestion = QuizQuestion;

/** Tópicos de notícia, usados só pelo filtro em /noticias. */
export const newsTopics = [
  { slug: "bitcoin", label: "Bitcoin" },
  { slug: "mercado", label: "Mercado" },
  { slug: "altcoins", label: "Altcoins" },
  { slug: "regulacao", label: "Regulação" },
  { slug: "seguranca", label: "Segurança" },
  { slug: "adocao", label: "Adoção e empresas" },
] as const;

export type NewsTopic = (typeof newsTopics)[number]["slug"];

export type NewsItem = {
  slug: string;
  title: string;
  /** Resumo curto (também vira meta description, cortada em ~158 caracteres). */
  summary: string;
  author: string;
  sourceName: string;
  sourceUrl: string;
  date: string; // ISO (AAAA-MM-DD)
  /** Horário exato de publicação (ISO 8601 com offset de Brasília). */
  publishedAt?: string;
  /** Texto completo da notícia (HTML). */
  content?: string;
  /** Texto livre descrevendo a foto da capa (cascata Wikimedia primeiro). */
  imageQuery?: string;
  /** Tópico usado pelo filtro em /noticias. */
  topic?: NewsTopic;
  faq?: NewsFaqItem[];
  quiz?: NewsQuizQuestion[];
};

/** Categorias da Loja do Bitcoin (filtro em /loja). */
export const productCategories = [
  {
    slug: "hardware-wallets",
    label: "Carteiras de hardware",
    description: "Dispositivos para guardar suas chaves privadas fora da internet (autocustódia).",
  },
  {
    slug: "backup-seed",
    label: "Backup da seed",
    description: "Placas e cápsulas de metal para guardar as 12 ou 24 palavras contra fogo e água.",
  },
  {
    slug: "livros",
    label: "Livros",
    description: "Os livros sobre Bitcoin, economia e cripto que valem a leitura, em português.",
  },
  {
    slug: "vestuario",
    label: "Camisetas e vestuário",
    description: "Camisetas, moletons e bonés para vestir a camisa do Bitcoin.",
  },
  {
    slug: "colecionaveis",
    label: "Colecionáveis e presentes",
    description: "Moedas físicas comemorativas, canecas e objetos para quem é fã de Bitcoin.",
  },
] as const;

export type ProductCategory = (typeof productCategories)[number]["slug"];

/** Uma seção do texto da review longa da loja. */
export type ProductReviewSection = {
  title: string;
  paragraphs: string[];
  /** Mostra o botão de compra da loja do produto ("Comprar agora na Amazon" ou na Shopee) depois desta seção. */
  cta?: boolean;
};

/** Review longa do produto, renderizada na página /loja/<slug>. */
export type ProductReview = {
  title: string;
  summary: string;
  /** Nota final 0-10 (uma casa decimal). */
  score: number;
  criteria: { label: string; score: number }[];
  idealFor: string;
  /** "Em 3 pontos". */
  keyPoints: string[];
  sections: ProductReviewSection[];
  /** Texto curto antes da faixa de preço (o que faz o preço variar). */
  priceText?: string;
  /** Ficha técnica resumida, uma linha por item ("Conexão: USB-C e Bluetooth"). */
  specs: string[];
  /** Padrões que se repetem em opiniões fora da loja de venda (sem números inventados). */
  othersSay?: string[];
  howWeEvaluated: string;
  opinion: string;
  faq: FaqItem[];
};

/** Lojas parceiras (afiliado) onde os produtos da Loja do Bitcoin são vendidos. */
export const productStores = [
  { slug: "amazon", label: "Amazon", ctaLabel: "Comprar agora na Amazon" },
  { slug: "shopee", label: "Shopee", ctaLabel: "Comprar agora na Shopee" },
] as const;

export type ProductStore = (typeof productStores)[number]["slug"];

/** Anúncio do produto na Shopee Brasil (programa de Afiliados da Shopee). */
export type ShopeeListing = {
  /** itemId do anúncio (API de afiliados). */
  itemId: number;
  /** shopId do vendedor (API de afiliados). */
  shopId: number;
  /** Link curto de afiliado (https://s.shopee.com.br/...), gerado por scripts/shopee.mjs link. */
  affiliateUrl: string;
  /** Nome do vendedor no anúncio, para a página citar de quem se compra. */
  sellerName: string;
};

export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: ProductCategory;
  /** Loja onde o produto é vendido e de onde vem o link de afiliado. Padrão: "amazon". */
  store?: ProductStore;
  /** ASIN real da Amazon Brasil (10 caracteres). Obrigatório quando a loja é a Amazon. */
  asin?: string;
  /** Anúncio na Shopee. Obrigatório quando a loja é a Shopee. */
  shopee?: ShopeeListing;
  /** Selo curto no card ("Mais vendido", "Escolha do editor"). */
  badge?: string;
  /** Uma ou duas frases para o card. */
  shortDescription: string;
  /** Foto oficial do produto (self-hosted em /public/images/products ou https). */
  image: { url: string; width: number; height: number; alt: string };
  /**
   * Faixa de preço arredondada. Amazon: pesquisada na internet, em pelo menos 2 lojas (não é o
   * preço da Amazon). Shopee: a faixa do anúncio na data de priceCheckedAt (preço, cupom e frete mudam).
   */
  priceMin?: number;
  priceMax?: number;
  /** AAAA-MM-DD da pesquisa de faixa de preço. */
  priceCheckedAt?: string;
  pros: string[];
  cons: string[];
  /** Destaque na vitrine da home e no topo da loja. */
  featured?: boolean;
  /** Ordem manual dentro da categoria (menor primeiro). */
  sortOrder?: number;
  /** Data de entrada na loja (AAAA-MM-DD). */
  date: string;
  /** Artigos relacionados (slugs de content/articles), linkados na página do produto. */
  relatedArticles?: string[];
  review?: ProductReview;
};

/** Ficha editorial de uma criptomoeda (páginas /moedas/<slug>). */
export type CoinProfile = {
  /** Slug da URL (ex.: "ethereum"). */
  slug: string;
  /** ID na CoinPaprika (ex.: "eth-ethereum"), usado para buscar cotação e ranking. */
  paprikaId: string;
  name: string;
  symbol: string;
  /** Ano de lançamento. */
  launched: number;
  /** Quem criou ou lançou. */
  creator: string;
  /** Mecanismo de consenso em texto ("Prova de trabalho", "Prova de participação"). */
  consensus: string;
  /** Oferta máxima em texto ("21 milhões", "Sem limite fixo"). */
  maxSupply: string;
  /** Parágrafos de descrição (texto puro). */
  description: string[];
  /** Para que serve, em itens curtos. */
  useCases: string[];
  /** Riscos e pontos de atenção, em itens curtos. */
  risks: string[];
  /** Site oficial (https). */
  website?: string;
  /** Artigos relacionados (slugs). */
  relatedArticles?: string[];
};

/** Verbete do glossário (/glossario#slug). */
export type GlossaryTerm = {
  /** Âncora da URL (/glossario#slug), sem acentos. */
  slug: string;
  term: string;
  /** Definição em 1 a 3 frases, texto puro. */
  definition: string;
  /** Links internos relacionados (ex.: "/artigos/slug", "/ferramentas/halving"). */
  related?: { label: string; href: string }[];
};

/** Marco da linha do tempo em /historia. */
export type TimelineEvent = {
  /** "AAAA-MM-DD" ou "AAAA-MM" (quando o dia exato não importa). */
  date: string;
  title: string;
  /** 2 a 4 frases, texto puro. */
  text: string;
  /** Preço aproximado da época, em texto ("cerca de US$ 0,0025"). */
  priceNote?: string;
  /** Artigo de Memórias do Bitcoin que conta a história completa. */
  article?: string;
  /** Fonte primária ou de referência. */
  source?: { label: string; url: string };
};

/** Fato curioso em /historia. */
export type Curiosity = {
  title: string;
  /** 2 a 3 frases, texto puro. */
  text: string;
  article?: string;
  source?: { label: string; url: string };
};

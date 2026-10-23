# Padrão editorial do Blog do Bitcoin

Vale para todo artigo (`content/articles/<slug>.ts`), notícia (`content/news/<slug>.ts`)
e produto da loja (`content/products/<slug>.ts`), novo ou reformado. O script
`npm run check:content` confere a parte mecânica; o resto é responsabilidade de quem escreve.

## 0. O que o Blog do Bitcoin é (e o que não é)

- Um hub em português sobre Bitcoin e criptomoedas para o leitor brasileiro: o que é,
  como funciona, como comprar e guardar com segurança, o que está acontecendo no
  mercado, o que a lei e a Receita exigem, e a história (Memórias do Bitcoin).
- O Bitcoin tem destaque e seção própria (`/bitcoin`), mas o blog cobre todo o mercado
  cripto (altcoins, stablecoins, regulação, segurança).
- **Nunca é recomendação de investimento.** Nada de "compre agora", "vai a R$ 1 milhão",
  "renda garantida", sinal de trade ou previsão de preço apresentada como fato. Cripto é
  volátil e o leitor pode perder dinheiro; quando o tema envolve investir, isso é dito
  com clareza (a página `/aviso-de-risco` existe para ser linkada).
- Educação e honestidade acima de clique: o leitor iniciante não pode sair de um texto
  nosso mais exposto a golpe do que entrou.

## 1. Voz

- Assinatura: Bruno Danello. Tom de amigo experiente explicando com calma: frases curtas,
  português do Brasil natural, todo jargão explicado na primeira vez que aparece
  (ou linkado para `/glossario#termo`).
- Concreto sempre: valores em R$, exemplos com números, nome da exchange, da carteira,
  do órgão (Receita Federal, Banco Central, CVM), o que fazer passo a passo.
- Honestidade:
  - Nenhuma estatística ou número sem fonte citada (link na mesma frase ou parágrafo).
  - **Cotação do dia nunca entra fixa no texto** (envelhece em horas). Escreva
    "veja a cotação ao vivo em <a href="/bitcoin">preço do Bitcoin hoje</a>". Preço
    histórico pode, sempre com a data ("em dezembro de 2017, perto de US$ 19 mil").
  - Nenhuma alegação de teste pessoal que não aconteceu. Análise se apresenta como análise.
  - Nenhuma URL inventada. Todo link externo é aberto e conferido antes de publicar.

## 2. Proibições de estilo

- Travessão (—) nunca (o script barra). Use dois-pontos, vírgula, parênteses ou ponto.
- "Claro!", "Em resumo", "É importante ressaltar", "Vale destacar", "Nesse sentido",
  "Dito isso", "Espero ter ajudado", "No mundo cada vez mais digital".
- "Não é apenas X, é Y". Adjetivos vazios: incrível, revolucionário, poderoso, essencial.
- "Como já discutimos em", "clique aqui". O link entra na frase de forma natural.
- Parágrafos com mais de 4 frases. Seções com um parágrafo só.
- Nunca citar Claude, Anthropic, "gerado por IA" ou modelo de linguagem como autor.

## 3. Estrutura do arquivo de artigo

```ts
import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "keyword-principal-3-a-7-palavras",
  title: "Título com a keyword no início (50 a 65 caracteres)",
  seoTitle: "Versão curta para o Google (até 60 caracteres)",
  excerpt: "Resumo com a keyword e um verbo de ação (140 a 158 caracteres).",
  metaDescription: "Variação do excerpt (140 a 158 caracteres).",
  category: "bitcoin", // bitcoin | iniciantes | mercado | altcoins | seguranca | brasil | historia | cripto-indica
  date: "AAAA-MM-DD", // hoje em America/Sao_Paulo (nunca futura)
  readTime: 7, // Math.max(1, Math.round(palavras / 200))
  imageQuery: "bitcoin coin close up", // 3 ou 4 palavras concretas em inglês
  seed: 12, // inteiro sequencial, maior que todos os existentes
  kind: "guia", // ou "review" (aí o campo review é obrigatório)
  author: "Bruno Danello",
  keyPoints: ["Frase 1", "Frase 2", "Frase 3"],
  content: `...HTML...`,
  faq: [{ question: "Pergunta como a pessoa digita no Google?", answer: "40 a 80 palavras." }],
  quiz: [{ question: "...", options: ["a", "b", "c"], answer: 1, explanation: "..." }], // opcional
};
```

- Memórias do Bitcoin (`category: "historia"`) levam também `historyYear` (ano do fato).
- Cripto Indica leva `products: ["slug-do-produto"]` (produtos da loja citados) e
  `productScore` (comparativo) ou `review` (review único).
- `content` é template literal: nada de crase, barra invertida nem `${}` dentro.
- Tags permitidas: p, h2, h3, h4, ul, ol, li, a, strong, em, b, i, br, hr, blockquote,
  code, pre, table, thead, tbody, tr, th, td, div, span, img, figure, figcaption, small,
  mark, sup, sub, dl, dt, dd, cite, abbr, kbd. Atributos sempre com aspas duplas.
  Nada de `style=`, `<script>`, `<iframe>`, `<svg>`, handlers `on*=`.
- Caixas: `<div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>...</p></div>`
  com `callout-ok` (positivo), `callout-warn` (atenção), `callout-bad` (nunca faça),
  `callout-tip` (dica), `callout-fact` (Fato curioso, usado nas Memórias). Máximo 3.
- Checklist: `<ul class="checklist"><li>...</li></ul>`.

## 4. Estrutura do corpo do artigo

1. Abertura de 2 parágrafos sem título. O primeiro (40 a 60 palavras) responde direto a
   busca e contém a keyword exata.
2. 5 a 8 seções `<h2>` (150 a 250 palavras cada), `<h3>` em seções longas.
3. Pelo menos um destes: tabela (`<table>` com `<thead>`), checklist ou passo a passo.
4. Exemplo brasileiro com números (R$, exchange, prazo).
5. Uma seção de "Erros comuns", "Riscos" ou "Cuidados".
6. Fechamento: um parágrafo com CTA para uma ferramenta do site ou artigo pilar.

Tamanho: 1.100 a 1.700 palavras de texto real (mínimo 900, o script barra).

### Memórias do Bitcoin (história)

- Conte como reportagem: cena, personagens reais, data, o que aconteceu depois e por
  que importa hoje. Sem lenda tratada como fato: o que é especulação aparece como tal
  ("a teoria mais aceita", "nunca foi confirmado").
- Um `callout-fact` com o fato curioso principal.
- Fontes primárias sempre que existirem (post original no BitcoinTalk, whitepaper em
  bitcoin.org, e-mail da lista de criptografia, matéria de época).

## 5. Links

- **Internos: 8 a 14 distintos** (o script exige 8), espalhados pelo corpo, só para o que
  existe: `/artigos/<slug>`, `/noticias/<slug>` e as páginas do site:
  `/bitcoin`, `/mercado`, `/mercado/bolhas`, `/moedas/<slug>`, `/ferramentas`,
  `/ferramentas/conversor`, `/ferramentas/calculadora-dca`,
  `/ferramentas/se-eu-tivesse-investido`, `/ferramentas/halving`,
  `/ferramentas/medo-e-ganancia`, `/historia`, `/glossario`, `/loja`,
  `/loja/<slug>`, `/aviso-de-risco`. Âncora natural, nunca a mesma URL duas vezes.
- **Externos: 1 a 4** para fontes primárias (bitcoin.org, gov.br/receitafederal, bcb.gov.br,
  cvm.gov.br, sec.gov, documentação oficial do projeto, Reuters, Bloomberg, CoinDesk,
  Folha, Valor), sempre `https` e com `rel="noopener noreferrer"`.

## 6. SEO on-page

- 1 keyword principal + 2 ou 3 secundárias. Keyword no título, slug, primeiro
  parágrafo, um h2 e excerpt.
- Varie o formato do título: "X: guia completo", "O que é X e como funciona",
  "X vale a pena?", "X ou Y: diferenças", "Como fazer X passo a passo", "N fatos sobre X".
- `faq` com 4 a 6 perguntas no formato de busca real, respostas de 40 a 80 palavras.
- `keyPoints`: 3 frases completas ("Em 3 pontos").

## 7. Notícias (`content/news/<slug>.ts`)

- Fato verificável, com `sourceName` e `sourceUrl` reais (abertos e conferidos).
  Nunca boato, nunca "fontes dizem" sem fonte.
- `publishedAt` com a hora real de Brasília, `topic` (bitcoin, mercado, altcoins,
  regulacao, seguranca, adocao), `imageQuery` específico.
- Mínimo 900 palavras e 3 `<h2>`: o fato em 2 parágrafos, contexto, "O que isso muda
  para quem tem cripto no Brasil", desdobramentos. 3 a 6 links internos.
- A listagem mostra "via Blog do Bitcoin"; o crédito da fonte original fica no texto e na
  caixa "Fonte original".
- Notícias nunca são apagadas.

## 8. Cripto Indica e Loja do Bitcoin

- Só produto real vendido na Amazon Brasil, com ASIN conferido. Nunca inventar produto,
  ASIN, preço ou especificação. Nunca alegar teste físico: é análise da ficha técnica
  oficial, do manual e de opiniões reais de compradores.
- Link de afiliado: `https://www.amazon.com.br/dp/<ASIN>?tag=blogdobitcoin-20`, com
  `rel="sponsored noopener noreferrer"` e `target="_blank"`.
- Botão: `<div class="buy-btn"><a href="..." rel="sponsored noopener noreferrer" target="_blank">Comprar agora na Amazon ↗</a></div>`.
  Texto sempre igual (sem nome de produto e sem preço). Mínimo 5 por artigo de
  Cripto Indica, nunca mais de ~3 parágrafos longos sem botão.
- **Preço nunca exato.** Seção "Variação de preço" com a faixa de mercado ("costuma
  variar de R$ X a R$ Y", faixa larga e arredondada), consultada na internet como um
  todo (lojas, comparadores, site do fabricante), não só na Amazon. Nunca preço no
  título, excerpt, meta description ou botão.
- Todo produto citado num artigo de Cripto Indica existe na loja (`content/products/`)
  com review longa própria (texto diferente do artigo, para as duas páginas não
  competirem no Google), e o artigo linka `/loja/<slug>`.
- Carteira de hardware: sempre lembrar de comprar de vendedor oficial/autorizado e nunca
  aceitar aparelho com seed já preenchida (golpe conhecido).
- O aviso de transparência (afiliado e independência) aparece sozinho na página de todo
  artigo de Cripto Indica, review ou comparativo. Não escreva esse aviso no `content`.

## 9. Imagens

- Capa por `imageQuery` (cascata: Wikimedia Commons, depois Pexels/Pixabay, depois capa
  ilustrada). Pessoa ou empresa real: foto real licenciada do Wikimedia, nunca banco de
  imagem genérico.
- Confira toda capa nova com `npm run check:covers -- <slug>`. A busca do Commons é solta
  (já trouxe Javier Solana para "Solana logo" e o banco central da Argentina para "Banco
  Central do Brasil building"). Foto errada: fixe um arquivo conferido com
  `imageQuery: "File:Nome exato do arquivo.jpg"` (página do arquivo aberta, licença CC ou
  domínio público, nunca imagem gerada por IA). Sem foto certa, a capa ilustrada.
- Imagem no corpo só de `upload.wikimedia.org` (URL retornada pela API, licença
  conferida, `<figcaption>Foto: autor / Wikimedia Commons (licença)</figcaption>`),
  Pexels, Pixabay ou arquivo próprio em `/images/...`.
- Produto: foto oficial (galeria oficial do anúncio ou site do fabricante), salva em
  `public/images/products/`. Nunca imagem gerada por IA para produto.

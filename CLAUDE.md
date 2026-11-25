# Blog do Bitcoin

Hub brasileiro sobre Bitcoin e criptomoedas (www.blogdobitcoin.com.br), editado por
Bruno Danello. O Bitcoin tem seção e destaque próprios (`/bitcoin`, com preço ao vivo),
mas o site cobre todo o mercado cripto: notícias diárias, artigos educativos, ranking das
moedas em reais, bolhas de variação, ferramentas (conversor, DCA, "se eu tivesse
investido", halving, medo e ganância), glossário, história (Memórias do Bitcoin) e a
Loja do Bitcoin (vitrine de afiliado Amazon e Shopee com review longa de cada produto).

A base de código veio do Portal da AI (mesma stack e mesmo estilo de rotina), adaptada.
Só este arquivo vale para este repositório: regras de outros projetos do dono (Portal da
AI, Vocação de Mãe) não se aplicam aqui, a não ser quando repetidas abaixo.

Padrão editorial completo: `docs/padrao-editorial.md` (vale para todo conteúdo).
Rotinas automáticas: `docs/rotinas/*.md`.

## Stack

- Next.js 16 (App Router, TypeScript estrito, React 19), Tailwind CSS 4 com tokens em
  `app/globals.css` (tema claro/escuro, laranja Bitcoin `--brand`).
- Conteúdo em arquivos TypeScript, um arquivo por item, índices gerados (nunca edite os
  `index.ts` à mão):
  - `content/articles/<slug>.ts` (`export const article: Article`)
  - `content/news/<slug>.ts` (`export const item: NewsItem`)
  - `content/products/<slug>.ts` (`export const product: Product`, Loja do Bitcoin; Amazon ou Shopee)
  - `content/coins.ts` (fichas das moedas de `/moedas/<slug>`), `content/glossario.ts`,
    `content/historia.ts` (linha do tempo e curiosidades de `/historia`)
- Tipos em `lib/types.ts`. Consultas em `lib/articles.ts`, `lib/news.ts`, `lib/products.ts`.
- Dados de mercado ao vivo em `lib/market/` (sem chave de API):
  - Binance (`data-api.binance.vision`): preço do Bitcoin e pares em real a cada 10 s,
    velas para gráfico.
  - Mercado Bitcoin + Kraken e Coinbase: fontes reserva da cotação.
  - CoinPaprika: ranking das 200 maiores moedas em reais, dados globais.
  - CoinGecko (só no navegador, a API bloqueia o servidor): variação de 30 dias e 1 ano
    do ranking e das bolhas.
  - mempool.space: altura do bloco, halving, taxas, dificuldade.
  - alternative.me: índice de medo e ganância.
  - `public/data/btc-historico.json`: fechamento mensal BTC/USD (blockchain.com) e
    dólar PTAX (Banco Central), gerado por `npm run data:historico`.
  - No servidor as páginas buscam com cache (`next.revalidate`) para o HTML já sair com
    os números (SEO); no navegador os componentes atualizam sozinhos (`usePolling`).

## Categorias de artigo

`bitcoin`, `iniciantes`, `mercado`, `altcoins`, `seguranca`, `brasil` (Regulação e
Impostos), `historia` (Memórias do Bitcoin, exige `historyYear`) e `cripto-indica`
(reviews e comparativos de produto com link de compra; exige `products` e
`productScore` ou `review`).

Tópicos de notícia: `bitcoin`, `mercado`, `altcoins`, `regulacao`, `seguranca`, `adocao`.

## Regras que não podem ser quebradas

- **Nunca recomendação de investimento** nem previsão de preço como fato. Cotação do dia
  nunca fixa em artigo (link para `/bitcoin` ou `/moedas/<slug>`).
- **Nunca inventar** fato, número, citação, URL, produto, ASIN, preço ou especificação.
  Toda fonte externa é aberta e conferida antes de entrar.
- Travessão (—) proibido em todo texto (o `check-content` barra).
- Nunca citar Claude, Anthropic ou "gerado por IA" como autor do conteúdo.
- **Credencial da Shopee (App ID e Secret) nunca entra no repositório**, em diff, commit, PR,
  comentário, log ou texto de conteúdo: só variável de ambiente (`SHOPEE_APP_ID`,
  `SHOPEE_SECRET`) ou `~/.config/blogdobitcoin/shopee.env` (fora do repo). O `check:content` barra.

## Loja do Bitcoin e Cripto Indica (afiliado Amazon)

- Tag de afiliado: `blogdobitcoin-20` (constante `site.amazonTag` em `lib/articles.ts`).
  Link: `https://www.amazon.com.br/dp/<ASIN>?tag=blogdobitcoin-20`, sempre com
  `rel="sponsored noopener noreferrer"` e `target="_blank"`.
- Botão no corpo dos artigos: `<div class="buy-btn"><a ...>Comprar agora na Amazon ↗</a></div>`,
  texto sempre igual, mínimo 5 por artigo de Cripto Indica. Na loja o botão é gerado pelo
  componente (`ProductBuyButton`).
- Todo produto citado num artigo de Cripto Indica existe em `content/products/` com
  review longa própria (texto diferente do artigo) e o artigo linka `/loja/<slug>`.
- Preço nunca exato: `priceMin`/`priceMax` com faixa de mercado pesquisada em pelo menos
  2 lojas (mesma marca, modelo e edição), arredondada; descartar se max > 3 x min. As
  páginas deixam claro que a faixa vem da internet como um todo, não é o preço da Amazon.
- ASIN conferido com `python3 scripts/amz.py <ASIN>` (página mobile da Amazon; bloqueia às
  vezes, repetir com pausa) ou, se bloquear, em 2 resultados de busca independentes.
- Foto do produto: oficial (galeria do anúncio em `_AC_SL1500_` ou site do fabricante),
  baixada em `public/images/products/<slug>.jpg`, HTTP 200 e mais de 15 KB, nunca imagem
  gerada por IA.
- Carteira de hardware: sempre lembrar de comprar de vendedor oficial/autorizado e nunca
  aceitar aparelho com seed já preenchida.
- Análise é feita a partir de ficha técnica, manual e opiniões reais de compradores; nunca
  alegar teste físico.
- Aviso de transparência: a página do artigo mostra sozinha a caixa "Transparência"
  (`ReviewDisclosure`) em todo artigo de Cripto Indica, review ou comparativo. Não repita
  esse aviso no `content`.

## Loja do Bitcoin na Shopee (afiliado Shopee)

Além da Amazon, a loja vende (por afiliado) produtos da Shopee Brasil. Rotina própria:
`docs/rotinas/shopee.md`, com a mesma cota diária da Amazon (2 produtos novos com review longa,
1 artigo de Cripto Indica, faixa de preço de até 5 produtos antigos), cada rotina só mexe nos
produtos da própria loja.

- Produto da Shopee: `store: "shopee"` e `shopee: { itemId, shopId, affiliateUrl, sellerName }`,
  sem `asin`. Link de compra = link curto de afiliado `https://s.shopee.com.br/...` gerado por
  `node scripts/shopee.mjs link <productLink> --sub loja,<slug>`. Link comum `shopee.com.br` não vale.
- `scripts/shopee.mjs` fala com a API Open de Afiliados da Shopee (busca, item, link curto, foto
  do anúncio). Todo dado de produto da Shopee vem dele; nunca invente produto, preço ou link.
- Botão sempre "Comprar agora na Shopee ↗" (mínimo 5 por artigo), `rel="sponsored noopener
  noreferrer"`, `target="_blank"`. Uma loja por artigo (não misture Amazon e Shopee).
- Marketplace de vendedores independentes: só anúncio com nota 4,5 ou mais e pelo menos 20 vendas,
  nunca carteira de hardware pela Shopee (só Amazon, de vendedor oficial), nada que prometa lucro,
  nada de produto genérico sem informação fora do anúncio. Nunca escolher produto por comissão.
  A cota é um teto: rodada parcial ou "nada novo hoje" é normal, nunca afrouxar o filtro para fechá-la.
- Preço: `priceMin`/`priceMax` do anúncio na data de `priceCheckedAt`, arredondados para fora;
  a página diz que é a faixa do anúncio e que preço, cupom e frete mudam. Descarte se max > 3 x min.
- Foto: a do anúncio, baixada por `shopee.mjs image`, aberta e conferida (sem banner, colagem ou
  selo), nunca gerada por IA. Análise a partir de fonte aberta fora da Shopee, nunca "testamos".

## Imagens

- Capa por `imageQuery` (`components/CoverImage.tsx`): Wikimedia Commons primeiro (licença
  conferida, crédito visível), depois Pexels/Pixabay (se houver chave), depois capa
  ilustrada. Pessoa ou empresa real: `"<nome> portrait"` / `"<empresa> logo"`.
- A busca do Commons é solta (já trouxe o político Javier Solana para "Solana logo").
  `lib/wikimedia.ts` filtra pelo nome, mas toda capa nova é conferida com
  `npm run check:covers -- <slug>`. Foto que não é do assunto: fixe um arquivo conferido
  com `imageQuery: "File:Nome exato do arquivo.jpg"` (página do arquivo aberta, licença
  CC ou domínio público, nunca imagem gerada por IA) ou use uma busca descritiva. Sem foto
  certa, a capa ilustrada é melhor que uma foto errada.
- Imagem no corpo: só `upload.wikimedia.org` (URL retornada pela API, licença conferida),
  Pexels, Pixabay ou arquivo próprio em `/images/...`.

## Validação antes de commitar

```bash
npm run check:content   # gera índices e valida artigos, notícias e produtos
npx tsc --noEmit
npx eslint .
npm run build
```

## Rotas principais

`/` home, `/bitcoin` (preço ao vivo, gráfico, halving, rede, medo e ganância),
`/mercado` (ranking), `/mercado/bolhas`, `/moedas/<slug>`, `/ferramentas` e
subpáginas, `/noticias`, `/artigos`, `/categoria/<slug>`, `/historia`, `/glossario`,
`/loja`, `/loja/<slug>`, `/busca`, institucionais (`/sobre`, `/contato`,
`/politica-editorial`, `/publicidade-e-afiliados`, `/politica-de-privacidade`,
`/termos-de-uso`, `/aviso-de-risco`), `/sitemap.xml`, `/robots.txt`, `/feed.xml`.

@AGENTS.md

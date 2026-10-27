# Rotina de Cripto Indica e Loja do Bitcoin na Shopee (1 vez por dia)

Objetivo: a Loja do Bitcoin crescendo todo dia também com produtos reais do mundo cripto
vendidos na Shopee Brasil (programa de Afiliados da Shopee), cada um com review longa, e
artigos de Cripto Indica que levam o leitor até eles. É a mesma cota da rotina da Amazon
(`docs/rotinas/indica.md`), que continua rodando: as duas rotinas somam, nenhuma substitui a
outra. Leia antes `docs/rotinas/comum.md`, `CLAUDE.md` (seções Loja do Bitcoin e Shopee),
`docs/padrao-editorial.md` (seções 8 e 9) e `docs/rotinas/indica.md` (o formato de review, de
artigo e de produto é o mesmo).

## 0. Credenciais e API (primeiro passo, sempre)

- A credencial da Shopee (App ID e Secret) NUNCA vai para o repositório, diff, commit, PR,
  comentário, log ou texto de conteúdo. O `check:content` barra `SHOPEE_SECRET=...` escrito em
  arquivo. Ela vem só de variável de ambiente (`SHOPEE_APP_ID`, `SHOPEE_SECRET`) ou do arquivo
  `~/.config/blogdobitcoin/shopee.env` (fora do repo, modo 600), que o `scripts/shopee.mjs`
  lê sozinho.
- `node scripts/shopee.mjs check` precisa dizer "credenciais ok". Se falhar (credencial
  ausente, `Invalid Signature`, acesso negado, API fora do ar depois de 3 tentativas), pare:
  responda "nada novo hoje" e diga em uma frase o motivo (ex.: "Shopee: credenciais ausentes").
  Nunca invente produto, preço ou link para "completar" a rodada.
- O `scripts/shopee.mjs` é o único jeito de falar com a API (GraphQL assinado). Comandos:
  `search "<palavras>" --sort sales --limit 30 --min-rating 4.5 --min-sales 5`,
  `item <itemId>`, `link <productLink> --sub loja`, `image <itemId> <caminho-sem-extensão>`.

## 1. Quantidade por rodada

- **2 produtos novos da Shopee na loja** (`content/products/<slug>.ts` com `store: "shopee"`),
  cada um com review longa (`review` completo, igual ao dos produtos da Amazon).
- **1 artigo de Cripto Indica só com produtos da Shopee** (`category: "cripto-indica"`):
  alterne comparativo (`kind: "guia"`, 2 ou 3 produtos da mesma categoria, `productScore`) e
  review de produto único (`kind: "review"`, campo `review` completo). O artigo usa os produtos
  novos do dia e, no comparativo, também produtos da Shopee que já estão na loja. Não consegue
  2 produtos da mesma categoria? Faça a review de produto único. Todo produto citado entra na
  loja e o artigo linka `/loja/<slug>`. A review da loja usa a mesma premissa e o mesmo
  veredito, com texto diferente (outras palavras e outra ordem).
- **Faixa de preço de até 5 produtos antigos da Shopee** (`priceCheckedAt` mais antigo
  primeiro): `node scripts/shopee.mjs item <itemId>`, novos `priceMin`/`priceMax` (regra da
  seção 3) e `priceCheckedAt` de hoje. Anúncio que sumiu da API (`item` sai com código 3): tire
  `featured`, não apague a página e registre no informe.

## 2. Escolher produtos (filtro duro)

Busque com palavras reais por categoria, ordenando por vendas ou relevância (nunca por
comissão), por exemplo: livros ("livro bitcoin", "livro criptomoedas", "livro blockchain"),
vestuário ("camiseta bitcoin", "boné bitcoin", "moletom bitcoin"), backup da seed ("placa aço
inox seed", "backup seed metal"), colecionáveis ("moeda bitcoin", "caneca bitcoin"). Um anúncio
só entra se passar em TUDO:

1. `ratingStar` 4,5 ou mais e pelo menos 5 vendas (`--min-rating 4.5 --min-sales 5`), nome sem
   a marca `NOME-QUEBRADO` do script (tradução automática ruim), vendedor com nome de loja real.
2. Produto identificável (livro com autor e editora, marca ou modelo conhecido) e com
   informação aberta FORA da Shopee para escrever a review sem inventar: site da editora ou do
   fabricante, catálogo, ISBN, página em outra loja, resenhas de compradores em outro lugar.
   Produto genérico sem nenhuma informação além do título do anúncio: pule.
3. Nunca na Shopee: carteira de hardware (qualquer uma, nem "original lacrada": é o golpe
   clássico do aparelho violado ou com seed anotada; o `check:content` barra), "carteira" com
   seed gravada de fábrica, robô de trade, sinais, curso ou ebook de "renda", mineradora
   (ASIC, rig) de vendedor desconhecido, qualquer anúncio que prometa lucro ou renda, produto
   com marca de terceiro falsificada, produto de saúde ou financeiro.
4. Não repita produto que já está na loja, nem o mesmo livro ou modelo que já está pela Amazon
   (mesmo título, ISBN ou modelo).
5. A decisão é editorial: a comissão (`commissionRate`) nunca entra na escolha, na nota ou no
   texto.

Antes de criar o produto, confira de novo o anúncio com `item <itemId>` (preço, nota e
vendas de agora). Não repita a categoria da rodada anterior no artigo.

## 3. Arquivo do produto

Mesmo formato dos produtos da Amazon (`content/products/<slug>.ts`), com estas diferenças:

- `store: "shopee"`, sem `asin`, e o bloco
  `shopee: { itemId, shopId, affiliateUrl, sellerName }`. `itemId` e `shopId` vêm do `item`;
  `sellerName` é o `shopName`; `affiliateUrl` é o link curto gerado por
  `node scripts/shopee.mjs link <productLink> --sub loja` (começa com `https://s.shopee.com.br/`).
  Link comum `shopee.com.br` não paga comissão e o `check:content` barra.
- `name` e `shortDescription` são nossos, nunca o título do anúncio (cheio de palavra-chave).
- Foto: `node scripts/shopee.mjs image <itemId> public/images/products/<slug>` (grava a foto
  principal do anúncio, só se for HTTP 200 e maior que 15 KB). Abra a imagem e confira que é o
  produto certo, sem banner, colagem, selo promocional, marca d'água ou texto de venda. Nunca
  imagem gerada por IA. Use a extensão que o script devolveu (`image.url` e `width`/`height`
  vêm da resposta dele).
- Preço: `priceMin` e `priceMax` do anúncio na API, arredondados para fora ao real inteiro
  (mínimo para baixo, máximo para cima). Se forem iguais, a página mostra "cerca de R$ X".
  Descarte o produto se `priceMax` > 3 x `priceMin` (o anúncio mistura variações). A página
  explica que é a faixa do anúncio na data da pesquisa e que preço, cupom e frete mudam.
  Nunca escreva valor em R$ no texto, no título, no excerpt ou no botão.
- Review longa igual à da Amazon (nota, 5 critérios, em 3 pontos, 4 a 6 seções com `cta`,
  ficha técnica, `howWeEvaluated`, opinião, FAQ). Diferenças: a ficha técnica sai de fonte
  aberta (editora, fabricante, catálogo, ISBN), e o que só aparece no título do anúncio entra
  como "segundo o anúncio". `othersSay` só com padrões que se repetem em opiniões FORA da
  Shopee; sem fonte externa, omita o campo (nunca invente). Pode citar a nota e as vendas do
  anúncio com a data da consulta ("em out/2026 o anúncio tinha nota 4,9 e 3 vendas"), como
  informação do anúncio e nunca como prova de qualidade; poucas vendas é ponto de atenção.
  Nunca "testamos". Nunca copie a descrição do vendedor.
- Texto puro nas reviews da loja (sem HTML), sem travessão.

## 4. Artigo de Cripto Indica da Shopee

Mesma estrutura do artigo da Amazon (`docs/padrao-editorial.md`, seções 4 e 8), com:

- Botões `<div class="buy-btn"><a href="<affiliateUrl>" rel="sponsored noopener noreferrer"
  target="_blank">Comprar agora na Shopee ↗</a></div>`, texto sempre exatamente esse, no
  mínimo 5 por artigo. O `href` é SEMPRE o `affiliateUrl` de um produto da Shopee listado em
  `products` do artigo (o `check:content` confere). Review de produto único:
  `review.url` = `affiliateUrl`, `review.affiliate: true`, `review.ctaLabel: "Comprar agora na Shopee"`.
- Uma loja por artigo: não misture produtos da Amazon e da Shopee.
- Seção "Variação de preço": a faixa é a do anúncio na Shopee em dd/mm e preço, cupom e frete
  mudam; o valor do dia aparece no botão. Nunca preço no título, excerpt ou meta description.
- Seção "Como comprar com segurança na Shopee" (marketplace de vendedores independentes):
  confira a reputação do vendedor (nota, tempo de loja, avaliações com foto), pague só dentro
  da plataforma e desconfie de quem pede para sair dela (WhatsApp, Pix direto), leia a
  política de devolução do anúncio, compare o prazo de entrega e desconfie de preço muito
  abaixo do normal. Regras específicas da Shopee que você não conferiu: não escreva.
- O aviso de transparência (afiliado da Shopee) aparece sozinho na página; não repita no `content`.
- Capa: `imageQuery` com foto do Commons conferida (`npm run check:covers -- <slug>`), como
  nos demais artigos; sem foto certa, a capa ilustrada.

## 5. Validação, publicação e informe

Como em `docs/rotinas/comum.md` (`npm run check:content`, `npx eslint .`, `npm run build`,
`git diff --stat` só com os arquivos permitidos). Informe final em poucas frases: produtos e
artigo que entraram, faixas atualizadas, anúncios que sumiram, validações, link do PR
mesclado. Sem produto viável: "nada novo hoje" (e diga se o motivo foi credencial ou API).

## 6. Pode tocar

`content/products/`, `content/articles/`, `public/images/products/` e índices gerados. Nunca
`docs/`, `CLAUDE.md`, `app/`, `components/`, `lib/`, `scripts/`, configuração nem segredo.

# Rotina de Cripto Indica e Loja do Bitcoin (1 vez por dia)

Objetivo: a Loja do Bitcoin crescendo todo dia com produtos reais do mundo cripto
vendidos na Amazon Brasil (os da Shopee têm rotina própria: `docs/rotinas/shopee.md`), cada um com review longa, e artigos de Cripto Indica que
levam o leitor até eles. Mesmo conceito da loja "A mãe quer desconto!" do Vocação de Mãe e
da AI Indica do Portal da AI. Leia antes `docs/rotinas/comum.md`, `CLAUDE.md` (seção Loja
do Bitcoin e Cripto Indica) e `docs/padrao-editorial.md` (seções 8 e 9).

## 1. Quantidade por rodada

- **2 produtos novos na loja** (`content/products/<slug>.ts`), cada um com review longa
  (`review` completo: nota, 5 critérios, em 3 pontos, 4 a 6 seções, ficha técnica, o que
  dizem outros compradores fora da Amazon, como avaliamos, opinião, FAQ).
- **1 artigo de Cripto Indica** (`category: "cripto-indica"`): alterne entre comparativo
  (`kind: "guia"`, 2 ou 3 produtos da mesma categoria, `productScore`) e review de produto
  único (`kind: "review"`, campo `review` completo). Todos os produtos citados entram na loja
  e o artigo linka `/loja/<slug>`. A review da loja usa a mesma premissa e o mesmo veredito,
  com texto diferente (outras palavras e outra ordem) para as páginas não competirem.
- **Faixa de preço de até 5 produtos antigos da Amazon** (`priceCheckedAt` mais antigo primeiro).
  Esta rotina só cria e atualiza produtos da Amazon (sem `store` ou `store: "amazon"`); os da
  Shopee são da rotina `shopee.md`. O artigo usa só produtos da Amazon (uma loja por artigo).

## 2. Escolher produtos

- Categorias da loja (`productCategories` em `lib/types.ts`): carteiras de hardware, backup
  da seed, livros, camisetas e vestuário, colecionáveis e presentes. Categoria nova só se
  fizer sentido (ex.: mineração caseira), adicionando em `lib/types.ts` e no
  `PRODUCT_CATEGORIES` de `scripts/check-content.mjs`.
- Produto real à venda na amazon.com.br, de vendedor com boa reputação. ASIN conferido com
  `python3 scripts/amz.py <ASIN> --tries 3` (bloqueia às vezes: repita com pausa) ou, se a
  Amazon bloquear de vez, em 2 resultados de busca independentes com o mesmo título.
- Nunca repita produto da loja, nem o mesmo livro ou modelo que já está pela Shopee (mesmo título,
  ISBN ou modelo). Não repita a categoria da rodada anterior no artigo.

## 3. Foto, preço e texto

- Foto oficial: imagem da galeria (`_AC_SL1500_`) ou site do fabricante, salva em
  `public/images/products/<slug>.jpg` (HTTP 200, mais de 15 KB, abra a imagem para conferir
  que é o produto certo). Nunca imagem gerada por IA. Em livro, a galeria pode trazer um
  banner genérico da Amazon (640x90) antes da capa: o `amz.py` já ignora o conhecido, mas
  sempre abra a imagem antes de usar.
- Faixa de preço: mesmo produto (marca, modelo, edição) em pelo menos 2 lojas; `priceMin` e
  `priceMax` arredondados; descarte se max > 3 x min; sem 2 lojas, sem faixa.
- Texto puro nas reviews da loja (sem HTML), sem valor em R$ escrito (a página monta a
  faixa), sem "testamos", sem travessão. Carteira: sempre o alerta de comprar de vendedor
  oficial e nunca aceitar aparelho com seed preenchida.
- Artigo: botões `buy-btn` com "Comprar agora na Amazon ↗" (mínimo 5), link
  `https://www.amazon.com.br/dp/<ASIN>?tag=blogdobitcoin-20`, seção "Variação de preço" com
  a observação de que a faixa é da internet como um todo.

## 4. Pode tocar

`content/products/`, `content/articles/`, `public/images/products/`, índices gerados e (só
para categoria nova) `lib/types.ts` e `scripts/check-content.mjs`.

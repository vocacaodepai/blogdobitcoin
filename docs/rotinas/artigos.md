# Rotina de artigos (2 rodadas por dia, 5 artigos cada)

Objetivo: crescer o Blog do Bitcoin no Google com guias úteis e Memórias do Bitcoin,
todos os dias. Leia antes `docs/rotinas/comum.md` e `docs/padrao-editorial.md` inteiro.

## Qual rodada é esta

- 1ª rodada (manhã) e 2ª rodada (tarde): mesmas regras. Na 2ª, olhe os artigos com a data
  de hoje e não repita assunto, categoria+subtema nem formato de título da manhã.

## 1. Escolher 5 pautas

- Conjunto de categorias por dia (paridade do dia do mês em Brasília):
  - dias ímpares: `bitcoin`, `iniciantes`, `seguranca`, `brasil`, `historia`
  - dias pares: `bitcoin`, `mercado`, `altcoins`, `seguranca`, `historia`
- Intenção de busca real no Brasil (perguntas que as pessoas digitam: "como", "o que é",
  "vale a pena", "quanto", "qual a diferença", "é seguro"), cauda longa, e temas em alta
  confirmados com WebSearch (fonte datada dos últimos 14 dias). Pelo menos 1 das 5 pautas
  parte de assunto em alta.
- Não repita tema: rejeite a pauta se 3 ou mais palavras do slug novo já aparecem juntas
  num slug existente (`ls content/articles`).
- `historia` (Memórias do Bitcoin): um fato, personagem ou episódio real por artigo
  (ex.: Silk Road, Bitcoin Cash e a guerra dos blocos, o primeiro caixa eletrônico de
  bitcoin, Ross Ulbricht, a FTX, a China e a mineração, o Bitcoin no Brasil), com
  `historyYear`, fonte primária, callout `callout-fact` e quiz. Ao criar uma Memória,
  confira se ela cabe como marco em `content/historia.ts` (só a rotina de manutenção
  edita esse arquivo; anote no informe).
- Varie o formato do título ("O que é X", "X vale a pena?", "Como fazer X", "X ou Y",
  "N fatos sobre X", "A história de X").

## 2. Escrever

- `npm run content:new -- artigo <slug> <categoria>` cria o esqueleto com a data de hoje e o
  seed sequencial. Preencha tudo conforme o padrão editorial: 1.100 a 1.700 palavras,
  5 a 8 h2, tabela ou checklist, seção de riscos/erros, **8 a 14 links internos distintos**
  (artigos existentes, páginas do site, `/moedas/<slug>`, `/glossario#<ancora>`), 1 a 4
  links externos abertos e conferidos, `keyPoints` (3), `faq` (4 a 6), quiz opcional.
- Escreva em paralelo (um agente por artigo) e revise cada um com um checador de fatos
  antes de publicar.
- Fato que muda (lei, alíquota, regra do Banco Central, nome de produto): confirme na fonte
  oficial no dia.

## 3. Pode tocar

`content/articles/` e o índice gerado. Termo novo útil para o glossário: anote no informe
(a rotina de manutenção decide).

Ao incluir marco em `content/historia.ts` ou termo em `content/glossario.ts`, atualize a data
`historyUpdated` ou `glossaryUpdated` no topo do arquivo (lastmod do sitemap).

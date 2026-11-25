# Rotina de notícias (de hora em hora)

Objetivo: o Blog do Bitcoin sempre com as notícias mais atuais do mercado cripto que
importam para quem tem ou quer ter cripto no Brasil. Leia antes `docs/rotinas/comum.md`.

## 1. O que já foi coberto

- `ls -t content/news | head -60`, `grep -h "title:" content/news/*.ts | tail -80` e
  `grep -h sourceUrl content/news/*.ts | tail -80`. Nunca a mesma notícia nem a mesma fonte
  duas vezes; mesmo assunto com fato novo relevante pode virar notícia nova, linkando a
  anterior.

## 2. Buscar o que é realmente novo

- 3 a 6 buscas (WebSearch) em português e inglês, só fatos das últimas 24 a 48 horas:
  - Brasil: Banco Central (regras das prestadoras de serviços de ativos virtuais,
    stablecoins, câmbio), Receita Federal (declaração, DeCripto, tributação), CVM, B3 (ETFs
    de cripto), exchanges brasileiras, golpes e operações policiais, Drex.
  - Bitcoin: preço e movimentos fortes (mais de 5% no dia), ETFs e fluxos, empresas com
    bitcoin no caixa, mineração e hashrate, halving, atualizações do protocolo.
  - Mercado: Ethereum, Solana, XRP, stablecoins, grandes listagens, falências.
  - Segurança: hacks de exchanges e protocolos, golpes novos.
  - Regulação e adoção no mundo: EUA (SEC, Congresso, reserva estratégica), Europa (MiCA),
    governos e grandes empresas.
- Fontes sérias, abertas e conferidas com WebFetch: Reuters, Bloomberg, CoinDesk, The Block,
  Cointelegraph, Decrypt, Valor, InfoMoney, Folha, Estadão, sites oficiais (bcb.gov.br,
  gov.br/receitafederal, cvm.gov.br, sec.gov). Boato e "fontes dizem" sem fonte não entram.
- Publique **no máximo 2 notícias por rodada**. Sem nada novo de verdade, termine em
  silêncio (sem commit, sem mensagem).
- Pelo menos 1 de cada 3 notícias publicadas no dia deve ser do Brasil ou ter efeito direto
  no Brasil.

## 3. Escrever

- `npm run content:new -- noticia <slug>` cria o esqueleto com a data e a hora reais de
  Brasília (`publishedAt`). Slug curto com a keyword, sem acento.
- Campos: `title` (55 a 75 caracteres, factual), `summary` (140 a 158, vira meta
  description), `author: "Bruno Danello"`, `sourceName`, `sourceUrl`, `date`,
  `publishedAt` (hora real), `topic` (bitcoin, mercado, altcoins, regulacao, seguranca,
  adocao; varie ao longo do dia), `imageQuery` (pessoa, empresa ou lugar real do fato:
  "Banco Central do Brasil building", "Michael Saylor portrait"), `content`, `faq` (2 ou 3).
- `content`: **mínimo 900 palavras e 3 `<h2>`**. O fato em 2 parágrafos (o que, quem,
  quando, com a fonte citada e link `rel="noopener noreferrer nofollow"`), h2 de contexto,
  h2 "O que isso muda para quem tem cripto no Brasil" (análise sem recomendação de
  investimento), 1 ou 2 h2 de desdobramentos. 3 a 6 links internos (artigos, `/bitcoin`,
  `/mercado`, `/moedas/<slug>`, `/glossario#<ancora>`, `/ferramentas/...`). Preço citado
  sempre com o horário de referência e link para `/bitcoin`.
- Imagem no corpo opcional: só Wikimedia Commons (URL retornada pela API, licença
  conferida, legenda "Foto: autor / Wikimedia Commons (licença)").

## 4. Pode tocar

Só `content/news/` e o índice gerado.

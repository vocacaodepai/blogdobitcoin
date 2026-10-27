# Rotina de manutenção (1 vez por dia)

Objetivo: o site sempre no ar, rápido, sem link quebrado, com os dados históricos em dia e
sem risco de segurança. Leia antes `docs/rotinas/comum.md`. Se não houver nada a corrigir,
termine em silêncio.

## 1. Dados

- `npm run data:historico` atualiza `public/data/btc-historico.json` (fechamento mensal
  BTC/USD e PTAX). Só commite se o arquivo mudou e se o último mês faz sentido (preço maior
  que zero, PTAX entre 3 e 10).
- Teste as APIs ao vivo (uma chamada cada) e anote no informe se alguma caiu:
  `data-api.binance.vision/api/v3/ticker/24hr?symbol=BTCBRL`,
  `api.coinpaprika.com/v1/global`, `mempool.space/api/blocks/tip/height`,
  `api.alternative.me/fng/?limit=1`. Se uma fonte morrer de vez, proponha a troca no
  informe (não reescreva `lib/market/` sem necessidade).
- `content/coins.ts`: se uma moeda do ranking (top 30 sem stablecoins) não tiver ficha,
  crie a ficha (mesmo padrão das existentes, fatos conferidos). Se uma moeda trocar de nome
  ou de id na CoinPaprika, corrija o `paprikaId`.
- `content/historia.ts` e `content/glossario.ts`: inclua marcos e termos novos anotados
  pelas rotinas de artigo e notícia na última semana, com fonte. Ao editar um deles,
  atualize a data `historyUpdated` ou `glossaryUpdated` no topo do arquivo (é o lastmod de
  `/historia` e `/glossario` no sitemap).

## 2. Erros

- `npm run check:content`, `npx eslint .`, `npx tsc --noEmit`, `npm run build`.
- Links internos quebrados, imagens de produto ausentes, `sourceUrl` que deixou de abrir
  (troque por arquivo do Wayback Machine, nunca apague a notícia).
- Produtos: ASIN que saiu de linha na Amazon (amz.py mostra indisponível há mais de 30 dias):
  tire `featured` e anote no informe; não apague a página.
- Produtos da Shopee: `node scripts/shopee.mjs check` (credencial e API ok; se falhar, anote no
  informe como "Shopee fora do ar ou credencial ausente") e, para cada produto com
  `store: "shopee"`, `node scripts/shopee.mjs item <itemId>`: anúncio que saiu da API (código 3)
  há mais de 30 dias, tire `featured` e anote no informe; não apague a página.

## 3. Segurança

- `npm audit --omit=dev` (só correções sem versão maior), nenhum segredo no repositório
  (`git grep -nE "(sk-|AKIA|ghp_|AIza|SHOPEE_(SECRET|APP_ID)\s*[=:]\s*[A-Za-z0-9]{8,})"`), cabeçalhos de segurança do `next.config.ts`
  intactos, CSP com as APIs de mercado em `connect-src`.
- Nunca force atualização de versão maior de dependência nem silencie regra para passar.

## 4. Pode tocar

O que for necessário para corrigir, com o menor diff possível. Mudança de código grande ou
de arquitetura: só no informe, para o dono decidir.

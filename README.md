# Blog do Bitcoin

Hub brasileiro sobre Bitcoin e criptomoedas (www.blogdobitcoin.com.br), editado por
Bruno Danello: preço do Bitcoin ao vivo, ranking das moedas em reais, bolhas cripto,
ferramentas, notícias diárias, guias, a história do Bitcoin (Memórias do Bitcoin) e a
Loja do Bitcoin com reviews de produtos vendidos na Amazon e na Shopee.

## O que tem no site

| Seção | Rota | Dados |
| --- | --- | --- |
| Preço do Bitcoin hoje | `/bitcoin` | Binance a cada 10 s (reserva: Mercado Bitcoin, Kraken, Coinbase), velas da Binance, histórico mensal desde 2010, mempool.space, alternative.me |
| Ranking das criptomoedas | `/mercado` | CoinPaprika (200 maiores, em reais), a cada 60 s |
| Bolhas cripto | `/mercado/bolhas` | CoinPaprika, física própria em SVG |
| Páginas de moedas | `/moedas/<slug>` | `content/coins.ts` + CoinPaprika |
| Ferramentas | `/ferramentas/*` | conversor, DCA, "se eu tivesse investido", halving, medo e ganância |
| Notícias | `/noticias` | `content/news/` (rotina de hora em hora) |
| Artigos | `/artigos`, `/categoria/<slug>` | `content/articles/` (rotina 2x por dia) |
| História | `/historia` | `content/historia.ts` + Memórias do Bitcoin |
| Glossário | `/glossario` | `content/glossario.ts` |
| Loja do Bitcoin | `/loja`, `/loja/<slug>` | `content/products/` (afiliado Amazon `blogdobitcoin-20` e afiliado Shopee) |

A barra de cotações do topo e o selo de preço do cabeçalho aparecem em todas as páginas.

## Stack

- Next.js 16 (App Router, TypeScript estrito, React 19), Tailwind CSS 4
- Conteúdo em arquivos TypeScript (um arquivo por item, índices gerados), sem banco de dados
- Dados ao vivo de APIs públicas sem chave (`lib/market/`), com HTML inicial já renderizado
  no servidor (ISR) e atualização no navegador
- Capas: Wikimedia Commons, Pexels e Pixabay (opcionais), com capa ilustrada de reserva

## Rodando localmente

```bash
npm install
cp .env.example .env.local   # tudo é opcional
npm run check:content        # gera os índices e valida o conteúdo
npm run dev
```

## Scripts

| Script | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run check:content` | Regenera os índices e valida artigos, notícias e produtos (roda antes do build) |
| `npm run content:new -- artigo <slug> <categoria>` | Esqueleto de artigo com data de hoje e seed |
| `npm run content:new -- noticia <slug>` | Esqueleto de notícia com data e hora de Brasília |
| `npm run data:historico` | Atualiza `public/data/btc-historico.json` (BTC/USD mensal + PTAX) |
| `python3 scripts/amz.py <ASIN>` | Lê a página da Amazon de um ASIN (título, fotos oficiais, nota) |
| `npm run lint` | ESLint + check-content |
| `npm run build` | Build de produção |

## Padrão editorial e rotinas

- `docs/padrao-editorial.md`: voz, estrutura, links, SEO, notícias, Cripto Indica e loja.
- `docs/rotinas/`: roteiros das rotinas automáticas (notícias, artigos, Cripto Indica e
  loja da Amazon, Cripto Indica e loja da Shopee, manutenção) e regras comuns.
- `docs/referencias-e-sugestoes.md`: o que os maiores sites de cripto do mundo fazem e as
  próximas ideias para o Blog do Bitcoin.

## Variáveis de ambiente

Veja `.env.example`. Nenhuma é obrigatória: sem chaves, o site funciona com capas
ilustradas, sem anúncios e sem Google Analytics.

`SHOPEE_APP_ID` e `SHOPEE_SECRET` (API de Afiliados da Shopee) servem só à rotina da Shopee
(`scripts/shopee.mjs`) e nunca entram no repositório: configure no ambiente de execução da
rotina ou em `~/.config/blogdobitcoin/shopee.env`. O `npm run check:content` barra o valor da
credencial se ele aparecer em qualquer arquivo.

## Validação antes de commitar

```bash
npm run check:content
npx tsc --noEmit
npx eslint .
npm run build
```

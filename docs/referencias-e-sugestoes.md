# Referências e sugestões: o que está dando certo lá fora

Pesquisa feita em 22/10/2026 (fuso America/Sao_Paulo), abrindo cada site e conferindo o que
ele mostra hoje. Números de terceiros citados aqui valem para o dia da consulta. Toda
afirmação sobre um site traz o link que foi aberto.

Ficaram de fora por bloqueio de acesso, para não haver afirmação sem conferência:
**Investopedia** (o site recusou a leitura automática e o buscador também barrou o domínio) e a
tabela de fluxos de ETF da **Farside** (HTTP 403). Do **Glassnode Studio** só deu para ler o menu
(planos e preços não apareceram), então ele entra só com o que foi visto.

## 1. Tabela de referências

| Site | País | O que faz de melhor | O que adaptar para o Blog do Bitcoin | Link |
| --- | --- | --- | --- | --- |
| CoinDesk | EUA | Página de preço completa: "Key Stats", conversor, notícias recentes, tabela de mercados por exchange, "Related Stocks" e um FAQ longo. Sete newsletters (CoinDesk Headlines, Crypto Daybook Americas e outras), rede de podcasts, vídeo diário ("CoinDesk Daily") e "Shorts", calculadora de mineração, índice CD20 | Estrutura da página de preço em `/bitcoin` e `/moedas/<slug>` (bloco do que movimentou o preço hoje, FAQ, ações e ETFs ligados ao Bitcoin), newsletter diária | [coindesk.com](https://www.coindesk.com/), [preço do BTC](https://www.coindesk.com/price/bitcoin), [calculadora](https://www.coindesk.com/calculator/mining/btc) |
| Cointelegraph | Internacional | "Most read" com filtro de 24 h, newsletter diária "1 minute letter", Magazine com "Hodler's Digest", páginas de "Editorial Policy" e "Financial Risk Disclaimer" no menu | Lista de mais lidas por período, resumo semanal, aviso de risco sempre a um clique (já temos `/aviso-de-risco`) | [cointelegraph.com](https://cointelegraph.com/) |
| The Block | EUA | Painel de dados por tema: ETFs (Bitcoin, Ethereum, Solana), "Treasuries", stablecoins, métricas on-chain e até volume de busca no Google. Newsletters por nicho e extensão de navegador com alertas de preço | Rastreador de ETFs e de tesourarias, alerta de preço, gráfico de interesse de busca | [theblock.co](https://www.theblock.co/), [dados](https://www.theblock.co/data) |
| Decrypt | EUA | Página de preço com períodos 24H, 7D, 1M, 1Y, YTD e MAX, widget "Bitcoin ETF Net Flows" com fluxo diário, seção Learn com explicadores ("What Is a Hardware Wallet?"), newsletter com "Join 72,000+ readers" e enquetes "Have your say" | Widget de fluxo de ETF na página do Bitcoin, enquete simples em notícia. Não adaptar: widget de mercado de previsão e botão de compra dentro do conteúdo | [decrypt.co](https://decrypt.co/), [preço do BTC](https://decrypt.co/price/bitcoin), [Learn](https://decrypt.co/learn) |
| Bitcoin Magazine | EUA | "Market Dashboard" (preço, volume, capitalização, Fear & Greed da Alternative.me e hashrate), newsletter grátis "DAILY RECAP", programa ao vivo diário (BMTV), Guides e Glossary, loja e livros próprios | Painel resumo na home, newsletter diária, glossário com página por termo | [bitcoinmagazine.com](https://bitcoinmagazine.com/), [glossário](https://bitcoinmagazine.com/glossary), [guias](https://bitcoinmagazine.com/guides) |
| Blockworks | EUA | Virou empresa de dados: "Intel", "Data", "Monitoring" (alertas por Slack, Telegram, Webhooks e API), research com 45 analistas, newsletter diária ("The daily brief") | Alerta de preço por Telegram como primeiro passo, newsletter diária | [blockworks.com](https://blockworks.com/) |
| CoinMarketCap | Internacional | Índices prontos ("Fear and Greed Index", "Altcoin Season Index", "Bitcoin Dominance", "CoinMarketCap 100 Index"), conversor, portfólio, watchlist, "AI Alerts", Academy com glossário, "Learn & Earn", rastreador de ETFs com fluxo e patrimônio, "Bitcoin Treasuries" | Dominância e temporada de altcoins, rastreador de ETFs, tesourarias, lista de favoritos | [coinmarketcap.com](https://coinmarketcap.com/), [ETFs](https://coinmarketcap.com/etf/bitcoin/), [medo e ganância](https://coinmarketcap.com/charts/fear-and-greed-index/), [Academy](https://coinmarketcap.com/academy/) |
| CoinGecko | Internacional | "Crypto Treasuries" (193 entidades em 37 países, com OranjeBTC e Méliuz), "Gainers & Losers", "Compare Coins", conversor, Learn com guias e glossário. A API aceita `sats` e `bits` como moeda de cotação | Tesourarias brasileiras, comparador de moedas, preços em sats | [tesourarias](https://www.coingecko.com/en/treasuries/bitcoin), [Learn](https://www.coingecko.com/learn), [moedas da API](https://api.coingecko.com/api/v3/simple/supported_vs_currencies) |
| Crypto Bubbles | Internacional | Bolhas das 1.000 maiores moedas, tamanho e cor configuráveis (capitalização, volume 24h), períodos de 1H a 1Y, watchlists, 14 moedas fiduciárias e 17 idiomas, incluindo português | Mais períodos e opção de tamanho por volume nas nossas bolhas | [cryptobubbles.net](https://cryptobubbles.net/), [ficha do app](https://apps.apple.com/us/app/crypto-bubbles/id1599892658) |
| mempool.space | Internacional | Taxas por prioridade (sat/vB), estimativa do próximo ajuste de dificuldade, "Mining Dashboard", "Lightning Explorer", seletor de moeda. API aberta com taxas, preço, preço histórico e dificuldade | Taxa para enviar bitcoin convertida em reais, mais dados de mineração e Lightning | [mempool.space](https://mempool.space/), [API](https://mempool.space/docs/api/rest), [mineração](https://mempool.space/mining) |
| Checkonchain | Internacional | Gráficos on-chain organizados por tema ("Pricing Models", "Profit/Loss", "Mining Metrics"): "Realized Price and MVRV", "Mayer Multiple", "Pi Cycle Top", "The HODL Waves", fluxos de ETF à vista. Parte é premium | Indicadores de ciclo explicados em português | [charts.checkonchain.com](https://charts.checkonchain.com/) |
| LookIntoBitcoin (Bitcoin Magazine Pro) | Internacional | Catálogo grande de indicadores: "Bitcoin: Pi Cycle Top Indicator", "Stock-to-Flow Model", "Bitcoin Rainbow Price Chart Indicator", "MVRV Z-Score", "200 Week Moving Average Heatmap", dados de tesourarias e alertas por e-mail | Página de indicadores de ciclo com texto educativo e alerta | [charts](https://www.lookintobitcoin.com/charts/), [Pi Cycle](https://www.lookintobitcoin.com/charts/pi-cycle-top-indicator/) |
| Glassnode Studio | Internacional | Menu com "Dashboards", "Charts", "Market Compass" e "Research" | Referência de organização por painel (planos não conferidos) | [studio.glassnode.com](https://studio.glassnode.com/) |
| Blockchaincenter | Internacional | "Bitcoin Rainbow Chart" (hoje um modelo de lei de potência sobre o histórico desde 2012), com avisos claros: "not investment advice" e "There is no scientific basis underpinning it". Também "Altcoin Season Index" | Rainbow chart com o mesmo tom de aviso, temporada de altcoins | [rainbow chart](https://www.blockchaincenter.net/en/bitcoin-rainbow-chart/), [altcoin season](https://www.blockchaincenter.net/en/altcoin-season-index/) |
| River Learn | EUA | Aprendizado por tema (Basics, Markets, Storage, Mining, Taxes, Technology, Research), "Learn about Bitcoin's basics in 10 minutes" e um glossário com cerca de 650 termos, cada um com página própria e "Related Terms" | Glossário com página por termo, trilha curta de início | [river.com/learn](https://river.com/learn/), [glossário](https://river.com/learn/terms/), [exemplo de termo](https://river.com/learn/terms/s/satoshi/) |
| Bitcoin.org (pt_BR) | Internacional | "Escolha sua carteira" em 4 etapas (plataforma, tipo de uso, critérios, recursos) com selos "Bom", "Aceitável", "Cuidado" e "Neutro"; "Começando", "Vocabulário" e whitepaper em português | Assistente "qual carteira escolher" ligado à Loja; whitepaper em PDF como fonte primária | [escolha sua carteira](https://bitcoin.org/pt_BR/escolha-sua-carteira), [vocabulário](https://bitcoin.org/pt_BR/vocabulario), [whitepaper](https://bitcoin.org/files/bitcoin-paper/bitcoin_pt_br.pdf) |
| Binance Academy (pt-BR) | Internacional | Artigos com nível ("Iniciante"), cursos em trilha ("Curso para iniciantes", "Faixa Intermediária", "Análise on-chain para iniciantes"), glossário com 310 termos e "Aprenda e Ganhe" | Curso grátis em trilha com quiz. Não adaptar: recompensa em cripto | [academy](https://www.binance.com/pt-BR/academy), [cursos](https://www.binance.com/pt-BR/academy/courses) |
| Kraken Learn | EUA | 386 conteúdos com filtro por tema, formato e nível (Beginner, Intermediate, Advanced), vídeos curtos, "Most popular articles". Páginas de conversão por par com tabelas (0.00001 a 10.000 BTC) e FAQ | Selo de nível nos artigos, conversores por par em real. Não adaptar: páginas de "price prediction" | [learn](https://www.kraken.com/learn), [BTC para USD](https://www.kraken.com/convert/btc/usd) |
| Bitcoin Treasuries | Internacional | Ranking de empresas com bitcoin em caixa, filtro por país (inclui Brasil), notícias de tesouraria, botão "Embed". Em 22/10/2026 apareciam OranjeBTC (OBTC3, 3.950 BTC) e Méliuz (605 BTC) | Página "empresas brasileiras com bitcoin", widget embutível | [bitcointreasuries.net](https://bitcointreasuries.net/) |
| BTC Map | Internacional | Mapa de lugares que aceitam bitcoin, dados do OpenStreetMap, apps para Android, iOS e web, página por país e cadastro de local aberto a qualquer pessoa | Mapa do Brasil com as comunidades locais | [btcmap.org](https://btcmap.org/), [Brasil](https://btcmap.org/country/br), [adicionar local](https://btcmap.org/add-location) |
| Milk Road | Internacional | Newsletter diária para investidor comum, diz ter "300,000+ investors" (número declarado pelo próprio site), podcast e assinatura PRO | Tom simples e diário da newsletter (sem dica de compra) | [milkroad.com](https://milkroad.com/) |
| Livecoins | Brasil | Ferramentas: "Cotação Bitcoin", "DCA Bitcoin", "Conversor de satoshis", extensão de navegador. "Volume corretoras Brasil". Guias "Melhores carteiras", "Melhores corretoras", "Melhores cartões" | Comparador de corretoras brasileiras, extensão ou widget | [livecoins.com.br](https://livecoins.com.br/), [volume por corretora](https://www.mercadocripto.livecoins.com.br/corretoras), [conversor de sats](https://livecoins.com.br/conversor-satoshis/) |
| Portal do Bitcoin (UOL) | Brasil | Menu com "Cotações", "Calculadora" (simulação de "se tivesse investido", dados do Mercado Bitcoin) e "Educação" (O que é Bitcoin, Ethereum, blockchain, mineração), link para a página no Google News | Já temos equivalentes. Lição de SEO: no HTML baixado sem JavaScript, a calculadora mostrava "R$ 0,00" e a página de cotações vinha sem números | [portaldobitcoin.uol.com.br](https://portaldobitcoin.uol.com.br/), [calculadora](https://portaldobitcoin.uol.com.br/calculadora-de-investimento-em-bitcoin/), [cotações](https://portaldobitcoin.uol.com.br/cotacoes-criptomoedas/) |
| Criptofácil | Brasil | Guias ("Cripto para Iniciantes", "Como Comprar Cripto", "Investimento em Cripto"), newsletter, "Análise Técnica" e "Planilhas Gratuitas" | Planilha grátis como isca de newsletter | [criptofacil.com](https://www.criptofacil.com/) |
| InfoMoney | Brasil | Cotação de "Criptos" junto de Ibovespa e dólar, "Simulador de Investimentos", "Planilhas e Calculadoras", "Newsletter Grátis" | Planilhas e calculadoras com cadastro opcional | [cripto no InfoMoney](https://www.infomoney.com.br/onde-investir/criptomoedas/), [ferramentas](https://www.infomoney.com.br/ferramentas/) |
| Money Times (Crypto Times) | Brasil | Cotações (BTC, ETH, SOL, HYPE), "Maiores altas" e "Maiores baixas", newsletter semanal, rubricas fixas ("Bom dia, Bitcoin (BTC)", "Lightning News", "Bê-a-bá Cripto") e o podcast Crypto Storm, no ar desde 2019 | Rubricas fixas com nome próprio (criar o nosso, sem copiar), podcast semanal | [Crypto Times](https://www.moneytimes.com.br/criptomoedas/), [Crypto Storm #1](https://www.moneytimes.com.br/crypto-storm-o-podcast-do-money-times-feito-por-quem-esta-dentro-do-mercado/) |
| Exame Future of Money | Brasil | Notícias, web stories e temas fixos (Bitcoin, Ethereum, Criptomoedas, Drex, Blockchain). A seção não tem cotação nem ferramenta própria | Web stories das notícias do dia | [exame.com/future-of-money](https://exame.com/future-of-money/) |
| Bitcoin Block | Brasil | "Preço do Bitcoin no Brasil", newsletter "Diário de Bordo" (Captain's Club), podcast no Spotify, playlists no YouTube ("Radar Bitcoin Block" e outras), loja e área de assinantes | Newsletter com nome próprio, vídeos em série | [bitcoinblock.com.br](https://bitcoinblock.com.br/) |
| Cointrader Monitor | Brasil | "Preço Bitcoin Brasil" atualizado a cada 1 minuto nas corretoras brasileiras, arbitragem, widget, API e relatórios de volume. A tabela "Taxas das Exchanges Brasileiras" diz "Atualizado em 16/02/2022" | Comparador de taxas atual (a referência brasileira está parada desde 2022) | [cointradermonitor.com](https://cointradermonitor.com/), [taxas](https://cointradermonitor.com/taxas-exchanges) |

## 2. O que o Blog do Bitcoin já tem no lançamento

| Recurso | Onde | Como se compara com as referências | Ajuste fino sugerido |
| --- | --- | --- | --- |
| Preço do Bitcoin ao vivo a cada 10 s, com variação desde a última atualização e em 1 h, 24 h, 7 dias, 30 dias e 1 ano (o painel também mostra 90 dias e "No ano") | `/bitcoin` | Mais frequente que o Cointrader Monitor (1 minuto). CoinDesk, Kraken e Decrypt entregam o preço no HTML do servidor, como nós | Manter números com largura fixa para não mexer o layout a cada 10 s (CLS, ver seção 4) |
| Gráfico em real ou dólar: 24h, 7 dias, 30 dias, 1 ano e desde 2010 | `/bitcoin` | Decrypt oferece 24H, 7D, 1M, 1Y, YTD e MAX | Avaliar o período "no ano" no gráfico |
| Contagem regressiva do halving | `/bitcoin`, `/ferramentas/halving` | A home do mempool.space não mostra o halving: é um diferencial nosso | Link para o artigo do halving e para os ciclos |
| Taxas da rede | `/bitcoin` | mempool.space mostra por prioridade em sat/vB | Mostrar também o custo em reais (sugestão 2) |
| Índice de medo e ganância | `/bitcoin`, `/ferramentas/medo-e-ganancia` | Mesma fonte da Bitcoin Magazine (Alternative.me) | A API da Alternative.me exige citar a fonte de forma visível ("You must properly acknowledge the source"): conferir o crédito na página ([fonte](https://alternative.me/crypto/fear-and-greed-index/)) |
| Ranking das 100 maiores moedas em reais | `/mercado` | Equivale ao topo do CoinMarketCap e do CoinGecko, com a vantagem de vir em real | Coluna de dominância e filtro "maiores altas e baixas" como no Money Times |
| Bolhas de variação | `/mercado/bolhas` | Crypto Bubbles cobre 1.000 moedas e tem tamanho por volume | Opção de tamanho por volume 24h |
| Páginas de 20 moedas | `/moedas/<slug>` | CoinDesk e Kraken têm FAQ, estatísticas e notícias na mesma página | FAQ por moeda e bloco de notícias da moeda |
| Conversor BTC, sats, real e dólar | `/ferramentas/conversor` | Kraken tem uma página por par com tabelas prontas; Livecoins tem conversor de satoshis | Páginas por par (sugestão 5) |
| Calculadora DCA | `/ferramentas/calculadora-dca` | Livecoins também tem "DCA Bitcoin" | Botão para compartilhar o resultado |
| "Se eu tivesse investido" | `/ferramentas/se-eu-tivesse-investido` | Portal do Bitcoin tem calculadora parecida, mas sem números no HTML | Manter o exemplo pronto já renderizado no servidor |
| Glossário (73 termos) | `/glossario` | River tem cerca de 650 termos, Binance 310, cada um com página | Página por termo para os mais buscados (sugestão 14) |
| Linha do tempo, curiosidades e Memórias do Bitcoin | `/historia`, `/categoria/historia` | Nenhum portal brasileiro visitado tem seção de história organizada assim | Ligar cada marco a um preço histórico com data e fonte |
| Notícias diárias | `/noticias` | Padrão de todos os portais; Cointelegraph destaca "Most read" de 24 h | Resumo da semana e newsletter (sugestão 7) |
| Loja do Bitcoin com reviews longas e Cripto Indica | `/loja`, `/categoria/cripto-indica` | Bitcoin Magazine vende produtos próprios; Livecoins faz guias "melhores carteiras" | Assistente "qual carteira escolher" (sugestão 15) |

## 3. Próximas sugestões (alto impacto e baixo esforço primeiro)

### 1. Modo sats e "quanto custa em sats"

- **Impacto:** alto. **Esforço:** baixo.
- **Por que funciona lá fora:** a unidade sats virou linguagem do público de Bitcoin. A API do CoinGecko aceita `sats` como moeda de cotação ([lista](https://api.coingecko.com/api/v3/simple/supported_vs_currencies)), a River explica que "1 BTC = 100,000,000 sats" ([termo](https://river.com/learn/terms/s/satoshi/)) e a Livecoins mantém um conversor de satoshis ([página](https://livecoins.com.br/conversor-satoshis/)).
- **Como fazer no Brasil:** um botão "ver em sats" nas páginas de preço e uma página (rota nova, por exemplo `/ferramentas/bitcoin-em-sats`) com itens do dia a dia convertidos ao vivo: cesta básica por capital (fonte: [DIEESE](https://www.dieese.org.br/cesta/)), litro da gasolina (fonte: [levantamento semanal da ANP](https://www.gov.br/anp/pt-br/assuntos/precos-e-defesa-da-concorrencia/precos/levantamento-de-precos-de-combustiveis-ultimas-semanas-pesquisadas)), cafezinho e salário mínimo, sempre com fonte e mês do preço em real. O preço do Bitcoin já está ao vivo no site, então é só conta.

### 2. "Quanto custa enviar bitcoin agora", em reais

- **Impacto:** médio a alto. **Esforço:** baixo.
- **Por que funciona lá fora:** a home do mempool.space abre com as taxas por prioridade ("No Priority", "Low", "Medium", "High") ([mempool.space](https://mempool.space/)), e a API tem o endpoint `/api/v1/fees/recommended` ([documentação](https://mempool.space/docs/api/rest)).
- **Como fazer no Brasil:** o site já busca as taxas no mempool.space e o preço em real. Basta mostrar "enviar agora custa cerca de R$ X (rápido) ou R$ Y (sem pressa)" para uma transação típica, explicando a premissa de tamanho na própria página e linkando `/glossario#taxa-de-rede` e `/glossario#mempool`.

### 3. Dominância do Bitcoin em destaque

- **Impacto:** médio. **Esforço:** baixo.
- **Por que funciona lá fora:** CoinMarketCap tem página fixa de "Bitcoin Dominance" e de "Altcoin Season Index" ([dominância](https://coinmarketcap.com/charts/bitcoin-dominance/), [altcoin season](https://coinmarketcap.com/charts/altcoin-season-index/)), e a Blockchaincenter mantém o seu índice de temporada de altcoins ([página](https://www.blockchaincenter.net/en/altcoin-season-index/)).
- **Como fazer no Brasil:** o dado já chega pela CoinPaprika (`btcDominance` em `lib/market/paprika.ts`). Mostrar em `/mercado` e `/bitcoin`, com explicação e link para `/glossario#dominancia`. O índice de temporada de altcoins fica para depois (precisa do desempenho de 90 dias das maiores moedas contra o BTC).

### 4. Página do Bitcoin no modelo das grandes

- **Impacto:** alto. **Esforço:** baixo.
- **Por que funciona lá fora:** a página de preço do CoinDesk junta "Key Stats", conversor, "Latest Bitcoin News", "Bitcoin Markets", "Related Stocks" e um FAQ grande, e entrega o preço no HTML com marcação de BreadcrumbList e FAQPage ([página](https://www.coindesk.com/price/bitcoin)). A do Decrypt traz o fluxo diário dos ETFs ([página](https://decrypt.co/price/bitcoin)).
- **Como fazer no Brasil:** em `/bitcoin`, um bloco "o que movimentou o Bitcoin hoje" com as 3 notícias mais recentes do tópico bitcoin, FAQ fixo ("quanto vale 1 bitcoin hoje em reais?", "quantos bitcoins existem?"), ETFs da B3 e empresas brasileiras com bitcoin. Cuidado aprendido com o próprio CoinDesk: na consulta, o topo mostrava queda de 4,14% e o texto do FAQ falava em alta de 2,11% em 24 h. Todo texto automático precisa sair do mesmo instante dos dados.

### 5. Conversores por par em real

- **Impacto:** alto. **Esforço:** baixo a médio.
- **Por que funciona lá fora:** a Kraken tem uma página por par (ex.: BTC para USD) com conversor, gráfico, tabelas prontas de 0.00001 a 10.000 BTC, FAQ e links para outros pares ([página](https://www.kraken.com/convert/btc/usd)). Cada página responde uma busca exata ("quanto é 0,01 bitcoin em reais").
- **Como fazer no Brasil:** subpáginas de `/ferramentas/conversor` para poucos pares com busca real (BTC, sats, USDT, ETH e SOL contra real), cada uma com tabela ao vivo, variação de 7 e 30 dias e FAQ próprio. Poucas e completas: o Google trata páginas geradas em massa só para ranquear como "scaled content abuse" ([política](https://developers.google.com/search/docs/essentials/spam-policies)).

### 6. Empresas brasileiras com bitcoin em caixa

- **Impacto:** alto. **Esforço:** baixo a médio.
- **Por que funciona lá fora:** Bitcoin Treasuries ranqueia empresas e tem filtro por país, com Brasil na lista ([site](https://bitcointreasuries.net/)); CoinGecko acompanha 193 entidades em 37 países ([página](https://www.coingecko.com/en/treasuries/bitcoin)); CoinMarketCap e The Block têm páginas próprias de "Bitcoin Treasuries" ([CMC](https://coinmarketcap.com/), [The Block](https://www.theblock.co/data)).
- **Como fazer no Brasil:** página (rota nova) com as empresas brasileiras e o total de BTC de cada uma, a partir dos comunicados oficiais de cada empresa, com data. Em 22/10/2026 as duas fontes já mostravam números diferentes para a Méliuz (605 BTC no Bitcoin Treasuries, 604 no CoinGecko): por isso citar a fonte e a data em cada linha. Notícia nova a cada compra anunciada alimenta a página.

### 7. Newsletter diária e resumo da semana

- **Impacto:** alto (é o canal que não depende do Google). **Esforço:** médio.
- **Por que funciona lá fora:** CoinDesk tem sete newsletters, entre elas "CoinDesk Headlines" e "Crypto Daybook Americas" ([site](https://www.coindesk.com/)); Bitcoin Magazine oferece o "DAILY RECAP" grátis ([site](https://bitcoinmagazine.com/)); Cointelegraph, o "1 minute letter" ([site](https://cointelegraph.com/)); Decrypt anuncia "Join 72,000+ readers" ([site](https://decrypt.co/)). No Brasil, Bitcoin Block tem o "Diário de Bordo" e o Money Times uma newsletter semanal ([Bitcoin Block](https://bitcoinblock.com.br/), [Money Times](https://www.moneytimes.com.br/criptomoedas/)).
- **Como fazer no Brasil:** e-mail curto às 7h com fechamento do dia (preço, variação, medo e ganância, taxa da rede) e as 3 notícias do blog, mais um resumo no domingo. Cadastro com confirmação por e-mail e descadastro em um clique (LGPD). A rotina diária de notícias já produz o conteúdo.

### 8. Planilha grátis de controle de cripto

- **Impacto:** médio. **Esforço:** baixo.
- **Por que funciona lá fora:** Criptofácil tem "Planilhas Gratuitas" no menu ([site](https://www.criptofacil.com/)) e o InfoMoney mantém "Planilhas e Calculadoras" ([página](https://www.infomoney.com.br/onde-investir/criptomoedas/)).
- **Como fazer no Brasil:** planilha de compras, preço médio e lucro por venda no mês, com aba de bens e direitos (a Receita exige declarar criptoativo com valor de aquisição a partir de R$ 5.000 por espécie, [fonte](https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/preenchimento/manual-mir/patrimonio/bens-financeiros)). Download livre, com convite opcional para a newsletter.

### 9. Widget de cotação para outros sites

- **Impacto:** médio (gera links de volta para o blog). **Esforço:** baixo.
- **Por que funciona lá fora:** o Cointrader Monitor oferece o widget do "PREÇO BITCOIN BRASIL" ([site](https://cointradermonitor.com/)), a Alternative.me tem imagem embutível do índice de medo e ganância ([página](https://alternative.me/crypto/fear-and-greed-index/)) e o Bitcoin Treasuries tem botão "Embed" ([site](https://bitcointreasuries.net/)).
- **Como fazer no Brasil:** um `<iframe>` leve com preço em real e variação de 24 h, com o crédito "Blog do Bitcoin" linkando `/bitcoin`. Os dados já existem.

### 10. Curso grátis em trilha, com nível e quiz

- **Impacto:** alto. **Esforço:** médio.
- **Por que funciona lá fora:** Binance Academy organiza cursos por nível ("Curso para iniciantes", "Faixa Intermediária") e tem "Aprenda e Ganhe" ([academy](https://www.binance.com/pt-BR/academy)); a River abre com "Learn about Bitcoin's basics in 10 minutes" ([página](https://river.com/learn/bitcoin-in-10-minutes/)); a Kraken filtra tudo por Beginner, Intermediate e Advanced ([learn](https://www.kraken.com/learn)).
- **Como fazer no Brasil:** "Bitcoin do zero" em 7 a 10 aulas usando os artigos que já existem (o que é Bitcoin, como comprar, carteira, seed, golpes, impostos), cada aula com o quiz que o site já tem e um certificado simples no fim. Sem recompensa em cripto. Selo de nível (iniciante, intermediário, avançado) em todo artigo é o primeiro passo e custa pouco.

### 11. Calculadora de IR cripto

- **Impacto:** alto, com pico de março a maio. **Esforço:** médio.
- **Por que funciona lá fora:** a River tem a área "Taxes" no topo do Learn, com o guia "Understanding bitcoin taxes: 2026 guide" ([river.com/learn](https://river.com/learn/)).
- **Como fazer no Brasil:** calcular total vendido no mês, ganho de capital e se o mês fica isento ou não, seguindo as regras explicadas no artigo `/artigos/imposto-sobre-criptomoedas-no-brasil-quanto-se-paga` (conferidas na Receita no dia de publicar). Explicar a mudança de 2026: a DeCripto (IN RFB 2.291/2025) substituiu a sistemática da IN 1.888/2019 a partir de 1º de julho de 2026 ([Receita](https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/declaracoes-e-demonstrativos/criptoativos/decripto), [manual](https://www.gov.br/receitafederal/pt-br/centrais-de-conteudo/publicacoes/manuais/manual-orientacao-leiaute-criptoativos/manual-de-orientacao-do-leiaute-da-decripto-v1.pdf)). Tema YMYL: aviso de que é simulação, revisão por contador e data da última revisão visível.

### 12. Comparador de corretoras brasileiras (taxas e preço)

- **Impacto:** alto. **Esforço:** médio.
- **Por que funciona lá fora (e aqui):** o Cointrader Monitor mostra o preço do bitcoin em cada corretora brasileira a cada 1 minuto, mas a tabela de taxas diz "Atualizado em 16/02/2022" ([taxas](https://cointradermonitor.com/taxas-exchanges)); a Livecoins mostra o volume por corretora ([página](https://www.mercadocripto.livecoins.com.br/corretoras)). Há uma lacuna clara de comparador atual.
- **Como fazer no Brasil:** tabela com taxa de compra e venda (maker e taker), saque em real e em BTC, Pix e prova de reservas, conferida à mão no site de cada corretora uma vez por mês, com a data visível. Depois, preço ao vivo por corretora usando APIs públicas (o Mercado Bitcoin já é fonte reserva do site). Linkar `/artigos/exchange-de-criptomoedas-como-escolher-uma-corretora`. Nunca ranquear como recomendação de investimento.

### 13. Rastreador de ETFs de bitcoin (B3 e EUA)

- **Impacto:** alto. **Esforço:** médio a alto.
- **Por que funciona lá fora:** CoinMarketCap tem fluxo diário e patrimônio dos ETFs de bitcoin ([página](https://coinmarketcap.com/etf/bitcoin/)), The Block tem painel só de ETFs ([dados](https://www.theblock.co/data)) e o Decrypt põe o fluxo diário na página de preço ([página](https://decrypt.co/price/bitcoin)).
- **Como fazer no Brasil:** primeiro uma página editorial com os produtos da B3 (o portal Bora Investir, da B3, citava 19 ativos ligados a cripto entre ETFs e BDRs de ETF, como BITH11, QBTC11, BITI11 e HASH11, [fonte](https://borainvestir.b3.com.br/tipos-de-investimentos/renda-variavel/etfs/criptoativos-conheca-as-diferentes-formas-de-investir-em-bitcoin-ether-solana-na-b3/)), com índice, gestora e taxa conferidos no material de cada fundo. Depois, os números dos EUA, só com uma fonte de dados de uso permitido. Linkar `/artigos/etf-de-bitcoin-o-que-e-e-como-funciona-no-brasil`.

### 14. Glossário com página por termo

- **Impacto:** médio a alto. **Esforço:** médio.
- **Por que funciona lá fora:** a River tem cerca de 650 termos, cada um com URL própria e "Related Terms" ([glossário](https://river.com/learn/terms/)); a Binance tem 310 ([academy](https://www.binance.com/pt-BR/academy)); a Bitcoin Magazine tem "Glossary" no menu ([página](https://bitcoinmagazine.com/glossary)).
- **Como fazer no Brasil:** manter `/glossario#termo` e criar página própria só para os termos com busca e texto suficiente (halving, seed, sats, hodl, ETF, stablecoin), cada uma com definição, exemplo em reais, termos relacionados e link para o artigo pilar. Termo de duas linhas continua só como âncora.

### 15. Assistente "qual carteira escolher"

- **Impacto:** médio. **Esforço:** médio.
- **Por que funciona lá fora:** o "Escolha sua carteira" do Bitcoin.org filtra em 4 etapas e dá selos por critério (controle, validação, transparência, ambiente, privacidade, taxas) ([página](https://bitcoin.org/pt_BR/escolha-sua-carteira)).
- **Como fazer no Brasil:** 4 perguntas (quanto vai guardar, celular ou computador, experiência, quer carteira de hardware) que levam ao artigo `/artigos/carteira-de-bitcoin-qual-escolher` e aos produtos da `/loja`, com o lembrete fixo de comprar de vendedor oficial e nunca aceitar aparelho com seed já preenchida.

### 16. Indicadores de ciclo (rainbow chart, Pi Cycle, Mayer)

- **Impacto:** médio (muita busca, público fiel). **Esforço:** médio.
- **Por que funciona lá fora:** LookIntoBitcoin reúne "Bitcoin: Pi Cycle Top Indicator", "Stock-to-Flow Model", "Bitcoin Rainbow Price Chart Indicator" e "MVRV Z-Score", com alertas por e-mail ([charts](https://www.lookintobitcoin.com/charts/)); Checkonchain tem "Mayer Multiple" e "Realized Price and MVRV" ([charts](https://charts.checkonchain.com/)); a Blockchaincenter mantém o rainbow chart com aviso "There is no scientific basis underpinning it" ([página](https://www.blockchaincenter.net/en/bitcoin-rainbow-chart/)).
- **Como fazer no Brasil:** página educativa (rota nova em `/ferramentas`) com rainbow chart e Mayer Multiple calculados do histórico que o site já tem (`public/data/btc-historico.json` e velas diárias da Binance), sempre com o aviso de que não é previsão nem recomendação. MVRV fica para depois: a API comunitária da Coin Metrics entrega o dado sem chave, mas a documentação liga esses dados à licença CC BY-NC 4.0, não comercial ([documentação](https://docs.coinmetrics.io/packages/coin-metrics-community-data)), o que não combina com site com anúncio e afiliado sem licença paga.

### 17. Alertas de preço

- **Impacto:** médio. **Esforço:** médio a alto.
- **Por que funciona lá fora:** CoinMarketCap tem "AI Alerts" ([site](https://coinmarketcap.com/)), The Block oferece extensão com "price alerts for the coins you follow" ([site](https://www.theblock.co/)), Blockworks manda alertas por Slack, Telegram e webhooks ([site](https://blockworks.com/)) e LookIntoBitcoin, por e-mail ([charts](https://www.lookintobitcoin.com/charts/)).
- **Como fazer no Brasil:** começar por um canal no Telegram com fechamento diário e aviso de variação forte (custo baixo), depois alerta por e-mail com valor escolhido pelo leitor (precisa de banco de dados e rotina agendada).

### 18. Mapa de lugares que aceitam bitcoin no Brasil

- **Impacto:** médio. **Esforço:** médio.
- **Por que funciona lá fora:** o BTC Map usa o OpenStreetMap, tem apps e página por país, e qualquer pessoa cadastra um local ([site](https://btcmap.org/), [Brasil](https://btcmap.org/country/br)). A API pública do BTC Map lista comunidades brasileiras como Bitcoin Beach Brazil (Jericoacoara), Porto Alegre Go BTC, Canoas Go BTC, FloripaCoin e Bitcoiner Acreano ([API](https://api.btcmap.org/v3/areas?updated_since=2020-01-01T00:00:00Z&limit=5000)).
- **Como fazer no Brasil:** página com o mapa do Brasil, lista por cidade e link para cadastrar um local no BTC Map. Os dados do OpenStreetMap são ODbL e exigem crédito visível e aviso da licença ([licença](https://www.openstreetmap.org/copyright)); conferir também a política de uso do provedor de mapa escolhido.

### 19. Vídeo curto diário e podcast semanal

- **Impacto:** médio a alto. **Esforço:** alto.
- **Por que funciona lá fora:** CoinDesk tem "CoinDesk Daily", "Shorts" e uma rede de podcasts ([site](https://www.coindesk.com/)); a Bitcoin Magazine faz programa ao vivo de segunda a sexta (BMTV) ([site](https://bitcoinmagazine.com/)). No Brasil, o Crypto Storm do Money Times está no ar desde 2019 ([episódio 1](https://www.moneytimes.com.br/crypto-storm-o-podcast-do-money-times-feito-por-quem-esta-dentro-do-mercado/)) e a Exame usa web stories ([seção](https://exame.com/future-of-money/)).
- **Como fazer no Brasil:** vídeo vertical de 60 segundos com o Bruno lendo o fechamento do dia (o mesmo roteiro da newsletter), publicado no YouTube Shorts e no Instagram com link para `/bitcoin`. Podcast semanal só quando a newsletter estiver rodando.

## 4. Boas práticas de SEO para cripto em português (confirmadas)

- **Dados no HTML do servidor.** O Google diz que renderização no servidor ou pré-renderização "is still a great idea" porque deixa o site mais rápido e "not all bots can run JavaScript", e que a página pode esperar na fila de renderização ([Google](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)). Na prática: CoinDesk, Kraken e Decrypt entregam o preço já no HTML; no Portal do Bitcoin, a calculadora vinha com "R$ 0,00" e a página de cotações sem números no HTML. O nosso `next.revalidate` com atualização no navegador é o caminho certo; o mesmo vale para FAQ, tabelas e calculadoras com um exemplo pronto.
- **Schema útil e honesto.** Article com `author` (Person, com `author.url`), `datePublished` e `dateModified` ([Google](https://developers.google.com/search/docs/appearance/structured-data/article)); ProfilePage na página do autor, que o Google lista como uso válido para "An author page on a news site" ([Google](https://developers.google.com/search/docs/appearance/structured-data/profile-page)); BreadcrumbList como CoinDesk e Kraken usam. FAQPage pode ficar, mas o resultado rico de FAQ hoje só aparece para "well-known, authoritative government and health websites" ([Google](https://developers.google.com/search/blog/2023/08/howto-faq-changes)): o FAQ vale pelo texto, não pelo destaque.
- **Atualização de verdade.** Data visível ("Publicado" e "Atualizado"), igual à do schema, e só a data da página, não a do fato narrado ([Google](https://developers.google.com/search/docs/appearance/publication-dates)). No sitemap, o Google usa `<lastmod>` só quando ele é "consistently and verifiably" correto e ignora `priority` e `changefreq` ([Google](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)). Não trocar a data sem mudança real.
- **E-E-A-T e YMYL.** Cripto é dinheiro, portanto YMYL: o conteúdo "must be highly accurate and consistent with established expert consensus", e de todos os aspectos "trust is most important". Autoria clara (assinatura e página do autor, sem perfil inventado) e explicação de como o conteúdo foi feito quando houver automação ([Google](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)). Para nós: fonte linkada em todo número, aviso de risco, política editorial e página de afiliados visíveis, nunca previsão de preço.
- **Sem conteúdo em massa.** Páginas geradas em série para ranquear (conversores, moedas, termos) entram em "scaled content abuse" se não ajudam o leitor ([Google](https://developers.google.com/search/docs/essentials/spam-policies)). Cada página nova precisa de dado ou texto próprio.
- **Google Notícias e Discover.** Não há mais cadastro: conteúdo que segue as políticas é "automatically eligible for consideration" no Google Notícias e as páginas de publicação são geradas automaticamente ([Google](https://support.google.com/news/publisher-center/answer/15898024)). Para o Discover: imagem de pelo menos 1200 px de largura, `max-image-preview:large` e conteúdo atual ([Google](https://developers.google.com/search/docs/appearance/google-discover)).
- **Velocidade e estabilidade.** Metas do Core Web Vitals: LCP em até 2,5 s, INP abaixo de 200 ms e CLS abaixo de 0,1 ([Google](https://developers.google.com/search/docs/appearance/core-web-vitals)). Com preço mudando a cada 10 s, reservar o espaço dos números (fonte com algarismos de largura fixa) evita deslocamento de layout.

## 5. O que não copiar

- Páginas de previsão de preço (a Kraken tem uma em [/price-prediction](https://www.kraken.com/price-prediction)) e widgets de mercado de previsão (o Decrypt mostra apostas em faixas de preço na [página do BTC](https://decrypt.co/price/bitcoin)): batem de frente com a regra de nunca prever preço.
- Recompensa em cripto por quiz ("Aprenda e Ganhe" da Binance): para nós, quiz com certificado basta.
- Botão de compra de cripto dentro do conteúdo (o "Buy Bitcoin on Solana" do Decrypt): o único botão de compra do blog é o da Loja.
- Tabela de taxas sem manutenção (a do Cointrader Monitor está parada desde 2022): se não houver rotina mensal de conferência, melhor não publicar.

import type { GlossaryTerm } from "@/lib/types";

export const glossary: GlossaryTerm[] = [
  {
    slug: "airdrop",
    term: "Airdrop",
    definition:
      "Distribuição gratuita de tokens para carteiras, usada por projetos para divulgar uma moeda nova ou recompensar os primeiros usuários. É também uma das iscas de golpe mais comuns: o site falso de airdrop pede para conectar a carteira e assinar uma transação que, na verdade, autoriza o roubo das moedas.",
    related: [{ label: "Golpes com criptomoedas", href: "/artigos/golpes-com-criptomoedas-como-se-proteger" }],
  },
  {
    slug: "alavancagem",
    term: "Alavancagem",
    definition:
      "Operar com dinheiro emprestado pela plataforma para multiplicar o tamanho da aposta, o que multiplica na mesma proporção os ganhos e as perdas. Com alavancagem de 10x, por exemplo, uma variação de cerca de 10% contra a posição já pode consumir toda a margem depositada.",
    related: [
      { label: "Aviso de risco", href: "/aviso-de-risco" },
      { label: "Riscos antes de investir", href: "/artigos/bitcoin-vale-a-pena-riscos-antes-de-investir" },
    ],
  },
  {
    slug: "altcoin",
    term: "Altcoin",
    definition:
      "Qualquer criptomoeda que não seja o bitcoin, da junção de “alternative” com “coin” (moeda alternativa, em inglês). Ether, solana, XRP e dogecoin são exemplos de altcoins.",
    related: [
      { label: "Ranking das criptomoedas", href: "/mercado" },
      { label: "Bitcoin ou Ethereum", href: "/artigos/bitcoin-ou-ethereum-diferencas" },
    ],
  },
  {
    slug: "asic",
    term: "ASIC",
    definition:
      "Sigla em inglês para circuito integrado de aplicação específica: no mundo cripto, a máquina feita só para minerar, como os modelos Antminer da Bitmain. Faz trilhões de cálculos por segundo, muito mais que um computador comum, e consome alguns milhares de watts sem parar.",
    related: [{ label: "Como funciona a mineração", href: "/artigos/mineracao-de-bitcoin-como-funciona" }],
  },
  {
    slug: "ath",
    term: "ATH (máxima histórica)",
    definition:
      "Abreviação de “all-time high”: o maior preço já registrado por um ativo. Comprar movido pela euforia de uma nova máxima é um erro comum, porque o bitcoin já teve quedas fortes depois de topos, como após dezembro de 2017 e novembro de 2021.",
    related: [
      { label: "Ciclos do Bitcoin", href: "/artigos/ciclos-do-bitcoin-o-que-os-halvings-mostram" },
      { label: "Se eu tivesse investido", href: "/ferramentas/se-eu-tivesse-investido" },
    ],
  },
  {
    slug: "autocustodia",
    term: "Autocustódia",
    definition:
      "Guardar você mesmo as chaves privadas dos seus bitcoins, numa carteira própria, em vez de deixá-los com uma exchange. Dá controle total, mas também responsabilidade total: sem backup da seed, ninguém consegue recuperar as moedas.",
    related: [
      { label: "Not your keys, not your coins", href: "/artigos/autocustodia-not-your-keys-not-your-coins" },
      { label: "Como escolher uma carteira", href: "/artigos/carteira-de-bitcoin-qual-escolher" },
    ],
  },
  {
    slug: "baleia",
    term: "Baleia",
    definition:
      "Pessoa, empresa ou carteira que detém uma quantidade muito grande de uma criptomoeda, a ponto de uma compra ou venda dela poder mexer no preço. Há quem acompanhe as movimentações de baleias na blockchain como sinal de mercado, mas isso não permite prever o preço.",
    related: [{ label: "Ranking das criptomoedas", href: "/mercado" }],
  },
  {
    slug: "bear-market",
    term: "Bear market (mercado de baixa)",
    definition:
      "Período longo de queda de preços e pessimismo no mercado, em referência ao urso, que ataca de cima para baixo. No bitcoin, boa parte de 2018 e de 2022 foi de bear market.",
    related: [
      { label: "Ciclos do Bitcoin", href: "/artigos/ciclos-do-bitcoin-o-que-os-halvings-mostram" },
      { label: "Índice de medo e ganância", href: "/ferramentas/medo-e-ganancia" },
    ],
  },
  {
    slug: "blockchain",
    term: "Blockchain",
    definition:
      "Registro público de transações organizado em blocos encadeados em ordem, em que cada bloco carrega uma referência criptográfica ao anterior. Milhares de computadores guardam cópias e conferem as regras, o que torna praticamente impossível alterar o histórico sem que a rede perceba.",
    related: [
      { label: "O que é Bitcoin e como funciona", href: "/artigos/o-que-e-bitcoin-e-como-funciona" },
      { label: "Como funciona a mineração", href: "/artigos/mineracao-de-bitcoin-como-funciona" },
    ],
  },
  {
    slug: "bloco",
    term: "Bloco",
    definition:
      "Pacote de transações confirmadas que entra de uma vez na blockchain. No Bitcoin, um bloco novo é minerado em média a cada 10 minutos, e a altura do bloco é o número de blocos desde o primeiro.",
    related: [
      { label: "Altura do bloco ao vivo", href: "/bitcoin" },
      { label: "Como funciona a mineração", href: "/artigos/mineracao-de-bitcoin-como-funciona" },
    ],
  },
  {
    slug: "bloco-genese",
    term: "Bloco gênese",
    definition:
      "O primeiro bloco da blockchain do Bitcoin (bloco 0), minerado por Satoshi Nakamoto em 3 de janeiro de 2009. Ele traz escrita a manchete do jornal The Times daquele dia, “Chancellor on brink of second bailout for banks”, e a recompensa de 50 BTC dele não pode ser gasta.",
    related: [
      { label: "A mensagem do bloco gênese", href: "/artigos/bloco-genese-a-mensagem-escondida-no-primeiro-bloco" },
      { label: "Memórias do Bitcoin", href: "/historia" },
    ],
  },
  {
    slug: "bull-market",
    term: "Bull market (mercado de alta)",
    definition:
      "Período longo de alta de preços e otimismo no mercado, em referência ao touro, que ataca de baixo para cima com os chifres. É a fase em que o FOMO costuma levar muita gente a comprar caro.",
    related: [
      { label: "Ciclos do Bitcoin", href: "/artigos/ciclos-do-bitcoin-o-que-os-halvings-mostram" },
      { label: "Índice de medo e ganância", href: "/ferramentas/medo-e-ganancia" },
    ],
  },
  {
    slug: "capitalizacao-de-mercado",
    term: "Capitalização de mercado",
    definition:
      "Preço de uma criptomoeda multiplicado pela quantidade de unidades em circulação, usado para comparar o tamanho das moedas. Exemplo hipotético: uma moeda com 10 milhões de unidades cotada a R$ 5 tem capitalização de R$ 50 milhões.",
    related: [{ label: "Ranking das criptomoedas", href: "/mercado" }],
  },
  {
    slug: "carteira",
    term: "Carteira (wallet)",
    definition:
      "Aplicativo ou aparelho que guarda as chaves privadas e permite enviar e receber criptomoedas. As moedas em si ficam registradas na blockchain: a carteira guarda o acesso a elas.",
    related: [
      { label: "Qual carteira escolher", href: "/artigos/carteira-de-bitcoin-qual-escolher" },
      { label: "Como guardar a seed", href: "/artigos/seed-phrase-como-guardar-as-palavras-de-recuperacao" },
    ],
  },
  {
    slug: "carteira-fria",
    term: "Carteira fria",
    definition:
      "Carteira em que as chaves privadas são geradas e guardadas fora da internet, como numa hardware wallet. É a opção mais segura para guardar valores maiores por muito tempo, porque um vírus no computador ou no celular não alcança as chaves.",
    related: [
      { label: "Qual carteira escolher", href: "/artigos/carteira-de-bitcoin-qual-escolher" },
      { label: "Melhores carteiras de hardware", href: "/artigos/melhores-carteiras-de-hardware-para-bitcoin" },
    ],
  },
  {
    slug: "carteira-quente",
    term: "Carteira quente",
    definition:
      "Carteira com as chaves num aparelho conectado à internet, como um aplicativo de celular ou uma extensão do navegador. É prática para pagamentos e valores pequenos, mas fica mais exposta a vírus, phishing e roubo do aparelho.",
    related: [
      { label: "Qual carteira escolher", href: "/artigos/carteira-de-bitcoin-qual-escolher" },
      { label: "Lightning Network", href: "/artigos/lightning-network-o-que-e-e-como-usar" },
    ],
  },
  {
    slug: "cbdc",
    term: "CBDC (moeda digital de banco central)",
    definition:
      "Versão digital do dinheiro oficial de um país, emitida e controlada pelo banco central, sem a descentralização do bitcoin. O e-CNY, da China, é um dos exemplos mais conhecidos; no Brasil, o projeto do Banco Central nessa linha é o Drex, que mudou de rumo em 2025 e não tem versão para o público.",
    related: [
      { label: "Regulação no Brasil", href: "/artigos/regulacao-das-criptomoedas-no-brasil-banco-central" },
      { label: "O que é Bitcoin", href: "/artigos/o-que-e-bitcoin-e-como-funciona" },
    ],
  },
  {
    slug: "chave-privada",
    term: "Chave privada",
    definition:
      "Número secreto que dá o poder de gastar os bitcoins de uma carteira, como uma senha que não pode ser trocada. Se ela vazar, qualquer um pode levar as moedas; se for perdida sem backup, elas ficam inacessíveis para sempre.",
    related: [
      { label: "Autocustódia", href: "/artigos/autocustodia-not-your-keys-not-your-coins" },
      { label: "Como guardar a seed", href: "/artigos/seed-phrase-como-guardar-as-palavras-de-recuperacao" },
    ],
  },
  {
    slug: "chave-publica",
    term: "Chave pública",
    definition:
      "Código derivado da chave privada que serve para gerar endereços e para a rede conferir as assinaturas das suas transações. Pode ser compartilhada sem risco, porque na prática não há como descobrir a chave privada a partir dela.",
    related: [{ label: "O que é Bitcoin e como funciona", href: "/artigos/o-que-e-bitcoin-e-como-funciona" }],
  },
  {
    slug: "contrato-inteligente",
    term: "Contrato inteligente (smart contract)",
    definition:
      "Programa gravado numa blockchain que executa sozinho quando certas condições são cumpridas, sem intermediário. O Ethereum popularizou a ideia: é com contratos inteligentes que funcionam DeFi, NFTs e boa parte dos tokens.",
    related: [
      { label: "O que é Ethereum", href: "/artigos/o-que-e-ethereum-e-como-funciona" },
      { label: "Ethereum (ETH)", href: "/moedas/ethereum" },
    ],
  },
  {
    slug: "corretora-p2p",
    term: "Corretora P2P",
    definition:
      "Modalidade em que você compra ou vende cripto direto com outra pessoa (P2P, de “peer-to-peer”, de pessoa para pessoa), e a plataforma em geral segura as moedas até o pagamento ser confirmado. Exige atenção redobrada com golpes, como comprovante de Pix falso ou pedido para negociar fora da plataforma.",
    related: [
      { label: "Como comprar bitcoin no Brasil", href: "/artigos/como-comprar-bitcoin-no-brasil-passo-a-passo" },
      { label: "Golpes com criptomoedas", href: "/artigos/golpes-com-criptomoedas-como-se-proteger" },
    ],
  },
  {
    slug: "custodia",
    term: "Custódia",
    definition:
      "Quando um terceiro, como uma exchange, guarda as chaves privadas por você: o saldo aparece no aplicativo, mas quem controla as moedas é a empresa. É mais simples, porém depende da saúde e da honestidade dela, como mostraram os colapsos da Mt. Gox, em 2014, e da FTX, em 2022.",
    related: [
      { label: "Autocustódia", href: "/artigos/autocustodia-not-your-keys-not-your-coins" },
      { label: "O colapso da Mt. Gox", href: "/artigos/mt-gox-o-colapso-da-maior-exchange-de-bitcoin" },
    ],
  },
  {
    slug: "dca",
    term: "DCA (aportes regulares)",
    definition:
      "Sigla em inglês para “dollar cost averaging”: investir um valor fixo em intervalos regulares, suba ou caia o preço, em vez de tentar acertar o melhor momento. Exemplo: comprar R$ 200 em bitcoin todo dia 5 do mês.",
    related: [
      { label: "DCA em bitcoin", href: "/artigos/dca-em-bitcoin-como-investir-todo-mes" },
      { label: "Calculadora de DCA", href: "/ferramentas/calculadora-dca" },
    ],
  },
  {
    slug: "defi",
    term: "DeFi (finanças descentralizadas)",
    definition:
      "Serviços financeiros feitos por contratos inteligentes, sem banco no meio: trocar moedas, emprestar, tomar empréstimo com cripto como garantia. A Uniswap, que troca tokens no Ethereum, é um exemplo; os riscos incluem falhas no código, ataques hackers e projetos fraudulentos.",
    related: [
      { label: "O que é Ethereum", href: "/artigos/o-que-e-ethereum-e-como-funciona" },
      { label: "Uniswap (UNI)", href: "/moedas/uniswap" },
    ],
  },
  {
    slug: "dificuldade",
    term: "Dificuldade de mineração",
    definition:
      "Medida de quão difícil é achar um bloco novo, recalculada pela rede do Bitcoin a cada 2.016 blocos (cerca de duas semanas). Se mais máquinas entram e os blocos saem rápido demais, a dificuldade sobe; se máquinas desligam e os blocos demoram, ela cai, para manter a média perto de 10 minutos por bloco.",
    related: [
      { label: "Como funciona a mineração", href: "/artigos/mineracao-de-bitcoin-como-funciona" },
      { label: "Próximo ajuste ao vivo", href: "/bitcoin" },
    ],
  },
  {
    slug: "dominancia",
    term: "Dominância do Bitcoin",
    definition:
      "Fatia do bitcoin no valor total de todas as criptomoedas, em porcentagem. Se o mercado cripto inteiro valesse 100 e o bitcoin valesse 60, a dominância seria de 60%.",
    related: [{ label: "Ranking das criptomoedas", href: "/mercado" }],
  },
  {
    slug: "drex",
    term: "Drex",
    definition:
      "Projeto do Banco Central do Brasil antes chamado de real digital, testado desde 2023 com bancos e fintechs numa blockchain privada. Em 2025, o BC mudou o rumo: anunciou uma primeira entrega sem blockchain, restrita a instituições financeiras e focada em conferir garantias de crédito (gravames), e em novembro desligou a plataforma de testes, por não conseguir garantir a privacidade e o sigilo bancário exigidos. O Drex não é uma criptomoeda e, até aqui, não tem versão para uso direto do público.",
    related: [{ label: "Regulação no Brasil", href: "/artigos/regulacao-das-criptomoedas-no-brasil-banco-central" }],
  },
  {
    slug: "endereco",
    term: "Endereço",
    definition:
      "Sequência de letras e números usada para receber criptomoedas, que funciona como uma chave Pix da carteira. No Bitcoin, os endereços mais atuais começam com “bc1”; antes de enviar, confira o começo e o fim do endereço colado, porque há vírus que trocam o texto copiado.",
    related: [{ label: "Qual carteira escolher", href: "/artigos/carteira-de-bitcoin-qual-escolher" }],
  },
  {
    slug: "etf",
    term: "ETF (fundo negociado em bolsa)",
    definition:
      "Fundo que acompanha o preço de um ativo ou índice e é comprado como uma ação, pela corretora de valores. Nos EUA, a SEC aprovou os primeiros ETFs à vista de bitcoin em 10 de janeiro de 2024; na B3, ETFs de cripto regulados pela CVM são negociados desde 2021, quando estreou o HASH11. Quem compra cota de ETF tem exposição ao preço, mas não guarda chaves nem pode sacar os bitcoins para uma carteira.",
    related: [{ label: "ETF de bitcoin no Brasil", href: "/artigos/etf-de-bitcoin-o-que-e-e-como-funciona-no-brasil" }],
  },
  {
    slug: "exchange",
    term: "Exchange (corretora de criptomoedas)",
    definition:
      "Empresa que intermedeia a compra e a venda de criptomoedas, em geral com depósito em reais por Pix. No Brasil, elas passaram a ser reguladas pelo Banco Central, que exige autorização para funcionar, com regras em vigor desde fevereiro de 2026. Moedas deixadas na exchange ficam sob a custódia dela.",
    related: [
      { label: "Como escolher uma corretora", href: "/artigos/exchange-de-criptomoedas-como-escolher-uma-corretora" },
      { label: "Como comprar bitcoin no Brasil", href: "/artigos/como-comprar-bitcoin-no-brasil-passo-a-passo" },
    ],
  },
  {
    slug: "fomo",
    term: "FOMO",
    definition:
      "Sigla em inglês para “fear of missing out”, o medo de ficar de fora. É o impulso de comprar depressa só porque o preço já subiu muito e todo mundo está falando disso, um dos jeitos mais comuns de comprar no topo.",
    related: [
      { label: "Riscos antes de investir", href: "/artigos/bitcoin-vale-a-pena-riscos-antes-de-investir" },
      { label: "Índice de medo e ganância", href: "/ferramentas/medo-e-ganancia" },
    ],
  },
  {
    slug: "fork",
    term: "Fork",
    definition:
      "Bifurcação, em inglês: uma mudança nas regras de uma blockchain ou uma cópia do código de um projeto para criar outro. A Litecoin, por exemplo, nasceu em 2011 de uma cópia do código do Bitcoin. Nas mudanças de regras, pode ser um soft fork, compatível com as versões antigas, ou um hard fork, que pode dividir a rede em duas moedas.",
    related: [
      { label: "Bitcoin Cash (BCH)", href: "/moedas/bitcoin-cash" },
      { label: "Litecoin (LTC)", href: "/moedas/litecoin" },
    ],
  },
  {
    slug: "fud",
    term: "FUD",
    definition:
      "Sigla em inglês para “fear, uncertainty and doubt” (medo, incerteza e dúvida): notícias, boatos ou opiniões negativas que espalham pânico no mercado. Nem toda crítica é FUD; o caminho é conferir a fonte antes de agir.",
    related: [{ label: "Índice de medo e ganância", href: "/ferramentas/medo-e-ganancia" }],
  },
  {
    slug: "futuros",
    term: "Futuros (contratos futuros)",
    definition:
      "Contratos em que as partes combinam comprar ou vender um ativo numa data futura por um preço definido hoje. No mercado cripto, os futuros (incluindo os perpétuos, que não vencem) costumam ser operados com alavancagem e servem tanto para proteção quanto para especulação, com risco alto para iniciantes.",
    related: [{ label: "Aviso de risco", href: "/aviso-de-risco" }],
  },
  {
    slug: "gas",
    term: "Gas",
    definition:
      "Taxa paga na rede Ethereum para executar transações e contratos inteligentes, cobrada em ETH. O valor sobe quando a rede está congestionada e é medido em gwei, a fração de um bilionésimo de ETH.",
    related: [
      { label: "O que é Ethereum", href: "/artigos/o-que-e-ethereum-e-como-funciona" },
      { label: "Ethereum (ETH)", href: "/moedas/ethereum" },
    ],
  },
  {
    slug: "halving",
    term: "Halving",
    definition:
      "Corte pela metade da recompensa dos mineradores, que acontece a cada 210.000 blocos (cerca de quatro anos) e reduz o ritmo de criação de bitcoins novos. O último foi em abril de 2024, quando a recompensa caiu de 6,25 para 3,125 BTC por bloco; o próximo está previsto para 2028, no bloco 1.050.000.",
    related: [
      { label: "Guia do halving", href: "/artigos/halving-do-bitcoin-o-que-e-e-quando-e-o-proximo" },
      { label: "Contagem regressiva", href: "/ferramentas/halving" },
      { label: "Ciclos do Bitcoin", href: "/artigos/ciclos-do-bitcoin-o-que-os-halvings-mostram" },
    ],
  },
  {
    slug: "hard-fork",
    term: "Hard fork",
    definition:
      "Mudança de regras incompatível com as versões antigas do software: quem não atualiza fica numa cadeia separada. Foi assim que nasceu o Bitcoin Cash, em agosto de 2017, a partir de uma divisão da rede do Bitcoin.",
    related: [{ label: "Bitcoin Cash (BCH)", href: "/moedas/bitcoin-cash" }],
  },
  {
    slug: "hardware-wallet",
    term: "Hardware wallet (carteira de hardware)",
    definition:
      "Aparelho físico, em geral do tamanho de um pen drive, que guarda as chaves privadas fora da internet e assina as transações dentro dele, como os modelos da Ledger e da Trezor. Compre sempre do fabricante ou de vendedor autorizado e nunca aceite um aparelho que já venha com seed preenchida, um golpe conhecido.",
    related: [
      { label: "Melhores carteiras de hardware", href: "/artigos/melhores-carteiras-de-hardware-para-bitcoin" },
      { label: "Loja do Bitcoin", href: "/loja" },
      { label: "Como guardar a seed", href: "/artigos/seed-phrase-como-guardar-as-palavras-de-recuperacao" },
    ],
  },
  {
    slug: "hashrate",
    term: "Hashrate (taxa de hash)",
    definition:
      "Quantidade de cálculos por segundo que os mineradores fazem na disputa por novos blocos. A rede do Bitcoin é medida em exahashes por segundo (EH/s), ou seja, quintilhões de tentativas por segundo, e quanto maior o hashrate, mais caro fica atacar a rede.",
    related: [{ label: "Como funciona a mineração", href: "/artigos/mineracao-de-bitcoin-como-funciona" }],
  },
  {
    slug: "hodl",
    term: "HODL",
    definition:
      "Gíria para segurar o bitcoin por muito tempo, sem vender nas quedas. Nasceu de um erro de digitação no título “I AM HODLING”, num post do fórum BitcoinTalk de dezembro de 2013, e depois ganhou a leitura “hold on for dear life” (segure como se a vida dependesse disso).",
    related: [{ label: "Riscos antes de investir", href: "/artigos/bitcoin-vale-a-pena-riscos-antes-de-investir" }],
  },
  {
    slug: "indice-medo-e-ganancia",
    term: "Índice de medo e ganância",
    definition:
      "Indicador de 0 a 100 que resume o humor do mercado cripto, de “medo extremo” a “ganância extrema”, combinando dados como volatilidade, volume de negociação, redes sociais e buscas no Google. Mostra o sentimento do momento, não prevê preço.",
    related: [{ label: "Índice ao vivo", href: "/ferramentas/medo-e-ganancia" }],
  },
  {
    slug: "kyc",
    term: "KYC (conheça seu cliente)",
    definition:
      "Sigla em inglês para “know your customer”: a checagem de identidade que a exchange faz no cadastro, com documento, CPF e selfie. No Brasil, ela é exigida de quem presta serviços com ativos virtuais pelas regras de prevenção à lavagem de dinheiro, e as normas do Banco Central para o setor, em vigor desde fevereiro de 2026, ampliam essas exigências. Desconfie de plataforma que promete operar sem nenhuma identificação.",
    related: [
      { label: "Como comprar bitcoin no Brasil", href: "/artigos/como-comprar-bitcoin-no-brasil-passo-a-passo" },
      { label: "Regulação no Brasil", href: "/artigos/regulacao-das-criptomoedas-no-brasil-banco-central" },
    ],
  },
  {
    slug: "lightning-network",
    term: "Lightning Network",
    definition:
      "Rede construída por cima do Bitcoin que usa canais de pagamento entre carteiras para mandar sats em segundos e com taxas em geral muito baixas. Só a abertura e o fechamento dos canais vão para a blockchain; os pagamentos feitos entre uma coisa e outra ficam fora dela.",
    related: [
      { label: "Como usar a Lightning", href: "/artigos/lightning-network-o-que-e-e-como-usar" },
      { label: "O que são sats", href: "/artigos/satoshis-o-que-sao-sats-e-como-converter" },
    ],
  },
  {
    slug: "liquidacao",
    term: "Liquidação",
    definition:
      "Fechamento forçado de uma posição alavancada pela plataforma quando a perda consome a margem depositada. Em dias de queda ou alta brusca, liquidações em cadeia aceleram ainda mais o movimento do preço.",
    related: [{ label: "Aviso de risco", href: "/aviso-de-risco" }],
  },
  {
    slug: "liquidez",
    term: "Liquidez",
    definition:
      "Facilidade de comprar ou vender um ativo rapidamente sem mexer muito no preço. O bitcoin tem muita liquidez; moedas pequenas têm pouca, e uma venda grande pode derrubar a cotação.",
    related: [{ label: "Ranking das criptomoedas", href: "/mercado" }],
  },
  {
    slug: "mempool",
    term: "Mempool",
    definition:
      "Fila das transações que já foram enviadas mas ainda não entraram num bloco. Quando a mempool enche, os mineradores escolhem primeiro quem paga mais taxa, e as transações baratas esperam mais.",
    related: [{ label: "Taxas da rede ao vivo", href: "/bitcoin" }],
  },
  {
    slug: "mineracao",
    term: "Mineração",
    definition:
      "Processo em que computadores especializados competem para registrar o próximo bloco do Bitcoin, gastando energia para resolver um cálculo. Quem vence recebe bitcoins novos (hoje 3,125 BTC por bloco) mais as taxas das transações incluídas.",
    related: [
      { label: "Como funciona a mineração", href: "/artigos/mineracao-de-bitcoin-como-funciona" },
      { label: "Guia do halving", href: "/artigos/halving-do-bitcoin-o-que-e-e-quando-e-o-proximo" },
    ],
  },
  {
    slug: "multisig",
    term: "Multisig (multiassinatura)",
    definition:
      "Carteira que exige mais de uma chave para movimentar as moedas, como no modelo 2 de 3: três chaves guardadas em lugares diferentes, das quais duas precisam assinar. Protege contra a perda ou o roubo de uma chave só, ao custo de uma configuração mais trabalhosa.",
    related: [
      { label: "Autocustódia", href: "/artigos/autocustodia-not-your-keys-not-your-coins" },
      { label: "Como guardar a seed", href: "/artigos/seed-phrase-como-guardar-as-palavras-de-recuperacao" },
    ],
  },
  {
    slug: "nft",
    term: "NFT (token não fungível)",
    definition:
      "Token único registrado numa blockchain, usado como certificado digital de algo específico, como uma arte digital, um item de jogo ou um ingresso. O NFT registra quem tem o token, o que não significa necessariamente ter os direitos autorais da obra.",
    related: [{ label: "O que é Ethereum", href: "/artigos/o-que-e-ethereum-e-como-funciona" }],
  },
  {
    slug: "no",
    term: "Nó (node)",
    definition:
      "Computador que roda o software do Bitcoin, guarda uma cópia da blockchain e confere se cada bloco e transação seguem as regras. Qualquer pessoa pode rodar um nó, por exemplo com o programa Bitcoin Core, e assim verificar as próprias transações sem confiar em terceiros.",
    related: [{ label: "O que é Bitcoin e como funciona", href: "/artigos/o-que-e-bitcoin-e-como-funciona" }],
  },
  {
    slug: "ordem-a-mercado",
    term: "Ordem a mercado",
    definition:
      "Ordem de compra ou venda executada na hora, pelo melhor preço disponível no livro de ofertas. É rápida, mas em moedas com pouca liquidez ou em momentos agitados o preço final pode sair pior que o esperado.",
    related: [{ label: "Como comprar bitcoin no Brasil", href: "/artigos/como-comprar-bitcoin-no-brasil-passo-a-passo" }],
  },
  {
    slug: "ordem-limite",
    term: "Ordem limite",
    definition:
      "Ordem em que você define o preço máximo que aceita pagar na compra, ou o mínimo para vender, e ela só é executada se o mercado chegar lá. Dá controle sobre o preço, mas pode nunca ser executada.",
    related: [{ label: "Como comprar bitcoin no Brasil", href: "/artigos/como-comprar-bitcoin-no-brasil-passo-a-passo" }],
  },
  {
    slug: "phishing",
    term: "Phishing",
    definition:
      "Golpe com site, e-mail, mensagem ou anúncio falso que imita uma exchange, uma carteira ou o suporte de uma empresa para roubar senha, código de verificação ou seed. Nenhum suporte de verdade pede suas palavras de recuperação.",
    related: [
      { label: "Golpes com criptomoedas", href: "/artigos/golpes-com-criptomoedas-como-se-proteger" },
      { label: "Como guardar a seed", href: "/artigos/seed-phrase-como-guardar-as-palavras-de-recuperacao" },
    ],
  },
  {
    slug: "pool-de-mineracao",
    term: "Pool de mineração",
    definition:
      "Grupo de mineradores que junta o poder de processamento das máquinas para achar blocos com mais frequência e divide a recompensa na proporção do trabalho de cada um. Foundry USA e AntPool estão entre as pools mais conhecidas.",
    related: [{ label: "Como funciona a mineração", href: "/artigos/mineracao-de-bitcoin-como-funciona" }],
  },
  {
    slug: "prova-de-participacao",
    term: "Prova de participação (proof of stake)",
    definition:
      "Forma de validar blocos em que os validadores travam moedas como garantia, em vez de gastar energia, e podem perder parte delas se agirem de má-fé. O Ethereum usa esse modelo desde o The Merge, em setembro de 2022, assim como a Cardano.",
    related: [
      { label: "O que é Ethereum", href: "/artigos/o-que-e-ethereum-e-como-funciona" },
      { label: "Bitcoin ou Ethereum", href: "/artigos/bitcoin-ou-ethereum-diferencas" },
      { label: "Cardano (ADA)", href: "/moedas/cardano" },
    ],
  },
  {
    slug: "prova-de-trabalho",
    term: "Prova de trabalho (proof of work)",
    definition:
      "Forma de validar blocos em que os mineradores gastam energia e poder de cálculo para ganhar o direito de registrar o próximo bloco. É o que torna caro fraudar o histórico do Bitcoin, porque reescrever blocos exigiria refazer todo esse trabalho.",
    related: [
      { label: "Como funciona a mineração", href: "/artigos/mineracao-de-bitcoin-como-funciona" },
      { label: "O whitepaper do Bitcoin", href: "/artigos/whitepaper-do-bitcoin-o-documento-que-criou-a-moeda" },
    ],
  },
  {
    slug: "pump-and-dump",
    term: "Pump and dump",
    definition:
      "Esquema em que um grupo compra uma moeda pequena, infla o preço com propaganda em redes sociais e grupos de mensagem e vende tudo no topo. Quem entrou atrás da alta fica com a moeda desvalorizada.",
    related: [{ label: "Golpes com criptomoedas", href: "/artigos/golpes-com-criptomoedas-como-se-proteger" }],
  },
  {
    slug: "rug-pull",
    term: "Rug pull",
    definition:
      "Golpe em que os criadores de um projeto cripto somem com o dinheiro dos investidores, retirando a liquidez ou vendendo de uma vez os tokens que guardavam. O nome vem de “puxar o tapete”, em inglês, e o golpe é comum em tokens novos e sem histórico.",
    related: [{ label: "Golpes com criptomoedas", href: "/artigos/golpes-com-criptomoedas-como-se-proteger" }],
  },
  {
    slug: "satoshi",
    term: "Satoshi (unidade)",
    definition:
      "Menor unidade do bitcoin: 1 satoshi vale 0,00000001 BTC, e 1 BTC tem 100 milhões de satoshis. O nome homenageia Satoshi Nakamoto, o criador da moeda.",
    related: [
      { label: "O que são sats", href: "/artigos/satoshis-o-que-sao-sats-e-como-converter" },
      { label: "Conversor", href: "/ferramentas/conversor" },
    ],
  },
  {
    slug: "satoshi-nakamoto",
    term: "Satoshi Nakamoto",
    definition:
      "Pseudônimo de quem criou o Bitcoin, publicou o whitepaper em 2008 e colocou a rede no ar em janeiro de 2009. A identidade real nunca foi confirmada, e Satoshi parou de se comunicar publicamente em 2011. Estimativas atribuem a Satoshi cerca de 1 milhão de bitcoins minerados no início da rede, que nunca foram movidos.",
    related: [
      { label: "Quem é Satoshi Nakamoto", href: "/artigos/quem-e-satoshi-nakamoto" },
      { label: "O whitepaper do Bitcoin", href: "/artigos/whitepaper-do-bitcoin-o-documento-que-criou-a-moeda" },
    ],
  },
  {
    slug: "sats",
    term: "Sats",
    definition:
      "Forma curta e informal de dizer satoshis, muito usada para falar de valores pequenos sem um monte de zeros. Exemplo: 0,0001 BTC é o mesmo que 10.000 sats.",
    related: [
      { label: "O que são sats", href: "/artigos/satoshis-o-que-sao-sats-e-como-converter" },
      { label: "Conversor", href: "/ferramentas/conversor" },
    ],
  },
  {
    slug: "seed",
    term: "Seed phrase (frase de recuperação)",
    definition:
      "Sequência de 12 ou 24 palavras, num padrão chamado BIP39, que recria todas as chaves da carteira em qualquer aplicativo compatível. Quem tem as palavras tem os bitcoins: anote no papel ou numa placa de metal, nunca fotografe e nunca digite em site, e-mail ou mensagem.",
    related: [
      { label: "Como guardar a seed", href: "/artigos/seed-phrase-como-guardar-as-palavras-de-recuperacao" },
      { label: "Autocustódia", href: "/artigos/autocustodia-not-your-keys-not-your-coins" },
    ],
  },
  {
    slug: "segwit",
    term: "SegWit",
    definition:
      "Atualização do Bitcoin ativada em agosto de 2017 (Segregated Witness) que separa as assinaturas do resto da transação. Aumentou a capacidade dos blocos, baixou o custo de quem usa endereços compatíveis (como os que começam com “bc1q”) e abriu caminho para a Lightning Network.",
    related: [{ label: "Lightning Network", href: "/artigos/lightning-network-o-que-e-e-como-usar" }],
  },
  {
    slug: "soft-fork",
    term: "Soft fork",
    definition:
      "Mudança de regras compatível com as versões antigas do software, em geral deixando as regras mais restritas, sem dividir a rede. SegWit, em 2017, e Taproot, em 2021, foram soft forks do Bitcoin.",
    related: [{ label: "O que é Bitcoin e como funciona", href: "/artigos/o-que-e-bitcoin-e-como-funciona" }],
  },
  {
    slug: "spread",
    term: "Spread",
    definition:
      "Diferença entre o preço de compra e o de venda de um ativo, um custo que muitas vezes vem embutido na cotação dos aplicativos de compra rápida. Exemplo hipotético: se o app vende a R$ 101 e recompra a R$ 99, o spread é de R$ 2, cerca de 2%.",
    related: [
      { label: "Como escolher uma corretora", href: "/artigos/exchange-de-criptomoedas-como-escolher-uma-corretora" },
      { label: "Como comprar bitcoin no Brasil", href: "/artigos/como-comprar-bitcoin-no-brasil-passo-a-passo" },
    ],
  },
  {
    slug: "stablecoin",
    term: "Stablecoin",
    definition:
      "Criptomoeda feita para manter valor estável, em geral atrelada ao dólar, como USDT, USDC e DAI, com reservas em dinheiro e títulos ou com garantia em outras criptos. A paridade pode falhar, como no colapso da TerraUSD (UST) em maio de 2022, e no Brasil as normas do Banco Central em vigor desde fevereiro de 2026 passaram a tratar a compra e a venda de stablecoins atreladas a moeda estrangeira como operação de câmbio.",
    related: [
      { label: "Stablecoins: USDT e USDC", href: "/artigos/stablecoins-o-que-sao-usdt-usdc" },
      { label: "Tether (USDT)", href: "/moedas/tether" },
      { label: "USD Coin (USDC)", href: "/moedas/usd-coin" },
    ],
  },
  {
    slug: "staking",
    term: "Staking",
    definition:
      "Travar moedas numa rede de prova de participação, como o Ethereum, para ajudar a validar blocos e receber recompensas em troca. O rendimento não é garantido: o preço da moeda pode cair, as moedas podem ficar travadas por um tempo e, no staking feito pela exchange, elas ficam sob a custódia dela.",
    related: [
      { label: "O que é Ethereum", href: "/artigos/o-que-e-ethereum-e-como-funciona" },
      { label: "Ethereum (ETH)", href: "/moedas/ethereum" },
    ],
  },
  {
    slug: "taproot",
    term: "Taproot",
    definition:
      "Atualização do Bitcoin ativada em novembro de 2021 que trouxe as assinaturas Schnorr e deixou transações com regras mais complexas, como as de multisig, mais baratas e mais discretas na blockchain. Os endereços Taproot começam com “bc1p”.",
  },
  {
    slug: "taxa-de-rede",
    term: "Taxa de rede",
    definition:
      "Valor pago aos mineradores para incluir uma transação num bloco, medido no Bitcoin em satoshis por byte virtual (sat/vB). Depende do tamanho da transação em dados e da disputa por espaço no bloco, não do valor enviado.",
    related: [
      { label: "Taxas da rede ao vivo", href: "/bitcoin" },
      { label: "Lightning Network", href: "/artigos/lightning-network-o-que-e-e-como-usar" },
    ],
  },
  {
    slug: "token",
    term: "Token",
    definition:
      "Ativo digital criado sobre uma blockchain que já existe, em vez de ter rede própria, como o USDC e o LINK, que circulam no Ethereum. Pode representar uma moeda estável, o direito de voto num projeto, um item de jogo ou um certificado.",
    related: [
      { label: "Chainlink (LINK)", href: "/moedas/chainlink" },
      { label: "Ranking das criptomoedas", href: "/mercado" },
    ],
  },
  {
    slug: "utxo",
    term: "UTXO",
    definition:
      "Sigla em inglês para saída de transação não gasta: cada pedaço de bitcoin que você recebeu e ainda não gastou, como notas separadas na carteira. Exemplo: com duas UTXOs de 0,5 e 0,3 BTC, para enviar 0,6 BTC a carteira usa as duas e devolve o troco de 0,2 BTC, menos a taxa, para um endereço seu.",
  },
  {
    slug: "volatilidade",
    term: "Volatilidade",
    definition:
      "Intensidade com que o preço de um ativo sobe e desce num período. O bitcoin é muito volátil: já caiu mais de 70% depois dos topos de dezembro de 2017 e de novembro de 2021, e nada impede quedas parecidas no futuro.",
    related: [
      { label: "Aviso de risco", href: "/aviso-de-risco" },
      { label: "Riscos antes de investir", href: "/artigos/bitcoin-vale-a-pena-riscos-antes-de-investir" },
      { label: "Bolhas cripto", href: "/mercado/bolhas" },
    ],
  },
  {
    slug: "whitepaper",
    term: "Whitepaper",
    definition:
      "Documento técnico que apresenta um projeto. O do Bitcoin, “Bitcoin: A Peer-to-Peer Electronic Cash System”, tem 9 páginas e foi divulgado por Satoshi Nakamoto numa lista de e-mails de criptografia em 31 de outubro de 2008.",
    related: [
      { label: "O whitepaper do Bitcoin", href: "/artigos/whitepaper-do-bitcoin-o-documento-que-criou-a-moeda" },
      { label: "Memórias do Bitcoin", href: "/historia" },
    ],
  },
];

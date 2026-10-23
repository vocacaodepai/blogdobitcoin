import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "o-que-e-ethereum-e-como-funciona",
  title: "O que é Ethereum e como funciona: contratos, gas e staking",
  seoTitle: "O que é Ethereum e como funciona: guia do ETH",
  excerpt:
    "Entenda o que é Ethereum e como funciona: Vitalik Buterin, contratos inteligentes, gas, o Merge de 2022, staking, as últimas atualizações e os riscos reais.",
  metaDescription:
    "Guia do Ethereum para iniciantes: quem criou, o que são contratos inteligentes, como calcular a taxa de gas, como funciona o staking e quais riscos considerar.",
  category: "altcoins",
  date: "2026-10-22",
  readTime: 8,
  imageQuery: "ethereum coin close up",
  seed: 24,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O Ethereum é uma blockchain que executa programas, os contratos inteligentes, e o ether (ETH) é a moeda que paga cada operação feita nela.",
    "Desde o Merge, em 15 de setembro de 2022, a rede é protegida por staking, e não mais por mineração, com consumo de energia cerca de 99,95% menor.",
    "A flexibilidade traz riscos próprios: falhas em contratos, autorizações maliciosas, golpes de falsa atualização e a volatilidade do preço.",
  ],
  content: `<p>Ethereum é uma blockchain que funciona como um computador mundial: além de registrar quem tem quanto, ela executa programas, os contratos inteligentes. Entender o que é Ethereum e como funciona passa por três ideias: o ether (ETH) paga cada operação, o gas mede esse custo e, desde 2022, o staking protege a rede.</p>
<p>Neste guia você conhece Vitalik Buterin e o lançamento de 2015, vê o que um contrato inteligente faz, aprende a calcular uma taxa de gas, entende o que mudou com o Merge e com as atualizações mais recentes e quais riscos acompanham tudo isso. Para ver o preço do ether em reais enquanto lê, abra a <a href="/moedas/ethereum">cotação do Ethereum ao vivo</a>.</p>

<h2>O que é Ethereum, em linguagem simples</h2>
<p>Ethereum é o nome da rede. Ether, ou ETH, é a moeda que circula nela. Assim como no Bitcoin, milhares de computadores guardam uma cópia do registro e conferem cada transação, sem banco nem empresa no comando. A diferença é que o Ethereum foi desenhado para guardar e rodar código, não só saldos.</p>
<p>Pense num aplicativo que não pertence a ninguém. Uma pessoa escreve as regras, publica na blockchain e, dali em diante, o programa responde a quem interagir com ele, do mesmo jeito para todo mundo. É isso que permite criar tokens, fazer trocas sem corretora no meio e emitir moedas atreladas ao dólar.</p>
<p>O ether costuma aparecer em segundo lugar no <a href="/mercado">ranking das criptomoedas por valor de mercado</a>, atrás do bitcoin. Se você ainda não conhece a base, o guia <a href="/artigos/o-que-e-bitcoin-e-como-funciona">o que é Bitcoin e como funciona</a> explica blockchain, chaves e nós desde o começo.</p>

<h2>Quem criou o Ethereum: de Vitalik Buterin ao lançamento em 2015</h2>
<p>A ideia é do programador russo-canadense Vitalik Buterin, que escrevia sobre Bitcoin e foi um dos fundadores da revista Bitcoin Magazine. Ele achava a linguagem do Bitcoin limitada demais para aplicativos e propôs uma blockchain com uma linguagem de programação completa. Pela <a href="https://ethereum.org/en/ethereum-forks/" rel="noopener noreferrer">linha do tempo oficial do ethereum.org</a>, o whitepaper saiu em 27 de novembro de 2013.</p>
<p>O projeto ganhou cofundadores, como o britânico Gavin Wood, autor da especificação técnica conhecida como Yellow Paper. Em 22 de julho de 2014 começou a venda do ether, que durou 42 dias e era paga em bitcoin. A rede principal entrou no ar em 30 de julho de 2015, numa versão inicial chamada Frontier, voltada para desenvolvedores.</p>
<p>O primeiro grande teste veio em 2016. Um contrato coletivo chamado The DAO foi esvaziado num ataque que levou mais de 3,6 milhões de ETH, e a comunidade decidiu mudar as regras para devolver o dinheiro, num hard fork em 20 de julho de 2016. Parte dos mineradores recusou a mudança e manteve a cadeia antiga, que virou o Ethereum Classic.</p>

<h2>Contratos inteligentes: programas que rodam sozinhos</h2>
<p>Um <a href="/glossario#contrato-inteligente">contrato inteligente</a> é um programa guardado na blockchain que executa sozinho quando alguém chama uma das suas funções. Exemplo simples: um contrato que recebe ether e devolve um token na mesma hora, sem funcionário, sem horário comercial e sem possibilidade de o dono mudar o resultado no meio do caminho.</p>
<p>Esses programas rodam na EVM, a máquina virtual do Ethereum, e costumam ser escritos em Solidity. Depois de publicado, o código em geral não pode ser alterado, a não ser que tenha sido criado com um mecanismo de atualização. É sobre essa base que funcionam os tokens, os NFTs, as corretoras descentralizadas e os serviços de empréstimo sem banco, o chamado <a href="/glossario#defi">DeFi</a>.</p>
<p>Boa parte das stablecoins também vive no Ethereum, como USDT e USDC, explicadas no guia de <a href="/artigos/stablecoins-o-que-sao-usdt-usdc">stablecoins</a>. Para baratear o uso, surgiram as redes de segunda camada, como Arbitrum, Optimism e Base, que juntam muitas transações e registram o resumo na rede principal.</p>

<h2>Gas: quanto custa usar o Ethereum</h2>
<p>Toda operação no Ethereum consome gas, a unidade que mede o trabalho de processamento. A taxa paga é o gas usado multiplicado pela soma de duas partes: a taxa base, definida pela própria rede e queimada (sai de circulação), e a gorjeta, que vai para o validador e ajuda a entrar no próximo bloco. O preço por unidade é cotado em gwei, um bilionésimo de ETH.</p>
<table>
<thead><tr><th>Item do exemplo</th><th>Valor</th></tr></thead>
<tbody>
<tr><td>Gas de uma transferência simples de ETH</td><td>21.000 unidades</td></tr>
<tr><td>Taxa base (hipotética)</td><td>10 gwei</td></tr>
<tr><td>Gorjeta (hipotética)</td><td>2 gwei</td></tr>
<tr><td>Conta</td><td>21.000 x 12 gwei = 252.000 gwei</td></tr>
<tr><td>Taxa total</td><td>0,000252 ETH</td></tr>
<tr><td>Em reais, se 1 ETH custasse R$ 20 mil (hipotético)</td><td>cerca de R$ 5</td></tr>
</tbody>
</table>
<p>O exemplo segue a <a href="https://ethereum.org/en/developers/docs/gas/" rel="noopener noreferrer">documentação oficial sobre gas</a>, que também avisa: a taxa é cobrada mesmo se a transação falhar. A taxa base sobe quando os blocos enchem e cai quando a rede está calma, e uma operação num contrato complexo gasta bem mais gas do que uma transferência. Por isso, confira a estimativa que a carteira mostra antes de confirmar. O verbete de <a href="/glossario#gas">gas</a> no glossário resume os termos.</p>

<h2>The Merge e o staking: como a rede se protege desde 2022</h2>
<p>Até 2022, o Ethereum era protegido por mineração, como o Bitcoin ainda é (o processo está no guia de <a href="/artigos/mineracao-de-bitcoin-como-funciona">mineração de Bitcoin</a>). Em 15 de setembro de 2022, a rede passou pelo Merge e trocou a prova de trabalho pela prova de participação. Segundo a <a href="https://ethereum.org/en/roadmap/merge/" rel="noopener noreferrer">página oficial do Merge</a>, o consumo de energia caiu cerca de 99,95%. A mesma página deixa claro que a mudança não foi feita para baixar as taxas e que a velocidade das transações ficou praticamente igual.</p>
<p>Na prova de participação, quem fecha os blocos são validadores que deixam ether travado como garantia. Pelo <a href="https://ethereum.org/en/staking/" rel="noopener noreferrer">guia oficial de staking</a>, um validador próprio exige pelo menos 32 ETH e, desde a atualização Pectra, pode concentrar até 2.048 ETH. Quem tem menos pode usar serviços em grupo, que aceitam frações, ou o staking oferecido por corretoras.</p>
<p>As recompensas vêm de propor blocos e votar nos blocos dos outros. Validador desligado perde um pouco de ETH, e quem tenta fraudar a rede pode ter parte do depósito destruída, o chamado slashing. Desde abril de 2023 os saques do staking estão liberados. No staking pela corretora, a moeda fica sob a guarda dela, ponto discutido no texto sobre <a href="/artigos/autocustodia-not-your-keys-not-your-coins">autocustódia</a>.</p>

<h2>As atualizações mais recentes do Ethereum</h2>
<p>O Ethereum muda com frequência, sempre por atualizações coordenadas entre os desenvolvedores dos programas que rodam a rede. As principais dos últimos anos, pela linha do tempo do ethereum.org:</p>
<table>
<thead><tr><th>Atualização</th><th>Data</th><th>O que mudou</th></tr></thead>
<tbody>
<tr><td>London</td><td>5 de agosto de 2021</td><td>Nova regra de taxas, com a taxa base queimada</td></tr>
<tr><td>The Merge (Paris)</td><td>15 de setembro de 2022</td><td>Fim da mineração e início da prova de participação</td></tr>
<tr><td>Shapella</td><td>12 de abril de 2023</td><td>Saques do staking liberados</td></tr>
<tr><td>Dencun</td><td>13 de março de 2024</td><td>Blobs, um espaço de dados mais barato para as redes de segunda camada</td></tr>
<tr><td>Pectra</td><td>7 de maio de 2025</td><td>Validadores de até 2.048 ETH e contas comuns capazes de executar código como contratos</td></tr>
<tr><td>Fusaka</td><td>3 de dezembro de 2025</td><td>PeerDAS: cada nó guarda só uma parte dos blobs, abrindo espaço para mais dados</td></tr>
<tr><td>Glamsterdam</td><td>Sem data na rede principal</td><td>Próxima atualização da fila</td></tr>
</tbody>
</table>
<p>Em outubro de 2026, a Fusaka era a atualização mais recente já ativada, e a Glamsterdam aparecia como a próxima, ainda sem data definida para a rede principal. Nenhuma dessas mudanças exige que você faça algo com o ether que já tem na carteira.</p>

<h2>Riscos do Ethereum que você precisa conhecer</h2>
<p>O primeiro risco é o preço: o ether é volátil e pode cair muito em poucas semanas. Nada aqui é recomendação de investimento, e o <a href="/aviso-de-risco">aviso de risco</a> deveria ser lido antes de comprar qualquer criptomoeda.</p>
<p>O segundo vem da própria flexibilidade. Contratos podem ter falhas, como o caso The DAO mostrou, e aplicativos DeFi e pontes entre redes já foram atacados várias vezes. Outro perigo comum é assinar sem ler: um site falso pede para conectar a carteira e aprovar uma permissão que, na prática, libera o acesso aos seus tokens.</p>
<div class="callout-box callout-bad"><span class="callout-label">Nunca faça</span><p>Não acredite em quem pede para atualizar, migrar ou trocar o seu ETH por uma versão nova. O ethereum.org avisa que não existe ETH antigo nem ETH novo: as atualizações da rede não exigem nenhuma ação de quem tem a moeda.</p></div>
<ul class="checklist">
<li>Guarde as palavras de recuperação offline e nunca digite em site nenhum.</li>
<li>Revise o que a carteira pede para assinar e recuse autorizações que você não entende.</li>
<li>Confira a rede escolhida antes de sacar da corretora e faça um envio de teste.</li>
<li>Entenda quem fica com a custódia antes de colocar ETH em staking.</li>
<li>Guarde os comprovantes de compra, venda e recompensas para o Imposto de Renda.</li>
</ul>
<p>Sobre as palavras de recuperação, o guia de <a href="/artigos/seed-phrase-como-guardar-as-palavras-de-recuperacao">como guardar a seed phrase</a> mostra o passo a passo. Os golpes mais comuns estão em <a href="/artigos/golpes-com-criptomoedas-como-se-proteger">golpes com criptomoedas</a>, e a parte da Receita está no guia de <a href="/artigos/como-declarar-bitcoin-no-imposto-de-renda">como declarar criptomoedas no Imposto de Renda</a>.</p>

<h2>Ethereum ou Bitcoin: por onde continuar</h2>
<p>O Ethereum e o Bitcoin resolvem problemas diferentes, e entender essa diferença ajuda a avaliar cada um sem cair em promessa de ganho. A comparação completa, com oferta, consenso, velocidade e riscos lado a lado, está no guia <a href="/artigos/bitcoin-ou-ethereum-diferencas">Bitcoin ou Ethereum: diferenças</a>.</p>
<p>Para fazer contas com o preço de agora, como quanto ether os seus reais compram, use o <a href="/ferramentas/conversor">conversor de criptomoedas para real</a>, que acompanha a cotação ao vivo.</p>`,
  faq: [
    {
      question: "O que é Ethereum e para que serve?",
      answer:
        "Ethereum é uma blockchain que, além de registrar saldos, executa programas chamados contratos inteligentes. Ela serve de base para tokens, stablecoins como USDT e USDC, corretoras descentralizadas, empréstimos sem banco e NFTs. A moeda da rede é o ether (ETH), usado para pagar as taxas de cada operação e como garantia no staking que protege a rede.",
    },
    {
      question: "Quem criou o Ethereum?",
      answer:
        "O Ethereum foi proposto por Vitalik Buterin, programador russo-canadense que escrevia sobre Bitcoin. O whitepaper saiu em novembro de 2013, a venda do ether começou em julho de 2014 e a rede entrou no ar em 30 de julho de 2015. Outros cofundadores participaram do projeto, como Gavin Wood, autor da especificação técnica conhecida como Yellow Paper.",
    },
    {
      question: "O que é gas no Ethereum?",
      answer:
        "Gas é a unidade que mede o processamento de cada operação na rede. A taxa paga é o gas usado vezes a soma da taxa base, que é queimada, com a gorjeta do validador, e o preço é cotado em gwei, um bilionésimo de ETH. Uma transferência simples usa 21.000 unidades de gas, e a taxa é cobrada mesmo se a transação falhar.",
    },
    {
      question: "O que foi o Merge do Ethereum?",
      answer:
        "O Merge foi a atualização de 15 de setembro de 2022 que acabou com a mineração no Ethereum e trocou a prova de trabalho pela prova de participação. Desde então, a rede é protegida por validadores que deixam ether travado como garantia. O consumo de energia caiu cerca de 99,95%, mas as taxas e a velocidade das transações praticamente não mudaram.",
    },
    {
      question: "Quanto preciso para fazer staking de Ethereum?",
      answer:
        "Para rodar um validador próprio, são necessários pelo menos 32 ETH, e desde a atualização Pectra um validador pode concentrar até 2.048 ETH. Com menos, dá para usar serviços de staking em grupo, que aceitam frações, ou o staking de corretoras, que fica sob a custódia delas. Há risco de penalidade, e o rendimento não é garantido.",
    },
  ],
  quiz: [
    {
      question: "Em que ano a rede principal do Ethereum entrou no ar?",
      options: ["2009", "2015", "2022"],
      answer: 1,
      explanation: "A rede principal começou em 30 de julho de 2015, com a versão Frontier. Em 2022 veio o Merge, e 2009 é o ano do Bitcoin.",
    },
    {
      question: "O que acontece com a taxa base paga em cada transação no Ethereum?",
      options: ["Vai para o criador da rede", "É queimada e sai de circulação", "Fica guardada no banco"],
      answer: 1,
      explanation: "Desde a atualização London, de 2021, a taxa base é queimada. Só a gorjeta vai para o validador que inclui a transação no bloco.",
    },
    {
      question: "Alguém pede para você atualizar o seu ETH para uma versão nova. O que é isso?",
      options: ["Um passo obrigatório depois de cada atualização", "Um golpe", "Uma exigência da Receita Federal"],
      answer: 1,
      explanation: "As atualizações da rede não exigem nenhuma ação de quem tem ether. Pedidos para migrar ou trocar o ETH são golpe.",
    },
  ],
};

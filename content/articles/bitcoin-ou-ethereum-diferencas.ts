import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "bitcoin-ou-ethereum-diferencas",
  title: "Bitcoin ou Ethereum: diferenças, usos e riscos de cada um",
  seoTitle: "Bitcoin ou Ethereum: diferenças e riscos",
  excerpt:
    "Bitcoin ou Ethereum? Compare em tabela a criação, a oferta, o consenso, o tempo de bloco e os contratos inteligentes, e veja os riscos e usos de cada um.",
  metaDescription:
    "Compare Bitcoin e Ethereum lado a lado: quem criou, limite de moedas, mineração ou staking, velocidade dos blocos, contratos inteligentes e riscos reais.",
  category: "altcoins",
  date: "2026-10-22",
  readTime: 8,
  imageQuery: "bitcoin and ethereum coins",
  seed: 6,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O Bitcoin foi feito para ser dinheiro digital escasso, com teto de 21 milhões, e o Ethereum para rodar programas na blockchain, com o ether pagando o processamento.",
    "O Bitcoin usa mineração por prova de trabalho e blocos de cerca de 10 minutos; o Ethereum usa staking desde setembro de 2022 e blocos de 12 segundos.",
    "Os dois são voláteis, mas os riscos têm formas diferentes: no Ethereum pesam falhas em contratos e regras que mudam mais vezes; no Bitcoin, a programação limitada e a dependência da mineração.",
  ],
  content: `<p>Bitcoin ou Ethereum: as diferenças começam pelo propósito. O Bitcoin, de 2009, foi criado para ser dinheiro digital escasso, com teto de 21 milhões de moedas. O Ethereum, de 2015, é uma plataforma onde rodam programas, os contratos inteligentes, e o ether é o combustível que paga por eles.</p>
<p>Este guia coloca os dois lado a lado numa tabela, explica as diferenças de oferta, consenso e programação, mostra os riscos de cada um e para que cada rede serve na prática. Não é recomendação de compra. As cotações ao vivo ficam em <a href="/bitcoin">preço do Bitcoin hoje</a> e na <a href="/moedas/ethereum">página do Ethereum</a>.</p>

<h2>Bitcoin x Ethereum: a tabela comparativa</h2>
<p>A tabela resume o que mais importa para quem está começando. Os detalhes de cada linha aparecem nas seções seguintes.</p>
<table>
<thead><tr><th>Critério</th><th>Bitcoin (BTC)</th><th>Ethereum (ETH)</th></tr></thead>
<tbody>
<tr><td>Criação</td><td>Whitepaper de Satoshi Nakamoto em outubro de 2008; rede no ar em 3 de janeiro de 2009</td><td>Whitepaper de Vitalik Buterin em novembro de 2013; rede no ar em 30 de julho de 2015</td></tr>
<tr><td>Propósito</td><td>Dinheiro digital ponto a ponto e reserva de valor</td><td>Plataforma para aplicativos e contratos inteligentes</td></tr>
<tr><td>Oferta</td><td>Teto de 21 milhões; cerca de 20,1 milhões emitidos em outubro de 2026</td><td>Sem teto fixo; pouco mais de 122 milhões de ETH em outubro de 2026</td></tr>
<tr><td>Emissão nova</td><td>Cai pela metade a cada 210 mil blocos (halving)</td><td>Recompensa aos validadores, menos o ether queimado nas taxas</td></tr>
<tr><td>Consenso</td><td>Prova de trabalho (mineração)</td><td>Prova de participação (staking) desde setembro de 2022</td></tr>
<tr><td>Tempo de bloco</td><td>Cerca de 10 minutos, em média</td><td>12 segundos por slot</td></tr>
<tr><td>Contratos inteligentes</td><td>Linguagem de script simples, limitada de propósito</td><td>Máquina virtual que roda programas complexos</td></tr>
<tr><td>Menor unidade</td><td>Satoshi (0,00000001 BTC)</td><td>Wei (o gwei, mais usado nas taxas, é um bilionésimo de ETH)</td></tr>
</tbody>
</table>
<p>As datas do Ethereum estão na <a href="https://ethereum.org/en/ethereum-forks/" rel="noopener noreferrer">linha do tempo oficial do ethereum.org</a>. As do Bitcoin estão no texto sobre o <a href="/artigos/whitepaper-do-bitcoin-o-documento-que-criou-a-moeda">whitepaper do Bitcoin</a>, o documento que abriu tudo em 2008.</p>

<h2>Para que cada um foi criado</h2>
<p>Satoshi Nakamoto descreveu o Bitcoin como um sistema de dinheiro eletrônico ponto a ponto: mandar valor de uma pessoa para outra sem banco no meio e sem ninguém capaz de imprimir mais moedas. Por isso a rede muda pouco e devagar. Atualizações como SegWit e <a href="/glossario#taproot">Taproot</a> levaram anos de debate e foram desenhadas para não quebrar as regras antigas.</p>
<p>Vitalik Buterin partiu de outra pergunta. No whitepaper do fim de 2013, ele propôs uma blockchain com uma linguagem de programação completa embutida, em que qualquer pessoa pudesse publicar programas que rodam sozinhos. O ether existe para pagar esse processamento e para garantir a segurança da rede.</p>
<p>Essa diferença de filosofia aparece no ritmo. O Ethereum passou por atualizações grandes quase todo ano, como o Merge em 2022, a Dencun em 2024 e a Pectra e a Fusaka em 2025, e já tem a próxima na fila. Quer conhecer a história completa, de Buterin à troca da mineração pelo staking? Leia <a href="/artigos/o-que-e-ethereum-e-como-funciona">o que é Ethereum e como funciona</a>.</p>

<h2>Oferta: teto de 21 milhões contra emissão sem limite fixo</h2>
<p>No Bitcoin, a regra de emissão é fixa desde o começo. A recompensa dos mineradores cai pela metade a cada 210 mil blocos, mais ou menos a cada quatro anos, e o total nunca passa de 21 milhões, como descreve o <a href="https://en.bitcoin.it/wiki/Controlled_supply" rel="noopener noreferrer">cronograma de oferta da Bitcoin Wiki</a>. Pela conta desse cronograma, cerca de 20,1 milhões já existiam em outubro de 2026. O próximo corte e o histórico dos anteriores estão no guia do <a href="/artigos/halving-do-bitcoin-o-que-e-e-quando-e-o-proximo">halving do Bitcoin</a>.</p>
<p>O Ethereum não tem teto. Pelo <a href="https://etherscan.io/stat/supply" rel="noopener noreferrer">painel de oferta do Etherscan</a>, a rede nasceu com cerca de 72 milhões de ETH, a maior parte vendida numa pré-venda em 2014, e o total passava de 122 milhões em outubro de 2026. A diferença vem das moedas novas pagas a quem protege a rede (mineradores até 2022, validadores depois), descontado o ether queimado em taxas, que já somava cerca de 4,6 milhões.</p>
<p>A queima começou em agosto de 2021, quando uma atualização passou a destruir a taxa base de cada transação. Com isso, a oferta pode crescer ou encolher conforme o uso: rede movimentada queima mais, rede calma queima menos. Para quem compra, a política monetária do ether depende do uso e de decisões futuras da comunidade, enquanto a do bitcoin é praticamente imutável.</p>

<h2>Consenso e tempo de bloco: mineração contra staking</h2>
<p>O Bitcoin usa prova de trabalho. Máquinas especializadas gastam energia testando palpites até achar a solução que fecha o próximo bloco, e a dificuldade se ajusta para manter a média perto de 10 minutos. Atacar a rede exigiria juntar uma fatia enorme desse poder de processamento, o que custa caro em equipamento e energia. Os detalhes, inclusive a conta de luz em reais, estão no guia de <a href="/artigos/mineracao-de-bitcoin-como-funciona">mineração de Bitcoin</a>.</p>
<p>O Ethereum trocou a mineração pela <a href="/glossario#prova-de-participacao">prova de participação</a> em setembro de 2022. Em vez de máquinas, quem valida os blocos são participantes que depositam pelo menos 32 ETH como garantia e podem perder parte dele se agirem de má-fé. O tempo é dividido em slots de 12 segundos, e em cada um um validador é sorteado para propor o bloco, como explica a <a href="https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/" rel="noopener noreferrer">documentação oficial da prova de participação</a>.</p>
<p>Na prática, um pagamento em ether aparece na blockchain bem mais rápido do que um em bitcoin. A segurança, porém, vem de lugares diferentes: no Bitcoin, do custo físico da mineração; no Ethereum, do valor travado em staking.</p>

<h2>Contratos inteligentes: onde o Ethereum vai além</h2>
<p>Um contrato inteligente é um programa guardado na blockchain que executa sozinho quando as condições são atendidas. O Bitcoin tem uma linguagem de script de propósito limitado: ela permite carteiras com várias assinaturas, travas de tempo e canais de pagamento, base da <a href="/artigos/lightning-network-o-que-e-e-como-usar">Lightning Network</a>, mas não foi feita para aplicativos complexos.</p>
<p>No Ethereum, os programas podem ser tão sofisticados quanto o desenvolvedor quiser, desde que paguem o processamento em gas. É isso que sustenta os tokens, as corretoras descentralizadas, os empréstimos sem banco (o chamado DeFi), os NFTs e boa parte das moedas atreladas ao dólar, explicadas no guia de <a href="/artigos/stablecoins-o-que-sao-usdt-usdc">stablecoins como USDT e USDC</a>.</p>
<p>A flexibilidade tem preço. Cada contrato é código escrito por gente, e código pode ter falha. Muitos aplicativos também rodam em redes de segunda camada, que aliviam as taxas mas acrescentam pontes e operadores em que o usuário precisa confiar.</p>

<h2>Riscos de cada um</h2>
<p>Os dois têm o risco que mais pesa no bolso: a volatilidade. Bitcoin e ether podem perder metade do valor em poucos meses, e nada garante recuperação. Antes de colocar dinheiro em qualquer um, leia o <a href="/aviso-de-risco">aviso de risco</a> do site.</p>
<h3>Riscos do Bitcoin</h3>
<ul>
<li>Programação limitada: aplicativos mais complexos dependem de camadas externas, como a Lightning, que têm riscos próprios.</li>
<li>Concentração da mineração em poucos pools grandes e debate permanente sobre o consumo de energia.</li>
<li>Taxas que sobem nos momentos de rede cheia e confirmação mais lenta para valores grandes.</li>
<li>Transação sem estorno: endereço errado ou seed perdida significa dinheiro perdido.</li>
</ul>
<h3>Riscos do Ethereum</h3>
<ul>
<li>Falhas em contratos: um bug ou uma autorização mal assinada pode esvaziar uma carteira, e o caso The DAO, em 2016, chegou a dividir a rede.</li>
<li>Regras que mudam com mais frequência, inclusive as da emissão de moedas.</li>
<li>Staking concentrado em poucos provedores e risco de perder parte do depósito por falha do validador.</li>
<li>Golpes que exploram a complexidade, como sites que pedem para atualizar ou migrar o seu ETH.</li>
</ul>
<p>Os golpes mais comuns com as duas moedas, do falso suporte ao aplicativo clonado, estão no guia sobre <a href="/artigos/golpes-com-criptomoedas-como-se-proteger">golpes com criptomoedas</a>.</p>

<h2>Para que cada um serve na prática</h2>
<p>Quem compra bitcoin costuma buscar uma reserva de valor fora do sistema bancário, ou um jeito de mandar dinheiro para fora sem intermediário. Quem usa Ethereum costuma querer acessar aplicativos: trocar tokens, usar stablecoins, emprestar, comprar NFTs ou testar projetos novos, sempre pagando gas em ether. São usos diferentes, e por isso muita gente tem um, outro ou os dois.</p>
<p>Ter os dois não elimina o risco, porque o mercado cripto costuma subir e cair em bloco. No Brasil, as duas moedas seguem as mesmas regras de tributação, explicadas em <a href="/artigos/imposto-sobre-criptomoedas-no-brasil-quanto-se-paga">quanto se paga de imposto sobre criptomoedas</a>. Também vale cuidado na hora de transferir: bitcoin e ether vivem em redes separadas, e mandar uma moeda para um endereço da outra rede pode significar perda definitiva.</p>
<div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Antes de qualquer transferência entre carteiras ou corretoras, confira se a rede escolhida na tela é a mesma da moeda e mande um valor pequeno de teste primeiro.</p></div>

<h2>Como acompanhar Bitcoin e Ethereum daqui para frente</h2>
<p>A melhor forma de comparar os dois é acompanhar os números sem pressa e sem promessa de ganho. O <a href="/mercado">ranking das criptomoedas em reais</a> mostra o preço, a variação e o valor de mercado de cada moeda, ao vivo.</p>
<p>Se o próximo passo é entender a base de tudo, comece pelo guia <a href="/artigos/o-que-e-bitcoin-e-como-funciona">o que é Bitcoin e como funciona</a> e depois siga para o guia do Ethereum, que detalha gas, staking e as atualizações mais recentes da rede.</p>`,
  faq: [
    {
      question: "Qual a diferença entre Bitcoin e Ethereum?",
      answer:
        "O Bitcoin foi criado para ser dinheiro digital escasso, com teto de 21 milhões de moedas e regras que mudam muito pouco. O Ethereum é uma plataforma para rodar programas na blockchain, os contratos inteligentes, e o ether paga esse processamento. O Bitcoin usa mineração e blocos de cerca de 10 minutos; o Ethereum usa staking e blocos de 12 segundos.",
    },
    {
      question: "O Ethereum tem limite de moedas como o Bitcoin?",
      answer:
        "Não. O Bitcoin tem teto de 21 milhões, mas o Ethereum não tem limite fixo. A rede cria ether novo para pagar os validadores e queima a taxa base de cada transação desde agosto de 2021. Por isso a oferta pode subir ou cair conforme o uso da rede. Em outubro de 2026, o total passava de 122 milhões de ETH.",
    },
    {
      question: "Qual é mais seguro, Bitcoin ou Ethereum?",
      answer:
        "Não existe resposta única, porque os riscos são diferentes. A rede do Bitcoin é mais simples e muda pouco, o que reduz a superfície de falhas. O Ethereum faz muito mais coisas, e cada contrato inteligente pode ter um bug. Para o usuário, os maiores perigos são parecidos nos dois: volatilidade, golpes, perda da seed phrase e envio para o endereço errado.",
    },
    {
      question: "Ainda dá para minerar Ethereum?",
      answer:
        "Não. Desde setembro de 2022 o Ethereum funciona por prova de participação, e os blocos são validados por quem deposita ether como garantia, no chamado staking. Qualquer oferta de máquina ou contrato para minerar ETH hoje deve ser tratada como suspeita. A mineração continua existindo no Bitcoin, que segue usando prova de trabalho.",
    },
    {
      question: "Posso guardar bitcoin e ether na mesma carteira?",
      answer:
        "Muitas carteiras e corretoras aceitam as duas moedas, mas cada uma vive na sua própria rede e tem endereços diferentes. Mandar bitcoin para um endereço de Ethereum, ou o contrário, pode resultar em perda definitiva. Antes de transferir, confira a rede escolhida na tela e faça um envio pequeno de teste antes do valor principal.",
    },
  ],
  quiz: [
    {
      question: "Qual das duas redes tem teto fixo de moedas?",
      options: ["Só o Bitcoin", "Só o Ethereum", "As duas"],
      answer: 0,
      explanation: "O Bitcoin tem teto de 21 milhões. O Ethereum não tem limite fixo: a oferta depende da emissão para validadores e da queima de taxas.",
    },
    {
      question: "Como os blocos do Ethereum são validados desde setembro de 2022?",
      options: ["Por mineração com placas de vídeo", "Por prova de participação (staking)", "Por uma empresa central"],
      answer: 1,
      explanation: "No Merge, o Ethereum trocou a mineração pela prova de participação, em que validadores depositam ETH como garantia.",
    },
  ],
};

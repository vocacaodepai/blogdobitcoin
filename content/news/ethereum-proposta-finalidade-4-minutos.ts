import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "ethereum-proposta-finalidade-4-minutos",
  title: "Ethereum: proposta quer cortar finalidade da rede de 16 para 4 minutos",
  summary:
    "Rascunho protocolado na quarta (21) por Ben Edgington separa os votos dos validadores do Ethereum e mira finalidade quatro vezes mais rápida, ainda sem data.",
  author: "Bruno Danello",
  sourceName: "CoinDesk",
  sourceUrl:
    "https://coindesk.com/tech/2026/10/22/ethereum-s-four-minute-settlement-plan-could-lower-the-cost-of-moving-crypto",
  date: "2026-10-22",
  publishedAt: "2026-10-22T18:40:00-03:00",
  topic: "altcoins",
  imageQuery: "Ethereum logo",
  content: `<p>Pesquisadores do Ethereum protocolaram na quarta-feira (21) um rascunho de proposta que pode cortar o tempo de finalidade da rede de cerca de 16 minutos para perto de 4 minutos. O texto foi enviado ao repositório oficial de EIPs (Ethereum Improvement Proposals, as propostas de melhoria da rede) no GitHub, no <a href="https://github.com/ethereum/EIPs/pull/12566" rel="noopener noreferrer nofollow">pull request 12566</a>, por Ben Edgington, que coordena a pesquisa de finalidade rápida, com Francesco D'Amato, Roberto Saltini, Yann Vonlanthen e Mikhail Kalinin, segundo a <a href="https://coindesk.com/tech/2026/10/22/ethereum-s-four-minute-settlement-plan-could-lower-the-cost-of-moving-crypto" rel="noopener noreferrer nofollow">CoinDesk</a>.</p>
<p>Chamado Decoupled Consensus (consenso desacoplado), o rascunho diz que "a meta inicial é uma redução de pelo menos quatro vezes no tempo até a finalidade, sujeita à escolha de parâmetros e à análise". Não há data de ativação. O próprio Edgington escreveu que "muitos aspectos ainda estão a definir" e que, por ora, o objetivo é só obter um número oficial, o passo que coloca a ideia no processo formal de atualizações do Ethereum; no pull request, um revisor já pediu que o texto receba o número EIP-8453.</p>

<h2>O que é finalidade e por que demora 16 minutos</h2>
<p>Finalidade é o momento em que um bloco não pode mais ser revertido. Antes disso, uma transação já aparece como confirmada, mas ainda existe uma chance, pequena, de a rede reorganizar os blocos mais recentes. Para quem move muito dinheiro, como corretoras e pontes entre redes, essa diferença pesa.</p>
<p>No Ethereum, que usa <a href="/glossario#prova-de-participacao">prova de participação</a>, um bloco só fica final depois de duas rodadas completas de votação de todos os validadores. Num <a href="https://consensus.ethereum.foundation/blog/upgrading-finality-edition-1" rel="noopener noreferrer nofollow">texto publicado em maio no blog de consenso da Ethereum Foundation</a>, Edgington fez a conta: cada rodada, chamada época, tem 32 slots de 12 segundos, então o mínimo é de 768 segundos, perto de 13 minutos, e a espera média de uma transação chega a cerca de 960 segundos, ou 16 minutos.</p>
<p>Existe um atalho em desenvolvimento, a confirmação rápida, que em cerca de 13 segundos indica que um bloco dificilmente será revertido, segundo o mesmo texto. Ela ajuda quem precisa de resposta imediata, mas não tem a garantia completa da finalidade, e serviços que movem valores altos ainda preferem esperar por ela.</p>

<h2>Como a proposta funciona</h2>
<p>Hoje, cada validador dá um único voto que serve para duas coisas ao mesmo tempo: ajudar a escolher o próximo bloco e travar de vez os blocos mais antigos. A proposta separa esse voto em dois, segundo a CoinDesk, e deixa a etapa de trava rodar num relógio mais rápido, que os desenvolvedores poderiam apertar aos poucos.</p>
<p>A separação tem outros dois objetivos listados no rascunho: melhorar a segurança da escolha de blocos e preparar o terreno para uma futura troca por assinaturas resistentes a computadores quânticos. Ainda estão em aberto os tempos de votação, as penalidades para validadores e partes da análise de segurança, informou a CoinDesk.</p>

<h2>Quanto dinheiro fica parado esperando</h2>
<p>A CoinDesk deu um exemplo para mostrar o efeito no bolso. Um serviço de transferência que adianta US$ 1 milhão por hora a clientes fica com cerca de US$ 267 mil parados esperando liquidação quando a finalidade leva 16 minutos. Com 4 minutos, esse valor cai para cerca de US$ 67 mil, dinheiro que poderia estar trabalhando em outra coisa.</p>
<p>O texto de maio de Edgington cita um caso real: o caminho padrão do CCTP, sistema da Circle para mover a stablecoin USDC entre redes, espera a finalidade do Ethereum e leva por volta de 15 minutos por transferência. Para entender como funcionam essas moedas atreladas ao dólar, o guia sobre <a href="/artigos/stablecoins-o-que-sao-usdt-usdc">stablecoins como USDT e USDC</a> explica o básico.</p>

<h2>O que isso muda para quem tem cripto no Brasil</h2>
<p>Por enquanto, nada. É um rascunho, sem data e com partes importantes por definir, e quem tem ETH numa corretora ou numa carteira própria não precisa fazer nada. Qualquer mensagem que peça para "migrar" ou "atualizar" moedas por causa dessa proposta é golpe. A ficha da moeda, com dados de mercado em reais, está em <a href="/moedas/ethereum">Ethereum (ETH)</a>.</p>
<p>Se a mudança sair do papel, o efeito mais visível para o brasileiro pode ser em prazos. Corretoras costumam esperar confirmações antes de liberar depósitos de ETH e de tokens da rede Ethereum, como as stablecoins, e uma finalidade mais curta abre espaço para encurtar essa espera e baratear pontes entre redes. Cada empresa, porém, define a própria regra. O guia <a href="/artigos/o-que-e-ethereum-e-como-funciona">o que é Ethereum e como funciona</a> ajuda a entender validadores, staking e gas antes de acompanhar o debate.</p>

<h2>Os próximos passos</h2>
<p>No texto de maio, Edgington descreveu o consenso desacoplado como uma meta ambiciosa para uma atualização da rede que deve sair "provavelmente em algum momento de 2027", e disse que o desenho ainda não estava completo. A ambição de longo prazo é bem maior que 4 minutos: reduzir a finalidade de cerca de 1.000 segundos para perto de 10 segundos. Para ele, separar a finalidade da escolha de blocos é o passo que destrava o resto, e os ganhos seguintes viriam de melhorias graduais, como consolidar validadores, agrupar os votos e chegar a uma finalidade em uma rodada só, sem prazo definido para nenhuma delas.</p>
<p>A proposta saiu no mesmo dia em que a Solana ativou o Alpenglow, que mira finalidade de cerca de 150 milissegundos (veja a notícia sobre o <a href="/noticias/solana-alpenglow-finalidade-150-milissegundos">Alpenglow da Solana</a>). As duas redes têm desenhos e prioridades diferentes, e por isso os números não se comparam de forma direta. No Ethereum, o próximo marco é o pull request ser aceito pelos editores de EIPs e a proposta seguir para o debate entre os desenvolvedores da rede.</p>`,
  faq: [
    {
      question: "O que é finalidade no Ethereum?",
      answer:
        "É o momento em que um bloco não pode mais ser revertido. Hoje, no Ethereum, isso exige duas rodadas completas de votação dos validadores, chamadas épocas, e leva em média cerca de 16 minutos. Antes disso, a transação já aparece confirmada, mas ainda existe uma chance pequena de reorganização dos blocos mais recentes.",
    },
    {
      question: "Quando a finalidade de 4 minutos chega ao Ethereum?",
      answer:
        "Não há data. A proposta protocolada em 21 de outubro de 2026 é um rascunho, com tempos de votação, penalidades e partes da análise de segurança ainda em aberto. Em maio, Ben Edgington, que coordena a pesquisa, tratou o consenso desacoplado como meta ambiciosa para uma atualização prevista para provavelmente algum momento de 2027, sem prometer data.",
    },
  ],
};

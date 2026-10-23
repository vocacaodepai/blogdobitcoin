import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "solana-alpenglow-finalidade-150-milissegundos",
  title: "Solana ativa o Alpenglow e mira finalidade de 150 milissegundos",
  summary:
    "O Alpenglow aposentou na quarta (21) o TowerBFT, consenso usado pela Solana desde 2020, e mira tornar transações definitivas em cerca de 150 milissegundos.",
  author: "Bruno Danello",
  sourceName: "The Block",
  sourceUrl:
    "https://theblock.co/news/ecosystems/2026-10-21-anzas-alpenglow-goes-live-on-solana-cutting-finality-to-150-milliseconds-421508",
  date: "2026-10-22",
  publishedAt: "2026-10-22T18:39:00-03:00",
  topic: "altcoins",
  imageQuery: "Solana logo",
  content: `<p>A Solana ativou na quarta-feira (21) o Alpenglow, novo sistema de consenso da rede, que substitui o TowerBFT, usado desde o lançamento, em março de 2020. A mudança entrou na mainnet-beta no slot 459.653.000, segundo o <a href="https://theblock.co/news/ecosystems/2026-10-21-anzas-alpenglow-goes-live-on-solana-cutting-finality-to-150-milliseconds-421508" rel="noopener noreferrer nofollow">The Block</a>, e a meta é reduzir a finalidade das transações, o momento em que elas não podem mais ser revertidas, de 12,8 segundos para cerca de 150 milissegundos.</p>
<p>"Esta é a maior e mais ambiciosa atualização de blockchain desde The Merge", disse ao The Block Brennan Watt, CEO da Anza, a empresa de engenharia que liderou o projeto, em referência à migração do Ethereum para prova de participação, em 2022. Segundo ele, a equipe levou o Alpenglow "de um white paper à mainnet em menos de 18 meses". A troca do sistema antigo pelo novo levou cerca de 900 milissegundos, segundo a Solana Foundation, citada pela <a href="https://www.coindesk.com/tech/2026/10/22/solana-completes-alpenglow-upgrade-here-s-what-it-means-for-users" rel="noopener noreferrer nofollow">CoinDesk</a>.</p>

<h2>O que muda na rede</h2>
<p>Consenso é o processo pelo qual os validadores, os computadores que mantêm a rede, concordam sobre quais blocos valem. A Solana usa <a href="/glossario#prova-de-participacao">prova de participação</a>: quem valida trava SOL como garantia e vota nos blocos. No TowerBFT, a confirmação definitiva passava por duas etapas; o Alpenglow junta tudo numa só, segundo o The Block, e um bloco pode ficar final depois de uma ou duas rodadas de votação, de acordo com a CoinDesk.</p>
<p>Os 150 milissegundos são uma meta para condições normais da rede, não uma garantia, ressalta a CoinDesk. A própria Anza avisa que alguns computadores recebem a informação de finalidade depois dos validadores que votam diretamente. Na largada, votos de 446 dos 654 validadores participantes certificaram o bloco usado como ponto de partida do novo sistema.</p>
<p>Uma consequência curiosa: os painéis que contam transações da Solana devem mostrar números menores, porque os votos dos validadores deixam de ser registrados como transações dentro dos blocos. Isso não significa queda no uso real da rede.</p>

<h2>O custo para os validadores e o caminho até aqui</h2>
<p>A mudança também mexe no bolso de quem valida. Segundo o <a href="https://decrypt.co/380974/solana-alpenglow-upgrade-date" rel="noopener noreferrer nofollow">Decrypt</a>, cada conta de voto passa a pagar um bilhete de admissão de 0,8 SOL por época, que é queimado, no lugar de cerca de 1 SOL por época gasto antes em taxas de transação de voto. O validador que não tiver saldo para o bilhete fica de fora da votação e da produção de blocos na época seguinte. A proposta, chamada SIMD-0326, foi aprovada pelos validadores em setembro de 2025, com 98,27% dos votos a favor.</p>
<p>O desenho do Alpenglow foi publicado pela Anza em maio de 2025. Antes de chegar à rede principal, passou por testes públicos, ataques simulados por equipes de segurança, testes de invasão, ensaios repetidos da migração e uma competição de segurança, segundo o The Block. A Anza resumiu o esforço numa frase citada pelo Decrypt: "18 meses de trabalho para uma migração que acontece em um slot".</p>
<p>A ativação foi marcada para o início da época 1064, e o TowerBFT ainda ficou no comando por 5.000 slots, cerca de 18 minutos, antes de o Alpenglow assumir no slot 459.653.000, segundo o cronograma divulgado pela Solana Foundation e publicado pelo Decrypt uma semana antes. A data ficou dentro do que a equipe vinha indicando: em maio, Max Resnick, economista líder da Anza, falava em ativar a mudança no fim do terceiro trimestre ou no começo do quarto.</p>

<h2>O que isso muda para quem tem cripto no Brasil</h2>
<p>Para quem tem SOL numa corretora ou numa carteira própria, nada muda na prática. Segundo a CoinDesk, as carteiras continuam as mesmas, os envios seguem funcionando, e as taxas de transação e o funcionamento dos aplicativos não mudaram. Não existe nenhuma "migração" de moedas para fazer, e qualquer mensagem que peça suas palavras de recuperação para "atualizar" a carteira por causa do Alpenglow é golpe.</p>
<p>Com o tempo, uma finalidade mais rápida pode encurtar a espera por confirmação de depósitos e saques na rede, mas cada corretora define a própria política de confirmações, e nada obriga uma mudança imediata. A ficha da moeda, com dados de mercado em reais, está em <a href="/moedas/solana">Solana (SOL)</a>.</p>
<p>A atualização também não sustentou o preço. Na manhã de quinta-feira (22), a SOL caía 2,4%, para cerca de US$ 104, num dia de queda geral do mercado, segundo a CoinDesk, e por volta das 18h30 de Brasília recuava mais de 4% em 24 horas na Binance. Melhoria técnica e cotação andam por caminhos diferentes, e o <a href="/mercado">ranking das criptomoedas</a> mostra como cada moeda se comporta no dia.</p>

<h2>O que vem depois do Alpenglow</h2>
<p>A ativação desta semana trouxe só a primeira metade do projeto, o Votor, que cuida da votação. A segunda parte, o Rotor, vai mudar a forma como os dados dos blocos circulam entre os computadores da rede, substituindo o sistema atual, chamado Turbine, e ainda não tem data, segundo o Decrypt e o The Block. Também estão em estudo rotações de líder que levam em conta a localização geográfica dos validadores, para reduzir atrasos entre quem produz os blocos.</p>
<p>No horizonte mais distante, está em pesquisa o Quantumglow, um desenho separado que trocaria a criptografia de curva elíptica do Alpenglow por assinaturas baseadas em hash, pensando na segurança contra computadores quânticos. E a equipe do Firedancer, da Jump Crypto, propôs em setembro de 2025 remover o limite de 60 milhões de unidades de computação por bloco (SIMD-0370), para que a capacidade da rede cresça junto com o hardware dos validadores.</p>
<p>A corrida por confirmações mais rápidas não é só da Solana. No mesmo dia, pesquisadores do Ethereum protocolaram uma proposta para cortar a finalidade daquela rede de cerca de 16 para 4 minutos (detalhes na notícia sobre a <a href="/noticias/ethereum-proposta-finalidade-4-minutos">proposta de finalidade rápida do Ethereum</a>). Quem quer entender por que as duas redes fazem escolhas tão diferentes pode começar pelo comparativo <a href="/artigos/bitcoin-ou-ethereum-diferencas">Bitcoin ou Ethereum</a>.</p>`,
  faq: [
    {
      question: "O que é o Alpenglow da Solana?",
      answer:
        "É o novo sistema de consenso da Solana, ativado em 21 de outubro de 2026 no lugar do TowerBFT, usado desde 2020. Ele junta numa etapa só a confirmação dos blocos e mira reduzir a finalidade das transações de 12,8 segundos para cerca de 150 milissegundos em condições normais da rede, segundo o The Block e a CoinDesk.",
    },
    {
      question: "Quem tem SOL precisa fazer alguma coisa por causa do Alpenglow?",
      answer:
        "Não. As carteiras continuam as mesmas e as taxas e os aplicativos funcionam como antes, segundo a CoinDesk. Não existe migração de moedas. Mensagens que pedem a seed ou um envio de SOL para atualizar a carteira por causa do Alpenglow são golpe e devem ser ignoradas.",
    },
  ],
};

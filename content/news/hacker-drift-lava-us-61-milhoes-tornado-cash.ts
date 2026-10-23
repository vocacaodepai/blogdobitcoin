import type { NewsItem } from "@/lib/types";

export const item: NewsItem = {
  slug: "hacker-drift-lava-us-61-milhoes-tornado-cash",
  title: "Hack da Drift: carteiras enviam US$ 61,5 milhões em ether ao Tornado Cash",
  summary:
    "Carteiras ligadas ao ataque à Drift, atribuído à Coreia do Norte, mandaram 25.700 ETH ao misturador Tornado Cash após dois meses paradas. Vítimas recebem centavos.",
  author: "Bruno Danello",
  sourceName: "Decrypt",
  sourceUrl: "https://decrypt.co/381450/wallet-drift-exploit-sends-61-million-ethereum-tornado-cash",
  date: "2026-10-22",
  publishedAt: "2026-10-22T23:09:00-03:00",
  topic: "seguranca",
  imageQuery: "Tornado Cash logo",
  content: `<p>Carteiras ligadas ao ataque contra a Drift Protocol, plataforma de negociação da rede Solana, depositaram 25.700 ETH, cerca de US$ 61,56 milhões, no misturador Tornado Cash na terça-feira (20), em cerca de duas horas, segundo a <a href="https://decrypt.co/381450/wallet-drift-exploit-sends-61-million-ethereum-tornado-cash" rel="noopener noreferrer nofollow">Decrypt</a>, com base em dados da Arkham Intelligence. Os endereços estavam parados havia cerca de dois meses. Os depósitos foram feitos em lotes de 100 ETH (cerca de US$ 237,8 mil cada) e em lotes menores de 10 ETH, tamanhos que coincidem com os pools fixos do misturador, que permitem sacar depois para endereços novos.</p>
<p>A movimentação continuou no dia seguinte. Segundo o <a href="https://crypto.news/drift-hacker-109m-eth-tornado-cash/" rel="noopener noreferrer nofollow">crypto.news</a>, o serviço de monitoramento Onchain Lens registrou mais cerca de 18.800 ETH (perto de US$ 46 milhões) enviados ao Tornado Cash na quarta-feira (21), o que somaria 44.510 ETH, perto de US$ 109 milhões, em dois dias. Os números são estimativas de rastreadores, que divergem enquanto as transferências acontecem. Depois da segunda rodada, os endereços rotulados como do atacante ainda tinham cerca de 56.569 ETH, segundo dados da Arkham citados pelo site.</p>

<h2>O ataque de abril e a pista da Coreia do Norte</h2>
<p>O ataque aconteceu em 1º de abril de 2026, contra os cofres da Drift. O invasor conseguiu poderes de administrador, cadastrou um token falso e o usou como garantia para tomar emprestada liquidez real, segundo a Decrypt. Pelo levantamento da própria Drift, o prejuízo chegou a US$ 295,7 milhões, com destaque para US$ 159,3 milhões em JLP (o token de liquidez da Jupiter) e US$ 71,4 milhões em USDC. A maior parte dos USDC foi trocada e levada por ponte para a rede Ethereum.</p>
<p>Em junho, a Drift informou em <a href="https://www.drift.trade/updates/drift-recovery-update-june-3-2026" rel="noopener noreferrer nofollow">atualização oficial</a> que a empresa de perícia Mandiant atribuiu o ataque ao UNC6862, um grupo de ameaça da Coreia do Norte. Segundo a Drift, foi uma operação de seis meses: os invasores se passaram por uma firma de trading quantitativo, encontraram colaboradores pessoalmente e chegaram a depositar US$ 1 milhão do próprio bolso para ganhar confiança. Não foi uma falha simples de código, e sim um caso de engenharia social que terminou com o controle das permissões de administração.</p>
<p>Essa não é a primeira passagem pelo misturador. Em 23 e 24 de julho, um endereço rotulado como "Drift Exploiter 4" já tinha enviado cerca de 23.095 ETH ao Tornado Cash, perto de US$ 44,4 milhões na época, segundo a Decrypt. Antes da rodada desta semana, a Arkham acompanhava 71 endereços ligados ao atacante, com 81.454 ETH e cerca de US$ 561,6 mil em outros ativos.</p>

<h2>O que as vítimas recebem</h2>
<p>A Drift voltou a funcionar com o nome Velocity e abriu em 1º de outubro o resgate do DFX, token de recuperação. Pelas regras publicadas pela <a href="https://www.drift.trade/updates/dfx-claim-and-redemptions" rel="noopener noreferrer nofollow">Drift</a>, cada DFX corresponde a 1 USDT de perda verificada, num total de cerca de 299,5 milhões de tokens. O fundo de recuperação tinha cerca de 3,1 milhões de USDT no lançamento, o que dava cerca de 0,0104 USDT por token a quem resgatasse logo: perto de um centavo por dólar perdido.</p>
<p>O fundo recebe todos os dias de 60% a 90% da receita líquida do protocolo, conforme o volume, além de qualquer valor recuperado por congelamento, recompensa ou ação policial. A Tether se comprometeu com até 127,5 milhões de USDT para o relançamento e a recuperação. O prazo para pedir os tokens vai até 1º de janeiro de 2028; depois disso, o DFX não reclamado é queimado.</p>

<h2>O que isso muda para quem tem cripto no Brasil</h2>
<p>Brasileiros também usam protocolos de <a href="/glossario#defi">DeFi</a>, as finanças descentralizadas, e o caso da Drift mostra o tamanho do risco. Num protocolo desse tipo não existe FGC, central de atendimento nem órgão que obrigue alguém a devolver o dinheiro. Quando o cofre é esvaziado, a recuperação depende da boa vontade de parceiros e da receita futura da própria plataforma, e pode levar anos para pagar pouco.</p>
<p>O ataque também derruba a ideia de que só código malfeito causa prejuízo. Aqui, a porta de entrada foi a confiança construída por meses com pessoas que tinham poder de aprovar transações, um tipo de golpe que pode atingir qualquer um. Para quem guarda as próprias moedas, a defesa passa por nunca compartilhar a seed, desconfiar de contatos que pedem assinatura ou acesso e separar valores grandes em carteira fria; o assunto está no guia <a href="/artigos/autocustodia-not-your-keys-not-your-coins">autocustódia: not your keys, not your coins</a> e no texto sobre <a href="/artigos/golpes-com-criptomoedas-como-se-proteger">golpes com criptomoedas</a>.</p>
<p>No Brasil, a regra do Banco Central para as prestadoras de serviços de ativos virtuais trata do assunto de forma direta. A <a href="https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolu%C3%A7%C3%A3o%20BCB&amp;numero=520" rel="noopener noreferrer nofollow">Resolução BCB 520</a> proíbe as prestadoras de adotar mecanismos que dificultem a detecção de crimes, "a exemplo da utilização de misturadores, embaralhadores ou robôs que visam a ocultar os autores ou beneficiários de transações". Corretoras autorizadas, portanto, ficam obrigadas a manter distância desse tipo de ferramenta.</p>

<h2>Próximos passos</h2>
<p>Com dezenas de milhares de ETH ainda nos endereços monitorados, novas rodadas de envio ao misturador podem acontecer, e os rastreadores seguem acompanhando cada movimento. Depois que o ether passa pelo Tornado Cash, fica mais difícil seguir o caminho até uma corretora, o que reduz as chances de congelamento. Um depósito no misturador, por si só, não mostra se o dinheiro já foi trocado por moeda comum, observa o crypto.news.</p>
<p>Para os usuários da Drift, o ritmo da recuperação depende do movimento da Velocity e de eventuais valores recuperados. O preço do ether, que mexe com o valor que ainda está com o atacante, pode ser acompanhado ao vivo na página do <a href="/moedas/ethereum">Ethereum</a>, e a cotação da rede onde a Drift funciona fica na página da <a href="/moedas/solana">Solana</a>.</p>`,
  faq: [
    {
      question: "O que aconteceu com a Drift Protocol?",
      answer:
        "Em 1º de abril de 2026, a Drift, plataforma de negociação da rede Solana, teve US$ 295,7 milhões levados dos seus cofres. Os invasores passaram meses se fazendo de firma de trading, ganharam poder de administrador e usaram um token falso como garantia. A Mandiant atribuiu o ataque ao UNC6862, grupo da Coreia do Norte.",
    },
    {
      question: "O que é o Tornado Cash?",
      answer:
        "É um misturador da rede Ethereum: recebe depósitos em pools de valor fixo, como 10 ou 100 ETH, e permite sacar depois para endereços novos, o que dificulta rastrear a origem do dinheiro. No Brasil, a Resolução BCB 520 proíbe as prestadoras de ativos virtuais de usar misturadores.",
    },
    {
      question: "As vítimas da Drift vão receber o dinheiro de volta?",
      answer:
        "Só em parte e aos poucos. A Drift criou o token DFX, um por dólar perdido, resgatável num fundo alimentado pela receita da nova plataforma, a Velocity. No lançamento, em outubro de 2026, o fundo pagava cerca de 0,0104 USDT por token, perto de um centavo por dólar.",
    },
  ],
};

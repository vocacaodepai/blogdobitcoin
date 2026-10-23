import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "lightning-network-o-que-e-e-como-usar",
  title: "Lightning Network: o que é, como funciona e como usar no Brasil",
  seoTitle: "Lightning Network: o que é, como funciona e como usar",
  excerpt:
    "Entenda a Lightning Network: como os canais de pagamento deixam o bitcoin instantâneo e barato, quais carteiras usar, os limites e os riscos no Brasil.",
  metaDescription:
    "Lightning Network explicada: canais de pagamento, taxas de frações de centavo, carteiras como Phoenix e Zeus, passo a passo, limites, riscos e uso no Brasil.",
  category: "bitcoin",
  date: "2026-10-22",
  readTime: 8,
  imageQuery: "lightning bolt night sky",
  seed: 4,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A Lightning Network é uma camada sobre o Bitcoin que usa canais de pagamento para mandar satoshis em segundos e com taxas mínimas.",
    "Carteiras como Phoenix e Zeus deixam a chave com você, enquanto apps de corretora guardam o saldo por você, com mais praticidade e mais risco.",
    "A Lightning é ótima para valores pequenos e frequentes, mas tem limites de valor, exige backup das palavras e não substitui a rede principal para guardar muito.",
  ],
  content: `<p>A Lightning Network é uma rede de pagamentos construída sobre o Bitcoin que permite mandar e receber bitcoin em segundos, com taxas de frações de centavo. Em vez de gravar cada pagamento na blockchain, ela usa canais entre carteiras e só leva à rede principal a abertura e o fechamento desses canais.</p>
<p>Neste guia você vai entender como os canais funcionam, por que os pagamentos saem tão rápidos e baratos, quais carteiras usar, como fazer o primeiro pagamento e quais são os limites e os riscos, inclusive as regras que já valem no Brasil. Se ainda não conhece blocos, chaves e mineração, comece pelo guia sobre <a href="/artigos/o-que-e-bitcoin-e-como-funciona">o que é Bitcoin e como funciona</a>.</p>

<h2>O que é a Lightning Network</h2>
<p>A rede principal do Bitcoin fecha um bloco a cada 10 minutos, em média, e cada bloco tem espaço limitado. Isso é ótimo para guardar valor com segurança, mas ruim para pagar um café: a confirmação demora e, quando a rede fica congestionada, a taxa dispara. A <a href="/glossario#lightning-network">Lightning Network</a> nasceu para resolver isso como uma segunda camada, que roda em cima do Bitcoin sem mudar as regras dele.</p>
<p>A ideia foi descrita por Joseph Poon e Thaddeus Dryja no artigo técnico <a href="https://lightning.network/lightning-network-paper.pdf" rel="noopener noreferrer">"The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments"</a>, cuja versão de janeiro de 2016 ainda é a referência. O texto propõe uma rede de canais de micropagamento em que o valor circula fora da blockchain, mas sempre com a garantia de que qualquer participante pode recorrer à rede principal se o outro lado trapacear. O projeto dependia de uma correção técnica que chegou com o <a href="/glossario#segwit">SegWit</a>, ativado em 2017.</p>

<h2>Como funcionam os canais de pagamento</h2>
<p>Pense numa comanda de bar. Você deixa um valor reservado na entrada, vai consumindo, e só no fim a conta é acertada. Um canal Lightning funciona assim, em três etapas:</p>
<ol>
<li><strong>Abertura:</strong> duas partes travam bitcoin num endereço compartilhado, um tipo de <a href="/glossario#multisig">multisig</a> que exige a assinatura das duas. Essa abertura é uma transação comum, registrada na blockchain.</li>
<li><strong>Pagamentos:</strong> a cada pagamento, as duas carteiras assinam um novo retrato do saldo, por exemplo "você tem 70 mil sats, eu tenho 30 mil". Nada vai para a blockchain, por isso é instantâneo.</li>
<li><strong>Fechamento:</strong> quando alguém quer encerrar, o último retrato do saldo é publicado na rede principal, e cada um leva a sua parte.</li>
</ol>
<p>Se alguém tentar publicar um retrato antigo, mais vantajoso para si, o outro lado tem um prazo para provar a fraude e ficar com todo o saldo do canal. Essa punição é o que mantém todo mundo honesto. E você não precisa abrir canal com cada loja: o pagamento pode saltar por vários canais até o destino, num contrato que só libera o dinheiro em cada salto quando o recebedor final confirma. Se a rota falhar no meio, o valor volta para você.</p>

<h2>Por que os pagamentos são instantâneos e baratos</h2>
<p>Como o pagamento não espera bloco, ele chega em segundos. E como não disputa espaço na blockchain, a taxa é minúscula. Cada nó que encaminha um pagamento cobra uma parte fixa, medida em milésimos de satoshi, e um percentual. Em 22 de outubro de 2026, a média anunciada pelos nós era de menos de 1 satoshi fixo e cerca de 0,08% por salto, segundo o <a href="https://mempool.space/lightning" rel="noopener noreferrer">painel da Lightning na mempool.space</a>, que contava perto de 16 mil nós, 30 mil canais e 3.500 BTC de capacidade pública.</p>
<p>Um exemplo hipotético ajuda. Se 1 BTC valesse R$ 500 mil, um café de R$ 8 custaria 1.600 <a href="/artigos/satoshis-o-que-sao-sats-e-como-converter">satoshis</a>. A 0,08%, cada salto cobraria pouco mais de 1 sat de percentual, somado à parte fixa: a taxa total do café ficaria em poucos satoshis, uma fração de centavo.</p>
<table>
<thead><tr><th>Característica</th><th>Rede principal (on-chain)</th><th>Lightning Network</th></tr></thead>
<tbody>
<tr><td>Onde o pagamento fica registrado</td><td>Na blockchain, para sempre</td><td>Só entre os canais; a blockchain vê abertura e fechamento</td></tr>
<tr><td>Tempo até confirmar</td><td>Cerca de 10 minutos por bloco</td><td>Segundos</td></tr>
<tr><td>Taxa</td><td>Varia com o congestionamento</td><td>Frações de satoshi a poucos satoshis</td></tr>
<tr><td>Melhor uso</td><td>Guardar valores altos e movimentos raros</td><td>Pagamentos pequenos e frequentes</td></tr>
<tr><td>Endereço para receber</td><td>Endereço bitcoin (bc1...)</td><td>Fatura (lnbc...) ou endereço Lightning (nome@dominio)</td></tr>
</tbody>
</table>
<p>Vale uma ressalva honesta: na mesma data, a <a href="/glossario#taxa-de-rede">taxa de rede</a> recomendada na blockchain estava no mínimo, 1 satoshi por byte virtual. Em dias calmos, mandar on-chain também sai barato. A diferença aparece quando a rede congestiona: no bloco do halving de 2024, a taxa mediana chegou a 200 sat/vB.</p>

<h2>Carteiras que suportam Lightning</h2>
<p>A escolha mais importante é quem guarda a chave. Numa carteira de <a href="/glossario#autocustodia">autocustódia</a>, você recebe uma frase de recuperação e só você controla os fundos. Num app de corretora, a empresa guarda o saldo por você. Alguns exemplos reais e atuais, conforme os sites e a documentação oficial de cada um:</p>
<table>
<thead><tr><th>Carteira</th><th>Quem guarda a chave</th><th>O que vale saber</th></tr></thead>
<tbody>
<tr><td>Phoenix (ACINQ)</td><td>Você</td><td>Android e iOS, frase de 12 palavras, abre canais sozinha quando precisa</td></tr>
<tr><td>Zeus</td><td>Você</td><td>Código aberto, envia para endereço Lightning e também gerencia um nó próprio</td></tr>
<tr><td>Wallet of Satoshi</td><td>Você, segundo o site atual</td><td>Frase de 12 palavras e pagamento por QR code ou endereço Lightning</td></tr>
<tr><td>Blink</td><td>Você ou a empresa, conforme o modo</td><td>Nasceu em El Zonte, El Salvador; autocustódia por carteira Spark embutida ou conta gerenciada em alguns países</td></tr>
<tr><td>Bipa (Brasil)</td><td>A empresa</td><td>Compra por Pix, endereço Lightning no formato SuaBipaTag@bipa.app</td></tr>
</tbody>
</table>
<p>Nenhuma delas é recomendação: cada uma tem prós e contras, e os termos mudam com o tempo. Para comparar carteiras de forma mais ampla, incluindo as de hardware, veja o guia de <a href="/artigos/carteira-de-bitcoin-qual-escolher">qual carteira de Bitcoin escolher</a>.</p>

<h2>Como usar a Lightning Network passo a passo</h2>
<ol>
<li>Baixe a carteira só da loja oficial do celular ou do site oficial do projeto. App falso com nome parecido é golpe comum.</li>
<li>Se for de autocustódia, anote a frase de recuperação no papel e guarde longe de fotos e nuvem.</li>
<li>Para receber, gere uma fatura (começa com "lnbc") com o valor certo, ou passe o seu endereço Lightning, que funciona como um e-mail.</li>
<li>Para pagar, escaneie o QR code da fatura, confira o valor e confirme. O dinheiro chega em segundos.</li>
<li>Comece com pouco, por exemplo o equivalente a R$ 10, e só aumente depois de entender o fluxo.</li>
</ol>
<p>Dois detalhes evitam dor de cabeça. Fatura Lightning expira, em geral em minutos, e não deve ser reutilizada; se passar do prazo, peça outra. E na primeira vez que você recebe numa carteira de autocustódia, ela pode cobrar a abertura do canal, uma transação na rede principal mais a comissão do provedor. Para converter valores entre reais e satoshis antes de pagar, use o <a href="/ferramentas/conversor">conversor de Bitcoin</a>.</p>

<h2>Limites da Lightning: o que ela ainda não faz bem</h2>
<p>A Lightning não é mágica. O valor de cada pagamento depende do saldo disponível nos canais da rota, então pagamentos grandes falham com mais frequência. A Bipa, por exemplo, indica na sua <a href="https://suporte.bipa.app/hc/pt-br/articles/4415356329371-Como-enviar-Bitcoin-pela-rede-Lightning-na-Bipa" rel="noopener noreferrer">central de ajuda</a> mínimo de 1 satoshi, máximo típico perto de R$ 5.000 e a rede principal para valores acima de R$ 10.000.</p>
<p>Receber também exige espaço no canal, a chamada liquidez de entrada. Os apps modernos resolvem isso abrindo canais automaticamente, mas cobram por isso. Fechar um canal é uma transação na rede principal, com taxa e, se o fechamento for forçado, com espera de alguns dias para liberar o saldo. Valores muito pequenos podem não compensar a taxa de fechamento num dia de rede congestionada.</p>
<p>Por fim, a Lightning foi pensada para gastar, não para guardar. Para uma reserva grande, a rede principal, de preferência com uma carteira fria, continua sendo o lugar mais seguro.</p>

<h2>Riscos e cuidados ao usar a Lightning</h2>
<ul class="checklist">
<li>Em carteira de corretora, o saldo depende da saúde da empresa: é o velho dilema de <a href="/artigos/autocustodia-not-your-keys-not-your-coins">"not your keys, not your coins"</a>.</li>
<li>Em autocustódia, perder a frase de recuperação significa perder o dinheiro; veja <a href="/artigos/seed-phrase-como-guardar-as-palavras-de-recuperacao">como guardar a seed phrase</a>.</li>
<li>Pagamento Lightning não tem estorno. Confira valor e destinatário antes de confirmar.</li>
<li>Desconfie de links e mensagens pedindo para "ativar" ou "validar" a sua carteira: é <a href="/glossario#phishing">phishing</a>.</li>
<li>Lightning é só um meio de pagamento. Quem promete rendimento por "investir em Lightning" está vendendo golpe, como mostra o guia de <a href="/artigos/golpes-com-criptomoedas-como-se-proteger">golpes com criptomoedas</a>.</li>
</ul>
<div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Gastar bitcoin, mesmo num café, pode ter efeito no Imposto de Renda, porque a Receita trata a operação com cripto como alienação. Guarde o histórico do app e entenda as regras em <a href="/artigos/imposto-sobre-criptomoedas-no-brasil-quanto-se-paga">quanto se paga de imposto sobre criptomoedas</a>.</p></div>

<h2>Lightning Network no Brasil</h2>
<p>No Brasil, a Lightning compete com o Pix, que já é instantâneo e, para pessoa física, normalmente sem custo. Por isso ela faz mais sentido em usos que o Pix não cobre: receber de alguém em outro país, mandar gorjeta para criadores de conteúdo, pagar serviços que só aceitam bitcoin ou movimentar pequenas quantias entre carteiras próprias. A aceitação no comércio físico ainda é pequena e concentrada em eventos e lojas de entusiastas. El Salvador, que usou a Lightning na experiência da carteira Chivo, é contado em <a href="/artigos/el-salvador-bitcoin-moeda-oficial">a história do bitcoin como moeda oficial</a>.</p>
<p>A regulação também chegou aqui. Com a Resolução BCB nº 521/2025, as corretoras autorizadas passaram a pedir informações sobre o destino de saques de cripto, e na Bipa isso inclui pagamentos via Lightning desde maio de 2026, segundo a <a href="https://suporte.bipa.app/hc/pt-br/articles/49808987586203-Por-que-a-Bipa-pede-informa%C3%A7%C3%B5es-sobre-o-destino-do-meu-saque-de-criptoativos" rel="noopener noreferrer">explicação da própria empresa</a>. Mandar para uma carteira sua basta indicar que é autocustódia; para terceiros, é preciso informar nome e CPF. O quadro completo das regras está no guia sobre <a href="/artigos/regulacao-das-criptomoedas-no-brasil-banco-central">regulação das criptomoedas no Brasil</a>.</p>
<p>Para começar com o pé direito, instale uma carteira, receba o equivalente a poucos reais e faça um pagamento de teste. Antes, confira quanto o seu valor vale em satoshis com a <a href="/bitcoin">cotação do Bitcoin hoje</a>.</p>`,
  faq: [
    {
      question: "O que é a Lightning Network do Bitcoin?",
      answer:
        "É uma segunda camada construída sobre o Bitcoin que usa canais de pagamento entre carteiras. Os pagamentos circulam fora da blockchain, chegam em segundos e custam frações de centavo. Só a abertura e o fechamento dos canais vão para a rede principal, que continua garantindo que ninguém consiga ficar com o dinheiro do outro lado.",
    },
    {
      question: "Qual a diferença entre enviar bitcoin on-chain e pela Lightning?",
      answer:
        "On-chain, o pagamento é gravado na blockchain e leva cerca de 10 minutos por bloco para confirmar, com taxa que sobe quando a rede congestiona. Pela Lightning, o pagamento passa por canais, chega em segundos e custa poucos satoshis. A rede principal é melhor para valores altos e para guardar; a Lightning, para pagamentos pequenos e frequentes.",
    },
    {
      question: "Qual carteira usar para Lightning?",
      answer:
        "Depende de quem você quer que guarde a chave. Phoenix e Zeus são exemplos de autocustódia, em que você recebe uma frase de recuperação e controla os fundos. Apps de corretoras, como a brasileira Bipa, guardam o saldo por você e facilitam a compra por Pix. Baixe sempre da loja oficial e comece com valores pequenos para testar.",
    },
    {
      question: "A Lightning Network é segura?",
      answer:
        "O protocolo tem mecanismos para punir quem tenta trapacear num canal, e pagamentos que falham voltam para a origem. Os riscos reais estão no usuário e no serviço: perder a frase de recuperação, cair em app falso ou phishing, mandar para o destino errado, já que não há estorno, ou depender de uma empresa que guarda o saldo por você.",
    },
    {
      question: "Existe limite de valor na Lightning Network?",
      answer:
        "Não há um teto único, mas cada pagamento depende do saldo disponível nos canais da rota, por isso valores altos falham mais. Alguns serviços publicam limites próprios: a Bipa indica máximo típico perto de R$ 5.000 e sugere a rede principal acima de R$ 10.000. Para guardar ou mover valores grandes, a blockchain continua sendo o caminho.",
    },
  ],
  quiz: [
    {
      question: "O que vai para a blockchain quando você usa a Lightning Network?",
      options: ["Cada pagamento, um por um", "Só a abertura e o fechamento dos canais", "Nada, nunca"],
      answer: 1,
      explanation: "Os pagamentos ficam entre os canais. A blockchain registra apenas as transações que abrem e fecham cada canal.",
    },
    {
      question: "Como começa uma fatura Lightning?",
      options: ["Com bc1", "Com lnbc", "Com 0x"],
      answer: 1,
      explanation: "Faturas Lightning da rede principal começam com lnbc. Endereços bitcoin on-chain modernos começam com bc1.",
    },
  ],
};

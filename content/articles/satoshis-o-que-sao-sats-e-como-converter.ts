import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "satoshis-o-que-sao-sats-e-como-converter",
  title: "Satoshis: o que são sats e como converter bitcoin em real",
  seoTitle: "Satoshis: o que são sats e como converter",
  excerpt:
    "Entenda o que são satoshis (sats), quantos cabem em 1 bitcoin e como converter reais em sats com fórmula, tabela hipotética e os erros mais comuns.",
  metaDescription:
    "Satoshis: 1 BTC tem 100 milhões de sats. Veja de onde vem o nome, a fórmula para converter reais em sats, uma tabela de exemplos e as outras unidades.",
  category: "bitcoin",
  date: "2026-10-22",
  readTime: 8,
  imageQuery: "gold bitcoin coins pile",
  seed: 5,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Cada bitcoin se divide em 100 milhões de satoshis, então 1 sat vale 0,00000001 BTC, e essa proporção nunca muda.",
    "Para converter, divida o valor em reais pelo preço do bitcoin e multiplique por 100 milhões; o caminho inverso usa a mesma regra de três.",
    "O saldo em sats não muda com a cotação: o que sobe e desce é quanto esses sats valem em reais.",
  ],
  content: `<p>Satoshis, ou sats, são as frações do bitcoin: cada bitcoin se divide em 100 milhões de satoshis, e 1 sat vale 0,00000001 BTC. Saber o que são sats e como converter ajuda a entender que ninguém precisa comprar uma moeda inteira e que dá para pensar em bitcoin com números redondos, como se faz com centavos.</p>
<p>Neste guia você vê de onde veio o nome, a fórmula para converter reais em sats e sats em reais, uma tabela com valores hipotéticos, as outras unidades que aparecem em carteiras e os erros que mais confundem quem está começando. No fim, indicamos onde fazer a conta com o preço do momento, sem calculadora.</p>

<h2>O que é um satoshi e de onde vem o nome</h2>
<p>O satoshi é a menor unidade registrada na blockchain do Bitcoin. Por dentro, o software nem trabalha com bitcoins: todo saldo e toda transação são guardados como um número inteiro de satoshis, e a carteira só converte para BTC na hora de mostrar na tela. No código do Bitcoin Core, a constante que define <a href="https://github.com/bitcoin/bitcoin/blob/master/src/consensus/amount.h" rel="noopener noreferrer">quantos satoshis existem em um BTC</a> vale exatamente 100.000.000.</p>
<p>O nome é uma homenagem a Satoshi Nakamoto, o criador anônimo da rede (as teorias sobre quem está por trás do pseudônimo estão em <a href="/artigos/quem-e-satoshi-nakamoto">quem é Satoshi Nakamoto</a>). Mas não foi ele quem batizou a unidade. Em fevereiro de 2011, num <a href="https://bitcointalk.org/index.php?topic=3311.0" rel="noopener noreferrer">debate no fórum BitcoinTalk sobre a divisibilidade da moeda</a>, o usuário ribuck propôs nomes para as frações da moeda e citou "austrian" e "satoshi" como possíveis apelidos para as unidades pequenas, como a fatia de 1/100.000.000 de bitcoin. O segundo pegou.</p>
<p>No dia a dia, satoshi e sat são a mesma coisa. Em inglês o plural tradicional é "satoshi", sem o s no fim, mas "sats" virou a forma mais comum nas conversas sobre Bitcoin, inclusive no Brasil.</p>

<h2>Quanto vale 1 sat: a conta de bitcoin para satoshis</h2>
<p>A relação fixa é esta: 1 BTC tem 100 milhões de sats, então 1 sat é 0,00000001 BTC, a oitava casa depois da vírgula. Essa proporção nunca muda. O que muda o tempo todo é quanto 1 sat vale em reais, porque isso acompanha o <a href="/bitcoin">preço do Bitcoin hoje</a>.</p>
<table>
<thead><tr><th>Em bitcoin</th><th>Em satoshis</th><th>Como se fala</th></tr></thead>
<tbody>
<tr><td>1 BTC</td><td>100.000.000 sats</td><td>um bitcoin inteiro</td></tr>
<tr><td>0,1 BTC</td><td>10.000.000 sats</td><td>dez milhões de sats</td></tr>
<tr><td>0,01 BTC</td><td>1.000.000 sats</td><td>um milhão de sats</td></tr>
<tr><td>0,001 BTC</td><td>100.000 sats</td><td>cem mil sats</td></tr>
<tr><td>0,0001 BTC</td><td>10.000 sats</td><td>dez mil sats</td></tr>
<tr><td>0,00001 BTC</td><td>1.000 sats</td><td>mil sats</td></tr>
<tr><td>0,00000001 BTC</td><td>1 sat</td><td>a menor unidade</td></tr>
</tbody>
</table>
<p>Multiplicando o teto de 21 milhões de bitcoins por 100 milhões, a rede inteira terá no máximo 2,1 quatrilhões de satoshis. Parece exagero, mas é essa divisão que permite mandar alguns reais em bitcoin sem precisar de centavos de centavos. De onde vem o teto e como ele é garantido está explicado no guia <a href="/artigos/o-que-e-bitcoin-e-como-funciona">o que é Bitcoin e como funciona</a>.</p>

<h2>Como converter reais em sats (e sats em reais)</h2>
<p>A conversão é uma regra de três com a cotação do momento. Você só precisa de dois números: o valor em reais e o preço de 1 bitcoin em reais. A mesma conta vale para R$ 5 ou para R$ 50 mil.</p>
<ol>
<li><strong>Reais para sats:</strong> divida o valor em reais pelo preço do bitcoin e multiplique por 100.000.000.</li>
<li><strong>Sats para reais:</strong> multiplique os sats pelo preço do bitcoin e divida por 100.000.000.</li>
<li><strong>Preço de 1 sat:</strong> divida o preço do bitcoin por 100.000.000.</li>
</ol>
<p>Um exemplo hipotético, só para mostrar a conta: se 1 BTC custasse R$ 400 mil, cada sat valeria R$ 0,004. Nesse cenário, R$ 1 compraria 250 sats e R$ 100 comprariam 25.000 sats. No caminho inverso, um saldo de 50.000 sats valeria R$ 200. Nenhum desses números é a cotação real: eles servem para treinar a fórmula.</p>
<p>Na corretora, o número final costuma sair um pouco menor do que a conta pura, porque entram a taxa de negociação e o <a href="/glossario#spread">spread</a>, a diferença entre o preço de compra e o de venda. O passo a passo de uma primeira compra por Pix está no guia de <a href="/artigos/como-comprar-bitcoin-no-brasil-passo-a-passo">como comprar Bitcoin no Brasil</a>.</p>

<h2>Tabela de conversão hipotética: reais em sats</h2>
<p>A tabela abaixo usa dois preços inventados para o bitcoin, R$ 400 mil e o dobro disso, R$ 800 mil. Ela não mostra a cotação de hoje. A ideia é ver, com números redondos, como a quantidade de sats que cada real compra cai pela metade quando o preço dobra.</p>
<table>
<thead><tr><th>Valor em reais</th><th>Se 1 BTC custasse R$ 400 mil (hipotético)</th><th>Se 1 BTC custasse R$ 800 mil (hipotético)</th></tr></thead>
<tbody>
<tr><td>R$ 1</td><td>250 sats</td><td>125 sats</td></tr>
<tr><td>R$ 10</td><td>2.500 sats</td><td>1.250 sats</td></tr>
<tr><td>R$ 50</td><td>12.500 sats</td><td>6.250 sats</td></tr>
<tr><td>R$ 100</td><td>25.000 sats</td><td>12.500 sats</td></tr>
<tr><td>R$ 500</td><td>125.000 sats</td><td>62.500 sats</td></tr>
<tr><td>R$ 1.000</td><td>250.000 sats</td><td>125.000 sats</td></tr>
</tbody>
</table>
<p>Repare que o saldo em sats não muda quando o preço sobe ou desce: quem tem 25.000 sats continua com 25.000 sats. O que muda é quanto isso vale em reais. Por isso, quem compra um valor fixo todo mês recebe mais sats nos meses de preço baixo e menos nos de preço alto, lógica explicada no guia de <a href="/artigos/dca-em-bitcoin-como-investir-todo-mes">DCA em Bitcoin</a>.</p>

<h2>Por que pensar em sats faz sentido</h2>
<p>O primeiro motivo é psicológico. Muita gente olha o preço de um bitcoin inteiro, acha caro demais e desiste antes de saber que dá para comprar uma fração. Ver 25.000 sats em vez de 0,00025 BTC deixa claro que o valor pequeno também conta, do mesmo jeito que ninguém diz que tem 0,05 real no bolso, e sim 5 centavos.</p>
<p>O segundo motivo é prático: zeros demais confundem. Com oito casas decimais, é fácil trocar 0,0001 por 0,001 e errar por um fator de dez. Números inteiros de sats são mais difíceis de errar e mais fáceis de comparar.</p>
<p>O terceiro é que boa parte do ecossistema já fala em sats. A taxa de rede é cobrada em satoshis por byte virtual (sat/vB), e é assim que exploradores como o <a href="https://mempool.space/" rel="noopener noreferrer">mempool.space</a> mostram quanto custa entrar no próximo bloco. As carteiras da <a href="/artigos/lightning-network-o-que-e-e-como-usar">Lightning Network</a>, feitas para pagamentos pequenos e rápidos, também costumam mostrar saldos e cobranças em sats.</p>
<p>Num exemplo hipotético, uma transação de 150 vB enviada com taxa de 5 sat/vB pagaria 750 sats. Se 1 BTC custasse R$ 400 mil, essa taxa daria R$ 3. O verbete de <a href="/glossario#taxa-de-rede">taxa de rede</a> no glossário explica por que esse valor sobe quando a fila de transações enche.</p>
<div class="callout-box callout-fact"><span class="callout-label">Fato curioso</span><p>Laszlo Hanyecz pagou 10 mil bitcoins por duas pizzas em maio de 2010. Em sats, isso dá 1 trilhão. A história completa está em <a href="/artigos/bitcoin-pizza-day-a-pizza-de-10-mil-bitcoins">a pizza de 10 mil bitcoins</a>.</p></div>

<h2>Outras unidades: bits, mBTC e milisatoshis</h2>
<p>Além do sat, outras unidades aparecem de vez em quando em carteiras, corretoras e fóruns. Nenhuma muda a regra de base, porque todas são múltiplos ou frações de satoshi.</p>
<table>
<thead><tr><th>Unidade</th><th>Equivale a</th><th>Onde aparece</th></tr></thead>
<tbody>
<tr><td>BTC (bitcoin)</td><td>100.000.000 sats</td><td>Cotação, corretoras e extratos</td></tr>
<tr><td>mBTC (milibitcoin)</td><td>0,001 BTC ou 100.000 sats</td><td>Opção de exibição em algumas carteiras</td></tr>
<tr><td>bit (ou μBTC)</td><td>0,000001 BTC ou 100 sats</td><td>Proposta da BIP 176, de 2017</td></tr>
<tr><td>sat (satoshi)</td><td>0,00000001 BTC</td><td>Taxas de rede, Lightning e carteiras</td></tr>
<tr><td>msat (milisatoshi)</td><td>0,001 sat</td><td>Contas internas de canais de pagamento</td></tr>
</tbody>
</table>
<p>O milisatoshi não existe na blockchain principal: nenhuma transação comum consegue mover um milésimo de sat. Ele aparece dentro de canais de pagamento, como os da Lightning, para cobranças muito pequenas, e na hora de liquidar o canal na rede principal os valores voltam a ser contados em sats inteiros. A <a href="https://en.bitcoin.it/wiki/Satoshi_(unit)" rel="noopener noreferrer">página da Bitcoin Wiki sobre o satoshi</a> resume essas unidades e a história do nome.</p>

<h2>Erros comuns ao converter e usar sats</h2>
<ul class="checklist">
<li>Contar as casas decimais com pressa: 0,0001 BTC são 10.000 sats, não 1.000.</li>
<li>Confundir ponto e vírgula: sites estrangeiros escrevem 0.0001 com ponto, e no Brasil o ponto separa o milhar.</li>
<li>Esquecer a taxa: enviar 2.000 sats quando a taxa da rede está perto desse valor não compensa.</li>
<li>Achar que o saldo em sats encolheu quando, na verdade, só o valor em reais caiu.</li>
<li>Acreditar em promessa de sats grátis em troca de depósito, senha ou palavras de recuperação.</li>
</ul>
<p>O último item merece atenção. Perfis que prometem multiplicar seus sats, ou que pedem uma taxa de liberação para soltar um prêmio, aplicam um golpe conhecido, e os mais comuns estão no guia sobre <a href="/artigos/golpes-com-criptomoedas-como-se-proteger">golpes com criptomoedas</a>.</p>
<p>Outro cuidado vale para quem compra aos poucos e saca para a carteira própria. Muitas retiradas minúsculas deixam na carteira várias moedas pequenas, as <a href="/glossario#utxo">UTXOs</a>, e cada uma pesa na taxa quando você for gastar. Em épocas de rede cheia, uma moeda de poucas centenas de sats pode custar mais para gastar do que vale. E pensar em sats não diminui o risco: o preço oscila muito, e o <a href="/aviso-de-risco">aviso de risco</a> vale para qualquer quantia.</p>

<h2>Converta reais em sats com a cotação de agora</h2>
<p>Com a fórmula na mão, a conta fica simples, mas o preço do bitcoin muda a cada minuto e os exemplos deste texto são só hipotéticos. Para saber quantos sats os seus reais compram neste momento, ou quanto vale um saldo em sats, use o <a href="/ferramentas/conversor">conversor de bitcoin para real e satoshis</a>, que acompanha a cotação ao vivo.</p>
<p>Se a ideia é juntar sats aos poucos, a <a href="/ferramentas/calculadora-dca">calculadora de DCA</a> mostra como um aporte fixo por mês teria se comportado em períodos passados, com as altas e as quedas que vieram junto.</p>`,
  faq: [
    {
      question: "Quantos satoshis tem 1 bitcoin?",
      answer:
        "Um bitcoin tem exatamente 100 milhões de satoshis, então 1 sat equivale a 0,00000001 BTC, a oitava casa decimal. A proporção está fixada no código da rede e nunca muda. O que varia é quanto 1 sat vale em reais, porque isso acompanha a cotação do bitcoin, que sobe e desce o tempo todo.",
    },
    {
      question: "Quanto vale 1 satoshi em reais?",
      answer:
        "Depende do preço do bitcoin no momento: basta dividir a cotação de 1 BTC por 100 milhões. Num exemplo hipotético, se 1 BTC custasse R$ 400 mil, cada sat valeria R$ 0,004, e R$ 1 compraria 250 sats. Para o valor de agora, use o conversor do Blog do Bitcoin, que acompanha a cotação ao vivo.",
    },
    {
      question: "Como converter reais em satoshis?",
      answer:
        "Divida o valor em reais pelo preço de 1 bitcoin e multiplique o resultado por 100 milhões. Com R$ 50 e um bitcoin hipotético de R$ 400 mil, a conta dá 12.500 sats. Na corretora o número final costuma ser um pouco menor, porque entram a taxa de negociação e o spread entre compra e venda.",
    },
    {
      question: "Por que a menor unidade do bitcoin se chama satoshi?",
      answer:
        "A unidade homenageia Satoshi Nakamoto, o criador anônimo do Bitcoin, mas não foi ele quem deu o nome. Uma das primeiras sugestões registradas apareceu em fevereiro de 2011 no fórum BitcoinTalk, quando um usuário chamado ribuck citou satoshi como apelido possível para as menores frações da moeda. A comunidade adotou o termo.",
    },
    {
      question: "Dá para ter menos de 1 satoshi?",
      answer:
        "Na blockchain principal, não: o satoshi é a menor quantia que uma transação comum consegue registrar. Dentro de canais de pagamento, como os da Lightning Network, existem contas em milisatoshis, um milésimo de sat, usadas para cobranças muito pequenas. Quando o canal é liquidado na rede principal, os valores voltam a ser contados em sats inteiros.",
    },
  ],
  quiz: [
    {
      question: "Quantos sats existem em 0,001 BTC?",
      options: ["1.000 sats", "100.000 sats", "10 milhões de sats"],
      answer: 1,
      explanation: "Como 1 BTC tem 100 milhões de sats, um milésimo de bitcoin corresponde a 100.000 sats.",
    },
    {
      question: "Se o preço do bitcoin dobrar, o que acontece com o seu saldo em sats?",
      options: ["Dobra junto", "Fica igual, só o valor em reais muda", "Cai pela metade"],
      answer: 1,
      explanation: "A quantidade de sats não depende da cotação. O que muda é quanto esses sats valem em reais.",
    },
    {
      question: "Quem sugeriu o nome satoshi para a menor unidade do bitcoin?",
      options: ["O próprio Satoshi Nakamoto", "Um usuário do fórum BitcoinTalk", "O Banco Central"],
      answer: 1,
      explanation: "O usuário ribuck propôs o apelido num debate do BitcoinTalk em fevereiro de 2011, e a comunidade adotou o termo.",
    },
  ],
};

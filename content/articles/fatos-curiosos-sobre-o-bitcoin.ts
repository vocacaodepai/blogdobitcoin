import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "fatos-curiosos-sobre-o-bitcoin",
  title: "Fatos curiosos sobre o Bitcoin: 15 histórias que poucos conhecem",
  seoTitle: "Fatos curiosos sobre o Bitcoin: 15 histórias verificadas",
  excerpt:
    "Veja fatos curiosos sobre o Bitcoin conferidos na blockchain e em fontes primárias: a manchete do bloco gênese, a pizza, o bug de 184 bilhões e o ano 2140.",
  metaDescription:
    "15 fatos curiosos sobre o Bitcoin, todos conferidos: a menor unidade, a manchete do bloco gênese, a pizza de 10 mil BTC, o bug de 2010 e o ano de 2140.",
  category: "historia",
  historyYear: 2009,
  date: "2026-10-22",
  readTime: 8,
  imageQuery: "bitcoin coins pile closeup",
  seed: 54,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O primeiro bloco do Bitcoin, de 3 de janeiro de 2009, carrega uma manchete do jornal The Times, e seus 50 bitcoins de recompensa não podem ser gastos.",
    "Em agosto de 2010, um bug criou mais de 184 bilhões de bitcoins num único bloco, e a correção saiu em menos de cinco horas.",
    "O total de moedas nunca vai chegar a 21 milhões redondos: a última fração deve ser minerada por volta de 2140.",
  ],
  content: `<p>Os fatos curiosos sobre o Bitcoin vão de uma manchete de jornal escondida no primeiro bloco a um bug que criou 184 bilhões de moedas numa noite de 2010. Reunimos 15 deles, todos conferidos na própria blockchain ou em fontes primárias, como o fórum BitcoinTalk e a documentação do projeto.</p>
<p>Os fatos estão agrupados por tema, das unidades da moeda aos bugs, à escassez programada e às fortunas que ninguém consegue mover. No fim, uma seção separa o que é lenda do que é fato, porque boa parte das histórias que circulam sobre Bitcoin nunca foi comprovada.</p>

<h2>Nome, escrita e unidades do Bitcoin</h2>
<h3>1. Bitcoin com B maiúsculo é a rede, com b minúsculo é a moeda</h3>
<p>Pelo <a href="https://bitcoin.org/en/vocabulary" rel="noopener noreferrer">vocabulário oficial do bitcoin.org</a>, a palavra com inicial maiúscula descreve o conceito e a rede inteira, como em "o protocolo Bitcoin". Com inicial minúscula, ela vira unidade de conta, como em "mandei dez bitcoins". A sigla BTC também designa a moeda. Na prática, muita gente mistura as duas formas no dia a dia.</p>
<h3>2. O satoshi é a menor unidade e homenageia o criador</h3>
<p>Um bitcoin se divide em 100 milhões de satoshis, e o nome da unidade é uma homenagem a Satoshi Nakamoto, o pseudônimo de quem criou a moeda. Como o teto é de 21 milhões de BTC, a rede inteira terá no máximo cerca de 2,1 quatrilhões de satoshis. A conta de conversão está no guia de <a href="/artigos/satoshis-o-que-sao-sats-e-como-converter">satoshis e como converter</a>.</p>
<h3>3. Existe até uma unidade chamada bit</h3>
<p>Menos conhecido que o satoshi, o bit aparece no mesmo vocabulário como subdivisão: 1 milhão de bits formam 1 bitcoin, então cada bit vale 100 satoshis. Segundo o bitcoin.org, ele costuma ser mais prático para dar preço a gorjetas, produtos e serviços do que um número cheio de zeros depois da vírgula.</p>

<h2>Os primeiros dias da rede</h2>
<h3>4. O primeiro bloco guarda uma manchete de jornal</h3>
<p>O bloco 0, o bloco gênese, foi minerado em 3 de janeiro de 2009. Dentro dele, Satoshi gravou o texto "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks", manchete do jornal britânico sobre um novo socorro aos bancos. Qualquer pessoa pode conferir no <a href="https://mempool.space/block/0" rel="noopener noreferrer">bloco 0 no explorador mempool.space</a>. A história completa está em <a href="/artigos/bloco-genese-a-mensagem-escondida-no-primeiro-bloco">a mensagem escondida no primeiro bloco</a>.</p>
<h3>5. Os 50 BTC do bloco gênese não podem ser gastos</h3>
<p>Por uma particularidade do código original, a recompensa do primeiro bloco nunca entrou na lista de moedas que a rede aceita gastar. Mesmo assim, admiradores e curiosos continuam mandando pequenas quantias para o endereço ligado a ele. Em outubro de 2026, o mesmo explorador mostrava dezenas de milhares de transações recebidas por esse endereço, somando mais de 57 BTC, e nenhuma saída.</p>
<h3>6. Mais de cinco dias separaram o bloco 0 do bloco 1</h3>
<p>Hoje sai um bloco a cada 10 minutos, em média. No começo foi diferente: o bloco gênese tem data de 3 de janeiro de 2009, e o bloco 1 só apareceu em 9 de janeiro, mais de cinco dias depois, segundo os horários gravados na própria blockchain. Satoshi nunca explicou publicamente essa pausa, e sobre ela só existem teorias.</p>
<h3>7. A primeira transferência entre duas pessoas foi no bloco 170</h3>
<p>Em 12 de janeiro de 2009, pelo horário universal, o bloco 170 registrou a primeira transação que não era recompensa de mineração: 10 BTC enviados por Satoshi ao programador Hal Finney, com os outros 40 voltando como troco. Finney tinha anunciado dias antes que estava rodando o programa. A trajetória dele está em <a href="/artigos/hal-finney-o-primeiro-a-receber-bitcoin">Hal Finney, o primeiro a receber bitcoin</a>.</p>

<h2>Quando o bitcoin virou dinheiro de verdade</h2>
<h3>8. Duas pizzas por 10 mil bitcoins</h3>
<p>Em 18 de maio de 2010, o programador Laszlo Hanyecz abriu no <a href="https://bitcointalk.org/index.php?topic=137.0" rel="noopener noreferrer">fórum BitcoinTalk o tópico "Pizza for bitcoins?"</a>, oferecendo 10 mil bitcoins por duas pizzas grandes. Em 22 de maio, ele avisou que tinha conseguido fazer a troca e agradeceu ao usuário jercos, que fez o pedido. A data virou o Bitcoin Pizza Day, contado em <a href="/artigos/bitcoin-pizza-day-a-pizza-de-10-mil-bitcoins">a pizza de 10 mil bitcoins</a>.</p>
<h3>9. A maior exchange da época nasceu de um site de cartas</h3>
<p>Mt. Gox vem de Magic: The Gathering Online eXchange, um site de troca de cartas do jogo Magic que não deu certo. Em julho de 2010, o domínio foi reaproveitado como exchange de bitcoin e chegou a ser a maior do mundo, até quebrar em 2014 com centenas de milhares de moedas sumidas, como conta a história do <a href="/artigos/mt-gox-o-colapso-da-maior-exchange-de-bitcoin">colapso da Mt. Gox</a>.</p>

<h2>Bugs e sustos no código</h2>
<h3>10. O dia em que surgiram 184 bilhões de bitcoins</h3>
<p>Em 15 de agosto de 2010, usuários notaram que o bloco 74.638 continha uma transação que criava 184.467.440.737,09551616 bitcoins, segundo o registro do <a href="https://en.bitcoin.it/wiki/Value_overflow_incident" rel="noopener noreferrer">incidente de estouro de valor na Bitcoin Wiki</a>. Dois endereços receberam cerca de 92,2 bilhões de BTC cada um. O código que conferia as transações não previa saídas tão grandes que, somadas, estourassem o limite numérico do programa.</p>
<div class="callout-box callout-fact"><span class="callout-label">Fato curioso</span><p>O número 184.467.440.737,09551616 não foi escolhido por ninguém. Convertido em satoshis, ele dá exatamente 2 elevado a 64, a quantidade de valores que cabe num número inteiro de 64 bits, o tipo que o programa usava para guardar quantias. Foi o estouro desse número, e não uma emissão de verdade, que enganou a checagem da rede.</p></div>
<h3>11. A correção saiu em menos de cinco horas</h3>
<p>Uma versão nova do programa foi publicada em menos de cinco horas, com um <a href="/glossario#soft-fork">soft fork</a> que passou a rejeitar transações desse tipo. Por um tempo existiram duas cadeias, até que a cadeia corrigida ultrapassou a outra no bloco 74.691. Desde então, a transação ruim não existe para quem segue a cadeia mais longa, e as moedas criadas por ela também não. O bloco 74.638 de hoje é outro bloco, com outro conteúdo.</p>

<h2>Escassez programada: halvings e o fim da emissão</h2>
<h3>12. O primeiro halving foi em 28 de novembro de 2012</h3>
<p>O bloco 210.000 foi minerado em 28 de novembro de 2012 e cortou a recompensa de 50 para 25 bitcoins por bloco. Desde então vieram mais três cortes, e hoje a recompensa é de 3,125 BTC. O histórico completo está no guia do <a href="/artigos/halving-do-bitcoin-o-que-e-e-quando-e-o-proximo">halving do Bitcoin e quando é o próximo</a>.</p>
<h3>13. O total nunca vai fechar em 21 milhões redondos</h3>
<p>A recompensa é calculada em satoshis e a divisão por dois descarta as frações. Somando todas as fases, o total possível dá 20.999.999,9769 bitcoins, um pouco abaixo dos 21 milhões. E como os 50 BTC do bloco gênese não podem ser gastos, o número de moedas utilizáveis é menor ainda.</p>
<h3>14. A última fração deve sair por volta de 2140</h3>
<p>Depois de 33 fases de 210 mil blocos, a recompensa chega a zero no bloco 6.930.000. No ritmo de um bloco a cada 10 minutos, isso cai por volta de 2140. A partir daí, os mineradores vão viver só das taxas pagas nas transações. Veja quanto falta para o próximo corte na <a href="/ferramentas/halving">contagem regressiva do halving</a>.</p>

<h2>Fortunas que ninguém consegue mover</h2>
<h3>15. Satoshi teria perto de 1 milhão de bitcoins nunca gastos</h3>
<p>Em 2013, o pesquisador Sergio Lerner analisou um campo técnico dos primeiros blocos e concluiu que uma única entidade, muito provavelmente Satoshi, minerou boa parte deles. A estimativa dele, feita a olho, foi de cerca de 1 milhão de bitcoins, que até onde se sabe nunca se moveram. É uma inferência estatística, não uma prova, e a discussão continua no texto sobre <a href="/artigos/quem-e-satoshi-nakamoto">quem é Satoshi Nakamoto</a>.</p>
<p>Outras fortunas paradas têm dono conhecido. A mais famosa é a do galês que jogou fora um disco com milhares de bitcoins em 2013, contada em <a href="/artigos/o-homem-que-jogou-bitcoins-no-lixo-james-howells">o homem que jogou bitcoins no lixo</a>.</p>
<table>
<thead><tr><th>Data</th><th>Fato</th><th>Onde conferir</th></tr></thead>
<tbody>
<tr><td>03/01/2009</td><td>Bloco gênese com a manchete do The Times</td><td>Bloco 0</td></tr>
<tr><td>09/01/2009</td><td>Bloco 1, mais de cinco dias depois</td><td>Bloco 1</td></tr>
<tr><td>12/01/2009</td><td>10 BTC de Satoshi para Hal Finney</td><td>Bloco 170</td></tr>
<tr><td>22/05/2010</td><td>Duas pizzas por 10 mil BTC</td><td>BitcoinTalk, tópico 137</td></tr>
<tr><td>15/08/2010</td><td>Bug cria 184 bilhões de BTC</td><td>Bloco 74.638 da cadeia descartada</td></tr>
<tr><td>28/11/2012</td><td>Primeiro halving, de 50 para 25 BTC</td><td>Bloco 210.000</td></tr>
<tr><td>Por volta de 2140</td><td>Última recompensa em bitcoin</td><td>Bloco 6.929.999</td></tr>
</tbody>
</table>

<h2>Lendas que circulam e nunca se confirmaram</h2>
<p>Algumas histórias se repetem tanto que parecem fato. A de que Satoshi é japonês, por exemplo, se apoia no nome, que é um pseudônimo, e num perfil online em que ele dizia morar no Japão. Nada disso foi comprovado. A de que a pizzaria aceitou bitcoin também não é verdade: quem recebeu as moedas foi jercos, que fez o pedido e pagou a pizzaria com dinheiro comum.</p>
<p>Há ainda lendas que viram golpe. Desconfie de quem oferece "a carteira de Satoshi", moedas de 2009 com desconto ou serviços para recuperar bitcoins perdidos em troca de uma taxa ou da sua seed. Nenhuma dessas ofertas tem como ser verdadeira, e os truques mais comuns estão no guia sobre <a href="/artigos/golpes-com-criptomoedas-como-se-proteger">golpes com criptomoedas</a>.</p>
<p>Quer ir à origem de tudo? Leia a história do <a href="/artigos/whitepaper-do-bitcoin-o-documento-que-criou-a-moeda">whitepaper do Bitcoin</a>, percorra a linha do tempo das <a href="/historia">Memórias do Bitcoin</a> e, para saber quanto valeriam hoje os 10 mil bitcoins da pizza, faça a conta no <a href="/ferramentas/conversor">conversor de Bitcoin</a>.</p>`,
  faq: [
    {
      question: "Qual é a menor unidade do Bitcoin?",
      answer:
        "A menor unidade é o satoshi, que vale um centésimo milionésimo de bitcoin, ou 0,00000001 BTC. Um bitcoin inteiro tem 100 milhões de satoshis, e o nome homenageia Satoshi Nakamoto, criador da moeda. Por isso dá para comprar e enviar frações muito pequenas, sem precisar de uma moeda inteira.",
    },
    {
      question: "O que está escrito no primeiro bloco do Bitcoin?",
      answer:
        "O bloco gênese, de 3 de janeiro de 2009, traz o texto 'The Times 03/Jan/2009 Chancellor on brink of second bailout for banks', manchete do jornal britânico The Times sobre um novo socorro do governo aos bancos. A frase pode ser conferida em qualquer explorador de blocos e é vista como um comentário sobre a crise financeira de 2008.",
    },
    {
      question: "É verdade que um bug criou bilhões de bitcoins?",
      answer:
        "Sim. Em 15 de agosto de 2010, uma transação no bloco 74.638 criou mais de 184 bilhões de bitcoins por causa de um estouro numérico no código. Uma correção saiu em menos de cinco horas, a rede seguiu pela cadeia corrigida a partir do bloco 74.691 e essas moedas deixaram de existir.",
    },
    {
      question: "Quando o último bitcoin será minerado?",
      answer:
        "Pelo cronograma do protocolo, a recompensa dos mineradores cai pela metade a cada 210 mil blocos e chega a zero no bloco 6.930.000. No ritmo médio de um bloco a cada 10 minutos, isso deve acontecer por volta de 2140. Depois disso, os mineradores passam a receber só as taxas das transações.",
    },
    {
      question: "Quantos bitcoins Satoshi Nakamoto tem?",
      answer:
        "Ninguém sabe ao certo. A estimativa mais citada é do pesquisador Sergio Lerner, que em 2013 analisou os primeiros blocos e calculou que uma única entidade, provavelmente Satoshi, minerou perto de 1 milhão de bitcoins que nunca foram gastos. É uma inferência estatística a partir da blockchain, não uma prova de quem é o dono.",
    },
  ],
  quiz: [
    {
      question: "O que o Bitcoin com B maiúsculo designa, pela convenção do bitcoin.org?",
      options: ["A moeda em si", "A rede e o protocolo", "Só a sigla BTC"],
      answer: 1,
      explanation: "Com B maiúsculo, Bitcoin descreve o conceito e a rede. Com b minúsculo, bitcoin é a unidade de conta, a moeda.",
    },
    {
      question: "Em que bloco aconteceu a primeira transferência entre duas pessoas?",
      options: ["Bloco 0", "Bloco 170", "Bloco 210.000"],
      answer: 1,
      explanation: "O bloco 170, de 12 de janeiro de 2009, registrou 10 BTC enviados por Satoshi a Hal Finney.",
    },
    {
      question: "Qual é o total máximo de bitcoins pelo cálculo exato do protocolo?",
      options: ["Exatamente 21 milhões", "Um pouco menos de 21 milhões", "Não existe limite"],
      answer: 1,
      explanation: "Como a recompensa é calculada em satoshis e as frações são descartadas a cada halving, o total possível é de 20.999.999,9769 BTC.",
    },
  ],
};

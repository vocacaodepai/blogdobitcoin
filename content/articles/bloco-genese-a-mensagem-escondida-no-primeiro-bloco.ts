import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "bloco-genese-a-mensagem-escondida-no-primeiro-bloco",
  title: "Bloco gênese: a mensagem escondida no primeiro bloco do Bitcoin",
  seoTitle: "Bloco gênese: a mensagem do primeiro bloco do Bitcoin",
  excerpt:
    "Bloco gênese: veja o que diz a manchete do The Times gravada no primeiro bloco do Bitcoin, por que os 50 BTC nunca podem ser gastos e o que veio depois.",
  metaDescription:
    "A história do bloco gênese do Bitcoin, de 3 de janeiro de 2009: a frase do jornal The Times, os 50 BTC impossíveis de gastar e a longa pausa até o bloco 1.",
  category: "historia",
  historyYear: 2009,
  date: "2026-10-22",
  readTime: 8,
  imageQuery: "bitcoin genesis block code",
  seed: 43,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O bloco gênese foi registrado em 3 de janeiro de 2009 e traz gravada a manchete do The Times sobre um segundo socorro do governo britânico aos bancos.",
    "Os 50 BTC de recompensa desse bloco nunca poderão ser gastos, por uma particularidade do código que segue até hoje no software do Bitcoin.",
    "O bloco 1 só apareceu mais de cinco dias depois, e o motivo dessa pausa nunca foi explicado por Satoshi Nakamoto.",
  ],
  content: `<p>O bloco gênese é o primeiro bloco da blockchain do Bitcoin, registrado em 3 de janeiro de 2009. Dentro dele, Satoshi Nakamoto gravou uma frase tirada da capa do jornal britânico The Times daquele dia: "Chancellor on brink of second bailout for banks", algo como "ministro das Finanças à beira de um segundo socorro aos bancos".</p>
<p>Este texto conta o que se sabe sobre aquele sábado, o que a manchete dizia, por que os 50 bitcoins do bloco nunca poderão ser gastos e o que aconteceu nos dias seguintes. O bloco continua lá para quem quiser conferir: basta abrir o <a href="https://mempool.space/block/0" rel="noopener noreferrer">bloco 0 no explorador mempool.space</a> para ver a data, o hash e a única transação que ele carrega. Se o termo for novo, o verbete <a href="/glossario#bloco-genese">bloco gênese</a> do glossário resume a ideia em duas linhas.</p>

<h2>3 de janeiro de 2009: o dia em que a rede nasceu</h2>
<p>O relógio do bloco marca 18h15min05s no horário universal (UTC) de 3 de janeiro de 2009. Ninguém sabe onde estava o computador que o produziu. A hipótese mais aceita é a óbvia: foi o próprio Satoshi, que tinha divulgado o <a href="/artigos/whitepaper-do-bitcoin-o-documento-que-criou-a-moeda">whitepaper do Bitcoin</a> pouco mais de dois meses antes, em 31 de outubro de 2008.</p>
<p>O bloco é pequeno: 285 bytes e uma única transação, segundo o mempool.space. O hash dele, uma espécie de impressão digital, começa com uma fila de zeros (000000000019d6...), sinal de que alguém gastou processamento para encontrá-lo pela <a href="/glossario#prova-de-trabalho">prova de trabalho</a>. É o mesmo mecanismo que os mineradores usam até hoje, explicado no guia de <a href="/artigos/mineracao-de-bitcoin-como-funciona">mineração de Bitcoin</a>.</p>
<p>Há uma diferença em relação a todos os blocos que vieram depois. O gênese não aponta para nenhum bloco anterior, porque não existe bloco anterior. Ele é o marco zero da corrente: o bloco 1 aponta para ele, o bloco 2 aponta para o 1, e assim por diante até o bloco que acabou de ser minerado.</p>

<h2>A manchete do The Times e o que ela dizia</h2>
<p>A frase gravada no bloco, completa, é "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks". Ela fica no campo da transação de recompensa, a coinbase, que quem minera o bloco pode preencher com o texto que quiser. Não é código secreto nem criptografia: são letras comuns, que qualquer explorador de blocos converte de hexadecimal para texto.</p>
<p>O "Chancellor" era Alistair Darling, o ministro das Finanças do Reino Unido. A reportagem daquele sábado contava que ele avaliava um segundo pacote de ajuda aos bancos, porque o crédito continuava secando. Segundo o texto do jornal, a estatização parcial de 37 bilhões de libras feita no ano anterior não tinha conseguido manter o crédito circulando, e uma das opções em estudo era criar um "banco ruim" para absorver as dívidas podres.</p>
<p>Há duas leituras para a escolha, e elas não se excluem. A primeira é técnica: citar a capa de um jornal datado prova que o bloco não foi montado antes daquele dia. A segunda é política. Em fevereiro de 2009, Satoshi escreveu no fórum da P2P Foundation que <a href="https://satoshi.nakamotoinstitute.org/posts/p2pfoundation/1/" rel="noopener noreferrer">"o problema de raiz da moeda convencional é toda a confiança necessária para que ela funcione"</a> (tradução livre) e criticou os bancos que emprestam o dinheiro dos clientes "em ondas de bolhas de crédito", com uma fração mínima em reserva. A manchete era o retrato exato dessa crítica.</p>
<p>A escolha de um jornal britânico também alimentou a teoria de que Satoshi vivia no Reino Unido. Ela nunca foi confirmada e é só uma das pistas discutidas no texto sobre <a href="/artigos/quem-e-satoshi-nakamoto">quem é Satoshi Nakamoto</a>.</p>

<h2>Os 50 bitcoins que ninguém pode gastar</h2>
<p>Como todo bloco da época, o gênese criou 50 BTC novos, enviados ao endereço 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa. Só que essas moedas nunca entraram no registro de saldos disponíveis, o conjunto de UTXOs que os computadores da rede consultam para aceitar um pagamento. Na prática, é como um cheque que nenhum banco aceita descontar.</p>
<p>O motivo está no próprio código. O bloco gênese não é baixado da rede: ele vem escrito dentro do programa, e cada <a href="/glossario#no">nó do Bitcoin</a> começa a corrente a partir dele. No <a href="https://github.com/bitcoin/bitcoin/blob/master/src/kernel/chainparams.cpp" rel="noopener noreferrer">arquivo de parâmetros do Bitcoin Core</a>, um comentário avisa que a saída da transação de geração não pode ser gasta, porque não existia originalmente no banco de dados. A frase do The Times aparece no mesmo arquivo, letra por letra.</p>
<p>Se foi de propósito, ninguém sabe. Satoshi nunca explicou, e mudar isso agora exigiria alterar uma regra de consenso, algo que a comunidade não tem motivo para fazer por 50 moedas simbólicas.</p>
<div class="callout-box callout-fact"><span class="callout-label">Fato curioso</span><p>As únicas moedas do endereço do bloco gênese que jamais poderão sair dali são justamente as primeiras. Já as doações que desconhecidos mandam para esse endereço poderiam, em tese, ser gastas por quem tiver a chave privada dele. Até outubro de 2026, nenhum satoshi tinha saído.</p></div>

<h2>Cinco dias de silêncio até o bloco 1</h2>
<p>Numa rede que produz um bloco a cada 10 minutos em média, o segundo bloco demorou mais de cinco dias. O bloco 1 tem horário de 2h54min25s (UTC) de 9 de janeiro de 2009, segundo o mempool.space. Na véspera, à tarde no horário da costa leste dos Estados Unidos, Satoshi tinha anunciado a versão 0.1 do programa na mesma lista de e-mails de criptografia em que publicara o whitepaper.</p>
<p>O que aconteceu nesse intervalo é especulação. O wiki do Bitcoin reúne as hipóteses mais citadas: Satoshi pode ter montado o gênese com a data da manchete e esperado alguns dias para lançar o software; o bloco pode ter levado dias para ser minerado; ou ele pode ter testado a rede numa versão preliminar até o dia 9, apagado os blocos de teste e reaproveitado o gênese. Nenhuma delas foi confirmada.</p>
<p>Três dias depois do bloco 1, a rede registrou o primeiro envio de bitcoin entre duas pessoas, no bloco 170: 10 BTC de Satoshi para o programador Hal Finney, história contada em <a href="/artigos/hal-finney-o-primeiro-a-receber-bitcoin">Hal Finney, o primeiro a receber bitcoin</a>.</p>
<table>
<thead><tr><th>Data (UTC)</th><th>Bloco</th><th>O que aconteceu</th></tr></thead>
<tbody>
<tr><td>31/10/2008</td><td>Nenhum</td><td>Satoshi divulga o whitepaper numa lista de e-mails de criptografia</td></tr>
<tr><td>03/01/2009</td><td>0 (gênese)</td><td>Bloco com a manchete do The Times e 50 BTC que não podem ser gastos</td></tr>
<tr><td>08/01/2009</td><td>Nenhum</td><td>Anúncio da versão 0.1 do programa na mesma lista</td></tr>
<tr><td>09/01/2009</td><td>1</td><td>Primeiro bloco depois do gênese, mais de cinco dias mais tarde</td></tr>
<tr><td>12/01/2009</td><td>170</td><td>Primeira transação entre pessoas: 10 BTC para Hal Finney</td></tr>
<tr><td>05/01/2024</td><td>824.513</td><td>Um remetente desconhecido manda 26,9 BTC ao endereço do gênese</td></tr>
</tbody>
</table>

<h2>O endereço do gênese virou ponto de homenagem</h2>
<p>Com o tempo, o endereço do bloco gênese ganhou fama de altar. Gente do mundo inteiro manda pequenas quantias para lá, como homenagem a Satoshi. Somadas, essas doações passavam de 57 BTC em outubro de 2026, segundo o mempool.space, sem contar os 50 originais.</p>
<p>O caso mais chamativo foi em 5 de janeiro de 2024, dois dias depois do aniversário de 15 anos da rede. Uma única <a href="https://mempool.space/tx/d7db4f96a4059c8906b953677ce533493d7b9da0f854a21b99f5772910dd0a31" rel="noopener noreferrer">transação confirmada no bloco 824.513</a> mandou 26,9 BTC de uma vez para o endereço. Quem enviou nunca se apresentou, e o gesto rendeu especulações de todo tipo, nenhuma comprovada.</p>
<p>Uma coisa é certa: esse dinheiro só sai dali com a <a href="/glossario#chave-privada">chave privada</a> do endereço, que se presume estar com Satoshi, se é que ela ainda existe. Para quem mandou, o efeito prático é o mesmo de queimar as moedas.</p>

<h2>Mitos e erros comuns sobre o bloco gênese</h2>
<p>Por ser o começo de tudo, o bloco gênese acumula lendas. Estas são as confusões que mais aparecem:</p>
<ul>
<li><strong>"A mensagem é um código escondido."</strong> Não é. O texto está em letras comuns, num campo que todo minerador pode preencher, e qualquer explorador mostra.</li>
<li><strong>"Os 50 BTC fazem parte da fortuna de Satoshi."</strong> Eles aparecem no registro, mas ninguém pode gastá-los, nem ele.</li>
<li><strong>"O bloco foi minerado em 3 de janeiro, em 10 minutos."</strong> A data gravada é 3 de janeiro, e a manchete prova que ele não foi feito antes. Quanto tempo a mineração levou, ninguém sabe.</li>
<li><strong>"Mandar bitcoin para o gênese é uma forma de guardar."</strong> O dinheiro fica parado lá, mas não volta para quem mandou. É uma homenagem sem retorno.</li>
</ul>
<p>Há também um risco prático. Golpistas usam a fama de Satoshi e dos primeiros blocos para pedir "doações" ou vender moedas "da época do gênese". Até hoje ninguém provou ser Satoshi assinando com as chaves dos primeiros blocos, e qualquer abordagem desse tipo deve ser tratada como golpe. Os truques mais comuns estão no guia sobre <a href="/artigos/golpes-com-criptomoedas-como-se-proteger">golpes com criptomoedas</a>.</p>

<h2>Por que o primeiro bloco ainda importa</h2>
<p>O gênese continua em uso até hoje. Toda vez que um nó novo é ligado, ele parte desse bloco e confere, um por um, todos os que vieram depois. Se alguém tentasse reescrever a história, a corrente deixaria de bater com o marco zero que cada computador já traz gravado. O funcionamento dessa corrente está no guia <a href="/artigos/o-que-e-bitcoin-e-como-funciona">o que é Bitcoin e como funciona</a>.</p>
<p>É também a partir do gênese que se contam os halvings. A recompensa cai pela metade a cada 210 mil blocos contados do bloco 0: foi assim nos blocos 210.000, 420.000, 630.000 e 840.000, como mostra o guia sobre <a href="/artigos/halving-do-bitcoin-o-que-e-e-quando-e-o-proximo">o halving do Bitcoin</a>. Em 22 de outubro de 2026, a rede passava do bloco 972.600, e o próximo corte está marcado para o bloco 1.050.000, previsto para 2028. A contagem regressiva fica na <a href="/ferramentas/halving">ferramenta do halving</a>.</p>
<p>E há o recado. Quase 18 anos depois, a frase sobre o socorro aos bancos continua sendo a primeira coisa escrita na blockchain, uma espécie de carta de intenções de um sistema que tenta funcionar sem precisar confiar em banco. Concordar ou não com ela é escolha de cada um, mas entender de onde ela veio ajuda a entender por que o Bitcoin existe.</p>
<p>Para seguir a história em ordem, a linha do tempo completa está nas <a href="/historia">Memórias do Bitcoin</a>. E, se quiser saber quanto vale hoje uma fração daquelas primeiras moedas, acompanhe o <a href="/bitcoin">preço do Bitcoin ao vivo</a>.</p>`,
  faq: [
    {
      question: "O que é o bloco gênese do Bitcoin?",
      answer:
        "É o primeiro bloco da blockchain do Bitcoin, o bloco de número 0, registrado em 3 de janeiro de 2009. Ele não aponta para nenhum bloco anterior e vem escrito dentro do próprio programa, então todo computador da rede começa a conferir a corrente a partir dele. Foi nele que Satoshi Nakamoto gravou a manchete do jornal The Times.",
    },
    {
      question: "O que está escrito no bloco gênese?",
      answer:
        "A frase é The Times 03/Jan/2009 Chancellor on brink of second bailout for banks, a manchete do jornal britânico sobre o ministro das Finanças à beira de um segundo socorro aos bancos. Ela prova que o bloco não foi criado antes daquela data e costuma ser lida como uma crítica ao sistema bancário da crise de 2008.",
    },
    {
      question: "Por que os 50 BTC do bloco gênese não podem ser gastos?",
      answer:
        "Porque a transação de recompensa do bloco gênese nunca foi incluída no registro de saldos disponíveis da rede. O comentário no código do Bitcoin Core diz que essa saída não pode ser gasta porque não existia originalmente no banco de dados. Não se sabe se Satoshi fez isso de propósito, e mudar a regra hoje exigiria alterar o consenso.",
    },
    {
      question: "Quem minerou o bloco gênese?",
      answer:
        "A hipótese mais aceita é que o próprio Satoshi Nakamoto minerou o bloco gênese, já que ele lançou o software e era o único participante conhecido naquele momento. Não há prova direta disso, nem informação sobre onde estava o computador. Também não se sabe quanto tempo a mineração levou, porque o bloco seguinte só apareceu mais de cinco dias depois.",
    },
    {
      question: "Dá para ver o bloco gênese hoje?",
      answer:
        "Sim. Qualquer explorador de blocos mostra o bloco 0, com data, hash, tamanho de 285 bytes e a transação única com a mensagem do The Times. No mempool.space, basta procurar pelo bloco 0. O endereço que recebeu os 50 BTC também pode ser consultado, e nele aparecem as doações enviadas como homenagem desde então.",
    },
  ],
  quiz: [
    {
      question: "Em que data foi registrado o bloco gênese do Bitcoin?",
      options: ["31 de outubro de 2008", "3 de janeiro de 2009", "22 de maio de 2010"],
      answer: 1,
      explanation: "O bloco 0 tem horário de 18h15 (UTC) de 3 de janeiro de 2009. Em 31 de outubro de 2008 saiu o whitepaper, e 22 de maio de 2010 é o Bitcoin Pizza Day.",
    },
    {
      question: "De qual jornal é a manchete gravada no bloco gênese?",
      options: ["The Times", "The New York Times", "Financial Times"],
      answer: 0,
      explanation: "A frase começa com The Times 03/Jan/2009 e reproduz a manchete do jornal britânico sobre um segundo socorro aos bancos.",
    },
    {
      question: "O que acontece com os 50 BTC de recompensa do bloco gênese?",
      options: ["Satoshi gastou em 2010", "Ninguém pode gastá-los", "Foram distribuídos no primeiro halving"],
      answer: 1,
      explanation: "Por uma particularidade do código, a recompensa do bloco gênese nunca entrou no registro de saldos e não pode ser gasta por ninguém.",
    },
  ],
};

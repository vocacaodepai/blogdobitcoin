import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "halving-do-bitcoin-o-que-e-e-quando-e-o-proximo",
  title: "Halving do Bitcoin: o que é, quando é o próximo e o que muda",
  seoTitle: "Halving do Bitcoin: o que é e quando é o próximo",
  excerpt:
    "Entenda o halving do Bitcoin: o que é, os cortes de 2012 a 2024, quando deve ser o próximo, em 2028, e o que muda para mineradores, oferta e preço.",
  metaDescription:
    "Halving do Bitcoin explicado: a regra dos 210 mil blocos, a recompensa de 3,125 BTC, a data estimada do próximo corte e o que o histórico de preço mostra.",
  category: "bitcoin",
  date: "2026-10-22",
  readTime: 8,
  imageQuery: "bitcoin coin hourglass",
  seed: 2,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O halving corta pela metade a recompensa dos mineradores a cada 210 mil blocos, e a de hoje é de 3,125 BTC por bloco.",
    "O próximo halving acontece no bloco 1.050.000, com data estimada entre março e abril de 2028, conforme o ritmo dos blocos.",
    "O preço subiu depois de cada halving anterior, mas cada vez menos, e quatro episódios não garantem que isso se repita.",
  ],
  content: `<p>O halving do Bitcoin é o corte pela metade da recompensa que os mineradores recebem por bloco. Ele acontece a cada 210 mil blocos, perto de quatro anos. O último foi em abril de 2024, quando o valor caiu de 6,25 para 3,125 BTC, e o próximo halving está programado para o bloco 1.050.000, previsto para 2028.</p>
<p>Neste guia você vai entender por que essa regra existe, ver os quatro halvings que já aconteceram, saber como se estima a data do próximo e o que muda para os mineradores, para a oferta de moedas e, com todo o cuidado, para o preço. Se quiser acompanhar a cotação enquanto lê, veja o <a href="/bitcoin">preço do Bitcoin hoje</a>, atualizado ao vivo.</p>

<h2>O que é o halving do Bitcoin</h2>
<p>Todo bloco novo do Bitcoin cria moedas que não existiam antes e as entrega ao minerador que fechou aquele <a href="/glossario#bloco">bloco</a>. Essa emissão se chama subsídio. O halving (em inglês, algo como "partir ao meio") é a regra que divide esse subsídio por dois a cada 210 mil blocos. Não é decisão de empresa nem de governo: a regra está no código que todos os nós da rede executam, e um bloco que tente pagar mais do que o permitido é rejeitado.</p>
<p>O minerador recebe duas coisas por bloco: o subsídio e as taxas pagas por quem enviou transações. O halving corta só a primeira parte. As taxas continuam variando conforme a disputa por espaço no bloco e devem ganhar peso com o tempo, à medida que o subsídio encolhe. Se você ainda não domina blocos, nós e mineração, o guia sobre <a href="/artigos/o-que-e-bitcoin-e-como-funciona">o que é Bitcoin e como funciona</a> explica tudo do zero.</p>

<h2>Por que o Bitcoin tem halving: o teto de 21 milhões</h2>
<p>O halving é o mecanismo que garante o limite de 21 milhões de moedas. O subsídio começou em 50 BTC por bloco em 2009 e, cortado pela metade a cada etapa, forma uma soma que nunca chega a 21 milhões. Pelo <a href="https://en.bitcoin.it/wiki/Controlled_supply" rel="noopener noreferrer">cronograma de emissão documentado na Bitcoin Wiki</a>, a última fração deve ser minerada por volta de 2140, e o total final fica um pouco abaixo de 21 milhões.</p>
<p>Na prática, a emissão nova encolhe rápido. Com 3,125 BTC por bloco e cerca de 144 blocos por dia, a rede cria hoje perto de 450 BTC por dia, ou uns 164 mil por ano. Sobre um estoque de pouco mais de 20,1 milhões de moedas em outubro de 2026, isso dá uma inflação de oferta perto de 0,8% ao ano. Depois do próximo halving, a mesma conta cai para cerca de 0,4%.</p>

<h2>Todos os halvings até hoje: 2012, 2016, 2020 e 2024</h2>
<p>As datas abaixo vêm do horário gravado em cada bloco que marcou o corte. O de 2024 saiu na noite de 19 de abril no horário de Brasília, que já era 20 de abril no horário universal (UTC).</p>
<table>
<thead><tr><th>Halving</th><th>Data</th><th>Bloco</th><th>Recompensa antes</th><th>Recompensa depois</th></tr></thead>
<tbody>
<tr><td>1º</td><td>28/11/2012</td><td>210.000</td><td>50 BTC</td><td>25 BTC</td></tr>
<tr><td>2º</td><td>09/07/2016</td><td>420.000</td><td>25 BTC</td><td>12,5 BTC</td></tr>
<tr><td>3º</td><td>11/05/2020</td><td>630.000</td><td>12,5 BTC</td><td>6,25 BTC</td></tr>
<tr><td>4º</td><td>19/04/2024 (20/04 em UTC)</td><td>840.000</td><td>6,25 BTC</td><td>3,125 BTC</td></tr>
<tr><td>5º (previsto)</td><td>2028</td><td>1.050.000</td><td>3,125 BTC</td><td>1,5625 BTC</td></tr>
</tbody>
</table>
<p>Repare que nenhum intervalo chegou a quatro anos cheios. Entre 2012 e 2016 foram três anos e sete meses; entre 2020 e 2024, três anos e onze meses. Isso acontece porque o poder de mineração cresceu quase sempre, e os blocos saíram, na média, um pouco mais rápido que os 10 minutos previstos.</p>
<h3>O halving de 2024 e o bloco das taxas</h3>
<p>O bloco 840.000, minerado pelo pool ViaBTC, carregou cerca de 37,6 BTC em taxas, mais de dez vezes o novo subsídio, como mostra o <a href="https://mempool.space/block/840000" rel="noopener noreferrer">registro do bloco na mempool.space</a>. O motivo foi a estreia do Runes, um padrão de tokens criado sobre o Bitcoin e lançado exatamente no bloco do halving. Na primeira semana, ele gerou mais de US$ 135 milhões em taxas para os mineradores, segundo <a href="https://www.theblock.co/post/292157/bitcoin-average-daily-fees-ethereum-runes" rel="noopener noreferrer">levantamento do The Block</a>. A euforia passou em cerca de duas semanas, mas mostrou na prática como as taxas podem compensar parte do subsídio perdido.</p>

<h2>Quando é o próximo halving do Bitcoin</h2>
<p>O quinto halving acontece no bloco 1.050.000, quando a recompensa cai de 3,125 para 1,5625 BTC. Em 22 de outubro de 2026, a rede estava perto do bloco 972.660, segundo a mempool.space. Faltavam, portanto, cerca de 77.340 blocos.</p>
<p>A conta da data é simples: se cada bloco levar exatamente 10 minutos, 77.340 blocos dão uns 537 dias, o que aponta para abril de 2028. Só que os blocos raramente saem no ritmo exato. Quando o poder de mineração cresce mais rápido do que a rede consegue compensar com o ajuste de <a href="/glossario#dificuldade">dificuldade</a>, os blocos aceleram e a data adianta. Em outubro de 2026, o intervalo médio estava perto de 9 minutos e 40 segundos, ritmo que puxaria a estimativa para o fim de março de 2028.</p>
<p>Por isso, desconfie de quem crava dia e hora com mais de um ano de antecedência. A estimativa fica mais precisa conforme o evento se aproxima. A nossa <a href="/ferramentas/halving">contagem regressiva do halving</a> lê a altura real do bloco e o ritmo atual da mineração e recalcula a data sozinha.</p>

<h2>O que o halving muda para os mineradores</h2>
<p>Para quem minera, o halving é um corte de receita de um bloco para o outro. Na noite de 19 de abril de 2024, um bloco rendia 6,25 BTC de subsídio; no bloco seguinte, 3,125. A conta de luz e o custo das máquinas continuaram iguais. Quem operava no limite, com equipamento antigo ou energia cara, passou a perder dinheiro e teve de desligar máquinas, trocar por modelos mais eficientes ou procurar energia mais barata.</p>
<p>Um exemplo em reais mostra o tamanho do tombo. Suponha, só para a conta, que 1 BTC valesse R$ 500 mil (valor hipotético). O subsídio de um bloco cairia de R$ 3,125 milhões para R$ 1,5625 milhão. Um pool que achasse 20 blocos por dia veria a receita de subsídio encolher de R$ 62,5 milhões para R$ 31,25 milhões por dia, sem nenhuma mudança do lado dos custos.</p>
<p>Mesmo assim, a rede não enfraqueceu. Na semana do halving de 2024, o <a href="/glossario#hashrate">hashrate</a>, o poder de processamento total da rede, estava perto de 600 EH/s; em outubro de 2026, já passava de 1.000 EH/s, segundo dados da mempool.space. Máquinas mais eficientes e as <a href="/glossario#taxa-de-rede">taxas de rede</a> ajudam a fechar a conta. Como funcionam as máquinas, os pools e o custo de energia está no guia de <a href="/artigos/mineracao-de-bitcoin-como-funciona">mineração de Bitcoin</a>.</p>

<h2>O que o halving muda na oferta e no preço</h2>
<p>Do lado da oferta, o efeito é direto: chegam menos moedas novas ao mercado a cada dia. Mineradores costumam vender parte do que recebem para pagar energia e equipamento, então o halving reduz esse fluxo de venda. O que acontece com o preço depende do outro lado, a demanda, e essa ninguém programa.</p>
<p>Até aqui, o preço esteve bem mais alto um ano depois de cada halving, como mostra a tabela feita com o <a href="https://www.blockchain.com/explorer/charts/market-price" rel="noopener noreferrer">preço médio de mercado em dólar da Blockchain.com</a>:</p>
<table>
<thead><tr><th>Halving de</th><th>Preço no dia (aprox.)</th><th>Um ano depois (aprox.)</th></tr></thead>
<tbody>
<tr><td>2012</td><td>US$ 12</td><td>US$ 965</td></tr>
<tr><td>2016</td><td>US$ 660</td><td>US$ 2.550</td></tr>
<tr><td>2020</td><td>US$ 8.750</td><td>US$ 55.900</td></tr>
<tr><td>2024</td><td>US$ 63.800</td><td>US$ 85.100</td></tr>
</tbody>
</table>
<p>Repare que a alta ficou menor a cada ciclo: de quase 80 vezes no primeiro para cerca de um terço no último. E quatro episódios são uma amostra pequena demais para virar regra. O preço também reage a juros, a fluxo de fundos, a regulação e a crises que não têm nada a ver com o halving.</p>
<p>Passado não garante futuro, e nada aqui é recomendação de compra: a <a href="/glossario#volatilidade">volatilidade</a> do bitcoin é alta, e vale ler o <a href="/aviso-de-risco">aviso de risco</a> antes de qualquer decisão. A análise ciclo a ciclo, com topos e fundos, está em <a href="/artigos/ciclos-do-bitcoin-o-que-os-halvings-mostram">o que os halvings mostram sobre os ciclos do Bitcoin</a>.</p>

<h2>Mitos e erros comuns sobre o halving</h2>
<p>Todo halving vem acompanhado de muita empolgação e de algumas ideias erradas. As mais comuns:</p>
<ul>
<li><strong>"O preço dispara no dia do halving."</strong> Nos quatro casos, o preço quase não mudou no dia. Quando houve alta forte, ela veio ao longo de meses.</li>
<li><strong>"O halving tem data marcada."</strong> O que é fixo é o bloco. A data é sempre uma estimativa que depende do ritmo da mineração.</li>
<li><strong>"Quem tem bitcoin perde metade."</strong> O halving não mexe no saldo de ninguém. Ele só reduz a emissão de moedas novas.</li>
<li><strong>"Depois de 2140 a rede para."</strong> Quando o subsídio acabar, os mineradores vão viver das taxas de transação. A rede continua.</li>
</ul>
<div class="callout-box callout-bad"><span class="callout-label">Nunca faça</span><p>Não mande bitcoin para "promoções do halving" que prometem devolver o dobro. Ninguém dobra bitcoin: esse é um golpe clássico que volta a cada ciclo, com perfis falsos e vídeos manipulados. Veja como reconhecer esse e outros truques no guia de <a href="/artigos/golpes-com-criptomoedas-como-se-proteger">golpes com criptomoedas</a>.</p></div>
<p>Outro erro é tratar o halving como sinal de compra garantido. Quem entra no bitcoin só por causa da data costuma comprar no meio da euforia e vender no primeiro tombo. Se a ideia é acumular com calma, aportes pequenos e regulares tendem a pesar menos no emocional do que tentar acertar o momento.</p>

<h2>Como acompanhar o próximo halving</h2>
<p>O halving é uma das poucas coisas previsíveis no Bitcoin: a regra é pública, não muda e pode ser conferida por qualquer pessoa. O que não dá para prever é o preço. Para entender o tamanho de uma recompensa de 1,5625 BTC em unidades do dia a dia, o guia de <a href="/artigos/satoshis-o-que-sao-sats-e-como-converter">satoshis e como converter</a> mostra como pensar em frações da moeda.</p>
<p>E, se quiser ver na prática como se saiu quem comprou antes ou depois de um halving antigo, faça a simulação na ferramenta <a href="/ferramentas/se-eu-tivesse-investido">Se eu tivesse investido</a>, que usa o histórico real de preço em reais.</p>`,
  faq: [
    {
      question: "O que é o halving do Bitcoin?",
      answer:
        "Halving é o corte pela metade da recompensa que os mineradores recebem por bloco. Ele acontece a cada 210 mil blocos, cerca de quatro anos, e está escrito no código do Bitcoin. A recompensa começou em 50 BTC em 2009 e, desde abril de 2024, é de 3,125 BTC por bloco. Esse mecanismo garante que nunca vão existir mais de 21 milhões de bitcoins.",
    },
    {
      question: "Quando será o próximo halving do Bitcoin?",
      answer:
        "O próximo halving acontece no bloco 1.050.000, quando a recompensa cai para 1,5625 BTC. Em outubro de 2026, faltavam cerca de 77 mil blocos. No ritmo de 10 minutos por bloco, isso aponta para abril de 2028; com blocos um pouco mais rápidos, a data pode adiantar para março. A estimativa exata muda conforme o ritmo da mineração.",
    },
    {
      question: "Quantos halvings o Bitcoin já teve?",
      answer:
        "Foram quatro: em 28 de novembro de 2012 (bloco 210.000), 9 de julho de 2016 (bloco 420.000), 11 de maio de 2020 (bloco 630.000) e 19 de abril de 2024 no horário de Brasília (bloco 840.000). Em cada um, a recompensa por bloco caiu pela metade: de 50 para 25, depois 12,5, 6,25 e, por fim, 3,125 BTC.",
    },
    {
      question: "O preço do Bitcoin sobe depois do halving?",
      answer:
        "Nos quatro halvings anteriores, o preço estava mais alto um ano depois, mas a alta foi menor a cada ciclo. Quatro casos não bastam para garantir que isso se repita, e o preço também depende de juros, regulação e demanda. O halving reduz a oferta nova, mas não é promessa de valorização nem recomendação de compra.",
    },
    {
      question: "O que acontece quando todos os bitcoins forem minerados?",
      answer:
        "A emissão termina por volta de 2140, quando o subsídio chega a zero. A partir daí, os mineradores passam a ser pagos só pelas taxas das transações que incluem nos blocos. A rede continua funcionando normalmente, e o total de moedas fica um pouco abaixo de 21 milhões, sem possibilidade de aumento.",
    },
  ],
  quiz: [
    {
      question: "De quantos em quantos blocos acontece o halving?",
      options: ["A cada 2.016 blocos", "A cada 210 mil blocos", "A cada 1 milhão de blocos"],
      answer: 1,
      explanation: "O protocolo corta o subsídio pela metade a cada 210 mil blocos, o que leva perto de quatro anos. O número 2.016 é o intervalo do ajuste de dificuldade.",
    },
    {
      question: "Qual será a recompensa por bloco depois do halving previsto para 2028?",
      options: ["3,125 BTC", "1,5625 BTC", "6,25 BTC"],
      answer: 1,
      explanation: "A recompensa atual é de 3,125 BTC. No bloco 1.050.000 ela cai pela metade, para 1,5625 BTC.",
    },
    {
      question: "O que o halving faz com o saldo de quem já tem bitcoin?",
      options: ["Corta pela metade", "Dobra o saldo", "Não muda nada"],
      answer: 2,
      explanation: "O halving só reduz a emissão de moedas novas para os mineradores. O saldo de quem já tem bitcoin continua igual.",
    },
  ],
};

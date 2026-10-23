import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "ciclos-do-bitcoin-o-que-os-halvings-mostram",
  title: "Ciclos do Bitcoin: o que os halvings mostram sobre o preço",
  seoTitle: "Ciclos do Bitcoin: o que cada halving mostrou no preço",
  excerpt:
    "Veja os ciclos do Bitcoin halving a halving: topos, fundos, quanto subiu e caiu desde 2012 e por que esse padrão de quatro anos não garante nada daqui para frente.",
  metaDescription:
    "Ciclos do Bitcoin explicados: preço em cada halving de 2012 a 2024, topos e fundos com data, quedas de 53% a 85% e os limites de usar o passado para decidir.",
  category: "mercado",
  date: "2026-10-22",
  readTime: 8,
  imageQuery: "bitcoin price chart screen",
  seed: 21,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Nos quatro ciclos completos ou em andamento, o Bitcoin marcou um recorde de 12 a 18 meses depois de cada halving e, em seguida, caiu mais de 50%.",
    "As altas e as quedas ficaram menores a cada ciclo: o pico depois do halving de 2012 foi cerca de 90 vezes o preço do dia do corte, e o de 2024, cerca de 2 vezes.",
    "Quatro repetições são uma amostra pequena, e juros, ETFs e regulação pesam cada vez mais no preço, então o padrão não serve como previsão.",
  ],
  content: `<p>Os ciclos do Bitcoin são as fases de alta forte, queda funda e recuperação que se repetiram, até aqui, mais ou menos a cada quatro anos, sempre em torno de um halving. Depois de cada um dos quatro halvings, o preço marcou um recorde entre 12 e 18 meses mais tarde e, em seguida, caiu mais de 50%.</p>
<p>Neste guia você vai ver o que aconteceu com o preço em cada ciclo, com datas e números, os padrões que se repetem, o que mudou no ciclo atual e por que nada disso funciona como bola de cristal. Para saber quanto falta para o próximo corte, a <a href="/ferramentas/halving">contagem regressiva do halving</a> acompanha a blockchain em tempo real.</p>

<h2>O que é um ciclo do Bitcoin e por que ele gira em torno do halving</h2>
<p>A cada 210 mil blocos, cerca de quatro anos, a recompensa que os mineradores recebem por bloco cai pela metade. Era 50 BTC em 2009 e é 3,125 BTC desde abril de 2024. O mecanismo completo está no guia sobre <a href="/artigos/halving-do-bitcoin-o-que-e-e-quando-e-o-proximo">o halving do Bitcoin e quando é o próximo</a>.</p>
<p>A tese por trás dos ciclos é simples: se a procura continua igual e a quantidade de moedas novas cai à metade de um dia para o outro, sobra menos bitcoin à venda. Os mineradores, que costumam vender parte do que recebem para pagar a conta de luz e as máquinas, passam a ter metade do produto para vender. Quem quiser entender esse lado do negócio pode ler <a href="/artigos/mineracao-de-bitcoin-como-funciona">como funciona a mineração</a>.</p>
<p>Na prática, cada ciclo passou por quatro fases: acumulação, com preço parado e pouca atenção; alta, o chamado <a href="/glossario#bull-market">bull market</a>; euforia, com recordes seguidos e muita gente nova comprando; e queda prolongada, o bear market. Ninguém toca um sino no começo ou no fim de cada fase. Elas só ficam claras olhando para trás.</p>

<h2>O que aconteceu com o preço depois de cada halving</h2>
<p>A tabela usa a <a href="https://www.blockchain.com/explorer/charts/market-price" rel="noopener noreferrer">média diária do preço em dólar calculada pela Blockchain.com</a>, a mesma base das ferramentas do site. Por ser média do dia, os picos ficam um pouco abaixo das máximas registradas dentro do pregão, e os fundos, um pouco acima.</p>
<table>
<thead><tr><th>Halving</th><th>Preço no dia</th><th>Pico do ciclo</th><th>Alta até o pico</th><th>Fundo seguinte</th><th>Queda do pico ao fundo</th></tr></thead>
<tbody>
<tr><td>28/11/2012 (bloco 210.000)</td><td>US$ 12,50</td><td>US$ 1.137 em 05/12/2013</td><td>cerca de 90 vezes</td><td>US$ 172 em 15/01/2015</td><td>85%</td></tr>
<tr><td>09/07/2016 (bloco 420.000)</td><td>US$ 663</td><td>US$ 19.280 em 17/12/2017</td><td>cerca de 29 vezes</td><td>US$ 3.232 em 16/12/2018</td><td>83%</td></tr>
<tr><td>11/05/2020 (bloco 630.000)</td><td>US$ 8.754</td><td>US$ 67.562 em 09/11/2021</td><td>cerca de 7,7 vezes</td><td>US$ 15.760 em 22/11/2022</td><td>77%</td></tr>
<tr><td>20/04/2024 (bloco 840.000)</td><td>US$ 63.824</td><td>US$ 124.777 em 07/10/2025</td><td>cerca de 2 vezes</td><td>US$ 58.534 em 01/07/2026 (até agora)</td><td>53% (até agora)</td></tr>
</tbody>
</table>
<p>As datas dos halvings são as dos blocos minerados, em horário UTC. O último caiu na noite de 19 de abril de 2024 no horário de Brasília. Dentro do dia, o recorde do ciclo atual passou de US$ 126 mil em 6 de outubro de 2025, segundo o <a href="https://fortune.com/article/price-of-bitcoin-10-22-2026/" rel="noopener noreferrer">acompanhamento diário de preço da Fortune</a>.</p>

<h2>Ciclo a ciclo: o que cada halving mostrou</h2>
<h3>2012 a 2015: de US$ 12 a mais de US$ 1.100</h3>
<p>No primeiro halving, o bitcoin valia pouco mais de US$ 12. Um ano depois, no começo de dezembro de 2013, a média diária passou de US$ 1.100. A queda que veio a seguir foi agravada pelo colapso da maior corretora da época, em fevereiro de 2014, história contada em <a href="/artigos/mt-gox-o-colapso-da-maior-exchange-de-bitcoin">o colapso da Mt. Gox</a>. O fundo só chegou em janeiro de 2015, 85% abaixo do pico.</p>
<h3>2016 a 2018: o primeiro ciclo que chegou ao grande público</h3>
<p>O segundo halving, em julho de 2016, aconteceu com o bitcoin perto de US$ 660. Em dezembro de 2017 ele chegou perto de US$ 20 mil e virou assunto de jornal no mundo inteiro. Doze meses depois, em dezembro de 2018, valia pouco mais de US$ 3.200, e muita gente que entrou no topo levou anos para recuperar o valor investido.</p>
<h3>2020 a 2022: pandemia, recorde e quebra de corretora</h3>
<p>Antes do terceiro halving, o pânico da pandemia derrubou a média diária para cerca de US$ 4.830 em 13 de março de 2020. Depois do corte de maio veio a alta até novembro de 2021, com média diária acima de US$ 67 mil. A descida terminou em novembro de 2022, logo após a quebra da FTX, lição que aparece no guia de <a href="/artigos/exchange-de-criptomoedas-como-escolher-uma-corretora">como escolher uma corretora</a>.</p>
<h3>2024 até hoje: o ciclo dos ETFs</h3>
<p>O ciclo atual começou diferente. Em 10 de janeiro de 2024, a SEC, regulador do mercado americano, <a href="https://www.sec.gov/news/statement/gensler-statement-spot-bitcoin-011023" rel="noopener noreferrer">aprovou os primeiros ETFs de bitcoin à vista</a>, e em 14 de março a média diária passou de US$ 73 mil, acima do recorde de 2021. Foi a primeira vez que o bitcoin bateu recorde antes do halving, e não depois. Como esses fundos funcionam e quais existem na B3 está no guia de <a href="/artigos/etf-de-bitcoin-o-que-e-e-como-funciona-no-brasil">ETF de bitcoin</a>.</p>
<p>O pico veio em outubro de 2025 e, a partir daí, o preço caiu. Em 1º de julho de 2026 a média diária ficou perto de US$ 58,5 mil, 53% abaixo do topo, e em 22 de outubro de 2026 o bitcoin seguia mais de 35% abaixo do recorde, pelos números da Fortune. Ninguém sabe se o fundo deste ciclo já passou.</p>

<h2>Os padrões que se repetem e os que estão mudando</h2>
<p>Olhando os quatro ciclos lado a lado, alguns padrões aparecem com clareza. Eles descrevem o que aconteceu, não uma regra da natureza:</p>
<ul>
<li><strong>Tempo até o pico:</strong> de 12 meses (2012) a 18 meses (2020) depois do halving.</li>
<li><strong>Altas menores:</strong> o pico foi cerca de 90 vezes o preço do dia do halving no primeiro ciclo, 29 vezes no segundo, 7,7 vezes no terceiro e 2 vezes no quarto.</li>
<li><strong>Quedas menores:</strong> 85%, 83%, 77% e, até agora, 53% do topo ao fundo.</li>
<li><strong>Inverno de um ano:</strong> nos três ciclos fechados, a queda do pico ao fundo durou entre 364 e 406 dias.</li>
</ul>
<p>As altas encolhem por um motivo matemático: quanto maior o valor de mercado, mais dinheiro é preciso para multiplicar o preço. E o próprio halving pesa menos. Com 3,125 BTC por bloco e cerca de 144 blocos por dia, a emissão nova fica perto de 450 BTC diários, pouco perto do volume negociado nas corretoras e nos ETFs.</p>

<h2>Por que o passado dos ciclos não garante o futuro</h2>
<p>Quatro ciclos são uma amostra muito pequena para qualquer conclusão estatística séria. Além disso, cada um aconteceu num cenário diferente: juros baixos ou altos, pandemia, quebra de corretoras, entrada de fundos e de empresas que guardam bitcoin no caixa. É difícil separar quanto da alta veio do halving e quanto veio do resto.</p>
<p>Existe ainda o efeito da profecia que se cumpre sozinha. Se todo mundo espera alta depois do halving, muita gente compra antes, e o efeito se espalha ou some, como mostrou o recorde de março de 2024. Por isso este blog não faz previsão de preço, e o <a href="/aviso-de-risco">aviso de risco</a> vale para qualquer decisão baseada em ciclos.</p>
<div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>Quedas de 77% a 85% já aconteceram três vezes. Antes de comprar, pergunte a si mesmo se aguentaria ver o saldo em reais encolher dessa forma sem vender no pânico.</p></div>

<h2>Erros comuns de quem tenta operar o ciclo</h2>
<p>O erro mais caro é comprar na euforia, quando os recordes estão no noticiário e o medo de ficar de fora fala mais alto. O segundo é o oposto: vender tudo no fundo, depois de meses de queda, justamente quando o preço já caiu mais. O <a href="/ferramentas/medo-e-ganancia">índice de medo e ganância</a> ajuda a perceber em que clima o mercado está, mas também não diz o que vai acontecer.</p>
<ul class="checklist">
<li>Não aposte numa data exata para o topo ou para o fundo: os intervalos variaram meses entre um ciclo e outro.</li>
<li>Evite <a href="/glossario#alavancagem">alavancagem</a>: uma queda de 20% num dia pode zerar uma posição alavancada antes de o ciclo "dar certo".</li>
<li>Defina antes quanto do patrimônio aceita expor a um ativo que já caiu mais de 80%.</li>
<li>Guarde os comprovantes: vender com lucro gera imposto, mesmo no meio de um ciclo.</li>
</ul>
<p>Se a dúvida ainda é se faz sentido ter bitcoin, o guia <a href="/artigos/bitcoin-vale-a-pena-riscos-antes-de-investir">Bitcoin vale a pena?</a> trata dos riscos com calma, sem promessa de ganho.</p>

<h2>Como usar a história dos ciclos a seu favor</h2>
<p>Os ciclos servem menos para adivinhar o próximo topo e mais para calibrar expectativas: quem entra em bitcoin precisa contar com anos ruins no meio do caminho. Por isso muita gente prefere comprar aos poucos, todo mês, em vez de tentar acertar o momento. A estratégia está explicada no guia de <a href="/artigos/dca-em-bitcoin-como-investir-todo-mes">DCA em bitcoin</a>, e a cotação de agora fica em <a href="/bitcoin">preço do Bitcoin hoje</a>.</p>
<p>Quer ver o efeito dos ciclos no seu bolso? Na ferramenta <a href="/ferramentas/se-eu-tivesse-investido">se eu tivesse investido</a>, escolha um mês perto de um topo, como dezembro de 2017, e depois um perto de um fundo, como dezembro de 2018, e compare quanto o mesmo valor em reais valeria hoje.</p>`,
  faq: [
    {
      question: "O que são os ciclos do Bitcoin?",
      answer:
        "São as fases de alta, euforia, queda e recuperação que se repetiram mais ou menos a cada quatro anos desde 2012, sempre em torno de um halving. Em cada ciclo o preço marcou um recorde de 12 a 18 meses depois do corte e depois caiu mais de 50%. É um padrão histórico, não uma regra do protocolo, e pode deixar de se repetir.",
    },
    {
      question: "Quanto o Bitcoin subiu depois de cada halving?",
      answer:
        "Pela média diária da Blockchain.com, o pico depois do halving de 2012 foi cerca de 90 vezes o preço do dia do corte. Depois do de 2016, cerca de 29 vezes; depois do de 2020, cerca de 7,7 vezes; e depois do de 2024, cerca de 2 vezes. As altas encolheram a cada ciclo, à medida que o valor de mercado cresceu.",
    },
    {
      question: "Quanto o Bitcoin já caiu depois de um topo?",
      answer:
        "Nos três ciclos fechados, a queda do pico ao fundo foi de 85% (dezembro de 2013 a janeiro de 2015), 83% (dezembro de 2017 a dezembro de 2018) e 77% (novembro de 2021 a novembro de 2022). No ciclo atual, a média diária chegou a ficar 53% abaixo do pico de outubro de 2025, em julho de 2026.",
    },
    {
      question: "O halving faz o preço do Bitcoin subir?",
      answer:
        "O halving corta pela metade a emissão de moedas novas, o que reduz a oferta vendida pelos mineradores. Historicamente, os meses seguintes tiveram altas fortes, mas o efeito parece menor a cada ciclo e se mistura com juros, ETFs, regulação e humor do mercado. Não há garantia de alta, e o preço pode cair mesmo depois de um halving.",
    },
    {
      question: "Quando vai ser o próximo halving do Bitcoin?",
      answer:
        "O próximo halving acontece no bloco 1.050.000, quando a recompensa cai de 3,125 para 1,5625 BTC por bloco. Pelo ritmo de cerca de um bloco a cada 10 minutos, a estimativa aponta para 2028. A data exata depende da velocidade da mineração, e a contagem regressiva do site se ajusta a cada bloco minerado.",
    },
  ],
  quiz: [
    {
      question: "O que aconteceu de diferente no ciclo de 2024?",
      options: [
        "O preço bateu recorde antes do halving",
        "O halving foi cancelado",
        "O preço não caiu depois do pico",
      ],
      answer: 0,
      explanation:
        "Em março de 2024, depois da aprovação dos ETFs à vista nos EUA, a média diária passou do recorde de 2021, um mês antes do halving de abril. Foi a primeira vez que isso aconteceu.",
    },
    {
      question: "Nos três ciclos fechados, quanto o preço caiu do pico ao fundo?",
      options: ["Entre 20% e 30%", "Entre 40% e 50%", "Entre 77% e 85%"],
      answer: 2,
      explanation:
        "As quedas foram de 85%, 83% e 77%, pela média diária da Blockchain.com. Por isso quem compra bitcoin precisa contar com anos ruins no caminho.",
    },
  ],
};

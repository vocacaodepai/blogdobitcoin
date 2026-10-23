import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "dca-em-bitcoin-como-investir-todo-mes",
  title: "DCA em bitcoin: como investir todo mês sem adivinhar o preço",
  seoTitle: "DCA em bitcoin: como investir todo mês com calma",
  excerpt:
    "Entenda o DCA em bitcoin: comprar o mesmo valor todo mês, com exemplo em reais, vantagens, limites, como automatizar na corretora e o que muda no imposto.",
  metaDescription:
    "Guia de DCA em bitcoin: o que é preço médio, exemplo hipotético em reais, o que os dados de 2021 e 2022 mostram, riscos, automação e o Imposto de Renda.",
  category: "mercado",
  date: "2026-10-22",
  readTime: 7,
  imageQuery: "calendar coins savings jar",
  seed: 22,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "DCA é comprar um valor fixo em reais em datas regulares, o que faz você levar mais satoshis quando o preço cai e menos quando ele sobe.",
    "A estratégia reduz o risco de colocar tudo no pior dia, mas não garante lucro: se o preço ficar abaixo do seu preço médio, o saldo fica no prejuízo.",
    "Cada compra entra no custo de aquisição para o Imposto de Renda, e vendas de até R$ 35 mil por mês em corretora no Brasil seguem isentas em 2026.",
  ],
  content: `<p>DCA em bitcoin é a estratégia de comprar o mesmo valor em reais em intervalos fixos, por exemplo R$ 200 todo mês, sem tentar acertar o melhor dia. Como o valor é sempre igual, você leva mais satoshis quando o preço cai e menos quando ele sobe, e o seu preço médio fica entre os extremos.</p>
<p>Neste guia você vai ver como o DCA funciona, um exemplo em reais com preços inventados, o que os dados reais de 2021 e 2022 mostram, as vantagens, os limites, como automatizar e o que muda no Imposto de Renda. Para saber quanto custa um bitcoin agora, consulte o <a href="/bitcoin">preço do Bitcoin hoje</a>.</p>

<h2>O que é DCA e como funciona na prática</h2>
<p>A sigla vem do inglês dollar cost averaging, algo como "custo médio em dólar". No Brasil muita gente chama de aporte mensal ou compra programada, e o termo também está no <a href="/glossario#dca">glossário do blog</a>. A ideia é trocar uma decisão difícil, quando comprar, por uma regra simples: comprar sempre, no mesmo dia, o mesmo valor.</p>
<p>Ninguém precisa comprar um bitcoin inteiro. Cada moeda se divide em 100 milhões de satoshis, então R$ 100 compram uma fração pequena, que vai se somando mês a mês. Se a conta em sats ainda parece estranha, o guia sobre <a href="/artigos/satoshis-o-que-sao-sats-e-como-converter">satoshis e como converter</a> explica com calma.</p>
<p>O resultado de quem faz DCA não depende do preço de um dia, mas da média de todos os dias em que comprou. É isso que tira a pressão de acertar o fundo, algo difícil até para quem vive de mercado.</p>

<h2>Exemplo hipotético de DCA em reais</h2>
<p>Os preços da tabela abaixo são inventados, só para mostrar a mecânica. Imagine uma pessoa que compra R$ 500 de bitcoin por mês durante seis meses, enquanto o preço cai e depois se recupera:</p>
<table>
<thead><tr><th>Mês</th><th>Preço hipotético de 1 BTC</th><th>Aporte</th><th>Satoshis comprados</th></tr></thead>
<tbody>
<tr><td>1</td><td>R$ 400.000</td><td>R$ 500</td><td>125.000</td></tr>
<tr><td>2</td><td>R$ 320.000</td><td>R$ 500</td><td>156.250</td></tr>
<tr><td>3</td><td>R$ 250.000</td><td>R$ 500</td><td>200.000</td></tr>
<tr><td>4</td><td>R$ 280.000</td><td>R$ 500</td><td>178.571</td></tr>
<tr><td>5</td><td>R$ 350.000</td><td>R$ 500</td><td>142.857</td></tr>
<tr><td>6</td><td>R$ 420.000</td><td>R$ 500</td><td>119.048</td></tr>
<tr><td>Total</td><td>Preço médio: R$ 325.476</td><td>R$ 3.000</td><td>921.726</td></tr>
</tbody>
</table>
<p>Repare que o preço médio pago, R$ 325.476, ficou abaixo da média simples dos seis preços, cerca de R$ 336.667. Isso acontece porque o valor fixo compra mais satoshis nos meses baratos. Se no fim o bitcoin valesse R$ 420 mil, os 921.726 sats valeriam cerca de R$ 3.871, contra R$ 3.150 de quem colocou os R$ 3.000 de uma vez no mês 1.</p>
<p>Agora o outro lado. Se no fim do sexto mês o preço estivesse em R$ 300 mil, o mesmo saldo valeria cerca de R$ 2.765, abaixo dos R$ 3.000 investidos. E se o preço só tivesse subido mês após mês, quem comprasse tudo no começo terminaria com mais bitcoin. O DCA suaviza o caminho, mas não escolhe o destino.</p>

<h2>O que os dados reais mostram sobre o DCA</h2>
<p>Com os fechamentos mensais usados na nossa calculadora, que vêm da <a href="https://www.blockchain.com/explorer/charts/market-price" rel="noopener noreferrer">média de mercado da Blockchain.com</a> convertida pelo dólar PTAX do Banco Central, dá para olhar um caso difícil. Quem aplicou R$ 200 por mês de novembro de 2021, perto do topo do ciclo, até dezembro de 2022 investiu R$ 2.800 e terminou 2022 com cerca de R$ 1.775 em bitcoin, prejuízo de 37%.</p>
<p>Quem colocou os mesmos R$ 2.800 de uma vez em novembro de 2021 tinha cerca de R$ 746 no fim de 2022, queda de 73%. Seguindo com os aportes até dezembro de 2023, o total investido chegaria a R$ 5.200 e o saldo, a cerca de R$ 7.550. A conta ignora taxas, spread e imposto, e passado não garante resultado futuro: o guia sobre os <a href="/artigos/ciclos-do-bitcoin-o-que-os-halvings-mostram">ciclos do Bitcoin</a> mostra como cada período foi diferente.</p>
<div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Para comparar com uma compra única, a ferramenta <a href="/ferramentas/se-eu-tivesse-investido">se eu tivesse investido</a> calcula quanto valeria hoje um valor aplicado de uma vez em qualquer mês desde 2010.</p></div>

<h2>Vantagens do DCA em bitcoin</h2>
<p>A primeira vantagem é emocional. Num ativo que já caiu mais de 70% em alguns ciclos, a regra fixa evita as duas decisões que mais custam caro: comprar tudo na euforia e vender tudo no pânico. Quem compra todo mês passa a ver a queda como parcela mais barata, e não como catástrofe.</p>
<ul>
<li><strong>Cabe no orçamento:</strong> o aporte acompanha o salário, sem precisar juntar uma quantia grande antes.</li>
<li><strong>Dispensa previsão:</strong> você não precisa saber se o preço vai subir ou cair na semana que vem.</li>
<li><strong>Cria hábito:</strong> a decisão é tomada uma vez só, na hora de definir valor e data.</li>
<li><strong>Reduz o arrependimento:</strong> nenhuma compra isolada define o resultado.</li>
</ul>

<h2>Limites e riscos do DCA</h2>
<p>DCA não é proteção contra perda. Se o bitcoin passar anos abaixo do seu preço médio, o saldo fica no vermelho, e uma queda longa pode testar a paciência de qualquer um. A <a href="/glossario#volatilidade">volatilidade</a> continua toda lá, e o <a href="/aviso-de-risco">aviso de risco</a> do site vale para quem compra aos poucos também.</p>
<p>Há ainda custos que pesam mais em compras pequenas. Se a corretora cobrar, digamos, uma taxa mínima por ordem ou um spread alto, uma parte de cada aporte de R$ 50 some antes de virar bitcoin. E dinheiro da reserva de emergência não deveria entrar no DCA: se você precisar vender no meio de uma queda, a estratégia perde o sentido. O guia <a href="/artigos/bitcoin-vale-a-pena-riscos-antes-de-investir">Bitcoin vale a pena?</a> ajuda a pensar quanto faz sentido expor.</p>

<h2>Como automatizar o DCA passo a passo</h2>
<p>O segredo do DCA é não depender da sua vontade no dia. Um roteiro simples:</p>
<ol>
<li>Escolha um valor que não vai fazer falta e um dia fixo, de preferência logo depois de receber o salário.</li>
<li>Use uma corretora que atue legalmente no Brasil, com taxas claras e Pix (os critérios estão em <a href="/artigos/exchange-de-criptomoedas-como-escolher-uma-corretora">como escolher uma exchange</a>).</li>
<li>Veja se o app tem compra recorrente ou programada. Se tiver, defina valor e frequência e deixe rodar.</li>
<li>Se não tiver, crie um lembrete no celular e faça a compra no mesmo dia todo mês, com uma <a href="/glossario#ordem-a-mercado">ordem a mercado</a> ou limitada.</li>
<li>De tempos em tempos, quando o saldo crescer, avalie levar as moedas para uma carteira própria, como explica o guia de <a href="/artigos/autocustodia-not-your-keys-not-your-coins">autocustódia</a>.</li>
<li>Anote data, valor em reais e quantidade de cada compra numa planilha. Isso vai ser útil no Imposto de Renda.</li>
</ol>
<p>Quem prefere ficar na bolsa pode fazer o mesmo com cotas de fundos que acompanham o bitcoin, comprados pelo home broker. As diferenças entre esse caminho e a compra direta estão no guia de <a href="/artigos/etf-de-bitcoin-o-que-e-e-como-funciona-no-brasil">ETF de bitcoin</a>.</p>

<h2>Impostos no DCA: o que muda com várias compras</h2>
<p>Para a Receita Federal, cada compra soma ao seu custo de aquisição. Na declaração anual, o bitcoin entra em Bens e Direitos pelo valor pago, nunca pelo valor de mercado, e a <a href="https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/preenchimento/manual-mir/patrimonio/bens-financeiros" rel="noopener noreferrer">orientação oficial da Receita</a> manda declarar quando o custo for igual ou superior a R$ 5.000 por tipo de criptoativo. O passo a passo está em <a href="/artigos/como-declarar-bitcoin-no-imposto-de-renda">como declarar bitcoin no Imposto de Renda</a>.</p>
<p>Na venda, vale o custo médio. Usando o exemplo hipotético acima, vender metade dos 921.726 sats a R$ 420 mil renderia cerca de R$ 1.936, com custo de R$ 1.500 e ganho de cerca de R$ 436. Como o total vendido no mês, numa corretora no Brasil, ficou abaixo de R$ 35 mil, o ganho é isento. A <a href="https://exame.com/future-of-money/mp-1-303-com-rejeicao-na-camara-tributacao-de-criptos-nao-vai-subir-em-2026-veja-regras-atuais/" rel="noopener noreferrer">MP 1.303, que acabaria com essa isenção, perdeu a validade em outubro de 2025</a>, e a regra continua valendo em 2026.</p>
<p>Acima de R$ 35 mil vendidos no mês, o ganho paga imposto pela tabela da Lei 13.259/2016, que começa em 15%, com DARF até o último dia útil do mês seguinte. Quem compra em corretora no exterior tem regras e declarações próprias. Os detalhes estão em <a href="/artigos/imposto-sobre-criptomoedas-no-brasil-quanto-se-paga">imposto sobre criptomoedas no Brasil</a>, e um contador ajuda nos casos maiores.</p>
<ul class="checklist">
<li>Valor mensal que não compromete contas nem reserva de emergência.</li>
<li>Dia fixo de compra definido e lembrete ou compra recorrente ativada.</li>
<li>Corretora com taxas e spread conferidos antes do primeiro aporte.</li>
<li>Planilha com data, valor em reais e quantidade de cada compra.</li>
<li>Plano para não vender no pânico se o preço cair pela metade.</li>
</ul>

<h2>Comece pela simulação</h2>
<p>Antes de definir o seu valor mensal, vale ver o DCA funcionando com números reais. Na <a href="/ferramentas/calculadora-dca">calculadora DCA de bitcoin</a>, escolha um valor e mude o mês de início: começar perto de um topo, como novembro de 2021, mostra o lado difícil, e começar perto de um fundo mostra o lado bom.</p>
<p>A simulação não inclui taxas nem imposto e não diz o que vai acontecer daqui para frente. Ela serve para você sentir no bolso como seria passar por meses de queda e decidir, com calma, se essa estratégia combina com você.</p>`,
  faq: [
    {
      question: "O que é DCA em bitcoin?",
      answer:
        "DCA, sigla de dollar cost averaging, é comprar o mesmo valor em reais em intervalos fixos, como R$ 200 todo dia 5, sem tentar acertar o melhor momento. Com o valor fixo, você compra mais satoshis quando o preço cai e menos quando sobe, e o resultado depende do preço médio de todas as compras, não de um dia só.",
    },
    {
      question: "DCA em bitcoin dá lucro garantido?",
      answer:
        "Não. O DCA reduz o risco de colocar tudo no pior momento, mas se o preço ficar abaixo do seu preço médio, você terá prejuízo. Pelos dados da calculadora do site, quem aplicou R$ 200 por mês de novembro de 2021 a dezembro de 2022 terminou o período com perda de 37%. Resultado passado não garante resultado futuro.",
    },
    {
      question: "Qual o valor mínimo para fazer DCA em bitcoin?",
      answer:
        "Não existe um valor mínimo da estratégia em si: dá para comprar frações pequenas, porque cada bitcoin se divide em 100 milhões de satoshis. O limite prático é o pedido mínimo e as taxas da corretora. Aportes muito pequenos podem perder uma parte relevante em taxa fixa ou spread, então vale conferir os custos antes.",
    },
    {
      question: "É melhor comprar bitcoin todo mês ou tudo de uma vez?",
      answer:
        "Depende do que o preço fizer depois, e isso ninguém sabe. Se o preço só subir, comprar tudo no começo rende mais bitcoin. Se cair e se recuperar, o DCA costuma levar vantagem por comprar mais barato no meio. A compra parcelada é mais fácil de manter emocionalmente e combina com quem investe parte do salário.",
    },
    {
      question: "Como declarar bitcoin comprado todo mês no Imposto de Renda?",
      answer:
        "Some o valor pago em todas as compras e informe esse custo de aquisição em Bens e Direitos, no tipo Bitcoin, quando o total for igual ou superior a R$ 5.000. Nunca use o valor de mercado. Na venda, o ganho é calculado pelo custo médio, e vendas de até R$ 35 mil por mês em corretora no Brasil são isentas.",
    },
  ],
  quiz: [
    {
      question: "No DCA, o que acontece quando o preço do bitcoin cai?",
      options: [
        "O aporte fixo compra mais satoshis",
        "A corretora devolve a diferença",
        "O aporte do mês deve ser pulado",
      ],
      answer: 0,
      explanation:
        "Com valor fixo em reais, um preço menor significa mais satoshis pelo mesmo dinheiro, o que puxa o preço médio para baixo.",
    },
    {
      question: "Como o bitcoin comprado aos poucos entra na declaração do Imposto de Renda?",
      options: [
        "Pelo valor de mercado em 31 de dezembro",
        "Pela soma do valor pago nas compras",
        "Não precisa ser declarado",
      ],
      answer: 1,
      explanation:
        "A Receita orienta declarar criptoativos pelo valor original de aquisição, a soma do que foi pago, quando o total for igual ou superior a R$ 5.000 por tipo.",
    },
  ],
};

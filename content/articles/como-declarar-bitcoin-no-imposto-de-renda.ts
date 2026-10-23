import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "como-declarar-bitcoin-no-imposto-de-renda",
  title: "Como declarar Bitcoin no Imposto de Renda: guia passo a passo",
  seoTitle: "Como declarar Bitcoin no Imposto de Renda: passo a passo",
  excerpt:
    "Veja como declarar Bitcoin no Imposto de Renda: ficha Bens e Direitos, códigos do grupo 08, custo de aquisição, isenção de R$ 35 mil, GCAP e a nova DeCripto.",
  metaDescription:
    "Guia para declarar bitcoin e outras criptomoedas no IR: grupo 08, códigos 01 a 99, custo médio, vendas acima de R$ 35 mil, DARF 4600, exterior e DeCripto.",
  category: "brasil",
  date: "2026-10-22",
  readTime: 8,
  imageQuery: "tax form calculator coins",
  seed: 31,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Bitcoin vai na ficha Bens e Direitos, grupo 08, código 01, pelo custo de aquisição, quando você pagou R$ 5 mil ou mais naquele tipo de criptoativo.",
    "Vender mais de R$ 35 mil em cripto num mês, somando todas as moedas, obriga a apurar o lucro no GCAP e pagar o DARF até o último dia útil do mês seguinte.",
    "Desde julho de 2026, quem opera por corretora estrangeira, DeFi ou carteira própria acima de R$ 35 mil no mês entrega também a DeCripto, que substituiu a IN 1.888.",
  ],
  content: `<p>Para declarar Bitcoin no Imposto de Renda, você informa as moedas na ficha Bens e Direitos, grupo 08 (Criptoativos), código 01, pelo valor que pagou por elas, e não pela cotação de 31 de dezembro. Se vendeu, ainda precisa conferir se o total do mês passou de R$ 35 mil, porque aí o lucro é tributado.</p>
<p>Este guia segue as regras da Receita Federal publicadas para a declaração de 2026 (ano-calendário 2025), que valem como referência para a próxima, a de 2027, até a Receita divulgar o programa novo. As alíquotas e a isenção estão detalhadas no texto sobre <a href="/artigos/imposto-sobre-criptomoedas-no-brasil-quanto-se-paga">quanto se paga de imposto sobre criptomoedas</a>. Aqui o foco é o preenchimento. É conteúdo informativo, não é consultoria: em caso de dúvida, fale com um contador.</p>

<h2>Quem precisa declarar bitcoin no Imposto de Renda</h2>
<p>Ter bitcoin, sozinho, não obriga ninguém a entregar a declaração. A obrigação vem das regras gerais: no ano-calendário 2025, por exemplo, precisava declarar quem teve rendimentos tributáveis acima de R$ 35.584, bens acima de R$ 800 mil em 31 de dezembro ou ganho de capital tributável em qualquer mês, segundo o <a href="https://www.gov.br/receitafederal/pt-br/centrais-de-conteudo/publicacoes/perguntas-e-respostas/dirpf/p-r-irpf-2026-v1-00-2026-04-23.pdf" rel="noopener noreferrer">Perguntas e Respostas do IRPF 2026</a>. Quem teve ganho com aplicações financeiras no exterior também entra na lista.</p>
<p>Se você já é obrigado a declarar, o criptoativo entra na ficha de bens quando o valor de aquisição de cada tipo for igual ou superior a R$ 5 mil. Abaixo disso, a Receita não exige o item, mas muita gente informa mesmo assim, porque facilita provar o custo quando a moeda for vendida anos depois.</p>

<h2>Grupo 08: os códigos de cada criptomoeda</h2>
<p>Na ficha Bens e Direitos, escolha o grupo 08 e depois o código certo. Cada tipo de moeda vira um item separado: bitcoin num item, ether em outro, USDT em outro.</p>
<table>
<thead><tr><th>Código</th><th>O que entra</th><th>Exemplos</th></tr></thead>
<tbody>
<tr><td>01</td><td>Criptomoeda Bitcoin (BTC)</td><td>Só o bitcoin</td></tr>
<tr><td>02</td><td>Outras criptomoedas, as <a href="/glossario#altcoin">altcoins</a></td><td>ETH, SOL, XRP, ADA, DOGE</td></tr>
<tr><td>03</td><td>Stablecoins</td><td>USDT, USDC, BRZ, DAI</td></tr>
<tr><td>10</td><td>NFTs</td><td>Colecionáveis e obras digitais</td></tr>
<tr><td>99</td><td>Outros criptoativos</td><td>Fan tokens, tokens de precatório ou de crédito de carbono</td></tr>
</tbody>
</table>
<p>No campo Discriminação, a Receita pede a quantidade e onde a moeda está guardada: nome e CNPJ da corretora ou "custódia própria". Um exemplo: "0,04 BTC custodiados na corretora X, CNPJ 00.000.000/0001-00". Para entender a diferença entre deixar na corretora e guardar você mesmo, veja o guia de <a href="/artigos/autocustodia-not-your-keys-not-your-coins">autocustódia</a>. Stablecoins como o <a href="/moedas/tether">Tether (USDT)</a> vão no código 03, e não no 02.</p>

<h2>Custo de aquisição: o valor que vai em "Situação em 31/12"</h2>
<p>O campo de valor recebe o custo, isto é, quanto você pagou em reais pelas moedas. Valorização não entra: se você comprou por R$ 10 mil e a moeda passou a valer R$ 18 mil, continua declarando R$ 10 mil. Para acompanhar quanto o saldo vale hoje, use a <a href="/bitcoin">cotação do Bitcoin ao vivo</a>, mas lembre que esse número não vai para a declaração.</p>
<p>Quem compra aos poucos, como no <a href="/artigos/dca-em-bitcoin-como-investir-todo-mes">DCA em Bitcoin</a>, soma o que pagou em todas as compras. Na venda de uma parte, o método mais usado é o custo médio ponderado: total pago dividido pela quantidade, multiplicado pelo que saiu. É o mesmo critério que a Receita manda usar para moeda estrangeira e ações.</p>
<p>Compra feita em dólar numa corretora de fora é convertida pela cotação de venda do dólar divulgada pelo Banco Central (PTAX) na data da operação. Guarde extratos e comprovantes de tudo: a Receita pede documentação que comprove cada aquisição e cada venda.</p>

<h2>Vendeu bitcoin? Isenção de R$ 35 mil, GCAP e DARF</h2>
<p>Para moedas em corretora brasileira ou em carteira própria de quem mora no Brasil, a venda é isenta quando o total vendido no mês, somando todas as criptomoedas, fica em até R$ 35 mil. O lucro isento é informado na ficha Rendimentos Isentos e Não Tributáveis, na linha de ganho de capital em alienações de pequeno valor.</p>
<p>Passou de R$ 35 mil no mês, o lucro de todas as vendas daquele mês é tributado, de 15% a 22,5% conforme o tamanho do ganho. O cálculo é feito no programa <a href="https://www.gov.br/receitafederal/pt-br/centrais-de-conteudo/download/pgd/gcap" rel="noopener noreferrer">GCAP, de apuração de ganhos de capital</a>, que gera o DARF com o código 4600. O pagamento vence no último dia útil do mês seguinte ao da venda, e o arquivo do GCAP é importado depois na declaração anual.</p>
<ul>
<li>Trocar uma cripto por outra (BTC por ETH, por exemplo) conta como venda, pelo valor de mercado em reais no dia.</li>
<li>Prejuízo numa venda não abate lucro de outra: a Receita não permite somar resultados de alienações diferentes.</li>
<li>DARF pago com atraso tem multa de 0,33% ao dia, limitada a 20%, mais juros Selic.</li>
</ul>

<h2>Corretora no exterior: a regra da Lei 14.754</h2>
<p>Desde 1º de janeiro de 2024, cripto guardada ou negociada em empresa sediada fora do Brasil é tratada como aplicação financeira no exterior. Nesse caso não há isenção de R$ 35 mil: o ganho realizado no ano paga 15% e é apurado na própria declaração anual, não no GCAP. Na ficha de bens, você escolhe o grupo 08, o código, informa o país e preenche o quadro Aplicação Financeira com o rendimento ou a perda.</p>
<p>Há uma vantagem: perdas no exterior, comprovadas, compensam ganhos no exterior do mesmo ano, e o saldo negativo pode ser usado nos anos seguintes. E um detalhe que confunde muita gente: carteira própria não é "exterior" automaticamente. Pela Receita, na autocustódia vale a residência do dono, então quem mora no Brasil segue a regra brasileira. Antes de escolher onde operar, leia <a href="/artigos/exchange-de-criptomoedas-como-escolher-uma-corretora">como escolher uma exchange</a>.</p>

<h2>DeCripto: a declaração mensal que substituiu a IN 1.888</h2>
<p>Além do IR anual, existe a prestação mensal de informações sobre operações com cripto. Até junho de 2026 ela seguia a IN RFB 1.888/2019, com limite de R$ 30 mil por mês. Para operações a partir de 1º de julho de 2026, vale a <a href="https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/declaracoes-e-demonstrativos/criptoativos/decripto" rel="noopener noreferrer">DeCripto, criada pela IN RFB 2.291/2025</a> no padrão internacional da OCDE.</p>
<p>Se você usa uma <a href="/glossario#exchange">exchange</a> brasileira, quem informa é ela. A pessoa física só entrega a DeCripto quando opera por corretora estrangeira, por plataforma descentralizada ou sem intermediário, e o total do mês passa de R$ 35 mil. O envio é pelo e-CAC até o último dia útil do mês seguinte, e o atraso custa R$ 100 por mês para pessoa física. Informação errada ou omitida rende multa de 1,5% do valor da operação.</p>
<div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>A DeCripto não substitui a declaração anual nem o DARF. São três obrigações diferentes: o item na ficha de bens, o imposto sobre o lucro e o relatório mensal das operações.</p></div>

<h2>Exemplo prático: a declaração da Ana, passo a passo</h2>
<p>Valores hipotéticos, só para mostrar a conta. Em 2025, Ana comprou 0,03 BTC por R$ 15.000 em março e mais 0,01 BTC por R$ 6.000 em setembro, numa corretora brasileira. Total: 0,04 BTC por R$ 21.000, o que dá um custo médio de R$ 525.000 por bitcoin.</p>
<ol>
<li>Declaração de 2026: grupo 08, código 01, discriminação "0,04 BTC na corretora X, CNPJ ...", situação em 31/12/2025 de R$ 21.000.</li>
<li>Em maio de 2026, ela vende 0,02 BTC por R$ 14.000. O custo dessa parte é 0,02 x R$ 525.000 = R$ 10.500, então o lucro é R$ 3.500.</li>
<li>Como o total vendido no mês foi R$ 14.000, abaixo de R$ 35 mil, o lucro é isento e vai para Rendimentos Isentos na declaração de 2027.</li>
<li>Na ficha de bens de 2027, o item fica com 0,02 BTC e situação em 31/12/2026 de R$ 10.500.</li>
</ol>
<p>Se no mesmo mês ela tivesse vendido também R$ 25.000 em ether, o total chegaria a R$ 39.000. Aí os lucros das duas vendas seriam tributados: com R$ 3.500 no bitcoin e, digamos, R$ 4.000 no ether, seriam R$ 7.500 x 15% = R$ 1.125 de DARF até o último dia útil de junho.</p>

<h2>Erros comuns que levam à malha fina</h2>
<p>A Receita recebe os dados das corretoras brasileiras e, agora, também os da DeCripto, alinhada ao padrão que permite troca de informações entre países. Divergência entre o que você declara e o que as empresas informam é o caminho mais curto para cair na malha.</p>
<ul class="checklist">
<li>Declarar pelo valor de mercado em vez do custo de aquisição.</li>
<li>Juntar bitcoin, altcoins e stablecoins num item só.</li>
<li>Esquecer que troca entre criptos conta como venda no limite dos R$ 35 mil.</li>
<li>Aplicar a isenção de R$ 35 mil a moedas em corretora estrangeira.</li>
<li>Deixar de pagar o DARF no mês seguinte e só lembrar na declaração anual.</li>
<li>Não guardar extratos, notas de corretagem e comprovantes de transferência.</li>
</ul>
<p>Staking, mineração, airdrops e operações em DeFi não têm orientação específica no Perguntas e Respostas, e os especialistas divergem sobre o tratamento. Se você tem esse tipo de renda, ou muitas operações, vale contratar um contador que conheça cripto.</p>
<p>Organize as compras e vendas do ano numa planilha, mês a mês, com data, quantidade, valor em reais e corretora. Para entender o pano de fundo, leia como funciona a <a href="/artigos/regulacao-das-criptomoedas-no-brasil-banco-central">regulação das criptomoedas no Brasil</a> e o guia de <a href="/artigos/stablecoins-o-que-sao-usdt-usdc">stablecoins</a>, que já respondem por cerca de 80% do volume informado à Receita, segundo <a href="https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2026/julho/stablecoins-ja-respondem-por-cerca-de-80-do-volume-declarado-de-criptoativos-no-brasil" rel="noopener noreferrer">levantamento da própria Receita</a>.</p>
<p>Na hora de converter uma quantidade em reais para conferir o saldo, o <a href="/ferramentas/conversor">conversor de Bitcoin para real</a> ajuda. E, para continuar, todos os guias sobre Receita, Banco Central e lei estão reunidos em <a href="/categoria/brasil">Regulação e Impostos</a>.</p>`,
  faq: [
    {
      question: "Preciso declarar bitcoin que não vendi?",
      answer:
        "Sim, se você é obrigado a entregar a declaração e pagou R$ 5 mil ou mais naquele tipo de criptoativo. O bitcoin vai na ficha Bens e Direitos, grupo 08, código 01, pelo custo de aquisição, com a quantidade e o nome da corretora ou a indicação de custódia própria. Não há imposto só por ter a moeda: o imposto aparece quando há venda com lucro acima das regras de isenção.",
    },
    {
      question: "Qual valor do bitcoin coloco na declaração?",
      answer:
        "O custo de aquisição em reais, ou seja, quanto você pagou pelas moedas. A cotação de 31 de dezembro não entra no campo de valor, nem a valorização desde a compra. Se comprou em várias datas, some todas as compras. Quando vender uma parte, o critério mais usado para dar baixa é o custo médio ponderado, o mesmo que a Receita adota para moeda estrangeira e ações.",
    },
    {
      question: "Vendi menos de R$ 35 mil em cripto no mês. Preciso fazer algo?",
      answer:
        "Para moedas em corretora brasileira ou em carteira própria, o lucro é isento e não há DARF. Mesmo assim, ele deve ser informado na declaração anual, na ficha Rendimentos Isentos e Não Tributáveis, e o item na ficha de bens precisa ser atualizado com a quantidade que sobrou. O limite soma todas as criptomoedas vendidas no mês, inclusive trocas entre elas.",
    },
    {
      question: "Como declarar bitcoin em corretora estrangeira?",
      answer:
        "Desde 2024, cripto em empresa sediada fora do Brasil é tratada como aplicação financeira no exterior pela Lei 14.754/2023. O item vai no grupo 08 com o país de localização, e o ganho realizado no ano é informado no quadro Aplicação Financeira, com 15% de imposto na declaração anual. Não existe a isenção de R$ 35 mil nesse caso, mas perdas comprovadas compensam ganhos.",
    },
    {
      question: "O que é a DeCripto e quem precisa entregar?",
      answer:
        "É a declaração mensal de operações com criptoativos criada pela IN RFB 2.291/2025, que vale para operações desde 1º de julho de 2026 e substituiu a IN 1.888. Corretoras que atuam no Brasil entregam sempre. A pessoa física só entrega quando opera por corretora estrangeira, plataforma descentralizada ou sem intermediário e passa de R$ 35 mil no mês, até o último dia útil do mês seguinte.",
    },
  ],
  quiz: [
    {
      question: "Em qual código do grupo 08 entra o USDT?",
      options: ["01", "02", "03"],
      answer: 2,
      explanation: "Stablecoins como USDT, USDC e BRZ têm código próprio, o 03. O 01 é só para bitcoin e o 02 para as demais criptomoedas.",
    },
    {
      question: "Ana vendeu R$ 20 mil em bitcoin e R$ 20 mil em ether no mesmo mês, numa corretora brasileira. O que acontece?",
      options: ["Tudo isento, porque cada venda ficou abaixo de R$ 35 mil", "O lucro das duas vendas é tributado", "Só o lucro do ether é tributado"],
      answer: 1,
      explanation: "O limite de R$ 35 mil considera o conjunto de criptoativos vendidos no mês. Somadas, as vendas deram R$ 40 mil, então todo o ganho do mês é tributado.",
    },
  ],
};

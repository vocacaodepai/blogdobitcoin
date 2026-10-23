import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "stablecoins-o-que-sao-usdt-usdc",
  title: "Stablecoins: o que são e como funcionam USDT, USDC e DAI",
  seoTitle: "Stablecoins: o que são USDT, USDC e DAI e seus riscos",
  excerpt:
    "Entenda o que são stablecoins, como USDT, USDC e DAI tentam valer sempre US$ 1, os casos em que a paridade quebrou e o que o Banco Central mudou no Brasil.",
  metaDescription:
    "Guia de stablecoins: como USDT, USDC e DAI seguram o dólar, o colapso do UST em 2022, riscos, regras do Banco Central, Imposto de Renda e a lei dos EUA.",
  category: "altcoins",
  date: "2026-10-22",
  readTime: 7,
  imageQuery: "us dollar banknotes close up",
  seed: 25,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Stablecoins são criptomoedas feitas para valer sempre o mesmo que uma moeda tradicional, quase sempre US$ 1, e as maiores são USDT e USDC.",
    "A estabilidade depende de reservas ou garantias reais: quando elas falham, como no colapso do UST em maio de 2022, a paridade quebra e o preço pode ir a quase zero.",
    "No Brasil, desde fevereiro de 2026 a compra, a venda e a troca de stablecoins entram no mercado de câmbio, e para a Receita elas são criptoativos como os outros.",
  ],
  content: `<p>Stablecoins são criptomoedas feitas para manter o valor preso a uma moeda tradicional, quase sempre o dólar: 1 USDT ou 1 USDC tenta valer sempre US$ 1. Elas circulam em blockchains, 24 horas por dia, mas a estabilidade depende de reservas ou garantias que alguém precisa manter de verdade.</p>
<p>Neste guia você vai ver para que servem as stablecoins, como USDT, USDC e DAI seguram a paridade, os casos em que ela quebrou, os riscos para quem guarda dinheiro nelas e o que mudou nas regras do Banco Central e da Receita Federal. O termo também tem verbete no <a href="/glossario#stablecoin">glossário</a>.</p>

<h2>O que são stablecoins e para que servem</h2>
<p>O bitcoin pode subir ou cair 10% num dia, o que atrapalha quem só quer guardar valor por algumas horas ou mandar dinheiro para fora. A stablecoin resolve isso com uma moeda digital que acompanha o dólar e funciona nas mesmas redes das outras criptomoedas. Na prática, ela vira o "dinheiro vivo" do mercado cripto: é com ela que muita gente compra e vende outras moedas, sai de uma posição sem voltar para o real ou envia valores para outro país.</p>
<p>Elas estão entre as maiores criptomoedas do mundo. Em 22 de outubro de 2026, pelos dados da CoinPaprika usados no <a href="/mercado">ranking das criptomoedas</a>, o USDT tinha cerca de US$ 183 bilhões em circulação e era a terceira maior, o USDC tinha cerca de US$ 72 bilhões e era a sexta, e o DAI somava cerca de US$ 4,6 bilhões.</p>
<p>Um detalhe que pega o brasileiro desprevenido: a stablecoin é estável em dólar, não em real. Num exemplo hipotético, quem compra 1.000 USDT com o dólar a R$ 5,40 paga R$ 5.400; se o dólar cair para R$ 5,00, os mesmos tokens passam a valer R$ 5.000.</p>

<h2>Como USDT, USDC e DAI mantêm a paridade com o dólar</h2>
<h3>Reservas do emissor: USDT e USDC</h3>
<p>O USDT é emitido pela Tether desde 2014, e o USDC, pela Circle desde 2018. O modelo é parecido: o emissor recebe dólares, cria a mesma quantidade de tokens e guarda reservas para pagar quem quiser resgatar. A Tether diz no site que cada token é atrelado 1 para 1 ao dólar e lastreado 100% pelas reservas da empresa. Se o preço no mercado escorrega para US$ 0,99, quem consegue resgatar compra barato e troca por US$ 1, e essa arbitragem puxa o preço de volta.</p>
<h3>Garantia em cripto: DAI</h3>
<p>O DAI, lançado em dezembro de 2017 na rede Ethereum, não tem um banco por trás. Ele nasce de empréstimos feitos em <a href="/glossario#contrato-inteligente">contratos inteligentes</a>: o usuário deposita uma garantia em cripto, como ether, que vale mais do que os DAI que recebe. Se a garantia perde valor demais, o contrato a vende para quitar a dívida. O projeto, criado pela comunidade MakerDAO, passou a se chamar Sky em 2024, e o funcionamento da rede por trás está no guia sobre <a href="/artigos/o-que-e-ethereum-e-como-funciona">o que é Ethereum</a>.</p>
<table>
<thead><tr><th>Stablecoin</th><th>Emissor</th><th>Desde</th><th>Como tenta valer US$ 1</th><th>Ficha no site</th></tr></thead>
<tbody>
<tr><td>USDT</td><td>Tether</td><td>2014</td><td>Reservas guardadas pela empresa</td><td><a href="/moedas/tether">Tether</a></td></tr>
<tr><td>USDC</td><td>Circle</td><td>2018</td><td>Reservas guardadas pela empresa</td><td><a href="/moedas/usd-coin">USD Coin</a></td></tr>
<tr><td>DAI</td><td>Comunidade MakerDAO, hoje Sky</td><td>2017</td><td>Garantia em cripto acima do valor emitido, em contratos inteligentes</td><td><a href="/moedas/dai">Dai</a></td></tr>
</tbody>
</table>

<h2>Quando a paridade quebra: UST, Tether e USDC</h2>
<p>O caso mais grave foi o do UST, da Terraform Labs. Ele era uma stablecoin algorítmica: em vez de reservas, mantinha o dólar pela troca com outro token da empresa, o LUNA. Segundo a <a href="https://www.sec.gov/newsroom/press-releases/2023-32" rel="noopener noreferrer">acusação da SEC contra a Terraform e seu CEO, Do Kwon</a>, em maio de 2022 o UST perdeu a paridade e o preço dele e dos tokens ligados a ele despencou para perto de zero.</p>
<p>Reservas também podem falhar. Em 2021, a <a href="https://www.cftc.gov/PressRoom/PressReleases/8450-21" rel="noopener noreferrer">CFTC multou a Tether em US$ 41 milhões</a> por dizer que o USDT era totalmente lastreado quando, numa amostra de 26 meses entre 2016 e 2018, as reservas em moeda bastavam em só 27,6% dos dias. E em março de 2023, segundo a revista Fortune, a Circle informou que US$ 3,3 bilhões, cerca de 8% das reservas do USDC, estavam no Silicon Valley Bank, que tinha acabado de quebrar. O USDC chegou a ser negociado abaixo de US$ 0,90 e só voltou a US$ 1 dias depois.</p>
<div class="callout-box callout-warn"><span class="callout-label">Atenção</span><p>"Estável" descreve o objetivo, não uma garantia. Stablecoin não tem cobertura do FGC, e o valor depende da saúde do emissor ou das garantias que a sustentam.</p></div>

<h2>Riscos de guardar dinheiro em stablecoin</h2>
<p>O primeiro risco é o do emissor: se as reservas não existirem ou ficarem presas, o token perde valor. O segundo é de controle. Os emissores de USDT e USDC conseguem congelar tokens em endereços específicos, recurso usado em casos de crime, e a corretora onde eles ficam também pode travar saques. Quem prefere não depender dela pode ler o guia de <a href="/artigos/autocustodia-not-your-keys-not-your-coins">autocustódia</a>.</p>
<ul class="checklist">
<li>Confira a rede antes de enviar: o mesmo USDT existe em várias blockchains, e mandar pela rede errada pode significar perder o valor.</li>
<li>Desconfie de "rendimento garantido em dólar digital": juros altos sobre stablecoin são isca comum de pirâmide e de <a href="/artigos/golpes-com-criptomoedas-como-se-proteger">golpes com criptomoedas</a>.</li>
<li>Lembre do câmbio: em reais, o saldo sobe e desce com o dólar.</li>
<li>Escolha uma corretora que atue legalmente no Brasil (veja <a href="/artigos/exchange-de-criptomoedas-como-escolher-uma-corretora">como escolher uma exchange</a>).</li>
</ul>
<p>Nada disso torna a stablecoin inútil. Ela só deve ser vista pelo que é: um dólar digital emitido por uma empresa ou por um protocolo, com riscos próprios, e não uma conta bancária em dólar.</p>

<h2>Stablecoins no Brasil: o que o Banco Central mudou</h2>
<p>Em 10 de novembro de 2025, o Banco Central editou as resoluções 519, 520 e 521, publicadas no Diário Oficial no dia seguinte, que regulam as prestadoras de serviços de ativos virtuais. A Resolução 520 define stablecoin como o ativo virtual lastreado em reservas para manter o valor ligado a uma moeda oficial, aceita como reserva só a própria moeda e títulos públicos do mesmo governo e proíbe as corretoras de oferecer stablecoins cujas reservas sejam controladas por algoritmos, regra que mira modelos como o do UST. Ela entrou em vigor em 2 de fevereiro de 2026.</p>
<p>A <a href="https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolu%C3%A7%C3%A3o%20BCB&amp;numero=521" rel="noopener noreferrer">Resolução 521</a> colocou no mercado de câmbio a compra, a venda e a troca de stablecoins, além das transferências de e para carteiras autocustodiadas, com a maior parte das regras valendo desde a mesma data. Para quem compra USDT com reais numa corretora autorizada, isso significa operação registrada e informada ao Banco Central como câmbio. O quadro completo da regulação está em <a href="/artigos/regulacao-das-criptomoedas-no-brasil-banco-central">regulação das criptomoedas no Brasil</a>.</p>

<h2>Imposto: para a Receita, stablecoin também é criptoativo</h2>
<p>No manual do Meu Imposto de Renda, a Receita Federal lista as stablecoins como um tipo próprio dentro de criptoativos, ao lado de bitcoin, altcoins e NFTs. Valem as mesmas regras: declaração pelo custo de aquisição quando ele for igual ou superior a R$ 5.000 por tipo e imposto sobre o ganho em reais na venda, com isenção para vendas de até R$ 35 mil por mês em corretora no Brasil. O passo a passo está em <a href="/artigos/como-declarar-bitcoin-no-imposto-de-renda">como declarar bitcoin no Imposto de Renda</a>.</p>
<p>Como o ganho é medido em reais, até uma stablecoin pode dar lucro tributável se o dólar subir entre a compra e a venda. E desde 1º de julho de 2026 vale a DeCripto, criada pela Instrução Normativa RFB 2.291/2025, que substituiu a antiga IN 1.888 no reporte mensal de operações. As alíquotas e os casos de corretora estrangeira estão em <a href="/artigos/imposto-sobre-criptomoedas-no-brasil-quanto-se-paga">imposto sobre criptomoedas no Brasil</a>.</p>

<h2>Nos Estados Unidos: a lei das stablecoins</h2>
<p>Nos EUA, o presidente Donald Trump sancionou a GENIUS Act em 18 de julho de 2025, segundo a Casa Branca. A lei exige reservas de 100% em ativos líquidos, como dólares ou títulos de curto prazo do Tesouro, e divulgação mensal da composição dessas reservas. Pelo texto, o emissor também não pode pagar rendimento só porque a pessoa guarda a stablecoin.</p>
<p>Em 21 de outubro de 2026, o OCC, regulador bancário americano, foi o primeiro órgão federal a publicar uma <a href="https://www.occ.gov/news-issuances/news-releases/2026/nr-occ-2026-92.html" rel="noopener noreferrer">regra final para aplicar a lei</a>, e tanto a regra quanto a GENIUS Act passam a valer em 18 de janeiro de 2027. Como USDT e USDC são usados no mundo inteiro, essas exigências podem pesar também sobre o que o brasileiro compra aqui.</p>

<h2>Stablecoin ou bitcoin: entenda antes de escolher</h2>
<p>Stablecoin e bitcoin têm propósitos opostos. A primeira tenta não variar em relação ao dólar e depende de um emissor ou de garantias; o segundo não tem emissor, tem oferta limitada e oscila bastante. Para comparar com outras moedas do ecossistema, o guia <a href="/artigos/bitcoin-ou-ethereum-diferencas">Bitcoin ou Ethereum</a> mostra para que serve cada uma.</p>
<p>Se a ideia é acompanhar o mercado como um todo, a página de <a href="/bitcoin">preço do Bitcoin hoje</a> mostra a cotação ao vivo, e o ranking do site traz a posição de cada stablecoin entre as maiores criptomoedas.</p>`,
  faq: [
    {
      question: "O que é stablecoin?",
      answer:
        "Stablecoin é uma criptomoeda feita para manter o valor ligado a uma moeda tradicional, quase sempre o dólar. Um USDT ou um USDC tenta valer sempre US$ 1. Ela circula em blockchains como as outras criptomoedas, mas a estabilidade depende de reservas mantidas pelo emissor ou de garantias em cripto travadas em contratos inteligentes.",
    },
    {
      question: "Qual a diferença entre USDT e USDC?",
      answer:
        "Os dois tentam valer US$ 1 e são lastreados em reservas do emissor. O USDT é da Tether, existe desde 2014 e é a maior stablecoin. O USDC é da Circle, existe desde 2018 e é o segundo maior. A Tether já foi multada nos EUA por exagerar o lastro, e o USDC perdeu a paridade por alguns dias em março de 2023.",
    },
    {
      question: "Stablecoin é segura?",
      answer:
        "Ela reduz a oscilação de preço em dólar, mas não elimina riscos. As reservas podem falhar, como mostraram o colapso do UST em 2022 e o susto do USDC em 2023. Os emissores podem congelar tokens, a corretora pode travar saques e não existe cobertura do FGC. Para o brasileiro, ainda há a variação do dólar contra o real.",
    },
    {
      question: "Stablecoin paga imposto no Brasil?",
      answer:
        "Sim. Para a Receita, stablecoin é criptoativo e tem tipo próprio na ficha de Bens e Direitos. Ela é declarada pelo custo de aquisição quando ele for igual ou superior a R$ 5.000 por tipo, e o ganho em reais na venda segue as regras de cripto, com isenção para vendas de até R$ 35 mil por mês em corretora no Brasil.",
    },
    {
      question: "O que mudou para as stablecoins com o Banco Central?",
      answer:
        "Pelas resoluções de novembro de 2025, que valem desde fevereiro de 2026, comprar, vender e trocar stablecoins passou a ser operação do mercado de câmbio, informada ao Banco Central. As corretoras também ficaram proibidas de oferecer stablecoins com reservas controladas por algoritmos, e as reservas aceitas são a moeda oficial e títulos públicos do mesmo governo.",
    },
  ],
  quiz: [
    {
      question: "O que aconteceu com o UST em maio de 2022?",
      options: [
        "Passou a valer US$ 2",
        "Perdeu a paridade e caiu para perto de zero",
        "Foi comprado pelo Banco Central",
      ],
      answer: 1,
      explanation:
        "O UST era uma stablecoin algorítmica sustentada pela troca com o token LUNA. Em maio de 2022 ele perdeu a paridade e os dois despencaram, segundo a SEC.",
    },
    {
      question: "Se o dólar cai frente ao real, o que acontece com o seu saldo em USDT medido em reais?",
      options: ["Sobe", "Fica igual", "Cai"],
      answer: 2,
      explanation:
        "O USDT acompanha o dólar, não o real. Se o dólar cair frente ao real, os mesmos tokens passam a valer menos reais.",
    },
  ],
};

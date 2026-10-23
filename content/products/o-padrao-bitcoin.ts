import type { Product } from "@/lib/types";

export const product: Product = {
  slug: "o-padrao-bitcoin",
  name: "O Padrão Bitcoin, de Saifedean Ammous",
  brand: "Editora Axia",
  category: "livros",
  asin: "659843971X",
  badge: "Escolha do editor",
  shortDescription:
    "Tradução brasileira de The Bitcoin Standard: a história do dinheiro, das pedras de Yap ao padrão-ouro, e o argumento de que o Bitcoin é dinheiro forte na era digital.",
  image: {
    url: "/images/products/o-padrao-bitcoin.jpg",
    width: 996,
    height: 1500,
    alt: "Capa laranja do livro O Padrão Bitcoin, de Saifedean Ammous, com silhuetas carregando uma moeda antiga, uma barra de ouro e o símbolo do Bitcoin",
  },
  priceMin: 70,
  priceMax: 120,
  priceCheckedAt: "2026-10-22",
  pros: [
    "Explica o conceito de vendabilidade no espaço, no tempo e em escala, a base para entender por que algumas formas de dinheiro vencem outras",
    "Os capítulos sobre a história do dinheiro, das pedras de Yap e contas de vidro ao padrão-ouro, são os mais elogiados em resenhas de leitores",
    "Edição da Editora Axia com 384 páginas, brochura e ISBN 978-6598439712, à venda em livrarias físicas e online",
    "Nota 4,8 de 5 com 118 análises de compradores na Amazon Brasil",
    "Fecha com as perguntas que todo iniciante faz: gasto de energia da mineração, escalabilidade, altcoins e a tal tecnologia blockchain",
  ],
  cons: [
    "Tom militante: o autor ataca Keynes e os bancos centrais com pouca nuance, e essa é a crítica mais repetida por leitores",
    "Os trechos que ligam a política monetária à arte, à música e à arquitetura são vistos por muitos como exagero",
    "A parte técnica sobre o funcionamento da rede é curta, e a discussão sobre escalabilidade é considerada parcial",
    "Não ensina a comprar nem a guardar bitcoin: é teoria econômica, sem passo a passo prático",
  ],
  featured: true,
  sortOrder: 1,
  date: "2026-10-22",
  relatedArticles: [
    "melhores-livros-sobre-bitcoin",
    "o-que-e-bitcoin-e-como-funciona",
    "halving-do-bitcoin-o-que-e-e-quando-e-o-proximo",
    "bitcoin-vale-a-pena-riscos-antes-de-investir",
  ],
  review: {
    title: "O Padrão Bitcoin: o livro que explica o Bitcoin pela história do dinheiro",
    summary:
      "O livro de Saifedean Ammous é a leitura mais citada quando o assunto é por que o Bitcoin existe. Ele conta a história do dinheiro com clareza e defende o Bitcoin como sucessor digital do ouro. Perde pontos pelo tom de manifesto e por algumas teses culturais que vão além do que os dados sustentam.",
    score: 8.9,
    criteria: [
      { label: "Clareza da explicação", score: 9.0 },
      { label: "Profundidade do conteúdo", score: 9.5 },
      { label: "Relevância para entender o Bitcoin", score: 9.5 },
      { label: "Equilíbrio e imparcialidade", score: 7.0 },
      { label: "Custo-benefício", score: 9.5 },
    ],
    idealFor:
      "Quem já sabe o básico do Bitcoin e quer entender o argumento econômico por trás dele, com começo, meio e fim, antes de formar a própria opinião.",
    keyPoints: [
      "A primeira metade conta como conchas, metais, ouro e papel-moeda viraram dinheiro e por que alguns perderam esse papel.",
      "A segunda metade apresenta o Bitcoin como dinheiro de oferta fixa e responde dúvidas sobre mineração, escala e altcoins.",
      "É um livro de defesa de tese, escrito por um economista da Escola Austríaca, e por isso divide opiniões fora do círculo de entusiastas.",
    ],
    sections: [
      {
        title: "Do que o livro trata",
        paragraphs: [
          "O Padrão Bitcoin é a edição brasileira de The Bitcoin Standard, publicado em inglês pela Wiley em 2018. O autor, Saifedean Ammous, é um economista com doutorado pela Universidade Columbia que foi professor da Universidade Libanesa Americana, em Beirute. A edição da Editora Axia, com o selo Konsensus Network na capa, tem 384 páginas e saiu em janeiro de 2024.",
          "A ideia central é simples de enunciar: um bom dinheiro é aquele cuja oferta é difícil de aumentar. Ammous percorre a história para mostrar como cada forma de dinheiro perdeu valor quando alguém descobriu um jeito barato de produzir mais dela, e chega ao Bitcoin como a primeira moeda com emissão fixa garantida por código.",
        ],
      },
      {
        title: "A parte mais forte: a história do dinheiro",
        paragraphs: [
          "Os primeiros capítulos são os que mais agradam até a leitores críticos. O autor explica as pedras rai da ilha de Yap, as contas de vidro usadas na África, os metais e o padrão-ouro, sempre com a mesma pergunta: o que acontece com uma moeda quando a oferta cresce de repente.",
          "Daí vem o conceito de vendabilidade, a facilidade de trocar um bem sem perder valor, olhada em três dimensões: no espaço (levar o dinheiro longe), no tempo (guardar por anos) e em escala (usar em valores pequenos e grandes). Quem termina essa parte passa a enxergar inflação, juros e poupança de outro jeito, e entende melhor por que o limite de 21 milhões importa.",
        ],
        cta: true,
      },
      {
        title: "Onde o livro escorrega",
        paragraphs: [
          "O tom é de manifesto. Ammous trata a Escola Austríaca como a única leitura correta da economia e descarta Keynes e os bancos centrais com frases duras. No capítulo sobre preferência temporal, ele liga o dinheiro forte a uma arte e uma arquitetura melhores, tese que muitos leitores consideram forçada.",
          "Mesmo dentro da Escola Austríaca há ressalvas. O economista Kristoffer Mousten Hansen, em resenha no Quarterly Journal of Austrian Economics, chamou de pista falsa a ênfase do autor na relação estoque-fluxo. A parte técnica também é enxuta: quem quer entender blocos, chaves e transações em detalhe vai precisar de outro material.",
        ],
      },
      {
        title: "Para quem vale a pena",
        paragraphs: [
          "Vale para quem já sabe o que é Bitcoin e quer o porquê. Também serve para quem desconfia da moeda e quer conhecer o melhor argumento a favor dela, desde que leia com espírito crítico e confronte com outras visões.",
          "Não é o livro certo para quem procura um manual de compra, de carteira ou de impostos. Também não é uma promessa de que o preço vai subir: o livro discute a natureza do dinheiro, e o bitcoin continua sendo um ativo muito volátil.",
        ],
        cta: true,
      },
      {
        title: "Qual edição comprar",
        paragraphs: [
          "Em 2026 a Alta Books lançou outra tradução, O padrão bitcoin: a alternativa descentralizada ao Banco Central, com 312 páginas. Esta página trata da edição da Editora Axia, de capa laranja com silhuetas, ISBN 978-6598439712.",
          "As duas traduzem o mesmo livro original, então a escolha costuma recair sobre preço, tradução e acabamento. Antes de fechar o pedido, confira na página da Amazon a editora e o número de páginas para receber a versão que você escolheu.",
        ],
      },
    ],
    priceText:
      "O preço do livro muda bastante entre lojas: livrarias costumam praticar o preço de capa, enquanto a Amazon e marketplaces dão descontos frequentes, principalmente em datas como Black Friday e no aniversário da Amazon.",
    specs: [
      "Autor: Saifedean Ammous",
      "Título original: The Bitcoin Standard (Wiley, 2018)",
      "Editora: Editora Axia, com selo Konsensus Network",
      "Edição: 3ª edição, publicada em janeiro de 2024",
      "Páginas: 384",
      "Acabamento: brochura, 16 x 23 cm",
      "ISBN-10: 659843971X",
      "ISBN-13: 978-6598439712",
      "Idioma: português",
    ],
    othersSay: [
      "No Goodreads, a parte mais elogiada é a história do dinheiro dos primeiros capítulos, descrita por leitores como uma das explicações mais claras sobre o que torna um dinheiro bom.",
      "Muitos leitores dizem que o livro deu nome a ideias como dinheiro forte e preferência temporal e foi a porta de entrada para entender o Bitcoin.",
      "A crítica mais frequente é o tom polêmico e unilateral, com ataques a Keynes e a outros economistas considerados injustos.",
      "Também se repetem queixas sobre as digressões sobre arte, música e meio ambiente e sobre a visão parcial do debate de escalabilidade.",
    ],
    howWeEvaluated:
      "Esta análise usa a ficha da edição da Editora Axia na Amazon Brasil e na livraria Martins Fontes Paulista, a sinopse da editora, resenhas de leitores no Goodreads e resenhas publicadas sobre o livro original. A análise não envolveu contato com a editora nem exemplar cedido. As notas comparam o livro com outros títulos sobre Bitcoin disponíveis em português.",
    opinion:
      "Se você só for ler um livro sobre a economia do Bitcoin, este é o candidato natural, porque organiza o argumento inteiro de forma lógica. Leia como quem escuta um advogado da causa: aproveite a história do dinheiro, questione as generalizações culturais e não trate nada disso como recomendação de investimento.",
    faq: [
      {
        question: "O Padrão Bitcoin é difícil para iniciantes?",
        answer:
          "Não exige conhecimento técnico, mas fala muito de economia. Quem nunca leu sobre o assunto pode começar por um livro mais curto, como o de Fernando Ulrich, e chegar aqui depois. A linguagem é clara e os conceitos são explicados antes de serem usados.",
      },
      {
        question: "Qual a diferença entre a edição da Axia e a da Alta Books?",
        answer:
          "As duas traduzem The Bitcoin Standard. A da Axia saiu em 2024 com 384 páginas; a da Alta Books saiu em 2026 com 312 páginas. A diferença está na tradução, no projeto gráfico e no preço, não no conteúdo original.",
      },
      {
        question: "O livro ensina a investir em bitcoin?",
        answer:
          "Não. É um livro de teoria e história monetária. Ele não traz estratégia de compra, carteira ou impostos, e a tese do autor não garante nada sobre o preço futuro. Para começar com segurança, procure guias práticos de compra e de autocustódia.",
      },
      {
        question: "Existe uma continuação de O Padrão Bitcoin?",
        answer:
          "Sim. Em O Padrão Fiduciário, também publicado no Brasil pela Editora Axia, Ammous analisa o sistema de moeda emitida por governos e como o Bitcoin pode afetá-lo. Leitores costumam recomendar ler primeiro O Padrão Bitcoin.",
      },
    ],
  },
};

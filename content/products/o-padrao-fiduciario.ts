import type { Product } from "@/lib/types";

export const product: Product = {
  slug: "o-padrao-fiduciario",
  name: "O Padrão Fiduciário, de Saifedean Ammous",
  brand: "Editora Axia",
  category: "livros",
  asin: "6598439752",
  shortDescription:
    "Continuação de O Padrão Bitcoin: Saifedean Ammous analisa o dinheiro emitido por governos como uma tecnologia, com seus acertos e falhas, e discute como o Bitcoin pode afetá-lo.",
  image: {
    url: "/images/products/o-padrao-fiduciario.jpg",
    width: 996,
    height: 1500,
    alt: "Capa verde do livro O Padrão Fiduciário, de Saifedean Ammous, com pilhas de cédulas desenhadas e uma sombra escura embaixo",
  },
  priceMin: 85,
  priceMax: 115,
  priceCheckedAt: "2026-10-22",
  pros: [
    "Explica o sistema de moeda fiduciária como um sistema técnico, com pontos fortes e fracos, em vez de só criticá-lo",
    "Apresenta a ideia de que, no padrão fiduciário, criar dívida funciona como a mineração de novas moedas",
    "Primeira edição em português, de setembro de 2025, com 376 páginas e ficha completa (ISBN 978-6598439750)",
    "Nota 4,9 de 5 com 35 avaliações na Amazon Brasil",
    "Fecha a dupla com O Padrão Bitcoin, mesmo autor, mesma editora e mesmo projeto gráfico",
  ],
  cons: [
    "Sai do dinheiro para comida, ciência, energia e clima, e essas partes recebem as críticas mais duras",
    "Várias afirmações sobre nutrição e clima são vistas por leitores como pouco sustentadas por dados",
    "Atribui quase todos os problemas modernos ao dinheiro fiduciário, o que soa exagerado para muitos",
    "Em resenhas, leitores costumam considerá-lo inferior a O Padrão Bitcoin",
  ],
  sortOrder: 5,
  date: "2026-10-22",
  relatedArticles: [
    "melhores-livros-sobre-bitcoin",
    "stablecoins-o-que-sao-usdt-usdc",
    "bitcoin-vale-a-pena-riscos-antes-de-investir",
    "ciclos-do-bitcoin-o-que-os-halvings-mostram",
  ],
  review: {
    title: "O Padrão Fiduciário: a crítica de Ammous ao dinheiro dos governos, com força e excessos",
    summary:
      "No segundo livro, Saifedean Ammous troca o foco: em vez de defender o Bitcoin, disseca o sistema de moeda emitida por governos. A primeira parte, sobre como esse sistema funciona, é a mais sólida. As extensões para comida, ciência e energia são polêmicas e pesam contra a nota.",
    score: 7.4,
    criteria: [
      { label: "Clareza da explicação", score: 8.0 },
      { label: "Profundidade do conteúdo", score: 8.5 },
      { label: "Relevância para entender o Bitcoin", score: 7.5 },
      { label: "Equilíbrio e imparcialidade", score: 5.5 },
      { label: "Custo-benefício", score: 7.5 },
    ],
    idealFor:
      "Quem leu O Padrão Bitcoin, gostou do raciocínio econômico e quer ver o outro lado da moeda: como funciona o dinheiro que usamos no dia a dia.",
    keyPoints: [
      "O livro trata o dinheiro fiduciário como uma tecnologia e explica a passagem do padrão-ouro para o sistema atual.",
      "A tese central é que, nesse sistema, a criação de dívida faz o papel que a mineração tem no Bitcoin.",
      "Os capítulos sobre alimentação, ciência e energia dividem leitores e devem ser lidos com cautela.",
    ],
    sections: [
      {
        title: "O que é o padrão fiduciário",
        paragraphs: [
          "Moeda fiduciária é o dinheiro que vale porque o governo determina que ele seja aceito, como o real e o dólar, sem lastro em ouro. Em The Fiat Standard, publicado em inglês em 2021 pela Saif House, Saifedean Ammous olha para esse sistema como olharia para um software: o que ele faz bem, onde falha e quem se beneficia.",
          "A edição brasileira saiu pela Editora Axia em setembro de 2025, com 376 páginas e o subtítulo A alternativa da escravidão por dívida para a civilização humana. O projeto gráfico repete o de O Padrão Bitcoin, agora em verde, com o selo Konsensus Network na capa.",
        ],
      },
      {
        title: "A ideia mais interessante: dívida como mineração",
        paragraphs: [
          "No Bitcoin, novas moedas surgem pela mineração, com custo de energia e regras fixas. Ammous argumenta que, no padrão fiduciário, o equivalente é a concessão de crédito: quando um banco empresta, cria dinheiro novo. Essa comparação ajuda a entender por que a quantidade de moeda cresce sem parar e por que a inflação corrói a poupança.",
          "Segundo a sinopse da editora, o autor reconhece uma vantagem do sistema atual, a facilidade de mover valor pelo mundo, e defende que o Bitcoin teria essa mesma qualidade sem a criação desenfreada de dívida. Na visão dele, o Bitcoin seria uma atualização ordenada do sistema monetário, e não um colapso.",
        ],
        cta: true,
      },
      {
        title: "Onde o livro perde o leitor",
        paragraphs: [
          "Da metade para frente, Ammous estende a crítica para a alimentação, a ciência, a energia e o clima, ligando problemas dessas áreas ao dinheiro fácil. Em resenhas de leitores, essa é a parte mais atacada: há quem veja exagero, quem sinta falta de dados e quem aponte informações enganosas sobre nutrição e clima.",
          "O American Institute for Economic Research (AIER), instituto americano de economia, publicou uma resenha com o título Everything Is the Fed's Fault, algo como tudo é culpa do Fed, que resume bem a impressão de quem não compra a tese inteira. O conselho é aproveitar a parte monetária e tratar o resto como opinião do autor.",
        ],
      },
      {
        title: "Vale ler antes ou depois de O Padrão Bitcoin?",
        paragraphs: [
          "Depois. Os dois livros conversam, mas O Padrão Bitcoin monta a base de conceitos, como vendabilidade e preferência temporal, que este livro usa sem reexplicar em detalhe. Leitores que passaram pelos dois costumam considerar o primeiro mais sólido.",
          "Para quem só quer entender o Bitcoin, este livro é opcional. Para quem quer entender inflação, juros e dívida pública com uma lente crítica, ele acrescenta bastante, desde que lido junto com visões de outras escolas econômicas.",
        ],
        cta: true,
      },
    ],
    priceText:
      "Por ser lançamento recente, o preço de capa nas livrarias fica mais alto, enquanto a Amazon costuma oferecer desconto. Promoções de datas comemorativas aproximam as duas pontas.",
    specs: [
      "Autor: Saifedean Ammous",
      "Título original: The Fiat Standard (Saif House, 2021)",
      "Subtítulo: A alternativa da escravidão por dívida para a civilização humana",
      "Editora: Editora Axia, com selo Konsensus Network",
      "Edição: 1ª edição, setembro de 2025",
      "Páginas: 376",
      "Acabamento: brochura, 16 x 23 cm",
      "ISBN-10: 6598439752",
      "ISBN-13: 978-6598439750",
    ],
    othersSay: [
      "No Goodreads, os leitores elogiam os capítulos iniciais sobre história e funcionamento do dinheiro, descritos como a melhor parte do livro.",
      "A comparação entre criação de dívida e mineração aparece com frequência como a ideia mais original da obra.",
      "A crítica mais repetida é a expansão para comida, ciência, energia e clima, vista como fuga do tema e com pouca base em dados.",
      "Muitos leitores dizem que o tom é unilateral, que o livro culpa o dinheiro fiduciário por tudo e que fica abaixo de O Padrão Bitcoin.",
    ],
    howWeEvaluated:
      "A análise usa a ficha da edição brasileira na Amazon Brasil e na livraria Martins Fontes Paulista, a sinopse oficial da Editora Axia, as resenhas de leitores do original no Goodreads e as informações sobre o autor e a recepção da obra publicadas na Wikipédia. Não houve contato com a editora. A nota compara o livro com outros títulos sobre Bitcoin e economia em português.",
    opinion:
      "O Padrão Fiduciário é leitura para quem já está convencido de que vale estudar dinheiro a fundo. A primeira metade ensina muito sobre o sistema que usamos todo dia. A segunda pede filtro. Se for escolher só um livro de Ammous, fique com O Padrão Bitcoin.",
    faq: [
      {
        question: "Preciso ler O Padrão Bitcoin antes de O Padrão Fiduciário?",
        answer:
          "Não é obrigatório, mas ajuda. O primeiro livro explica conceitos como vendabilidade e preferência temporal, que o segundo usa o tempo todo. Leitores que passaram pelos dois costumam recomendar começar por O Padrão Bitcoin.",
      },
      {
        question: "O que significa padrão fiduciário?",
        answer:
          "É o sistema em que o dinheiro não tem lastro em ouro e vale por decisão do governo, como o real e o dólar hoje. Os bancos centrais controlam a política monetária, e a maior parte do dinheiro novo surge quando bancos concedem crédito.",
      },
      {
        question: "O Padrão Fiduciário fala mais de Bitcoin ou de economia?",
        answer:
          "Principalmente de economia. O foco é o sistema de moeda emitida por governos, seus efeitos e suas falhas. O Bitcoin aparece como alternativa e como possível atualização desse sistema, sobretudo na parte final.",
      },
      {
        question: "Quantas páginas tem a edição brasileira?",
        answer:
          "A edição da Editora Axia, lançada em setembro de 2025, tem 376 páginas em brochura de 16 x 23 cm, segundo a ficha da Amazon Brasil e da livraria Martins Fontes Paulista.",
      },
    ],
  },
};

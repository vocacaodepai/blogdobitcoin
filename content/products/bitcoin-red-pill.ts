import type { Product } from "@/lib/types";

export const product: Product = {
  slug: "bitcoin-red-pill",
  name: "Bitcoin Red Pill (3ª edição), de Alan Schramm e Renato Amoedo",
  brand: "Editora Axia",
  category: "livros",
  asin: "6598439728",
  shortDescription:
    "Livro de autores brasileiros que apresenta o Bitcoin como resposta moral, econômica e tecnológica ao controle do dinheiro por governos. A 3ª edição, de 2024, tem 404 páginas.",
  image: {
    url: "/images/products/bitcoin-red-pill.jpg",
    width: 996,
    height: 1500,
    alt: "Capa escura do livro Bitcoin Red Pill, 3ª edição, com uma figura encapuzada de olhos vermelhos e uma moeda de bitcoin no peito",
  },
  priceMin: 90,
  priceMax: 120,
  priceCheckedAt: "2026-10-22",
  pros: [
    "Escrito por brasileiros, com exemplos e preocupações que conversam com a realidade do país",
    "A 3ª edição é de outubro de 2024, dez anos mais nova que o livro de Fernando Ulrich, o outro título nacional da lista",
    "Vai além da teoria e passa por temas como autocustódia e sidechains, segundo resenhas de leitores",
    "Nota 4,8 de 5 com 261 avaliações na Amazon Brasil",
    "Discute privacidade, poupança e preferência temporal, ligando o Bitcoin a escolhas de vida e de família",
  ],
  cons: [
    "Tom fortemente ideológico, que parte dos leitores descreve como messiânico",
    "Usa analogias históricas amplas, como um novo Renascimento após a Peste Negra, difíceis de comprovar",
    "As referências ficam no fim do livro, e não em notas de rodapé, o que dificulta checar as fontes",
    "Está entre os mais caros da seleção e, com 404 páginas, pede fôlego",
  ],
  sortOrder: 4,
  date: "2026-10-22",
  relatedArticles: [
    "melhores-livros-sobre-bitcoin",
    "autocustodia-not-your-keys-not-your-coins",
    "regulacao-das-criptomoedas-no-brasil-banco-central",
    "golpes-com-criptomoedas-como-se-proteger",
  ],
  review: {
    title: "Bitcoin Red Pill: o manifesto brasileiro do Bitcoin, com convicção de sobra",
    summary:
      "Alan Schramm e Renato Amoedo escreveram o livro de Bitcoin mais conhecido de autores nacionais. Ele mistura economia, tecnologia e uma forte visão política e moral. Agrada quem compartilha a visão e incomoda quem procura análise neutra, mas é leitura útil para entender como parte da comunidade brasileira pensa.",
    score: 7.5,
    criteria: [
      { label: "Clareza da explicação", score: 8.0 },
      { label: "Profundidade do conteúdo", score: 8.0 },
      { label: "Atualidade", score: 8.5 },
      { label: "Equilíbrio e imparcialidade", score: 5.5 },
      { label: "Custo-benefício", score: 7.5 },
    ],
    idealFor:
      "Quem já leu uma introdução ao Bitcoin, quer uma obra de autores brasileiros e não se incomoda com um texto de convicção política explícita.",
    keyPoints: [
      "O livro trata o Bitcoin como ferramenta de liberdade individual diante de governos, inflação e censura financeira.",
      "Segundo resenhas de leitores, passa também por temas práticos, como autocustódia, o que o diferencia de livros só teóricos.",
      "O tom militante é o ponto que mais divide leitores, e convém ler com espírito crítico.",
    ],
    sections: [
      {
        title: "Quem escreveu e qual edição é esta",
        paragraphs: [
          "Bitcoin Red Pill é assinado por Alan Schramm e Renato Amoedo. A primeira edição saiu em 2020, com o subtítulo O Renascimento Moral, Material e Tecnológico, e a obra ganhou novas edições desde então. Esta página trata da 3ª edição publicada pela Editora Axia em outubro de 2024, com 404 páginas e ISBN 978-6598439729.",
          "Na Amazon também aparece outra versão da 3ª edição, com outro ISBN (979-8336707137), 392 páginas e o subtítulo O Renascimento Moral, Material e Tecnológico. Para receber a edição da Axia, confira a editora e o número de páginas antes de finalizar o pedido.",
        ],
      },
      {
        title: "A tese do livro",
        paragraphs: [
          "A sinopse da editora começa com uma pergunta sobre o futuro da família: deixá-lo nas mãos de políticos ou assumir o controle. A partir daí, os autores descrevem um cenário de controle financeiro, cultural e político e apresentam o Bitcoin como saída individual, por ser escasso, portátil, descentralizado e resistente à censura e ao confisco.",
          "O texto propõe uma troca de valores: privacidade no lugar da fama, poupança no lugar do consumo, laços sólidos no lugar de relações superficiais. Essa ideia de inverter a preferência temporal, pensar mais no longo prazo, aparece também em O Padrão Bitcoin, de Saifedean Ammous, outro livro desta seleção.",
        ],
        cta: true,
      },
      {
        title: "Pontos fortes para o leitor brasileiro",
        paragraphs: [
          "Por ser escrito por brasileiros, o livro discute a política do país, como apontam resenhas de leitores, e parte de uma preocupação que muita família brasileira tem: o que fazer com o próprio dinheiro diante do controle do governo. Resenhas de leitores destacam a leitura acessível e o fato de passar por temas práticos, como autocustódia e sidechains, que livros mais teóricos deixam de lado.",
          "A edição de 2024 também é mais recente do que a maioria dos títulos nacionais sobre o tema, o que ajuda no retrato do ecossistema. Mesmo assim, regras de impostos e de regulação mudam rápido, então informações desse tipo devem ser conferidas em fontes oficiais.",
        ],
      },
      {
        title: "Onde é preciso cuidado",
        paragraphs: [
          "O tom é de manifesto e as conclusões são fortes. Expressões como colapso civilizacional e a ideia de um novo Renascimento após a Peste Negra mostram a escala da ambição, mas são interpretações, não fatos verificáveis. Leitores críticos falam em messianismo e pedem que o livro não seja lido como religião.",
          "Outra queixa recorrente é que as referências ficam reunidas no fim, o que torna a checagem das fontes menos prática. A sugestão é ler com um caderno ao lado, separar o que é dado do que é opinião e confrontar com outras visões sobre política monetária e regulação.",
        ],
        cta: true,
      },
    ],
    priceText:
      "A edição da Axia costuma ter preço de capa nas livrarias e desconto na Amazon. A outra versão da 3ª edição, com ISBN 979-8, aparece com preço diferente, o que confunde quem compara lojas.",
    specs: [
      "Autores: Alan Schramm e Renato Amoedo",
      "Título: Bitcoin Red Pill: O Renascimento Moral e Tecnológico (3ª edição)",
      "Editora: Editora Axia",
      "Edição: 3ª edição, outubro de 2024 (1ª edição em 2020)",
      "Páginas: 404",
      "Acabamento: brochura, 16 x 23 cm",
      "ISBN-10: 6598439728",
      "ISBN-13: 978-6598439729",
      "Idioma: português (escrito originalmente em português)",
    ],
    othersSay: [
      "No Goodreads, leitores chamam o livro de leitura obrigatória e de ótima introdução para quem está começando no Bitcoin.",
      "Outros elogiam a leitura fácil e o fato de ir além do básico, com temas como autocustódia e sidechains.",
      "A crítica mais forte é ao tom ideológico, descrito por alguns como um messianismo em que tudo depende do Bitcoin, e às posições políticas sobre o Brasil.",
      "Também aparecem queixas sobre a simplificação de ideias de autores libertários, a falta de foco prático em finanças e as referências reunidas só no fim do livro.",
    ],
    howWeEvaluated:
      "A análise reúne a ficha da 3ª edição na Amazon Brasil e na livraria Martins Fontes Paulista, a sinopse oficial da Editora Axia e as resenhas de leitores no Goodreads, onde a maior parte das opiniões se refere à primeira edição. Não houve contato com a editora nem com os autores. A nota compara a obra com outros livros sobre Bitcoin em português.",
    opinion:
      "Bitcoin Red Pill faz sentido como terceira ou quarta leitura, para quem quer ver como autores brasileiros conectam o Bitcoin a liberdade, família e política. Como explicação neutra, perde para outros títulos. Leia sabendo que é um livro de convicção e tire as suas próprias conclusões.",
    faq: [
      {
        question: "Quem são os autores de Bitcoin Red Pill?",
        answer:
          "O livro é assinado por Alan Schramm e Renato Amoedo, autores brasileiros. A primeira edição saiu em 2020, e a 3ª edição foi publicada pela Editora Axia em outubro de 2024, com 404 páginas.",
      },
      {
        question: "Qual a diferença entre as duas versões da 3ª edição na Amazon?",
        answer:
          "Uma é a edição da Editora Axia, com ISBN 978-6598439729 e 404 páginas. A outra versão tem ISBN 979-8336707137 e 392 páginas, sem a Axia como editora na ficha. Confira editora e número de páginas no anúncio antes de comprar.",
      },
      {
        question: "Bitcoin Red Pill é bom para iniciantes?",
        answer:
          "Resenhas de leitores o descrevem como acessível, mas o livro é longo e tem um tom político forte. Quem está começando costuma aproveitar mais se ler antes uma introdução curta e chegar a ele já com as ideias básicas claras.",
      },
      {
        question: "O livro dá dica de investimento?",
        answer:
          "Não é um guia de investimento. Ele defende o Bitcoin como ferramenta de liberdade e poupança de longo prazo, mas isso é a opinião dos autores. O bitcoin é volátil e qualquer decisão de compra deve considerar o risco de perda.",
      },
    ],
  },
};

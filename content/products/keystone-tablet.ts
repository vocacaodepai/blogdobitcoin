import type { Product } from "@/lib/types";

export const product: Product = {
  slug: "keystone-tablet",
  name: "Keystone Tablet (placa de aço para seed)",
  brand: "Keystone",
  category: "backup-seed",
  asin: "B09DKP6GMW",
  shortDescription:
    "Placa de aço inoxidável 304 para guardar as 12, 18 ou 24 palavras da seed com letras de metal encaixadas, sem eletrônica e sem depender de papel. Funciona com qualquer carteira BIP39.",
  image: {
    url: "/images/products/keystone-tablet.jpg",
    width: 1500,
    height: 1047,
    alt: "Keystone Tablet de aço inoxidável, com a tampa ao lado e a placa interna mostrando palavras montadas com letras de metal",
  },
  pros: [
    "Feita de aço inoxidável 304, que não enferruja com umidade e resiste muito melhor a fogo e água que uma folha de papel",
    "Guarda seeds de 12, 18 ou 24 palavras usando só as 4 primeiras letras de cada uma, o que basta no padrão BIP39",
    "Vem com 252 letras de metal gravadas a laser, 2 adesivos de lacre, parafusos extras e chave de fenda",
    "Pouco maior que um cartão de crédito (60 x 105 x 6,5 mm), com furo para cadeado e tampa deslizante",
    "Não depende de marca: serve para Ledger, Trezor e qualquer outra carteira compatível com BIP39",
  ],
  cons: [
    "Montar 24 palavras letra por letra leva tempo e exige um lugar calmo e privado",
    "Em testes independentes de calor, a versão Plus da mesma placa perdeu letras, e a versão básica não aparece nesses testes",
    "O guia que vem na caixa não tem garantia de versão em português",
    "A superfície pode chegar com riscos de fabricação, segundo o próprio anúncio",
  ],
  featured: false,
  sortOrder: 1,
  date: "2026-10-22",
  relatedArticles: [
    "seed-phrase-como-guardar-as-palavras-de-recuperacao",
    "melhores-carteiras-de-hardware-para-bitcoin",
    "autocustodia-not-your-keys-not-your-coins",
    "golpes-com-criptomoedas-como-se-proteger",
  ],
  review: {
    title: "Keystone Tablet: a seed em aço, com letras de metal e sem eletrônica",
    summary:
      "A Keystone Tablet troca o papel por uma placa de aço inoxidável onde você encaixa as 4 primeiras letras de cada palavra da seed. É simples, compatível com qualquer carteira BIP39 e aguenta água e umidade sem problema. A resistência ao fogo depende de as letras ficarem presas, e testes com a versão Plus mostram que esse é o ponto fraco do formato.",
    score: 7.9,
    criteria: [
      { label: "Resistência a fogo e água", score: 7.0 },
      { label: "Facilidade de montagem", score: 7.0 },
      { label: "Compatibilidade", score: 9.0 },
      { label: "Discrição e portabilidade", score: 8.5 },
      { label: "Custo-benefício", score: 8.0 },
    ],
    idealFor:
      "Quem já tem uma carteira de hardware e quer tirar a seed do papel com uma solução simples, barata e que serve para qualquer marca.",
    keyPoints: [
      "A placa de aço 304 guarda até 24 palavras usando as 4 primeiras letras de cada uma, o suficiente para recuperar uma seed BIP39.",
      "Não tem eletrônica nem marca de carteira: serve para Ledger, Trezor e outras compatíveis com o padrão.",
      "Placas de letras encaixadas podem perder peças sob calor extremo, então o local onde ela fica guardada também importa.",
    ],
    sections: [
      {
        title: "Para que serve uma placa de metal",
        paragraphs: [
          "A seed, as 12 ou 24 palavras que sua carteira mostra na configuração, é a única forma de recuperar suas moedas se o aparelho quebrar, for roubado ou simplesmente sumir. Anotada em papel, ela pode molhar, apagar com o tempo ou queimar num incêndio. A placa de metal existe para que esse backup dure tanto quanto as moedas.",
          "Na Keystone Tablet, você monta cada palavra com pequenas letras de aço encaixadas em trilhos numerados de 1 a 24. Pelo padrão BIP39, as 4 primeiras letras bastam para identificar qualquer palavra da lista, então ninguém precisa gravar a palavra inteira. Uma tampa deslizante cobre a placa, e um furo permite passar um cadeado.",
        ],
        cta: true,
      },
      {
        title: "Material e resistência",
        paragraphs: [
          "A placa e as letras são de aço inoxidável grau 304, o mesmo tipo usado em pias e panelas, que não enferruja com umidade. Segundo a Keystone, o material aguenta de 1.399 a 1.455 °C, bem acima dos cerca de 649 °C que a fabricante cita para incêndios residenciais. As letras são gravadas a laser, o que evita que a marcação desbote.",
          "O ponto de atenção está no formato. Nos testes de estresse publicados por Jameson Lopp, desenvolvedor conhecido por avaliar backups de metal, a Keystone Tablet Plus, versão com mais parafusos, teve letras soltas depois do aquecimento, o que ele classificou como perda grave de dados. A versão básica vendida neste anúncio não aparece nesses testes. Na prática, vale guardar a placa longe de fontes de calor e, se possível, ter uma segunda cópia em outro endereço.",
        ],
      },
      {
        title: "Como montar sem expor a seed",
        paragraphs: [
          "Separe um momento sem pressa, sem câmeras por perto e sem celular apontado para a mesa. Monte uma palavra por vez, conferindo a ordem com a carteira, e só depois feche a tampa e aplique os adesivos de lacre que vêm na caixa. Se um dia o adesivo aparecer rompido, alguém pode ter visto suas palavras.",
          "Nunca fotografe a placa pronta e nunca digite a seed em site, app ou formulário para conferir. Desconfie de qualquer pessoa que ofereça ajuda para montar o backup, inclusive quem se apresenta como suporte de marca de carteira: suporte legítimo nunca pede as palavras.",
        ],
        cta: true,
      },
      {
        title: "Compatibilidade com Ledger e Trezor",
        paragraphs: [
          "A placa funciona com qualquer carteira que use o padrão BIP39, o que inclui Ledger, Trezor e a maioria dos apps de carteira. O anúncio cita compatibilidade com dezenas de carteiras e moedas, mas o que importa é o padrão das palavras, não a moeda guardada.",
          "As Trezor mais novas usam por padrão um backup de 20 palavras, mas aceitam também 12 ou 24 palavras na configuração. Se você vai usar a Keystone Tablet, escolher 12 ou 24 palavras deixa o backup no formato exato para o qual a placa foi desenhada.",
        ],
      },
      {
        title: "Onde guardar e o que esperar",
        paragraphs: [
          "A placa resolve o problema da durabilidade do backup, não o do esconderijo. Guarde longe da carteira de hardware, num lugar que só você, ou alguém de confiança do seu plano de herança, saiba onde fica. Um cofre ou uma caixa trancada dentro de casa costuma ser suficiente para a maioria das pessoas.",
          "O próprio anúncio avisa que a superfície pode chegar com pequenos riscos de fabricação, por causa dos parafusos e pontos de solda, e isso não afeta o uso. A garantia informada é de 6 meses, e na Amazon o produto aparece vendido pela KeystoneHQ, loja da marca, com envio pela própria Amazon.",
        ],
      },
    ],
    priceText:
      "A placa é importada e o preço muda conforme o câmbio e o vendedor. Na data da pesquisa não encontramos o mesmo modelo em duas lojas brasileiras para montar uma faixa confiável, e a Amazon só exibe o valor ao colocar o produto no carrinho.",
    specs: [
      "Material: aço inoxidável 304 (placa e letras)",
      "Resistência ao calor informada: 1.399 a 1.455 °C",
      "Capacidade: seeds de 12, 18 ou 24 palavras, 4 letras por palavra",
      "Letras: 252 peças de metal gravadas a laser",
      "Dimensões: 60 x 105 x 6,5 mm",
      "Peso informado pela fabricante: 430 g",
      "Fechamento: tampa deslizante, furo para cadeado e 2 adesivos de lacre",
      "Na caixa: placa, 4 folhas de letras, adesivos, parafusos extras, chave de fenda e guia",
      "Garantia: 6 meses",
    ],
    othersSay: [
      "Em avaliações independentes de backups de metal, placas de letras encaixadas como a da Keystone são elogiadas por serem fáceis de montar e por não exigirem ferramentas de gravação.",
      "Nos mesmos testes independentes, a versão Plus da placa teve a nota mais alta nos quesitos esmagamento e corrosão.",
      "A crítica mais citada é que mexer em tantos parafusos pequenos é trabalhoso, e que peças pequenas aumentam os pontos de falha.",
      "No teste de calor publicado por Jameson Lopp, a versão Plus perdeu letras, enquanto a Keystone Tablet Punch, em que as letras são marcadas com punção, teve nota melhor nesse quesito.",
    ],
    howWeEvaluated:
      "Esta análise usou o anúncio da Amazon Brasil, a ficha oficial da Keystone e os testes independentes de backups de metal publicados por Jameson Lopp. Não houve teste físico do produto. As notas comparam a placa com outras formas de guardar a seed, do papel às placas de punção.",
    opinion:
      "A Keystone Tablet é um upgrade claro sobre o papel e serve para qualquer carteira, o que a torna uma compra sensata junto com a primeira carteira de hardware. Só não trate a placa como indestrutível: guarde longe do calor, monte com calma e, se o valor guardado for alto, mantenha uma segunda cópia em outro lugar.",
    faq: [
      {
        question: "Por que guardar a seed em metal e não em papel?",
        answer:
          "Papel molha, mofa, desbota e queima. Uma placa de aço inoxidável aguenta água e umidade sem perder a marcação e resiste a temperaturas muito mais altas. Como a seed é a única forma de recuperar suas moedas, vale proteger esse backup tanto quanto a própria carteira.",
      },
      {
        question: "Só 4 letras de cada palavra bastam para recuperar a carteira?",
        answer:
          "Sim, no padrão BIP39. A lista oficial tem 2.048 palavras e nenhuma delas repete as mesmas 4 primeiras letras, então o prefixo identifica a palavra sem erro. Na hora de restaurar, a própria carteira completa a palavra quando você digita o começo.",
      },
      {
        question: "A Keystone Tablet funciona com a Trezor?",
        answer:
          "Funciona com qualquer carteira BIP39, incluindo Ledger e Trezor. Como as Trezor mais novas usam 20 palavras por padrão, quem quiser seguir exatamente o formato da placa pode escolher um backup de 12 ou 24 palavras na configuração do aparelho.",
      },
      {
        question: "A placa resiste a um incêndio?",
        answer:
          "O aço aguenta temperaturas muito altas, segundo a fabricante, mas em placas de letras encaixadas o risco é as peças se soltarem com a dilatação. Em testes independentes, a versão Plus perdeu letras no calor. Guarde longe de fontes de calor e considere uma segunda cópia em outro endereço.",
      },
    ],
  },
};

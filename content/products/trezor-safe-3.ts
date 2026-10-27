import type { Product } from "@/lib/types";

export const product: Product = {
  slug: "trezor-safe-3",
  name: "Trezor Safe 3",
  brand: "Trezor",
  category: "hardware-wallets",
  asin: "B0CLNZ5FKN",
  badge: "Escolha do editor",
  shortDescription:
    "Carteira de hardware de entrada da Trezor, com código aberto, chip seguro EAL6+, conexão USB-C e passphrase digitada no próprio aparelho. A opção mais equilibrada para guardar bitcoin.",
  image: {
    url: "/images/products/trezor-safe-3.jpg",
    width: 1500,
    height: 1500,
    alt: "Trezor Safe 3 na cor preta, vista de frente com a tela acesa e de costas com o logotipo de cadeado",
  },
  priceMin: 350,
  priceMax: 730,
  priceCheckedAt: "2026-10-22",
  pros: [
    "Firmware e projeto de código aberto, que qualquer pessoa pode auditar, somados a um chip seguro com certificação EAL6+",
    "Passphrase e PIN digitados no próprio aparelho, sem passar pelo teclado do computador",
    "Aceita backup de 12, 20 ou 24 palavras e permite migrar para o backup multi-share, dividido em várias partes",
    "Muito leve e pequena: 59 x 32 x 7,4 mm e 14 g, com conexão USB-C e cabo USB-C na caixa",
    "Pode servir também como chave de autenticação em dois fatores no padrão FIDO2",
  ],
  cons: [
    "Tela OLED monocromática de 0,96 polegada, pequena para conferir endereços longos",
    "Navegação por dois botões, mais lenta que uma tela sensível ao toque",
    "Sem Bluetooth: no iPhone o app da Trezor não permite configurar o aparelho nem enviar moedas",
    "Suporta menos redes que a Ledger no app oficial, embora cubra muito bem o Bitcoin",
  ],
  featured: true,
  sortOrder: 1,
  date: "2026-10-22",
  relatedArticles: [
    "melhores-carteiras-de-hardware-para-bitcoin",
    "autocustodia-not-your-keys-not-your-coins",
    "seed-phrase-como-guardar-as-palavras-de-recuperacao",
    "carteira-de-bitcoin-qual-escolher",
  ],
  review: {
    title: "Trezor Safe 3: código aberto e chip seguro no modelo mais acessível da marca",
    summary:
      "A Safe 3 juntou o que a Trezor sempre teve de melhor, o código aberto, com um chip seguro certificado que faltava nos modelos antigos. É pequena, simples e entrega o essencial para guardar bitcoin com segurança. A tela minúscula e os dois botões são o preço da economia.",
    score: 8.7,
    criteria: [
      { label: "Segurança do hardware", score: 9.0 },
      { label: "Facilidade de uso", score: 8.0 },
      { label: "Moedas e apps suportados", score: 8.0 },
      { label: "Transparência do código", score: 9.5 },
      { label: "Custo-benefício", score: 9.0 },
    ],
    idealFor:
      "Quem guarda principalmente bitcoin, quer uma carteira auditável pela comunidade e não se importa de usar o computador ou um Android com cabo.",
    keyPoints: [
      "O firmware é aberto e o chip seguro tem certificação EAL6+, uma combinação rara entre os modelos de entrada.",
      "PIN e passphrase são digitados no próprio aparelho, e o backup pode ser de 12, 20 ou 24 palavras, com opção multi-share.",
      "A tela de 0,96 polegada e os dois botões deixam o uso mais lento, e não há Bluetooth para usar com iPhone.",
    ],
    sections: [
      {
        title: "Por que a Safe 3 virou a porta de entrada da Trezor",
        paragraphs: [
          "Durante anos a Trezor apostou só em código aberto, sem chip seguro, e isso abria uma brecha: com o aparelho em mãos e equipamento de laboratório, era possível tentar extrair a seed. A Safe 3 fecha essa porta com um chip seguro certificado EAL6+, que guarda o segredo protegido pelo PIN, e mantém o firmware público, que qualquer programador pode ler e conferir.",
          "Na prática, isso quer dizer duas camadas de confiança. Você não depende só da palavra da fabricante, porque o código está aberto, e um ladrão que roube o aparelho tem muito mais dificuldade para tirar alguma coisa dele. A própria Trezor apresenta a Safe 3 como sucessora da antiga Model One, que a fabricante deixou de vender.",
        ],
        cta: true,
      },
      {
        title: "Backup, passphrase e recursos de segurança",
        paragraphs: [
          "Na configuração, a Safe 3 cria a seed e mostra as palavras na tela. A caixa traz dois cartões para anotar um backup de 20 palavras, o padrão atual da marca, mas o aparelho também aceita 12 ou 24 palavras, o que facilita restaurar uma carteira antiga. Quem quer ir além pode migrar para o backup multi-share, que divide a recuperação em várias partes guardadas em lugares diferentes.",
          "A passphrase, uma palavra extra que cria uma carteira escondida, é digitada no aparelho. Esse detalhe importa: o que passa pelo teclado do computador pode ser capturado por um programa espião, e aqui isso não acontece. O mesmo aparelho ainda serve como chave de dois fatores no padrão FIDO2 para serviços compatíveis.",
        ],
      },
      {
        title: "Uso no dia a dia",
        paragraphs: [
          "A Safe 3 funciona com o Trezor Suite, o app oficial da marca para computador e celular, e com carteiras de terceiros, como Sparrow e Electrum, muito usadas por quem guarda bitcoin. A conexão é por USB-C, com cabo USB-C para USB-C na caixa. Segundo a página oficial, no iPhone o app não permite configurar o aparelho nem enviar moedas.",
          "A tela OLED de 0,96 polegada é pequena. Conferir um endereço de bitcoin inteiro exige atenção e algumas telas. Os dois botões resolvem bem a confirmação de transações, mas digitar uma passphrase longa leva tempo. Para quem faz poucas movimentações por mês, isso pesa pouco.",
        ],
      },
      {
        title: "Compre só de vendedor oficial",
        paragraphs: [
          "A regra vale para qualquer carteira: compre da fabricante ou de revenda autorizada e confira quem vende o produto na página da loja. Na Amazon, a Safe 3 aparece vendida pela Amazon Global, a área de importados da própria Amazon, e no Brasil há revendas oficiais com nota fiscal e garantia nacional.",
          "Ao abrir a caixa, verifique o lacre e deixe o próprio Trezor Suite conferir a autenticidade do aparelho. Se a carteira chegar com palavras já anotadas num cartão ou já configurada, não use: é um golpe conhecido, em que o vendedor fica com uma cópia da seed e esvazia a carteira depois do primeiro depósito.",
        ],
        cta: true,
      },
      {
        title: "Quando vale olhar outro modelo",
        paragraphs: [
          "Se você vai guardar várias moedas de redes diferentes e quer o maior número de apps num aparelho só, a Ledger Nano S Plus tem um ecossistema mais amplo. Se o incômodo é a tela pequena, a Trezor Safe 5 tem tela colorida sensível ao toque, e a Safe 7 adiciona Bluetooth para usar com iPhone.",
          "Para quem está começando com bitcoin e quer um aparelho confiável sem gastar muito, a Safe 3 é difícil de superar. O dinheiro que sobra pode ir para uma placa de metal para a seed, que protege o backup contra fogo e água.",
        ],
      },
    ],
    priceText:
      "O preço muda bastante conforme o canal. No site oficial da Trezor o valor aparece em reais, mas a compra é enviada do exterior e pode ter frete e tributos de importação. Nas revendas oficiais brasileiras o preço é maior, porque já inclui impostos, nota fiscal e garantia nacional.",
    specs: [
      "Chip seguro: certificação EAL6+",
      "Processador: ARM Cortex M4 de 180 MHz",
      "Tela: OLED monocromática de 0,96 polegada, 128 x 64 pixels",
      "Controles: dois botões físicos",
      "Conexão: USB-C (cabo USB-C para USB-C incluso)",
      "Backup: 12, 20 ou 24 palavras, com opção multi-share",
      "Proteção: PIN e passphrase digitados no aparelho",
      "Dimensões e peso: 59 x 32 x 7,4 mm, 14 g",
      "Na caixa: aparelho, cabo, 2 cartões de backup, guia rápido e adesivos",
    ],
    othersSay: [
      "Nas avaliações publicadas no site da Trezor e em comunidades de Bitcoin, o elogio mais comum é o bom custo-benefício para uma carteira com chip seguro e código aberto.",
      "Vários compradores contam que a configuração foi tranquila e que o Trezor Suite é simples de usar, mesmo para quem nunca teve carteira de hardware.",
      "A reclamação mais repetida é a tela pequena e sem toque, que deixa a conferência de endereços e a digitação de senhas mais lentas.",
      "Outra crítica frequente é a falta de Bluetooth, que limita o uso pelo celular, embora parte dos usuários veja a conexão só por cabo como vantagem de segurança.",
    ],
    howWeEvaluated:
      "Esta análise usou a ficha técnica e a página oficial da Trezor, o anúncio na Amazon Brasil, anúncios de revendas oficiais no Brasil e opiniões recorrentes de usuários em fóruns e vídeos. Não houve teste físico do aparelho. As notas comparam a Safe 3 com outras carteiras de hardware vendidas no país.",
    opinion:
      "Para a maioria das pessoas que quer tirar bitcoin da corretora, a Safe 3 é a recomendação mais segura: código aberto, chip seguro, passphrase no aparelho e tamanho de chaveiro. Só vale pagar mais por um modelo superior se a tela pequena ou a falta de Bluetooth atrapalharem de verdade a sua rotina.",
    faq: [
      {
        question: "A Trezor Safe 3 tem chip seguro?",
        answer:
          "Sim. Diferente da antiga Model One, a Safe 3 tem um chip seguro com certificação EAL6+, que protege o segredo da carteira contra tentativas de extração física. O firmware continua aberto, então a comunidade pode auditar como o aparelho funciona.",
      },
      {
        question: "Posso usar a Trezor Safe 3 no iPhone?",
        answer:
          "De forma limitada. Segundo a página oficial, no iOS não é possível configurar o aparelho, enviar moedas ou fazer trocas. Para usar tudo, é preciso um computador ou um celular Android com cabo USB-C. Quem depende do iPhone deve olhar a Safe 7, que tem Bluetooth.",
      },
      {
        question: "Quantas palavras tem a seed da Trezor Safe 3?",
        answer:
          "O padrão da Trezor hoje é o backup de 20 palavras, e a caixa traz dois cartões para anotar. O aparelho também aceita 12 ou 24 palavras, o que permite restaurar carteiras de outras marcas que seguem o padrão BIP39, e oferece o backup multi-share.",
      },
      {
        question: "Comprar a Safe 3 importada ou numa revenda brasileira?",
        answer:
          "Os dois caminhos são seguros quando o vendedor é oficial. A compra no site da Trezor vem do exterior e pode ter frete e imposto de importação. A revenda oficial no Brasil cobra mais, mas entrega com nota fiscal e garantia nacional. Fuja de vendedor desconhecido e de aparelho usado.",
      },
    ],
  },
};

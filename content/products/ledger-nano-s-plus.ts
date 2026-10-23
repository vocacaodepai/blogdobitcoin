import type { Product } from "@/lib/types";

export const product: Product = {
  slug: "ledger-nano-s-plus",
  name: "Ledger Nano S Plus",
  brand: "Ledger",
  category: "hardware-wallets",
  asin: "B09W66VHFH",
  shortDescription:
    "Carteira de hardware de entrada da Ledger, com chip seguro certificado, conexão USB-C e espaço para até 100 apps de moedas. Funciona no computador e no Android, sem Bluetooth.",
  image: {
    url: "/images/products/ledger-nano-s-plus.jpg",
    width: 1257,
    height: 1313,
    alt: "Ledger Nano S Plus aberta, com a tela mostrando o menu de moedas e a capa de metal escovado com a marca Ledger",
  },
  pros: [
    "Chip seguro ST33K1M5 com certificação CC EAL6+, um nível alto na escala internacional Common Criteria",
    "Cabe até 100 apps de moedas ao mesmo tempo, então dá para guardar Bitcoin e outras redes sem ficar instalando e apagando",
    "Conexão USB-C, com cabo USB-C para USB-A na caixa, e compatível com Windows, macOS, Linux e Android 10 ou mais novo",
    "Pequena e leve: 62,4 x 17,4 x 8,2 mm e 21 g, com capa de aço escovado que protege a tela",
    "Tela OLED de 1,1 polegada (128 x 64 pixels), bem maior que a do antigo Nano S, o que facilita conferir endereços",
  ],
  cons: [
    "Não funciona com iPhone nem com Chromebook, segundo a própria ficha da Ledger",
    "Sem Bluetooth e sem bateria: precisa ficar ligada no cabo o tempo todo",
    "O firmware e o chip seguro não são totalmente de código aberto, ponto que pesa para quem quer auditar tudo",
    "A marca ainda carrega a sombra do vazamento da base de clientes de 2020, que alimenta golpes de phishing até hoje",
  ],
  featured: false,
  sortOrder: 2,
  date: "2026-10-22",
  relatedArticles: [
    "melhores-carteiras-de-hardware-para-bitcoin",
    "carteira-de-bitcoin-qual-escolher",
    "seed-phrase-como-guardar-as-palavras-de-recuperacao",
    "autocustodia-not-your-keys-not-your-coins",
  ],
  review: {
    title: "Ledger Nano S Plus: a porta de entrada mais popular para a autocustódia",
    summary:
      "A Nano S Plus é o modelo mais barato da Ledger e resolve bem o básico: guarda as chaves fora da internet num chip seguro certificado, aceita muitas moedas e se conecta por USB-C. Perde pontos para quem quer código aberto completo ou usa iPhone.",
    score: 8.3,
    criteria: [
      { label: "Segurança do hardware", score: 8.5 },
      { label: "Facilidade de uso", score: 8.0 },
      { label: "Moedas e apps suportados", score: 9.5 },
      { label: "Transparência do código", score: 6.5 },
      { label: "Custo-benefício", score: 9.0 },
    ],
    idealFor:
      "Quem vai sair da exchange pela primeira vez, usa computador ou celular Android e quer guardar Bitcoin junto com outras moedas num aparelho só.",
    keyPoints: [
      "O chip seguro com certificação CC EAL6+ guarda a chave privada e só libera transações confirmadas nos botões do próprio aparelho.",
      "Ela aceita até 100 apps de moedas instalados ao mesmo tempo e conversa com o app oficial da Ledger e com carteiras de terceiros.",
      "Não tem Bluetooth nem suporte a iPhone, e parte do software não é aberto, o que afasta quem prioriza auditoria independente.",
    ],
    sections: [
      {
        title: "O que a Nano S Plus faz, em linguagem simples",
        paragraphs: [
          "Uma carteira de hardware é um aparelho pequeno que gera e guarda a sua chave privada longe do computador. Quando você manda bitcoin para alguém, o computador monta a transação, mas quem assina é a Nano S Plus, depois que você confere o endereço na telinha e aperta os dois botões. Mesmo que o computador esteja infectado, o vírus não consegue copiar a chave, porque ela nunca sai do chip.",
          "Na primeira configuração, o aparelho mostra 24 palavras, a seed. É ela que permite recuperar tudo se a carteira quebrar ou for perdida. A Ledger manda na caixa três folhas para anotar essas palavras, e o ideal é passar depois para uma placa de metal, que aguenta fogo e água bem melhor que papel.",
        ],
      },
      {
        title: "Segurança: chip certificado, mas com código parcialmente fechado",
        paragraphs: [
          "O coração do aparelho é o chip ST33K1M5, com certificação CC EAL6+, um nível alto na escala internacional de avaliação de segurança Common Criteria. Ele foi feito para resistir a tentativas de extrair a chave por ataque físico, e o PIN apaga o aparelho depois de várias tentativas erradas.",
          "O ponto de atenção é a transparência. Parte do software que roda no chip seguro não é publicada, então a comunidade não consegue auditar tudo, ao contrário do que acontece com a Trezor. Em 2023 a Ledger lançou o Ledger Recover, um serviço pago e opcional que criptografa e divide a seed em três partes guardadas por Coincover, Ledger e EscrowTech, com verificação de identidade. Quem não contrata o serviço não é afetado, mas a existência dessa função mostrou que o firmware pode, com autorização do usuário, exportar a seed em pedaços, e isso incomodou muita gente.",
        ],
        cta: true,
      },
      {
        title: "Uso no dia a dia e compatibilidade",
        paragraphs: [
          "A Nano S Plus funciona com o app oficial da Ledger, o Ledger Wallet (que por anos se chamou Ledger Live), no Windows 10 e 11, no macOS, no Ubuntu e no Android 10 ou mais novo, ligada pelo cabo. Segundo a fabricante, o app oficial cobre mais de 500 criptomoedas, e com carteiras de terceiros, como Electrum ou Sparrow para Bitcoin, o número de moedas e tokens passa de 15 mil.",
          "A tela de 1,1 polegada mostra o endereço completo em poucas rolagens, o que ajuda na conferência antes de assinar. A navegação por dois botões é lenta para digitar palavras, algo que só pesa na hora de restaurar uma seed. No uso normal, receber e mandar bitcoin leva poucos cliques.",
        ],
      },
      {
        title: "Onde comprar sem cair em golpe",
        paragraphs: [
          "Carteira de hardware só deve ser comprada da fabricante ou de vendedor oficial e autorizado. Na Amazon, confira na página quem vende e quem entrega antes de fechar o pedido. Evite anúncio de terceiro desconhecido e aparelho usado.",
          "Nunca aceite uma carteira que já venha com as 24 palavras preenchidas num cartão ou com o aparelho configurado. A seed tem que ser gerada pelo próprio aparelho, na sua frente. Qualquer carta, e-mail ou ligação pedindo suas palavras é golpe, inclusive os que usam o nome da Ledger: depois do vazamento da base de clientes de 2020, esse tipo de abordagem ficou comum.",
        ],
        cta: true,
      },
      {
        title: "Para quem ela não é a melhor escolha",
        paragraphs: [
          "Quem usa iPhone como aparelho principal vai precisar de um computador para operar a carteira, já que a Nano S Plus não conversa com iOS. Nesse caso, um modelo com Bluetooth, como a Nano X, ou uma Trezor mais recente com suporte a iOS, faz mais sentido.",
          "Quem guarda só bitcoin e valoriza código aberto acima de tudo costuma preferir a Trezor Safe 3, outro modelo de entrada, com firmware público. Já quem quer uma tela grande e sensível ao toque vai achar a Nano S Plus apertada.",
        ],
      },
    ],
    priceText:
      "O preço muda bastante conforme o vendedor e a época, e às vezes a Amazon só mostra o valor depois de colocar o produto no carrinho. Compras de revenda brasileira saem com nota fiscal e garantia nacional, o que costuma custar um pouco mais que o preço de tabela da fabricante lá fora.",
    specs: [
      "Chip seguro: ST33K1M5, certificação CC EAL6+",
      "Tela: OLED monocromática de 1,1 polegada, 128 x 64 pixels",
      "Conexão: USB-C (cabo USB-C para USB-A incluso)",
      "Compatibilidade: Windows 10 e 11, macOS, Ubuntu LTS e Android 10 ou mais novo (não funciona com iOS nem Chromebook)",
      "Apps instalados ao mesmo tempo: até 100",
      "Dimensões e peso: 62,4 x 17,4 x 8,2 mm, 21 g",
      "Acabamento: aço inoxidável escovado e plástico",
      "Na caixa: aparelho, cabo, 3 folhas de recuperação e cordão de chaveiro",
    ],
    othersSay: [
      "Em fóruns como o Reddit e em vídeos de review no YouTube, o elogio mais repetido é o preço de entrada baixo para uma carteira com chip seguro e espaço para muitas moedas.",
      "Quem veio do Nano S antigo costuma destacar a tela maior e o fim do aperto de memória, que obrigava a apagar um app para instalar outro.",
      "A crítica mais frequente vem da polêmica do Ledger Recover em 2023: parte dos usuários diz ter migrado para carteiras de código aberto por desconfiança do firmware fechado.",
      "Outra reclamação comum são os e-mails e cartas falsas em nome da Ledger, consequência do vazamento de dados de clientes de 2020, além da falta de Bluetooth e de suporte ao iPhone.",
    ],
    howWeEvaluated:
      "Esta análise foi feita a partir da ficha técnica oficial da Ledger, do anúncio na Amazon Brasil, das páginas de suporte e de serviços da fabricante e de opiniões recorrentes de compradores em fóruns e vídeos. Não houve teste físico do aparelho. As notas comparam a Nano S Plus com outras carteiras de hardware vendidas no Brasil.",
    opinion:
      "Para quem está começando e quer tirar as moedas da corretora sem gastar muito, a Nano S Plus cumpre o que promete e tem o ecossistema mais amplo de moedas. Se você guarda só bitcoin e quer poder auditar o código, a Trezor Safe 3 é a alternativa mais coerente. Em qualquer caso, compre de vendedor oficial e guarde a seed fora do papel.",
    faq: [
      {
        question: "A Ledger Nano S Plus funciona no iPhone?",
        answer:
          "Não. Pela ficha oficial da Ledger, a Nano S Plus funciona no computador (Windows, macOS e Linux) e em celulares Android 10 ou mais novos pelo cabo USB-C. iPhone e Chromebook não são compatíveis. Para usar com iPhone, a Ledger indica modelos com Bluetooth.",
      },
      {
        question: "Se a Ledger falir, eu perco meus bitcoins?",
        answer:
          "Não. As moedas ficam na blockchain, e o que a carteira guarda é a chave para movê-las. Com as 24 palavras da seed, você recupera tudo em outra carteira compatível com o padrão BIP39, de qualquer marca. Por isso a seed precisa estar bem guardada.",
      },
      {
        question: "Preciso contratar o Ledger Recover?",
        answer:
          "Não. O Ledger Recover é um serviço pago e opcional, com assinatura anual e verificação de identidade. A carteira funciona normalmente sem ele. A maioria dos usuários prefere guardar a seed por conta própria, de preferência numa placa de metal.",
      },
      {
        question: "Posso comprar uma Nano S Plus usada?",
        answer:
          "Não é recomendado. Um aparelho usado pode ter sido adulterado ou vir com uma seed que outra pessoa conhece. Compre lacrada, de vendedor oficial, e gere as 24 palavras você mesmo na primeira configuração.",
      },
    ],
  },
};

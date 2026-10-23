import type { Product } from "@/lib/types";

export const product: Product = {
  slug: "trezor-safe-7",
  name: "Trezor Safe 7",
  brand: "Trezor",
  category: "hardware-wallets",
  asin: "B0G2LSZ354",
  shortDescription:
    "O modelo mais completo da Trezor: tela colorida sensível ao toque de 2,5 polegadas, Bluetooth para usar com iPhone e Android, bateria com carregamento sem fio e dois chips seguros.",
  image: {
    url: "/images/products/trezor-safe-7.jpg",
    width: 1500,
    height: 1500,
    alt: "Trezor Safe 7 na cor verde obsidiana, vista de frente com a tela acesa e de costas com o logotipo de cadeado",
  },
  pros: [
    "Dois chips seguros de fabricantes diferentes (TROPIC01, auditável, e um Optiga com certificação EAL6+) mais um microcontrolador STM32U5",
    "Bluetooth e app Trezor Suite para iOS, Android, Windows, macOS e Linux, o que resolve a principal limitação das Trezor anteriores no iPhone",
    "Tela colorida sensível ao toque de 2,5 polegadas (520 x 380 pixels) com Gorilla Glass 3 e resposta tátil",
    "Corpo de alumínio anodizado com proteção IP54 contra poeira e respingos e bateria LiFePO4 com carregamento sem fio Qi2",
    "Firmware de código aberto e PIN de até 50 dígitos, além de backup de 12, 20 ou 24 palavras com opção multi-share",
  ],
  cons: [
    "É o modelo mais caro da Trezor, várias vezes o preço de uma carteira de entrada",
    "Maior e mais pesado que as irmãs menores: 75,4 x 44,5 x 8,3 mm e 45 g",
    "Bateria e Bluetooth acrescentam peças que uma carteira só com cabo não tem, e exigem cuidado com recarga ao longo dos anos",
    "Lançamento recente, com menos histórico de uso e de opiniões independentes que os modelos mais antigos",
  ],
  featured: true,
  sortOrder: 3,
  date: "2026-10-22",
  relatedArticles: [
    "melhores-carteiras-de-hardware-para-bitcoin",
    "carteira-de-bitcoin-qual-escolher",
    "autocustodia-not-your-keys-not-your-coins",
    "seed-phrase-como-guardar-as-palavras-de-recuperacao",
  ],
  review: {
    title: "Trezor Safe 7: a Trezor sem fio, com tela grande e dois chips seguros",
    summary:
      "A Safe 7 é a primeira Trezor pensada para quem usa o celular como centro de tudo: tem Bluetooth, bateria, tela grande sensível ao toque e funciona no iPhone. Por dentro, soma dois chips seguros a um firmware aberto. O preço alto é o principal obstáculo.",
    score: 8.5,
    criteria: [
      { label: "Segurança do hardware", score: 9.5 },
      { label: "Facilidade de uso", score: 9.5 },
      { label: "Moedas e apps suportados", score: 8.0 },
      { label: "Transparência do código", score: 9.5 },
      { label: "Custo-benefício", score: 6.0 },
    ],
    idealFor:
      "Quem guarda um valor alto em bitcoin, usa iPhone ou Android no dia a dia e quer o máximo de conforto de uso sem abrir mão do código aberto.",
    keyPoints: [
      "É a primeira Trezor com Bluetooth e app completo no iPhone, além de bateria com carregamento sem fio.",
      "Combina dois chips seguros de fabricantes diferentes, um deles auditável, com firmware aberto e PIN de até 50 dígitos.",
      "A tela de 2,5 polegadas facilita conferir endereços, mas o preço é bem mais alto que o de uma carteira de entrada.",
    ],
    sections: [
      {
        title: "O que muda em relação às outras Trezor",
        paragraphs: [
          "A Safe 3 e a Safe 5 funcionam só ligadas no cabo, e no iPhone o app da Trezor fica limitado. A Safe 7 muda isso com Bluetooth e uma bateria LiFePO4 de 330 mAh, que pode ser recarregada pelo cabo USB-C ou por um carregador sem fio compatível com Qi2. Segundo a fabricante, o Trezor Suite roda no macOS, no Windows, no Linux, no Android e também no iOS.",
          "A tela também cresceu: são 2,5 polegadas coloridas, com 520 x 380 pixels, vidro Gorilla Glass 3 e um pequeno motor que vibra ao tocar. O corpo é uma peça única de alumínio anodizado com traseira de vidro temperado, e a proteção IP54 resiste a poeira e respingos, o que ajuda para quem leva a carteira na mochila.",
        ],
        cta: true,
      },
      {
        title: "Segurança: dois chips e firmware aberto",
        paragraphs: [
          "A Trezor descreve uma arquitetura com três peças de fabricantes diferentes: o TROPIC01, um chip seguro cujo projeto pode ser auditado, um chip seguro Optiga com certificação EAL6+ sem acordo de confidencialidade e um microcontrolador STM32U5. A ideia é que uma falha num componente não entregue sozinha o segredo da carteira.",
          "A fabricante também diz que usa criptografia pós-quântica, com o esquema de assinatura SLH-DSA-128, para proteger atualizações de firmware, autenticação do aparelho e inicialização. Isso protege o próprio aparelho, não muda as regras do Bitcoin. O PIN aceita até 50 dígitos, e o backup segue o padrão da marca, com 12, 20 ou 24 palavras e a opção de dividir a recuperação no formato multi-share.",
        ],
      },
      {
        title: "Uso no dia a dia",
        paragraphs: [
          "Com o celular pareado, a rotina fica parecida com a de um app de banco: você monta a transação no Trezor Suite e confirma tocando na tela da carteira, depois de conferir o endereço em letras grandes. A tela maior também ajuda na hora de anotar a seed e de digitar uma passphrase, que na Trezor é sempre feita no próprio aparelho.",
          "A Safe 7 também conversa com carteiras de terceiros e, pela página oficial, com mais de 30 apps parceiros. Para quem guarda só bitcoin, programas como o Sparrow continuam sendo uma boa opção no computador. Quem preferir pode desligar o Bluetooth e usar só o cabo USB-C que vem na caixa.",
        ],
      },
      {
        title: "Compra segura: vendedor oficial e seed gerada por você",
        paragraphs: [
          "Por ser um aparelho caro e novo, a Safe 7 é alvo natural de anúncios suspeitos. Compre da Trezor ou de revenda autorizada e confira quem vende na página da loja. Na Amazon Brasil, o anúncio aparece vendido pela Amazon Global, a área de importados da própria Amazon.",
          "Na primeira vez que ligar, deixe o Trezor Suite verificar a autenticidade do aparelho e gere a seed você mesmo. Se a caixa trouxer palavras já anotadas ou o aparelho chegar configurado, não use: quem montou esse kit tem uma cópia das suas chaves. Nenhum suporte legítimo pede a seed, nem por e-mail, nem por telefone.",
        ],
        cta: true,
      },
      {
        title: "Vale pagar mais?",
        paragraphs: [
          "Em segurança pura, uma Safe 3 bem configurada e com a seed guardada em metal já protege muito bem a maioria das pessoas. O que a Safe 7 compra é conforto: tela grande, Bluetooth, uso completo no iPhone e acabamento mais resistente.",
          "Se você movimenta a carteira com frequência pelo celular ou guarda um valor que justifica o gasto, a diferença faz sentido. Se o plano é comprar e guardar por anos, mexendo pouco, o dinheiro rende mais numa carteira de entrada somada a um bom backup de metal.",
        ],
      },
    ],
    priceText:
      "Por ser um lançamento importado, o preço varia muito entre a compra direta no site da Trezor, que vem do exterior e pode ter frete e tributos de importação, e os anúncios de importados nas lojas brasileiras. Na data da pesquisa não encontramos o mesmo modelo em duas lojas para montar uma faixa confiável.",
    specs: [
      "Chips: TROPIC01 (auditável), Optiga com certificação EAL6+ e microcontrolador STM32U5 (Cortex-M33, 160 MHz)",
      "Tela: colorida sensível ao toque de 2,5 polegadas, 520 x 380 pixels, Gorilla Glass 3, resposta tátil",
      "Conexão: Bluetooth e USB-C (cabo USB-C para USB-C incluso)",
      "Bateria: LiFePO4 de 330 mAh, carregamento sem fio Qi2",
      "Corpo: alumínio anodizado, traseira de vidro temperado, proteção IP54",
      "Compatibilidade: Trezor Suite para macOS, Windows, Linux, Android e iOS",
      "Backup: 12, 20 ou 24 palavras, com opção multi-share",
      "Dimensões e peso: 75,4 x 44,5 x 8,3 mm, 45 g",
      "Na caixa: aparelho, cabo, 2 cartões de backup, guia rápido, guia de segurança e adesivos",
    ],
    othersSay: [
      "Nas avaliações publicadas no site da Trezor, os elogios mais repetidos são a facilidade de uso e o acabamento, com compradores dizendo que o aparelho passa sensação de solidez.",
      "Quem já tinha outra Trezor costuma citar o Bluetooth e o uso no iPhone como o motivo principal da troca.",
      "Por ser um lançamento recente, ainda há poucas opiniões independentes publicadas, e as notas baixas no site da fabricante aparecem sem texto, então ainda não dá para apontar um padrão de reclamação além do preço alto.",
    ],
    howWeEvaluated:
      "Esta análise usou a ficha técnica e a página oficial da Trezor, o anúncio na Amazon Brasil e as avaliações de compradores publicadas fora da Amazon. Não houve teste físico do aparelho. As notas comparam a Safe 7 com outras carteiras de hardware vendidas no país, com peso maior para segurança e custo-benefício.",
    opinion:
      "A Safe 7 é a Trezor mais confortável de usar e a única da marca que funciona de verdade no iPhone. Para quem guarda bastante e usa o celular para tudo, é uma escolha sólida. Para quem está começando, a Safe 3 entrega a mesma filosofia de código aberto por bem menos, e a diferença paga um bom backup de metal.",
    faq: [
      {
        question: "A Trezor Safe 7 funciona no iPhone?",
        answer:
          "Sim. A Safe 7 tem Bluetooth e, segundo a Trezor, o app Trezor Suite roda no iOS e no Android, além do computador. É a principal diferença para a Safe 3 e a Safe 5, que no iPhone ficam limitadas e dependem do cabo e de um computador ou Android.",
      },
      {
        question: "Bluetooth numa carteira de hardware é seguro?",
        answer:
          "O Bluetooth só transporta a transação para ser assinada e a resposta assinada. A chave privada continua dentro dos chips seguros e cada envio precisa ser confirmado na tela do aparelho. Quem prefere reduzir a superfície de ataque pode usar a carteira só pelo cabo USB-C.",
      },
      {
        question: "O que significa ser pronta para computação quântica?",
        answer:
          "A Trezor diz que usa assinaturas pós-quânticas (SLH-DSA-128) para proteger atualizações de firmware, autenticação e inicialização do aparelho. Isso protege a própria carteira contra falsificação de software. As assinaturas das transações de bitcoin seguem as regras da rede, que não mudam por causa do aparelho.",
      },
      {
        question: "A bateria da Safe 7 pode estragar se eu deixar a carteira guardada?",
        answer:
          "A bateria é do tipo LiFePO4, que a Trezor diz aguentar mais ciclos de carga que as de lítio comuns, e a carteira também funciona pelo cabo. Mesmo que a bateria falhe com os anos, as moedas não se perdem: basta restaurar a seed em outro aparelho.",
      },
    ],
  },
};

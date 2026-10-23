import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "carteira-de-bitcoin-qual-escolher",
  title: "Carteira de Bitcoin: qual escolher e como guardar com segurança",
  seoTitle: "Carteira de Bitcoin: qual escolher e como guardar",
  excerpt:
    "Descubra qual carteira de Bitcoin escolher: quente ou fria, na corretora ou com autocustódia, app ou hardware wallet, conforme o valor guardado e o seu uso.",
  metaDescription:
    "Compare os tipos de carteira de Bitcoin (corretora, app, computador, hardware e multisig) e veja como escolher pelo valor guardado, pelo uso e pelos riscos.",
  category: "iniciantes",
  date: "2026-10-22",
  readTime: 6,
  imageQuery: "File:Trezor Model T.jpg",
  seed: 12,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Uma carteira de Bitcoin não guarda moedas, guarda as chaves que permitem movê-las, e quem controla essas chaves controla o saldo.",
    "Aplicativo de celular serve bem para valores pequenos e gastos do dia a dia, enquanto a carteira de hardware é o padrão para uma reserva de longo prazo.",
    "Carteira de hardware só deve ser comprada de vendedor oficial ou autorizado, e um aparelho que já chega com palavras de recuperação preenchidas é golpe.",
  ],
  content: `<p>A carteira de Bitcoin certa depende de quanto você guarda e de como usa a moeda. Para valores pequenos e pagamentos do dia a dia, um aplicativo no celular resolve. Para uma reserva de longo prazo, a carteira de hardware, longe da internet, é o padrão mais seguro. Veja qual carteira de Bitcoin escolher em cada caso.</p>
<p>Antes de comparar modelos, vale entender o que uma carteira faz de verdade, quem fica com a chave em cada opção e quais erros fazem gente perder bitcoin todos os anos. Se quiser saber quanto vale o seu saldo agora, use o <a href="/ferramentas/conversor">conversor de Bitcoin para real</a>.</p>

<h2>O que uma carteira de Bitcoin guarda de verdade</h2>
<p>Os bitcoins nunca saem da blockchain. O que a carteira guarda é a <a href="/glossario#chave-privada">chave privada</a>, o segredo que assina as transações e prova que o saldo é seu. Dela saem os endereços que você mostra para receber, como uma chave Pix pública. Quem tem a chave privada consegue mover as moedas, de qualquer lugar do mundo.</p>
<p>Quase toda carteira moderna gera essa chave a partir de 12 ou 24 palavras, a seed phrase. Com elas você recupera tudo num aparelho novo se o celular quebrar ou for roubado. Por isso as palavras valem tanto quanto o próprio saldo, e o guia de <a href="/artigos/seed-phrase-como-guardar-as-palavras-de-recuperacao">como guardar a seed phrase</a> deveria ser lido antes de qualquer depósito alto.</p>

<h2>Custodial ou autocustódia: quem fica com a chave</h2>
<p>Quando o bitcoin fica no saldo da corretora, quem guarda a chave é ela. Você tem um crédito contra a empresa, como num banco. É prático, mas depende da saúde e da honestidade de quem guarda: em 2014, a Mt. Gox, então a maior exchange do mundo, anunciou o sumiço de cerca de 850 mil bitcoins de clientes e da própria empresa, história contada em <a href="/artigos/mt-gox-o-colapso-da-maior-exchange-de-bitcoin">o colapso da Mt. Gox</a>.</p>
<p>Na autocustódia, a chave fica com você, num aplicativo, num programa ou num aparelho próprio. Ela continua permitida no Brasil: a <a href="https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolu%C3%A7%C3%A3o%20BCB&amp;numero=520" rel="noopener noreferrer">Resolução BCB 520</a> (artigo 57) obriga a corretora a explicar os riscos e as medidas de segurança quando o cliente escolhe esse caminho. Desde 1º de outubro de 2026, a <a href="https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolu%C3%A7%C3%A3o%20BCB&amp;numero=591" rel="noopener noreferrer">Resolução BCB 591</a>, que revogou a Resolução BCB 588 e manteve o mesmo valor, manda as instituições comunicarem ao Coaf transferências de ou para carteiras autocustodiadas a partir do equivalente a US$ 10 mil. As operações feitas até 31 de dezembro de 2026 serão comunicadas no primeiro dia útil de janeiro de 2027. É uma comunicação, não uma proibição.</p>
<p>Os prós e contras de cada lado, e como fazer a transição sem susto, estão no guia de <a href="/artigos/autocustodia-not-your-keys-not-your-coins">autocustódia</a>.</p>

<h2>Carteira quente ou fria: conectada ou longe da internet</h2>
<p>A segunda divisão é a conexão. A própria Resolução BCB 520 define <a href="/glossario#carteira-quente">carteira quente</a> como a que fica constantemente conectada à internet e <a href="/glossario#carteira-fria">carteira fria</a> como a que não fica. Entre as duas existe a carteira morna, conectada mas com camadas extras de segurança. A norma usa essas três categorias para exigir que as corretoras expliquem como distribuem os ativos dos clientes entre elas.</p>
<p>Para o usuário comum, a regra é simples. Carteira quente é a do bolso: rápida, prática e exposta a vírus, roubo do celular e golpe. Carteira fria é o cofre: dá mais trabalho para usar, mas a chave não fica num aparelho que navega na internet, instala aplicativos e abre links.</p>

<h2>Os tipos de carteira lado a lado</h2>
<p>O seletor oficial do <a href="https://bitcoin.org/pt_BR/escolha-sua-carteira" rel="noopener noreferrer">bitcoin.org</a> separa as carteiras em celular, computador e hardware, e alerta que aparelho perdido ou danificado sem cópia de segurança pode significar perda de fundos. Os exemplos da tabela vêm dessa lista e das marcas de hardware mais conhecidas.</p>
<table>
<thead><tr><th>Tipo</th><th>Quem guarda a chave</th><th>Conexão</th><th>Exemplos</th><th>Melhor para</th></tr></thead>
<tbody>
<tr><td>Saldo na corretora</td><td>A corretora</td><td>Ela decide (quente, morna ou fria)</td><td>Conta numa exchange</td><td>Quem compra e vende com frequência</td></tr>
<tr><td>App no celular</td><td>Você</td><td>Quente</td><td>BlueWallet, Phoenix, Green</td><td>Valores pequenos e pagamentos</td></tr>
<tr><td>Programa no computador</td><td>Você</td><td>Quente enquanto o computador está ligado</td><td>Electrum, Sparrow, Bitcoin Core</td><td>Quem quer mais controle e recursos</td></tr>
<tr><td>Carteira de hardware</td><td>Você, dentro do aparelho</td><td>Fria: assina sem expor a chave</td><td>Trezor, Ledger, BitBox02, Jade</td><td>Reserva de longo prazo</td></tr>
<tr><td>Multisig</td><td>Você, dividida em várias chaves</td><td>Fria, se cada chave estiver num aparelho</td><td>Sparrow com duas ou três carteiras de hardware</td><td>Patrimônio alto e planejamento de herança</td></tr>
</tbody>
</table>
<p>A <a href="/glossario#multisig">multisig</a> exige mais de uma chave para movimentar o saldo, por exemplo duas de três. Se uma chave for roubada ou perdida, o dinheiro continua protegido pelas outras, mas a configuração pede mais estudo e mais backups.</p>

<h2>Como escolher pelo valor guardado e pelo uso</h2>
<p>Não existe valor mágico em reais que separa uma opção da outra. Uma pergunta ajuda mais: se esse saldo sumisse amanhã, faria falta de verdade? Se a resposta é sim, ele já merece mais proteção do que um aplicativo no celular.</p>
<ol>
<li><strong>Está aprendendo, com pouco dinheiro:</strong> um app de autocustódia no celular, para treinar receber, enviar e anotar a seed, ou o próprio saldo numa corretora que pediu autorização ao Banco Central enquanto você aprende.</li>
<li><strong>Quer gastar e mandar valores pequenos:</strong> um app com suporte à <a href="/artigos/lightning-network-o-que-e-e-como-usar">Lightning Network</a>, que faz pagamentos em segundos e com taxa baixa.</li>
<li><strong>Está montando uma reserva para anos:</strong> carteira de hardware, com a seed anotada no papel ou gravada em metal e guardada longe do aparelho.</li>
<li><strong>Guarda um valor que mudaria a vida da família:</strong> multisig ou carteira de hardware com passphrase, mais um plano de sucessão que alguém de confiança saiba seguir.</li>
</ol>
<p>Muita gente combina as opções: deixa na corretora só o que vai negociar, usa um app como carteira do bolso e manda a reserva para a carteira fria. Para comprar a primeira fração antes de tudo isso, o caminho está em <a href="/artigos/como-comprar-bitcoin-no-brasil-passo-a-passo">como comprar Bitcoin no Brasil</a>.</p>

<h2>Cuidados ao comprar e configurar a carteira</h2>
<p>A maioria das perdas acontece na configuração ou no golpe, não na tecnologia. Antes de transferir qualquer valor, passe por esta lista:</p>
<ul class="checklist">
<li>Compre a carteira de hardware só de vendedor oficial ou autorizado pelo fabricante.</li>
<li>Baixe aplicativos pelo site oficial do projeto e desconfie de clones na loja do celular.</li>
<li>Gere a seed você mesmo, no próprio aparelho, e anote à mão.</li>
<li>Nunca digite as palavras em site, formulário ou conversa, nem tire foto delas.</li>
<li>Faça um envio de teste pequeno e confira a <a href="/glossario#taxa-de-rede">taxa de rede</a> antes de mandar o restante.</li>
<li>Teste a recuperação com a seed antes de guardar um valor alto.</li>
</ul>
<div class="callout-box callout-bad"><span class="callout-label">Nunca faça</span><p>Não use carteira de hardware que chegou com palavras de recuperação já preenchidas, cartão com a seed impressa ou lacre violado. Quem montou o aparelho tem uma cópia das palavras e pode levar tudo assim que você depositar.</p></div>
<p>Outro golpe comum é o falso suporte, que aparece em redes sociais oferecendo ajuda e pede a seed para "sincronizar" a carteira. Nenhum fabricante ou corretora pede essas palavras. Os roteiros mais usados no Brasil estão no guia de <a href="/artigos/golpes-com-criptomoedas-como-se-proteger">golpes com criptomoedas</a>.</p>

<h2>Por onde começar</h2>
<p>Se a sua reserva já passou do ponto em que um celular roubado tiraria seu sono, o próximo passo é comparar modelos de carteira fria. O guia das <a href="/artigos/melhores-carteiras-de-hardware-para-bitcoin">melhores carteiras de hardware para Bitcoin</a> compara os modelos de carteira fria, e a <a href="/loja">Loja do Bitcoin</a> reúne carteiras e placas de metal para a seed, cada uma com review própria.</p>
<p>Se você ainda deixa tudo na corretora, confira também se ela está em dia com o Banco Central, usando os critérios do guia de <a href="/artigos/exchange-de-criptomoedas-como-escolher-uma-corretora">como escolher uma exchange</a>. Escolher bem onde guardar pesa tanto quanto escolher bem onde comprar.</p>`,
  faq: [
    {
      question: "Qual a carteira de Bitcoin mais segura?",
      answer:
        "Para guardar uma reserva de longo prazo, a carteira de hardware costuma ser a opção mais segura, porque a chave privada fica dentro do aparelho e não é exposta ao computador ou ao celular. A segurança, porém, depende também de como você guarda a seed phrase. Uma carteira de hardware com as palavras fotografadas no celular é tão vulnerável quanto um aplicativo comum.",
    },
    {
      question: "Qual a diferença entre carteira quente e carteira fria?",
      answer:
        "Carteira quente é a que fica conectada à internet, como um aplicativo de celular ou o saldo na corretora. Ela é prática para pagamentos, mas mais exposta a vírus e golpes. Carteira fria é a que mantém a chave privada longe da internet, como uma carteira de hardware. É mais trabalhosa no dia a dia e mais indicada para guardar valores maiores.",
    },
    {
      question: "Posso deixar meu bitcoin na corretora?",
      answer:
        "Pode, e muita gente deixa enquanto está aprendendo ou quando negocia com frequência. O risco é depender da empresa, que pode travar saques, ser invadida ou quebrar. Se for deixar, escolha uma corretora que tenha pedido autorização ao Banco Central, ative a verificação em duas etapas e considere levar a reserva de longo prazo para uma carteira própria.",
    },
    {
      question: "O que acontece se eu perder a carteira de hardware?",
      answer:
        "Os bitcoins não estão no aparelho, estão na blockchain. Se você perder, quebrar ou tiver a carteira de hardware roubada, basta usar a seed phrase num aparelho novo para recuperar o acesso ao saldo. Por isso as 12 ou 24 palavras precisam estar anotadas e guardadas em local seguro, separado do aparelho. Sem a seed, a perda pode ser definitiva.",
    },
    {
      question: "Preciso de uma carteira diferente para cada criptomoeda?",
      answer:
        "Depende da carteira. Muitas carteiras de hardware e alguns aplicativos aceitam várias moedas com a mesma seed, enquanto outras carteiras são feitas só para Bitcoin. Antes de enviar qualquer moeda, confira se a carteira suporta aquela rede específica. Mandar uma criptomoeda para um endereço de outra rede pode fazer o valor ficar inacessível.",
    },
  ],
  quiz: [
    {
      question: "O que uma carteira de Bitcoin guarda de fato?",
      options: ["As moedas em si", "As chaves que permitem mover o saldo", "Uma cópia da blockchain inteira, sempre"],
      answer: 1,
      explanation: "Os bitcoins ficam registrados na blockchain. A carteira guarda a chave privada, que assina as transações.",
    },
    {
      question: "Uma carteira de hardware chegou com as 24 palavras impressas num cartão. O que fazer?",
      options: ["Usar normalmente, é praticidade do fabricante", "Não usar e devolver: é sinal de golpe", "Trocar só o PIN e seguir"],
      answer: 1,
      explanation: "A seed deve ser gerada por você, no próprio aparelho. Quem já conhece as palavras pode levar o saldo depois do depósito.",
    },
  ],
};

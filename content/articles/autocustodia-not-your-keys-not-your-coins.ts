import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "autocustodia-not-your-keys-not-your-coins",
  title: "Autocustódia: o que significa not your keys, not your coins",
  seoTitle: "Autocustódia: not your keys, not your coins",
  excerpt:
    "Autocustódia explicada: a origem de not your keys, not your coins, os prós e contras de guardar as próprias chaves, como sair da corretora e o que é multisig.",
  metaDescription:
    "Not your keys, not your coins: entenda a autocustódia, o risco de deixar bitcoin na corretora, como fazer a transição com segurança e quando usar multisig.",
  category: "seguranca",
  date: "2026-10-22",
  readTime: 7,
  imageQuery: "hardware wallet usb device",
  seed: 17,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Autocustódia é guardar as próprias chaves privadas: a corretora deixa de ser um risco, mas qualquer erro passa a ser só seu.",
    "Mt. Gox em 2014 e FTX em 2022 mostraram o que acontece com quem deixa as moedas com uma empresa que quebra ou desvia recursos.",
    "A transição segura começa com valor pequeno, seed anotada e restauração testada, e multisig é uma opção para valores altos e herança.",
  ],
  content: `<p>Not your keys, not your coins quer dizer que, se a chave privada não está com você, os bitcoins também não estão. Autocustódia é guardar as próprias chaves, sem corretora no meio. Ela elimina o risco de a empresa quebrar ou travar saques, mas passa para você toda a responsabilidade pela segurança.</p>
<p>Neste guia você vai ver de onde vem a frase, o que muda quando a chave é sua, os casos de corretoras que levaram o dinheiro dos clientes junto, os riscos que a <a href="/glossario#autocustodia">autocustódia</a> traz, um passo a passo para fazer a transição com segurança, o básico de multisig e quando deixar na corretora ainda faz sentido.</p>

<h2>De onde vem a frase not your keys, not your coins</h2>
<p>No Bitcoin, quem controla a <a href="/glossario#chave-privada">chave privada</a> controla as moedas. Quando você compra numa corretora, o saldo que aparece no aplicativo é uma promessa da empresa: as chaves são dela, e o seu bitcoin é, na prática, um crédito contra ela. A frase em inglês, algo como "se a chave não é sua, as moedas não são suas", resume esse ponto.</p>
<p>Não há registro definitivo de quem a disse primeiro. Ela virou lema da comunidade ao longo da década de 2010, repetida a cada corretora que quebrava levando o saldo dos clientes. A ideia ganhou até uma data: o <a href="https://www.ledger.com/academy/crypto/proof-of-keys-the-perfect-time-to-securely-own-your-keys" rel="noopener noreferrer">Proof of Keys</a>, lançado por Trace Mayer, convida todo 3 de janeiro, aniversário do <a href="/artigos/bloco-genese-a-mensagem-escondida-no-primeiro-bloco">bloco gênese</a>, a sacar tudo das corretoras no mesmo dia.</p>

<h2>Corretora ou autocustódia: o que muda quando a chave é sua</h2>
<p>Na <a href="/glossario#custodia">custódia</a>, a corretora guarda as chaves, cuida da segurança e ajuda se você esquecer a senha. Na autocustódia, você guarda as chaves numa carteira própria, de celular ou de hardware, e nenhuma empresa pode congelar as moedas que estão nela. Nenhum dos dois modelos elimina o risco: ele só muda de lugar.</p>
<table>
<thead><tr><th>Ponto</th><th>Na corretora (custódia)</th><th>Autocustódia</th></tr></thead>
<tbody>
<tr><td>Quem controla a chave</td><td>A empresa</td><td>Você</td></tr>
<tr><td>Se a empresa quebrar ou travar saques</td><td>O saldo pode ficar preso</td><td>As moedas continuam com você</td></tr>
<tr><td>Se você esquecer a senha</td><td>Recupera pelo suporte</td><td>Só recupera com a seed phrase</td></tr>
<tr><td>Ameaça mais comum</td><td>Invasão de conta e phishing</td><td>Perda ou roubo da seed phrase</td></tr>
<tr><td>Para vender</td><td>Venda imediata no aplicativo</td><td>Precisa enviar à corretora antes</td></tr>
</tbody>
</table>
<p>Para quem compra e vende com frequência, a corretora é mais prática. Para quem guarda por anos, a autocustódia tira do caminho um risco que já custou caro a muita gente na história do Bitcoin: o da empresa que some com o dinheiro dos clientes.</p>

<h2>Quando a corretora falha: as lições de Mt. Gox e FTX</h2>
<p>Em fevereiro de 2014, a japonesa Mt. Gox, então uma das maiores corretoras de bitcoin do mundo, pediu recuperação judicial em Tóquio. No <a href="https://www.mtgox.com/img/pdf/20140228-announcement_eng.pdf" rel="noopener noreferrer">comunicado de 28 de fevereiro de 2014</a>, a empresa informou o sumiço de cerca de 750 mil bitcoins de clientes e de cerca de 100 mil próprios; semanas depois, encontrou cerca de 200 mil numa carteira antiga. A história completa está em <a href="/artigos/mt-gox-o-colapso-da-maior-exchange-de-bitcoin">o colapso da Mt. Gox</a>.</p>
<p>Os credores esperaram uma década: os reembolsos em bitcoin só começaram em 2024. Em 16 de outubro de 2026, o <a href="https://www.mtgox.com/img/pdf/20261016_b3a13e0f-55f6-4653-913b-be80762390e8_announcement_en.pdf" rel="noopener noreferrer">administrador do processo adiou mais uma vez o prazo final</a> dos pagamentos, agora para 31 de outubro de 2027, porque muitos credores ainda não tinham concluído os procedimentos para receber.</p>
<p>Em novembro de 2022 foi a vez da FTX. A <a href="https://www.sec.gov/news/press-release/2022-219" rel="noopener noreferrer">SEC acusou o fundador, Sam Bankman-Fried</a>, de desviar às escondidas dinheiro dos clientes para a Alameda Research, um fundo dele. Quem tinha os bitcoins em carteira própria assistiu de longe, e quem deixou na corretora entrou na fila. Os critérios para avaliar uma empresa antes de depositar estão em <a href="/artigos/exchange-de-criptomoedas-como-escolher-uma-corretora">como escolher uma exchange</a>.</p>

<h2>Os riscos da autocustódia que pouca gente conta</h2>
<p>Autocustódia não é cofre mágico. Sem suporte, um erro seu é definitivo: perder a seed phrase, mandar para o endereço errado ou instalar um aplicativo falso de carteira custa o saldo inteiro, sem estorno.</p>
<ul>
<li><strong>Perda do backup.</strong> Seed perdida e aparelho quebrado significam moedas inacessíveis para sempre.</li>
<li><strong>Roubo físico.</strong> Quem encontra as palavras anotadas leva tudo, por isso discrição sobre quanto você tem também é segurança.</li>
<li><strong>Engenharia social.</strong> Falso suporte, site clonado e aparelho com seed pré-preenchida miram justamente quem guarda por conta própria (veja <a href="/artigos/golpes-com-criptomoedas-como-se-proteger">golpes com criptomoedas</a>).</li>
<li><strong>Herança.</strong> Se ninguém da família souber que os bitcoins existem e como acessá-los, eles se perdem junto com você.</li>
</ul>
<p>Todos esses riscos têm solução conhecida, e quase todas passam pela seed phrase. Antes de tirar qualquer valor relevante da corretora, leia <a href="/artigos/seed-phrase-como-guardar-as-palavras-de-recuperacao">como guardar a seed phrase</a>.</p>

<h2>Como fazer a transição com segurança, passo a passo</h2>
<p>A mudança não precisa acontecer num dia. O jeito mais seguro é começar pequeno, testar tudo e só depois mover o restante.</p>
<ol>
<li>Escolha a carteira pelo valor e pelo uso: aplicativo de celular para quantias pequenas, carteira de hardware para valores maiores (compare em <a href="/artigos/carteira-de-bitcoin-qual-escolher">qual carteira de Bitcoin escolher</a>).</li>
<li>Compre carteira de hardware só do fabricante ou de revenda autorizada e recuse qualquer aparelho que venha com seed já preenchida. Os modelos analisados estão em <a href="/artigos/melhores-carteiras-de-hardware-para-bitcoin">melhores carteiras de hardware</a>.</li>
<li>Gere a seed no próprio aparelho, anote à mão e confira palavra por palavra.</li>
<li>Faça um saque de teste com valor pequeno, confirme a chegada e restaure a carteira usando só as palavras anotadas.</li>
<li>Transfira o restante conferindo o endereço na tela do aparelho, não só na tela do computador.</li>
<li>Guarde os comprovantes de compra e de transferência, que ajudam a provar o custo de aquisição (veja <a href="/artigos/como-declarar-bitcoin-no-imposto-de-renda">como declarar bitcoin no Imposto de Renda</a>).</li>
</ol>
<p>Num exemplo hipotético, quem tem o equivalente a R$ 3.000 em bitcoin numa corretora pode sacar primeiro R$ 50, fazer o teste de restauração e só então enviar o resto. A taxa do saque de teste é o preço de descobrir um erro enquanto ele ainda custa pouco.</p>
<div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Confira sempre o endereço de destino na tela da carteira de hardware. Há programas maliciosos que trocam o endereço copiado no computador pelo de um golpista.</p></div>

<h2>Multisig: quando uma chave só não basta</h2>
<p>Numa carteira <a href="/glossario#multisig">multisig</a>, gastar exige mais de uma assinatura. O arranjo mais comum é o 2 de 3: existem três chaves, guardadas em lugares diferentes, e quaisquer duas autorizam o envio. Perder uma não trava nada, e um ladrão que encontre uma só não consegue mover as moedas.</p>
<p>O custo é a complexidade. Além das seeds, é preciso guardar a configuração da carteira, com as chaves públicas de todos os participantes, muitas vezes reunidas num arquivo chamado descritor; sem ela, ter duas das três seeds pode não bastar para restaurar. Por isso, multisig faz mais sentido para valores altos e planos de herança, de preferência com ajuda de alguém experiente na primeira montagem.</p>

<h2>Quando deixar na corretora pode fazer sentido</h2>
<p>Autocustódia não é obrigação. Para quantias pequenas, para quem negocia com frequência ou para quem ainda está aprendendo e teme perder a seed, deixar parte na corretora pode ser a escolha mais segura naquele momento. Outra via é o <a href="/artigos/etf-de-bitcoin-o-que-e-e-como-funciona-no-brasil">ETF de bitcoin</a>, em que a guarda fica com o gestor do fundo.</p>
<p>No Brasil, a regulação também mudou o cenário. A Resolução BCB nº 520, em vigor desde 2 de fevereiro de 2026, obriga as prestadoras de serviços de ativos virtuais a manter os ativos dos clientes em carteiras separadas das usadas pela própria empresa e, durante o processo de autorização, exige das que já operavam o envio mensal ao Banco Central de provas de reservas. A mesma norma manda a empresa explicar as medidas de segurança e os riscos quando o cliente opta pela autocustódia.</p>
<p>Regra não é garantia, e cripto não tem FGC. Se for deixar na corretora, prefira uma que atue dentro das regras do Banco Central (o que mudou está em <a href="/artigos/regulacao-das-criptomoedas-no-brasil-banco-central">regulação das criptomoedas no Brasil</a>) e não deixe lá mais do que aceitaria ver preso por meses.</p>

<h2>Suas chaves, sua responsabilidade</h2>
<p>Not your keys, not your coins é menos um slogan e mais um lembrete de quem responde pelo quê. Na corretora, você depende da empresa; na autocustódia, depende de si mesmo. Muita gente combina os dois: um valor pequeno na corretora para o dia a dia e o restante numa carteira própria bem configurada.</p>
<p>Se decidiu dar o passo, comece pelo equipamento certo: as carteiras de hardware e as placas de metal para a seed analisadas pelo blog estão na <a href="/loja">Loja do Bitcoin</a>, sempre com o lembrete de comprar de vendedor oficial.</p>`,
  faq: [
    {
      question: "O que significa not your keys, not your coins?",
      answer:
        "A frase quer dizer que, se você não controla a chave privada, não controla de fato os bitcoins. Numa corretora, as chaves ficam com a empresa, e o saldo do aplicativo é uma promessa dela. Se a corretora quebrar, for invadida ou travar saques, você depende dela para recuperar o dinheiro. Na autocustódia, as chaves e a responsabilidade ficam com você.",
    },
    {
      question: "Autocustódia é mais segura do que deixar bitcoin na corretora?",
      answer:
        "Depende de quem guarda. A autocustódia elimina o risco de a empresa quebrar ou desviar recursos, mas troca por riscos seus: perder a seed phrase, cair em golpe ou mandar para endereço errado, sem estorno. Para quem anota a seed com cuidado, testa a restauração e guarda o backup offline, costuma ser a opção mais segura para valores guardados por anos.",
    },
    {
      question: "Como tirar bitcoin da corretora com segurança?",
      answer:
        "Escolha a carteira, de preferência de hardware comprada do fabricante ou de revenda autorizada, gere a seed no aparelho e anote à mão. Faça um saque de teste com valor pequeno, confirme a chegada e restaure a carteira usando só as palavras anotadas. Só depois transfira o restante, conferindo o endereço de destino na tela do aparelho.",
    },
    {
      question: "O que é carteira multisig?",
      answer:
        "Multisig é uma carteira que exige mais de uma assinatura para gastar, como 2 de 3 chaves guardadas em lugares diferentes. Perder uma chave não trava as moedas, e um ladrão que encontre uma só não consegue movê-las. Em troca, a configuração é mais complexa e exige guardar também os dados da carteira, como as chaves públicas de todos os participantes.",
    },
    {
      question: "O que aconteceu com quem tinha bitcoin na Mt. Gox?",
      answer:
        "A Mt. Gox pediu recuperação judicial em fevereiro de 2014 informando o sumiço de cerca de 850 mil bitcoins, somando os de clientes e os da empresa, e depois achou cerca de 200 mil numa carteira antiga. Os reembolsos em bitcoin só começaram em 2024, e em outubro de 2026 o prazo final foi adiado para 31 de outubro de 2027.",
    },
  ],
  quiz: [
    {
      question: "Numa carteira multisig 2 de 3, quantas chaves são necessárias para enviar bitcoin?",
      options: ["Uma", "Duas", "Três"],
      answer: 1,
      explanation: "No arranjo 2 de 3 existem três chaves, e quaisquer duas delas autorizam o envio.",
    },
    {
      question: "Qual é o primeiro passo seguro ao tirar bitcoin da corretora?",
      options: ["Enviar tudo de uma vez", "Fazer um saque de teste com valor pequeno", "Mandar a seed para o suporte conferir"],
      answer: 1,
      explanation: "O saque de teste e a restauração da carteira com as palavras anotadas revelam erros enquanto eles ainda custam pouco.",
    },
  ],
};

import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "o-que-e-bitcoin-e-como-funciona",
  title: "O que é Bitcoin e como funciona: guia completo para iniciantes",
  seoTitle: "O que é Bitcoin e como funciona: guia completo",
  excerpt:
    "Entenda o que é Bitcoin e como funciona: quem criou, blockchain, mineração, limite de 21 milhões, como comprar e guardar no Brasil e os riscos reais.",
  metaDescription:
    "Guia do Bitcoin para iniciantes: o que é, quem criou, como a blockchain e a mineração funcionam, por que só haverá 21 milhões e como comprar com segurança.",
  category: "bitcoin",
  date: "2026-10-22",
  readTime: 9,
  imageQuery: "bitcoin coin wooden table",
  seed: 1,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O Bitcoin é uma moeda digital sem dono, registrada numa blockchain pública que milhares de computadores conferem ao mesmo tempo.",
    "Só vão existir 21 milhões de bitcoins, e a emissão nova cai pela metade a cada 210 mil blocos, num evento chamado halving.",
    "Comprar é simples pelo Pix numa exchange, mas o preço oscila muito e a segurança da carteira passa a ser responsabilidade sua.",
  ],
  content: `<p>Bitcoin é um dinheiro digital que funciona sem banco, sem governo e sem empresa no comando. Entender o que é Bitcoin e como funciona começa por aqui: ele é uma rede de computadores espalhados pelo mundo que registra quem tem quanto num livro-razão público, a blockchain, e ninguém consegue alterar esse registro sozinho.</p>
<p>Neste guia você vai ver quem criou a moeda, como a blockchain e a mineração mantêm tudo de pé, por que só vão existir 21 milhões de unidades, como comprar e guardar no Brasil e quais riscos ninguém deveria ignorar. Se quiser acompanhar o valor enquanto lê, veja a cotação ao vivo em <a href="/bitcoin">preço do Bitcoin hoje</a>.</p>

<h2>O que é Bitcoin, em linguagem simples</h2>
<p>Pense no Bitcoin como um saldo que você controla com uma senha muito longa, chamada <a href="/glossario#chave-privada">chave privada</a>. Quem tem essa chave consegue mover as moedas. Quem não tem, não consegue, nem que seja dono de uma corretora ou presidente de um país. Não existe agência, gerente ou SAC: as regras estão no próprio software, que é aberto e pode ser lido por qualquer pessoa.</p>
<p>A palavra aparece de dois jeitos. Com B maiúsculo, Bitcoin é a rede e o protocolo, o conjunto de regras. Com b minúsculo ou pela sigla BTC, bitcoin é a moeda que circula nessa rede. Cada bitcoin se divide em 100 milhões de partes, os satoshis, então ninguém precisa comprar uma moeda inteira (a conta completa está no guia de <a href="/artigos/satoshis-o-que-sao-sats-e-como-converter">satoshis e como converter</a>).</p>
<p>Na prática, as pessoas usam o Bitcoin para três coisas: guardar valor fora do sistema bancário, mandar dinheiro para qualquer país sem pedir autorização e pagar onde ele é aceito. A primeira é a mais comum hoje e também a que exige mais cuidado, porque o preço oscila muito de um mês para o outro.</p>

<h2>Quem criou o Bitcoin e quando ele surgiu</h2>
<p>O Bitcoin foi apresentado em 31 de outubro de 2008, quando alguém usando o nome Satoshi Nakamoto mandou para uma lista de discussão sobre criptografia o <a href="https://www.metzdowd.com/pipermail/cryptography/2008-October/014810.html" rel="noopener noreferrer">e-mail original que anunciou o projeto</a>. Junto veio um documento de nove páginas, o <a href="https://bitcoin.org/bitcoin.pdf" rel="noopener noreferrer">whitepaper "Bitcoin: A Peer-to-Peer Electronic Cash System"</a>, que descreve um sistema de pagamento direto entre pessoas, sem um intermediário de confiança no meio.</p>
<p>A rede começou a rodar em 3 de janeiro de 2009, com o primeiro bloco, chamado bloco gênese. Ele ainda pode ser consultado no <a href="https://mempool.space/block/0" rel="noopener noreferrer">explorador de blocos mempool.space</a> e carrega uma manchete do jornal britânico The Times sobre o socorro do governo aos bancos. A história completa está em <a href="/artigos/bloco-genese-a-mensagem-escondida-no-primeiro-bloco">a mensagem escondida no primeiro bloco</a>.</p>
<p>Até hoje ninguém provou quem é Satoshi. Ele trocou e-mails com os primeiros colaboradores, se afastou do projeto por volta de 2010 e 2011 e nunca mais apareceu. As teorias e os suspeitos estão no texto sobre <a href="/artigos/quem-e-satoshi-nakamoto">quem é Satoshi Nakamoto</a>. Para o funcionamento da rede, isso pouco importa: o código é aberto e mantido por desenvolvedores independentes no mundo todo.</p>

<h2>Como funciona a blockchain do Bitcoin</h2>
<p>A <a href="/glossario#blockchain">blockchain</a> é um livro-razão público com todas as transações desde 2009. Ela é organizada em blocos, e cada bloco aponta para o anterior com uma espécie de impressão digital matemática, o hash. Se alguém mudar uma vírgula num bloco antigo, o hash muda e a corrente inteira dali para frente deixa de bater, o que denuncia a fraude na hora.</p>
<h3>Chaves, endereços e transações</h3>
<p>Para receber bitcoin, você mostra um endereço, que funciona como uma chave Pix pública. Para gastar, sua carteira assina a transação com a chave privada, e qualquer computador da rede consegue conferir a assinatura sem nunca ver a chave. O whitepaper define uma moeda eletrônica como uma cadeia de assinaturas digitais: cada dono passa a moeda adiante assinando para o próximo.</p>
<h3>Nós e consenso</h3>
<p>Milhares de computadores, os <a href="/glossario#no">nós</a>, guardam uma cópia da blockchain e conferem cada transação contra as regras. Se um nó recebe um bloco que cria moedas do nada ou gasta duas vezes o mesmo saldo, ele simplesmente rejeita. Esse coro de verificadores independentes é o que dispensa o banco: em vez de confiar em alguém, cada participante confere por conta própria.</p>
<p>Um bloco novo sai em média a cada 10 minutos, intervalo usado como referência no próprio whitepaper. Por isso, quem recebe um valor alto costuma esperar algumas confirmações antes de considerar o pagamento garantido. Para pagamentos pequenos e instantâneos existe uma camada extra, a <a href="/artigos/lightning-network-o-que-e-e-como-usar">Lightning Network</a>.</p>

<h2>Mineração: quem fecha os blocos e por que ganha por isso</h2>
<p>Alguém precisa juntar as transações pendentes e fechar o próximo bloco. No Bitcoin, quem faz isso são os mineradores: máquinas especializadas que testam trilhões de palpites por segundo até achar um número que resolve um quebra-cabeça matemático. Esse sistema se chama <a href="/glossario#prova-de-trabalho">prova de trabalho</a>, e o vencedor de cada rodada ganha o direito de publicar o bloco.</p>
<p>Em troca, o minerador recebe moedas novas, criadas naquele bloco, mais as taxas pagas por quem enviou transações. O whitepaper chama isso de incentivo: quem gasta energia para proteger a rede é pago por isso, e tentar fraudar sai mais caro do que jogar limpo. Desde abril de 2024, a recompensa é de 3,125 BTC por bloco.</p>
<p>A rede também recalibra a dificuldade do quebra-cabeça de tempos em tempos, para que o ritmo de blocos continue estável, não importa quantas máquinas entrem ou saiam. Os custos, as máquinas e a conta de luz em reais estão no guia de <a href="/artigos/mineracao-de-bitcoin-como-funciona">mineração de Bitcoin</a>.</p>

<h2>Por que só vão existir 21 milhões de bitcoins</h2>
<p>A regra mais famosa do Bitcoin é o teto: o total nunca passará de 21 milhões de moedas. A emissão nova cai pela metade a cada 210 mil blocos, cerca de quatro anos, num evento chamado <a href="/glossario#halving">halving</a>. Pelo <a href="https://en.bitcoin.it/wiki/Controlled_supply" rel="noopener noreferrer">cronograma de emissão documentado na Bitcoin Wiki</a>, a última fração deve ser minerada por volta de 2140.</p>
<table>
<thead><tr><th>Período</th><th>Blocos</th><th>Recompensa por bloco</th></tr></thead>
<tbody>
<tr><td>2009 a 2012</td><td>0 a 209.999</td><td>50 BTC</td></tr>
<tr><td>2012 a 2016</td><td>210.000 a 419.999</td><td>25 BTC</td></tr>
<tr><td>2016 a 2020</td><td>420.000 a 629.999</td><td>12,5 BTC</td></tr>
<tr><td>2020 a 2024</td><td>630.000 a 839.999</td><td>6,25 BTC</td></tr>
<tr><td>2024 a 2028 (previsto)</td><td>840.000 a 1.049.999</td><td>3,125 BTC</td></tr>
</tbody>
</table>
<p>Fazendo a conta por esse cronograma, cerca de 20,1 milhões de bitcoins já tinham sido emitidos em outubro de 2026, perto de 96% do total. A maior parte já existe, e o que falta vai sair cada vez mais devagar. O próximo corte está previsto para o bloco 1.050.000, e a contagem regressiva fica na nossa <a href="/ferramentas/halving">ferramenta do halving</a>. O histórico de cada corte está no guia sobre <a href="/artigos/halving-do-bitcoin-o-que-e-e-quando-e-o-proximo">o halving do Bitcoin e quando é o próximo</a>.</p>
<p>Escassez programada não garante valorização. Ela só significa que ninguém pode imprimir mais bitcoin para cobrir um rombo, como acontece com moedas de governo. O preço continua dependendo de quanta gente quer comprar e vender a cada dia.</p>

<h2>Como comprar e guardar bitcoin no Brasil</h2>
<p>O caminho mais comum para o brasileiro é uma exchange, a corretora de criptomoedas. Você abre a conta, envia documentos para a verificação de identidade (o KYC), deposita reais por Pix e compra a fração que quiser. O passo a passo detalhado está no guia de <a href="/artigos/como-comprar-bitcoin-no-brasil-passo-a-passo">como comprar Bitcoin no Brasil</a>.</p>
<ol>
<li>Escolha uma corretora que atue legalmente no Brasil, com histórico limpo e suporte em português (veja <a href="/artigos/exchange-de-criptomoedas-como-escolher-uma-corretora">como escolher uma exchange</a>).</li>
<li>Ative a verificação em duas etapas por aplicativo autenticador, não por SMS.</li>
<li>Deposite pouco por Pix e faça uma primeira compra de teste, por exemplo R$ 100.</li>
<li>Decida onde a moeda vai ficar: na própria corretora ou numa carteira sua.</li>
<li>Guarde os comprovantes de compra e venda para a declaração do Imposto de Renda.</li>
</ol>
<p>Deixar na corretora é prático, mas a moeda fica sob a guarda de outra empresa. Tirar para uma carteira própria é a chamada autocustódia: você passa a controlar a chave privada, e a responsabilidade também passa a ser sua. O guia sobre <a href="/artigos/carteira-de-bitcoin-qual-escolher">qual carteira de Bitcoin escolher</a> compara aplicativos de celular e carteiras de hardware.</p>
<div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Antes de mandar um valor alto para a sua carteira, envie uma quantia pequena e confira se ela chegou. A taxa extra é barata perto do prejuízo de um endereço errado.</p></div>
<p>Ao criar uma carteira, ela mostra 12 ou 24 palavras, a seed phrase. Quem tiver essas palavras tem os seus bitcoins. Anote no papel, nunca em foto ou na nuvem, e leia <a href="/artigos/seed-phrase-como-guardar-as-palavras-de-recuperacao">como guardar a seed phrase</a> antes de mandar valores altos.</p>

<h2>Riscos do Bitcoin: o que pode dar errado</h2>
<p>O primeiro risco é o preço. Em dezembro de 2017, o bitcoin chegou perto de US$ 19 mil e, um ano depois, era negociado abaixo de US$ 4 mil. Quem compra precisa estar preparado para ver o saldo em reais encolher pela metade sem entrar em pânico. Nenhum texto deste blog é recomendação de investimento, e o <a href="/aviso-de-risco">aviso de risco</a> deveria ser lido antes de colocar qualquer dinheiro.</p>
<p>O segundo risco é operacional: errar o endereço, perder a seed phrase ou cair em golpe. Transação de bitcoin não tem estorno. Os golpes mais comuns no Brasil, como falso suporte, pirâmide com rendimento garantido e site clonado, estão no guia sobre <a href="/artigos/golpes-com-criptomoedas-como-se-proteger">golpes com criptomoedas</a>.</p>
<ul class="checklist">
<li>Nunca compartilhe a seed phrase, nem com quem diz ser do suporte.</li>
<li>Desconfie de qualquer promessa de rendimento fixo em bitcoin.</li>
<li>Confira o endereço de destino caractere por caractere antes de enviar.</li>
<li>Comece com valores que você aceita perder enquanto aprende.</li>
</ul>
<p>Existe ainda o risco de a corretora quebrar ou travar saques, e o risco regulatório, porque as regras de tributação e de funcionamento das empresas do setor ainda estão mudando no Brasil. Ter a declaração em dia ajuda: o caminho está no guia de <a href="/artigos/como-declarar-bitcoin-no-imposto-de-renda">como declarar Bitcoin no Imposto de Renda</a>.</p>

<h2>Bitcoin vale a pena para você? Por onde continuar</h2>
<p>Não existe resposta única. Para algumas pessoas, faz sentido ter uma parte pequena do patrimônio em bitcoin como aposta de longo prazo. Para outras, a volatilidade não combina com os objetivos, e tudo bem. Quem decide comprar costuma fazer aportes pequenos e regulares em vez de tudo de uma vez, estratégia explicada no guia de <a href="/artigos/dca-em-bitcoin-como-investir-todo-mes">DCA em Bitcoin</a>.</p>
<p>Se quiser ver quanto valem os seus reais em bitcoin agora, use o <a href="/ferramentas/conversor">conversor de Bitcoin para real</a>. E, para entender a origem de tudo, o próximo passo natural é ler a história do <a href="/artigos/whitepaper-do-bitcoin-o-documento-que-criou-a-moeda">whitepaper do Bitcoin</a>, o documento de 2008 que deu início à rede.</p>`,
  faq: [
    {
      question: "O que é Bitcoin e para que serve?",
      answer:
        "Bitcoin é uma moeda digital que funciona sem banco central nem empresa no comando. Ele serve para guardar valor, mandar dinheiro para qualquer lugar do mundo sem intermediário e pagar onde é aceito. As transações ficam registradas numa blockchain pública, conferida por milhares de computadores independentes, e só quem tem a chave privada consegue mover as moedas.",
    },
    {
      question: "Quem criou o Bitcoin?",
      answer:
        "O Bitcoin foi criado por alguém que usava o nome Satoshi Nakamoto. O whitepaper foi divulgado em 31 de outubro de 2008 numa lista de discussão sobre criptografia, e a rede começou em 3 de janeiro de 2009. A identidade real de Satoshi nunca foi comprovada, e ele se afastou do projeto por volta de 2010 e 2011.",
    },
    {
      question: "Preciso comprar um bitcoin inteiro?",
      answer:
        "Não. Cada bitcoin se divide em 100 milhões de satoshis, então dá para comprar frações pequenas, do tamanho do seu orçamento. Nas corretoras brasileiras é comum começar com algumas dezenas de reais pagos por Pix. O saldo aparece como uma fração, por exemplo 0,0002 BTC, e vale o mesmo que a parte equivalente de uma moeda inteira.",
    },
    {
      question: "Quantos bitcoins existem e quantos ainda faltam?",
      answer:
        "O limite é de 21 milhões de bitcoins. Pelo cronograma de emissão, cerca de 20,1 milhões já tinham sido criados em outubro de 2026, perto de 96% do total. O restante sai cada vez mais devagar, porque a recompensa dos mineradores cai pela metade a cada halving, e a última fração deve ser minerada por volta de 2140.",
    },
    {
      question: "Bitcoin é seguro?",
      answer:
        "A rede do Bitcoin nunca teve o registro principal fraudado, mas isso não protege o usuário de erros próprios. Os riscos reais são a volatilidade do preço, golpes, perda da seed phrase, envio para endereço errado e falência de corretoras. Usar verificação em duas etapas, guardar as palavras de recuperação offline e começar com valores pequenos reduz bastante o perigo.",
    },
  ],
  quiz: [
    {
      question: "Qual é o limite máximo de bitcoins que vão existir?",
      options: ["10 milhões", "21 milhões", "Não existe limite"],
      answer: 1,
      explanation: "O protocolo do Bitcoin limita a emissão total a 21 milhões de moedas, liberadas cada vez mais devagar a cada halving.",
    },
    {
      question: "O que acontece se você perder a seed phrase e o celular com a carteira?",
      options: ["O suporte da rede recupera o saldo", "O banco central estorna", "O acesso às moedas pode ser perdido para sempre"],
      answer: 2,
      explanation: "No Bitcoin não há suporte central. Sem a chave privada ou a seed phrase, ninguém consegue mover as moedas, nem você.",
    },
    {
      question: "Quem fecha os blocos e recebe moedas novas por isso?",
      options: ["Os mineradores", "As corretoras", "O Banco Central"],
      answer: 0,
      explanation: "Os mineradores competem pela prova de trabalho e o vencedor de cada bloco recebe a recompensa mais as taxas das transações.",
    },
  ],
};

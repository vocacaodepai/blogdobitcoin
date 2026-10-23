import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "quem-e-satoshi-nakamoto",
  title: "Quem é Satoshi Nakamoto: o que se sabe e quem são os suspeitos",
  seoTitle: "Quem é Satoshi Nakamoto, o criador anônimo do Bitcoin",
  excerpt:
    "Descubra quem é Satoshi Nakamoto: o que se sabe do criador do Bitcoin, os suspeitos, a decisão da Justiça britânica sobre Craig Wright e as moedas intocadas.",
  metaDescription:
    "Satoshi Nakamoto criou o Bitcoin e sumiu em 2011. Veja os fatos comprovados, os suspeitos de Hal Finney a Adam Back e a estimativa de 1 milhão de BTC parados.",
  category: "historia",
  historyYear: 2008,
  date: "2026-10-22",
  readTime: 8,
  imageQuery: "Satoshi Nakamoto statue Budapest",
  seed: 42,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Satoshi Nakamoto é o pseudônimo de quem publicou o whitepaper em 2008, lançou o Bitcoin em 2009 e deixou de se comunicar em abril de 2011, sem nunca revelar a identidade.",
    "Hal Finney, Nick Szabo, Adam Back, Dorian Nakamoto e Peter Todd já foram apontados como Satoshi, e todos negaram; nenhuma tese foi comprovada.",
    "A Justiça do Reino Unido declarou em 2024 que Craig Wright não é Satoshi, e estima-se que cerca de 1 milhão de bitcoins minerados no começo da rede nunca se moveram.",
  ],
  content: `<p>Quem é Satoshi Nakamoto ninguém sabe ao certo: é o pseudônimo de quem escreveu o whitepaper do Bitcoin em 2008, lançou a rede em 2009 e sumiu em 2011, sem nunca mostrar o rosto. O que existe de concreto são e-mails, posts de fórum e código. O resto são suspeitos, negativas e uma decisão judicial.</p>
<p>Este texto separa fato de especulação: a linha do tempo comprovada, a saída de cena, os candidatos mais citados, as moedas que nunca se moveram e os golpes que exploram o nome. Se quiser só a versão curta, o verbete <a href="/glossario#satoshi-nakamoto">Satoshi Nakamoto</a> do glossário resume em três frases.</p>

<h2>O que se sabe de fato sobre Satoshi Nakamoto</h2>
<p>Satoshi aparece pela primeira vez em 31 de outubro de 2008, quando anunciou numa lista de criptografia o documento contado em <a href="/artigos/whitepaper-do-bitcoin-o-documento-que-criou-a-moeda">whitepaper do Bitcoin</a>. Em 3 de janeiro de 2009, minerou o primeiro bloco, o <a href="/artigos/bloco-genese-a-mensagem-escondida-no-primeiro-bloco">bloco gênese</a>, e cinco dias depois anunciou a primeira versão do programa. Até o fim de 2010, cuidou de boa parte do código e escreveu centenas de mensagens no fórum BitcoinTalk.</p>
<p>Sobre a pessoa, quase nada. Um perfil no site P2P Foundation dizia que ele era homem, morava no Japão e tinha nascido em 5 de abril de 1975, dados que nunca foram comprovados. O inglês era fluente e de grafia britânica: o próprio whitepaper escreve "favour", e não "favor". Ele só se comunicava por escrito, por e-mail e em fóruns.</p>
<table>
<thead><tr><th>Data</th><th>O que Satoshi fez</th></tr></thead>
<tbody>
<tr><td>31/10/2008</td><td>Anuncia o whitepaper na Cryptography Mailing List</td></tr>
<tr><td>03/01/2009</td><td>Minera o bloco gênese</td></tr>
<tr><td>08/01/2009</td><td>Anuncia a versão 0.1 do programa</td></tr>
<tr><td>12/01/2009</td><td>Envia 10 BTC a Hal Finney, a primeira transação entre duas pessoas</td></tr>
<tr><td>05/12/2010</td><td>Pede que o WikiLeaks não aceite bitcoin por enquanto</td></tr>
<tr><td>12/12/2010</td><td>Faz o último post público conhecido no BitcoinTalk</td></tr>
<tr><td>23/04/2011</td><td>Escreve a Mike Hearn que passou para "outras coisas"</td></tr>
</tbody>
</table>

<h2>A saída de cena, entre 2010 e 2011</h2>
<p>Em dezembro de 2010, com o WikiLeaks bloqueado por empresas de pagamento, usuários do fórum sugeriram que o site recebesse doações em bitcoin. Satoshi pediu o contrário, em 5 de dezembro: "No, don't 'bring it on'. The project needs to grow gradually so the software can be strengthened along the way." Ou seja, o projeto precisava crescer aos poucos, e a atenção que o WikiLeaks traria "provavelmente nos destruiria nesta fase".</p>
<p>Uma semana depois, em 12 de dezembro, ele publicou a versão 0.3.19, com limites contra ataques de negação de serviço. Foi o último post público conhecido no fórum, como mostra o <a href="https://satoshi.nakamotoinstitute.org/posts/bitcointalk/" rel="noopener noreferrer">arquivo completo dos posts de Satoshi no BitcoinTalk</a>, mantido pelo Satoshi Nakamoto Institute. A essa altura, o controle do repositório do código já estava com o desenvolvedor Gavin Andresen.</p>
<p>O último contato confirmado foi privado. Em 23 de abril de 2011, respondendo ao programador Mike Hearn, Satoshi escreveu: "I've moved on to other things. It's in good hands with Gavin and everyone", algo como "passei para outras coisas; está em boas mãos com Gavin e todos os outros". O próprio Hearn publicou a <a href="https://plan99.net/~mike/satoshi-emails/thread5.html" rel="noopener noreferrer">troca de e-mails com Satoshi</a> no site pessoal dele, e depois disso veio o silêncio.</p>

<h2>Os primeiros suspeitos: Finney, Szabo e Back</h2>
<h3>Hal Finney</h3>
<p>Criptógrafo, um dos primeiros a responder ao whitepaper e o primeiro a receber bitcoin, Finney sempre negou ser Satoshi. Em 2014, o jornalista Andy Greenberg, da Forbes, achou o estilo dele o mais parecido com o de Satoshi, mas concluiu que ele dizia a verdade. Finney morreu em 28 de agosto de 2014, de esclerose lateral amiotrófica, história contada em <a href="/artigos/hal-finney-o-primeiro-a-receber-bitcoin">Hal Finney, o primeiro a receber bitcoin</a>. Em abril de 2026, o documentário Finding Satoshi defendeu que o pseudônimo era dividido por Finney e pelo criptógrafo Len Sassaman, morto em 2011, tese que segue sem prova.</p>
<h3>Nick Szabo</h3>
<p>Criador do bit gold, uma proposta de dinheiro digital anterior ao Bitcoin, Szabo aparece em análises de estilo de escrita desde 2013. Ele nega. Em 2014, escreveu ao jornalista Dominic Frisby: "I'm afraid you got it wrong doxing me as Satoshi, but I'm used to it", ou seja, receio que você errou ao me apontar como Satoshi, mas já estou acostumado.</p>
<h3>Adam Back</h3>
<p>O criptógrafo britânico criou o Hashcash, citado na seção 4 do whitepaper, e é o único pesquisador nomeado no corpo do texto. Hoje dirige a empresa Blockstream. O documentário da HBO de 2024 o tratou como suspeito, e em 8 de abril de 2026 uma reportagem de John Carreyrou no The New York Times afirmou que ele é Satoshi, com base em análise de linguagem e coincidências de datas. Back negou mais uma vez.</p>

<h2>Dorian, Craig Wright e Peter Todd: as apostas que viraram notícia</h2>
<p>Em 6 de março de 2014, a revista Newsweek publicou que o criador do Bitcoin era Dorian Prentice Satoshi Nakamoto, um californiano de origem japonesa que teria dito à repórter Leah McGrath Goodman não estar "mais envolvido" com aquilo. Ele negou tudo logo depois e disse à agência AP que tinha ouvido falar de Bitcoin três semanas antes.</p>
<div class="callout-box callout-fact"><span class="callout-label">Fato curioso</span><p>Horas depois da reportagem da Newsweek, a conta de Satoshi no site P2P Foundation, parada desde 2009, publicou uma única frase: "I am not Dorian Nakamoto" (eu não sou Dorian Nakamoto). O Satoshi Nakamoto Institute lembra que a conta foi invadida em setembro de 2014, mas diz não haver indício claro de invasão na data desse post.</p></div>
<p>O caso mais barulhento foi o do australiano Craig Wright, que se apresentou como Satoshi em 2016 e passou anos processando quem duvidava. A Crypto Open Patent Alliance, grupo de empresas do setor, levou a questão à Alta Corte da Inglaterra, e ao fim de um julgamento de cinco semanas, em março de 2024, o juiz James Mellor declarou que Wright não é o autor do whitepaper, não é Satoshi, não criou o sistema e não escreveu as primeiras versões do software. Na <a href="https://caselaw.nationalarchives.gov.uk/ewhc/ch/2024/1198" rel="noopener noreferrer">sentença escrita de 20 de maio de 2024</a>, o juiz apontou documentos forjados. Em dezembro de 2024, Wright ainda recebeu 12 meses de prisão, com pena suspensa por dois anos, por desacato.</p>
<p>Em 8 de outubro de 2024, o documentário Money Electric: The Bitcoin Mystery, da HBO, dirigido por Cullen Hoback, apontou o desenvolvedor canadense Peter Todd. O argumento central era uma resposta dele, em 2010, corrigindo um detalhe técnico num dos últimos posts de Satoshi. Todd chamou a tese de ridícula e de "pensamento conspiratório baseado em coincidências".</p>

<h2>As moedas de Satoshi que nunca se moveram</h2>
<p>Em 17 de abril de 2013, o pesquisador argentino Sergio Demian Lerner publicou uma <a href="https://bitslog.com/2013/04/17/the-well-deserved-fortune-of-satoshi-nakamoto/" rel="noopener noreferrer">análise dos primeiros blocos da rede</a> e achou um padrão num campo técnico, o extraNonce, que funcionava como o relógio da máquina de um mesmo minerador. Pelas contas dele, dos 1.814.400 BTC criados nos primeiros 36.288 blocos, 1.148.800 BTC nunca tinham sido gastos, e a fortuna de Satoshi seria de cerca de 1 milhão de bitcoins. O padrão ficou conhecido depois como Patoshi.</p>
<p>É uma estimativa estatística, não uma prova: ninguém confirmou que todos esses blocos são de Satoshi. Se a conta estiver certa, ele seria uma das maiores <a href="/glossario#baleia">baleias</a> do Bitcoin, com perto de 5% de todas as moedas que vão existir. Até onde se sabe, essas moedas seguem paradas, e uma movimentação seria notícia no mundo inteiro.</p>
<p>Quanto isso vale depende do dia, e a conta com a cotação de agora sai no <a href="/ferramentas/conversor">conversor de Bitcoin</a>. Já as 50 moedas do bloco gênese não podem ser gastas por ninguém, por uma particularidade do código.</p>

<h2>Erros comuns e golpes que usam o nome de Satoshi</h2>
<p>O mistério virou matéria-prima para golpista. Perfis falsos usam o nome de Satoshi e de outras figuras do mercado para prometer dobrar bitcoins enviados, vendedores oferecem supostas carteiras antigas cheias de moedas e cada nova teoria sobre a identidade dele vira isca de clique. A prova mais citada pela comunidade seria uma assinatura feita com as chaves dos primeiros blocos ou a movimentação dessas moedas, e isso nunca aconteceu.</p>
<ul class="checklist">
<li>Desconfie de qualquer perfil que diga ser Satoshi ou falar em nome dele.</li>
<li>Nunca envie bitcoin para alguém "dobrar" o valor: é golpe sempre.</li>
<li>Não compre arquivo de carteira antiga nem chave "esquecida" de ninguém.</li>
<li>Trate teoria sobre a identidade de Satoshi como teoria, até haver prova criptográfica.</li>
</ul>
<p>Outro erro comum é achar que a identidade já foi revelada porque uma reportagem ou um documentário apontou alguém. Desde 2014, cada nova tese ganhou manchete e nenhuma trouxe a prova que importa: os apontados negaram, e o único que se declarou Satoshi perdeu na Justiça. Os golpes mais comuns no Brasil, do falso suporte ao sorteio falso, estão no guia sobre <a href="/artigos/golpes-com-criptomoedas-como-se-proteger">golpes com criptomoedas</a>.</p>

<h2>Por que o anonimato de Satoshi importa hoje</h2>
<p>O sumiço do criador acabou virando parte do desenho. Sem um fundador para prender, processar ou pressionar, o Bitcoin seguiu como software aberto, mantido por desenvolvedores independentes e conferido por milhares de computadores, como explica o guia <a href="/artigos/o-que-e-bitcoin-e-como-funciona">o que é Bitcoin e como funciona</a>. Se Satoshi reaparecesse amanhã, não teria mais poder sobre as regras do que qualquer outro participante. Também não há um dono com quem um governo possa negociar mudanças, o que ajuda a explicar por que regras básicas, como o limite de 21 milhões, seguem as mesmas desde 2009.</p>
<p>O nome ficou na própria moeda: a menor fração de um bitcoin, um cem milionésimo, se chama satoshi, como mostra o guia de <a href="/artigos/satoshis-o-que-sao-sats-e-como-converter">satoshis e como converter</a>. Para continuar a história depois da saída dele, siga a linha do tempo das <a href="/historia">Memórias do Bitcoin</a>, e para ver como a rede está agora, a página do <a href="/bitcoin">preço do Bitcoin ao vivo</a>.</p>`,
  faq: [
    {
      question: "Quem é Satoshi Nakamoto?",
      answer:
        "Satoshi Nakamoto é o pseudônimo da pessoa ou do grupo que publicou o whitepaper do Bitcoin em 31 de outubro de 2008 e lançou a rede em janeiro de 2009. A identidade real nunca foi comprovada. Satoshi só se comunicava por e-mail e fóruns, se afastou no fim de 2010 e mandou o último e-mail conhecido em abril de 2011.",
    },
    {
      question: "Craig Wright é Satoshi Nakamoto?",
      answer:
        "Não, segundo a Justiça do Reino Unido. Em março de 2024, ao fim de um julgamento movido pela Crypto Open Patent Alliance, o juiz James Mellor declarou que Wright não é o autor do whitepaper nem a pessoa que usou o nome Satoshi entre 2008 e 2011. A sentença escrita, de maio de 2024, apontou documentos forjados.",
    },
    {
      question: "Quantos bitcoins Satoshi Nakamoto tem?",
      answer:
        "Ninguém sabe ao certo. A estimativa mais citada é a do pesquisador Sergio Demian Lerner, de 2013, que identificou um padrão de mineração nos primeiros blocos e calculou cerca de 1 milhão de bitcoins. As moedas atribuídas a esse padrão nunca se moveram, até onde se sabe. Para o valor de hoje, use o conversor de Bitcoin do blog.",
    },
    {
      question: "Hal Finney era Satoshi Nakamoto?",
      answer:
        "Não há prova disso. Hal Finney foi um dos primeiros a responder ao whitepaper e recebeu a primeira transação de bitcoin, em janeiro de 2009, mas sempre negou ser Satoshi. Ele morreu em 2014. Em 2026, o documentário Finding Satoshi defendeu que Finney e Len Sassaman dividiam o pseudônimo, tese que continua sem comprovação.",
    },
    {
      question: "Qual foi a última mensagem de Satoshi Nakamoto?",
      answer:
        "O último post público conhecido no fórum BitcoinTalk é de 12 de dezembro de 2010, sobre a versão 0.3.19 do programa. O último contato confirmado é um e-mail de 23 de abril de 2011 ao programador Mike Hearn, em que Satoshi diz que passou para outras coisas e que o projeto estava em boas mãos com Gavin Andresen e os demais.",
    },
  ],
  quiz: [
    {
      question: "O que a Justiça do Reino Unido decidiu sobre Craig Wright em 2024?",
      options: [
        "Que ele é Satoshi Nakamoto",
        "Que ele não é o autor do whitepaper nem Satoshi",
        "Que a identidade de Satoshi deve ser revelada",
      ],
      answer: 1,
      explanation:
        "O juiz James Mellor declarou que Wright não é o autor do whitepaper, não é Satoshi, não criou o sistema e não escreveu as primeiras versões do software.",
    },
    {
      question: "Qual é a estimativa mais citada para os bitcoins de Satoshi que nunca se moveram?",
      options: ["Cerca de 50 mil", "Cerca de 1 milhão", "Cerca de 10 milhões"],
      answer: 1,
      explanation:
        "A análise de Sergio Demian Lerner, de 2013, chegou a cerca de 1 milhão de bitcoins, perto de 5% do limite de 21 milhões. É uma estimativa, não uma prova.",
    },
    {
      question: "Quando foi o último contato confirmado de Satoshi?",
      options: ["Janeiro de 2009", "Abril de 2011", "Março de 2014"],
      answer: 1,
      explanation:
        "Foi um e-mail de 23 de abril de 2011 a Mike Hearn. O post de 2014 no P2P Foundation existe, mas sua autenticidade é discutida.",
    },
  ],
};

import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "whitepaper-do-bitcoin-o-documento-que-criou-a-moeda",
  title: "Whitepaper do Bitcoin: o documento de 9 páginas que criou a moeda",
  seoTitle: "Whitepaper do Bitcoin: o que diz o documento de Satoshi",
  excerpt:
    "Conheça o whitepaper do Bitcoin, lançado por Satoshi Nakamoto em 31 de outubro de 2008: o que cada seção propõe, as primeiras reações e o que o texto não diz.",
  metaDescription:
    "O whitepaper do Bitcoin explicado para leigos: o e-mail de 2008, as 12 seções, a prova de trabalho, as primeiras respostas e os mitos sobre o documento.",
  category: "historia",
  historyYear: 2008,
  date: "2026-10-22",
  readTime: 8,
  imageQuery: "File:Satoshi Nakamoto's Bitcoin Timestamp Diagram.png",
  seed: 41,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "O whitepaper foi anunciado por Satoshi Nakamoto em 31 de outubro de 2008 numa lista de e-mails sobre criptografia, com o título Bitcoin: A Peer-to-Peer Electronic Cash System.",
    "Em nove páginas e 12 seções, o texto resolve o gasto duplo sem banco no meio, usando prova de trabalho, a cadeia mais longa e um incentivo para quem cria os blocos.",
    "O documento não usa a palavra blockchain e não fala do limite de 21 milhões: essas ideias vieram do código e do vocabulário que surgiu depois.",
  ],
  content: `<p>O whitepaper do Bitcoin é o documento de nove páginas em que Satoshi Nakamoto descreveu, em 31 de outubro de 2008, um dinheiro eletrônico enviado de pessoa para pessoa, sem banco no meio. Com o título "Bitcoin: A Peer-to-Peer Electronic Cash System", ele foi anunciado numa lista de e-mails de criptografia e deu origem à rede lançada em 2009.</p>
<p>Este texto conta como o documento surgiu, quem respondeu primeiro, o que cada uma das 12 seções propõe e o que o texto não diz, apesar do que se repete por aí. Se algum termo travar a leitura, o verbete <a href="/glossario#whitepaper">whitepaper</a> do glossário e o guia <a href="/artigos/o-que-e-bitcoin-e-como-funciona">o que é Bitcoin e como funciona</a> ajudam.</p>

<h2>31 de outubro de 2008: o e-mail que apresentou o Bitcoin</h2>
<p>Era uma sexta-feira, Dia das Bruxas nos Estados Unidos, e o mundo vivia a pior crise financeira em décadas: o banco Lehman Brothers tinha quebrado em meados de setembro. Às 14h10 no horário de Nova York, uma mensagem com o assunto "Bitcoin P2P e-cash paper" chegou à Cryptography Mailing List, uma lista sobre criptografia hospedada no site metzdowd.com. O remetente assinava Satoshi Nakamoto, com um endereço do serviço de e-mail Vistomail.</p>
<p>A primeira frase da <a href="https://www.metzdowd.com/pipermail/cryptography/2008-October/014810.html" rel="noopener noreferrer">mensagem original</a> resumia tudo: "Tenho trabalhado num novo sistema de dinheiro eletrônico que é totalmente ponto a ponto, sem terceiro de confiança". Em seguida vinham as propriedades: o gasto duplo seria evitado por uma rede ponto a ponto, não haveria casa da moeda nem outra parte de confiança, os participantes poderiam ser anônimos e as moedas novas sairiam de uma prova de trabalho no estilo do Hashcash. O link levava ao PDF em bitcoin.org, domínio registrado em agosto daquele ano.</p>
<p>A lista reunia criptógrafos que havia anos discutiam dinheiro digital. Tentativas anteriores, como o b-money de Wei Dai, de 1998, e o Hashcash de Adam Back, tinham resolvido partes do problema, e as duas aparecem nas referências do whitepaper. Nenhuma tinha chegado a uma moeda que funcionasse sem alguém no centro.</p>

<h2>O problema que o whitepaper resolve: o gasto duplo</h2>
<p>Uma foto digital pode ser copiada mil vezes. Com dinheiro digital, o perigo é o mesmo: o que impede alguém de gastar o mesmo saldo duas vezes? Até 2008, a resposta era um intermediário de confiança, como um banco ou uma empresa de pagamentos, que mantém o registro oficial e decide quem tem quanto.</p>
<p>O resumo do <a href="https://bitcoin.org/bitcoin.pdf" rel="noopener noreferrer">whitepaper, ainda hospedado em bitcoin.org</a>, abre com a frase que virou uma espécie de subtítulo do Bitcoin: "A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution". Em português: uma versão puramente ponto a ponto do dinheiro eletrônico permitiria pagamentos online enviados diretamente de uma parte para a outra, sem passar por uma instituição financeira. No e-mail de 2008, o mesmo resumo falava em evitar "the burdens of going through a financial institution": o PDF de hoje é uma revisão gerada em março de 2009.</p>
<p>A introdução explica o custo da confiança. Como os bancos precisam mediar disputas, nenhuma transação é de fato irreversível, a mediação encarece pagamentos pequenos e os comerciantes acabam pedindo mais dados do que precisariam. A proposta é trocar confiança por prova criptográfica, num sistema seguro enquanto os participantes honestos controlarem mais poder de processamento do que qualquer grupo de atacantes.</p>

<h2>As 12 seções do whitepaper explicadas para leigo</h2>
<p>O documento tem 12 seções curtas e 8 referências, e a matemática pesada só aparece na seção 11. A tabela resume cada parte.</p>
<table>
<thead><tr><th>Seção</th><th>O que propõe, em linguagem simples</th></tr></thead>
<tbody>
<tr><td>1. Introdução</td><td>Pagar pela internet depende de terceiros de confiança, e isso custa caro</td></tr>
<tr><td>2. Transações</td><td>Uma moeda é uma cadeia de assinaturas digitais, passada de dono para dono</td></tr>
<tr><td>3. Servidor de carimbo de tempo</td><td>Carimbar grupos de transações com data, cada um ligado ao anterior</td></tr>
<tr><td>4. Prova de trabalho</td><td>Gastar processamento em cada bloco, o que encarece reescrever o passado</td></tr>
<tr><td>5. Rede</td><td>Os seis passos que os computadores da rede seguem para aceitar blocos</td></tr>
<tr><td>6. Incentivo</td><td>Quem cria o bloco ganha moedas novas e taxas, como um garimpeiro de ouro</td></tr>
<tr><td>7. Recuperando espaço em disco</td><td>Árvore de Merkle para descartar transações antigas sem quebrar o registro</td></tr>
<tr><td>8. Verificação simplificada de pagamentos</td><td>Conferir pagamentos só com os cabeçalhos dos blocos</td></tr>
<tr><td>9. Combinando e dividindo valor</td><td>Transações com várias entradas e no máximo duas saídas, uma delas de troco</td></tr>
<tr><td>10. Privacidade</td><td>Chaves públicas sem nome, como a fita de negócios de uma bolsa de valores</td></tr>
<tr><td>11. Cálculos</td><td>A chance de um atacante alcançar a cadeia honesta cai muito a cada bloco</td></tr>
<tr><td>12. Conclusão</td><td>Transações sem depender de confiança, com regras impostas por consenso</td></tr>
</tbody>
</table>
<p>Duas seções explicam muito do Bitcoin de hoje. A 8 descreve as carteiras leves, que conferem pagamentos sem baixar a blockchain inteira, como fazem muitos aplicativos de celular (o guia de <a href="/artigos/carteira-de-bitcoin-qual-escolher">qual carteira de Bitcoin escolher</a> compara os tipos). A 9 explica por que a sua carteira devolve troco: cada transação gasta entradas inteiras e manda a diferença de volta para você, a lógica do <a href="/glossario#utxo">UTXO</a>.</p>

<h2>Três ideias do documento que ainda sustentam a rede</h2>
<h3>Uma CPU, um voto</h3>
<p>A seção 4 resolve quem decide qual é o registro verdadeiro. Votar por endereço de internet não funcionaria, porque qualquer um poderia criar milhares de IPs. A saída é a <a href="/glossario#prova-de-trabalho">prova de trabalho</a>: vale a cadeia mais longa, a que tem mais esforço computacional investido, num modelo que o texto chama de "one-CPU-one-vote". A mesma seção já prevê o ajuste de dificuldade para manter um número médio de blocos por hora.</p>
<h3>O garimpeiro de ouro</h3>
<p>A seção 6 cria o incentivo. A primeira transação de cada bloco gera moedas novas para quem o criou, e o texto compara isso a garimpeiros que gastam recursos para pôr ouro em circulação; no caso, o recurso é tempo de processador e eletricidade. Quando um número predeterminado de moedas estiver em circulação, o pagamento pode passar a vir só das taxas, a semente da <a href="/artigos/mineracao-de-bitcoin-como-funciona">mineração de Bitcoin</a> como a conhecemos.</p>
<h3>A conta do atacante</h3>
<p>A seção 11 calcula a chance de alguém reescrever um pagamento já registrado. Com um atacante dono de 10% do poder de processamento, a probabilidade de ele alcançar a cadeia honesta cai para menos de 0,1% depois de 5 blocos; com 30%, são precisos 24 blocos para chegar ao mesmo nível. Daí vem o costume de esperar algumas confirmações antes de considerar garantido um pagamento alto.</p>

<h2>A repercussão: ceticismo, Hal Finney e o lançamento</h2>
<p>A recepção na lista foi educada e desconfiada. Em 2 de novembro, James A. Donald respondeu que o mundo precisava muito de um sistema assim, mas que, pelo que ele entendia, a proposta não parecia escalar para o tamanho necessário. Satoshi rebateu na mesma noite: muito antes de a rede ficar tão grande, os usuários poderiam usar a verificação simplificada da seção 8.</p>
<p>Em 7 de novembro, Hal Finney, criptógrafo veterano, escreveu que o Bitcoin parecia "uma ideia muito promissora". Uma semana depois, Satoshi reconheceu que a ideia atraía a visão libertária, se bem explicada, e completou: "I'm better with code than with words though" (sou melhor com código do que com palavras). Em 17 de novembro, o moderador Perry Metzger encerrou o debate, sugerindo que os interessados escrevessem artigos em vez de repetir argumentos. Todo esse vaivém está no <a href="https://www.metzdowd.com/pipermail/cryptography/2008-November/thread.html" rel="noopener noreferrer">arquivo da lista de novembro de 2008</a>.</p>
<p>O código veio logo depois. A rede começou em 3 de janeiro de 2009, com o bloco contado em <a href="/artigos/bloco-genese-a-mensagem-escondida-no-primeiro-bloco">a mensagem escondida no primeiro bloco</a>, e em 8 de janeiro Satoshi anunciou na mesma lista a primeira versão do programa. Finney foi um dos primeiros a rodar o software e a receber bitcoin, história de <a href="/artigos/hal-finney-o-primeiro-a-receber-bitcoin">Hal Finney, o primeiro a receber bitcoin</a>.</p>

<h2>O que o whitepaper não diz: erros comuns e golpes</h2>
<p>Muita coisa atribuída ao documento não está nele. A palavra "blockchain" não aparece nenhuma vez: Satoshi fala em blocos e em cadeia, e o termo só se popularizou depois. O limite de 21 milhões também não está lá, nem o halving, regras que vieram no código e estão no guia do <a href="/artigos/halving-do-bitcoin-o-que-e-e-quando-e-o-proximo">halving do Bitcoin</a>. E a palavra "bitcoin" só aparece no título e no endereço do site.</p>
<p>Outro erro é tratar o whitepaper como promessa de valorização. Ele é uma proposta técnica de sistema de pagamentos e não fala de preço nem de investimento. Golpistas exploram a aura do documento: todo projeto novo publica um "whitepaper" caprichado, e isso não garante nada. Antes de pôr dinheiro num token por causa de um PDF, leia o guia sobre <a href="/artigos/golpes-com-criptomoedas-como-se-proteger">golpes com criptomoedas</a>.</p>
<p>Houve ainda briga pela autoria. O australiano Craig Wright afirmou por anos ser Satoshi e chegou a reivindicar direitos sobre o texto, até que a Justiça do Reino Unido declarou, em 2024, que ele não é o autor do whitepaper; os detalhes estão em <a href="/artigos/quem-e-satoshi-nakamoto">quem é Satoshi Nakamoto</a>.</p>
<div class="callout-box callout-fact"><span class="callout-label">Fato curioso</span><p>Durante anos, uma cópia do whitepaper viajou escondida em computadores da Apple. Em abril de 2023, o desenvolvedor Andy Baio <a href="https://waxy.org/2023/04/the-bitcoin-whitepaper-is-hidden-in-every-modern-copy-of-macos/" rel="noopener noreferrer">mostrou</a> que o PDF vinha no macOS desde a versão Mojave, como documento de exemplo de um scanner virtual escondido no sistema. A Apple o removeu num beta do macOS Ventura 13.4.</p></div>

<h2>Por que o documento importa hoje</h2>
<p>Quase 18 anos depois, o whitepaper continua sendo a melhor porta de entrada para entender o Bitcoin. As regras centrais que ele descreve, assinaturas digitais, prova de trabalho, cadeia mais longa e incentivo para quem cria blocos, seguem valendo, e o texto ganhou dezenas de traduções, inclusive para o português, publicadas no próprio bitcoin.org.</p>
<p>Ele também ajuda a separar fato de folclore. Quem lê as nove páginas entende que o Bitcoin nasceu como sistema de pagamento entre pessoas, sem dono, e que a segurança vem de matemática e incentivo, não da promessa de alguém. Satoshi saiu de cena em 2011, mas o nome dele ficou na menor unidade da moeda, como explica o guia de <a href="/artigos/satoshis-o-que-sao-sats-e-como-converter">satoshis e como converter</a>.</p>
<p>Para seguir a história, continue pela linha do tempo das <a href="/historia">Memórias do Bitcoin</a> ou veja a rede agora na página do <a href="/bitcoin">preço do Bitcoin ao vivo</a>.</p>`,
  faq: [
    {
      question: "O que é o whitepaper do Bitcoin?",
      answer:
        "É o documento técnico em que Satoshi Nakamoto apresentou o Bitcoin, em 31 de outubro de 2008. Com o título Bitcoin: A Peer-to-Peer Electronic Cash System, ele descreve em nove páginas um dinheiro eletrônico enviado direto entre pessoas, sem banco, usando assinaturas digitais, prova de trabalho e uma cadeia de blocos para impedir o gasto duplo.",
    },
    {
      question: "Quem escreveu o whitepaper do Bitcoin?",
      answer:
        "O autor assinou como Satoshi Nakamoto, pseudônimo de uma pessoa ou grupo nunca identificado. O documento foi anunciado numa lista de e-mails sobre criptografia e hospedado no site bitcoin.org. Em 2024, a Justiça do Reino Unido declarou que o australiano Craig Wright, que dizia ser Satoshi, não é o autor do texto.",
    },
    {
      question: "Onde ler o whitepaper do Bitcoin em português?",
      answer:
        "O site bitcoin.org mantém o original em inglês e uma página com dezenas de traduções feitas por voluntários, incluindo uma versão em português do Brasil. Vale ler a tradução junto com o original, porque alguns termos técnicos, como proof-of-work e double-spending, aparecem traduzidos de formas diferentes em outros materiais.",
    },
    {
      question: "Quantas páginas e seções tem o whitepaper do Bitcoin?",
      answer:
        "O whitepaper tem nove páginas, 12 seções e 8 referências bibliográficas. As seções vão da introdução sobre o problema dos intermediários até a conclusão, passando por transações, carimbo de tempo, prova de trabalho, rede, incentivo, espaço em disco, verificação simplificada, divisão de valor, privacidade e cálculos de segurança.",
    },
    {
      question: "O whitepaper fala do limite de 21 milhões de bitcoins?",
      answer:
        "Não. O texto diz apenas que, depois que um número predeterminado de moedas entrar em circulação, o incentivo dos mineradores pode passar a vir só das taxas. O teto de 21 milhões e o halving a cada 210 mil blocos foram definidos no código do programa, lançado em janeiro de 2009, e não aparecem no documento.",
    },
  ],
  quiz: [
    {
      question: "Em que data Satoshi Nakamoto anunciou o whitepaper do Bitcoin?",
      options: ["3 de janeiro de 2009", "31 de outubro de 2008", "22 de maio de 2010"],
      answer: 1,
      explanation:
        "O anúncio foi feito em 31 de outubro de 2008 na Cryptography Mailing List. O bloco gênese só veio em 3 de janeiro de 2009.",
    },
    {
      question: "Qual destas palavras não aparece nenhuma vez no whitepaper?",
      options: ["Blockchain", "Proof-of-work", "Merkle"],
      answer: 0,
      explanation:
        "Satoshi fala em blocos e em cadeia, mas o termo blockchain não aparece no documento. Prova de trabalho e árvore de Merkle estão lá.",
    },
    {
      question: "O que a seção 8, de verificação simplificada, permite?",
      options: [
        "Conferir pagamentos sem rodar um nó completo",
        "Criar moedas sem prova de trabalho",
        "Desfazer transações já confirmadas",
      ],
      answer: 0,
      explanation:
        "A verificação simplificada usa só os cabeçalhos dos blocos para conferir um pagamento, ideia por trás de muitas carteiras leves de celular.",
    },
  ],
};

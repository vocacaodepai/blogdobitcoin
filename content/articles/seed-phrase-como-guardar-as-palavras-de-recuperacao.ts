import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "seed-phrase-como-guardar-as-palavras-de-recuperacao",
  title: "Seed phrase: como guardar as palavras de recuperação",
  seoTitle: "Seed phrase: como guardar as 12 ou 24 palavras",
  excerpt:
    "Seed phrase: aprenda a guardar as 12 ou 24 palavras de recuperação da carteira, o que nunca fazer e quando usar backup em metal, passphrase e herança.",
  metaDescription:
    "Como guardar a seed phrase com segurança: padrão BIP39, 12 ou 24 palavras, backup em metal, passphrase (a 25ª palavra), plano de herança e checklist.",
  category: "seguranca",
  date: "2026-10-22",
  readTime: 8,
  imageQuery: "metal seed phrase plate",
  seed: 16,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "A seed phrase de 12 ou 24 palavras, no padrão BIP39, recria todas as chaves da carteira: quem tem as palavras tem os bitcoins.",
    "Anote à mão, confira com a tela, guarde cópias offline em lugares diferentes e nunca fotografe nem digite as palavras em site.",
    "Backup em metal, passphrase e uma carta de instruções para a família protegem contra fogo, roubo e perda do acesso na herança.",
  ],
  content: `<p>A seed phrase é a lista de 12 ou 24 palavras que recupera a sua carteira de bitcoin em qualquer aparelho. Saber como guardar as palavras de recuperação é o que separa um celular perdido de um prejuízo total. A regra básica: escreva à mão, guarde longe da internet e nunca digite as palavras em site nem fotografe.</p>
<p>Neste guia você vai entender o padrão BIP39, a diferença entre 12 e 24 palavras, quando um backup em metal compensa, o que é a passphrase (a chamada 25ª palavra) e como montar um plano para a família acessar os bitcoins se algo acontecer com você. Se ainda não escolheu a carteira, comece pelo guia de <a href="/artigos/carteira-de-bitcoin-qual-escolher">qual carteira de Bitcoin escolher</a>.</p>

<h2>O que é a seed phrase e por que ela vale tanto quanto os bitcoins</h2>
<p>Toda carteira de bitcoin nasce de um número aleatório gigante. Como ninguém consegue anotar dezenas de dígitos sem errar, a maioria das carteiras transforma esse número numa sequência de palavras comuns, a <a href="/glossario#seed">seed phrase</a>, também chamada de frase de recuperação ou semente. Dela saem todas as <a href="/glossario#chave-privada">chaves privadas</a> e todos os endereços da carteira.</p>
<p>O padrão mais usado é o <a href="https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki" rel="noopener noreferrer">BIP39</a>, uma proposta de melhoria do Bitcoin de setembro de 2013 assinada por Marek Palatinus, Pavol Rusnak, Aaron Voisine e Sean Bowe. Graças a ele, as mesmas palavras costumam restaurar a carteira em aplicativos e aparelhos de fabricantes diferentes. A consequência prática é dura: quem tem as palavras tem os bitcoins, sem senha, sem documento e sem pedir licença a ninguém.</p>

<h2>12 ou 24 palavras: o que muda na prática</h2>
<p>As palavras saem de uma lista fixa de 2.048 termos, e cada uma representa 11 bits do número aleatório. Parte da última palavra é um código de verificação, o checksum, por isso não dá para inventar uma sequência qualquer: na maioria dos casos, a carteira percebe se uma palavra estiver errada ou fora de ordem. A tabela mostra as combinações previstas no padrão.</p>
<table>
<thead><tr><th>Número de palavras</th><th>Bits aleatórios</th><th>Bits de verificação</th></tr></thead>
<tbody>
<tr><td>12</td><td>128</td><td>4</td></tr>
<tr><td>15</td><td>160</td><td>5</td></tr>
<tr><td>18</td><td>192</td><td>6</td></tr>
<tr><td>21</td><td>224</td><td>7</td></tr>
<tr><td>24</td><td>256</td><td>8</td></tr>
</tbody>
</table>
<p>Doze palavras (128 bits) já tornam inviável adivinhar a carteira por tentativa e erro com a tecnologia atual, e 24 palavras dão margem extra. Para quem guarda bem, as duas opções são seguras. O que derruba quase todo mundo não é a matemática, é o backup mal feito.</p>
<p>Na lista em inglês, as quatro primeiras letras bastam para identificar cada palavra sem ambiguidade, o que ajuda em placas de metal com pouco espaço. O BIP39 tem até uma <a href="https://github.com/bitcoin/bips/blob/master/bip-0039/bip-0039-wordlists.md" rel="noopener noreferrer">lista em português</a>, mas o próprio documento desaconselha listas em outros idiomas, porque a maioria das carteiras não as aceita. Anote as palavras exatamente como a carteira mostrou, sem traduzir.</p>

<h2>Como anotar e guardar: o que fazer e o que nunca fazer</h2>
<p>Anote à mão, em papel ou no cartão que veio com a carteira, numerando cada palavra na ordem. Confira letra por letra com a tela do aparelho e, se a carteira oferecer, faça o teste de confirmação das palavras. Depois, guarde num lugar protegido de umidade e longe dos olhos de visitas.</p>
<div class="callout-box callout-bad"><span class="callout-label">Nunca faça</span><p>Nunca tire foto, nunca salve em nuvem, e-mail, bloco de notas ou conversa de WhatsApp com você mesmo, e nunca digite as palavras em site, formulário ou aplicativo que não seja a própria carteira numa restauração. Qualquer cópia digital pode vazar num backup automático ou num vírus.</p></div>
<ul class="checklist">
<li>Palavras anotadas à mão, numeradas e conferidas com a tela.</li>
<li>Nenhuma cópia em foto, nuvem, e-mail ou celular.</li>
<li>Pelo menos duas cópias físicas, em lugares diferentes.</li>
<li>Local protegido de água, fogo e de olhares curiosos.</li>
<li>Restauração testada antes de depositar um valor alto.</li>
<li>Carta de instruções para a família guardada à parte das palavras.</li>
</ul>
<p>Duas cópias em lugares diferentes, como a sua casa e um cofre ou a casa de um parente de confiança, evitam que um único incêndio ou alagamento leve tudo. Só não espalhe cópias demais: cada uma é mais uma chance de alguém encontrar.</p>

<h2>Backup em metal: quando vale a pena</h2>
<p>Papel queima, molha e desbota. Para valores que você não aceitaria perder, um backup em metal reduz esses riscos: são placas ou cápsulas de aço em que você grava, puncionando ou encaixando letras, as palavras ou as quatro primeiras letras de cada uma. É o complemento natural de quem já usa uma das <a href="/artigos/melhores-carteiras-de-hardware-para-bitcoin">melhores carteiras de hardware para bitcoin</a>.</p>
<p>O desenvolvedor Jameson Lopp submeteu dezenas desses dispositivos a <a href="https://jlopp.github.io/metal-bitcoin-storage-reviews/" rel="noopener noreferrer">testes de calor, corrosão e esmagamento</a> e chegou a duas recomendações simples: prefira modelos com menos peças, porque cada peça a mais é um ponto de falha, e evite produtos em que o fabricante possa conhecer a sua chave. As opções vendidas no Brasil estão na <a href="/loja">Loja do Bitcoin</a>, na seção de backup da seed.</p>

<h2>Passphrase: a 25ª palavra</h2>
<p>Muitas carteiras permitem acrescentar uma passphrase, uma senha extra que entra no cálculo junto com as palavras. Pelo BIP39, a frase e a passphrase passam por 2.048 rodadas de uma função de derivação (PBKDF2 com HMAC-SHA512) para gerar a semente final de 512 bits. Na prática, as mesmas 24 palavras com passphrases diferentes abrem carteiras completamente diferentes.</p>
<p>Isso protege contra quem encontrar a sua placa: sem a passphrase, ele restaura uma carteira vazia ou com um valor pequeno deixado de isca. O preço é alto, porque o padrão determina que toda passphrase gera uma carteira válida. Um erro de digitação não dá aviso, só abre outra carteira, vazia, e quem esquece a passphrase perde os bitcoins mesmo com as palavras em mãos.</p>
<p>Por isso, a passphrase deve ficar guardada em lugar diferente das palavras e só faz sentido para quem já domina o básico. Para a maioria das pessoas, um bom backup das palavras já resolve.</p>

<h2>Herança: como a família vai acessar os seus bitcoins</h2>
<p>Se você morrer ou ficar incapacitado, os bitcoins continuam na rede, mas ninguém consegue movê-los sem a seed phrase. Não existe gerente para quem a família possa ligar. Um plano de sucessão resolve isso sem expor as palavras enquanto você estiver por perto.</p>
<p>O mínimo é uma carta de instruções guardada separada do backup: que carteira você usa, onde estão as palavras e a passphrase, quem pode ajudar na parte técnica e o que fazer primeiro. Evite escrever as palavras no testamento, que pode passar por várias mãos no inventário; ele pode apenas apontar onde está a carta. Declarar os bitcoins no Imposto de Renda também ajuda, porque deixa registrado que eles existem (o passo a passo está em <a href="/artigos/como-declarar-bitcoin-no-imposto-de-renda">como declarar bitcoin no Imposto de Renda</a>).</p>
<p>Para valores altos, há arranjos mais robustos, como a carteira <a href="/glossario#multisig">multisig</a>, que exige, por exemplo, 2 de 3 chaves para gastar e permite deixar uma delas com um familiar ou um profissional de confiança. Um advogado de sucessões ajuda a encaixar tudo isso no planejamento da família.</p>

<h2>Erros comuns que fazem pessoas perderem bitcoins</h2>
<p>Quase toda perda de bitcoin por backup ruim segue um dos roteiros abaixo. Todos são evitáveis com alguns minutos de cuidado na hora de configurar a carteira.</p>
<ul>
<li><strong>Não testar a restauração.</strong> Antes de depositar um valor alto, restaure a carteira em outro aparelho ou depois de zerar o primeiro, usando só as palavras anotadas. Se não funcionar, você descobre a tempo.</li>
<li><strong>Anotar fora de ordem ou com erro de grafia.</strong> A ordem importa, e uma palavra trocada pode deixar a carteira irrecuperável.</li>
<li><strong>Guardar todas as cópias no mesmo lugar.</strong> Um incêndio ou uma mudança de casa mal feita leva tudo junto.</li>
<li><strong>Entregar as palavras ao "suporte".</strong> Nenhuma empresa pede a seed phrase, e esse é o golpe mais comum, explicado no guia de <a href="/artigos/golpes-com-criptomoedas-como-se-proteger">golpes com criptomoedas</a>.</li>
<li><strong>Aceitar uma seed que veio pronta.</strong> Palavras impressas na caixa da carteira são sinal de aparelho adulterado: a seed legítima é gerada pelo próprio aparelho na configuração.</li>
</ul>
<p>Perder o acesso é mais comum do que parece. A história de <a href="/artigos/o-homem-que-jogou-bitcoins-no-lixo-james-howells">o homem que jogou bitcoins no lixo</a> é o lembrete mais caro de que um backup só protege se existir em mais de um lugar.</p>

<h2>Seed guardada, bitcoin protegido: o próximo passo</h2>
<p>A seed phrase é a peça que decide se a autocustódia é segura ou arriscada. Anotada com calma, conferida, guardada offline e acompanhada de um plano para a família, ela permite recuperar tudo mesmo que o aparelho quebre, seja roubado ou se perca.</p>
<p>Se você ainda deixa as moedas na corretora, veja os prós e contras de tirá-las de lá no guia de <a href="/artigos/autocustodia-not-your-keys-not-your-coins">autocustódia: not your keys, not your coins</a>. E, para revisar como chaves e endereços funcionam por baixo, volte ao guia <a href="/artigos/o-que-e-bitcoin-e-como-funciona">o que é Bitcoin e como funciona</a>.</p>`,
  faq: [
    {
      question: "O que é seed phrase?",
      answer:
        "Seed phrase é a sequência de 12 ou 24 palavras que a carteira mostra na primeira configuração. Ela representa o número aleatório do qual saem todas as chaves privadas e endereços, seguindo o padrão BIP39. Com essas palavras, você restaura a carteira em outro aparelho se o original quebrar ou sumir. Quem tiver acesso a elas também consegue mover os seus bitcoins.",
    },
    {
      question: "Posso guardar a seed phrase no celular ou na nuvem?",
      answer:
        "Não é recomendado. Foto, nota no celular, e-mail, nuvem e conversa de WhatsApp podem vazar por backup automático, invasão de conta ou vírus, e quem obtiver as palavras leva os bitcoins. O mais seguro é anotar à mão, conferir com a tela do aparelho e guardar cópias físicas offline em lugares diferentes, de preferência com um backup em metal para valores altos.",
    },
    {
      question: "Seed phrase de 12 ou 24 palavras: qual é mais segura?",
      answer:
        "As duas são seguras contra tentativa e erro. Doze palavras correspondem a 128 bits aleatórios, número já inviável de adivinhar com a tecnologia atual, e 24 palavras correspondem a 256 bits, dando margem extra. Na prática, o risco real está no backup mal feito, na foto, no golpe do falso suporte e na perda das anotações, não na quantidade de palavras.",
    },
    {
      question: "O que acontece se eu perder a seed phrase?",
      answer:
        "Enquanto a carteira original funciona, você ainda acessa os bitcoins e deve criar uma carteira nova, anotar a nova seed com cuidado e transferir tudo para ela. Se perder ao mesmo tempo a seed e o aparelho, ou se o aparelho for zerado, não há como recuperar: não existe suporte nem senha alternativa no Bitcoin, e as moedas ficam inacessíveis.",
    },
    {
      question: "O que é a 25ª palavra da seed phrase?",
      answer:
        "É o apelido da passphrase, uma senha opcional que o padrão BIP39 combina com as palavras para gerar a semente final. Com ela, as mesmas palavras abrem uma carteira diferente, o que protege contra quem encontrar o seu backup. O risco é perder a passphrase: sem ela os bitcoins ficam inacessíveis, e um erro de digitação abre outra carteira, vazia, sem aviso.",
    },
    {
      question: "Como deixar meus bitcoins de herança?",
      answer:
        "Monte uma carta de instruções guardada separada do backup, dizendo que carteira você usa, onde estão as palavras e a passphrase e quem pode ajudar na parte técnica. Não escreva as palavras no testamento, que pode passar por várias mãos no inventário. Declarar os bitcoins no Imposto de Renda e conversar com um advogado de sucessões completa o plano.",
    },
  ],
  quiz: [
    {
      question: "De quantos termos é a lista de palavras do padrão BIP39?",
      options: ["24", "2.048", "1 milhão"],
      answer: 1,
      explanation: "Cada palavra representa 11 bits, o que dá 2.048 combinações. A seed escolhe 12 ou 24 palavras dessa lista.",
    },
    {
      question: "Qual é o jeito mais seguro de guardar a seed phrase?",
      options: ["Foto no celular com senha", "Anotada à mão e guardada offline, em mais de um lugar", "Arquivo na nuvem"],
      answer: 1,
      explanation: "Cópias digitais podem vazar. O backup físico, conferido e guardado em lugares diferentes, é o padrão recomendado.",
    },
  ],
};

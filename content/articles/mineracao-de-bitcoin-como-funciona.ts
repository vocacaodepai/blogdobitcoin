import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "mineracao-de-bitcoin-como-funciona",
  title: "Mineração de Bitcoin: como funciona e se vale a pena no Brasil",
  seoTitle: "Mineração de Bitcoin: como funciona e se vale a pena",
  excerpt:
    "Entenda a mineração de Bitcoin: prova de trabalho, ASICs, pools, ajuste de dificuldade, gasto de energia e a conta de luz de minerar em casa no Brasil.",
  metaDescription:
    "Como funciona a mineração de Bitcoin: prova de trabalho, máquinas ASIC, pools, dificuldade a cada 2.016 blocos, consumo de energia e se compensa no Brasil.",
  category: "bitcoin",
  date: "2026-10-22",
  readTime: 8,
  imageQuery: "File:Antminer ASIC Miner.jpeg",
  seed: 3,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Minerar é disputar, com máquinas especializadas, o direito de fechar o próximo bloco e receber a recompensa de 3,125 BTC mais as taxas.",
    "A dificuldade se ajusta a cada 2.016 blocos para manter o ritmo de um bloco a cada 10 minutos, não importa quantas máquinas entrem.",
    "Com a tarifa de luz residencial do Brasil, uma máquina moderna em casa tende a gastar mais em energia do que rende em bitcoin.",
  ],
  content: `<p>Mineração de Bitcoin é o processo em que computadores especializados competem para fechar o próximo bloco da rede e, em troca, ganham bitcoins novos mais as taxas das transações. Ela funciona por prova de trabalho: quem gasta energia para resolver um quebra-cabeça matemático protege o registro e é pago por isso.</p>
<p>Neste guia você vai entender como essa competição acontece, que máquinas fazem o serviço, para que servem os pools, como a dificuldade se ajusta, quanto de energia o sistema consome e, no fim, fazer a conta de luz de minerar em casa no Brasil. Se ainda não conhece a base do sistema, comece pelo guia sobre <a href="/artigos/o-que-e-bitcoin-e-como-funciona">o que é Bitcoin e como funciona</a>.</p>

<h2>O que a mineração de Bitcoin faz, afinal</h2>
<p>O Bitcoin não tem um banco central conferindo as transações. Alguém precisa juntar os pagamentos que estão esperando na fila, a <a href="/glossario#mempool">mempool</a>, conferir se cada um é válido e gravar um novo <a href="/glossario#bloco">bloco</a> na blockchain. Esse trabalho é a <a href="/glossario#mineracao">mineração</a>, e quem faz é chamado de minerador.</p>
<p>O minerador que fecha um bloco recebe duas coisas: moedas novas, criadas naquele bloco, e as taxas pagas por quem enviou as transações. Desde abril de 2024, as moedas novas somam 3,125 BTC por bloco, valor que cai pela metade a cada 210 mil blocos, no <a href="/artigos/halving-do-bitcoin-o-que-e-e-quando-e-o-proximo">halving do Bitcoin</a>. Ou seja, a mineração é ao mesmo tempo o sistema de segurança da rede e a única forma de emitir bitcoins.</p>

<h2>Prova de trabalho: a loteria que protege a rede</h2>
<p>Para fechar um bloco, o minerador precisa achar um número que, misturado aos dados do bloco e passado pela função SHA-256, gere um resultado abaixo de um alvo definido pela rede. Não existe atalho: a única forma de achar é testar palpites, um atrás do outro, trilhões de vezes por segundo. Cada palpite é um hash, e o método todo se chama <a href="/glossario#prova-de-trabalho">prova de trabalho</a>.</p>
<p>Funciona como uma loteria em que cada hash é um bilhete. Quem tem mais máquinas compra mais bilhetes por segundo e ganha mais vezes, mas ninguém ganha sempre. Encontrar a resposta é caro; conferir é instantâneo. Qualquer nó da rede checa em milésimos de segundo se o bloco cumpre a regra, e rejeita na hora se não cumprir.</p>
<p>É esse custo que torna a fraude cara. Para reescrever blocos antigos, um atacante teria de refazer todo o trabalho deles e ainda superar o resto da rede somada. Outras redes seguiram caminho diferente: o Ethereum deixou a mineração em 2022 e passou a usar <a href="/glossario#prova-de-participacao">prova de participação</a>, como explica a página do <a href="/moedas/ethereum">Ethereum</a>.</p>

<h2>ASICs e pools: quem minera Bitcoin hoje</h2>
<h3>As máquinas: ASICs</h3>
<p>Nos primeiros anos, dava para minerar com o processador de um computador comum. Depois vieram as placas de vídeo e, por fim, os <a href="/glossario#asic">ASICs</a>, chips feitos para uma única tarefa: calcular hashes SHA-256 o mais rápido possível gastando o mínimo de energia. Hoje, minerar Bitcoin com computador ou celular não tem chance real de achar um bloco.</p>
<p>Um exemplo de máquina atual é a Antminer S21, da Bitmain. Na ficha divulgada no lançamento, em setembro de 2023, ela faz 200 TH/s (200 trilhões de hashes por segundo) consumindo 3.500 W, uma eficiência de 17,5 joules por terahash, segundo a <a href="https://hashrateindex.com/blog/what-is-the-antminer-s21-everything-to-know-about-bitmains-latest-asic-miner" rel="noopener noreferrer">ficha técnica publicada pelo Hashrate Index</a>. Essa eficiência é o número que mais importa: quanto menos energia por hash, mais tempo a máquina continua dando lucro.</p>
<p>Os ASICs também ficam velhos rápido. A cada geração nova, as máquinas antigas passam a gastar mais luz para produzir a mesma fração de bloco, e cada halving corta a receita pela metade de uma vez. É comum um modelo que dava lucro virar sucata em poucos anos.</p>

<h3>Os pools de mineração</h3>
<p>Uma máquina sozinha tem chance tão pequena de achar um bloco que poderia passar décadas sem ganhar nada. Por isso, quase todo mundo minera num <a href="/glossario#pool-de-mineracao">pool de mineração</a>: milhares de máquinas trabalham juntas, e quando qualquer uma acha um bloco, a recompensa é dividida conforme a contribuição de cada participante, descontada a comissão do pool.</p>
<p>O efeito colateral é a concentração. Em outubro de 2026, Foundry USA (cerca de 26% dos blocos), AntPool (cerca de 21%) e F2Pool (cerca de 16%) respondiam juntos por mais de 60% dos blocos, segundo o <a href="https://mempool.space/mining" rel="noopener noreferrer">painel de mineração da mempool.space</a>. Pool não é dono das máquinas, e os mineradores podem trocar de pool quando quiserem, mas a fatia grande de poucos nomes é um ponto de atenção permanente para a rede.</p>

<h2>Dificuldade: o ajuste a cada 2.016 blocos</h2>
<p>Se mais máquinas entram na rede, os blocos tenderiam a sair mais rápido. Para evitar isso, o Bitcoin recalcula a <a href="/glossario#dificuldade">dificuldade</a> a cada 2.016 blocos. A conta compara o tempo real que esses blocos levaram com o alvo de duas semanas, um bloco a cada 10 minutos, e deixa o alvo mais difícil ou mais fácil na mesma proporção, como descreve a <a href="https://en.bitcoin.it/wiki/Difficulty" rel="noopener noreferrer">página de dificuldade da Bitcoin Wiki</a>.</p>
<p>Em outubro de 2026, a dificuldade estava perto de 140,6 trilhões e o <a href="/glossario#hashrate">hashrate</a> da rede rondava 1.000 EH/s, cerca de 1 sextilhão de hashes por segundo, segundo a mempool.space. O ajuste anterior tinha subido perto de 6%, e o seguinte, previsto para o bloco 973.728, apontava nova alta entre 3% e 4%. Para o minerador, isso significa que a mesma máquina recebe uma fatia cada vez menor dos blocos conforme a rede cresce.</p>

<h2>Consumo de energia: o que dizem os números</h2>
<p>A prova de trabalho gasta energia de propósito, e muita. O Centro de Finanças Alternativas da Universidade de Cambridge estimou o consumo anual da mineração de Bitcoin em 138 TWh, perto de 0,54% de toda a eletricidade usada no mundo, no <a href="https://www.jbs.cam.ac.uk/faculty-research/centres/alternative-finance/publications/cambridge-digital-mining-industry-report/" rel="noopener noreferrer">relatório sobre a indústria de mineração digital publicado em 2025</a>.</p>
<p>O mesmo levantamento, feito com empresas que somavam quase metade do hashrate, encontrou 52,4% de energia de fontes sustentáveis: 42,6% renováveis e 9,8% nuclear. O gás natural, com 38,2%, era a maior fonte individual, e o carvão respondia por 8,9%. Os autores lembram que a amostra pesa mais nos Estados Unidos, então os números são uma estimativa, não uma medição exata.</p>
<p>Na prática, isso explica onde as grandes operações se instalam: perto de energia barata, sobrando ou difícil de vender, como hidrelétricas em época de cheia, parques eólicos e gás que seria queimado. O minerador industrial persegue o menor custo por quilowatt-hora, e é exatamente aí que o minerador doméstico perde.</p>

<h2>Vale a pena minerar Bitcoin em casa no Brasil?</h2>
<p>Para a maioria das pessoas, não. Veja a conta com uma Antminer S21 ligada o mês inteiro. Os números de consumo e de hashrate vêm das fontes citadas acima; a tarifa e o preço do bitcoin são <strong>hipotéticos</strong>, só para ilustrar.</p>
<table>
<thead><tr><th>Item</th><th>Conta</th><th>Resultado</th></tr></thead>
<tbody>
<tr><td>Consumo da máquina</td><td>3,5 kW x 24 h x 30 dias</td><td>2.520 kWh por mês</td></tr>
<tr><td>Conta de luz (tarifa hipotética de R$ 0,90 por kWh)</td><td>2.520 x R$ 0,90</td><td>R$ 2.268 por mês</td></tr>
<tr><td>Fatia da rede</td><td>200 TH/s de 1.000 EH/s</td><td>0,00002% dos blocos</td></tr>
<tr><td>Bitcoin produzido</td><td>4.320 blocos x 3,125 BTC x fatia</td><td>cerca de 0,0027 BTC por mês</td></tr>
<tr><td>Receita (1 BTC hipotético a R$ 500 mil)</td><td>0,0027 x R$ 500 mil</td><td>cerca de R$ 1.350 por mês</td></tr>
<tr><td>Saldo antes da comissão do pool</td><td>R$ 1.350 menos R$ 2.268</td><td>prejuízo perto de R$ 920 por mês</td></tr>
</tbody>
</table>
<p>Nessas condições, a luz só empataria com uma tarifa abaixo de R$ 0,54 por kWh, ou com o bitcoin valendo perto de R$ 840 mil. E a conta ainda ignora o preço da máquina, o frete e os impostos de importação, a comissão do pool e o fato de que a fatia encolhe toda vez que o hashrate da rede sobe. No halving de 2028, a produção cai pela metade de uma vez. Para refazer a conta com o valor real, veja o <a href="/bitcoin">preço do Bitcoin hoje</a> e o valor por kWh com impostos que aparece na sua conta de luz.</p>
<p>Também há o lado físico. Uma máquina dessas puxa, sem parar, o equivalente a um chuveiro elétrico de 5.500 W ligado mais de 15 horas por dia, esquenta o ambiente e faz barulho alto. Ela pede circuito elétrico dedicado, dimensionado por eletricista, e não combina com apartamento.</p>

<h2>Riscos e erros comuns de quem quer minerar</h2>
<ul class="checklist">
<li>Desconfie de "mineração em nuvem" com rendimento fixo diário: é um dos disfarces mais comuns de pirâmide, como mostra o guia de <a href="/artigos/golpes-com-criptomoedas-como-se-proteger">golpes com criptomoedas</a>.</li>
<li>Calcule a eficiência em joules por terahash antes de comprar máquina usada; modelo barato e antigo costuma dar prejuízo só na luz.</li>
<li>Nunca faça ligação clandestina de energia: além de crime, é risco real de incêndio com uma carga contínua desse tamanho.</li>
<li>Guarde notas e registros: o bitcoin minerado entra no patrimônio e pode ter efeito no imposto, como explica o guia de <a href="/artigos/como-declarar-bitcoin-no-imposto-de-renda">como declarar Bitcoin no Imposto de Renda</a>.</li>
<li>Lembre que o preço oscila muito: uma operação que fecha a conta hoje pode virar prejuízo em um mês de queda, e o <a href="/aviso-de-risco">aviso de risco</a> vale também para quem minera.</li>
</ul>
<div class="callout-box callout-tip"><span class="callout-label">Dica</span><p>Se o objetivo é só ter bitcoin, comprar frações pequenas costuma sair bem mais barato do que montar uma operação de mineração em casa. O passo a passo está no guia de <a href="/artigos/como-comprar-bitcoin-no-brasil-passo-a-passo">como comprar Bitcoin no Brasil</a>.</p></div>

<h2>Mineração, halving e o futuro da segurança da rede</h2>
<p>A mineração é o que mantém o Bitcoin de pé sem um dono: milhares de máquinas competindo, uma dificuldade que se recalibra sozinha e uma recompensa que encolhe de tempos em tempos. Com o subsídio caindo a cada quatro anos, as taxas de transação vão pesar cada vez mais na receita dos mineradores, e essa transição é um dos debates mais acompanhados do setor.</p>
<p>Para ver quanto falta para o próximo corte na recompensa e qual a data estimada, acompanhe a <a href="/ferramentas/halving">contagem regressiva do halving</a>, atualizada com a altura real do bloco.</p>`,
  faq: [
    {
      question: "Como funciona a mineração de Bitcoin?",
      answer:
        "Máquinas especializadas testam trilhões de palpites por segundo até achar um número que, passado pela função SHA-256 junto com os dados do bloco, fique abaixo de um alvo definido pela rede. Quem acha primeiro publica o bloco e recebe 3,125 BTC mais as taxas. Esse método se chama prova de trabalho e é o que protege o registro contra fraudes.",
    },
    {
      question: "Dá para minerar Bitcoin no celular ou no computador?",
      answer:
        "Na prática, não. Desde que os ASICs, chips feitos só para minerar, dominaram a rede, um computador comum ou um celular tem chance praticamente nula de achar um bloco e gasta mais em energia do que poderia render. Aplicativos que prometem mineração pelo celular costumam ser jogos de recompensa, golpes ou mineram outra coisa, não bitcoin.",
    },
    {
      question: "Minerar Bitcoin em casa no Brasil dá lucro?",
      answer:
        "Para a maioria das pessoas, não. Numa conta hipotética com uma Antminer S21, tarifa de R$ 0,90 por kWh e bitcoin a R$ 500 mil, a luz custa perto de R$ 2.268 por mês e a máquina produz cerca de R$ 1.350. Só compensa com energia muito barata, e mesmo assim a conta piora a cada aumento do hashrate e a cada halving.",
    },
    {
      question: "O que é o ajuste de dificuldade do Bitcoin?",
      answer:
        "É o recálculo automático feito a cada 2.016 blocos, cerca de duas semanas. A rede compara quanto tempo esses blocos levaram com o alvo de 10 minutos por bloco e deixa o quebra-cabeça mais difícil se eles saíram rápido demais, ou mais fácil se saíram devagar. Assim o ritmo de emissão continua estável, entre ou saia quanta máquina for.",
    },
    {
      question: "Quanta energia a mineração de Bitcoin consome?",
      answer:
        "O relatório de 2025 da Universidade de Cambridge estimou 138 TWh por ano, perto de 0,54% da eletricidade mundial. Nas empresas pesquisadas, 52,4% da energia vinha de fontes sustentáveis, somando renováveis e nuclear, e o gás natural era a maior fonte individual. Os autores tratam os números como estimativa, porque a amostra pesa mais nos Estados Unidos.",
    },
  ],
  quiz: [
    {
      question: "De quantos em quantos blocos a dificuldade do Bitcoin é recalculada?",
      options: ["A cada 144 blocos", "A cada 2.016 blocos", "A cada 210 mil blocos"],
      answer: 1,
      explanation: "O ajuste acontece a cada 2.016 blocos, cerca de duas semanas. O intervalo de 210 mil blocos é o do halving.",
    },
    {
      question: "Por que quase todo minerador participa de um pool?",
      options: ["Porque é obrigatório por lei", "Para receber pagamentos frequentes em vez de esperar anos por um bloco", "Para não pagar taxa de rede"],
      answer: 1,
      explanation: "Sozinha, uma máquina pode levar décadas para achar um bloco. No pool, a recompensa é dividida conforme o trabalho de cada um, e o pagamento chega com regularidade.",
    },
  ],
};

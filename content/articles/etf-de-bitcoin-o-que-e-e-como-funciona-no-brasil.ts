import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "etf-de-bitcoin-o-que-e-e-como-funciona-no-brasil",
  title: "ETF de bitcoin: o que é e como funciona no Brasil e nos EUA",
  seoTitle: "ETF de bitcoin: o que é e como funciona no Brasil",
  excerpt:
    "Entenda o que é um ETF de bitcoin, quais estão na B3, o que mudou com os ETFs à vista nos EUA, as taxas, o imposto e a diferença para comprar bitcoin direto.",
  metaDescription:
    "ETF de bitcoin explicado: como o fundo funciona, HASH11, BITH11, QBTC11 e outros da B3, o IBIT nos EUA, taxas, imposto de 15% e a diferença da autocustódia.",
  category: "mercado",
  date: "2026-10-22",
  readTime: 7,
  imageQuery: "stock exchange trading screens",
  seed: 23,
  kind: "guia",
  author: "Bruno Danello",
  keyPoints: [
    "Um ETF de bitcoin é um fundo negociado na bolsa que acompanha o preço do bitcoin: você compra cotas pelo home broker e não precisa cuidar de carteira nem de seed.",
    "Na B3 há opções como HASH11, BITH11, QBTC11, BITI11 e o BDR IBIT39, cada uma com índice, gestora e taxa próprios.",
    "Quem tem cota de ETF não tem bitcoin de verdade: não dá para sacar para uma carteira, o ganho paga 15% de imposto e há taxa de administração todo ano.",
  ],
  content: `<p>Um ETF de bitcoin é um fundo negociado na bolsa que acompanha o preço do bitcoin. Você compra cotas pelo home broker, como faria com uma ação, e a gestora cuida da exposição ao ativo e da guarda. No Brasil há ETFs de bitcoin listados na B3, e quem tem conta numa corretora no exterior também acessa os fundos americanos.</p>
<p>Neste guia você vai entender como esses fundos funcionam, o que mudou com a aprovação dos ETFs à vista nos Estados Unidos, quais opções existem na bolsa brasileira, como é a tributação e quando faz mais sentido comprar a moeda direto. A sigla e outros termos do mercado estão no <a href="/glossario#etf">glossário</a>.</p>

<h2>O que é um ETF de bitcoin e como ele funciona</h2>
<p>ETF vem de exchange traded fund, um fundo de índice negociado em bolsa. A gestora monta uma carteira que segue um índice, no caso o preço do bitcoin ou uma cesta de criptomoedas, e divide esse patrimônio em cotas. Quem compra a cota ganha ou perde conforme o índice sobe ou cai, descontadas as taxas.</p>
<p>A diferença central para quem compra bitcoin numa corretora de cripto é a propriedade. Com o ETF, você tem uma cota do fundo, não a moeda. Não existe endereço, chave privada nem seed para guardar, e também não dá para sacar o bitcoin para uma carteira própria ou usá-lo para pagar alguém.</p>
<p>Por isso o ETF agrada quem quer exposição ao preço sem lidar com a parte técnica, e desagrada quem vê no bitcoin justamente a chance de não depender de intermediário.</p>

<h2>A aprovação dos ETFs à vista nos Estados Unidos</h2>
<p>Em 10 de janeiro de 2024, a SEC, regulador do mercado de capitais americano, aprovou a listagem dos primeiros ETFs de bitcoin à vista, fundos que compram e guardam a moeda em vez de usar contratos futuros. O então presidente da SEC, Gary Gensler, fez questão de dizer na <a href="https://www.sec.gov/news/statement/gensler-statement-spot-bitcoin-011023" rel="noopener noreferrer">nota oficial da aprovação</a> que a comissão não aprovava nem endossava o bitcoin, que chamou de ativo especulativo e volátil.</p>
<p>O maior desses fundos é o IBIT, da BlackRock. A <a href="https://www.ishares.com/us/products/333011/ishares-bitcoin-trust-etf" rel="noopener noreferrer">página oficial do fundo</a> informa taxa de 0,25% ao ano e patrimônio de cerca de US$ 66,2 bilhões em 22 de outubro de 2026. Na segunda-feira, 19 de outubro, ele recebeu US$ 665 milhões em aplicações líquidas, a maior entrada num único dia desde 7 de outubro de 2025, segundo dados da SoSoValue citados pelo <a href="https://www.theblock.co/news/markets/2026-10-20-blackrock-ibit-bitcoin-etf-665-million-421102" rel="noopener noreferrer">The Block</a>.</p>
<p>O fluxo desses fundos virou um termômetro da demanda de grandes investidores, e o ciclo de 2024 foi o primeiro em que o bitcoin bateu recorde antes do halving, como mostra o guia sobre os <a href="/artigos/ciclos-do-bitcoin-o-que-os-halvings-mostram">ciclos do Bitcoin</a>. Entrada forte, porém, não garante alta: o preço depende de muitos outros fatores.</p>

<h2>ETFs de bitcoin e de cripto listados na B3</h2>
<p>A bolsa brasileira tem fundos de índice de cripto desde 2021. A tabela reúne os principais ligados ao bitcoin, todos com negócios na B3 em outubro de 2026. As taxas dos fundos da Hashdex vêm das páginas da gestora, como a do <a href="https://www.hashdex.com/pt-BR/products/hash11" rel="noopener noreferrer">HASH11</a>; para os demais, confira o regulamento antes de comprar.</p>
<table>
<thead><tr><th>Código</th><th>O que acompanha</th><th>Gestora</th><th>Taxa</th></tr></thead>
<tbody>
<tr><td>HASH11</td><td>Nasdaq CME Crypto Index, uma cesta de criptomoedas com bitcoin e outras</td><td>Hashdex</td><td>Administração de 0,3% ao ano, taxa máxima global de 1,3% ao ano</td></tr>
<tr><td>BITH11</td><td>Nasdaq Bitcoin Reference Price, só bitcoin</td><td>Hashdex</td><td>Taxa máxima global de 0,7% ao ano</td></tr>
<tr><td>QBTC11</td><td>CME CF Bitcoin Reference Rate, só bitcoin</td><td>QR Capital</td><td>Ver regulamento</td></tr>
<tr><td>BITI11</td><td>Bloomberg Galaxy Bitcoin Index, só bitcoin</td><td>Itaú Asset</td><td>Ver regulamento</td></tr>
<tr><td>IBIT39</td><td>BDR do IBIT, o ETF da BlackRock nos EUA</td><td>BlackRock (fundo de origem)</td><td>0,25% ao ano no IBIT, mais eventuais custos do BDR</td></tr>
</tbody>
</table>
<p>A mesma gestora também tem fundos de outras moedas, como ether (ETHE11), solana (SOLH11) e XRP (XRPH11). Antes de comprar um deles, vale entender o ativo por trás nas páginas de <a href="/moedas/ethereum">Ethereum</a>, <a href="/moedas/solana">Solana</a> e <a href="/moedas/xrp">XRP</a>. Como o bitcoin é cotado em dólar, a cota em reais sobe e desce com o preço da moeda e também com o câmbio.</p>

<h2>ETF, compra direta ou autocustódia: qual a diferença</h2>
<p>As três formas dão exposição ao preço do bitcoin, mas mudam quem guarda o ativo, quanto custa e o que você pode fazer com ele:</p>
<table>
<thead><tr><th>Ponto</th><th>ETF na B3</th><th>Compra em corretora de cripto</th><th>Autocustódia</th></tr></thead>
<tbody>
<tr><td>Onde compra</td><td>Home broker da corretora de valores</td><td>App da corretora, com Pix</td><td>Compra na corretora e envia para a sua carteira</td></tr>
<tr><td>Horário</td><td>Só no pregão, em dias úteis</td><td>24 horas, todos os dias</td><td>24 horas, todos os dias</td></tr>
<tr><td>Quem guarda</td><td>Custodiante do fundo</td><td>A corretora</td><td>Você, com a seed phrase</td></tr>
<tr><td>Custo recorrente</td><td>Taxa de administração anual</td><td>Spread e taxas por operação</td><td>Taxa de rede ao enviar</td></tr>
<tr><td>Pode sacar bitcoin?</td><td>Não</td><td>Sim</td><td>Já está com você</td></tr>
<tr><td>Imposto na venda</td><td>15% sobre o ganho, sem isenção mensal</td><td>Isento até R$ 35 mil vendidos por mês em corretora no Brasil</td><td>Segue a regra da cripto comprada direto</td></tr>
</tbody>
</table>
<p>Quem quer o bitcoin em si costuma preferir a compra direta, explicada no guia de <a href="/artigos/como-comprar-bitcoin-no-brasil-passo-a-passo">como comprar bitcoin no Brasil</a>, e depois a guarda própria, tema de <a href="/artigos/autocustodia-not-your-keys-not-your-coins">autocustódia</a>. O ETF faz mais sentido para quem já investe na bolsa e quer tudo no mesmo extrato.</p>

<h2>Como comprar um ETF de bitcoin no Brasil</h2>
<p>O caminho é o mesmo de qualquer ação ou fundo listado:</p>
<ol>
<li>Abra conta numa corretora de valores, aquela em que você investe na bolsa, e transfira os reais.</li>
<li>No home broker, procure o código do fundo, como BITH11 ou QBTC11, e confira o nome completo antes de seguir.</li>
<li>Prefira uma <a href="/glossario#ordem-limite">ordem limitada</a>, com o preço máximo que aceita pagar, porque alguns fundos têm poucos negócios por dia.</li>
<li>Acompanhe o valor da cota no próprio app e guarde as notas de corretagem para a declaração.</li>
</ol>
<p>Dá para comprar uma cota por vez, o que torna o ETF acessível para valores pequenos. Se a ideia é aplicar todo mês, a lógica do aporte regular está no guia de <a href="/artigos/dca-em-bitcoin-como-investir-todo-mes">DCA em bitcoin</a>.</p>

<h2>Tributação do ETF de bitcoin em linhas gerais</h2>
<p>Cotas de ETF seguem a tributação de renda variável. Segundo a Hashdex, em geral incide imposto de 15% sobre o ganho de capital, recolhido pelo próprio investidor por DARF até o último dia útil do mês seguinte à venda, sem come-cotas e sem IOF. A isenção para vendas de até R$ 35 mil por mês, que vale para quem vende cripto diretamente, não se aplica às cotas do fundo.</p>
<p>Quem compra ETFs nos Estados Unidos por uma corretora estrangeira entra na regra das aplicações no exterior da Lei 14.754/2023, com 15% sobre os ganhos na declaração anual. Os detalhes de cada caso estão em <a href="/artigos/imposto-sobre-criptomoedas-no-brasil-quanto-se-paga">imposto sobre criptomoedas no Brasil</a> e em <a href="/artigos/como-declarar-bitcoin-no-imposto-de-renda">como declarar bitcoin no Imposto de Renda</a>. Este texto é informativo, e um contador ajuda a evitar erro.</p>

<h2>Riscos e cuidados antes de comprar um ETF de bitcoin</h2>
<p>O ETF tira a preocupação com a seed, mas não tira o risco de preço. A cota cai junto com o bitcoin, que já perdeu mais de 70% do valor em alguns ciclos, e nenhum fundo protege contra isso. Leia o <a href="/aviso-de-risco">aviso de risco</a> antes de decidir quanto expor.</p>
<ul class="checklist">
<li>Compare a taxa total: 1% ao ano parece pouco, mas é descontado todo ano, com o mercado em alta ou em baixa.</li>
<li>Olhe o volume diário e o <a href="/glossario#spread">spread</a> entre compra e venda, maiores em fundos pouco negociados.</li>
<li>Lembre que a B3 fecha no fim de semana, enquanto o bitcoin negocia sem parar: a cota pode abrir na segunda bem diferente de sexta.</li>
<li>Confira se o fundo segue só o bitcoin ou uma cesta com outras moedas, que muda o risco.</li>
</ul>
<div class="callout-box callout-bad"><span class="callout-label">Nunca faça</span><p>Não aplique em "fundo de bitcoin" oferecido por mensagem com rendimento garantido. ETF de verdade é comprado no home broker pelo código na B3, e promessa de lucro fixo é sinal clássico de <a href="/artigos/golpes-com-criptomoedas-como-se-proteger">golpe com criptomoedas</a>.</p></div>

<h2>ETF ou bitcoin direto: por onde começar</h2>
<p>Não existe resposta única. O ETF simplifica a vida de quem já investe na bolsa, enquanto a compra direta dá a moeda de verdade, com a opção de guardá-la numa carteira própria. Se for por esse caminho, o guia de <a href="/artigos/carteira-de-bitcoin-qual-escolher">qual carteira de Bitcoin escolher</a> mostra as opções.</p>
<p>Seja qual for a escolha, comece entendendo o ativo e acompanhando o seu comportamento por um tempo. A cotação ao vivo, o gráfico e os dados da rede ficam na página de <a href="/bitcoin">preço do Bitcoin hoje</a>.</p>`,
  faq: [
    {
      question: "O que é ETF de bitcoin?",
      answer:
        "É um fundo de índice negociado na bolsa que acompanha o preço do bitcoin. Você compra cotas pelo home broker, como uma ação, e a gestora cuida da exposição e da guarda. Quem tem a cota ganha ou perde com o preço, descontadas as taxas, mas não é dono da moeda e não pode sacá-la para uma carteira.",
    },
    {
      question: "Quais ETFs de bitcoin existem na B3?",
      answer:
        "Entre os principais estão o BITH11, da Hashdex, o QBTC11, da QR Capital, e o BITI11, da Itaú Asset, que seguem só o bitcoin, além do HASH11, da Hashdex, que segue uma cesta de criptomoedas. Há também o IBIT39, um BDR do IBIT, o ETF da BlackRock nos EUA. Confira taxa e regulamento de cada um antes de comprar.",
    },
    {
      question: "Quanto se paga de imposto em ETF de bitcoin?",
      answer:
        "Em linhas gerais, o ganho na venda de cotas de ETF na B3 paga 15% de Imposto de Renda, recolhido pelo próprio investidor por DARF até o último dia útil do mês seguinte. A isenção de vendas até R$ 35 mil por mês, que vale para cripto comprada direto, não se aplica ao ETF. Em caso de dúvida, consulte um contador.",
    },
    {
      question: "ETF de bitcoin é mais seguro que comprar bitcoin?",
      answer:
        "Ele elimina riscos operacionais, como perder a seed ou enviar para o endereço errado, e a guarda fica com um custodiante profissional. O risco de preço é o mesmo: se o bitcoin cair 50%, a cota cai junto. Em troca da praticidade, você paga taxa todo ano e não tem a moeda de verdade.",
    },
    {
      question: "Quando os ETFs de bitcoin foram aprovados nos Estados Unidos?",
      answer:
        "A SEC aprovou os primeiros ETFs de bitcoin à vista em 10 de janeiro de 2024, e as negociações começaram logo depois. O presidente da SEC na época, Gary Gensler, disse que a aprovação não significava endosso ao bitcoin. O maior desses fundos é o IBIT, da BlackRock, com taxa de 0,25% ao ano.",
    },
  ],
};

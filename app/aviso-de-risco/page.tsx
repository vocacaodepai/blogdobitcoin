import type { Metadata } from "next";
import Link from "next/link";
import { InstitutionalPage, institutionalMetadata } from "@/components/InstitutionalPage";
import { site } from "@/lib/articles";
import { author } from "@/lib/author";

const PATH = "/aviso-de-risco";
const TITLE = "Aviso de Risco";
const DESCRIPTION =
  "Criptomoedas são voláteis e você pode perder tudo. Riscos de golpe, de corretora, de autocustódia e de impostos, e o que checar antes de comprar bitcoin.";

export const metadata: Metadata = institutionalMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

export default function AvisoDeRiscoPage() {
  return (
    <InstitutionalPage
      label="Institucional"
      title={TITLE}
      lead={`Bitcoin e outras criptomoedas podem subir muito e cair muito. Esta página reúne, sem rodeio, os riscos que você assume ao comprar, guardar ou negociar criptomoedas, e o que checar antes de colocar qualquer dinheiro. Ela vale para tudo o que o ${site.name} publica.`}
      path={PATH}
    >
      <h2 id="nao-e-recomendacao">1. Nada aqui é recomendação de investimento</h2>
      <p>
        O {site.name} é um site informativo e educativo. Artigos, notícias, páginas de moedas,
        reviews e ferramentas explicam como as coisas funcionam. Eles não dizem o que você deve
        comprar, vender ou manter. Quando um texto cita uma moeda, uma corretora ou uma estratégia, é
        para explicar o assunto, não para indicar.
      </p>
      <p>
        O site não é corretora, não guarda moedas de ninguém, não faz gestão de recursos e não presta
        consultoria financeira, jurídica ou tributária. Também não tem link de indicação de corretora
        nem recebe de projetos cripto para falar bem deles, como explicado em{" "}
        <Link href="/publicidade-e-afiliados">publicidade e afiliados</Link>. Anúncios do Google podem
        mostrar corretoras ou produtos financeiros. Anúncio não é indicação. As regras gerais de uso
        estão nos <Link href="/termos-de-uso">termos de uso</Link>.
      </p>

      <h2 id="volatilidade">2. O preço pode cair muito e por muito tempo</h2>
      <p>
        O bitcoin oscila bem mais que ações, imóveis ou renda fixa. Variações de mais de 10% em um
        único dia já aconteceram várias vezes. E o histórico mostra quedas longas e profundas: do topo
        ao fundo, o bitcoin perdeu mais de 70% do valor em pelo menos três ciclos, entre o fim de 2013
        e o começo de 2015, ao longo de 2018 e entre o fim de 2021 e o fim de 2022. Em cada um deles, quem comprou perto do topo esperou mais
        de dois anos para ver o preço voltar ao que tinha pago.
      </p>
      <p>
        Com as outras moedas o risco costuma ser ainda maior. Muitas que já estiveram entre as maiores
        do <Link href="/mercado">ranking</Link> perderam quase todo o valor ou deixaram de existir. A
        Terra (LUNA), por exemplo, derreteu em poucos dias em maio de 2022. Desempenho passado não
        garante nada sobre o futuro, nem para cima nem para baixo.
      </p>
      <p>
        O <Link href="/ferramentas/medo-e-ganancia">índice de medo e ganância</Link> ajuda a ver o
        humor do mercado, mas não prevê preço. Para uma visão completa dos prós e contras, leia{" "}
        <Link href="/artigos/bitcoin-vale-a-pena-riscos-antes-de-investir">
          bitcoin vale a pena? Os riscos antes de investir
        </Link>
        .
      </p>

      <h2 id="perda-total">3. Você pode perder tudo o que colocou</h2>
      <p>
        Criptomoeda não tem garantia de valor mínimo. Não existe Fundo Garantidor de Créditos (FGC)
        para cripto, e transação enviada não tem estorno. Na prática, o dinheiro pode sumir por vários
        caminhos:
      </p>
      <ul>
        <li>queda de preço, que em moedas menores pode chegar perto de zero;</li>
        <li>golpe, um dos caminhos mais comuns;</li>
        <li>quebra, invasão ou bloqueio da corretora onde as moedas estão;</li>
        <li>perda da frase de recuperação (seed) ou do aparelho da carteira;</li>
        <li>envio para o endereço errado ou pela rede errada;</li>
        <li>operações alavancadas, com margem ou derivativos, que podem zerar a posição em minutos.</li>
      </ul>

      <h2 id="golpes">4. Golpes estão entre os riscos mais comuns</h2>
      <p>
        O golpe quase sempre chega com uma promessa boa demais ou com pressa. Os mais frequentes no
        Brasil seguem alguns padrões:
      </p>
      <ul>
        <li>rendimento garantido, fixo ou &quot;sem risco&quot;, que costuma esconder uma pirâmide;</li>
        <li>falso suporte de corretora ou de carteira que pede a sua seed ou acesso remoto ao celular;</li>
        <li>site ou aplicativo clonado, com endereço quase igual ao oficial;</li>
        <li>&quot;mentor&quot; ou &quot;gerente de investimentos&quot; em grupo de WhatsApp, Telegram ou rede social;</li>
        <li>perfil falso de famoso ou de empresa prometendo dobrar o que você enviar;</li>
        <li>contato romântico ou amizade online que, depois de semanas, apresenta uma &quot;oportunidade&quot;.</li>
      </ul>
      <p>
        Regra simples: ninguém de verdade precisa da sua seed. O {site.name} não tem conta nem login e
        nunca pede seed, chave privada, senha ou transferência de dinheiro. Veja os sinais de alerta e
        o que fazer se cair em um golpe no guia{" "}
        <Link href="/artigos/golpes-com-criptomoedas-como-se-proteger">
          golpes com criptomoedas: como se proteger
        </Link>
        .
      </p>

      <h2 id="corretoras">5. Risco de corretora</h2>
      <p>
        Moeda deixada na corretora depende da saúde e da honestidade dela. Isso já deu muito errado. Em
        2014, a Mt. Gox, que já tinha sido a maior corretora de bitcoin do mundo, travou os saques e
        quebrou depois de perder centenas de milhares de bitcoins de clientes. Os credores esperaram
        cerca de dez anos para começar a receber parte de volta. Em novembro de 2022, a FTX, uma das
        maiores corretoras do mundo, travou os saques e pediu recuperação judicial em poucos dias. O fundador
        depois foi condenado por fraude nos Estados Unidos.
      </p>
      <p>
        Além da quebra, uma corretora pode ser invadida, bloquear a sua conta, sair do ar no pior
        momento ou mudar taxas e regras. Para reduzir o risco: confira se a empresa atua de forma
        regular no Brasil, entre sempre pelo endereço oficial, ative a verificação em duas etapas e
        não deixe parado nela um valor que você não aguentaria perder.
      </p>

      <h2 id="autocustodia">6. Risco de autocustódia</h2>
      <p>
        Guardar as moedas na sua própria carteira tira o risco da corretora, mas passa toda a
        responsabilidade para você. Em geral, a carteira gera uma frase de recuperação de 12 ou 24
        palavras, a seed. Ela é a chave de tudo, e não existe central de atendimento para recuperá-la.
      </p>
      <ul>
        <li>perdeu a seed e o aparelho ao mesmo tempo: as moedas ficam inacessíveis para sempre;</li>
        <li>alguém viu ou fotografou a seed: pode levar tudo, de qualquer lugar do mundo;</li>
        <li>guardou a seed em foto, e-mail ou nuvem: ela fica exposta a qualquer invasão da conta;</li>
        <li>comprou carteira física de vendedor não oficial ou com seed já anotada na caixa: pode ser fraude;</li>
        <li>ninguém da família sabe que as moedas existem ou como acessá-las: a herança se perde.</li>
      </ul>
      <p>
        Antes de mandar um valor alto para a própria carteira, leia{" "}
        <Link href="/artigos/seed-phrase-como-guardar-as-palavras-de-recuperacao">
          seed phrase: como guardar as palavras de recuperação
        </Link>{" "}
        e faça um teste com um valor pequeno.
      </p>

      <h2 id="regulacao-e-impostos">7. Regulação e impostos</h2>
      <p>
        No Brasil, o marco legal das criptomoedas (Lei 14.478/2022) criou regras para as empresas que
        prestam serviços com ativos virtuais, e o Banco Central ficou responsável por regulá-las. Essas
        regras seguem em evolução.
        Em outros países, governos já restringiram ou proibiram corretoras e operações. Uma mudança de
        regra pode afetar o preço, o acesso a uma corretora ou a forma de sacar o seu dinheiro.
      </p>
      <p>
        A Receita Federal exige que criptomoedas sejam informadas na declaração do Imposto de Renda a
        partir de certo valor, e o lucro na venda pode pagar imposto. Dependendo do valor e de onde você opera, também pode haver
        obrigação de informar as operações à Receita ao longo do ano. Esquecer disso pode gerar multa.
        Guarde os comprovantes de cada compra e venda e leia{" "}
        <Link href="/artigos/imposto-sobre-criptomoedas-no-brasil-quanto-se-paga">
          imposto sobre criptomoedas no Brasil: quanto se paga
        </Link>
        . O artigo é um guia geral e não substitui um contador que conheça o seu caso.
      </p>

      <h2 id="cotacoes-e-simulacoes">8. Cotações e simulações são só informativas</h2>
      <p>
        Os preços da página do <Link href="/bitcoin">preço do Bitcoin hoje</Link>, do{" "}
        <Link href="/mercado">mercado</Link> e das páginas de moedas vêm de fontes públicas, como
        Binance, Mercado Bitcoin, Kraken, Coinbase e CoinPaprika. Eles podem chegar com atraso, sair do
        ar ou divergir do preço da sua corretora, que tem taxas e spread próprios. O preço que vale
        para uma operação é sempre o da plataforma onde você negocia, na hora da negociação.
      </p>
      <p>
        O conversor, a calculadora de aportes (DCA), o &quot;se eu tivesse investido&quot; e as
        demais <Link href="/ferramentas">ferramentas</Link> fazem contas com dados históricos ou
        estimativas. O resultado é uma simulação. Não inclui todas as taxas e impostos e não diz nada
        sobre o que vai acontecer daqui para frente.
      </p>

      <h2 id="checklist">9. Checklist antes de comprar</h2>
      <p>Antes de colocar dinheiro em qualquer criptomoeda, confira se você consegue marcar tudo isto:</p>
      <ul>
        <li>entendo o que estou comprando e por quê, sem depender de dica de terceiros;</li>
        <li>já tenho reserva de emergência fora de cripto e não tenho dívida cara em aberto;</li>
        <li>o valor que vou colocar pode ir a zero sem afetar contas, aluguel ou comida;</li>
        <li>aguento ver esse valor cair pela metade sem vender no desespero;</li>
        <li>conferi que a corretora atua de forma regular no Brasil e estou no site ou app oficial;</li>
        <li>ativei a verificação em duas etapas, de preferência por aplicativo e não por SMS;</li>
        <li>decidi onde vou guardar e, se for carteira própria, anotei a seed no papel, em local seguro;</li>
        <li>vou fazer um primeiro envio pequeno, de teste, antes de mandar um valor maior;</li>
        <li>desconfio de qualquer promessa de rendimento garantido e de qualquer pedido de seed;</li>
        <li>sei como funciona a declaração no Imposto de Renda e vou guardar os comprovantes;</li>
        <li>
          não estou comprando no impulso, nem por medo de ficar de fora. O{" "}
          <Link href="/ferramentas/medo-e-ganancia">índice de medo e ganância</Link> mostra o humor do
          mercado, não o preço futuro.
        </li>
      </ul>

      <h2 id="ajuda-profissional">10. Invista só o que pode perder e procure ajuda profissional</h2>
      <p>
        A regra mais útil é também a mais simples: só coloque em cripto o dinheiro que você pode perder
        inteiro. Nunca use reserva de emergência, dinheiro de contas do mês ou dinheiro emprestado.
        Se decidir comprar, comece pequeno e só aumente depois de entender como comprar, guardar e
        vender.
      </p>
      <p>
        Para decisões de valor alto, procure um profissional certificado: um consultor de valores
        mobiliários autorizado pela CVM ou um planejador financeiro com certificação reconhecida, e um
        contador para a parte de impostos. Desconfie de quem promete resultado ou ganha comissão sobre
        o investimento que indica. As decisões que você tomar, e as consequências delas, são suas.
      </p>

      <h2 id="contato">11. Dúvidas</h2>
      <p>
        Encontrou um erro ou quer sugerir um risco que falta nesta página? Escreva para{" "}
        <a href={`mailto:${author.email}`}>{author.email}</a> ou use a página de{" "}
        <Link href="/contato">contato</Link>. O texto é revisado por{" "}
        <Link href={author.url}>{author.name}</Link>, editor do {site.name}, e segue a{" "}
        <Link href="/politica-editorial">política editorial</Link>.
      </p>
    </InstitutionalPage>
  );
}

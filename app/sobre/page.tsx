import type { Metadata } from "next";
import Link from "next/link";
import { AuthorAvatar } from "@/components/article/AuthorAvatar";
import { InstitutionalPage, institutionalMetadata } from "@/components/InstitutionalPage";
import { categories, site } from "@/lib/articles";
import { author } from "@/lib/author";

const PATH = "/sobre";
const TITLE = "Sobre o Blog do Bitcoin";
const DESCRIPTION =
  "O Blog do Bitcoin é um hub brasileiro sobre Bitcoin e criptomoedas, editado por Bruno Danello: cotação ao vivo, ferramentas, notícias e guias sem promessa.";

export const metadata: Metadata = institutionalMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

export default function SobrePage() {
  return (
    <InstitutionalPage
      label="Institucional"
      title={TITLE}
      lead="Um hub brasileiro sobre Bitcoin e criptomoedas, em português claro, para quem quer entender como funciona, acompanhar o mercado e se proteger dos riscos sem cair em promessa de lucro."
      path={PATH}
      type="AboutPage"
    >
      <div className="mb-8 flex items-center gap-4 rounded-xl border border-border bg-surface p-5">
        <AuthorAvatar name={author.name} size="lg" />
        <div>
          <p className="font-display text-lg font-semibold leading-tight">{author.name}</p>
          <p className="mt-0.5 text-sm text-muted">Editor do {site.name}</p>
        </div>
      </div>

      <h2 id="o-que-e">O que é o Blog do Bitcoin</h2>
      <p>
        Meu nome é <Link href={author.url}>{author.name}</Link>. Eu edito o {site.name} e também
        criei o projeto Vocação de Pai. Este site reúne num lugar só o que um brasileiro precisa
        para entender Bitcoin e criptomoedas: a cotação em reais, ferramentas de cálculo, notícias
        do dia, guias para iniciantes e a história de como tudo começou.
      </p>
      <p>
        A ideia é simples. Explicar sem jargão, mostrar os números como eles são e falar dos riscos
        com a mesma clareza com que se fala das oportunidades. Cripto tem muito ruído e muita
        promessa. Aqui o objetivo é o contrário: informação para você decidir por conta própria.
      </p>

      <h2 id="para-quem">Para quem é</h2>
      <p>
        Para quem está começando e quer saber o que é Bitcoin antes de colocar qualquer real nele.
        Para quem já tem cripto e quer acompanhar o preço, entender o halving ou guardar as moedas
        com mais segurança. E para quem só quer saber do que todo mundo está falando. As categorias
        de artigos refletem isso:
      </p>
      <ul>
        {categories.map((c) => (
          <li key={c.slug}>
            <Link href={`/categoria/${c.slug}`}>{c.label}</Link>: {c.description}
          </li>
        ))}
      </ul>

      <h2 id="o-que-tem-no-site">O que tem no site</h2>
      <ul>
        <li>
          <Link href="/bitcoin">Bitcoin</Link>: preço ao vivo atualizado a cada 10 segundos,
          gráfico, contagem para o halving, dados da rede e o índice de medo e ganância.
        </li>
        <li>
          <Link href="/mercado">Mercado</Link>: o ranking das maiores criptomoedas com preço em
          reais, a visão em <Link href="/mercado/bolhas">bolhas</Link> e uma página para cada
          moeda.
        </li>
        <li>
          <Link href="/ferramentas">Ferramentas</Link>: conversor, calculadora de DCA, &quot;se eu
          tivesse investido&quot;, contagem do halving e medo e ganância.
        </li>
        <li>
          <Link href="/noticias">Notícias</Link> e <Link href="/artigos">artigos</Link>: o que
          aconteceu no mercado, explicado para o leitor brasileiro, e guias que continuam úteis
          depois da notícia passar.
        </li>
        <li>
          <Link href="/historia">História</Link>: linha do tempo, curiosidades e as Memórias do
          Bitcoin, com os fatos que marcaram a moeda desde o whitepaper de Satoshi Nakamoto, em
          2008.
        </li>
        <li>
          <Link href="/glossario">Glossário</Link>: os termos de cripto explicados em uma ou duas
          frases.
        </li>
        <li>
          <Link href="/loja">Loja do Bitcoin</Link>: vitrine de produtos vendidos na Amazon, como
          carteiras de hardware, placas de backup da seed, livros e camisetas, cada um com review
          longa e nota de 0 a 10. Em <Link href="/categoria/cripto-indica">Cripto Indica</Link>{" "}
          ficam os reviews e os comparativos desses produtos.
        </li>
      </ul>

      <h2 id="de-onde-vem-os-dados">De onde vêm os dados</h2>
      <p>
        As cotações e os dados da rede vêm de APIs públicas: Binance, Mercado Bitcoin, Kraken,
        Coinbase, CoinPaprika, mempool.space e alternative.me (medo e ganância). No histórico de
        preços entram também blockchain.com e a PTAX do Banco Central.
      </p>
      <p>
        Essas consultas são feitas pelo seu navegador e pelo servidor do site. Elas não recebem
        nenhum dado seu além do que qualquer acesso a um site envia, como IP e navegador. O site
        não tem conta nem login.
      </p>
      <p>
        A cotação mostrada aqui é informativa. Ela pode ter atraso ou diferir do preço da corretora
        onde você opera. Para comprar ou vender, vale sempre o preço da sua corretora.
      </p>

      <h2 id="como-o-conteudo-e-feito">Como o conteúdo é feito</h2>
      <p>
        O site é produzido com apoio de ferramentas de IA e de rotinas automáticas. Elas ajudam a
        pesquisar, organizar as informações e escrever o primeiro rascunho. Parte da publicação é
        automática: rotinas diárias preparam artigos e resumos de notícias a partir de fontes
        definidas. A escolha dos temas, as regras que essas rotinas seguem, a checagem das fontes e
        a revisão são minhas. Cada texto sai com a minha assinatura porque eu respondo por ele.
      </p>
      <p>
        Notícias apontam para a fonte original. Quando um texto é corrigido ou ampliado, ele ganha
        a data de atualização. Os detalhes estão na{" "}
        <Link href="/politica-editorial">política editorial</Link>.
      </p>

      <h2 id="independencia">Independência</h2>
      <p>
        O {site.name} não pertence a nenhuma corretora, exchange ou projeto de criptomoeda. Nenhuma
        moeda paga para aparecer em texto, ranking ou cotação. A ordem do{" "}
        <Link href="/mercado">mercado</Link> segue o valor de mercado informado pelas APIs, não
        acordo comercial.
      </p>
      <p>
        O acesso é gratuito. A receita vem de anúncios do Google AdSense e do Programa de
        Associados da Amazon: quando você compra um produto por um link da loja ou de um review, o
        site pode receber uma comissão, sem custo a mais para você. Anúncio e comissão não mudam
        pauta, nota ou opinião. Eu explico tudo em{" "}
        <Link href="/publicidade-e-afiliados">publicidade e afiliados</Link>.
      </p>

      <h2 id="como-falo-de-dinheiro">Como eu falo de dinheiro</h2>
      <ul>
        <li>
          Nada aqui é recomendação de investimento. Os textos explicam como as coisas funcionam e
          quais são os riscos. A decisão é sua.
        </li>
        <li>
          Não prometo lucro, valorização nem &quot;a próxima moeda que vai explodir&quot;. Preço
          passado não garante preço futuro.
        </li>
        <li>
          As calculadoras mostram simulações com dados históricos. Elas servem para entender, não
          para prever.
        </li>
        <li>Não vendo curso, assinatura nem grupo pago de sinais.</li>
        <li>Não publico conteúdo pago disfarçado de artigo ou de review.</li>
      </ul>
      <p>
        Cripto é um ativo volátil e você pode perder dinheiro. Antes de investir, leia o{" "}
        <Link href="/aviso-de-risco">aviso de risco</Link>.
      </p>

      <h2 id="como-falar-comigo">Como falar comigo</h2>
      <p>
        Encontrou um erro, tem uma sugestão de pauta ou quer propor uma parceria? Escreva para{" "}
        <a href={`mailto:${author.email}`}>{author.email}</a> ou use o formulário da página de{" "}
        <Link href="/contato">contato</Link>, que também explica o que mandar em cada caso.
      </p>
      <p>
        Para saber como o site trata seus dados, veja a{" "}
        <Link href="/politica-de-privacidade">política de privacidade</Link> e os{" "}
        <Link href="/termos-de-uso">termos de uso</Link>.
      </p>
    </InstitutionalPage>
  );
}

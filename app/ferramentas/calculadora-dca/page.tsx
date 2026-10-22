import Link from "next/link";
import { ToolPage, toolMetadata, type ToolMeta } from "@/components/ToolPage";
import { DcaCalculator } from "@/components/tools/DcaCalculator";
import { getBtcQuoteServer } from "@/lib/market/bitcoin";
import { getBtcHistory } from "@/lib/market/history-server";

export const revalidate = 300;

const TOOL: ToolMeta = {
  path: "/ferramentas/calculadora-dca",
  name: "Calculadora DCA de bitcoin",
  seoTitle: "Calculadora DCA de bitcoin: simule aporte mensal",
  description:
    "Simule quanto teria hoje investindo um valor fixo em bitcoin todo mês, desde 2010: total investido, BTC acumulado, preço médio e valor ao vivo.",
};

export const metadata = toolMetadata(TOOL);

const FAQ = [
  {
    question: "O que é DCA em bitcoin?",
    answer:
      "DCA (dollar cost averaging, ou preço médio) é comprar o mesmo valor em intervalos fixos, como R$ 200 todo mês, sem tentar acertar o melhor dia. Assim você compra mais satoshis quando o preço cai e menos quando sobe, e o preço médio fica entre os extremos.",
  },
  {
    question: "Como a calculadora faz a simulação?",
    answer:
      "Ela compra o valor escolhido no fechamento de cada mês, com o preço médio de mercado em dólar (blockchain.com) convertido pelo dólar PTAX do Banco Central, e soma o bitcoin acumulado. O valor de hoje usa a cotação ao vivo. Não entram taxas, spread nem imposto.",
  },
  {
    question: "DCA garante lucro?",
    answer:
      "Não. O DCA reduz o risco de comprar tudo no pior momento, mas se o preço ficar abaixo do seu preço médio, você terá prejuízo. Em períodos curtos, principalmente perto de topos como 2017 e 2021, simulações mostram perdas por anos. Resultado passado não garante resultado futuro.",
  },
  {
    question: "Preciso declarar o bitcoin comprado aos poucos?",
    answer:
      "Sim, quem tem cripto precisa seguir as regras da Receita Federal, com custo de aquisição somado compra a compra. O guia de declaração no Imposto de Renda do Blog do Bitcoin explica a ficha de bens e direitos e o ganho de capital.",
  },
];

export default async function Page() {
  const quote = await getBtcQuoteServer();
  const { rows } = getBtcHistory();
  return (
    <ToolPage
      tool={TOOL}
      intro="Escolha o valor mensal, o mês do primeiro aporte e o último. A calculadora mostra o total investido, o bitcoin acumulado e quanto ele vale hoje."
      faq={FAQ}
      article={
        <>
          <h2>Como usar a calculadora DCA</h2>
          <p>
            Comece com um valor que caberia no seu orçamento todo mês e mude a data inicial para ver ciclos diferentes do
            mercado. Simular começando perto de um topo (dezembro de 2017 ou novembro de 2021) mostra o lado ruim; começar
            perto de um fundo, o lado bom. A verdade costuma estar no meio, e é por isso que o horizonte longo importa.
          </p>
          <p>
            O guia <Link href="/artigos/dca-em-bitcoin-como-investir-todo-mes">DCA em bitcoin</Link> explica a estratégia em
            detalhe, e a ferramenta <Link href="/ferramentas/se-eu-tivesse-investido">se eu tivesse investido</Link> faz a conta
            para um aporte único. Antes de qualquer decisão, leia o <Link href="/aviso-de-risco">aviso de risco</Link>.
          </p>
        </>
      }
    >
      <DcaCalculator history={rows} initialQuote={quote} />
    </ToolPage>
  );
}

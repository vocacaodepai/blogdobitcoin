import Link from "next/link";
import { ToolPage, toolMetadata, type ToolMeta } from "@/components/ToolPage";
import { LumpSumCalculator } from "@/components/tools/LumpSumCalculator";
import { getBtcQuoteServer } from "@/lib/market/bitcoin";
import { getBtcHistory } from "@/lib/market/history-server";

export const revalidate = 300;

const TOOL: ToolMeta = {
  path: "/ferramentas/se-eu-tivesse-investido",
  name: "Se eu tivesse investido em bitcoin",
  seoTitle: "Se eu tivesse investido em bitcoin: quanto teria hoje?",
  description:
    "Descubra quanto valeria hoje um valor em reais investido em bitcoin em qualquer mês desde 2010, comparado com o mesmo dinheiro guardado em dólar.",
};

export const metadata = toolMetadata(TOOL);

const FAQ = [
  {
    question: "Quanto valeriam hoje R$ 100 investidos em bitcoin em 2015?",
    answer:
      "A tabela da página mostra a conta para janeiro de cada ano desde 2011, com a cotação ao vivo. Como o preço muda a cada segundo, o resultado também muda; use a calculadora para escolher o mês exato e o valor que quiser.",
  },
  {
    question: "Por que comparar com o dólar?",
    answer:
      "Porque guardar dólar é a forma mais comum de o brasileiro se proteger da inflação e do câmbio. A comparação mostra quanto do resultado veio do bitcoin em si e quanto veio só da alta do dólar contra o real no mesmo período.",
  },
  {
    question: "A simulação considera impostos e taxas?",
    answer:
      "Não. É uma conta simples com o preço de fechamento do mês (blockchain.com e dólar PTAX do Banco Central) e a cotação de agora. Na vida real entram spread, taxas da corretora e o imposto sobre o ganho de capital na venda.",
  },
  {
    question: "Isso quer dizer que vale a pena comprar agora?",
    answer:
      "Não necessariamente. Olhar para trás mostra o que aconteceu, não o que vai acontecer. O Bitcoin já caiu mais de 70% em alguns ciclos, e quem comprou nos topos ficou anos no prejuízo. Leia o aviso de risco antes de decidir.",
  },
];

export default async function Page() {
  const quote = await getBtcQuoteServer();
  const { rows } = getBtcHistory();
  return (
    <ToolPage
      tool={TOOL}
      intro="Escolha um valor e o mês da compra para ver quanto ele valeria hoje em bitcoin, pela cotação ao vivo. Use os atalhos para os momentos mais famosos."
      faq={FAQ}
      article={
        <>
          <h2>De onde vêm os números</h2>
          <p>
            O preço de cada mês é o fechamento mensal médio do mercado em dólar (blockchain.com), convertido para real pelo dólar
            PTAX do Banco Central no último dia útil do mês. O valor de hoje usa a cotação ao vivo do par BTC/BRL. Os dados
            começam em agosto de 2010, quando surgiram as primeiras cotações registradas de forma contínua.
          </p>
          <p>
            Quer entender os altos e baixos por trás desses números? Leia{" "}
            <Link href="/artigos/ciclos-do-bitcoin-o-que-os-halvings-mostram">os ciclos do Bitcoin</Link>, a história da{" "}
            <Link href="/artigos/bitcoin-pizza-day-a-pizza-de-10-mil-bitcoins">pizza de 10 mil bitcoins</Link> e a{" "}
            <Link href="/historia">linha do tempo</Link>. Para aportes mensais, use a{" "}
            <Link href="/ferramentas/calculadora-dca">calculadora DCA</Link>.
          </p>
        </>
      }
    >
      <LumpSumCalculator history={rows} initialQuote={quote} />
    </ToolPage>
  );
}

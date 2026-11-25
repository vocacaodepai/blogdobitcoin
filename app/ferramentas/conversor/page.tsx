import Link from "next/link";
import { ToolPage, toolMetadata, type ToolMeta } from "@/components/ToolPage";
import { Converter } from "@/components/tools/Converter";
import { getBtcQuoteServer } from "@/lib/market/bitcoin";
import { getMarketServer } from "@/lib/market/paprika";

export const revalidate = 60;

const TOOL: ToolMeta = {
  path: "/ferramentas/conversor",
  name: "Conversor de bitcoin",
  seoTitle: "Conversor de bitcoin para real, dólar e satoshis",
  description:
    "Converta bitcoin para real, dólar e satoshis (e o contrário) com a cotação ao vivo, atualizada a cada 10 segundos. Inclui as principais criptomoedas.",
};

export const metadata = toolMetadata(TOOL);

const FAQ = [
  {
    question: "Quantos satoshis tem um bitcoin?",
    answer:
      "Um bitcoin tem 100 milhões de satoshis (sats). O satoshi é a menor unidade da rede e leva o nome do criador do Bitcoin. Por isso dá para comprar e mandar valores pequenos, como R$ 10, sem precisar de um bitcoin inteiro.",
  },
  {
    question: "Como converter real para bitcoin?",
    answer:
      "Escolha Real (R$) no campo De, digite o valor e o conversor mostra na hora quanto isso vale em bitcoin, satoshis e dólar, pela cotação do par BTC/BRL atualizada a cada 10 segundos. Na corretora o valor final muda um pouco por causa de spread e taxas.",
  },
  {
    question: "O conversor usa qual cotação?",
    answer:
      "Para o Bitcoin, o par BTC/BRL e BTC/USDT da Binance, com Mercado Bitcoin, Kraken e Coinbase como reserva. Para as outras moedas, a cotação global da CoinPaprika convertida para real. É uma referência informativa, não uma oferta de compra ou venda.",
  },
  {
    question: "Como escrever valores com vírgula?",
    answer:
      "Use o padrão brasileiro: vírgula para os centavos e ponto para milhar, como 1.500,50 ou 0,005. O conversor também entende números com ponto decimal, como 0.005, para quem copia valores de sites estrangeiros.",
  },
];

export default async function Page() {
  const [quote, market] = await Promise.all([getBtcQuoteServer(), getMarketServer()]);
  return (
    <ToolPage
      tool={TOOL}
      intro="Digite um valor em bitcoin, satoshis, real, dólar ou outra moeda e veja a conversão na hora, pela cotação ao vivo."
      faq={FAQ}
      article={
        <>
          <h2>Bitcoin, satoshi, real e dólar: como fazer a conta</h2>
          <p>
            A conversão é uma regra de três com a cotação do momento: valor em reais dividido pelo preço de um bitcoin dá a
            quantidade em BTC, e cada BTC tem 100 milhões de satoshis. Como o preço muda o tempo todo, o resultado muda junto; o
            conversor refaz a conta a cada nova leitura, a cada 10 segundos.
          </p>
          <p>
            Pensar em satoshis ajuda quem está começando: em vez de &quot;0,00025 BTC&quot;, você vê um número inteiro de sats. O guia{" "}
            <Link href="/artigos/satoshis-o-que-sao-sats-e-como-converter">o que são satoshis</Link> explica a história do nome e
            dá exemplos, e o <Link href="/bitcoin">preço do Bitcoin hoje</Link> mostra o gráfico e a variação do dia.
          </p>
        </>
      }
    >
      <Converter initialQuote={quote} initialMarket={market} />
    </ToolPage>
  );
}

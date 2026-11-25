import Link from "next/link";
import { ToolPage, toolMetadata, type ToolMeta } from "@/components/ToolPage";
import { HalvingCountdown } from "@/components/live/HalvingCountdown";
import { getTipHeightServer } from "@/lib/market/mempool";

export const revalidate = 300;

const TOOL: ToolMeta = {
  path: "/ferramentas/halving",
  name: "Contagem regressiva do halving",
  seoTitle: "Halving do Bitcoin: contagem regressiva ao vivo",
  description:
    "Quanto falta para o próximo halving do Bitcoin: blocos restantes, data estimada pelo ritmo real da mineração, recompensa atual e bitcoins já emitidos.",
};

export const metadata = toolMetadata(TOOL);

const FAQ = [
  {
    question: "O que é o halving do Bitcoin?",
    answer:
      "É o corte pela metade da recompensa que os mineradores recebem por bloco, programado no código para acontecer a cada 210 mil blocos, cerca de quatro anos. Em 2009 a recompensa era 50 BTC; desde abril de 2024 é 3,125 BTC. Assim a emissão diminui até o limite de 21 milhões.",
  },
  {
    question: "Quando é o próximo halving?",
    answer:
      "No bloco 1.050.000. A data exata depende da velocidade da mineração, por isso a contagem usa o tempo médio real dos blocos na época de dificuldade atual. A estimativa aponta para 2028 e vai se ajustando sozinha conforme os blocos são minerados.",
  },
  {
    question: "O halving faz o preço subir?",
    answer:
      "Historicamente, os anos depois dos halvings tiveram altas fortes, mas não existe garantia: o preço depende de demanda, juros, regulação e do humor do mercado. O artigo sobre os ciclos do Bitcoin mostra o que aconteceu em cada um e por que o passado não garante o futuro.",
  },
  {
    question: "Quando o último bitcoin será minerado?",
    answer:
      "Pelas regras atuais, por volta do ano 2140. Depois disso os mineradores passam a viver só das taxas das transações. Hoje mais de 95% dos 21 milhões já foram emitidos, e o painel acima mostra o número exato pela altura atual do bloco.",
  },
];

export default async function Page() {
  const height = await getTipHeightServer();
  return (
    <ToolPage
      tool={TOOL}
      intro="A contagem acompanha a blockchain em tempo real: a cada bloco minerado, falta um a menos para o próximo halving."
      faq={FAQ}
      article={
        <>
          <h2>Por que o halving importa</h2>
          <p>
            O halving é o mecanismo que torna o Bitcoin escasso de forma previsível: ninguém pode imprimir mais moedas do que o
            código permite. Cada corte reduz a oferta nova que chega ao mercado e aperta a margem dos mineradores, que precisam
            ser mais eficientes para continuar no jogo.
          </p>
          <p>
            Entenda o mecanismo completo em <Link href="/artigos/halving-do-bitcoin-o-que-e-e-quando-e-o-proximo">halving do Bitcoin</Link>,
            veja como funciona a <Link href="/artigos/mineracao-de-bitcoin-como-funciona">mineração</Link> e acompanhe o{" "}
            <Link href="/bitcoin">preço do Bitcoin ao vivo</Link>.
          </p>
        </>
      }
    >
      <HalvingCountdown initialHeight={height} />
    </ToolPage>
  );
}

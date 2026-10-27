import Link from "next/link";
import { ToolPage, toolMetadata, type ToolMeta } from "@/components/ToolPage";
import { FearGreedGauge } from "@/components/live/FearGreedGauge";
import { getFearGreedServer } from "@/lib/market/feargreed";

export const revalidate = 1800;

const TOOL: ToolMeta = {
  path: "/ferramentas/medo-e-ganancia",
  name: "Índice de medo e ganância",
  seoTitle: "Índice de medo e ganância cripto hoje",
  description:
    "O índice de medo e ganância do mercado cripto hoje, de 0 a 100, com o valor de ontem, da semana e do mês passado e o histórico do último ano.",
};

export const metadata = toolMetadata(TOOL);

const FAQ = [
  {
    question: "O que é o índice de medo e ganância?",
    answer:
      "É um termômetro do humor do mercado cripto, de 0 (medo extremo) a 100 (ganância extrema), calculado todo dia pelo site alternative.me a partir de volatilidade, volume, redes sociais, dominância do Bitcoin e tendências de busca.",
  },
  {
    question: "Medo extremo é hora de comprar?",
    answer:
      "Não existe regra. A frase de Warren Buffett sobre ter medo quando os outros são gananciosos é popular, mas o índice pode ficar em medo extremo por semanas enquanto o preço continua caindo. Ele mostra o sentimento, não o futuro.",
  },
  {
    question: "Com que frequência o índice muda?",
    answer:
      "Uma vez por dia. Por isso ele é útil para ver tendências de humor ao longo de semanas e meses, não para decisões de curtíssimo prazo. O gráfico desta página mostra o histórico do último ano.",
  },
  {
    question: "O índice vale para todas as criptomoedas?",
    answer:
      "Ele foi pensado principalmente para o Bitcoin, que puxa o resto do mercado. Altcoins costumam acompanhar o humor geral, mas cada moeda tem fatores próprios. Para ver quem está subindo ou caindo agora, use as bolhas cripto.",
  },
];

export default async function Page() {
  const fng = await getFearGreedServer(365);
  return (
    <ToolPage
      tool={TOOL}
      intro="O humor do mercado cripto num número. Atualizado uma vez por dia, com o histórico do último ano."
      faq={FAQ}
      article={
        <>
          <h2>Como usar o índice sem cair em armadilha</h2>
          <p>
            O índice resume o comportamento da multidão. Euforia (ganância extrema) costuma aparecer perto de altas fortes, e
            pânico (medo extremo) depois de quedas. Use como contexto, junto com o <Link href="/bitcoin">preço do Bitcoin</Link>,
            as <Link href="/mercado/bolhas">bolhas cripto</Link> e uma estratégia que não dependa de adivinhar o dia certo, como o{" "}
            <Link href="/ferramentas/calculadora-dca">DCA</Link>.
          </p>
        </>
      }
    >
      <FearGreedGauge initial={fng} limit={365} />
    </ToolPage>
  );
}

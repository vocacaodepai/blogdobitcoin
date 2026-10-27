export type ReviewKind = "review" | "guia";

export const reviewKindLabels: Record<ReviewKind, { label: string; help: string }> = {
  review: {
    label: "Review individual",
    help: "Analisamos um único produto a fundo, com nota por critério, prós, contras e veredito.",
  },
  guia: {
    label: "Review comparativo",
    help: "Colocamos 2 ou 3 produtos da mesma categoria lado a lado e indicamos qual compensa mais.",
  },
};


import type { Category } from "@/lib/articles";

/** Parágrafo de abertura de cada categoria, com a palavra-chave principal. */
export const categoryIntros: Record<Category, string> = {
  bitcoin:
    "Bitcoin é a primeira e maior criptomoeda do mundo, criada em 2009 por Satoshi Nakamoto com um limite fixo de 21 milhões de unidades. Aqui você entende como o Bitcoin funciona por dentro: blockchain, mineração, halving, satoshis, Lightning Network e o que faz dele uma moeda diferente de qualquer outra. Para acompanhar a cotação, use a página de preço do Bitcoin ao vivo.",
  iniciantes:
    "Se você nunca comprou criptomoeda, comece por aqui. Os guias para iniciantes explicam o que é Bitcoin, como comprar com segurança no Brasil usando Pix, como escolher uma exchange, onde guardar e quais erros fazem muita gente perder dinheiro logo no começo. Tudo em português simples, sem jargão e sem promessa de lucro.",
  mercado:
    "Entender o mercado cripto é entender ciclos, volatilidade e comportamento humano. Nesta categoria você encontra explicações sobre os ciclos do Bitcoin, halvings, ETFs, estratégias como o DCA e indicadores como o índice de medo e ganância. Conteúdo educativo: nada aqui é recomendação de investimento.",
  altcoins:
    "Altcoins são todas as criptomoedas além do Bitcoin, de Ethereum e Solana a stablecoins como USDT e USDC. Aqui explicamos para que cada projeto serve, como funciona a tecnologia por trás, quais são os riscos e o que diferencia uma rede séria de uma promessa vazia.",
  seguranca:
    "Segurança é a parte mais importante de ter criptomoedas, porque não existe banco para estornar um erro. Esta categoria ensina autocustódia, como guardar a seed phrase, como usar uma carteira de hardware e como reconhecer os golpes com cripto mais comuns no Brasil, do falso suporte à pirâmide.",
  brasil:
    "Cripto no Brasil tem regras próprias: declaração no Imposto de Renda, imposto sobre ganho de capital, obrigações com a Receita Federal e a regulação das exchanges pelo Banco Central. Aqui você encontra o que vale hoje, explicado com exemplos e com link para as fontes oficiais.",
  historia:
    "Memórias do Bitcoin conta a história do Bitcoin como ela aconteceu: o whitepaper de Satoshi Nakamoto, o bloco gênese, a pizza comprada por 10 mil bitcoins, o colapso da Mt. Gox, o HD jogado no lixo e outros episódios que explicam por que o Bitcoin é o que é hoje.",
  "cripto-indica":
    "Cripto Indica reúne reviews e comparativos de produtos do mundo cripto: carteiras de hardware, placas de aço para a seed, livros sobre Bitcoin, camisetas e acessórios. Cada indicação tem nota de 0 a 10 por critério, prós e contras reais e link direto para comprar na Amazon. Nenhum produto paga para aparecer aqui.",
};

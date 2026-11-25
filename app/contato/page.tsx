import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { InstitutionalPage, institutionalMetadata } from "@/components/InstitutionalPage";
import { site } from "@/lib/articles";
import { author } from "@/lib/author";

const PATH = "/contato";
const TITLE = "Contato";
const DESCRIPTION =
  "Fale com o editor do Blog do Bitcoin: correções, pautas, parcerias, imprensa e LGPD. Não damos suporte de corretora e nunca pedimos seed, senha ou chave.";

const REASONS = [
  {
    id: "correcoes",
    subject: "Correção",
    title: "Correções",
    text: "Achou um dado errado, um link quebrado, uma ferramenta com cálculo estranho ou uma afirmação que não se sustenta? Mande o link da página e o trecho. Erro confirmado é corrigido em até 5 dias úteis. Quando a correção é de fato (número, data, afirmação), o texto ganha a marcação \"Atualizado em\" com a nova data.",
  },
  {
    id: "sugestoes-de-pauta",
    subject: "Sugestão de pauta",
    title: "Sugestões de pauta",
    text: "Uma dúvida sobre Bitcoin que ninguém explica direito, uma moeda que merece ficha, um termo que falta no glossário, um produto que vale review na Loja do Bitcoin. Quanto mais específico o pedido, maior a chance de virar artigo.",
  },
  {
    id: "parcerias",
    subject: "Parceria",
    title: "Parcerias e publicidade",
    text: "Propostas comerciais e de conteúdo em conjunto. Leia antes a página de publicidade e afiliados: só são consideradas as propostas que cabem nas regras dela. Pagamento não compra nota, posição no ranking nem menção em artigo ou notícia, e conteúdo patrocinado, se um dia existir, sai com o rótulo \"Conteúdo patrocinado\".",
  },
  {
    id: "imprensa",
    subject: "Imprensa",
    title: "Imprensa",
    text: "Pedidos de entrevista, comentário ou uso de trechos do site em outras publicações. Informe o veículo, o tema e o prazo.",
  },
  {
    id: "dados-pessoais-lgpd",
    subject: "Dados pessoais (LGPD)",
    title: "Dados pessoais (LGPD)",
    text: "Pedidos de acesso, correção, exclusão ou informação sobre dados pessoais, como prevê a Lei Geral de Proteção de Dados. O encarregado é o próprio editor e a resposta sai em até 15 dias.",
  },
] as const;

function ContactCard() {
  return (
    <section aria-labelledby="canal-de-contato" className="rounded-xl border border-border bg-surface p-5">
      <h2 id="canal-de-contato" className="label-mono text-muted">
        Ou por e-mail
      </h2>
      <a
        href={`mailto:${author.email}`}
        className="mt-3 block break-all font-display text-lg font-bold tracking-tight text-accent hover:underline"
      >
        {author.email}
      </a>
      <dl className="mt-4 space-y-3 text-sm">
        <div>
          <dt className="label-mono text-muted">Quem responde</dt>
          <dd className="mt-1">
            <Link href={author.url} className="font-medium hover:text-accent">
              {author.name}
            </Link>
            , editor do site
          </dd>
        </div>
        <div>
          <dt className="label-mono text-muted">Prazo</dt>
          <dd className="mt-1">Até 5 dias úteis (pedidos LGPD: até 15 dias)</dd>
        </div>
        <div>
          <dt className="label-mono text-muted">Idioma</dt>
          <dd className="mt-1">Português</dd>
        </div>
        <div>
          <dt className="label-mono text-muted">Nunca pedimos</dt>
          <dd className="mt-1">Seed, senha, chave privada, código 2FA ou dinheiro</dd>
        </div>
      </dl>
    </section>
  );
}

export const metadata: Metadata = institutionalMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

export default function ContatoPage() {
  return (
    <InstitutionalPage
      label="Institucional"
      title={TITLE}
      lead="O Blog do Bitcoin não tem central de atendimento: tem um formulário e um e-mail, lidos pelo editor. A resposta sai em até 5 dias úteis. Ninguém do site vai pedir sua seed, sua senha ou dinheiro."
      path={PATH}
      type="ContactPage"
      aside={
        <div className="space-y-6">
          <section aria-labelledby="formulario-de-contato" className="rounded-xl border border-border bg-surface p-5">
            <h2 id="formulario-de-contato" className="label-mono text-muted">
              Fale com a gente
            </h2>
            <div className="mt-3">
              <ContactForm />
            </div>
          </section>
          <ContactCard />
        </div>
      }
    >
      <p>
        O canal oficial de contato do site é o formulário desta página, que chega direto na caixa de
        entrada do editor, ou o e-mail{" "}
        <a href={`mailto:${author.email}`}>
          <strong>{author.email}</strong>
        </a>
        . Hoje não há telefone, WhatsApp, Telegram nem perfis oficiais do {site.name} em redes sociais.
        Se alguém falar em nome do site por outro canal, desconfie.
      </p>
      <p>
        Respondo em até 5 dias úteis. Mensagens de correção e pedidos sobre dados pessoais têm
        prioridade.
      </p>

      <h2 id="alerta-de-golpe">Alerta de golpe: o que o Blog do Bitcoin nunca faz</h2>
      <p>
        Golpista adora usar o nome de site conhecido para ganhar confiança. Por isso, fica
        registrado aqui. O {site.name}, o editor ou qualquer pessoa em nome do site{" "}
        <strong>nunca</strong>:
      </p>
      <ul>
        <li>
          Pede sua seed (as 12 ou 24 palavras de recuperação), senha, chave privada ou código de
          verificação em duas etapas. Quem pede isso quer roubar suas moedas.
        </li>
        <li>
          Oferece investimento, rendimento garantido, robô de trade, sinal de compra ou
          &quot;gerente de conta&quot;. O site não administra dinheiro de ninguém.
        </li>
        <li>Pede depósito, Pix ou envio de cripto para liberar saque, prêmio ou sorteio.</li>
        <li>Chama você primeiro por WhatsApp, Telegram, Instagram ou ligação.</li>
      </ul>
      <p>
        Recebeu algo assim usando o nome do site? Não responda, não clique e não envie nada.
        Se quiser, encaminhe o print para o e-mail acima. Para entender os golpes mais comuns,
        veja a seção <Link href="/categoria/seguranca">Segurança e Golpes</Link> e o{" "}
        <Link href="/aviso-de-risco">aviso de risco</Link>.
      </p>

      <h2 id="para-que-serve">Para que serve este canal</h2>
      {REASONS.map((r) => (
        <section key={r.id} aria-labelledby={r.id}>
          <h3 id={r.id}>{r.title}</h3>
          <p>{r.text}</p>
          <p>
            Assunto no formulário: <strong>{r.subject}</strong>
          </p>
        </section>
      ))}

      <h2 id="o-que-nao-e-respondido">O que não é respondido</h2>
      <ul>
        <li>
          Suporte de corretora, carteira ou app de terceiros (saque travado, conta bloqueada,
          transação pendente): fale com o suporte oficial do serviço que você usa.
        </li>
        <li>
          Pedidos de recomendação de investimento, de &quot;qual moeda comprar&quot; ou de
          previsão de preço. O site é informativo e não faz recomendação de investimento.
        </li>
        <li>Recuperação de moedas perdidas ou enviadas por engano: ninguém aqui tem como desfazer uma transação.</li>
        <li>Pedidos de troca de links ou de publicação de guest post genérico.</li>
        <li>
          Ofertas de &quot;conteúdo patrocinado sem aviso&quot;, divulgação paga de token ou de
          nota comprada em review.
        </li>
      </ul>

      <h2 id="antes-de-escrever">Antes de escrever</h2>
      <p>
        Muitas dúvidas já estão respondidas em <Link href="/sobre">sobre o site</Link>, na{" "}
        <Link href="/politica-editorial">política editorial</Link>, em{" "}
        <Link href="/publicidade-e-afiliados">publicidade e afiliados</Link>, na{" "}
        <Link href="/politica-de-privacidade">política de privacidade</Link> e nos{" "}
        <Link href="/termos-de-uso">termos de uso</Link>. Termo técnico que travou a leitura?
        Veja o <Link href="/glossario">glossário</Link>. A cotação do dia está em{" "}
        <Link href="/bitcoin">Bitcoin ao vivo</Link> e no <Link href="/mercado">mercado</Link>,
        sempre como informação, não como preço de compra. Para achar um artigo específico, use a{" "}
        <Link href="/busca">busca</Link>.
      </p>
    </InstitutionalPage>
  );
}

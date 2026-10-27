import type { Metadata } from "next";
import Link from "next/link";
import { InstitutionalPage, institutionalMetadata } from "@/components/InstitutionalPage";
import { site } from "@/lib/articles";
import { author } from "@/lib/author";

const PATH = "/publicidade-e-afiliados";
const TITLE = "Publicidade e afiliados";
const DESCRIPTION =
  "Como o Blog do Bitcoin se sustenta: anúncios do Google AdSense e links de afiliado da Amazon e da Shopee, sempre sinalizados. Nenhuma exchange paga para aparecer.";

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export const metadata: Metadata = institutionalMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

export default function PublicidadeEAfiliadosPage() {
  return (
    <InstitutionalPage
      label="Institucional"
      title={TITLE}
      lead="O Blog do Bitcoin é gratuito. Esta página mostra de onde vem o dinheiro que mantém o site no ar, como cada anúncio e cada link comercial é identificado e por que nenhum deles muda o que é escrito."
      path={PATH}
    >
      <h2 id="como-o-site-se-sustenta">1. Como o site se sustenta</h2>
      <p>
        O {site.name} não cobra assinatura, não vende curso, não tem grupo pago de sinais e não
        gerencia dinheiro de ninguém. A receita vem de três fontes:
      </p>
      <ul>
        <li>
          <strong>Google AdSense</strong>: anúncios servidos pelo Google em algumas páginas do site,
          quando a conta de anúncios está ativa. Quem escolhe o anúncio é o Google, não o editor. O
          site recebe uma parte do que o anunciante paga ao Google.
        </li>
        <li>
          <strong>Programa de Associados da Amazon</strong>: na{" "}
          <Link href="/loja">Loja do Bitcoin</Link> e nos reviews e comparativos da seção{" "}
          <Link href="/categoria/cripto-indica">Cripto Indica</Link>, o link para comprar o produto
          na Amazon é um link de afiliado (tag <code>{site.amazonTag}</code>). Como Associado da
          Amazon, o {site.name} ganha com compras qualificadas.
        </li>
        <li>
          <strong>Programa de Afiliados da Shopee</strong>: alguns produtos da{" "}
          <Link href="/loja">Loja do Bitcoin</Link> e dos reviews da seção{" "}
          <Link href="/categoria/cripto-indica">Cripto Indica</Link> são vendidos na Shopee Brasil.
          Nesses casos, o link de compra é um link curto de afiliado da Shopee (começa com{" "}
          <code>s.shopee.com.br</code>) e o {site.name} pode receber uma comissão por compras
          qualificadas.
        </li>
      </ul>
      <p>
        Não existe outra fonte de receita. Não há link de indicação de corretora, não há bônus por
        cadastro em exchange e não há pagamento de projeto cripto para falar de uma moeda.
      </p>

      <h2 id="afiliados-amazon">2. Como funciona o link de afiliado da Amazon</h2>
      <p>
        Na Loja do Bitcoin e nos artigos da Cripto Indica, cada produto tem o botão
        &quot;Comprar agora na Amazon&quot;. Ele leva direto para a página do produto na Amazon
        Brasil. Se você fizer uma compra qualificada depois de clicar, a Amazon paga uma comissão
        ao site.
      </p>
      <ul>
        <li>
          <strong>Sem custo extra</strong>: você paga o mesmo preço que pagaria entrando na Amazon
          por conta própria. A comissão sai da Amazon, não do seu bolso.
        </li>
        <li>
          <strong>Sem acesso aos seus dados</strong>: o site não vê seu nome, endereço nem cartão.
          A Amazon mostra ao site só relatórios de vendas, com os produtos vendidos e a comissão,
          sem dizer quem comprou.
        </li>
        <li>
          <strong>O site não vende nada</strong>: a compra, o pagamento, a entrega, a troca, a
          devolução e a garantia são da Amazon e do vendedor do produto, nas regras deles. Dúvida
          ou problema com um pedido deve ser resolvido com a Amazon ou com o vendedor.
        </li>
      </ul>

      <h2 id="afiliados-shopee">Como funciona o link de afiliado da Shopee</h2>
      <p>
        Nos produtos vendidos na Shopee, o botão diz &quot;Comprar agora na Shopee&quot; e leva
        para o anúncio do produto na Shopee Brasil. A Shopee é um marketplace: quem vende é um
        vendedor independente (o nome dele aparece na página do produto), e a compra, o pagamento, a
        entrega, a troca, a devolução e a garantia seguem as regras da Shopee e do vendedor. Se
        você comprar depois de clicar, a Shopee pode pagar uma comissão ao site, sem custo extra
        para você. Carteira de hardware nunca é indicada em anúncio de marketplace: só entra na loja
        pela Amazon, de vendedor oficial ou autorizado.
      </p>

      <h2 id="faixa-de-preco">3. A faixa de preço não é o preço do dia</h2>
      <p>
        Na loja e nos reviews aparece uma faixa de preço, por exemplo &quot;costuma variar de R$ X
        a R$ Y&quot;. Essa faixa é uma pesquisa de mercado feita na internet como um todo, em
        várias lojas online, comparadores e site do fabricante. Ela serve para você saber se o
        preço do dia está bom ou caro.
      </p>
      <p>
        Ela não é o preço da Amazon e pode estar desatualizada. Preço muda todo dia, por vendedor
        e por promoção. O valor que vale é o que aparece na Amazon depois de clicar no botão de
        compra. Nos produtos da Shopee, a faixa é a do próprio anúncio na data indicada na
        página, e preço, cupom e frete mudam de um dia para o outro.
      </p>

      <h2 id="afiliado-nao-muda-a-nota">4. Afiliado não muda nota nem opinião</h2>
      <p>
        Os reviews da loja e da Cripto Indica dão uma nota de 0 a 10, com critérios explicados no
        próprio texto. A análise parte da ficha técnica oficial, do manual do fabricante e de
        avaliações reais de compradores. O site não alega teste físico que não aconteceu.
      </p>
      <p>
        A nota e a opinião seguem a <Link href="/politica-editorial">política editorial</Link>,
        não a comissão. A comissão não aumenta a nota, não compra destaque na vitrine e não apaga
        os pontos fracos do produto. Se um produto for ruim para o seu caso, o texto diz isso,
        mesmo que ele gere comissão. Em carteira de hardware, por exemplo, a loja lembra de comprar
        só de vendedor oficial ou autorizado e de nunca usar um aparelho que já venha com as
        palavras de recuperação anotadas.
      </p>

      <h2 id="sinalizacao">5. Como um link comercial é sinalizado</h2>
      <ul>
        <li>
          A <Link href="/loja">Loja do Bitcoin</Link> e os reviews de produto trazem um aviso de
          transparência dizendo que os links são de afiliado e podem gerar comissão.
        </li>
        <li>
          O botão de compra tem sempre o mesmo texto, &quot;Comprar agora na Amazon&quot; ou
          &quot;Comprar agora na Shopee&quot;, para ficar claro para onde ele leva.
        </li>
        <li>
          Os links levam o atributo <code>rel=&quot;sponsored&quot;</code>, que informa aos
          mecanismos de busca que se trata de um link comercial, além de{" "}
          <code>noopener</code> por segurança.
        </li>
        <li>
          Fora da loja e dos reviews, o link de afiliado só aparece na vitrine &quot;Loja do
          Bitcoin&quot;, um bloco com o nome da loja na página inicial e no fim dos artigos. Ele
          não aparece nas notícias, na cotação, no ranking de moedas nem nas ferramentas.
        </li>
      </ul>

      <h2 id="nenhum-projeto-paga">6. Nenhuma exchange ou projeto cripto paga para aparecer</h2>
      <p>
        A ordem das moedas em <Link href="/mercado">/mercado</Link>, as páginas de cada moeda e a
        cotação em <Link href="/bitcoin">/bitcoin</Link> vêm de dados públicos de mercado, sem
        nenhum ajuste comercial. Nenhuma corretora, exchange, emissor de token ou projeto cripto
        paga para entrar no ranking, para subir de posição, para ganhar artigo ou para ser citado
        numa notícia.
      </p>
      <p>
        Quando um artigo cita uma corretora pelo nome, é porque ela é relevante para o tema, não
        porque pagou. Nada aqui é recomendação de investimento. Leia o{" "}
        <Link href="/aviso-de-risco">aviso de risco</Link> antes de decidir qualquer coisa.
      </p>

      <h2 id="como-os-anuncios-sao-identificados">7. Como os anúncios são identificados</h2>
      <p>
        Todo bloco de anúncio é rotulado como &quot;Publicidade&quot; e fica separado do texto.
        Anúncio nunca aparece acima do título da página, nunca se disfarça de link do conteúdo e
        não é exibido nas páginas sem conteúdo editorial, como a de contato, a busca, a página de
        erro e estas páginas institucionais. Quando não há anúncio configurado, não sobra caixa
        vazia: o espaço simplesmente não existe.
      </p>
      <p>
        O editor não escolhe nem aprova cada anúncio. Por isso, um anúncio do Google pode ser de
        uma corretora, de um aplicativo ou de um produto financeiro. Isso não é indicação do{" "}
        {site.name}. Desconfie de qualquer anúncio que prometa lucro garantido. Se um anúncio
        parecer golpe, enganoso ou ofensivo, mande uma captura de tela para{" "}
        <a href={`mailto:${author.email}`}>{author.email}</a>, para que ele seja bloqueado nas
        configurações do AdSense, se for o caso.
      </p>

      <h2 id="patrocinado">8. Conteúdo patrocinado</h2>
      <p>
        Hoje o site não tem nenhum conteúdo patrocinado, publieditorial ou &quot;matéria
        paga&quot;. Se um dia houver, ele virá com o rótulo &quot;Conteúdo patrocinado&quot; no
        topo, antes do texto, com o nome de quem pagou. Conteúdo sem esse rótulo é editorial.
      </p>

      <h2 id="cookies">9. Cookies de anúncio e como recusar</h2>
      <p>
        O script de anúncios do Google só carrega depois da sua escolha no aviso de cookies. O
        Google Analytics começa com todos os cookies negados e só grava cookie se você aceitar.
        Quem clica em &quot;Aceitar&quot; libera os cookies do Google Analytics e pode ver
        anúncios personalizados. Quem clica em &quot;Só o essencial&quot; continua vendo
        anúncios, mas não personalizados, e o Google Analytics segue sem gravar cookies. A escolha
        pode ser mudada a qualquer momento pelo link &quot;Preferências de cookies&quot; no
        rodapé. O Vercel Web Analytics, usado para contar visitas, não usa cookies. Os detalhes
        estão na{" "}
        <Link href="/politica-de-privacidade">política de privacidade</Link>.
      </p>

      <h2 id="conformidade">10. Regras que o site segue</h2>
      <ul>
        <li>
          <ExternalLink href="https://support.google.com/adsense/answer/48182">
            Políticas do programa Google AdSense
          </ExternalLink>
          , incluindo as regras de posicionamento e de rotulagem de anúncios.
        </li>
        <li>
          <ExternalLink href="https://associados.amazon.com.br/help/operating/agreement">
            Contrato operacional do Programa de Associados da Amazon
          </ExternalLink>
          , que exige a identificação do site como Associado.
        </li>
        <li>
          Termos do Programa de Afiliados da Shopee, que exigem a identificação das parcerias
          comerciais.
        </li>
        <li>
          <ExternalLink href="https://developers.google.com/search/docs/essentials/spam-policies">
            Políticas de spam da Busca do Google
          </ExternalLink>
          , em especial sobre links pagos.
        </li>
        <li>
          Código Brasileiro de Autorregulamentação Publicitária do{" "}
          <ExternalLink href="https://conar.org.br/">CONAR</ExternalLink>: publicidade identificável
          como tal e separada do conteúdo editorial.
        </li>
        <li>
          Código de Defesa do Consumidor, que exige que a publicidade seja veiculada de forma que o
          consumidor a identifique fácil e imediatamente (art. 36).
        </li>
        <li>Lei Geral de Proteção de Dados, para o consentimento de cookies de publicidade.</li>
      </ul>

      <h2 id="o-que-nao-e-aceito">11. O que não é aceito</h2>
      <ul>
        <li>Pagamento por nota, por posição no ranking ou por menção em artigo ou notícia.</li>
        <li>Listagem paga de token, airdrop, pré-venda ou &quot;moeda promissora&quot;.</li>
        <li>Texto enviado por empresa ou projeto para publicar como se fosse do site.</li>
        <li>Link de indicação de corretora escondido no texto.</li>
        <li>Links inseridos em artigos antigos mediante pagamento (&quot;link building&quot;).</li>
        <li>Anúncios que imitem o layout do site ou o rótulo de conteúdo editorial.</li>
      </ul>

      <h2 id="propostas">12. Propostas comerciais</h2>
      <p>
        Propostas de parceria podem ser enviadas pela página de{" "}
        <Link href="/contato">contato</Link>, com o assunto &quot;Parceria&quot;. Só são
        consideradas as que cabem nas regras acima. Quem responde é o editor,{" "}
        <Link href="/autor/bruno-danello">{author.name}</Link>.
      </p>

      <p>
        Versão desta página: 22 de outubro de 2026. Veja também os{" "}
        <Link href="/termos-de-uso">termos de uso</Link> e a página{" "}
        <Link href="/sobre">sobre o site</Link>.
      </p>
    </InstitutionalPage>
  );
}

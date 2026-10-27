import type { Metadata } from "next";
import Link from "next/link";
import { InstitutionalPage, institutionalMetadata } from "@/components/InstitutionalPage";
import { site } from "@/lib/articles";
import { author } from "@/lib/author";

const PATH = "/termos-de-uso";
const TITLE = "Termos de Uso";
const DESCRIPTION =
  "Regras de uso do Blog do Bitcoin: conteúdo educativo, sem recomendação de investimento, cotações informativas, simulações, afiliados e foro no Brasil.";

export const metadata: Metadata = institutionalMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

export default function TermosDeUsoPage() {
  return (
    <InstitutionalPage
      label="Institucional"
      title={TITLE}
      lead={`Ao navegar no ${site.name} você concorda com estas regras. Elas são curtas de propósito: dizem o que você pode fazer com o conteúdo, o que o site entrega e o que ele não promete, em especial quando o assunto é dinheiro.`}
      path={PATH}
    >
      <h2 id="aceitacao">1. Aceitação</h2>
      <p>
        Estes termos regulam o uso do site {site.name}, disponível em {site.url} e editado por{" "}
        <Link href={author.url}>{author.name}</Link>. Ao acessar qualquer página, você aceita estes
        termos, a <Link href="/politica-de-privacidade">política de privacidade</Link> e o{" "}
        <Link href="/aviso-de-risco">aviso de risco</Link>. Se não concordar com alguma regra, a
        saída é simplesmente não usar o site.
      </p>

      <h2 id="conteudo-educativo">2. Conteúdo informativo e educativo</h2>
      <p>
        O {site.name} é um site brasileiro sobre Bitcoin e criptomoedas. Tudo o que é publicado aqui
        (artigos, notícias, páginas de moedas, glossário, história, reviews, comparativos, FAQ e
        ferramentas) serve para informar e ensinar. O objetivo é ajudar você a entender como as coisas
        funcionam e quais são os riscos, para decidir por conta própria.
      </p>
      <p>
        Parte do conteúdo é produzida com apoio de ferramentas de IA e de rotinas automáticas, com
        checagem de fontes e revisão do editor, como descrito na{" "}
        <Link href="/politica-editorial">política editorial</Link>. Mesmo com esse cuidado, erros
        podem acontecer.
      </p>

      <h2 id="nao-e-recomendacao">3. Não é recomendação de investimento nem consultoria</h2>
      <p>
        Nada no site é recomendação de compra, venda ou manutenção de qualquer criptomoeda, ativo ou
        produto financeiro. Também não é consultoria financeira, de investimento, jurídica, contábil
        ou tributária. Quando um texto cita uma moeda, uma corretora ou uma estratégia, ele explica o
        assunto. Não diz o que você deve fazer com o seu dinheiro.
      </p>
      <p>
        O {site.name} não é corretora, não custodia criptomoedas, não intermedeia operações e não
        oferece gestão de recursos. Regras de impostos e de declaração mudam e dependem da sua
        situação. Para decisões importantes, procure um profissional habilitado que conheça o seu
        caso.
      </p>

      <h2 id="cotacoes">4. Cotações e dados de mercado</h2>
      <p>
        Preços, gráficos, ranking de moedas, dados da rede, halving e o índice de medo e ganância vêm
        de fontes públicas de terceiros, como Binance, Mercado Bitcoin, Kraken, Coinbase, CoinPaprika,
        mempool.space, alternative.me, blockchain.com e Banco Central (PTAX). Esses dados têm caráter
        apenas informativo e podem:
      </p>
      <ul>
        <li>chegar com atraso, mesmo nas páginas que atualizam a cada poucos segundos;</li>
        <li>divergir do preço da sua corretora, que tem livro de ofertas, taxas e spread próprios;</li>
        <li>ficar fora do ar ou vir com erro quando a fonte falha ou muda.</li>
      </ul>
      <p>
        Não use as cotações do site como base para executar ordens. O preço que vale para uma
        operação é sempre o da plataforma onde você vai negociar, no momento da negociação.
      </p>

      <h2 id="ferramentas">5. Ferramentas e calculadoras são simulações</h2>
      <p>
        O conversor, a calculadora de aportes (DCA), o &quot;se eu tivesse investido&quot;, a
        contagem do halving e as demais <Link href="/ferramentas">ferramentas</Link> fazem contas a
        partir de dados históricos ou de estimativas. O resultado é uma simulação. Não inclui todas as
        taxas, impostos e custos reais, e o desempenho passado não garante nada sobre o futuro. A data
        prevista do halving, por exemplo, é uma estimativa que muda com o ritmo de mineração dos
        blocos.
      </p>

      <h2 id="risco">6. Risco de perda</h2>
      <p>
        Criptomoedas são ativos muito voláteis. O preço pode cair muito em pouco tempo, e é possível
        perder parte ou todo o valor aplicado. Também existem riscos de golpe, de falha ou quebra de
        corretoras e de perda de acesso às chaves da carteira. Leia o{" "}
        <Link href="/aviso-de-risco">aviso de risco</Link> antes de colocar dinheiro em qualquer
        criptomoeda. As decisões que você tomar, e as consequências delas, são suas.
      </p>
      <p>
        O {site.name} não tem conta nem login e nunca pede frase de recuperação (seed), chave privada,
        senha de corretora ou transferência de dinheiro. Qualquer pessoa ou perfil que peça isso em
        nome do site está tentando aplicar um golpe.
      </p>

      <h2 id="propriedade-intelectual">7. Propriedade intelectual</h2>
      <p>
        Os textos, a marca {site.name}, o logotipo, a identidade visual e o código do site são
        protegidos pela legislação brasileira de direitos autorais (Lei 9.610/1998) e de propriedade
        industrial. As fotos de capa pertencem aos seus autores e são usadas conforme as licenças do
        Wikimedia Commons, do Pexels e do Pixabay, com o crédito do autor indicado junto da foto na
        página do artigo ou da notícia. Fotos de
        produtos pertencem aos respectivos fabricantes e servem só para identificar o item.
      </p>
      <p>Você pode, sem pedir autorização:</p>
      <ul>
        <li>ler, salvar e imprimir páginas para uso pessoal;</li>
        <li>compartilhar links para qualquer página, em qualquer canal;</li>
        <li>citar trechos curtos, com indicação clara da fonte e link para a página original.</li>
      </ul>
      <p>Você não pode, sem autorização prévia por escrito:</p>
      <ul>
        <li>reproduzir artigos inteiros ou partes substanciais em outro site, app, newsletter ou material impresso;</li>
        <li>usar o conteúdo para treinar modelos de IA, alimentar produtos automatizados ou republicar em massa;</li>
        <li>usar a marca ou o logotipo de forma que sugira vínculo, parceria ou endosso.</li>
      </ul>
      <p>
        Pedidos de licenciamento e de uso em outros veículos podem ser enviados pela página de{" "}
        <Link href="/contato">contato</Link>.
      </p>

      <h2 id="links-externos">8. Links para sites de terceiros</h2>
      <p>
        O site linka para fontes de notícias, documentação oficial, exploradores de blocos,
        corretoras e outros sites de terceiros. Esses links existem para dar contexto e permitir que
        você confira a fonte. O {site.name} não controla esses sites, não responde pelo conteúdo, pela
        segurança ou pelas políticas de privacidade deles, e um link não significa recomendação.
        Antes de cadastrar dados ou enviar dinheiro em qualquer plataforma, confira se o endereço é o
        oficial.
      </p>

      <h2 id="loja-e-afiliados">9. Loja do Bitcoin, publicidade e links de afiliado</h2>
      <p>
        A <Link href="/loja">Loja do Bitcoin</Link> e os reviews da{" "}
        <Link href="/categoria/cripto-indica">Cripto Indica</Link> mostram produtos vendidos na
        Amazon e na Shopee. O {site.name} não vende, não estoca e não entrega nada. A compra é feita
        direto com a Amazon, com a Shopee ou com o vendedor que anuncia na plataforma delas, e preço, disponibilidade, frete, prazo de entrega,
        garantia, troca e devolução seguem as regras de quem vende. A nota de 0 a 10 e a review são
        opinião editorial baseada em ficha técnica, manual e avaliações de compradores.
      </p>
      <p>
        Como participante do Programa de Associados da Amazon e do Programa de Afiliados da Shopee, o site pode receber uma comissão
        quando você compra por um desses links, sem custo adicional para você. O site também pode
        exibir anúncios do Google AdSense, identificados como publicidade, e os anunciantes respondem
        pelos próprios produtos, ofertas e páginas de destino. As regras completas estão em{" "}
        <Link href="/publicidade-e-afiliados">publicidade e afiliados</Link>.
      </p>

      <h2 id="uso-aceitavel">10. Uso aceitável</h2>
      <p>Ao usar o site, você se compromete a não:</p>
      <ul>
        <li>tentar acessar áreas, dados ou sistemas que não estejam abertos ao público;</li>
        <li>sobrecarregar o site com raspagem automatizada agressiva ou requisições abusivas, inclusive nas páginas de cotação;</li>
        <li>clicar em anúncios de forma artificial ou incentivar terceiros a fazê-lo;</li>
        <li>usar o conteúdo ou a marca para fins ilegais, para golpes ou para enganar outras pessoas.</li>
      </ul>

      <h2 id="limitacao-de-responsabilidade">11. Limitação de responsabilidade</h2>
      <p>
        O conteúdo, as cotações e as ferramentas são oferecidos &quot;como estão&quot;, com o cuidado
        descrito na <Link href="/politica-editorial">política editorial</Link>, mas sem garantia de
        que estejam completos, atualizados, disponíveis o tempo todo ou livres de erros. Na medida
        permitida pela lei, o {site.name} e o seu editor não respondem por perdas ou danos
        decorrentes de:
      </p>
      <ul>
        <li>decisões de investimento, compra ou venda tomadas com base no conteúdo;</li>
        <li>atraso, erro ou indisponibilidade de cotações e de dados de fontes externas;</li>
        <li>resultados de simulações e calculadoras;</li>
        <li>indisponibilidade temporária do site;</li>
        <li>conteúdo, produtos e serviços de sites de terceiros, inclusive corretoras, a Amazon e a Shopee.</li>
      </ul>
      <p>
        Nada nestes termos afasta direitos que o Código de Defesa do Consumidor ou outra lei garantam
        a você e que não possam ser afastados por contrato.
      </p>

      <h2 id="correcoes">12. Correções e retirada de conteúdo</h2>
      <p>
        Erros apontados por leitores são checados e, quando confirmados, corrigidos, como descrito
        na <Link href="/politica-editorial">política editorial</Link>. Titulares de direitos que identifiquem uso indevido de material podem pedir a
        remoção pelo e-mail <a href={`mailto:${author.email}`}>{author.email}</a>, informando o
        material, a página e a base do pedido.
      </p>

      <h2 id="alteracoes">13. Alterações destes termos</h2>
      <p>
        Estes termos podem ser atualizados para refletir mudanças no site ou na lei. A versão em
        vigor é sempre a publicada nesta página, com a data no topo. Seguir usando o site depois de
        uma alteração significa aceitar a versão nova.
      </p>

      <h2 id="lei-e-foro">14. Lei aplicável e foro</h2>
      <p>
        Estes termos são regidos pelas leis da República Federativa do Brasil. Para resolver qualquer
        disputa relacionada ao site, fica eleito o foro do domicílio do editor, no Brasil, ressalvado
        o direito do consumidor de acionar o foro do próprio domicílio quando a lei assim permitir.
      </p>

      <h2 id="contato">15. Contato</h2>
      <p>
        Dúvidas sobre estes termos: <a href={`mailto:${author.email}`}>{author.email}</a> ou pela
        página de <Link href="/contato">contato</Link>.
      </p>
    </InstitutionalPage>
  );
}

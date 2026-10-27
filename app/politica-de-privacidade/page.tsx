import type { Metadata } from "next";
import Link from "next/link";
import { InstitutionalPage, institutionalMetadata } from "@/components/InstitutionalPage";
import { site } from "@/lib/articles";
import { author } from "@/lib/author";

const PATH = "/politica-de-privacidade";
const TITLE = "Política de Privacidade";
const DESCRIPTION =
  "Como o Blog do Bitcoin trata dados pessoais pela LGPD: logs da hospedagem, cookies do Google só com consentimento, APIs de cotação e os seus direitos.";

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

export default function PoliticaPrivacidadePage() {
  return (
    <InstitutionalPage
      label="Institucional"
      title={TITLE}
      lead="Esta política explica, em linguagem direta, quais dados o Blog do Bitcoin coleta quando você navega, por que coleta, com quem compartilha e o que você pode fazer a respeito, conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018)."
      path={PATH}
    >
      <p>
        Para quem tem pressa: o site não pede cadastro, não tem login, não tem carteira e não vende
        dados. O que existe são os registros técnicos de acesso da hospedagem, uma medição de
        audiência sem cookies, as consultas de cotação que o seu navegador faz direto em APIs
        públicas e, quando estiverem ativos, o Google Analytics e os anúncios do Google. Nenhum
        deles grava cookie antes da sua resposta ao aviso de cookies, e a medição com cookies e os
        anúncios personalizados só acontecem se você aceitar.
      </p>

      <h2 id="controlador">1. Quem é o responsável pelos seus dados</h2>
      <p>
        O responsável pelos dados tratados no {site.name} ({site.url}), o controlador na linguagem
        da LGPD, é <Link href={author.url}>{author.name}</Link>, editor do site. Ele também exerce
        a função de encarregado pelo tratamento de dados pessoais (a figura que a LGPD chama de
        encarregado ou DPO). O canal para qualquer assunto de privacidade é o e-mail{" "}
        <a href={`mailto:${author.email}`}>{author.email}</a>.
      </p>

      <h2 id="dados-coletados">2. Quais dados são coletados</h2>
      <h3 id="logs">2.1 Registros de acesso (logs de hospedagem)</h3>
      <p>
        O site é hospedado na Vercel. Como qualquer servidor web, a hospedagem registra dados
        técnicos de cada requisição: endereço IP, data e hora, página acessada, navegador e sistema
        operacional (user agent) e a página de origem (referrer). Esses registros servem para manter o
        site no ar, detectar abusos e diagnosticar erros. Eles são mantidos pela Vercel por prazo
        curto e não são cruzados com nenhuma outra informação sua.
      </p>

      <h3 id="analytics">2.2 Medição de audiência</h3>
      <p>
        O site usa duas ferramentas de medição. O Vercel Web Analytics funciona sem cookies e sem
        identificar pessoas: conta visitas de forma agregada a partir de um identificador temporário
        derivado da requisição, que não fica guardado no seu dispositivo.
      </p>
      <p>
        Quando está ativo, o script do Google Analytics 4 carrega para todo visitante e começa
        sempre em modo de consentimento negado. Nesse modo ele não grava cookies nem
        identificadores no seu navegador e manda ao Google só sinais sem cookie, que chegam com o
        que qualquer requisição web leva (IP e navegador). Se você clicar em &quot;Aceitar&quot;
        no aviso de cookies, ele passa a gravar cookies
        próprios (como o _ga) para reconhecer visitas repetidas e medir quais páginas são lidas. Se
        você escolher &quot;Só o essencial&quot;, ele continua no modo negado. O Google informa que o
        GA4 não armazena endereços IP individuais. Não há pixel de rede social no site.
      </p>

      <h3 id="cookies-publicidade">2.3 Cookies de publicidade (Google AdSense)</h3>
      <p>
        O site é preparado para exibir anúncios do Google AdSense. Quando os anúncios estiverem
        ativos, o script do AdSense só carrega depois da sua escolha no aviso de cookies. A partir
        daí, o Google e os parceiros dele (incluindo a rede DoubleClick) podem gravar cookies e
        identificadores no seu navegador para exibir anúncios, medir se foram vistos e evitar
        fraude. Com o seu consentimento, esses cookies também servem para personalizar os anúncios
        com base nas suas visitas a este e a outros sites. Se você escolher &quot;Só o
        essencial&quot;, o site pede ao Google anúncios não personalizados, que não usam o seu
        histórico de navegação.
      </p>
      <p>
        O Google explica como usa esses dados em{" "}
        <ExternalLink href="https://policies.google.com/technologies/partner-sites">
          Como o Google usa informações de sites ou apps que usam nossos serviços
        </ExternalLink>
        . Você pode ajustar a personalização de anúncios da sua conta Google em{" "}
        <ExternalLink href="https://adssettings.google.com/">adssettings.google.com</ExternalLink>.
      </p>

      <h3 id="cotacoes">2.4 Cotações e dados da rede consultados pelo seu navegador</h3>
      <p>
        A barra de cotações do topo, presente em todas as páginas, e as páginas de{" "}
        <Link href="/bitcoin">preço do Bitcoin</Link>, <Link href="/mercado">mercado</Link>,{" "}
        <Link href="/mercado/bolhas">bolhas</Link>, das moedas e das{" "}
        <Link href="/ferramentas">ferramentas</Link> buscam cotações e dados da rede direto do seu
        navegador, em APIs públicas: Binance (data-api.binance.vision), Mercado Bitcoin, Kraken,
        Coinbase, CoinPaprika, CoinGecko (variação de 30 dias e de 1 ano no ranking), mempool.space e
        alternative.me (índice de medo e ganância). A barra do topo e o preço do Bitcoin são
        atualizados a cada 10 segundos, então essas consultas se repetem enquanto a página fica
        aberta.
      </p>
      <p>
        Como em qualquer requisição na internet, esses serviços recebem o seu endereço IP, o
        navegador (user agent) e a página de origem. O site não manda a eles nenhum outro dado seu,
        porque não existe conta, login nem identificador de visitante. Parte dos dados é buscada
        pelo próprio site, sem nenhuma informação sua: o servidor consulta as cotações para a página
        já chegar com os números, e o histórico de preços (com dados da blockchain.com e da cotação
        PTAX do Banco Central) é coletado por uma rotina do site e servido a partir dele.
      </p>
      <p>
        Os valores que você digita no conversor, na calculadora DCA ou no &quot;se eu tivesse
        investido&quot; são calculados no seu navegador e não são enviados ao servidor do site. A
        busca também roda no navegador, sobre um índice baixado do próprio site, e o servidor não
        processa o termo pesquisado. O termo aparece no endereço da página de busca (/busca?q=...)
        e, por isso, pode ficar nos registros de acesso da seção 2.1.
      </p>

      <h3 id="imagens">2.5 Imagens carregadas de outros servidores</h3>
      <p>
        Algumas imagens vêm direto de outros servidores: fotos de capa e do corpo dos textos do
        Wikimedia Commons (e, em algumas, dos bancos de imagens Pexels e Pixabay) e logos das moedas
        da CoinPaprika. As fotos de produtos da <Link href="/loja">Loja do Bitcoin</Link> e do{" "}
        <Link href="/categoria/cripto-indica">Cripto Indica</Link> ficam, em regra, nos servidores
        do próprio site. Quando alguma vier direto dos servidores de imagem da Amazon, vale o mesmo
        que para as outras. Ao carregar uma imagem, o seu navegador faz uma requisição a esse
        servidor, que recebe o seu IP e o navegador, como acontece em qualquer site. Eles não
        recebem nenhuma outra informação sua por meio deste site.
      </p>

      <h3 id="preferencias-locais">2.6 Preferências guardadas no seu navegador</h3>
      <p>
        O site guarda no armazenamento local do navegador (localStorage, não em cookie) duas
        preferências: o tema escolhido, claro ou escuro (chave bdb-theme), e a sua resposta ao aviso
        de cookies, com a data da escolha (chave bdb-consent). Elas ficam só no seu dispositivo e
        nunca são enviadas ao servidor do site. Você apaga as duas limpando os dados do site no
        navegador.
      </p>

      <h3 id="contato">2.7 Quando você escreve para o site</h3>
      <p>
        O formulário da página de <Link href="/contato">contato</Link> pede nome, e-mail, assunto e
        mensagem. Ao enviar, o servidor do site repassa esses dados por e-mail ao editor, usando o
        serviço de envio Resend. O seu e-mail é usado só para responder. Nada disso vai para lista de
        newsletter, para anunciante ou para qualquer outro uso. O mesmo vale se você escrever direto
        para <a href={`mailto:${author.email}`}>{author.email}</a>.
      </p>

      <h2 id="bases-legais">3. Bases legais (art. 7º da LGPD)</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Tratamento</th>
              <th>Base legal</th>
              <th>Finalidade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Logs de hospedagem</td>
              <td>Legítimo interesse (art. 7º, IX)</td>
              <td>Segurança, disponibilidade e diagnóstico de erros</td>
            </tr>
            <tr>
              <td>Medição de audiência sem cookies (Vercel)</td>
              <td>Legítimo interesse (art. 7º, IX)</td>
              <td>Saber quais conteúdos são lidos, de forma agregada</td>
            </tr>
            <tr>
              <td>Google Analytics sem cookies (consentimento negado ou ainda não dado)</td>
              <td>Legítimo interesse (art. 7º, IX)</td>
              <td>Medição agregada de audiência, sem identificar o visitante</td>
            </tr>
            <tr>
              <td>Cookies do Google Analytics</td>
              <td>Consentimento (art. 7º, I)</td>
              <td>Medir visitas repetidas e páginas lidas</td>
            </tr>
            <tr>
              <td>Cookies de publicidade personalizada</td>
              <td>Consentimento (art. 7º, I)</td>
              <td>Exibir anúncios relevantes e sustentar o site</td>
            </tr>
            <tr>
              <td>Anúncios não personalizados</td>
              <td>Legítimo interesse (art. 7º, IX)</td>
              <td>Exibir anúncios sem perfil de interesse, com medição básica</td>
            </tr>
            <tr>
              <td>Consultas às APIs de cotação e carregamento de imagens</td>
              <td>Legítimo interesse (art. 7º, IX)</td>
              <td>Mostrar preço, dados da rede e imagens das páginas</td>
            </tr>
            <tr>
              <td>Formulário de contato e e-mails</td>
              <td>Execução de procedimento a pedido do titular (art. 7º, V)</td>
              <td>Atender dúvidas, correções, sugestões e pedidos LGPD</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="consentimento">4. Como aceitar, recusar ou mudar de ideia sobre cookies</h2>
      <p>
        Quando o Google Analytics ou os anúncios estiverem ativos, na primeira visita aparece um aviso
        de cookies com duas opções: &quot;Aceitar&quot; ou &quot;Só o essencial&quot;. Nenhum cookie
        do Google é gravado antes da sua escolha, e o script de anúncios só carrega depois dela. Para
        mudar a decisão, use o link &quot;Preferências de cookies&quot; no rodapé de qualquer página,
        que reabre o aviso. Você também pode apagar os cookies pelo próprio navegador e desativar a
        personalização na sua conta Google, em{" "}
        <ExternalLink href="https://adssettings.google.com/">adssettings.google.com</ExternalLink>.
      </p>
      <p>
        Se nem o Google Analytics nem os anúncios estiverem ativos, o aviso não aparece, porque não
        há cookie de terceiros para consentir.
      </p>

      <h2 id="compartilhamento">5. Com quem os dados são compartilhados</h2>
      <ul>
        <li>
          <strong>Vercel Inc.</strong> (hospedagem, entrega das páginas e medição de audiência sem
          cookies): recebe os registros técnicos de acesso.
        </li>
        <li>
          <strong>Google LLC</strong> (Google Analytics, Google AdSense e rede DoubleClick): recebe
          os dados descritos nas seções 2.2 e 2.3, quando esses serviços estiverem ativos.
        </li>
        <li>
          <strong>Resend</strong> (envio de e-mail): processa o nome, o e-mail, o assunto e a
          mensagem que você manda pelo formulário de contato, só para entregá-los ao editor.
        </li>
        <li>
          <strong>APIs públicas de cotação</strong> (Binance, Mercado Bitcoin, Kraken, Coinbase,
          CoinPaprika, CoinGecko, mempool.space e alternative.me): recebem só o que qualquer
          requisição web envia, como IP e navegador, quando o seu navegador busca as cotações.
        </li>
        <li>
          <strong>Servidores de imagem</strong> (Wikimedia Commons, CoinPaprika, Pexels, Pixabay e,
          quando houver, Amazon): recebem IP e navegador quando o seu navegador carrega uma imagem
          deles.
        </li>
        <li>
          <strong>Amazon</strong> (Programa de Associados, tag {site.amazonTag}): fora alguma
          imagem, como descrito acima, só entra em cena se você clicar num link de produto. A partir
          daí você está no site da Amazon, que segue a política de privacidade dela. O Blog do
          Bitcoin recebe da Amazon apenas relatórios de vendas e cliques, sem identificar quem
          comprou.
        </li>
        <li>
          <strong>Shopee</strong> (Programa de Afiliados): também só entra em cena se você clicar num
          link de produto da Shopee (links que começam com s.shopee.com.br). A partir daí você está
          no site ou no app da Shopee, que segue a política de privacidade dela. O Blog do Bitcoin
          recebe da Shopee apenas relatórios do desempenho dos links, como cliques e vendas, sem
          identificar quem comprou.
        </li>
      </ul>
      <p>
        O site não vende dados pessoais e não os compartilha com mais ninguém, salvo obrigação legal
        ou ordem de autoridade competente.
      </p>

      <h2 id="transferencia-internacional">6. Transferência internacional</h2>
      <p>
        Vercel, Google, Resend, Amazon, Shopee, Wikimedia e boa parte das APIs de cotação operam servidores
        fora do Brasil. Por isso os dados descritos acima podem ser processados fora do país. Com
        os fornecedores que prestam serviço ao site (hospedagem, envio de e-mail e Google), a
        transferência segue os termos e compromissos de proteção de dados que eles oferecem,
        conforme o art. 33 da LGPD. Nas APIs públicas e nos servidores de imagem, quem faz a
        requisição é o seu próprio navegador, ao abrir a página.
      </p>

      <h2 id="retencao">7. Por quanto tempo os dados ficam guardados</h2>
      <ul>
        <li>Logs de hospedagem: pelo prazo padrão da Vercel, de curta duração, e depois descartados.</li>
        <li>Dados de audiência: só de forma agregada, sem identificação individual.</li>
        <li>
          Cookies do Google: pelo prazo definido pelo Google em cada cookie, que você pode encurtar
          apagando-os no navegador.
        </li>
        <li>
          Mensagens do formulário e e-mails: pelo tempo necessário para tratar o pedido e comprovar o
          atendimento. O Resend guarda registros de envio pelo prazo da política dele.
        </li>
        <li>Preferências locais (bdb-theme e bdb-consent): até você limpar os dados do navegador.</li>
      </ul>

      <h2 id="seus-direitos">8. Seus direitos (art. 18 da LGPD)</h2>
      <p>Você pode pedir, a qualquer momento e sem custo:</p>
      <ul>
        <li>confirmação de que existe tratamento de dados seus e acesso a eles;</li>
        <li>correção de dados incompletos, inexatos ou desatualizados;</li>
        <li>anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade;</li>
        <li>portabilidade, quando aplicável;</li>
        <li>informação sobre com quem os dados foram compartilhados;</li>
        <li>informação sobre a possibilidade de não dar consentimento e as consequências disso;</li>
        <li>revogação do consentimento, que vale dali em diante.</li>
      </ul>
      <p>
        Para exercer qualquer um desses direitos, escreva para o encarregado, {author.name}, em{" "}
        <a href={`mailto:${author.email}`}>{author.email}</a>, com o assunto &quot;Dados pessoais
        (LGPD)&quot;. Como o site não mantém cadastro, pode ser necessário pedir alguma informação
        para confirmar que a solicitação é sua. O prazo de resposta é de até 15 dias. Se você
        entender que o pedido não foi atendido, pode registrar reclamação na Autoridade Nacional de
        Proteção de Dados (ANPD), em{" "}
        <ExternalLink href="https://www.gov.br/anpd/">gov.br/anpd</ExternalLink>.
      </p>

      <h2 id="menores">9. Crianças e adolescentes</h2>
      <p>
        O conteúdo do site é voltado a adultos e não é direcionado a crianças nem a adolescentes.
        Nenhum dado de menor é coletado de forma intencional. Se um responsável identificar dados de uma criança
        aqui, basta avisar pelo e-mail para que sejam removidos.
      </p>

      <h2 id="seguranca">10. Segurança</h2>
      <p>
        O site é servido apenas por HTTPS, não guarda banco de dados de visitantes e usa cabeçalhos
        de segurança (como Content Security Policy) para limitar quais domínios podem carregar
        scripts nas páginas. O formulário de contato tem filtros contra robôs. Nenhum sistema é
        infalível, mas a superfície aqui é pequena de propósito: quanto menos dado coletado, menos
        dado para proteger.
      </p>
      <p>
        O Blog do Bitcoin nunca pede frase de recuperação (seed), chave privada, senha de corretora
        ou código de autenticação. Nenhuma página do site tem campo para isso. Se alguém pedir esses
        dados em nome do site, por e-mail, mensagem ou rede social, é golpe. Veja também o{" "}
        <Link href="/aviso-de-risco">aviso de risco</Link>.
      </p>

      <h2 id="links-externos">11. Links para outros sites</h2>
      <p>
        Artigos e notícias linkam para sites de terceiros, como fontes de notícias, documentação de
        projetos, a Amazon e a Shopee. Cada um tem a própria política de privacidade, e esta política não se
        aplica a eles.
      </p>

      <h2 id="alteracoes">12. Alterações nesta política</h2>
      <p>
        Esta política pode mudar quando o site ganhar novos recursos ou quando a legislação mudar.
        A data da versão em vigor aparece no topo da página, em &quot;Atualizado em&quot;, e muda a
        cada revisão do texto.
      </p>
      <p>
        Versão desta política: 22 de outubro de 2026. Dúvidas:{" "}
        <a href={`mailto:${author.email}`}>{author.email}</a> ou a página de{" "}
        <Link href="/contato">contato</Link>. Veja também os{" "}
        <Link href="/termos-de-uso">termos de uso</Link> e a página{" "}
        <Link href="/publicidade-e-afiliados">publicidade e afiliados</Link>.
      </p>
    </InstitutionalPage>
  );
}

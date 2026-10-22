import type { Metadata } from "next";
import Link from "next/link";
import { InstitutionalPage, institutionalMetadata } from "@/components/InstitutionalPage";
import { site } from "@/lib/articles";
import { author } from "@/lib/author";

const PATH = "/politica-editorial";
const TITLE = "Política editorial e uso de IA";
const DESCRIPTION =
  "Como o Blog do Bitcoin escolhe pautas, usa IA com revisão humana, checa fontes, dá nota a produtos, trata conflitos de interesse e corrige erros.";

export const metadata: Metadata = institutionalMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

export default function PoliticaEditorialPage() {
  return (
    <InstitutionalPage
      label="Institucional"
      title={TITLE}
      lead="O Blog do Bitcoin explica Bitcoin e criptomoedas para o leitor brasileiro. Usamos ferramentas de IA na produção, com checagem de fontes e revisão do editor. Esta página mostra como isso funciona e o padrão que cada artigo, notícia e review precisa cumprir antes de ir ao ar."
      path={PATH}
    >
      <h2 id="quem-responde">1. Quem responde pelo conteúdo</h2>
      <p>
        Todo o conteúdo do {site.name} é editado por{" "}
        <Link href={author.url}>{author.name}</Link>, editor do site e criador do projeto Vocação de
        Pai. Não existe redação terceirizada nem autor convidado. Se isso mudar, esta página muda
        junto e cada texto passa a indicar quem o escreveu.
      </p>

      <h2 id="pautas">2. Como as pautas são escolhidas</h2>
      <p>Uma pauta entra no site quando responde a pelo menos uma destas perguntas:</p>
      <ul>
        <li>É uma dúvida real de quem está começando em cripto e ainda não tem resposta clara em português?</li>
        <li>Ajuda o leitor a se proteger de golpe, de erro de custódia ou de taxa escondida?</li>
        <li>Muda alguma coisa prática para quem compra, guarda ou declara cripto no Brasil?</li>
        <li>É um fato relevante do mercado ou da rede do Bitcoin que precisa de contexto?</li>
        <li>É um produto que as pessoas estão pensando em comprar e que merece uma análise honesta?</li>
      </ul>
      <p>
        Sugestões de leitores contam. Mande pela página de <Link href="/contato">contato</Link>. Não
        entram pautas pagas, textos enviados por corretoras ou projetos para publicação como se
        fossem do site, divulgação de token novo nem conteúdo feito só para ranquear uma
        palavra-chave sem entregar nada a quem lê.
      </p>

      <h2 id="uso-de-ia">3. Como a IA é usada na produção</h2>
      <p>Ferramentas de IA participam da produção em três momentos:</p>
      <ul>
        <li>
          <strong>Pesquisa</strong>: levantar o que já existe sobre o tema, organizar fontes e
          resumir documentação oficial.
        </li>
        <li>
          <strong>Rascunho</strong>: escrever uma primeira versão a partir de um roteiro e de
          instruções definidas pelo editor.
        </li>
        <li>
          <strong>Revisão de forma</strong>: apontar erros de gramática, frases confusas e trechos
          repetidos.
        </li>
      </ul>
      <p>
        Parte da publicação é automatizada. Rotinas diárias preparam artigos, notícias e reviews a
        partir de fontes e regras definidas pelo editor. Antes de publicar, cada texto passa por uma verificação
        automática (tamanho mínimo, links internos, ausência de código perigoso, data válida). Essa
        verificação não julga se o texto está certo. Isso é trabalho do editor.
      </p>

      <h2 id="revisao-humana">4. O que é sempre responsabilidade de uma pessoa</h2>
      <ul>
        <li>Escolher as pautas e decidir o que entra e o que fica de fora.</li>
        <li>Definir as regras que as rotinas automáticas seguem.</li>
        <li>Revisar afirmações factuais, números, datas e nomes contra a fonte.</li>
        <li>Responder pelo que foi publicado.</li>
        <li>Corrigir erros apontados por leitores.</li>
      </ul>
      <p>
        Se um texto sair errado, a responsabilidade é do editor, não da ferramenta. Por isso cada
        artigo leva assinatura e e-mail de contato.
      </p>

      <h2 id="fontes">5. Checagem de fontes</h2>
      <p>
        Em cripto circula muito boato. Por isso a regra é simples: afirmação verificável aponta para
        a fonte primária. Isso inclui o whitepaper e a documentação oficial de cada projeto, dados da
        própria rede (como blocos e taxas no mempool.space), comunicados oficiais de empresas,
        normas do Banco Central e da Receita Federal e decisões de órgãos públicos. A fonte entra
        como link no próprio texto, na mesma frase ou no mesmo parágrafo da afirmação. Nas
        notícias, a fonte original aparece também numa caixa ao fim da matéria.
      </p>
      <p>
        Quando só existe fonte secundária, o texto diz isso. Quando duas fontes discordam, o texto
        mostra as duas versões em vez de escolher a mais chamativa. Post em rede social, print sem
        origem e &quot;fonte anônima&quot; não sustentam fato sozinhos.
      </p>

      <h2 id="sem-recomendacao">6. Sem recomendação de investimento e sem previsão de preço</h2>
      <p>
        Nada no {site.name} é recomendação de compra, venda ou investimento. O site explica como as
        coisas funcionam, mostra os riscos e compara opções. A decisão é sempre do leitor.
      </p>
      <ul>
        <li>O site não faz previsão de cotação nem publica &quot;alvo de preço&quot; ou sinal de compra.</li>
        <li>
          Quando um analista ou instituição faz uma projeção e isso é notícia, o texto atribui a
          projeção a quem fez e deixa claro que é opinião de terceiro.
        </li>
        <li>Não prometemos ganho, renda passiva garantida nem &quot;oportunidade única&quot;.</li>
      </ul>
      <p>
        Ferramentas como a calculadora DCA e o &quot;se eu tivesse investido&quot; mostram o passado,
        não o futuro. Leia também o <Link href="/aviso-de-risco">aviso de risco</Link>.
      </p>

      <h2 id="cotacoes">7. Cotações e dados de mercado</h2>
      <p>
        Os preços e dados em <Link href="/bitcoin">/bitcoin</Link>, em <Link href="/mercado">/mercado</Link>{" "}
        e nas <Link href="/ferramentas">ferramentas</Link> vêm de APIs públicas: Binance, Mercado
        Bitcoin, Kraken, Coinbase e CoinPaprika para cotações e ranking, mempool.space para os
        dados da rede e do halving, alternative.me para o índice de medo e ganância, e
        blockchain.com e a PTAX do Banco Central para o histórico. A cotação é informativa. Ela pode
        atrasar, divergir entre corretoras ou falhar por alguns minutos. Antes de qualquer operação,
        confira o preço na corretora que você usa.
      </p>

      <h2 id="conflitos">8. Conflitos de interesse</h2>
      <p>
        O editor pode ter ou não ter criptomoedas, como qualquer pessoa que acompanha o tema. O que
        vale aqui é a transparência: quando existe um conflito relevante para um texto específico
        (uma posição no ativo analisado, uma relação com a empresa citada, um pagamento recebido), o
        conflito é informado no próprio texto. Nenhum projeto, corretora ou emissor de token paga
        para ser citado ou bem avaliado.
      </p>
      <p>
        Os anúncios, quando aparecem, são escolhidos pelo Google AdSense. Nenhum anunciante escolhe
        pauta, muda texto ou compra nota.
      </p>

      <h2 id="reviews">9. Reviews e comparativos de produto</h2>
      <p>
        Os reviews e comparativos ficam em{" "}
        <Link href="/categoria/cripto-indica">Cripto Indica</Link> e na{" "}
        <Link href="/loja">Loja do Bitcoin</Link>. Cada produto recebe nota de 0 a 10, a partir de
        cinco critérios públicos:
      </p>
      <ul>
        <li>
          <strong>Segurança</strong>: como o produto protege as chaves, o dinheiro e os dados de
          quem usa.
        </li>
        <li>
          <strong>Facilidade de uso</strong>: se alguém sem experiência consegue configurar e usar
          sem erro.
        </li>
        <li>
          <strong>Recursos</strong>: o que o produto faz, quais moedas e funções suporta.
        </li>
        <li>
          <strong>Custo-benefício</strong>: o que ele entrega pelo preço que costuma custar no Brasil.
        </li>
        <li>
          <strong>Reputação</strong>: histórico do fabricante, falhas conhecidas e o que dizem os
          compradores.
        </li>
      </ul>
      <p>
        Nem todo critério pesa igual em todo produto. Numa carteira de hardware, segurança vem
        primeiro. Num livro ou numa camiseta, contam mais o conteúdo, o acabamento e o
        custo-benefício. O review mostra a nota de cada critério e explica como chegou à nota final.
      </p>
      <p>
        O review diz de onde veio a análise. Quando ela se baseia em ficha técnica, manual,
        documentação oficial e avaliações de compradores, isso é dito sem disfarce. O site não alega
        teste prático que não aconteceu. Nota quebrada (como 7,8) é proposital: mostra diferença real
        entre dois produtos que em nota inteira pareceriam iguais. Se o produto mudar de forma
        relevante, o review é revisado e a nota pode mudar.
      </p>

      <h2 id="afiliados">10. Link de afiliado não muda a nota</h2>
      <p>
        O site participa do Programa de Associados da Amazon. Quando alguém compra pelo link, o site
        pode receber uma comissão, sem custo extra para quem compra. Essa comissão não entra no
        cálculo da nota, não decide qual produto vence um comparativo e não impede o texto de
        apontar defeitos. Um produto ruim continua com nota ruim, mesmo com link de afiliado. As
        regras completas estão em{" "}
        <Link href="/publicidade-e-afiliados">publicidade e afiliados</Link>.
      </p>

      <h2 id="precos">11. Faixa de preço pesquisada em várias lojas</h2>
      <p>
        Os reviews não mostram preço exato, porque o preço muda todo dia. Mostram uma faixa
        aproximada, pesquisada na internet como um todo: várias lojas, comparadores de preço e site
        do fabricante, não só a Amazon. Só entra na faixa o mesmo produto, da mesma marca e do mesmo
        modelo. Sem confirmação, o texto diz que o preço varia e não arrisca número. O valor do dia
        aparece ao clicar no botão de compra.
      </p>

      <h2 id="memorias">12. Memórias do Bitcoin e conteúdo histórico</h2>
      <p>
        A página de <Link href="/historia">história do Bitcoin</Link> reúne a linha do tempo e as
        curiosidades da série Memórias do Bitcoin. Cada fato histórico se apoia em fonte primária sempre que ela existe:
        o whitepaper, as mensagens públicas de Satoshi Nakamoto, os registros da própria blockchain,
        documentos e reportagens da época. Data, número e citação são conferidos contra essa fonte.
        As histórias completas ficam na categoria{" "}
        <Link href="/categoria/historia">Memórias do Bitcoin</Link>.
      </p>
      <p>
        A história do Bitcoin tem muita lenda. Quando uma história é famosa mas não tem comprovação,
        ela aparece como lenda ou relato não confirmado, nunca como fato. O mesmo vale para as
        teorias sobre a identidade de Satoshi.
      </p>

      <h2 id="noticias">13. Notícias</h2>
      <p>
        Cada <Link href="/noticias">notícia</Link> é escrita a partir de uma fonte identificada, com
        link para a matéria ou o comunicado original. O site não copia matérias. Resume o fato,
        explica o contexto e o que aquilo muda para quem está no Brasil. Rumor de mercado só vira
        notícia quando confirmado, e mesmo assim com a fonte citada. Se a fonte corrigir um fato, a
        notícia é atualizada com a correção indicada.
      </p>

      <h2 id="correcoes">14. Correções e atualizações</h2>
      <p>
        Erros acontecem. Quem encontrar um pode escrever para{" "}
        <a href={`mailto:${author.email}`}>{author.email}</a> com o link da página e o trecho. Erros
        confirmados são corrigidos em até 5 dias úteis. Num artigo, a correção de fato (um número
        errado, uma data trocada, uma afirmação incorreta) recebe a marcação &quot;Atualizado
        em&quot; com a nova data. Numa notícia, a correção é indicada no próprio texto. Ajustes de
        forma (erro de digitação, link quebrado) são feitos sem marcação.
      </p>
      <p>
        Nenhum texto publicado é apagado em silêncio. Um texto que se mostre errado no todo é
        reescrito no mesmo endereço, com uma nota explicando o que mudou e por quê.
      </p>
      <p>
        Cripto muda rápido: taxas, regras de corretoras e normas mudam. Artigos antigos são revistos
        aos poucos, e quando um deles é atualizado recebe a nova data.
      </p>

      <h2 id="datas">15. Datas de publicação</h2>
      <p>
        Todo artigo e toda notícia mostram a data de publicação. Quando um artigo passa por revisão
        de conteúdo, mostra também a data de atualização, que é a informada aos mecanismos de
        busca. As datas seguem o horário de Brasília, e nenhum texto é publicado com data futura.
      </p>

      <p>
        Veja também <Link href="/sobre">sobre o site</Link>, o{" "}
        <Link href="/glossario">glossário</Link> e a{" "}
        <Link href="/politica-de-privacidade">política de privacidade</Link>.
      </p>
    </InstitutionalPage>
  );
}

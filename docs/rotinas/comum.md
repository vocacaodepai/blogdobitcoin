# Rotinas automáticas: regras comuns

Vale para toda rotina agendada do Blog do Bitcoin (notícias, artigos, Cripto Indica e
loja da Amazon, Cripto Indica e loja da Shopee, manutenção). Cada rotina tem o seu arquivo nesta pasta com o roteiro específico.

## Ambiente

- Trabalhe sempre num clone próprio e isolado em `/tmp`, nunca numa pasta compartilhada:
  `git clone https://github.com/vocacaodepai/blogdobitcoin /tmp/bdb-<rotina>-$(date +%s)`.
- Antes de clonar, limpe só clones órfãos antigos da mesma rotina:
  `find /tmp -maxdepth 1 -name 'bdb-<rotina>-*' -mmin +180 -exec rm -rf {} +`.
  Nunca apague clone recente (outra rotina pode estar rodando).
- Ao final, publicando ou não, remova o seu clone.
- Branch da rodada: `git checkout -B claude/bdb-<rotina>-$(TZ=America/Sao_Paulo date +%Y%m%d-%H%M) origin/main -q`
  e `npm ci --silent`. A branch de produção é `main`.
- Datas e horas sempre em `America/Sao_Paulo`.

## Leitura obrigatória antes de escrever

`CLAUDE.md`, `docs/padrao-editorial.md` e o arquivo da rotina. Veja 2 itens recentes do
mesmo tipo como modelo e `lib/types.ts` para os campos.

## Nunca

- Inventar fato, número, citação, URL, produto, ASIN, itemId da Shopee, preço ou especificação.
- Gravar credencial (Shopee App ID/Secret, chave de API, token) em arquivo do repositório, diff,
  commit, PR, comentário ou log. Segredo só por variável de ambiente ou ~/.config (fora do repo).
- Recomendação de investimento, previsão de preço como fato, cotação do dia fixa em artigo.
- Travessão (—), "Em resumo", "É importante ressaltar", mencionar IA/Claude como autor.
- Alterar `lib/` (exceto quando a rotina diz), `app/`, `components/`, `scripts/`, `docs/`,
  `CLAUDE.md` ou configuração numa rotina de conteúdo. Segredo no diff.
- Apagar notícia ou artigo publicado (URL indexada continua no ar).

## Validação (toda rodada)

```bash
npm run check:content   # zero ERRO
npm run check:covers -- <slugs novos>   # a capa é mesmo do assunto?
npx eslint .            # zero erro
npm run build           # zero erro
```

Capa errada (outra pessoa, outra empresa, outra moeda): fixe um arquivo do Commons
conferido com `imageQuery: "File:Nome exato do arquivo.jpg"` ou troque por uma busca
descritiva. Sem foto certa, deixe a capa ilustrada (busca "<nome> portrait" sem achado).

`git diff --stat` só pode mostrar os arquivos que a rotina pode tocar. Conflito em
`content/*/index.ts`: faça merge da base, aceite a versão da base e rode
`npm run check:content` para regenerar.

## Git e publicação

- Commit em português, sem citar modelo ou IA na mensagem, terminando com as linhas de
  atribuição padrão da sessão.
- `git push -u origin <branch>`, PR para `main` (`mcp__github__create_pull_request`,
  owner `vocacaodepai`, repo `blogdobitcoin`), espere os checks (deploy de preview da
  Vercel, quando existir) e mescle por squash (`mcp__github__merge_pull_request`). O dono
  autorizou o merge automático nas rotinas.
- Falha transitória de rede no build (fonte do Google, API externa): um novo deploy, não é
  erro do PR.

## Informe final

Poucas frases em português, sem travessão: o que entrou (títulos ou contagem), se
check-content, lint e build passaram, o link do PR mesclado e
https://www.blogdobitcoin.com.br. Sem publicação, sem mensagem (rotinas de notícia) ou
"nada novo hoje" (demais rotinas).

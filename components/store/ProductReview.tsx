import Link from "next/link";
import type { Product } from "@/lib/types";
import { priceCheckedLabel, priceRangeText, priceReviewText, productStore, productStoreInfo } from "@/lib/products";
import { ProductBuyButton } from "./ProductBuyButton";

function score(n: number) {
  return n.toFixed(1).replace(".", ",");
}

/**
 * Review longa do produto na Loja do Bitcoin (mesmo conceito da loja "A mãe
 * quer desconto!"): veredito com nota e critérios, prós e contras, ideal para,
 * em 3 pontos, seções com botões de compra, faixa de preço, ficha técnica, o
 * que dizem outros compradores, como avaliamos, opinião e perguntas frequentes.
 * Todo o conteúdo é texto puro renderizado pelo React (sem HTML bruto).
 */
export function ProductReview({ product }: { product: Product }) {
  const review = product.review;
  if (!review) return null;
  const range = priceRangeText(product);
  const checked = priceCheckedLabel(product);
  const storeInfo = productStoreInfo(product);
  const isShopee = productStore(product) === "shopee";

  return (
    <section id="review" aria-labelledby="review-titulo" className="scroll-mt-24">
      <p className="label-mono text-accent">Review do Blog do Bitcoin</p>
      <h2 id="review-titulo" className="mt-1 font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
        {review.title}
      </h2>
      <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted">{review.summary}</p>

      <div className="mt-6 grid gap-5 rounded-2xl border border-border bg-surface p-5 sm:grid-cols-[auto_1fr] sm:p-7">
        <div className="flex flex-col items-center justify-center rounded-xl bg-brand/10 px-8 py-5 text-center">
          <p className="label-mono text-muted">Veredito</p>
          <p className="font-display text-5xl font-extrabold text-accent">{score(review.score)}</p>
          <p className="text-xs font-semibold text-muted">de 10</p>
        </div>
        <ul className="space-y-2.5">
          {review.criteria.map((c) => (
            <li key={c.label}>
              <div className="flex items-center justify-between text-sm font-semibold">
                <span>{c.label}</span>
                <span className="font-mono text-accent">{score(c.score)}</span>
              </div>
              <div className="mt-1 h-2 overflow-hidden rounded-full bg-surface-2">
                <div className="h-full rounded-full bg-brand" style={{ width: `${Math.min(100, Math.max(0, c.score * 10))}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-up/30 bg-up/5 p-5">
          <h3 className="font-display text-lg font-bold">Pontos fortes</h3>
          <ul className="mt-3 space-y-2">
            {product.pros.map((p) => (
              <li key={p} className="flex gap-2 text-sm leading-relaxed">
                <span aria-hidden="true" className="font-bold text-up">
                  ✓
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-surface p-5">
          <h3 className="font-display text-lg font-bold">Pontos de atenção</h3>
          <ul className="mt-3 space-y-2">
            {product.cons.map((c) => (
              <li key={c} className="flex gap-2 text-sm leading-relaxed">
                <span aria-hidden="true" className="font-bold text-down">
                  !
                </span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-brand/30 bg-brand/5 p-5">
        <p className="text-sm font-bold">Ideal para</p>
        <p className="mt-1 text-sm leading-relaxed text-muted">{review.idealFor}</p>
      </div>

      <div className="my-6">
        <ProductBuyButton product={product} />
      </div>

      <div className="rounded-xl border border-border bg-surface p-5">
        <h3 className="font-display text-xl font-bold">Em 3 pontos</h3>
        <ol className="mt-3 space-y-3">
          {review.keyPoints.map((p, i) => (
            <li key={p} className="flex items-start gap-3 text-sm leading-relaxed">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-brand-foreground">
                {i + 1}
              </span>
              <span>{p}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-8 space-y-8">
        {review.sections.map((s) => (
          <article key={s.title}>
            <h3 className="font-display text-xl font-bold sm:text-2xl">{s.title}</h3>
            <div className="mt-3 space-y-3">
              {s.paragraphs.map((p, j) => (
                <p key={j} className="text-base leading-relaxed text-foreground/90">
                  {p}
                </p>
              ))}
            </div>
            {s.cta && (
              <div className="mt-5">
                <ProductBuyButton product={product} />
              </div>
            )}
          </article>
        ))}

        <article>
          <h3 className="font-display text-xl font-bold sm:text-2xl">Variação de preço</h3>
          <p className="mt-3 text-base leading-relaxed text-foreground/90">
            {review.priceText ? `${review.priceText} ` : ""}
            {priceReviewText(product, range, checked)}{" "}
            O valor do dia aparece ao clicar no botão de compra.
          </p>
          <div className="mt-5">
            <ProductBuyButton product={product} />
          </div>
        </article>

        {review.specs.length > 0 && (
          <article>
            <h3 className="font-display text-xl font-bold sm:text-2xl">Ficha técnica resumida</h3>
            <ul className="mt-3 divide-y divide-border rounded-xl border border-border bg-surface">
              {review.specs.map((row) => (
                <li key={row} className="px-4 py-2.5 text-sm leading-relaxed">
                  {row}
                </li>
              ))}
            </ul>
          </article>
        )}

        {review.othersSay && review.othersSay.length > 0 && (
          <article>
            <h3 className="font-display text-xl font-bold sm:text-2xl">O que dizem outros compradores</h3>
            <ul className="mt-3 space-y-2">
              {review.othersSay.map((o) => (
                <li key={o} className="rounded-lg border border-border bg-surface px-4 py-3 text-sm leading-relaxed">
                  {o}
                </li>
              ))}
            </ul>
          </article>
        )}

        <article>
          <h3 className="font-display text-xl font-bold sm:text-2xl">Como avaliamos</h3>
          <p className="mt-3 text-base leading-relaxed text-foreground/90">{review.howWeEvaluated}</p>
        </article>

        <article className="rounded-xl border border-brand/30 bg-brand/5 p-5">
          <h3 className="font-display text-lg font-bold">A opinião do Blog do Bitcoin</h3>
          <p className="mt-2 text-base leading-relaxed text-foreground/90">{review.opinion}</p>
          <div className="mt-5">
            <ProductBuyButton product={product} />
          </div>
        </article>
      </div>

      {review.faq.length > 0 && (
        <div className="mt-8">
          <h3 className="font-display text-xl font-bold sm:text-2xl">Perguntas frequentes</h3>
          <div className="mt-3 space-y-2">
            {review.faq.map((f) => (
              <details key={f.question} className="group rounded-xl border border-border bg-surface px-5 py-3">
                <summary className="cursor-pointer list-none text-sm font-bold [&::-webkit-details-marker]:hidden">{f.question}</summary>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      )}

      <p className="mt-6 text-xs leading-relaxed text-muted">
        Transparência: esta análise é independente e se baseia na{" "}
        {isShopee
          ? "descrição do anúncio, em informações do fabricante ou da editora"
          : "ficha técnica oficial, no manual do fabricante"}{" "}
        e em opiniões reais de compradores, sem teste físico nosso.
        {isShopee && " A Shopee reúne vendedores independentes: confira a reputação de quem vende antes de comprar."} Os links são de
        afiliado da {storeInfo.label}: se você comprar por eles, o Blog do Bitcoin pode receber uma comissão, sem custo extra para
        você, e isso não muda a nota. Veja{" "}
        <Link href="/publicidade-e-afiliados" className="text-accent hover:underline">
          publicidade e afiliados
        </Link>
        .
      </p>
    </section>
  );
}

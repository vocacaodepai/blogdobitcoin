import { getNewsBySlug, news } from "@/lib/news";
import { OG_SIZE, renderOgImage } from "@/lib/og";
import { formatDate } from "@/lib/seo";

export const alt = "Capa da notícia no Blog do Bitcoin";
export const size = OG_SIZE;
export const contentType = "image/png";
export const dynamic = "force-static";

// Só os endereços conhecidos no build: slug inventado vira 404, sem gravar página nem imagem no cache.
export const dynamicParams = false;

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  const title = item?.title ?? "Blog do Bitcoin";
  const byline = item ? `via ${item.sourceName} · ${formatDate(item.date, "short")}` : undefined;

  return renderOgImage({ title, eyebrow: "Notícia", byline });
}

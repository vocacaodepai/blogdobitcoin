import type { Metadata } from "next";
import { CategoriaPage, categoriaMetadata, categoriaParams } from "@/components/listing/CategoriaPage";

type Params = Promise<{ slug: string }>;

// Só os endereços conhecidos no build: slug inventado vira 404, sem gravar página nem imagem no cache.
export const dynamicParams = false;

export function generateStaticParams() {
  return categoriaParams();
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  return categoriaMetadata(slug, 1);
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  return <CategoriaPage slug={slug} page={1} />;
}

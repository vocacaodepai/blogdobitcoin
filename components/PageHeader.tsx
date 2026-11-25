import { Breadcrumbs } from "@/components/article/Breadcrumbs";

/** Cabeçalho das páginas de ferramenta e mercado: trilha, rótulo, h1 e descrição curta. */
export function PageHeader({
  label,
  title,
  description,
  crumbs,
  children,
}: {
  label: string;
  title: string;
  description: string;
  crumbs: { name: string; href?: string }[];
  children?: React.ReactNode;
}) {
  return (
    <header className="max-w-3xl">
      <Breadcrumbs items={crumbs} />
      <p className="label-mono mt-6 text-accent">{label}</p>
      <h1 className="mt-2 font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">{title}</h1>
      <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{description}</p>
      {children}
    </header>
  );
}

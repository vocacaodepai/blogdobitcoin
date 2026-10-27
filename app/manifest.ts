import type { MetadataRoute } from "next";
import { withBasePath } from "@/lib/seo";
import { site } from "@/lib/articles";

export const dynamic = "force-static";

/** Web App Manifest: cores da marca (fundo escuro e laranja Bitcoin) e o ícone SVG. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name}: ${site.tagline}`,
    short_name: site.name,
    description: site.description,
    start_url: withBasePath("/"),
    display: "standalone",
    background_color: "#0e0d0b",
    theme_color: "#f7931a",
    lang: "pt-BR",
    icons: [{ src: withBasePath("/logo-icon.svg"), sizes: "any", type: "image/svg+xml" }],
  };
}

import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { LOGO_B, LOGO_CIRCLE, LOGO_ORANGE, LOGO_ROTATE, LOGO_TICKS } from "@/lib/logo";

export const OG_SIZE = { width: 1200, height: 630 };

// Fontes lidas uma vez por processo de build (assets/fonts, licença OFL).
const fontsPromise = Promise.all([
  readFile(join(process.cwd(), "assets/fonts/SpaceGrotesk-700.ttf")),
  readFile(join(process.cwd(), "assets/fonts/SpaceGrotesk-500.ttf")),
  readFile(join(process.cwd(), "assets/fonts/JetBrainsMono-500.ttf")),
]);

function LogoMark({ size = 56 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      <circle cx={LOGO_CIRCLE.cx} cy={LOGO_CIRCLE.cy} r={LOGO_CIRCLE.r} fill={LOGO_ORANGE} />
      <g transform={LOGO_ROTATE} fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round">
        <path d={LOGO_B} strokeWidth="2.5" />
        <path d={LOGO_TICKS} strokeWidth="1.9" />
      </g>
    </svg>
  );
}

/**
 * Imagem Open Graph padrão do site (1200x630): fundo escuro, brilho da marca,
 * rótulo em mono, título grande em Space Grotesk e rodapé com domínio/autor.
 */
export async function renderOgImage({
  title,
  eyebrow,
  footer = "blogdobitcoin.com.br",
  byline,
}: {
  title: string;
  /** Rótulo pequeno acima do título (categoria, "Notícia", "Review"). */
  eyebrow?: string;
  footer?: string;
  /** Texto à direita no rodapé (ex.: "Por Bruno Danello · 27 set 2026"). */
  byline?: string;
}) {
  const [bold, medium, mono] = await fontsPromise;
  const size = title.length > 90 ? 48 : title.length > 60 ? 56 : 64;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          backgroundColor: "#0E0D0B",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(247,147,26,0.55) 0%, rgba(247,147,26,0) 45%), radial-gradient(circle at 15% 95%, rgba(255,181,71,0.30) 0%, rgba(255,181,71,0) 40%)",
          color: "#F3EFE6",
          fontFamily: "Space Grotesk",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <LogoMark />
            <span style={{ fontSize: 34, fontWeight: 700, letterSpacing: -1, color: "#FFFFFF" }}>
              Blog do <span style={{ color: "#F7931A", marginLeft: 10 }}>Bitcoin</span>
            </span>
          </div>
          {eyebrow && (
            <span
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: 20,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#F7931A",
                border: "1px solid rgba(247,147,26,0.5)",
                borderRadius: 8,
                padding: "8px 14px",
              }}
            >
              {eyebrow}
            </span>
          )}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: size,
            fontWeight: 700,
            lineHeight: 1.12,
            letterSpacing: -1.5,
            color: "#FFFFFF",
            maxWidth: 1040,
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "JetBrains Mono",
            fontSize: 20,
            color: "#A8A093",
          }}
        >
          <span>{footer}</span>
          {byline && <span>{byline}</span>}
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Space Grotesk", data: bold, weight: 700, style: "normal" },
        { name: "Space Grotesk", data: medium, weight: 500, style: "normal" },
        { name: "JetBrains Mono", data: mono, weight: 500, style: "normal" },
      ],
    }
  );
}

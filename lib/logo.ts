/**
 * Geometria da marca do Blog do Bitcoin: um círculo laranja com o "B" de duas
 * hastes (₿) inclinado, desenhado em traço (sem depender de fonte).
 * viewBox 0 0 32 32. Usada pelo <Logo/>, pelo favicon e pela imagem Open Graph.
 */
export const LOGO_VIEWBOX = "0 0 32 32";
export const LOGO_ORANGE = "#F7931A";
export const LOGO_CIRCLE = { cx: 16, cy: 16, r: 15 };
/** Haste e os dois bojos do B. */
export const LOGO_B = "M12.2 9.3V22.7M12.2 9.6H17.2A3.15 3.15 0 0 1 17.2 15.9H12.2M12.2 15.9H18.1A3.4 3.4 0 0 1 18.1 22.7H12.2";
/** As duas hastes que atravessam o B em cima e embaixo. */
export const LOGO_TICKS = "M14.3 6.6V9.6M17.1 6.6V9.6M14.3 22.7V25.4M17.1 22.7V25.4";
/** Inclinação do símbolo (igual à do ₿ clássico). */
export const LOGO_ROTATE = "rotate(14 16 16)";

/** SVG da marca como string (favicon, arquivos em public/ e OG). */
export function logoIconSvg({
  size = 32,
  circle = LOGO_ORANGE,
  stroke = "#FFFFFF",
}: {
  size?: number;
  circle?: string;
  stroke?: string;
} = {}): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="${LOGO_VIEWBOX}" role="img" aria-label="Blog do Bitcoin"><circle cx="${LOGO_CIRCLE.cx}" cy="${LOGO_CIRCLE.cy}" r="${LOGO_CIRCLE.r}" fill="${circle}"/><g transform="${LOGO_ROTATE}" fill="none" stroke="${stroke}" stroke-linecap="round" stroke-linejoin="round"><path d="${LOGO_B}" stroke-width="2.5"/><path d="${LOGO_TICKS}" stroke-width="1.9"/></g></svg>`;
}

import Link from "next/link";
import { LOGO_B, LOGO_CIRCLE, LOGO_ORANGE, LOGO_ROTATE, LOGO_TICKS, LOGO_VIEWBOX } from "@/lib/logo";

/** Ícone da marca: círculo laranja com o ₿ em traço branco. `mono` usa a cor do texto. */
export function LogoIcon({
  size = 28,
  className = "",
  mono = false,
}: {
  size?: number;
  className?: string;
  mono?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={LOGO_VIEWBOX}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle
        cx={LOGO_CIRCLE.cx}
        cy={LOGO_CIRCLE.cy}
        r={LOGO_CIRCLE.r}
        fill={mono ? "currentColor" : LOGO_ORANGE}
      />
      <g
        transform={LOGO_ROTATE}
        fill="none"
        stroke={mono ? "var(--background)" : "#FFFFFF"}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={LOGO_B} strokeWidth="2.5" />
        <path d={LOGO_TICKS} strokeWidth="1.9" />
      </g>
    </svg>
  );
}

/** Marca horizontal: ícone + "Blog do Bitcoin" (com "Bitcoin" em laranja). */
export function Logo({
  size = 30,
  className = "",
  href = "/",
  mono = false,
  priority = false,
}: {
  size?: number;
  className?: string;
  href?: string | null;
  mono?: boolean;
  /** Peso visual maior no header; só estilo, não muda a semântica. */
  priority?: boolean;
}) {
  const inner = (
    <>
      <LogoIcon size={size} mono={mono} className="shrink-0" />
      <span
        className={`whitespace-nowrap font-display font-bold tracking-tight ${priority ? "text-[20px]" : "text-[18px]"}`}
      >
        Blog do <span className={mono ? "" : "text-gradient"}>Bitcoin</span>
      </span>
    </>
  );
  const cls = `inline-flex items-center gap-2 text-foreground ${className}`;
  if (href === null) return <span className={cls}>{inner}</span>;
  return (
    <Link href={href} className={cls} aria-label="Blog do Bitcoin, página inicial">
      {inner}
    </Link>
  );
}

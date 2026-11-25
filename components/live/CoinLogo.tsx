import { coinLogo } from "@/lib/market/paprika";

/** Logo da moeda (CDN da CoinPaprika), com fundo neutro enquanto carrega. */
export function CoinLogo({ id, symbol, size = 24, className = "" }: { id: string; symbol: string; size?: number; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={coinLogo(id)}
      alt={`Logo ${symbol}`}
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      className={`shrink-0 rounded-full bg-surface-2 ${className}`}
    />
  );
}

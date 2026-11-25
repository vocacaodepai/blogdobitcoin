/** Mini gráfico de linha em SVG (sem eixo), cor pela direção do período. */
export function Sparkline({
  values,
  width = 120,
  height = 36,
  className = "",
  strokeWidth = 1.6,
}: {
  values: number[];
  width?: number;
  height?: number;
  className?: string;
  strokeWidth?: number;
}) {
  if (values.length < 2) return <svg width={width} height={height} className={className} aria-hidden="true" />;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  const step = width / (values.length - 1);
  const pts = values.map((v, i) => `${(i * step).toFixed(1)},${(height - 2 - ((v - min) / span) * (height - 4)).toFixed(1)}`);
  const up = values[values.length - 1] >= values[0];
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className={className} aria-hidden="true">
      <polyline
        points={pts.join(" ")}
        fill="none"
        stroke={up ? "var(--up)" : "var(--down)"}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

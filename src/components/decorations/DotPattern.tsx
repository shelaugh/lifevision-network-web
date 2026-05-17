/**
 * 装飾用ドットパターン (SVG pattern)。
 * 背景アクセント用・薄く・控えめに。
 */
type Props = {
  color?: string;
  className?: string;
};

export default function DotPattern({ color = "#9B5BFF", className = "" }: Props) {
  const patternId = `dot-${color.replace("#", "")}`;
  return (
    <svg
      aria-hidden="true"
      className={`absolute pointer-events-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id={patternId} x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="2" fill={color} fillOpacity="0.4" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}

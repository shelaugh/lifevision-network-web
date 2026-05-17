/**
 * 見出し下の手描き調アンダーライン。
 */
type Props = { color?: string; className?: string };

export default function SquiggleUnderline({ color = "#FFD647", className = "" }: Props) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 12"
      preserveAspectRatio="none"
      className={`w-full h-2 ${className}`}
    >
      <path
        d="M0,6 Q25,0 50,6 T100,6 T150,6 T200,6"
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

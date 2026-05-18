/**
 * 手描き調 SVG 装飾セット (SOU GROUP 流)。
 * 各装飾は absolute 配置前提・カラフル・カジュアル・hand-crafted。
 */

type Props = {
  color?: string;
  className?: string;
  /** ゆっくり浮遊させる (animate-float / wiggle) */
  animate?: "float" | "wiggle" | "spin" | "none";
  size?: number;
};

const animClass = (a: Props["animate"]) =>
  a === "float" ? "animate-float" :
  a === "wiggle" ? "animate-wiggle" :
  a === "spin" ? "animate-spin-slow" : "";

// === ぐるぐる星 ===
export function HandStar({ color = "#FFD647", className = "", animate = "wiggle", size = 60 }: Props) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 60 60"
      className={`${animClass(animate)} ${className}`}
      style={{ overflow: "visible" }}
    >
      <path
        d="M30 5 L36 22 L54 23 L40 35 L45 53 L30 43 L15 53 L20 35 L6 23 L24 22 Z"
        fill={color}
        stroke="#000"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// === くにゃくにゃ波線 ===
export function HandSquiggle({ color = "#FF4FB0", className = "", animate = "float", size = 80 }: Props) {
  return (
    <svg
      aria-hidden="true"
      width={size * 1.5}
      height={size * 0.4}
      viewBox="0 0 120 32"
      className={`${animClass(animate)} ${className}`}
    >
      <path
        d="M2 16 Q15 2 30 16 T58 16 T86 16 T118 16"
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// === ドット 3 連 ===
export function HandDots({ color = "#2D8BFF", className = "", animate = "float", size = 60 }: Props) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size * 0.4}
      viewBox="0 0 60 24"
      className={`${animClass(animate)} ${className}`}
    >
      <circle cx="8" cy="12" r="7" fill={color} stroke="#000" strokeWidth="2" />
      <circle cx="30" cy="12" r="7" fill={color} stroke="#000" strokeWidth="2" />
      <circle cx="52" cy="12" r="7" fill={color} stroke="#000" strokeWidth="2" />
    </svg>
  );
}

// === 矢印 (手描き調) ===
export function HandArrow({ color = "#FF5A5A", className = "", animate = "wiggle", size = 60 }: Props) {
  return (
    <svg
      aria-hidden="true"
      width={size * 1.5}
      height={size * 0.7}
      viewBox="0 0 90 42"
      className={`${animClass(animate)} ${className}`}
    >
      <path
        d="M5 21 Q25 5 50 21 T80 21"
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M70 11 L82 21 L70 31"
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// === ハート ===
export function HandHeart({ color = "#FF4FB0", className = "", animate = "float", size = 50 }: Props) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 50 50"
      className={`${animClass(animate)} ${className}`}
    >
      <path
        d="M25 42 C 6 28, 4 14, 14 9 C 20 6, 25 11, 25 16 C 25 11, 30 6, 36 9 C 46 14, 44 28, 25 42 Z"
        fill={color}
        stroke="#000"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// === 葉っぱ ===
export function HandLeaf({ color = "#4FC04F", className = "", animate = "wiggle", size = 50 }: Props) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 50 50"
      className={`${animClass(animate)} ${className}`}
    >
      <path
        d="M10 40 C 10 20, 25 5, 40 10 C 38 25, 25 40, 10 40 Z"
        fill={color}
        stroke="#000"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M14 36 Q 25 25, 38 14"
        fill="none"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// === キラキラ (4 方向) ===
export function HandSparkle({ color = "#FFD647", className = "", animate = "wiggle", size = 50 }: Props) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 50 50"
      className={`${animClass(animate)} ${className}`}
    >
      <path
        d="M25 5 L28 22 L45 25 L28 28 L25 45 L22 28 L5 25 L22 22 Z"
        fill={color}
        stroke="#000"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// === でこぼこ blob ===
export function HandBlob({ color = "#9B5BFF", className = "", animate = "float", size = 80 }: Props) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 80 80"
      className={`${animClass(animate)} ${className}`}
    >
      <path
        d="M40 10 C 60 12, 72 25, 70 45 C 68 65, 50 72, 35 70 C 15 68, 5 50, 10 35 C 14 18, 25 8, 40 10 Z"
        fill={color}
        stroke="#000"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// === 太陽風 ===
export function HandSun({ color = "#FFA235", className = "", animate = "spin", size = 70 }: Props) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 70 70"
      className={`${animClass(animate)} ${className}`}
    >
      <circle cx="35" cy="35" r="14" fill={color} stroke="#000" strokeWidth="2.5" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line
          key={deg}
          x1="35"
          y1="8"
          x2="35"
          y2="18"
          stroke="#000"
          strokeWidth="3"
          strokeLinecap="round"
          transform={`rotate(${deg} 35 35)`}
        />
      ))}
    </svg>
  );
}

/**
 * SOU GROUP 流の顔バリエーション SVG (キャラ差で多様性表現)。
 * 6 種類の手描き調顔・髪・表情のミックス。
 */

type Variant = "v1" | "v2" | "v3" | "v4" | "v5" | "v6";

type Props = {
  variant: Variant;
  className?: string;
  size?: number;
};

const SKINS = ["#FFE0BD", "#F4CFA1", "#E8B89C", "#D6A07E", "#F8D7B8", "#E5BFA0"];

export default function CharacterFace({ variant, className = "", size = 140 }: Props) {
  const skin = SKINS[parseInt(variant.slice(1)) - 1] || SKINS[0];

  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 140 140"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {variant === "v1" && (
        <g>
          {/* v1: ショートヘア・笑顔 */}
          <circle cx="70" cy="75" r="44" fill={skin} stroke="#000" strokeWidth="3" />
          <path
            d="M30 60 Q35 25 70 22 Q105 25 110 60 Q108 50 100 48 Q90 38 70 38 Q50 38 40 48 Q32 50 30 60 Z"
            fill="#3D2818"
            stroke="#000"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <circle cx="56" cy="78" r="3.5" fill="#000" />
          <circle cx="84" cy="78" r="3.5" fill="#000" />
          <path d="M58 95 Q70 105 82 95" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" />
        </g>
      )}
      {variant === "v2" && (
        <g>
          {/* v2: ボブ・優しい目 */}
          <circle cx="70" cy="75" r="44" fill={skin} stroke="#000" strokeWidth="3" />
          <path
            d="M22 78 Q22 30 70 22 Q118 30 118 78 Q115 72 110 72 Q105 60 100 55 Q90 38 70 38 Q50 38 40 55 Q35 60 30 72 Q25 72 22 78 Z"
            fill="#1A1A1A"
            stroke="#000"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path d="M52 80 Q56 75 60 80" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" />
          <path d="M80 80 Q84 75 88 80" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" />
          <path d="M62 95 Q70 100 78 95" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" />
        </g>
      )}
      {variant === "v3" && (
        <g>
          {/* v3: メガネ・落ち着き */}
          <circle cx="70" cy="75" r="44" fill={skin} stroke="#000" strokeWidth="3" />
          <path
            d="M28 65 Q30 30 70 28 Q110 30 112 65 Q108 58 100 56 Q95 42 70 42 Q45 42 40 56 Q32 58 28 65 Z"
            fill="#5C4033"
            stroke="#000"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <circle cx="56" cy="80" r="11" fill="none" stroke="#000" strokeWidth="3" />
          <circle cx="84" cy="80" r="11" fill="none" stroke="#000" strokeWidth="3" />
          <line x1="67" y1="80" x2="73" y2="80" stroke="#000" strokeWidth="3" />
          <circle cx="56" cy="80" r="2.5" fill="#000" />
          <circle cx="84" cy="80" r="2.5" fill="#000" />
          <path d="M60 100 L80 100" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" />
        </g>
      )}
      {variant === "v4" && (
        <g>
          {/* v4: ロング・元気 */}
          <path
            d="M20 80 Q15 30 70 25 Q125 30 120 85 L122 115 Q115 110 110 108 L108 100 Q108 60 70 50 Q32 60 32 100 L30 108 Q25 110 18 115 Z"
            fill="#B8804A"
            stroke="#000"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <circle cx="70" cy="75" r="40" fill={skin} stroke="#000" strokeWidth="3" />
          <ellipse cx="56" cy="78" rx="3.5" ry="5" fill="#000" />
          <ellipse cx="84" cy="78" rx="3.5" ry="5" fill="#000" />
          <ellipse cx="56" cy="92" rx="7" ry="3" fill="#FFB6C1" opacity="0.5" />
          <ellipse cx="84" cy="92" rx="7" ry="3" fill="#FFB6C1" opacity="0.5" />
          <path d="M55 100 Q70 112 85 100" fill="#D9534F" stroke="#000" strokeWidth="2.5" strokeLinejoin="round" />
        </g>
      )}
      {variant === "v5" && (
        <g>
          {/* v5: 帽子・お年寄り感 */}
          <circle cx="70" cy="78" r="42" fill={skin} stroke="#000" strokeWidth="3" />
          <path
            d="M22 56 Q22 38 38 32 L102 32 Q118 38 118 56 Q116 50 110 50 L30 50 Q24 50 22 56 Z"
            fill="#4A5C8B"
            stroke="#000"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <ellipse cx="70" cy="52" rx="48" ry="4" fill="#4A5C8B" stroke="#000" strokeWidth="3" />
          <line x1="55" y1="82" x2="60" y2="80" stroke="#000" strokeWidth="3" strokeLinecap="round" />
          <line x1="80" y1="80" x2="85" y2="82" stroke="#000" strokeWidth="3" strokeLinecap="round" />
          <path d="M60 102 Q70 108 80 102" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" />
        </g>
      )}
      {variant === "v6" && (
        <g>
          {/* v6: こども */}
          <circle cx="70" cy="78" r="38" fill={skin} stroke="#000" strokeWidth="3" />
          <path
            d="M35 60 Q38 35 70 32 Q102 35 105 60 Q100 50 92 50 Q86 42 70 42 Q54 42 48 50 Q40 50 35 60 Z"
            fill="#2B2B2B"
            stroke="#000"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <circle cx="58" cy="82" r="4" fill="#000" />
          <circle cx="82" cy="82" r="4" fill="#000" />
          <ellipse cx="58" cy="95" rx="5" ry="2.5" fill="#FFB6C1" opacity="0.6" />
          <ellipse cx="82" cy="95" rx="5" ry="2.5" fill="#FFB6C1" opacity="0.6" />
          <ellipse cx="70" cy="103" rx="8" ry="5" fill="#D9534F" stroke="#000" strokeWidth="2.5" />
        </g>
      )}
    </svg>
  );
}

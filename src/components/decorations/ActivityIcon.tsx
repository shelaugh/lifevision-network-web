/**
 * 6 活動それぞれを表現する SVG アイコン (装飾的・手描き風)。
 */
type Props = { slug: string; className?: string };

export default function ActivityIcon({ slug, className = "" }: Props) {
  const icons: Record<string, React.ReactNode> = {
    "nagomi-cafe": (
      // カップ + 湯気 (なごみカフェ)
      <g>
        <path d="M14 38 H42 V52 C42 58 38 62 32 62 H24 C18 62 14 58 14 52 Z" fill="currentColor" />
        <path d="M42 42 H50 C54 42 56 46 56 50 C56 54 54 58 50 58 H42" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M22 28 Q22 24 24 22 Q26 20 24 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M30 28 Q30 24 32 22 Q34 20 32 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M38 28 Q38 24 40 22 Q42 20 40 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    ),
    bodorec: (
      // サイコロ (ボドレク)
      <g>
        <rect x="16" y="16" width="36" height="36" rx="6" fill="currentColor" />
        <circle cx="26" cy="26" r="3" fill="white" />
        <circle cx="42" cy="26" r="3" fill="white" />
        <circle cx="34" cy="34" r="3" fill="white" />
        <circle cx="26" cy="42" r="3" fill="white" />
        <circle cx="42" cy="42" r="3" fill="white" />
      </g>
    ),
    "co-lab-life": (
      // 連結する円 (Co Lab LIFE = 共創)
      <g>
        <circle cx="24" cy="34" r="14" fill="none" stroke="currentColor" strokeWidth="4" />
        <circle cx="44" cy="34" r="14" fill="none" stroke="currentColor" strokeWidth="4" />
        <circle cx="34" cy="34" r="6" fill="currentColor" />
      </g>
    ),
    "international-culture": (
      // 地球 + 文化マーク (国際文化)
      <g>
        <circle cx="34" cy="34" r="20" fill="currentColor" />
        <path d="M14 34 Q34 24 54 34 M14 34 Q34 44 54 34" fill="none" stroke="white" strokeWidth="2" />
        <path d="M34 14 Q44 34 34 54 M34 14 Q24 34 34 54" fill="none" stroke="white" strokeWidth="2" />
      </g>
    ),
    "kodomo-panel": (
      // 吹き出し (こどもパネル = 声)
      <g>
        <path d="M14 18 H54 V42 H38 L30 52 L30 42 H14 Z" fill="currentColor" />
        <circle cx="24" cy="30" r="2.5" fill="white" />
        <circle cx="34" cy="30" r="2.5" fill="white" />
        <circle cx="44" cy="30" r="2.5" fill="white" />
      </g>
    ),
    "my-sports": (
      // ランナー (my スポーツ)
      <g>
        <circle cx="38" cy="14" r="6" fill="currentColor" />
        <path d="M38 22 L30 36 L24 32 M38 22 L46 28 L42 40 L46 50 M30 36 L26 50" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    ),
  };

  return (
    <svg viewBox="0 0 68 68" className={className} xmlns="http://www.w3.org/2000/svg">
      {icons[slug] || <circle cx="34" cy="34" r="20" fill="currentColor" />}
    </svg>
  );
}

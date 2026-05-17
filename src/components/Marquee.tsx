/**
 * 横流れマーキーバー。LVN 8 色を順番に使ったテキストアイテム。
 * `prefers-reduced-motion: reduce` で停止 (globals.css)。
 */

type Item = { text: string; hex: string };

type Props = {
  items?: Item[];
  speed?: "slow" | "normal" | "fast";
  reverse?: boolean;
  className?: string;
};

const DEFAULT_ITEMS: Item[] = [
  { text: "日本で唯一の民間団体", hex: "#FFD647" },
  { text: "レクリエーションインストラクター", hex: "#FF4FB0" },
  { text: "スポーツ・レクリエーション指導者", hex: "#FF5A5A" },
  { text: "多職種連携", hex: "#2D8BFF" },
  { text: "心を、元気にする。", hex: "#9B5BFF" },
  { text: "Move. Connect. Smile.", hex: "#4FC04F" },
];

export default function Marquee({
  items = DEFAULT_ITEMS,
  speed = "normal",
  reverse = false,
  className = "",
}: Props) {
  const speedClass = { slow: "animate-marquee-slow", normal: "animate-marquee", fast: "animate-marquee-fast" }[speed];
  const doubled = [...items, ...items, ...items];

  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden border-y-2 border-black bg-white py-4 md:py-5 ${className}`}
    >
      <div
        className={`flex gap-6 md:gap-10 w-max ${speedClass} ${reverse ? "[animation-direction:reverse]" : ""}`}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 md:gap-10 text-2xl md:text-4xl lg:text-5xl font-black whitespace-nowrap"
            style={{ color: item.hex }}
          >
            {item.text}
            <span className="text-black opacity-30">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

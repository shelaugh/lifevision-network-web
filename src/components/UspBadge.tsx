import { Sparkles } from "lucide-react";

type Props = {
  /** "default" = 黄色背景, "filled" = カラーフィル, "outline" = 枠線のみ */
  variant?: "default" | "filled" | "outline";
  className?: string;
};

/**
 * 「日本で唯一」を強調する小型バッジ。サイト中で繰り返し配置。
 */
export default function UspBadge({ variant = "default", className = "" }: Props) {
  const variants = {
    default:
      "bg-[#FFD647] text-black border-2 border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)]",
    filled:
      "bg-black text-[#FFD647] border-2 border-black",
    outline:
      "bg-white text-black border-2 border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)]",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs md:text-sm font-black tracking-wide ${variants[variant]} ${className}`}
    >
      <Sparkles className="w-3.5 h-3.5" fill="currentColor" />
      日本で唯一の民間団体
    </span>
  );
}

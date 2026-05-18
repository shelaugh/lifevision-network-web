import Link from "next/link";
import { lvnInfo } from "@/data/lvn-info";
import {
  HandStar,
  HandSquiggle,
  HandDots,
  HandArrow,
  HandHeart,
  HandLeaf,
  HandSparkle,
  HandBlob,
  HandSun,
} from "@/components/decorations/HandDrawn";
import CharacterFace from "@/components/decorations/CharacterFace";
import { ArrowRight, UserPlus, Sparkles } from "lucide-react";

export const metadata = {
  title: "Preview A: SOU GROUP 寄せ版 | LVN",
};

const characters: Array<{ variant: "v1" | "v2" | "v3" | "v4" | "v5" | "v6"; bg: string; label: string }> = [
  { variant: "v1", bg: "#FFD647", label: "保育" },
  { variant: "v2", bg: "#2D8BFF", label: "医療" },
  { variant: "v3", bg: "#9B5BFF", label: "福祉" },
  { variant: "v4", bg: "#FF4FB0", label: "スポーツ" },
  { variant: "v5", bg: "#4FC04F", label: "介護" },
  { variant: "v6", bg: "#FF5A5A", label: "こども" },
];

const benefits = [
  { title: "QOL の向上", desc: "「楽しい」を起点に生活の質を持続的に高めます。", hex: "#FF4FB0" },
  { title: "現場の質向上", desc: "エビデンスに基づいた支援を、医療・介護・保育の現場へ。", hex: "#2D8BFF" },
  { title: "多職種連携の場", desc: "5 つの専門領域が日常的に関わる環境で、本物の連携力を。", hex: "#4FC04F" },
  { title: "実践機会の確保", desc: "6 つの活動領域で、取得後すぐに学んだことを活かせます。", hex: "#FFD647" },
];

export default function PreviewA() {
  return (
    <div className="bg-white">
      {/* ===== バナー ===== */}
      <div className="bg-black text-white px-4 py-2 text-center text-xs font-bold flex items-center justify-center gap-3">
        <span className="bg-[#FFD647] text-black px-2 py-0.5 rounded font-black">PATTERN A</span>
        SOU GROUP 流: 実写ゼロ × SVG キャラ × 手描き装飾全開
        <Link href="/preview-b/" className="underline">→ B を見る</Link>
      </div>

      {/* ===== HERO (実写ゼロ・SVG + コピー主役) ===== */}
      <section className="relative overflow-hidden bg-[#FFFCEF] px-6 md:px-10 py-20 md:py-32">
        <HandStar color="#FFD647" className="absolute top-10 left-[5%]" size={70} />
        <HandSquiggle color="#FF4FB0" className="absolute top-20 right-[8%]" size={120} />
        <HandDots color="#2D8BFF" className="absolute bottom-32 left-[6%]" size={80} />
        <HandSun color="#FFA235" className="absolute top-[30%] right-[5%]" size={90} />
        <HandHeart color="#FF5A5A" className="absolute bottom-20 right-[15%]" size={60} />
        <HandLeaf color="#4FC04F" className="absolute bottom-1/3 left-[12%]" size={55} />
        <HandSparkle color="#9B5BFF" className="absolute top-1/2 left-[20%]" size={50} />
        <HandBlob color="#FF4FB0" className="absolute bottom-12 right-[10%] opacity-60" size={100} />

        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Sparkles className="w-5 h-5 text-[#FF5A5A]" fill="#FF5A5A" />
            <span className="text-xs md:text-sm font-black tracking-wide">
              日本で唯一の民間団体
            </span>
          </div>

          <h1 className="font-black leading-[0.9] mb-10">
            <span className="block text-6xl md:text-8xl lg:text-9xl">
              「楽しい」は、
            </span>
            <span className="block text-6xl md:text-8xl lg:text-9xl mt-2">
              <span className="bg-[#FFD647] px-3">心の医療</span>。
            </span>
          </h1>

          <p className="text-lg md:text-2xl font-bold leading-relaxed max-w-2xl mb-10">
            こどもから高齢者まで、すべての人が自分らしく息をする社会へ。
            <br />
            レクリエーションを起点に、医療・福祉・保育・介護・スポーツが手を取り合う未来。
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/qualification/"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-black text-[#FFD647] font-black hover:scale-105 transition-transform"
            >
              資格を取得する <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/about/"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-black font-bold hover:bg-black hover:text-white transition-colors"
            >
              団体について
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 6 キャラで多様性 ===== */}
      <section className="relative bg-white px-6 md:px-10 py-24 md:py-32 border-t-2 border-black overflow-hidden">
        <HandArrow color="#FF5A5A" className="absolute top-12 right-[15%]" size={80} />
        <HandStar color="#FFD647" className="absolute bottom-20 left-[10%]" size={50} />

        <div className="relative max-w-6xl mx-auto">
          <div className="max-w-2xl mb-14 md:mb-20">
            <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-[color:var(--color-text-muted)] font-bold mb-4">
              For Everyone
            </p>
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              すべての人に、
              <br />
              レクリエーションを。
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
            {characters.map((c) => (
              <div key={c.variant} className="text-center group">
                <div
                  className="aspect-square rounded-3xl border-2 border-black flex items-center justify-center overflow-hidden mb-3 transition-transform group-hover:-translate-y-1 group-hover:rotate-[-2deg]"
                  style={{ background: c.bg }}
                >
                  <CharacterFace variant={c.variant} size={140} />
                </div>
                <p className="font-black text-sm md:text-base">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 唯一性 — 大型「1」 ===== */}
      <section className="relative bg-black text-white px-6 md:px-10 py-24 md:py-32 overflow-hidden">
        <HandSun color="#FFD647" className="absolute top-12 right-[8%]" size={70} />
        <HandStar color="#FF4FB0" className="absolute bottom-20 left-[10%]" size={50} />
        <HandDots color="#FFD647" className="absolute top-1/2 left-[8%]" size={70} />

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-[#FFD647] font-bold mb-4">
              Only One
            </p>
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              日本で
              <span className="text-[#FFD647]">唯一</span>
              の<br />民間団体。
            </h2>
            <p className="text-base md:text-lg text-white/85 leading-relaxed">
              {lvnInfo.authority.description}
            </p>
          </div>
          <div className="flex justify-center items-center">
            <span
              className="font-black leading-none text-[#FFD647]"
              style={{
                fontSize: "clamp(14rem, 32vw, 28rem)",
                textShadow: "10px 10px 0 #FF4FB0, 20px 20px 0 #9B5BFF",
              }}
            >
              1
            </span>
          </div>
        </div>
      </section>

      {/* ===== 4 ベネフィット — SOU 流カラーパネル ===== */}
      <section className="relative bg-white px-6 md:px-10 py-24 md:py-32 overflow-hidden">
        <HandSparkle color="#FFD647" className="absolute top-12 left-[5%]" size={50} />
        <HandLeaf color="#4FC04F" className="absolute bottom-16 right-[6%]" size={60} />
        <HandHeart color="#FF4FB0" className="absolute top-1/2 right-[10%]" size={45} />

        <div className="relative max-w-6xl mx-auto">
          <div className="max-w-2xl mb-14 md:mb-20">
            <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase font-bold mb-4">
              Why Recreation
            </p>
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              レクリエーションは、
              <br />
              社会を変える。
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="relative rounded-3xl border-2 border-black p-8 md:p-10 overflow-hidden hover:-translate-y-1 transition-transform"
                style={{ background: b.hex }}
              >
                <h3 className="text-2xl md:text-3xl font-black mb-3 leading-tight">{b.title}</h3>
                <p className="text-sm md:text-base leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 月1講習会 ===== */}
      <section className="relative bg-[#FFD647] px-6 md:px-10 py-24 md:py-32 border-y-2 border-black overflow-hidden">
        <HandStar color="#FF4FB0" className="absolute top-10 right-[8%]" size={70} />
        <HandDots color="#000" className="absolute top-12 left-[8%]" size={70} />
        <HandSquiggle color="#FF5A5A" className="absolute bottom-12 left-[10%]" size={120} />
        <HandArrow color="#000" className="absolute bottom-16 right-[15%]" size={80} />

        <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-center">
          <div className="text-center">
            <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase font-black mb-3">
              Monthly
            </p>
            <p className="font-black leading-none">
              <span className="block text-8xl md:text-[12rem] lg:text-[16rem]">月1</span>
            </p>
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight mb-5">
              2 つの資格、
              <br />
              どちらでも取れる。
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-6">
              月 1 回の講習会で、レクリエーションインストラクター / スポーツ・レクリエーション指導者、どちらかの単位として認定されます。
            </p>
            <Link
              href="/schedule/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-[#FFD647] font-black hover:scale-105 transition-transform"
            >
              講習会スケジュール <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 仲間募集 ===== */}
      <section className="relative bg-[#FF4FB0] text-white px-6 md:px-10 py-24 md:py-32 overflow-hidden">
        <HandSun color="#FFD647" className="absolute top-10 right-[10%]" size={70} />
        <HandStar color="#FFD647" className="absolute bottom-16 left-[10%]" size={60} />
        <HandSparkle color="#FFFFFF" className="absolute top-1/2 left-[5%]" size={50} />

        <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase font-bold mb-4">
              Join Us
            </p>
            <h2 className="text-3xl md:text-5xl font-black leading-tight mb-4">
              一緒に、
              <br />
              未来をつくる仲間に。
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-xl opacity-95">
              実践者・講師・運営スタッフ・ボランティア。さまざまな関わり方で、社会を変えていく仲間を探しています。
            </p>
          </div>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FFD647] text-black font-black hover:scale-105 transition-transform shadow-2xl whitespace-nowrap border-2 border-black"
          >
            <UserPlus className="w-5 h-5" /> 問い合わせる
          </Link>
        </div>
      </section>

      {/* ===== 最終 CTA ===== */}
      <section className="relative bg-white px-6 md:px-10 py-24 md:py-32 overflow-hidden">
        <HandHeart color="#FF4FB0" className="absolute top-16 left-[10%]" size={50} />
        <HandStar color="#FFD647" className="absolute bottom-16 right-[10%]" size={60} />
        <HandSquiggle color="#2D8BFF" className="absolute bottom-12 left-[5%]" size={90} />

        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            あなたも、
            <br />
            指導者になる。
          </h2>
          <Link
            href="/qualification/"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FFD647] text-black font-black hover:scale-105 transition-transform"
          >
            資格を取得する <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

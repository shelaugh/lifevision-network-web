import Image from "next/image";
import Link from "next/link";
import { lvnInfo } from "@/data/lvn-info";
import { Stethoscope, HandHeart, Baby, Activity, Dumbbell, ArrowRight } from "lucide-react";
import {
  HandStar,
  HandSquiggle,
  HandHeart as DecoHeart,
  HandLeaf,
  HandSparkle,
} from "@/components/decorations/HandDrawn";

const roles = [
  { ja: "医療", en: "Medical", hex: "#2D8BFF", icon: Stethoscope },
  { ja: "福祉", en: "Welfare", hex: "#9B5BFF", icon: HandHeart },
  { ja: "保育", en: "Childcare", hex: "#FF4FB0", icon: Baby },
  { ja: "介護", en: "Nursing", hex: "#4FC04F", icon: Activity },
  { ja: "スポーツ", en: "Sports", hex: "#FF5A5A", icon: Dumbbell },
];

const catches = [
  { hex: "#FF4FB0", title: "いのち", body: "あなたの存在は、誰にも代えられない。\nそのままのあなたを、まっすぐ抱きしめる。" },
  { hex: "#FFD647", title: "おもいやり", body: "少しの工夫で、あなたの世界が広がる。\nできるようになるよ、あなたの方法で。" },
  { hex: "#4FC04F", title: "しあわせとは", body: "いちばん大切なのは、あなたの幸せ。\nその笑顔のために、みんなが動き出す。" },
  { hex: "#9B5BFF", title: "愛され慈しむ", body: "小さな手も、迷う気持ちも、大事に包む。\nあなたは、愛されて育つひかり。" },
  { hex: "#FF5A5A", title: "レクリエーション", body: "日々のくらしに、よろこびと彩りを。\n生きること、こころを豊かにすること。" },
];

const corporateInfo = [
  { label: "法人名", value: lvnInfo.legalName },
  { label: "略称", value: lvnInfo.abbreviation },
  { label: "所在地", value: lvnInfo.address },
  { label: "設立", value: lvnInfo.established },
  { label: "事業内容", value: "公認指導者資格 (2 種) 取得課程運営 / 6 事業によるレクリエーション実践活動 / 多職種連携支援" },
];

export default function AboutPage() {
  return (
    <div>
      {/* ============ Hero — フルブリード写真 ============ */}
      <section className="relative h-[70vh] md:h-[80vh] min-h-[500px] overflow-hidden bg-[#1a1a1a]">
        <Image
          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=2400&q=85&auto=format&fit=crop"
          alt="多世代が手を取り合うコミュニティ"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
        <div className="relative h-full flex items-end">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10 pb-12 md:pb-20 text-white">
            <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-white/80 font-bold mb-4">
              About Us
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] max-w-4xl">
              関わるすべての人が、
              <br />
              幸福に暮らす社会へ。
            </h1>
          </div>
        </div>
      </section>

      {/* ============ ミッション ============ */}
      <section className="relative bg-white px-6 md:px-10 py-20 md:py-28 overflow-hidden">
        <HandStar color="#FFD647" className="absolute top-12 right-[8%]" size={50} />
        <HandSquiggle color="#FF4FB0" className="absolute bottom-16 left-[6%]" size={90} />
        <DecoHeart color="#FF5A5A" className="absolute top-1/3 right-[12%]" size={40} />

        <div className="relative max-w-3xl mx-auto">
          <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-[color:var(--color-text-muted)] font-bold mb-5">
            Our Mission
          </p>
          <h2 className="text-3xl md:text-5xl font-black leading-tight mb-8">
            多職種連携 × レクリエーション。
          </h2>
          <p className="text-base md:text-lg leading-loose text-[color:var(--color-text-muted)]">
            一般社団法人 Life Vision NetWork (LVN) は、医療・福祉・保育・介護・スポーツの専門領域がレクリエーション活動を中心に据えながら連携し、それぞれの専門性を高めつつ、互いの職種への理解を深め、垣根を越えて多職種連携を図ります。
            <br />
            <br />
            科学的根拠 (エビデンス) に基づいた実践を通じて、支援のあり方を共に考え、常に進化し続ける組織を目指します。
          </p>
        </div>
      </section>

      {/* ============ 5 職種 (黒帯) ============ */}
      <section className="bg-black text-white px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-16 mb-12 md:mb-16">
            <div>
              <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-[#FFD647] font-bold mb-4">
                5 Professions
              </p>
              <h2 className="text-3xl md:text-5xl font-black leading-tight">
                5 つの専門が、
                <br />
                ひとつになる。
              </h2>
            </div>
            <p className="text-base md:text-lg leading-relaxed text-white/80 md:pt-4">
              医療・福祉・保育・介護・スポーツ。普段は別々に動く 5 つの専門領域が、レクリエーションを共通言語に連携します。それぞれの強みを活かしながら、「心を元気にする」社会を共に作っていきます。
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <div key={role.ja} className="border-t-2 pt-5" style={{ borderColor: role.hex }}>
                  <Icon className="w-8 h-8 mb-4" style={{ color: role.hex }} strokeWidth={2.2} />
                  <div className="font-black text-xl md:text-2xl">{role.ja}</div>
                  <div className="font-[var(--font-poppins)] text-xs text-white/60 mt-1 tracking-wider">
                    {role.en}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 大切にしている言葉 ============ */}
      <section className="relative bg-[#FAFAFA] px-6 md:px-10 py-20 md:py-28 overflow-hidden">
        <HandLeaf color="#4FC04F" className="absolute top-16 right-[5%]" size={55} />
        <HandSparkle color="#FFD647" className="absolute bottom-12 left-[7%]" size={45} />

        <div className="relative max-w-5xl mx-auto">
          <div className="max-w-2xl mb-14 md:mb-20">
            <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-[color:var(--color-text-muted)] font-bold mb-4">
              Our Values
            </p>
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              大切にしている言葉。
            </h2>
          </div>

          <div className="space-y-4 md:space-y-6">
            {catches.map((c) => (
              <div
                key={c.title}
                className="relative bg-white rounded-2xl p-8 md:p-10 border border-[color:var(--color-border)] hover:border-black transition-colors overflow-hidden grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 items-start"
              >
                <div className="md:border-r md:border-[color:var(--color-border)] md:pr-8">
                  <div className="w-12 h-1 mb-3" style={{ background: c.hex }} />
                  <h3 className="text-2xl md:text-3xl font-black" style={{ color: c.hex }}>
                    {c.title}
                  </h3>
                </div>
                <p className="text-base md:text-lg leading-relaxed whitespace-pre-line">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 法人情報 (シンプル dl) ============ */}
      <section className="bg-white px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-[color:var(--color-text-muted)] font-bold mb-4">
            Corporate Information
          </p>
          <h2 className="text-3xl md:text-5xl font-black leading-tight mb-12">
            法人情報
          </h2>

          <dl className="border-t-2 border-black">
            {corporateInfo.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-[120px_1fr] md:grid-cols-[200px_1fr] border-b border-[color:var(--color-border)]"
              >
                <dt className="py-5 md:py-6 font-black text-sm md:text-base">{item.label}</dt>
                <dd className="py-5 md:py-6 text-sm md:text-base leading-relaxed">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="bg-white px-6 md:px-10 pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black leading-tight mb-8">
            私たちと一緒に、
            <br />
            社会を変えていこう。
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/qualification/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FFD647] text-black font-black hover:scale-105 transition-transform"
            >
              資格を取得する <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-black text-black font-bold hover:bg-black hover:text-white transition-colors"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

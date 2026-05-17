import BlobBackground from "@/components/decorations/BlobBackground";
import SquiggleUnderline from "@/components/decorations/SquiggleUnderline";
import WaveDivider from "@/components/decorations/WaveDivider";
import { Stethoscope, HandHeart, Baby, Activity, Dumbbell } from "lucide-react";

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

export default function AboutPage() {
  return (
    <div>
      {/* === Hero — 理念 === */}
      <section className="relative overflow-hidden">
        <BlobBackground />
        <div className="relative px-4 md:px-6 pt-20 md:pt-32 pb-20 md:pb-28 text-center">
          <p className="font-[var(--font-poppins)] text-sm tracking-[0.2em] uppercase text-[color:var(--color-text-muted)] mb-3 font-bold animate-fade-up">
            About Us
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.05] animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            関わるすべての人が、
            <br />
            <span className="bg-gradient-to-r from-[#FF4FB0] via-[#9B5BFF] to-[#2D8BFF] bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
              幸福に暮らす社会へ
            </span>
          </h1>
          <p
            className="text-base md:text-lg leading-loose max-w-3xl mx-auto text-[color:var(--color-text-muted)] animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            一般社団法人 Life Vision NetWork (LVN) は、
            医療・福祉・保育・介護・スポーツの専門領域が
            レクリエーション活動を中心に据えながら連携し、
            支援のあり方を共に考える組織です。
          </p>
        </div>
        <WaveDivider fill="#FAFAFA" />
      </section>

      {/* === 多職種連携 5 職種 === */}
      <section className="relative px-4 md:px-6 py-20 md:py-28 bg-[#FAFAFA] overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 md:mb-20">
            <p className="font-[var(--font-poppins)] text-sm tracking-[0.2em] uppercase text-[color:var(--color-lvn-blue)] mb-3 font-bold">
              5 Professions
            </p>
            <h2 className="inline-block relative text-3xl md:text-4xl font-black mb-5">
              多職種連携が、社会の土台に
              <SquiggleUnderline color="#2D8BFF" className="absolute -bottom-3 left-0" />
            </h2>
            <p className="text-sm md:text-base text-[color:var(--color-text-muted)] mt-6 max-w-2xl mx-auto leading-relaxed">
              5 つの専門領域が手を取り合い、それぞれの強みを活かして「心を元気にする」社会を目指します。
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5">
            {roles.map((role, i) => {
              const Icon = role.icon;
              return (
                <div
                  key={role.ja}
                  className="group relative bg-white rounded-3xl p-6 text-center shadow-md hover:-translate-y-2 hover:shadow-2xl transition-all overflow-hidden animate-fade-up"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div
                    className="absolute -top-10 -right-10 w-28 h-28 rounded-full opacity-15 group-hover:opacity-30 group-hover:scale-125 transition-all duration-500"
                    style={{ background: role.hex }}
                  />
                  <div
                    className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white group-hover:rotate-[-6deg] transition-transform"
                    style={{ background: role.hex }}
                  >
                    <Icon className="w-7 h-7 md:w-8 md:h-8" strokeWidth={2.2} />
                  </div>
                  <div className="relative font-black text-lg md:text-xl">{role.ja}</div>
                  <div className="relative font-[var(--font-poppins)] text-xs text-[color:var(--color-text-muted)] mt-1 tracking-wider">
                    {role.en}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 7 つのキャッチ === */}
      <section className="px-4 md:px-6 py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-[var(--font-poppins)] text-sm tracking-[0.2em] uppercase text-[color:var(--color-lvn-pink)] mb-3 font-bold">
              Our Values
            </p>
            <h2 className="text-3xl md:text-4xl font-black">大切にしている言葉</h2>
          </div>

          <div className="space-y-6 md:space-y-8">
            {catches.map((c, i) => (
              <div
                key={c.title}
                className="relative bg-white rounded-3xl p-7 md:p-10 shadow-md hover:shadow-xl transition-shadow overflow-hidden animate-fade-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div
                  className="absolute top-0 left-0 w-2 h-full"
                  style={{ background: c.hex }}
                />
                <div
                  className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-10"
                  style={{ background: c.hex }}
                />
                <h3 className="relative text-2xl md:text-3xl font-black mb-3" style={{ color: c.hex }}>
                  {c.title}
                </h3>
                <p className="relative text-base md:text-lg leading-relaxed whitespace-pre-line">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === 沿革・理事 placeholder === */}
      <section className="px-4 md:px-6 pb-20">
        <div className="max-w-2xl mx-auto text-center text-sm text-[color:var(--color-text-muted)] py-12 px-8 rounded-3xl bg-gray-50">
          🚧 沿革・理事紹介・アクセスは Phase 3 で実装予定
        </div>
      </section>
    </div>
  );
}

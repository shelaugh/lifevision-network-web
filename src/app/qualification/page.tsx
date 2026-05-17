import Link from "next/link";
import BlobBackground from "@/components/decorations/BlobBackground";
import WaveDivider from "@/components/decorations/WaveDivider";
import SquiggleUnderline from "@/components/decorations/SquiggleUnderline";
import { Sparkles, BookOpen, Award, Rocket, Clock, CheckCircle2, ArrowRight } from "lucide-react";

const stages = [
  {
    no: 1,
    label: "知る",
    desc: "資格の概要・LVN で取る意義・多職種連携での活かし方を知る",
    icon: BookOpen,
    hex: "#2D8BFF",
  },
  {
    no: 2,
    label: "取る",
    desc: "7 ステップで取得 — 申込から認定まで現場と並走しながら学ぶ",
    icon: Award,
    hex: "#9B5BFF",
  },
  {
    no: 3,
    label: "活かす",
    desc: "★LVN 活動デビュー — 取得後すぐに 6 活動で実践できる",
    icon: Rocket,
    hex: "#FF5A5A",
  },
];

const qualifications = [
  {
    name: "レクリエーションインストラクター",
    short: "レクの基礎を、現場で活かせる形で。",
    hours: ["理論 9h", "実技 27h", "演習 15h"],
    desc: "「心を元気にする」レクリエーション支援の基礎を身につける。福祉・介護・保育・地域活動の現場で活躍。",
    hex: "#FFD647",
  },
  {
    name: "スポーツ・レクリエーション指導者",
    short: "誰もが楽しめるスポーツを、クリエイトする。",
    hours: ["理論 9h", "実技 36h", "演習 6h"],
    desc: "運動に親しんでいない人も含め、誰もが楽しめるスポーツ・レクの場をクリエイトする指導者。",
    hex: "#FF5A5A",
  },
];

export default function QualificationPage() {
  return (
    <div>
      {/* === Hero === */}
      <section className="relative overflow-hidden">
        <BlobBackground />
        <div className="relative px-4 md:px-6 pt-20 md:pt-32 pb-20 md:pb-28 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur border border-white shadow-sm mb-8 animate-fade-up"
          >
            <Sparkles className="w-4 h-4 text-[#FF5A5A]" fill="#FF5A5A" />
            <span className="text-xs md:text-sm font-bold tracking-wide text-[#FF5A5A]">
              Qualification
            </span>
          </div>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.05] animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            笑顔をつくる、
            <br />
            <span className="bg-gradient-to-r from-[#FF5A5A] via-[#FF4FB0] to-[#9B5BFF] bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
              仕事になる。
            </span>
          </h1>
          <p
            className="text-base md:text-lg text-[color:var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            LVN なら、資格を取って、現場で活かせる。
            <br />
            多職種連携の本物の現場で学べる、2 つの公認指導者資格。
          </p>
        </div>
        <WaveDivider fill="#FAFAFA" />
      </section>

      {/* === 3 段階 === */}
      <section className="relative px-4 md:px-6 py-20 md:py-28 bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 md:mb-20">
            <p className="font-[var(--font-poppins)] text-sm tracking-[0.2em] uppercase text-[color:var(--color-lvn-purple)] mb-3 font-bold">
              Step by Step
            </p>
            <h2 className="inline-block relative text-3xl md:text-4xl font-black mb-5">
              知る → 取る → <span className="text-[#FF5A5A]">活かす</span>
              <SquiggleUnderline color="#FF5A5A" className="absolute -bottom-3 left-0" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
            {stages.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.no}
                  className="group relative bg-white rounded-3xl p-8 shadow-md hover:-translate-y-2 hover:shadow-2xl transition-all overflow-hidden animate-fade-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div
                    className="absolute -top-12 -right-12 w-36 h-36 rounded-full opacity-10 group-hover:opacity-25 group-hover:scale-125 transition-all duration-500"
                    style={{ background: stage.hex }}
                  />
                  <div className="relative flex items-center gap-3 mb-5">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-2xl group-hover:rotate-[-6deg] transition-transform"
                      style={{ background: stage.hex }}
                    >
                      {stage.no}
                    </div>
                    <Icon className="w-7 h-7" style={{ color: stage.hex }} strokeWidth={2.2} />
                  </div>
                  <h3 className="relative text-2xl font-black mb-3">{stage.label}</h3>
                  <p className="relative text-sm text-[color:var(--color-text-muted)] leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 2 資格紹介 === */}
      <section className="px-4 md:px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 md:mb-20">
            <p className="font-[var(--font-poppins)] text-sm tracking-[0.2em] uppercase text-[color:var(--color-lvn-yellow)] mb-3 font-bold">
              Public Certifications
            </p>
            <h2 className="text-3xl md:text-4xl font-black">取得できる 2 つの資格</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {qualifications.map((q, i) => (
              <div
                key={q.name}
                className="group relative rounded-[2rem] bg-white p-8 md:p-10 shadow-md hover:-translate-y-2 hover:shadow-2xl transition-all overflow-hidden border-t-[6px] animate-fade-up"
                style={{ borderColor: q.hex, animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500"
                  style={{ background: q.hex }}
                />
                <div
                  className="relative inline-flex items-center gap-2 px-3 py-1 rounded-full text-white text-xs font-bold mb-4"
                  style={{ background: q.hex }}
                >
                  <CheckCircle2 className="w-3 h-3" /> 公認資格
                </div>
                <h3 className="relative text-xl md:text-2xl font-black mb-2 leading-tight">
                  {q.name}
                </h3>
                <p className="relative text-sm font-bold mb-5" style={{ color: q.hex }}>
                  {q.short}
                </p>
                <div className="relative flex flex-wrap gap-2 mb-5">
                  {q.hours.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-xs font-bold"
                    >
                      <Clock className="w-3 h-3" /> {h}
                    </span>
                  ))}
                </div>
                <p className="relative text-sm leading-relaxed text-[color:var(--color-text-muted)]">
                  {q.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === 申込 CTA (anchor: #apply) === */}
      <section id="apply" className="relative px-4 md:px-6 py-20 md:py-28 overflow-hidden">
        <div className="max-w-5xl mx-auto relative rounded-[2.5rem] bg-gradient-to-br from-[#FF5A5A] via-[#FF4FB0] to-[#9B5BFF] animate-gradient bg-[length:200%_200%] p-10 md:p-16 text-white text-center shadow-2xl overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-2xl animate-float" />
          <div
            className="absolute -bottom-24 -left-16 w-80 h-80 rounded-full bg-[#FFD647]/30 blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />

          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-black mb-5 leading-tight">
              まずは無料相談から
            </h2>
            <p className="text-sm md:text-base mb-10 opacity-95 leading-relaxed max-w-xl mx-auto">
              「自分に向いているか分からない」「費用や期間を知りたい」
              <br />
              お気軽にご相談ください。
            </p>
            <div className="inline-block py-8 md:py-10 px-8 bg-white/10 backdrop-blur rounded-3xl">
              <p className="text-sm opacity-90 mb-5">
                🚧 申込フォーム (3 ステップ・5 項目) は Phase 3 で実装予定
              </p>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#FF5A5A] font-black shadow-xl hover:scale-105 transition-transform"
              >
                現在は問い合わせフォームへ <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import BlobBackground from "@/components/decorations/BlobBackground";
import WaveDivider from "@/components/decorations/WaveDivider";
import SquiggleUnderline from "@/components/decorations/SquiggleUnderline";
import UspBadge from "@/components/UspBadge";
import { lvnInfo } from "@/data/lvn-info";
import {
  BookOpen,
  Award,
  Rocket,
  Clock,
  CheckCircle2,
  ArrowRight,
  X,
  Check,
} from "lucide-react";

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
    desc: "申込から認定まで現場と並走しながら学ぶ",
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

const comparison = [
  { label: "両資格が取得できる", lvn: true, others: false },
  { label: "公益財団法人 日本レクリエーション協会の公認", lvn: true, others: true },
  { label: "多職種連携の現場で学べる", lvn: true, others: false },
  { label: "6 つの活動で取得後すぐに実践できる", lvn: true, others: false },
];

const faqs = [
  {
    q: "未経験でも取得できますか？",
    a: "はい、特別な資格や経験は必要ありません。LVN では現場と並走しながら学べる課程を用意しています。",
  },
  {
    q: "費用はどれくらいかかりますか？",
    a: "資格・受講形態によって異なります。無料相談で具体的なプランをご案内します。",
  },
  {
    q: "どちらの資格を取るか迷っています。",
    a: "「主に福祉・介護・保育の現場で活かしたい方」はレクリエーションインストラクター、「スポーツ寄りで活躍したい方」はスポーツ・レクリエーション指導者がおすすめです。無料相談で適性をご一緒に整理できます。",
  },
  {
    q: "取得後、すぐに現場で活動できますか？",
    a: "はい。LVN は 6 つの活動 (なごみカフェ / ボドレク / Co Lab LIFE / 国際文化 / こどもパネル / my スポーツ) を運営しており、取得後すぐに「★LVN 活動デビュー」として実践できます。",
  },
];

export default function QualificationPage() {
  return (
    <div>
      {/* ============ Hero ============ */}
      <section className="relative overflow-hidden">
        <BlobBackground />
        <div className="relative px-4 md:px-6 pt-16 md:pt-28 pb-20 md:pb-28 text-center">
          <div className="flex justify-center mb-8 animate-fade-up">
            <UspBadge />
          </div>

          <h1
            className="font-black mb-6 leading-[0.95] animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="block text-5xl md:text-7xl lg:text-8xl mb-2">
              この資格、
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-[#FF5A5A] via-[#FF4FB0] to-[#9B5BFF] bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
              LVN でしか
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl">
              取れません。
            </span>
          </h1>
          <p
            className="text-base md:text-lg text-[color:var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            「レクリエーションインストラクター」と「スポーツ・レクリエーション指導者」。
            <br />
            両資格の取得課程を持つ、日本で唯一の民間団体です。
          </p>
        </div>
        <WaveDivider fill="#FAFAFA" />
      </section>

      {/* ============ なぜ「唯一」か ============ */}
      <section className="relative px-4 md:px-6 py-20 md:py-28 bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto">
          <div className="bg-black text-white rounded-[2.5rem] p-10 md:p-16 overflow-hidden relative">
            <div
              aria-hidden="true"
              className="absolute -top-8 -right-8 text-[10rem] md:text-[18rem] font-black leading-none text-white/5 select-none pointer-events-none"
            >
              ONLY
            </div>
            <div className="relative max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD647] text-black font-black text-xs md:text-sm mb-6 border-2 border-[#FFD647]">
                <Award className="w-4 h-4" /> 公認の根拠
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                {lvnInfo.authority.source}
                <br />
                <span className="text-[#FFD647]">公認</span>
              </h2>
              <p className="text-sm md:text-lg leading-relaxed mb-6 opacity-90">
                {lvnInfo.authority.description}
              </p>
              <a
                href={lvnInfo.authority.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#FFD647] hover:underline"
              >
                公益財団法人 日本レクリエーション協会 公式 <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 3 段階 ============ */}
      <section className="relative px-4 md:px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 md:mb-20">
            <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-[color:var(--color-lvn-purple)] font-bold mb-3">
              Step by Step
            </p>
            <h2 className="inline-block relative text-3xl md:text-5xl font-black mb-5">
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
                  className="group relative bg-white rounded-3xl p-8 border-2 border-black shadow-[5px_5px_0_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all overflow-hidden animate-fade-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div
                    className="absolute -top-12 -right-12 w-36 h-36 rounded-full opacity-10 group-hover:opacity-25 group-hover:scale-125 transition-all duration-500"
                    style={{ background: stage.hex }}
                  />
                  <div className="relative flex items-center gap-3 mb-5">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-2xl border-2 border-black group-hover:rotate-[-6deg] transition-transform"
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

      {/* ============ 2 資格紹介 ============ */}
      <section className="px-4 md:px-6 py-20 md:py-28 bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 md:mb-20">
            <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-[color:var(--color-lvn-yellow)] font-bold mb-3">
              Public Certifications
            </p>
            <h2 className="text-3xl md:text-5xl font-black">取得できる 2 つの資格</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {qualifications.map((q, i) => (
              <div
                key={q.name}
                className="group relative rounded-[2rem] bg-white p-8 md:p-10 border-2 border-black shadow-[5px_5px_0_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all overflow-hidden animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500"
                  style={{ background: q.hex }}
                />
                <div
                  className="relative inline-flex items-center gap-2 px-3 py-1 rounded-full text-white text-xs font-bold mb-4 border-2 border-black"
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
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black text-white text-xs font-bold"
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

      {/* ============ 比較表 ============ */}
      <section className="px-4 md:px-6 py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14 md:mb-16">
            <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-[color:var(--color-lvn-red)] font-bold mb-3">
              LVN vs Others
            </p>
            <h2 className="text-3xl md:text-5xl font-black">なぜ LVN なのか</h2>
          </div>

          <div className="bg-white rounded-3xl border-2 border-black shadow-[5px_5px_0_0_rgba(0,0,0,1)] overflow-hidden">
            <div className="grid grid-cols-[1fr_100px_100px] md:grid-cols-[1fr_140px_140px] bg-black text-white font-black text-sm md:text-base">
              <div className="p-4 md:p-5">項目</div>
              <div className="p-4 md:p-5 text-center bg-[#FFD647] text-black">LVN</div>
              <div className="p-4 md:p-5 text-center">他団体</div>
            </div>
            {comparison.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[1fr_100px_100px] md:grid-cols-[1fr_140px_140px] border-t-2 border-black text-sm md:text-base"
              >
                <div className="p-4 md:p-5 font-bold">{row.label}</div>
                <div className="p-4 md:p-5 text-center bg-[#FFD647]/30">
                  {row.lvn ? (
                    <Check className="w-6 h-6 mx-auto text-[#4FC04F]" strokeWidth={3} />
                  ) : (
                    <X className="w-6 h-6 mx-auto text-[color:var(--color-text-muted)]" strokeWidth={3} />
                  )}
                </div>
                <div className="p-4 md:p-5 text-center">
                  {row.others ? (
                    <Check className="w-6 h-6 mx-auto text-[color:var(--color-text-muted)]" strokeWidth={2.5} />
                  ) : (
                    <X className="w-6 h-6 mx-auto text-[color:var(--color-text-muted)]" strokeWidth={2.5} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="px-4 md:px-6 py-20 md:py-28 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14 md:mb-16">
            <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-[color:var(--color-lvn-green)] font-bold mb-3">
              FAQ
            </p>
            <h2 className="text-3xl md:text-5xl font-black">よくあるご質問</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white rounded-2xl border-2 border-black overflow-hidden"
              >
                <summary className="cursor-pointer p-5 md:p-6 flex items-center justify-between gap-4 font-black text-base md:text-lg list-none [&::-webkit-details-marker]:hidden">
                  <span>{faq.q}</span>
                  <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-black text-xl group-open:rotate-45 transition-transform shrink-0">
                    +
                  </span>
                </summary>
                <div className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base leading-relaxed text-[color:var(--color-text-muted)]">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 申込 CTA ============ */}
      <section id="apply" className="relative px-4 md:px-6 py-20 md:py-28 overflow-hidden">
        <div className="max-w-5xl mx-auto relative rounded-[2.5rem] bg-gradient-to-br from-[#FF5A5A] via-[#FF4FB0] to-[#9B5BFF] animate-gradient bg-[length:200%_200%] p-10 md:p-16 text-white text-center shadow-2xl overflow-hidden border-2 border-black">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-2xl animate-float" />
          <div
            className="absolute -bottom-24 -left-16 w-80 h-80 rounded-full bg-[#FFD647]/30 blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />

          <div className="relative">
            <UspBadge variant="filled" className="mb-6" />
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
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#FF5A5A] font-black shadow-xl hover:scale-105 transition-transform border-2 border-black"
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

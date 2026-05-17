import Link from "next/link";

const stages = [
  {
    no: 1,
    label: "知る",
    desc: "資格の概要・LVN で取る意義・多職種連携での活かし方を知る",
    color: "#2D8BFF",
  },
  {
    no: 2,
    label: "取る",
    desc: "7 ステップで取得 — 申込から認定まで現場と並走しながら学ぶ",
    color: "#9B5BFF",
  },
  {
    no: 3,
    label: "活かす",
    desc: "★LVN 活動デビュー — 取得後すぐに 6 活動で実践できる",
    color: "#FF5A5A",
  },
];

const qualifications = [
  {
    name: "レクリエーションインストラクター",
    hours: "理論 9h + 実技 27h + 演習 15h",
    desc: "「心を元気にする」レクリエーション支援の基礎を身につける。福祉・介護・保育・地域活動の現場で活躍。",
    color: "#FFD647",
  },
  {
    name: "スポーツ・レクリエーション指導者",
    hours: "理論 9h + 実技 36h + 演習 6h",
    desc: "運動に親しんでいない人も含め、誰もが楽しめるスポーツ・レクの場をクリエイトする指導者。",
    color: "#FF5A5A",
  },
];

export default function QualificationPage() {
  return (
    <div>
      {/* Hero */}
      <section className="px-4 md:px-6 pt-16 md:pt-20 pb-12 md:pb-16 text-center">
        <p className="font-[var(--font-poppins)] text-sm tracking-widest uppercase text-[color:var(--color-lvn-red)] mb-3 font-bold">
          Qualification
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
          笑顔をつくる、仕事になる。
        </h1>
        <p className="text-base md:text-lg text-[color:var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed">
          LVN なら、資格を取って、現場で活かせる。
          <br />
          多職種連携の本物の現場で学べる、2 つの公認指導者資格。
        </p>
      </section>

      {/* 3 段階「知る→取る→活かす」 */}
      <section className="px-4 md:px-6 py-12 md:py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-10 md:mb-14">
            知る → 取る → <span className="text-[color:var(--color-lvn-red)]">活かす</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {stages.map((stage) => (
              <div
                key={stage.no}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border-t-4"
                style={{ borderColor: stage.color }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-xl mb-4"
                  style={{ background: stage.color }}
                >
                  {stage.no}
                </div>
                <h3 className="text-xl font-bold mb-3">{stage.label}</h3>
                <p className="text-sm text-[color:var(--color-text-muted)] leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2 資格紹介 */}
      <section className="px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-10 md:mb-14">
            取得できる 2 つの資格
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualifications.map((q) => (
              <div
                key={q.name}
                className="rounded-3xl p-7 md:p-8 border-2 hover:scale-[1.01] transition-transform"
                style={{ borderColor: q.color }}
              >
                <div
                  className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold mb-4"
                  style={{ background: q.color }}
                >
                  公認資格
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
                  {q.name}
                </h3>
                <p className="text-xs text-[color:var(--color-text-muted)] mb-4 font-mono">
                  {q.hours}
                </p>
                <p className="text-sm leading-relaxed">{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 申込 CTA (anchor: #apply) */}
      <section id="apply" className="px-4 md:px-6 py-16 md:py-24 bg-gradient-to-br from-[#FF5A5A] to-[#FF4FB0] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            まずは無料相談から
          </h2>
          <p className="text-sm md:text-base mb-8 opacity-95 leading-relaxed">
            「自分に向いているか分からない」「費用や期間を知りたい」
            <br />
            お気軽にご相談ください。
          </p>
          <div className="inline-block py-10 px-8 bg-white/10 backdrop-blur rounded-3xl">
            <p className="text-sm opacity-90 mb-4">
              🚧 申込フォーム (3 ステップ・5 項目) は Phase 3 で実装予定
            </p>
            <Link
              href="/contact/"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white text-[color:var(--color-lvn-red)] font-bold hover:scale-105 transition-transform"
            >
              現在は問い合わせフォームへ →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import { activities } from "@/data/activities";

const heroCTAs = [
  {
    href: "/qualification/",
    label: "資格を取る",
    desc: "レクリエーション指導者を目指す方へ",
    hex: "#FF5A5A",
  },
  {
    href: "/schedule/",
    label: "イベント体験",
    desc: "まずは現場を体験してみたい方へ",
    hex: "#FFD647",
  },
  {
    href: "/about/",
    label: "多職種連携",
    desc: "団体・活動について知りたい方へ",
    hex: "#2D8BFF",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative px-4 md:px-6 pt-16 md:pt-24 pb-12 md:pb-20 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-[var(--font-poppins)] text-sm md:text-base tracking-widest uppercase text-[color:var(--color-lvn-blue)] mb-4 font-bold">
            Move. Connect. Smile.
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
            関わるすべての人が、
            <br />
            <span className="bg-gradient-to-r from-[#FF4FB0] via-[#9B5BFF] to-[#2D8BFF] bg-clip-text text-transparent">
              幸福に暮らす社会へ
            </span>
          </h1>
          <p className="text-base md:text-lg text-[color:var(--color-text-muted)] mb-10 md:mb-14 max-w-2xl mx-auto leading-relaxed">
            医療・福祉・保育・介護・スポーツ。多職種が手を取り合い、レクリエーションで「心を元気にする」社会を、一緒に。
          </p>

          {/* 対象別 3 タイル CTA */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {heroCTAs.map((cta) => (
              <Link
                key={cta.href}
                href={cta.href}
                className="group p-6 md:p-8 rounded-3xl bg-white border-2 hover:scale-[1.02] transition-transform shadow-md text-left"
                style={{ borderColor: cta.hex }}
              >
                <div
                  className="inline-block w-12 h-12 rounded-2xl mb-4"
                  style={{ background: cta.hex }}
                  aria-hidden="true"
                />
                <h2 className="text-xl md:text-2xl font-bold mb-2">{cta.label}</h2>
                <p className="text-sm text-[color:var(--color-text-muted)] leading-relaxed">
                  {cta.desc}
                </p>
                <span
                  className="inline-block mt-4 text-sm font-bold group-hover:translate-x-1 transition-transform"
                  style={{ color: cta.hex }}
                >
                  詳しく見る →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6 活動 */}
      <section className="px-4 md:px-6 py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <p className="font-[var(--font-poppins)] text-sm tracking-widest uppercase text-[color:var(--color-text-muted)] mb-3">
              Our Activities
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              6 つの活動
            </h2>
            <p className="text-sm md:text-base text-[color:var(--color-text-muted)] max-w-2xl mx-auto">
              レクリエーションを軸に、多職種が連携して取り組む 6 つの活動。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {activities.map((activity) => (
              <Link
                key={activity.slug}
                href={`/activities/${activity.slug}/`}
                className="group block p-6 md:p-7 rounded-3xl bg-white hover:scale-[1.02] transition-transform shadow-sm border border-[color:var(--color-border)]"
              >
                <div
                  className="w-14 h-14 rounded-2xl mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: activity.hex }}
                  aria-hidden="true"
                />
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  {activity.name}
                </h3>
                <p className="text-sm text-[color:var(--color-text-muted)] leading-relaxed">
                  {activity.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 資格 CTA 大バナー */}
      <section className="px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-[#FF5A5A] to-[#FF4FB0] p-8 md:p-14 text-white text-center shadow-xl">
          <p className="font-[var(--font-poppins)] text-sm tracking-widest uppercase mb-3 opacity-90">
            For Future Recreation Leaders
          </p>
          <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
            笑顔をつくる、仕事になる。
          </h2>
          <p className="text-sm md:text-base mb-8 opacity-95 max-w-2xl mx-auto leading-relaxed">
            レクリエーションインストラクター / スポーツ・レクリエーション指導者。
            LVN なら、資格を取って、現場で活かせる。
          </p>
          <Link
            href="/qualification/"
            className="inline-flex items-center px-8 py-4 rounded-full bg-white text-[color:var(--color-lvn-red)] font-bold shadow-lg hover:scale-105 transition-transform"
          >
            資格について詳しく見る →
          </Link>
        </div>
      </section>

      {/* お知らせ プレースホルダ */}
      <section className="px-4 md:px-6 py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-8 md:mb-10">
            <div>
              <p className="font-[var(--font-poppins)] text-sm tracking-widest uppercase text-[color:var(--color-text-muted)] mb-2">
                Latest News
              </p>
              <h2 className="text-2xl md:text-3xl font-black">お知らせ</h2>
            </div>
            <Link
              href="/news/"
              className="text-sm font-bold text-[color:var(--color-lvn-blue)] hover:underline"
            >
              すべて見る →
            </Link>
          </div>
          <div className="text-center py-12 text-[color:var(--color-text-muted)] text-sm">
            🚧 お知らせ機能は Phase 3 で実装予定 (microCMS 接続後)
          </div>
        </div>
      </section>
    </div>
  );
}

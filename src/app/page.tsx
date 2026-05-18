import Link from "next/link";
import Image from "next/image";
import { activities } from "@/data/activities";
import { lvnInfo } from "@/data/lvn-info";
import ActivityIcon from "@/components/decorations/ActivityIcon";
import { ArrowRight, Heart, Sprout, Users2, Sparkles } from "lucide-react";

/**
 * charity:water 流 TOP 構成。
 * - Hero: フルブリード写真 + 大型 H1 1 文 + 黄 CTA 1 つ (装飾極小)
 * - 黄色は CTA だけに使う・見出しは黒
 * - 「CTA → 信頼 → 課題 → CTA → 経路」の順序
 */

const benefits = [
  {
    icon: Heart,
    title: "QOL の向上",
    desc: "こども・高齢者・障がいのある方の「楽しい」を起点に、生活の質を持続的に高めます。",
  },
  {
    icon: Sprout,
    title: "現場の質向上",
    desc: "エビデンスに基づいた支援を、医療・介護・保育の現場に届ける指導者を育成します。",
  },
  {
    icon: Users2,
    title: "多職種連携の場",
    desc: "5 つの専門領域が日常的に関わり合う環境で、本物の連携力が身につきます。",
  },
  {
    icon: Sparkles,
    title: "実践機会の確保",
    desc: "6 つの活動領域で、取得後すぐに学んだことを現場で活かせます。",
  },
];

export default function Home() {
  return (
    <div>
      {/* ============================================================ */}
      {/* HERO — charity:water 流: フルブリード写真 + H1 1 文 + 黄 CTA 1 つ */}
      {/* ============================================================ */}
      <section className="relative h-[80vh] md:h-[90vh] min-h-[600px] overflow-hidden bg-[#1a1a1a]">
        {/* フルブリード写真 (Unsplash 直接埋め込み・笑顔の多世代レク現場 placeholder) */}
        <Image
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=2400&q=85&auto=format&fit=crop"
          alt="多世代が笑顔で集うレクリエーション現場"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-85"
        />
        {/* 暗いオーバーレイ (テキスト可読性確保) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />

        {/* Hero テキスト */}
        <div className="relative h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10 text-white">
            <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-white/80 font-bold mb-6 animate-fade-up">
              Life Vision NetWork
            </p>
            <h1
              className="font-black leading-[0.95] mb-8 max-w-4xl animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="block text-4xl md:text-7xl lg:text-8xl">
                心を、元気にする。
              </span>
              <span className="block text-2xl md:text-4xl lg:text-5xl mt-3 md:mt-4 font-bold text-white/90">
                日本で唯一の、レクリエーション指導者を育てる民間団体。
              </span>
            </h1>
            <div
              className="animate-fade-up"
              style={{ animationDelay: "0.25s" }}
            >
              <Link
                href="/qualification/"
                className="inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 rounded-full bg-[#FFD647] text-black font-black text-base md:text-lg shadow-2xl hover:scale-105 transition-transform"
              >
                資格を取得する
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about/"
                className="inline-flex items-center gap-2 ml-3 md:ml-5 px-6 md:px-7 py-4 md:py-5 text-white font-bold hover:underline"
              >
                団体について
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 唯一性メトリック — 黒帯で印象強く */}
      {/* ============================================================ */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-[#FFD647] font-bold mb-3">
                Only in Japan
              </p>
              <p className="text-3xl md:text-4xl font-black leading-tight">
                日本で
                <br />
                <span className="text-[#FFD647]">唯一</span>
                の民間団体。
              </p>
              <p className="text-sm md:text-base text-white/70 mt-4 leading-relaxed">
                {lvnInfo.authority.source}
                公認。レクリエーションインストラクター / スポーツ・レクリエーション指導者の 2 資格課程を運営する、日本で唯一の団体です。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 md:col-span-2 md:gap-10">
              {[
                { value: "2", suffix: "種", label: "公認指導者資格から選んで取得" },
                { value: "月1", suffix: "回", label: "両資格どちらの単位にもなる講習会" },
                { value: "5", suffix: "職種", label: "医療・福祉・保育・介護・スポーツ" },
                { value: "6", suffix: "つ", label: "実践活動領域で取得後すぐデビュー" },
              ].map((m) => (
                <div key={m.label} className="border-l-2 border-[#FFD647] pl-5">
                  <p className="font-black text-5xl md:text-7xl leading-none">
                    {m.value}
                    <span className="text-2xl md:text-3xl ml-1 text-[#FFD647]">{m.suffix}</span>
                  </p>
                  <p className="text-xs md:text-sm text-white/70 mt-3 leading-relaxed">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* なぜレクリエーション福祉が必要か — 4 ベネフィット (charity:water Why Water? に相当) */}
      {/* ============================================================ */}
      <section className="bg-white px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-14 md:mb-20">
            <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-[color:var(--color-text-muted)] font-bold mb-4">
              Why Recreation Welfare?
            </p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              レクリエーションは、
              <br />
              心の医療になる。
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="border-t-2 border-black pt-6">
                  <Icon className="w-8 h-8 mb-5" strokeWidth={2.2} />
                  <h3 className="text-xl md:text-2xl font-black mb-3 leading-tight">
                    {b.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[color:var(--color-text-muted)]">
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 月 1 回・両資格の単位が同時に — LVN の最大の効率性メリット */}
      {/* ============================================================ */}
      <section className="bg-[#FFD647] px-6 md:px-10 py-20 md:py-28 border-t-2 border-black border-b-2">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-center">
          <div className="text-center">
            <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase font-black mb-4">
              Monthly Session
            </p>
            <p className="font-black leading-none">
              <span className="block text-7xl md:text-9xl lg:text-[12rem]">月1</span>
              <span className="block text-2xl md:text-3xl mt-2">回開催</span>
            </p>
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight mb-5">
              2 資格、どちらを選んでも、
              <br />
              ここで取れる。
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-6">
              月 1 回の講習会は、
              <strong>レクリエーションインストラクター</strong>
              または
              <strong>スポーツ・レクリエーション指導者</strong>
              のどちらかの単位として認定されます。あなたが目指す資格を選んで参加できます。
            </p>
            <Link
              href="/schedule/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-[#FFD647] font-black hover:scale-105 transition-transform"
            >
              講習会スケジュールを見る
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 写真 + 強いメッセージ帯 (charity:water 流フルブリード) */}
      {/* ============================================================ */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=2400&q=85&auto=format&fit=crop"
          alt="多職種連携のレクリエーション現場"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-center">
          <div className="max-w-5xl mx-auto px-6 md:px-10 text-white text-center">
            <p className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight">
              「楽しかった」を、
              <br />
              支援の言葉に。
            </p>
            <p className="text-base md:text-lg mt-6 max-w-2xl mx-auto opacity-90 leading-relaxed">
              関わるすべての人が幸福に暮らし、共に生きる社会の実現へ。
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6 活動 — 横スクロール */}
      {/* ============================================================ */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12 md:mb-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-[color:var(--color-text-muted)] font-bold mb-3">
                Our Activities
              </p>
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                6 つの実践活動。
              </h2>
            </div>
            <p className="text-sm md:text-base text-[color:var(--color-text-muted)] max-w-md leading-relaxed">
              レクリエーションを軸に、多職種が連携して取り組む 6 つの活動。
              <span className="hidden md:inline">→ スワイプして見る</span>
            </p>
          </div>
        </div>

        <div className="overflow-x-auto pb-8 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-5 md:gap-7 px-6 md:px-10 w-max">
            {activities.map((activity) => (
              <Link
                key={activity.slug}
                href={`/activities/${activity.slug}/`}
                className="group relative shrink-0 w-[280px] md:w-[340px] snap-center"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gray-100">
                  <div
                    className="absolute inset-0 flex items-center justify-center text-white"
                    style={{ background: activity.hex }}
                  >
                    <ActivityIcon slug={activity.slug} className="w-24 h-24" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-2 group-hover:underline">
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

      {/* ============================================================ */}
      {/* 受講者の声 — placeholder (Phase 3 で microCMS から) */}
      {/* ============================================================ */}
      <section className="bg-[#FAFAFA] px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-[color:var(--color-text-muted)] font-bold mb-3">
              Voices
            </p>
            <h2 className="text-3xl md:text-4xl font-black">受講者の声</h2>
          </div>
          <div className="max-w-2xl mx-auto text-center py-12 px-8 rounded-2xl bg-white border border-[color:var(--color-border)] text-sm text-[color:var(--color-text-muted)]">
            🚧 受講者・修了生の声は Phase 3 で実装予定 (microCMS 接続後)
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 最終 CTA — charity:water 流: 黄ボタンで締める */}
      {/* ============================================================ */}
      <section className="bg-white px-6 md:px-10 py-24 md:py-32 border-t border-[color:var(--color-border)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            あなたも、
            <br />
            指導者になる。
          </h2>
          <p className="text-base md:text-lg text-[color:var(--color-text-muted)] leading-relaxed mb-10 max-w-xl mx-auto">
            未経験から始められる、2 つの公認指導者資格。
            <br />
            まずは無料の資料請求から。
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/qualification/"
              className="inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 rounded-full bg-[#FFD647] text-black font-black text-base md:text-lg shadow-lg hover:scale-105 transition-transform"
            >
              資格を取得する
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-6 md:px-7 py-4 md:py-5 rounded-full border-2 border-black text-black font-bold hover:bg-black hover:text-white transition-colors"
            >
              無料で相談する
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

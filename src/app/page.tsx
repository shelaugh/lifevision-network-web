import Link from "next/link";
import Image from "next/image";
import { activities } from "@/data/activities";
import { lvnInfo } from "@/data/lvn-info";
import ActivityIcon from "@/components/decorations/ActivityIcon";
import { ArrowRight, Heart, Sprout, Users2, Sparkles, MapPin, Tag, UserPlus } from "lucide-react";
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
import {
  getFeaturedUpcoming,
  getCategoryColor,
  getCategoryLabel,
  formatDate,
  formatTime,
  formatDayOfWeek,
} from "@/data/events";
import {
  getLatestNews,
  getCategoryColor as getNewsColor,
  getCategoryLabel as getNewsLabel,
  formatPublishedDate,
} from "@/data/news";

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
  const upcomingEvents = getFeaturedUpcoming(3);
  const latestNews = getLatestNews(3);

  return (
    <div>
      {/* === デザイン比較バナー (一時的・決定後に削除) === */}
      <div className="bg-black text-white px-4 py-3 text-center text-xs md:text-sm font-bold flex flex-wrap items-center justify-center gap-2 md:gap-4">
        <span className="font-mono tracking-wider opacity-70">DESIGN COMPARE</span>
        <Link href="/preview-a/" className="inline-flex items-center gap-1 bg-[#FFD647] text-black px-3 py-1 rounded-full font-black hover:scale-105 transition-transform">
          A: SOU GROUP 寄せ
        </Link>
        <Link href="/preview-b/" className="inline-flex items-center gap-1 bg-white text-black px-3 py-1 rounded-full font-black hover:scale-105 transition-transform">
          B: スタイリッシュ最先端
        </Link>
        <span className="opacity-50 hidden md:inline">← 現在は中間バージョン</span>
      </div>
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
      {/* 世界観テキスト (Hero 直下・SOU GROUP 流) */}
      {/* ============================================================ */}
      <section className="relative bg-white px-6 md:px-10 py-20 md:py-28 overflow-hidden">
        <HandSquiggle color="#FFD647" className="absolute top-10 right-[5%]" size={80} />
        <HandStar color="#FF4FB0" className="absolute bottom-12 left-[8%]" size={50} />
        <HandDots color="#2D8BFF" className="absolute top-1/2 right-[10%]" size={70} />

        <div className="relative max-w-3xl mx-auto text-center">
          <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-[color:var(--color-text-muted)] font-bold mb-5">
            Our Thought
          </p>
          <p className="text-2xl md:text-4xl lg:text-5xl font-black leading-[1.4]">
            「楽しい」は、
            <br />
            <span className="bg-[#FFD647] px-2">心の医療</span>
            になる。
          </p>
          <p className="text-base md:text-lg leading-loose text-[color:var(--color-text-muted)] mt-10 max-w-xl mx-auto">
            こどもから高齢者まで、すべての人が自分らしく息をする社会へ。
            私たちはレクリエーションを起点に、医療・福祉・保育・介護・スポーツが手を取り合う未来をつくります。
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 唯一性メトリック — 黒帯で印象強く */}
      {/* ============================================================ */}
      <section className="relative bg-black text-white overflow-hidden">
        <HandSun color="#FFD647" className="absolute top-8 right-8 opacity-90" size={70} />
        <HandHeart color="#FF4FB0" className="absolute bottom-12 right-[20%]" size={45} />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
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
      <section className="relative bg-white px-6 md:px-10 py-20 md:py-28 overflow-hidden">
        <HandLeaf color="#4FC04F" className="absolute top-16 right-[6%]" size={60} />
        <HandSparkle color="#FFD647" className="absolute top-1/2 left-[5%]" size={50} />
        <HandBlob color="#9B5BFF" className="absolute bottom-12 right-[8%] opacity-80" size={70} />

        <div className="relative max-w-6xl mx-auto">
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
      <section className="relative bg-[#FFD647] px-6 md:px-10 py-20 md:py-28 border-t-2 border-black border-b-2 overflow-hidden">
        <HandStar color="#FF4FB0" className="absolute top-8 right-[8%]" size={60} />
        <HandDots color="#2D8BFF" className="absolute top-12 left-[6%]" size={70} />
        <HandArrow color="#000" className="absolute bottom-10 right-[15%]" size={70} />
        <HandSquiggle color="#FF5A5A" className="absolute bottom-16 left-[8%]" size={100} />

        <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-center">
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
      <section className="relative bg-white py-20 md:py-28 overflow-hidden">
        <HandHeart color="#FF4FB0" className="absolute top-20 right-[5%]" size={50} />
        <HandLeaf color="#4FC04F" className="absolute bottom-8 left-[6%]" size={60} />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 mb-12 md:mb-14">
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
      {/* 次のイベント (直近 3 件・ハードコード・後で microCMS) */}
      {/* ============================================================ */}
      <section className="bg-white px-6 md:px-10 py-20 md:py-28 border-t border-[color:var(--color-border)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
            <div>
              <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-[color:var(--color-text-muted)] font-bold mb-3">
                Upcoming Events
              </p>
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                次のイベント。
              </h2>
            </div>
            <Link
              href="/schedule/"
              className="inline-flex items-center gap-1 text-sm font-black hover:underline"
            >
              すべてのスケジュールを見る <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {upcomingEvents.length === 0 ? (
            <p className="text-center text-[color:var(--color-text-muted)] py-12">
              現在予定されているイベントはありません。
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
              {upcomingEvents.map((event) => {
                const color = getCategoryColor(event.category);
                return (
                  <Link
                    key={event.id}
                    href={`/events/${event.id}/`}
                    className="group block bg-white rounded-2xl border border-[color:var(--color-border)] overflow-hidden hover:border-black hover:shadow-lg transition-all"
                  >
                    {/* 日付ヘッダ */}
                    <div
                      className="px-6 py-4 border-b border-[color:var(--color-border)]"
                      style={{ background: color }}
                    >
                      <p className="font-black text-2xl leading-none">
                        {formatDate(event.startAt).split(".").slice(1).join(".")}
                      </p>
                      <p className="text-xs font-bold mt-1">
                        {formatDate(event.startAt).split(".")[0]} ({formatDayOfWeek(event.startAt)}){" "}
                        {formatTime(event.startAt)}
                      </p>
                    </div>
                    {/* メイン */}
                    <div className="p-6">
                      <div className="flex items-center gap-1 text-xs font-black text-[color:var(--color-text-muted)] mb-2">
                        <Tag className="w-3 h-3" />
                        {getCategoryLabel(event.category)}
                      </div>
                      <h3 className="text-lg md:text-xl font-black mb-2 group-hover:underline leading-tight">
                        {event.title}
                      </h3>
                      <p className="text-sm text-[color:var(--color-text-muted)] leading-relaxed mb-4 line-clamp-2">
                        {event.summary}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-[color:var(--color-text-muted)]">
                        <MapPin className="w-3.5 h-3.5" />
                        {event.location}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 最新お知らせ */}
      {/* ============================================================ */}
      <section className="bg-[#FAFAFA] px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
            <div>
              <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-[color:var(--color-text-muted)] font-bold mb-3">
                Latest News
              </p>
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                最新のお知らせ。
              </h2>
            </div>
            <Link
              href="/news/"
              className="inline-flex items-center gap-1 text-sm font-black hover:underline"
            >
              すべて見る <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {latestNews.map((n) => {
              const color = getNewsColor(n.category);
              return (
                <Link
                  key={n.id}
                  href={`/news/${n.id}/`}
                  className="group block bg-white rounded-2xl border border-[color:var(--color-border)] hover:border-black hover:shadow-lg transition-all overflow-hidden"
                >
                  <div className="relative aspect-[16/9] bg-gray-100 overflow-hidden">
                    {n.coverUrl ? (
                      <Image
                        src={n.coverUrl}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full" style={{ background: color }} />
                    )}
                    <div className="absolute top-3 left-3">
                      <span
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black border-2 border-black"
                        style={{ background: color, color: "#000" }}
                      >
                        <Tag className="w-3 h-3" />
                        {getNewsLabel(n.category)}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 md:p-6">
                    <p className="text-xs font-bold text-[color:var(--color-text-muted)] mb-2 font-mono">
                      {formatPublishedDate(n.publishedAt)}
                    </p>
                    <h3 className="text-lg md:text-xl font-black mb-2 group-hover:underline leading-tight">
                      {n.title}
                    </h3>
                    <p className="text-sm text-[color:var(--color-text-muted)] leading-relaxed line-clamp-2">
                      {n.summary}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 仲間募集 (SOU GROUP 流の採用バナー) */}
      {/* ============================================================ */}
      <section className="relative bg-black text-white px-6 md:px-10 py-20 md:py-28 overflow-hidden">
        <HandSun color="#FFD647" className="absolute top-10 right-10" size={60} />
        <HandStar color="#FF4FB0" className="absolute bottom-12 left-[6%]" size={50} />
        <HandDots color="#FFD647" className="absolute bottom-20 right-[8%]" size={60} />

        <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">
          <div>
            <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-[#FFD647] font-bold mb-4">
              Join Us
            </p>
            <h2 className="text-3xl md:text-5xl font-black leading-tight mb-4">
              一緒に、未来をつくる
              <br />
              仲間を募集しています。
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-xl">
              レクリエーション活動の実践者、講師、運営スタッフ、ボランティア。
              さまざまな関わり方で、社会を変えていく仲間を探しています。
            </p>
          </div>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FFD647] text-black font-black hover:scale-105 transition-transform shadow-2xl whitespace-nowrap"
          >
            <UserPlus className="w-5 h-5" />
            問い合わせる
          </Link>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 最終 CTA — charity:water 流: 黄ボタンで締める */}
      {/* ============================================================ */}
      <section className="relative bg-white px-6 md:px-10 py-24 md:py-32 border-t border-[color:var(--color-border)] overflow-hidden">
        <HandSparkle color="#FFD647" className="absolute top-16 left-[10%]" size={50} />
        <HandHeart color="#FF4FB0" className="absolute top-1/2 right-[8%]" size={45} />
        <HandSquiggle color="#2D8BFF" className="absolute bottom-12 left-[5%]" size={90} />
        <HandStar color="#FFA235" className="absolute bottom-16 right-[6%]" size={45} />

        <div className="relative max-w-3xl mx-auto text-center">
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

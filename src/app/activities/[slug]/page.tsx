import { notFound } from "next/navigation";
import Link from "next/link";
import { activities } from "@/data/activities";
import ActivityIcon from "@/components/decorations/ActivityIcon";
import { ArrowLeft, ArrowUpRight, Calendar, Users2 } from "lucide-react";
import { CRAFT } from "@/lib/craft";

export function generateStaticParams() {
  return activities.map((a) => ({ slug: a.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export default async function ActivityDetail({ params }: Props) {
  const { slug } = await params;
  const activity = activities.find((a) => a.slug === slug);
  if (!activity) notFound();

  return (
    <div style={{ background: CRAFT.BG, color: CRAFT.INK }} className="font-sans">
      {/* Hero (大型カラータイル) */}
      <section className="px-6 md:px-12 pt-8 md:pt-12 pb-16 md:pb-24 max-w-[1400px] mx-auto">
        <Link
          href="/activities/"
          className="inline-flex items-center gap-2 text-sm font-bold mb-6 px-4 py-2 rounded-full bg-white hover:scale-105 transition-transform"
          style={{ color: CRAFT.INK, boxShadow: "0 4px 14px rgba(0,0,0,0.06)" }}
        >
          <ArrowLeft className="w-4 h-4" /> 5 団体一覧に戻る
        </Link>

        <div
          className="rounded-[36px] md:rounded-[48px] p-10 md:p-16 lg:p-20 relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${activity.hex} 0%, ${activity.hex}dd 100%)`, boxShadow: `0 24px 70px ${activity.hex}40` }}
        >
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full opacity-30 blur-3xl" style={{ background: CRAFT.BG }} />
          <div className="absolute -left-12 -bottom-12 w-64 h-64 rounded-full opacity-20 blur-3xl" style={{ background: CRAFT.INK }} />

          <div className="relative grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-end">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.4em] opacity-70 mb-6" style={{ color: CRAFT.INK }}>
                Activity · 5 団体
              </p>
              <h1 className="font-black tracking-[-0.04em] leading-[0.92] mb-6" style={{ fontSize: "clamp(3rem, 9vw, 7.5rem)", color: CRAFT.INK }}>
                {activity.name}
              </h1>
              <p className="text-base md:text-xl leading-relaxed max-w-xl" style={{ color: CRAFT.INK, opacity: 0.85 }}>
                {activity.tagline}
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-44 h-44 rounded-[28px] bg-white/30 backdrop-blur-md flex items-center justify-center">
                <ActivityIcon slug={activity.slug} className="w-32 h-32" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* placeholder */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-[1400px] mx-auto">
        <div className="max-w-2xl mx-auto rounded-[28px] bg-white p-10 md:p-14 text-center" style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
          <p className="text-sm opacity-60 leading-relaxed">
            🚧 詳細コンテンツは Phase 3 で実装予定 (microCMS 接続後)
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-[1400px] mx-auto">
        <div className="rounded-[36px] md:rounded-[48px] p-10 md:p-20 text-center relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${CRAFT.SUN}, ${activity.hex})` }}>
          <div className="absolute -left-20 top-10 w-72 h-72 rounded-full opacity-30 blur-2xl" style={{ background: CRAFT.LIME }} />
          <div className="absolute -right-10 bottom-0 w-72 h-72 rounded-full opacity-30 blur-2xl" style={{ background: CRAFT.SKY }} />
          <div className="relative">
            <h2 className="font-black tracking-[-0.03em] leading-[0.95] mb-8" style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)", color: CRAFT.INK }}>
              この活動に、<br />
              参加してみる。
            </h2>
            <div className="inline-flex flex-wrap items-center gap-3 justify-center">
              <Link href="/schedule/" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm hover:scale-105 transition-transform" style={{ background: CRAFT.INK, color: CRAFT.BG, boxShadow: "0 12px 30px rgba(42,31,26,0.4)" }}>
                <Calendar className="w-4 h-4" /> スケジュールを見る <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </Link>
              <Link href="/contact/" className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm bg-white hover:scale-105 transition-transform" style={{ color: CRAFT.INK }}>
                <Users2 className="w-4 h-4" /> 問い合わせる
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

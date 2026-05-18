import { notFound } from "next/navigation";
import Link from "next/link";
import { activities } from "@/data/activities";
import ActivityIcon from "@/components/decorations/ActivityIcon";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return activities.map((a) => ({ slug: a.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export default async function ActivityDetail({ params }: Props) {
  const { slug } = await params;
  const activity = activities.find((a) => a.slug === slug);
  if (!activity) notFound();

  return (
    <div>
      {/* ============ Hero (カテゴリ色) ============ */}
      <section
        className="relative px-6 md:px-10 pt-16 md:pt-24 pb-16 md:pb-24 border-b-2 border-black"
        style={{ background: activity.hex, color: "#fff" }}
      >
        <div className="max-w-5xl mx-auto">
          <Link
            href="/activities/"
            className="inline-flex items-center gap-2 text-sm font-bold mb-8 hover:underline opacity-90"
          >
            <ArrowLeft className="w-4 h-4" /> 活動一覧に戻る
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-end">
            <div>
              <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase opacity-80 font-bold mb-4">
                Activity
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-6">
                {activity.name}
              </h1>
              <p className="text-base md:text-xl leading-relaxed opacity-95 max-w-xl">
                {activity.tagline}
              </p>
            </div>
            <div className="hidden md:block">
              <ActivityIcon slug={activity.slug} className="w-40 h-40 md:w-48 md:h-48" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ placeholder ============ */}
      <section className="bg-white px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center text-sm text-[color:var(--color-text-muted)] py-12 px-8 rounded-2xl border border-[color:var(--color-border)]">
          🚧 詳細コンテンツは Phase 3 で実装予定 (microCMS 接続後)
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="bg-white px-6 md:px-10 pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black leading-tight mb-8">
            この活動に参加したい。
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/schedule/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FFD647] text-black font-black hover:scale-105 transition-transform"
            >
              スケジュールを見る <ArrowRight className="w-5 h-5" />
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

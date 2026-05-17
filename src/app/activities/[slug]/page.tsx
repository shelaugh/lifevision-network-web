import { notFound } from "next/navigation";
import Link from "next/link";
import { activities } from "@/data/activities";
import ActivityIcon from "@/components/decorations/ActivityIcon";
import WaveDivider from "@/components/decorations/WaveDivider";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return activities.map((a) => ({ slug: a.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export default async function ActivityDetail({ params }: Props) {
  const { slug } = await params;
  const activity = activities.find((a) => a.slug === slug);

  if (!activity) {
    notFound();
  }

  return (
    <div>
      {/* Hero with color theme */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          background: `linear-gradient(135deg, ${activity.hex} 0%, ${activity.hex}cc 100%)`,
        }}
      >
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/10 blur-3xl animate-float" />
        <div
          className="absolute -bottom-24 -left-16 w-80 h-80 rounded-full bg-white/10 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="relative px-4 md:px-6 pt-20 md:pt-32 pb-20 md:pb-28">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/activities/"
              className="inline-flex items-center gap-2 text-sm font-bold opacity-80 hover:opacity-100 mb-6 transition-opacity"
            >
              <ArrowLeft className="w-4 h-4" /> 活動一覧に戻る
            </Link>

            <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-white/20 backdrop-blur mb-6 animate-float">
              <ActivityIcon slug={activity.slug} className="w-12 h-12 md:w-14 md:h-14 text-white" />
            </div>

            <p className="font-[var(--font-poppins)] text-sm tracking-[0.2em] uppercase opacity-80 mb-3 font-bold">
              Activity
            </p>
            <h1 className="text-5xl md:text-7xl font-black mb-5 leading-[1.05]">
              {activity.name}
            </h1>
            <p className="text-base md:text-xl opacity-95 max-w-2xl mx-auto leading-relaxed">
              {activity.tagline}
            </p>
          </div>
        </div>
        <WaveDivider fill="#FFFFFF" />
      </section>

      {/* Placeholder */}
      <section className="px-4 md:px-6 py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center text-sm text-[color:var(--color-text-muted)] py-12 px-8 rounded-3xl bg-gray-50">
          🚧 詳細コンテンツは Phase 3 で実装予定 (microCMS 接続後)
        </div>
      </section>
    </div>
  );
}

import { notFound } from "next/navigation";
import Link from "next/link";
import { activities } from "@/data/activities";

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
      <section
        className="px-4 md:px-6 pt-16 md:pt-20 pb-12 md:pb-16 text-center"
        style={{ borderTop: `6px solid ${activity.hex}` }}
      >
        <p className="font-[var(--font-poppins)] text-sm tracking-widest uppercase text-[color:var(--color-text-muted)] mb-3 font-bold">
          Activity
        </p>
        <h1 className="text-4xl md:text-5xl font-black mb-4">{activity.name}</h1>
        <p className="text-base md:text-lg text-[color:var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed">
          {activity.tagline}
        </p>
      </section>

      <section className="px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center text-[color:var(--color-text-muted)]">
          <p className="text-sm mb-6">
            🚧 詳細コンテンツは Phase 3 で実装予定 (microCMS 接続後)
          </p>
          <Link
            href="/activities/"
            className="inline-flex items-center text-sm font-bold hover:text-[color:var(--color-text)]"
          >
            ← 活動一覧に戻る
          </Link>
        </div>
      </section>
    </div>
  );
}

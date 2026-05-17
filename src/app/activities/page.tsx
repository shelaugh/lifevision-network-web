import Link from "next/link";
import { activities } from "@/data/activities";

export default function ActivitiesPage() {
  return (
    <div>
      <section className="px-4 md:px-6 pt-16 md:pt-20 pb-10 md:pb-12 text-center">
        <p className="font-[var(--font-poppins)] text-sm tracking-widest uppercase text-[color:var(--color-text-muted)] mb-3 font-bold">
          Activities
        </p>
        <h1 className="text-4xl md:text-5xl font-black mb-4">活動紹介</h1>
        <p className="text-base md:text-lg text-[color:var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed">
          レクリエーションを軸に、多職種が連携して取り組む 6 つの活動。
        </p>
      </section>

      <section className="px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
      </section>
    </div>
  );
}

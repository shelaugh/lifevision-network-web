import Link from "next/link";
import { activities } from "@/data/activities";
import BlobBackground from "@/components/decorations/BlobBackground";
import WaveDivider from "@/components/decorations/WaveDivider";
import ActivityIcon from "@/components/decorations/ActivityIcon";
import { ArrowRight } from "lucide-react";

export default function ActivitiesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <BlobBackground />
        <div className="relative px-4 md:px-6 pt-20 md:pt-32 pb-20 md:pb-28 text-center">
          <p
            className="font-[var(--font-poppins)] text-sm tracking-[0.2em] uppercase text-[color:var(--color-lvn-purple)] mb-3 font-bold animate-fade-up"
          >
            Our Activities
          </p>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.05] animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="block">6 つの</span>
            <span className="block bg-gradient-to-r from-[#FF4FB0] via-[#9B5BFF] to-[#2D8BFF] bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
              活動
            </span>
          </h1>
          <p
            className="text-base md:text-lg text-[color:var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            レクリエーションを軸に、多職種が連携して取り組む 6 つの活動。
          </p>
        </div>
        <WaveDivider fill="#FAFAFA" />
      </section>

      {/* 6 活動グリッド */}
      <section className="px-4 md:px-6 py-20 md:py-28 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {activities.map((activity, i) => (
            <Link
              key={activity.slug}
              href={`/activities/${activity.slug}/`}
              className="group relative block p-7 md:p-8 rounded-[2rem] bg-white hover:-translate-y-2 transition-all shadow-md hover:shadow-2xl overflow-hidden animate-fade-up"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div
                className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-10 group-hover:opacity-25 group-hover:scale-125 transition-all duration-500"
                style={{ background: activity.hex }}
              />
              <div
                className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-5 text-white group-hover:rotate-[-6deg] transition-transform"
                style={{ background: activity.hex }}
              >
                <ActivityIcon slug={activity.slug} className="w-10 h-10" />
              </div>
              <h3 className="relative text-xl md:text-2xl font-black mb-2">
                {activity.name}
              </h3>
              <p className="relative text-sm text-[color:var(--color-text-muted)] leading-relaxed mb-5">
                {activity.tagline}
              </p>
              <span
                className="relative inline-flex items-center gap-1 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: activity.hex }}
              >
                詳しく見る <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

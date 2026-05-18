import Image from "next/image";
import Link from "next/link";
import { activities } from "@/data/activities";
import ActivityIcon from "@/components/decorations/ActivityIcon";
import { ArrowRight } from "lucide-react";
import { HandStar, HandSquiggle, HandLeaf, HandHeart as DecoHeart } from "@/components/decorations/HandDrawn";

export default function ActivitiesPage() {
  return (
    <div>
      {/* ============ Hero ============ */}
      <section className="relative h-[60vh] md:h-[70vh] min-h-[450px] overflow-hidden bg-[#1a1a1a]">
        <Image
          src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=2400&q=85&auto=format&fit=crop"
          alt="多様な活動で集う人々"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
        <div className="relative h-full flex items-end">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10 pb-12 md:pb-20 text-white">
            <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-white/80 font-bold mb-4">
              Our Activities
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95]">
              6 つの実践活動。
            </h1>
            <p className="text-base md:text-lg leading-relaxed mt-6 max-w-2xl opacity-90">
              レクリエーションを軸に、多職種が連携して取り組む 6 つの活動。
            </p>
          </div>
        </div>
      </section>

      {/* ============ 6 活動グリッド ============ */}
      <section className="relative bg-white px-6 md:px-10 py-20 md:py-28 overflow-hidden">
        <HandStar color="#FFD647" className="absolute top-10 right-[5%]" size={50} />
        <HandSquiggle color="#9B5BFF" className="absolute top-1/3 left-[3%]" size={80} />
        <HandLeaf color="#4FC04F" className="absolute bottom-16 right-[8%]" size={55} />
        <DecoHeart color="#FF4FB0" className="absolute bottom-32 left-[8%]" size={40} />

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {activities.map((activity) => (
            <Link
              key={activity.slug}
              href={`/activities/${activity.slug}/`}
              className="group block border-t-2 border-black pt-6 hover:opacity-80 transition-opacity"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-gray-100">
                <div
                  className="absolute inset-0 flex items-center justify-center text-white"
                  style={{ background: activity.hex }}
                >
                  <ActivityIcon slug={activity.slug} className="w-28 h-28" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-2 group-hover:underline leading-tight">
                {activity.name}
              </h3>
              <p className="text-sm text-[color:var(--color-text-muted)] leading-relaxed mb-4">
                {activity.tagline}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-black">
                詳しく見る <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

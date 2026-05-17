import Link from "next/link";
import { activities } from "@/data/activities";
import BlobBackground from "@/components/decorations/BlobBackground";
import WaveDivider from "@/components/decorations/WaveDivider";
import SquiggleUnderline from "@/components/decorations/SquiggleUnderline";
import ActivityIcon from "@/components/decorations/ActivityIcon";
import { ArrowRight, Sparkles, Users, Calendar, Heart } from "lucide-react";

const heroCTAs = [
  {
    href: "/qualification/",
    label: "資格を取る",
    desc: "レクリエーション指導者を目指す",
    icon: Sparkles,
    hex: "#FF5A5A",
  },
  {
    href: "/schedule/",
    label: "イベント体験",
    desc: "まずは現場を体験してみたい",
    icon: Calendar,
    hex: "#FFD647",
  },
  {
    href: "/about/",
    label: "多職種連携",
    desc: "団体・活動について知りたい",
    icon: Users,
    hex: "#2D8BFF",
  },
];

export default function Home() {
  return (
    <div>
      {/* === HERO === */}
      <section className="relative overflow-hidden">
        <BlobBackground />

        <div className="relative px-4 md:px-6 pt-20 md:pt-32 pb-24 md:pb-40">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur border border-white shadow-sm mb-8 animate-fade-up">
              <Heart className="w-4 h-4 text-[#FF4FB0]" fill="#FF4FB0" />
              <span className="text-xs md:text-sm font-bold tracking-wide">
                一般社団法人 Life Vision NetWork
              </span>
            </div>

            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-8 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="block">心を、</span>
              <span
                className="block bg-clip-text text-transparent bg-gradient-to-r from-[#FF4FB0] via-[#9B5BFF] to-[#2D8BFF] animate-gradient bg-[length:200%_200%]"
              >
                元気にする。
              </span>
            </h1>

            <p
              className="text-base md:text-xl text-[color:var(--color-text-muted)] mb-12 max-w-2xl mx-auto leading-relaxed font-medium animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              医療・福祉・保育・介護・スポーツ。
              <br className="hidden md:block" />
              多職種が手を取り合い、レクリエーションで
              <br className="hidden md:block" />
              「関わるすべての人が幸福に暮らす社会」を、一緒に。
            </p>

            {/* 対象別 3 タイル CTA */}
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 max-w-4xl mx-auto animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              {heroCTAs.map((cta) => {
                const Icon = cta.icon;
                return (
                  <Link
                    key={cta.href}
                    href={cta.href}
                    className="group relative p-6 md:p-7 rounded-3xl bg-white/80 backdrop-blur border border-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all text-left overflow-hidden"
                  >
                    <div
                      className="absolute -right-8 -top-8 w-32 h-32 rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition-opacity"
                      style={{ background: cta.hex }}
                    />
                    <div
                      className="relative inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-4 text-white"
                      style={{ background: cta.hex }}
                    >
                      <Icon className="w-6 h-6" strokeWidth={2.5} />
                    </div>
                    <h2 className="relative text-lg md:text-xl font-bold mb-1.5">
                      {cta.label}
                    </h2>
                    <p className="relative text-xs md:text-sm text-[color:var(--color-text-muted)] leading-relaxed mb-3">
                      {cta.desc}
                    </p>
                    <span
                      className="relative inline-flex items-center gap-1 text-sm font-bold group-hover:translate-x-1 transition-transform"
                      style={{ color: cta.hex }}
                    >
                      詳しく見る <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <WaveDivider fill="#FAFAFA" />
      </section>

      {/* === 6 活動 === */}
      <section className="relative px-4 md:px-6 py-20 md:py-28 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 md:mb-20">
            <p className="font-[var(--font-poppins)] text-sm tracking-[0.2em] uppercase text-[color:var(--color-lvn-purple)] mb-3 font-bold">
              Our Activities
            </p>
            <h2 className="inline-block relative text-4xl md:text-5xl font-black mb-5">
              6 つの活動
              <SquiggleUnderline
                color="#FFD647"
                className="absolute -bottom-3 left-0"
              />
            </h2>
            <p className="text-sm md:text-base text-[color:var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed mt-6">
              レクリエーションを軸に、多職種が連携して取り組む 6 つの活動。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
            {activities.map((activity, i) => (
              <Link
                key={activity.slug}
                href={`/activities/${activity.slug}/`}
                className="group relative block p-7 md:p-8 rounded-[2rem] bg-white hover:-translate-y-2 transition-all shadow-md hover:shadow-2xl overflow-hidden animate-fade-up"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                {/* 装飾円 (右上) */}
                <div
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-10 group-hover:opacity-25 group-hover:scale-125 transition-all duration-500"
                  style={{ background: activity.hex }}
                />

                {/* アイコン */}
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
        </div>
      </section>

      {/* === 資格 CTA 大バナー === */}
      <section className="relative px-4 md:px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto relative rounded-[2.5rem] bg-gradient-to-br from-[#FF5A5A] via-[#FF4FB0] to-[#9B5BFF] animate-gradient bg-[length:200%_200%] p-10 md:p-16 text-white text-center shadow-2xl overflow-hidden">
          {/* 装飾円 */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-2xl animate-float" />
          <div
            className="absolute -bottom-24 -left-16 w-80 h-80 rounded-full bg-[#FFD647]/30 blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs md:text-sm font-bold tracking-wider uppercase">
                For Future Recreation Leaders
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-5 leading-tight">
              笑顔をつくる、
              <br />
              <span className="inline-block bg-gradient-to-r from-white to-[#FFD647] bg-clip-text text-transparent">
                仕事になる。
              </span>
            </h2>
            <p className="text-sm md:text-lg mb-10 opacity-95 max-w-xl mx-auto leading-relaxed">
              レクリエーションインストラクター / スポーツ・レクリエーション指導者。
              <br className="hidden md:block" />
              LVN なら、資格を取って、現場で活かせる。
            </p>
            <Link
              href="/qualification/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#FF5A5A] font-black shadow-xl hover:scale-105 hover:shadow-2xl transition-all"
            >
              資格について詳しく見る
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* === 理念 === */}
      <section className="relative px-4 md:px-6 py-20 md:py-28 bg-[#FAFAFA] overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative">
          <p className="font-[var(--font-poppins)] text-sm tracking-[0.2em] uppercase text-[color:var(--color-lvn-blue)] mb-3 font-bold">
            Our Vision
          </p>
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
            関わるすべての人が、
            <br />
            <span className="bg-gradient-to-r from-[#FF4FB0] via-[#FFD647] to-[#4FC04F] bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
              幸福に暮らす社会へ
            </span>
          </h2>
          <p className="text-base md:text-lg leading-loose text-[color:var(--color-text-muted)] max-w-2xl mx-auto">
            性別・年齢・国籍・宗教に関係なく、自分らしく、ありのままを受け入れられ、
            安心して暮らし、幸福を実感できる――
            <br />
            そんなインクルージョンな社会の実現を、私たちは目指します。
          </p>

          <Link
            href="/about/"
            className="inline-flex items-center gap-2 mt-10 px-6 py-3 rounded-full border-2 border-[color:var(--color-text)] font-bold hover:bg-[color:var(--color-text)] hover:text-white transition-all"
          >
            団体について詳しく <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

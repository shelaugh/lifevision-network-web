import Link from "next/link";
import Image from "next/image";
import { activities } from "@/data/activities";
import { lvnInfo } from "@/data/lvn-info";
import MeshGradient from "@/components/decorations/MeshGradient";
import WaveDivider from "@/components/decorations/WaveDivider";
import SquiggleUnderline from "@/components/decorations/SquiggleUnderline";
import ActivityIcon from "@/components/decorations/ActivityIcon";
import Marquee from "@/components/Marquee";
import UspBadge from "@/components/UspBadge";
import { ArrowRight, Sparkles, Users, Calendar, Award, ArrowDown } from "lucide-react";

const heroCTAs = [
  { href: "/qualification/", label: "資格を取る", icon: Sparkles, hex: "#FF5A5A" },
  { href: "/schedule/", label: "イベント体験", icon: Calendar, hex: "#FFD647" },
  { href: "/about/", label: "多職種連携", icon: Users, hex: "#2D8BFF" },
];

export default function Home() {
  return (
    <div>
      {/* ============================================ */}
      {/* HERO — フルスクリーン・ロゴ + メッシュ + 巨大タイポ */}
      {/* ============================================ */}
      <section className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
        <MeshGradient />

        {/* 浮遊する装飾円 */}
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-black animate-spin-slow opacity-30" />
        <div
          className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-[#FFD647] border-2 border-black animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-[#FF5A5A] animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-4 h-4 rounded-full bg-[#2D8BFF] animate-float"
          style={{ animationDelay: "0.5s" }}
        />

        <div className="relative px-4 md:px-6 py-12 md:py-20 text-center w-full max-w-7xl">
          {/* USP バッジ */}
          <div className="flex justify-center mb-8 animate-fade-up">
            <UspBadge />
          </div>

          {/* 巨大ロゴ */}
          <div
            className="flex justify-center mb-8 md:mb-12 animate-fade-up"
            style={{ animationDelay: "0.05s" }}
          >
            <Image
              src="/logo.png"
              alt="Life Vision NetWork"
              width={400}
              height={400}
              priority
              className="w-40 md:w-64 lg:w-72 h-auto animate-float drop-shadow-2xl"
            />
          </div>

          {/* 超巨大タイポ — 日本で、唯一。 */}
          <h1
            className="font-black leading-[0.85] tracking-tighter mb-6 md:mb-8 animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            <span className="block text-6xl md:text-9xl lg:text-[12rem] mb-2">日本で、</span>
            <span className="block text-7xl md:text-[10rem] lg:text-[14rem] bg-gradient-to-r from-[#FF4FB0] via-[#FFD647] via-[#4FC04F] to-[#2D8BFF] bg-clip-text text-transparent animate-gradient bg-[length:300%_300%]">
              唯一。
            </span>
          </h1>

          <p
            className="text-base md:text-2xl font-bold text-[color:var(--color-text)] mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            2 つの公認資格が取れる、
            <br className="md:hidden" />
            <span className="bg-[#FFD647] px-2">日本で唯一の民間団体</span>
            。
          </p>

          {/* 横長 CTA タイル */}
          <div
            className="flex flex-wrap justify-center gap-3 md:gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            {heroCTAs.map((cta) => {
              const Icon = cta.icon;
              return (
                <Link
                  key={cta.href}
                  href={cta.href}
                  className="group inline-flex items-center gap-3 pl-4 pr-6 py-3 md:py-4 rounded-full bg-white border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
                >
                  <span
                    className="w-9 h-9 rounded-full border-2 border-black flex items-center justify-center text-white"
                    style={{ background: cta.hex }}
                  >
                    <Icon className="w-5 h-5" strokeWidth={2.5} />
                  </span>
                  <span className="font-black text-sm md:text-base">{cta.label}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              );
            })}
          </div>

          {/* スクロール促進 */}
          <div
            className="mt-12 md:mt-16 flex justify-center animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex flex-col items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-[color:var(--color-text-muted)]">
              <span>Scroll</span>
              <ArrowDown className="w-4 h-4 animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* マーキー1 */}
      {/* ============================================ */}
      <Marquee />

      {/* ============================================ */}
      {/* 巨大数字「1」 — 唯一性を圧倒的に */}
      {/* ============================================ */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-[#FFD647]/20 blur-3xl animate-blob" />
          <div
            className="absolute -bottom-40 right-1/4 w-[30rem] h-[30rem] rounded-full bg-[#FF4FB0]/20 blur-3xl animate-blob"
            style={{ animationDelay: "3s" }}
          />
        </div>

        <div className="relative px-4 md:px-6 py-20 md:py-32">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-[#FFD647] font-bold mb-4">
                Only One
              </p>
              <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
                唯一であること。
                <br />
                それは、責任である。
              </h2>
              <p className="text-base md:text-lg opacity-90 leading-relaxed mb-8">
                公益財団法人 日本レクリエーション協会公認。
                <br />
                LVN は、2 つの公認指導者資格課程を運営する、
                <span className="text-[#FFD647] font-black">日本で唯一の民間団体</span>です。
              </p>
              <a
                href={lvnInfo.authority.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#FFD647] hover:underline"
              >
                公益財団法人 日本レクリエーション協会 公式
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* 圧倒的「1」 */}
            <div className="relative flex justify-center items-center">
              <span
                className="font-black leading-none text-[#FFD647]"
                style={{
                  fontSize: "clamp(12rem, 30vw, 24rem)",
                  textShadow: "8px 8px 0 #FF4FB0, 16px 16px 0 #9B5BFF",
                }}
              >
                1
              </span>
              <span className="absolute -bottom-4 md:bottom-4 right-0 md:right-8 text-sm md:text-base font-black bg-white text-black px-3 py-2 rounded-full border-2 border-[#FFD647]">
                唯一の民間団体
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* マーキー2 — 逆方向 */}
      {/* ============================================ */}
      <Marquee reverse speed="slow" />

      {/* ============================================ */}
      {/* 数字 3 連 — 2 / 6 / 5 */}
      {/* ============================================ */}
      <section className="relative px-4 md:px-6 py-20 md:py-32 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-[color:var(--color-text-muted)] font-bold mb-3">
              By the Numbers
            </p>
            <h2 className="text-4xl md:text-6xl font-black">
              LVN を、
              <span className="text-[#FF5A5A]">数字</span>
              で。
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {[
              { num: "2", suffix: "種", label: "公認指導者資格", color: "#FF5A5A", shadowA: "#FFD647", shadowB: "#FF4FB0" },
              { num: "6", suffix: "つ", label: "実践活動領域", color: "#2D8BFF", shadowA: "#4FC04F", shadowB: "#9B5BFF" },
              { num: "5", suffix: "職種", label: "連携専門領域", color: "#FFD647", shadowA: "#FF5A5A", shadowB: "#2D8BFF" },
            ].map((s, i) => (
              <div
                key={s.num}
                className="relative bg-white border-2 border-black rounded-3xl p-8 md:p-12 shadow-[5px_5px_0_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all overflow-hidden animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="text-center font-black leading-none mb-4"
                  style={{
                    fontSize: "clamp(7rem, 16vw, 14rem)",
                    color: s.color,
                    textShadow: `4px 4px 0 ${s.shadowA}, 8px 8px 0 ${s.shadowB}`,
                  }}
                >
                  {s.num}
                  <span className="text-3xl md:text-5xl ml-2">{s.suffix}</span>
                </div>
                <p className="text-center text-sm md:text-base font-black text-[color:var(--color-text-muted)] tracking-wider">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 6 活動 — 横スクロール */}
      {/* ============================================ */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-6 mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-[color:var(--color-lvn-purple)] font-bold mb-3">
                Our Activities
              </p>
              <h2 className="inline-block relative text-4xl md:text-6xl font-black">
                6 つの活動
                <SquiggleUnderline color="#FFD647" className="absolute -bottom-3 left-0" />
              </h2>
            </div>
            <p className="text-sm md:text-base text-[color:var(--color-text-muted)] max-w-md leading-relaxed">
              レクリエーションを軸に、多職種が連携して取り組む 6 つの活動。
              <span className="hidden md:inline">→ 横スワイプ</span>
            </p>
          </div>
        </div>

        <div className="overflow-x-auto pb-8 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-5 md:gap-7 px-4 md:px-6 w-max">
            {activities.map((activity, i) => (
              <Link
                key={activity.slug}
                href={`/activities/${activity.slug}/`}
                className="group relative shrink-0 w-[280px] md:w-[340px] p-7 md:p-8 rounded-[2rem] bg-white border-2 border-black shadow-[5px_5px_0_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all overflow-hidden snap-center animate-fade-up"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-15 group-hover:opacity-30 group-hover:scale-125 transition-all duration-500"
                  style={{ background: activity.hex }}
                />
                <div
                  className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-5 text-white border-2 border-black group-hover:rotate-[-6deg] transition-transform"
                  style={{ background: activity.hex }}
                >
                  <ActivityIcon slug={activity.slug} className="w-10 h-10" />
                </div>
                <h3 className="relative text-xl md:text-2xl font-black mb-2">{activity.name}</h3>
                <p className="relative text-sm text-[color:var(--color-text-muted)] leading-relaxed mb-5">
                  {activity.tagline}
                </p>
                <span
                  className="relative inline-flex items-center gap-1 text-sm font-black"
                  style={{ color: activity.hex }}
                >
                  詳しく見る <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 資格 CTA 大バナー */}
      {/* ============================================ */}
      <section className="relative px-4 md:px-6 py-20 md:py-28 bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto relative rounded-[2.5rem] bg-gradient-to-br from-[#FF5A5A] via-[#FF4FB0] to-[#9B5BFF] animate-gradient bg-[length:200%_200%] p-10 md:p-16 text-white text-center shadow-2xl overflow-hidden border-2 border-black">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-2xl animate-float" />
          <div
            className="absolute -bottom-24 -left-16 w-80 h-80 rounded-full bg-[#FFD647]/30 blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />

          <div className="relative">
            <UspBadge variant="filled" className="mb-6" />
            <h2 className="text-4xl md:text-7xl font-black mb-5 leading-[0.95]">
              この資格、
              <br />
              <span className="inline-block bg-gradient-to-r from-white to-[#FFD647] bg-clip-text text-transparent">
                LVN でしか取れません。
              </span>
            </h2>
            <p className="text-sm md:text-lg mb-10 opacity-95 max-w-xl mx-auto leading-relaxed">
              レクリエーションインストラクター / スポーツ・レクリエーション指導者。
              <br className="hidden md:block" />
              日本で唯一、両資格の取得課程を持つ民間団体です。
            </p>
            <Link
              href="/qualification/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#FF5A5A] font-black shadow-xl hover:scale-105 transition-all border-2 border-black"
            >
              資格について詳しく見る <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 理念 */}
      {/* ============================================ */}
      <section className="relative px-4 md:px-6 py-20 md:py-28 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative">
          <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-[color:var(--color-lvn-blue)] font-bold mb-3">
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
            className="inline-flex items-center gap-2 mt-10 px-6 py-3 rounded-full bg-black text-white font-bold hover:scale-105 transition-all"
          >
            団体について詳しく <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

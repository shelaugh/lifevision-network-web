import Image from "next/image";
import Link from "next/link";
import { lvnInfo } from "@/data/lvn-info";
import { ArrowUpRight } from "lucide-react";

export const metadata = { title: "Preview B (Natural): セージ × フォレスト | LVN" };

const PALETTE = {
  bg: "#F4F1EA",
  text: "#1F2A20",
  accent: "#3D9B7A",
  dark: "#15211A",
  muted: "#5A6B5F",
  border: "rgba(31, 42, 32, 0.12)",
};

const stats = [
  { num: "01", title: "唯一の民間団体", desc: "日本で 2 資格課程を運営する、唯一の団体。" },
  { num: "02", title: "月 1 回の講習会", desc: "両資格どちらの単位としても認定。" },
  { num: "03", title: "5 つの職種", desc: "医療・福祉・保育・介護・スポーツが連携。" },
  { num: "04", title: "6 つの実践活動", desc: "取得後すぐに、現場でデビューできる。" },
];

const principles = [
  "心は、医療になる",
  "違いは、力になる",
  "現場が、教科書になる",
  "仲間が、教師になる",
];

export default function PreviewBWarm() {
  return (
    <div style={{ background: PALETTE.bg, color: PALETTE.text }}>
      <div className="px-4 py-2 text-center text-xs font-bold flex flex-wrap items-center justify-center gap-3" style={{ background: PALETTE.dark, color: PALETTE.bg }}>
        <span className="px-2 py-0.5 rounded font-black" style={{ background: PALETTE.accent, color: PALETTE.dark }}>NATURAL</span>
        オフホワイト × 深緑 × エメラルド
        <Link href="/preview-b-natural/" className="underline">→ Natural</Link>
        <Link href="/preview-b-bloom/" className="underline">→ Bloom</Link>
        <Link href="/preview-b/" className="underline">→ 旧B</Link>
      </div>

      {/* HERO */}
      <section className="relative min-h-[100vh] flex flex-col">
        <div className="flex items-center justify-between px-6 md:px-12 py-6 md:py-8" style={{ borderBottom: `1px solid ${PALETTE.border}` }}>
          <p className="text-xs font-mono tracking-widest uppercase">
            ESTABLISHED 2024 ／ 一般社団法人 Life Vision NetWork
          </p>
          <p className="text-xs font-mono tracking-widest uppercase hidden md:block">LVN / 001</p>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]">
          <div className="px-6 md:px-12 py-12 md:py-20 flex flex-col justify-center relative">
            <p className="text-xs md:text-sm font-mono tracking-widest uppercase mb-8 md:mb-12" style={{ color: PALETTE.muted }}>
              [ Mission ─ 001 ]
            </p>
            <h1 className="font-black leading-[0.85] tracking-tighter">
              <span className="block text-[20vw] md:text-[14vw] lg:text-[10vw]">心を、</span>
              <span className="block text-[20vw] md:text-[14vw] lg:text-[10vw] -mt-2">医療に。</span>
            </h1>
            <p className="mt-10 md:mt-16 text-sm md:text-base max-w-md leading-relaxed font-medium">
              「楽しい」は、最も民主的な医療。
              <br />
              日本で唯一、レクリエーション 2 資格課程を運営する団体として、私たちは社会のすき間を埋める専門職を育てます。
            </p>
            <div className="mt-10 md:mt-14 flex items-center gap-4">
              <Link href="/qualification/" className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold group transition-colors" style={{ background: PALETTE.dark, color: PALETTE.bg }}>
                資格を取得する
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </Link>
              <Link href="/about/" className="text-sm font-bold underline-offset-4 hover:underline">団体について →</Link>
            </div>
          </div>
          <div className="relative hidden lg:block overflow-hidden" style={{ background: PALETTE.dark }}>
            <Image
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1600&q=85&auto=format&fit=crop&sat=-60"
              alt="" fill priority sizes="50vw"
              className="object-cover opacity-70"
              style={{ filter: "hue-rotate(-10deg) saturate(0.7)" }}
            />
            <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 0%, rgba(21,33,26,0.4) 100%)` }} />
            <div className="absolute bottom-8 right-8 font-mono text-[10px] tracking-widest opacity-80" style={{ color: PALETTE.bg }}>IMG / 001</div>
          </div>
        </div>

        <div className="px-6 md:px-12 py-4 md:py-5 flex items-center justify-between text-[10px] md:text-xs font-mono tracking-widest uppercase" style={{ borderTop: `1px solid ${PALETTE.border}` }}>
          <p>↓ Scroll</p>
          <p className="hidden md:block">日本で唯一の民間団体</p>
          <p>Move · Connect · Smile.</p>
        </div>
      </section>

      {/* ONLY ONE STATEMENT */}
      <section className="relative px-6 md:px-12 py-24 md:py-40 overflow-hidden">
        <p aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black leading-none select-none pointer-events-none whitespace-nowrap" style={{ fontSize: "clamp(14rem, 30vw, 28rem)", color: "rgba(31, 42, 32, 0.05)" }}>
          ONLY ONE
        </p>
        <div className="relative max-w-5xl mx-auto">
          <p className="text-xs md:text-sm font-mono tracking-widest uppercase mb-6" style={{ color: PALETTE.muted }}>[ Statement ─ 002 ]</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] max-w-4xl">
            日本で唯一、
            <br />両資格を取れる団体。
          </h2>
          <p className="mt-8 md:mt-10 text-base md:text-lg max-w-2xl leading-relaxed">
            {lvnInfo.authority.description}
          </p>
        </div>
      </section>

      {/* 4 STATS BLACK BAR */}
      <section className="px-6 md:px-12 py-20 md:py-28" style={{ background: PALETTE.dark, color: PALETTE.bg }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0" style={{ borderLeft: `1px solid rgba(244,241,234,0.2)` }}>
            {stats.map((s) => (
              <div key={s.num} className="px-5 md:px-7 py-6 md:py-8 group transition-colors hover:bg-white/5" style={{ borderRight: `1px solid rgba(244,241,234,0.2)` }}>
                <p className="text-xs font-mono tracking-widest mb-6" style={{ color: PALETTE.accent }}>{s.num}</p>
                <p className="font-black text-2xl md:text-3xl leading-tight mb-3">{s.title}</p>
                <p className="text-xs md:text-sm opacity-60 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 PRINCIPLES */}
      <section className="px-6 md:px-12 py-24 md:py-40">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
            <div>
              <p className="text-xs md:text-sm font-mono tracking-widest uppercase mb-4" style={{ color: PALETTE.muted }}>[ Principles ─ 003 ]</p>
              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                私たちの、<br />4 つの信念。
              </h2>
            </div>
            <p className="text-sm md:text-base max-w-md leading-relaxed" style={{ color: PALETTE.muted }}>
              レクリエーションは、社会のすき間を埋める「もう一つの医療」。私たちはそのプロを育てます。
            </p>
          </div>
          <ul className="divide-y-2" style={{ borderColor: PALETTE.text }}>
            {principles.map((p, i) => (
              <li key={p} className="group py-8 md:py-12 grid grid-cols-[60px_1fr_auto] md:grid-cols-[120px_1fr_auto] items-center gap-4" style={{ borderTopWidth: i === 0 ? "2px" : 0, borderTopColor: PALETTE.text }}>
                <span className="text-xs md:text-sm font-mono tracking-widest" style={{ color: PALETTE.muted }}>{String(i + 1).padStart(2, "0")}</span>
                <span className="text-4xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight transition-transform group-hover:translate-x-2">{p}。</span>
                <ArrowUpRight className="w-6 h-6 md:w-10 md:h-10 opacity-30 group-hover:opacity-100 group-hover:rotate-45 transition-all" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FULL-BLEED IMG */}
      <section className="relative h-[80vh] min-h-[500px] overflow-hidden" style={{ background: PALETTE.dark }}>
        <Image
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=2400&q=85&auto=format&fit=crop&sat=-60"
          alt="" fill sizes="100vw"
          className="object-cover opacity-70"
          style={{ filter: "hue-rotate(-10deg) saturate(0.7)" }}
        />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to right, rgba(21,33,26,0.6) 0%, transparent 60%)` }} />
        <div className="absolute inset-0 flex items-center px-6 md:px-12">
          <div>
            <p className="text-xs md:text-sm font-mono tracking-widest uppercase mb-6" style={{ color: PALETTE.accent }}>[ The Field ─ 004 ]</p>
            <p className="text-4xl md:text-7xl lg:text-8xl font-black leading-[1.05] max-w-3xl" style={{ color: PALETTE.bg }}>
              現場が、<br />教科書になる。
            </p>
          </div>
        </div>
        <div className="absolute bottom-6 right-6 font-mono text-[10px] md:text-xs tracking-widest opacity-70" style={{ color: PALETTE.bg }}>IMG / 002 · Recreation Studio</div>
      </section>

      {/* MONTHLY (Accent bg) */}
      <section className="relative px-6 md:px-12 py-24 md:py-40 overflow-hidden" style={{ background: PALETTE.accent, color: PALETTE.dark }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-xs md:text-sm font-mono tracking-widest uppercase mb-6 font-black">[ Monthly Session ─ 005 ]</p>
            <p className="font-black leading-[0.85] tracking-tighter" style={{ fontSize: "clamp(8rem, 20vw, 18rem)" }}>月1。</p>
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">2 つの資格、<br />どちらでも、<br />ひとつのドアから。</h2>
            <p className="text-base md:text-lg leading-relaxed mb-8">
              月 1 回の講習会で、両資格のどちらかの単位として認定。1 つの参加が、あなたの選んだ未来をつくります。
            </p>
            <Link href="/schedule/" className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold group transition-colors" style={{ background: PALETTE.dark, color: PALETTE.accent }}>
              スケジュールを見る
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* JOIN US */}
      <section className="px-6 md:px-12 py-24 md:py-40" style={{ borderTop: `2px solid ${PALETTE.text}` }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs md:text-sm font-mono tracking-widest uppercase mb-6" style={{ color: PALETTE.muted }}>[ Join Us ─ 006 ]</p>
          <h2 className="font-black leading-[0.85] tracking-tighter mb-10 md:mb-14">
            <span className="block text-[18vw] md:text-[12vw]">仲間、</span>
            <span className="block text-[18vw] md:text-[12vw] -mt-2">募集中。</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-end">
            <p className="text-base md:text-lg leading-relaxed max-w-2xl">
              実践者、講師、運営、ボランティア。あなたの関わり方で、社会のすき間を埋めましょう。
            </p>
            <Link href="/contact/" className="inline-flex items-center gap-2 px-7 py-4 text-sm font-bold whitespace-nowrap group transition-colors" style={{ background: PALETTE.dark, color: PALETTE.bg }}>
              問い合わせる
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 md:px-12 py-24 md:py-32" style={{ background: PALETTE.dark, color: PALETTE.bg }}>
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs md:text-sm font-mono tracking-widest uppercase mb-6 opacity-50">[ Begin ─ 007 ]</p>
          <h2 className="text-5xl md:text-8xl font-black leading-[0.9] mb-10">
            あなたが、<br />
            <span style={{ color: PALETTE.accent }}>指導者になる日。</span>
          </h2>
          <div className="inline-flex items-center gap-4">
            <Link href="/qualification/" className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold group transition-colors" style={{ background: PALETTE.accent, color: PALETTE.dark }}>
              資格を取得する
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </Link>
            <Link href="/contact/" className="text-sm font-bold opacity-80 hover:opacity-100">無料相談 →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

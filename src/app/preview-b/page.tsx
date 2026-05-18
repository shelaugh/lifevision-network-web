import Image from "next/image";
import Link from "next/link";
import { lvnInfo } from "@/data/lvn-info";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Preview B: スタイリッシュ最先端版 | LVN",
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

export default function PreviewB() {
  return (
    <div className="bg-white text-black">
      {/* ===== バナー ===== */}
      <div className="bg-black text-white px-4 py-2 text-center text-xs font-bold flex items-center justify-center gap-3">
        <span className="bg-[#FFD647] text-black px-2 py-0.5 rounded font-black">PATTERN B</span>
        スタイリッシュ最先端: モノクロ × 1 アクセント × 超大型タイポ × 厳選画像
        <Link href="/preview-a/" className="underline">→ A を見る</Link>
      </div>

      {/* ===== HERO: モノクロ写真 + 超大型タイポ ===== */}
      <section className="relative min-h-[100vh] flex flex-col">
        {/* 上部 — メタ情報 */}
        <div className="flex items-center justify-between px-6 md:px-12 py-6 md:py-8 border-b border-black/10">
          <p className="text-xs font-mono tracking-widest uppercase">
            ESTABLISHED 2024 ／ 一般社団法人 Life Vision NetWork
          </p>
          <p className="text-xs font-mono tracking-widest uppercase hidden md:block">
            LVN / 001
          </p>
        </div>

        {/* メインタイポ */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]">
          <div className="px-6 md:px-12 py-12 md:py-20 flex flex-col justify-center relative">
            <p className="text-xs md:text-sm font-mono tracking-widest uppercase text-black/50 mb-8 md:mb-12">
              [ Mission ─ 001 ]
            </p>
            <h1 className="font-black leading-[0.85] tracking-tighter">
              <span className="block text-[20vw] md:text-[14vw] lg:text-[10vw]">
                心を、
              </span>
              <span className="block text-[20vw] md:text-[14vw] lg:text-[10vw] -mt-2">
                医療に。
              </span>
            </h1>
            <p className="mt-10 md:mt-16 text-sm md:text-base max-w-md leading-relaxed font-medium">
              「楽しい」は、最も民主的な医療。
              <br />
              日本で唯一、レクリエーション 2 資格課程を運営する団体として、私たちは社会のすき間を埋める専門職を育てます。
            </p>
            <div className="mt-10 md:mt-14 flex items-center gap-4">
              <Link
                href="/qualification/"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-black text-white text-sm font-bold rounded-none hover:bg-[#FFD647] hover:text-black transition-colors group"
              >
                資格を取得する
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </Link>
              <Link href="/about/" className="text-sm font-bold underline-offset-4 hover:underline">
                団体について →
              </Link>
            </div>
          </div>
          <div className="relative bg-black hidden lg:block overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1600&q=85&auto=format&fit=crop&sat=-100"
              alt=""
              fill
              priority
              sizes="50vw"
              className="object-cover opacity-60 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40" />
            <div className="absolute bottom-8 right-8 text-white font-mono text-[10px] tracking-widest opacity-80">
              IMG / 001
            </div>
          </div>
        </div>

        {/* 下部 — 横スクロールラベル風 */}
        <div className="border-t border-black/10 px-6 md:px-12 py-4 md:py-5 flex items-center justify-between text-[10px] md:text-xs font-mono tracking-widest uppercase">
          <p>↓ Scroll</p>
          <p className="hidden md:block">日本で唯一の民間団体</p>
          <p>Move · Connect · Smile.</p>
        </div>
      </section>

      {/* ===== 透過バックタイポ + ステートメント ===== */}
      <section className="relative bg-white px-6 md:px-12 py-24 md:py-40 overflow-hidden">
        <p
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black leading-none text-black/[0.04] select-none pointer-events-none whitespace-nowrap"
          style={{ fontSize: "clamp(14rem, 30vw, 28rem)" }}
        >
          ONLY ONE
        </p>

        <div className="relative max-w-5xl mx-auto">
          <p className="text-xs md:text-sm font-mono tracking-widest uppercase text-black/50 mb-6">
            [ Statement ─ 002 ]
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] max-w-4xl">
            日本で唯一、
            <br />
            両資格を取れる団体。
          </h2>
          <p className="mt-8 md:mt-10 text-base md:text-lg max-w-2xl leading-relaxed">
            {lvnInfo.authority.description}
          </p>
        </div>
      </section>

      {/* ===== 4 数字 — 横一列・ミニマル ===== */}
      <section className="bg-black text-white px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-l border-white/20">
            {stats.map((s) => (
              <div key={s.num} className="border-r border-white/20 px-5 md:px-7 py-6 md:py-8 hover:bg-white/5 transition-colors group">
                <p className="text-xs font-mono tracking-widest text-[#FFD647] mb-6">{s.num}</p>
                <p className="font-black text-2xl md:text-3xl leading-tight mb-3">
                  {s.title}
                </p>
                <p className="text-xs md:text-sm text-white/60 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4 原則 — 縦並び大型タイポ ===== */}
      <section className="bg-white px-6 md:px-12 py-24 md:py-40">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
            <div>
              <p className="text-xs md:text-sm font-mono tracking-widest uppercase text-black/50 mb-4">
                [ Principles ─ 003 ]
              </p>
              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                私たちの、
                <br />
                4 つの信念。
              </h2>
            </div>
            <p className="text-sm md:text-base max-w-md leading-relaxed text-black/70">
              レクリエーションは、社会のすき間を埋める「もう一つの医療」。私たちはそのプロを育てます。
            </p>
          </div>

          <ul className="divide-y-2 divide-black">
            {principles.map((p, i) => (
              <li key={p} className="group py-8 md:py-12 grid grid-cols-[60px_1fr_auto] md:grid-cols-[120px_1fr_auto] items-center gap-4">
                <span className="text-xs md:text-sm font-mono tracking-widest text-black/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-4xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight transition-transform group-hover:translate-x-2">
                  {p}。
                </span>
                <ArrowUpRight className="w-6 h-6 md:w-10 md:h-10 opacity-30 group-hover:opacity-100 group-hover:rotate-45 transition-all" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== モノクロ写真フルブリード + 縦書き ===== */}
      <section className="relative h-[80vh] min-h-[500px] overflow-hidden bg-black">
        <Image
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=2400&q=85&auto=format&fit=crop&sat=-100"
          alt=""
          fill
          sizes="100vw"
          className="object-cover grayscale opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center px-6 md:px-12">
          <div>
            <p className="text-xs md:text-sm font-mono tracking-widest uppercase text-[#FFD647] mb-6">
              [ The Field ─ 004 ]
            </p>
            <p className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] max-w-3xl">
              現場が、
              <br />
              教科書になる。
            </p>
          </div>
        </div>
        <div className="absolute bottom-6 right-6 text-white font-mono text-[10px] md:text-xs tracking-widest opacity-70">
          IMG / 002 · Recreation Studio
        </div>
      </section>

      {/* ===== 月1講習会 — タイポ重視 ===== */}
      <section className="relative bg-[#FFD647] px-6 md:px-12 py-24 md:py-40 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-xs md:text-sm font-mono tracking-widest uppercase mb-6 font-black">
              [ Monthly Session ─ 005 ]
            </p>
            <p
              className="font-black leading-[0.85] tracking-tighter"
              style={{ fontSize: "clamp(8rem, 20vw, 18rem)" }}
            >
              月1。
            </p>
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">
              2 つの資格、
              <br />
              どちらでも、
              <br />
              ひとつのドアから。
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-8">
              月 1 回の講習会で、両資格のどちらかの単位として認定。1 つの参加が、あなたの選んだ未来をつくります。
            </p>
            <Link
              href="/schedule/"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-black text-[#FFD647] text-sm font-bold hover:bg-white hover:text-black transition-colors group"
            >
              スケジュールを見る
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 仲間募集 ===== */}
      <section className="bg-white px-6 md:px-12 py-24 md:py-40 border-t-2 border-black">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs md:text-sm font-mono tracking-widest uppercase text-black/50 mb-6">
            [ Join Us ─ 006 ]
          </p>
          <h2 className="font-black leading-[0.85] tracking-tighter mb-10 md:mb-14">
            <span className="block text-[18vw] md:text-[12vw]">仲間、</span>
            <span className="block text-[18vw] md:text-[12vw] -mt-2">募集中。</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-end">
            <p className="text-base md:text-lg leading-relaxed max-w-2xl">
              実践者、講師、運営、ボランティア。あなたの関わり方で、社会のすき間を埋めましょう。
            </p>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-7 py-4 bg-black text-white text-sm font-bold hover:bg-[#FFD647] hover:text-black transition-colors whitespace-nowrap group"
            >
              問い合わせる
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 最終 CTA ===== */}
      <section className="bg-black text-white px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs md:text-sm font-mono tracking-widest uppercase text-white/50 mb-6">
            [ Begin ─ 007 ]
          </p>
          <h2 className="text-5xl md:text-8xl font-black leading-[0.9] mb-10">
            あなたが、
            <br />
            <span className="text-[#FFD647]">指導者になる日。</span>
          </h2>
          <div className="inline-flex items-center gap-4">
            <Link
              href="/qualification/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFD647] text-black text-base font-bold hover:bg-white transition-colors group"
            >
              資格を取得する
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </Link>
            <Link href="/contact/" className="text-sm font-bold text-white/80 hover:text-white">
              無料相談 →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Heart, Users2, Compass, Sparkles, Music, Leaf, Sun, HandHeart, Calendar, CheckCircle2, Award, Quote, MapPin } from "lucide-react";
import { lvnInfo } from "@/data/lvn-info";
import { activities } from "@/data/activities";

// Craft × POP マルチカラー (人生を豊かにする = レクリエーション)
// 主体: NPO 法人(申請中) ライフビジョンネット
// 4 pillar: 月1講習会・なごみカフェ・5団体活動・多職種連携
// 旧 6 活動 →「なごみカフェ」を独立軸 (なんでも福祉相談室) に昇格 + 残り 5 を「5 団体の活動」へ

// 6 活動と整合するポップパレット
const CORAL    = "#FF5A3D";  // hero accent (energetic tangerine)
const SUN      = "#FFC93C";  // sunny yellow
const LIME     = "#A4DC4F";  // recreation green
const SKY      = "#5DC9F2";  // sky blue
const PLUM     = "#E963A8";  // hot pink
const VIOLET   = "#9B5BFF";  // violet
const BG       = "#FFFAF0";  // warmer cream
const INK      = "#2A1F1A";  // warm dark brown
const PAPER    = "#FFFFFF";  // card白

export default function Home() {
  return (
    <div style={{ background: BG, color: INK }} className="font-sans">

      <header className="px-6 md:px-12 py-6 flex items-center justify-between max-w-[1400px] mx-auto relative z-10">
        <Link href="/" className="font-black text-lg tracking-tight inline-flex items-center gap-1.5">
          <span className="w-7 h-7 rounded-full inline-flex items-center justify-center" style={{ background: CORAL, color: BG }}>
            <Heart className="w-3.5 h-3.5 fill-current" />
          </span>
          LVN
        </Link>
        <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
          <Link href="/qualification/" className="px-4 py-2 rounded-full hover:bg-black/5 transition-colors">資格</Link>
          <Link href="/about/" className="px-4 py-2 rounded-full hover:bg-black/5 transition-colors">団体</Link>
          <Link href="/activities/" className="px-4 py-2 rounded-full hover:bg-black/5 transition-colors">活動</Link>
          <Link href="/contact/" className="ml-2 px-5 py-2.5 rounded-full font-bold text-xs inline-flex items-center gap-1.5 hover:scale-105 transition-transform" style={{ background: INK, color: BG }}>
            問い合わせ <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </nav>
      </header>

      {/* HERO — vivid blobs + 大型タイポ + マルチカラー手描き */}
      <section className="relative px-6 md:px-12 pt-10 md:pt-20 pb-24 md:pb-40 max-w-[1400px] mx-auto overflow-hidden">
        {/* floating blob decorations (6 活動色を使う) */}
        <motion.div animate={{ y: [0, -22, 0], rotate: [0, 6, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 right-[5%] w-52 h-52 md:w-80 md:h-80 rounded-full blur-2xl opacity-60 pointer-events-none" style={{ background: CORAL }} aria-hidden />
        <motion.div animate={{ y: [0, 30, 0], rotate: [0, -8, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-20 left-[-5%] w-56 h-56 md:w-96 md:h-96 rounded-full blur-3xl opacity-55 pointer-events-none" style={{ background: LIME }} aria-hidden />
        <motion.div animate={{ y: [0, -28, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-1/2 right-[25%] w-44 h-44 md:w-64 md:h-64 rounded-full blur-3xl opacity-50 pointer-events-none" style={{ background: SKY }} aria-hidden />
        <motion.div animate={{ y: [0, 18, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-32 left-[30%] w-36 h-36 md:w-52 md:h-52 rounded-full blur-3xl opacity-45 pointer-events-none" style={{ background: PLUM }} aria-hidden />
        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute bottom-1/3 right-[40%] w-32 h-32 md:w-44 md:h-44 rounded-full blur-3xl opacity-40 pointer-events-none" style={{ background: SUN }} aria-hidden />

        <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-10 md:gap-16 items-center">
          <div>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="inline-flex items-center gap-2 text-xs font-bold mb-8 px-4 py-2 rounded-full" style={{ background: PAPER, color: CORAL, boxShadow: "0 4px 14px rgba(0,0,0,0.06)" }}>
              <Sparkles className="w-3.5 h-3.5" />
              NPO 法人(申請中) ライフビジョンネット
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="font-black tracking-[-0.04em] leading-[0.95]" style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}>
              楽しいは、
              <br />
              <span className="relative inline-block">
                <span style={{ background: `linear-gradient(135deg, ${CORAL}, ${PLUM} 50%, ${VIOLET})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  最高の医療。
                </span>
                {/* マルチカラー手描き下線 */}
                <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden>
                  <path d="M2,8 Q50,2 100,7 T198,5" fill="none" stroke="url(#hero-underline-grad)" strokeWidth="4" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="hero-underline-grad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor={CORAL} />
                      <stop offset="50%" stopColor={SUN} />
                      <stop offset="100%" stopColor={LIME} />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.25 }} className="mt-10 md:mt-12 text-base md:text-lg leading-[1.85] max-w-lg opacity-80">
              月 1 のなんでも福祉相談室「なごみカフェ」と、<br />
              資格単位にもなる月 1 講習会、5 団体の活動で、<br />
              地域と多職種を、フラットにつなぐ。
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4 }} className="mt-10 md:mt-12 flex flex-wrap items-center gap-3">
              <Link href="#nagomi-cafe" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm hover:-translate-y-0.5 transition-all" style={{ background: CORAL, color: BG, boxShadow: "0 8px 24px rgba(255,90,61,0.4)" }}>
                なごみカフェに行く <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </Link>
              <Link href="/qualification/" className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm hover:-translate-y-0.5 transition-all" style={{ background: PAPER, color: INK, boxShadow: "0 4px 14px rgba(0,0,0,0.08)" }}>
                <span style={{ color: LIME }}>🎓</span> 月 1 講習会
              </Link>
            </motion.div>

            {/* 4 pillar ドット (4 軸プレビュー) */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }} className="mt-12 md:mt-16 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="text-[10px] font-mono tracking-widest uppercase opacity-50">4 軸 →</span>
              {[
                { c: CORAL,  l: "講習会" },
                { c: LIME,   l: "なごみカフェ" },
                { c: SKY,    l: "5 団体活動" },
                { c: VIOLET, l: "多職種連携" },
              ].map((p, i) => (
                <span key={p.l} className="inline-flex items-center gap-1.5">
                  <motion.span
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-2.5 h-2.5 rounded-full inline-block"
                    style={{ background: p.c, boxShadow: `0 2px 8px ${p.c}80` }}
                    aria-hidden
                  />
                  <span className="text-[10px] font-bold opacity-70">{p.l}</span>
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: hero composition */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative">
            <HeroComposition />
          </motion.div>
        </div>
      </section>

      {/* Stats — マルチカラー pill cards */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { num: "月1", lbl: "なごみカフェ + 講習会", color: CORAL },
            { num: "5", lbl: "団体の活動", color: SKY },
            { num: "5", lbl: "職種が連携", color: VIOLET },
            { num: "2", lbl: "資格の単位対応", color: SUN },
          ].map((s, i) => (
            <motion.div
              key={s.lbl}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8, rotate: i % 2 === 0 ? -2 : 2 }}
              className="rounded-[28px] p-6 md:p-8 text-center cursor-pointer relative overflow-hidden"
              style={{ background: s.color, boxShadow: `0 12px 32px ${s.color}50` }}
            >
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-30" style={{ background: BG }} />
              <div className="relative">
                <p className="font-black tracking-tighter leading-none" style={{ fontSize: "clamp(3rem, 6vw, 5rem)", color: INK }}>{s.num}</p>
                <p className="text-xs md:text-sm font-bold mt-3" style={{ color: INK }}>{s.lbl}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================
           4 PILLAR OVERVIEW — 4 軸を縦長スクロールの最初に見せる
         ========================================================= */}
      <section className="px-6 md:px-12 py-20 md:py-32 max-w-[1400px] mx-auto">
        <div className="text-center mb-14 md:mb-20 max-w-2xl mx-auto">
          <p className="inline-flex items-center gap-2 text-xs font-bold mb-5 px-4 py-2 rounded-full" style={{ background: `${VIOLET}15`, color: VIOLET }}>
            <Compass className="w-3.5 h-3.5" /> 4 Pillars
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95]">
            4 つの軸で、<br />
            <span style={{ background: `linear-gradient(135deg, ${CORAL}, ${VIOLET})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>地域を支える。</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {lvnInfo.pillars.map((p, i) => {
            const colors = [CORAL, LIME, SKY, VIOLET];
            const icons = [Award, HandHeart, Users2, Compass];
            const c = colors[i];
            const Icon = icons[i];
            return (
              <motion.div
                key={p.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-[28px] p-7 bg-white relative overflow-hidden h-full"
                style={{ boxShadow: `0 10px 30px ${c}30` }}
              >
                <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-50" style={{ background: c }} />
                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <span className="w-12 h-12 rounded-2xl inline-flex items-center justify-center" style={{ background: c, color: "#FFFFFF" }}>
                      <Icon className="w-6 h-6" strokeWidth={2.4} />
                    </span>
                    <span className="text-[10px] font-mono opacity-30">0{i + 1}</span>
                  </div>
                  <p className="font-black text-xl leading-tight mb-1">{p.label}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: c }}>{p.tag}</p>
                  <p className="text-xs leading-relaxed opacity-70">{p.short}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* =========================================================
           なごみカフェ SPOTLIGHT — メイン事業の 1 つ
         ========================================================= */}
      <section id="nagomi-cafe" className="px-6 md:px-12 py-20 md:py-32 max-w-[1400px] mx-auto scroll-mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="rounded-[36px] md:rounded-[48px] p-8 md:p-16 relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${LIME} 0%, #C8EE7E 100%)` }}
        >
          <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full opacity-40 blur-2xl" style={{ background: SUN }} />
          <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full opacity-50 blur-2xl" style={{ background: SKY }} />
          <div className="absolute top-1/2 right-[10%] w-40 h-40 rounded-full opacity-30 blur-3xl" style={{ background: BG }} />

          <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-bold mb-6 px-4 py-2 rounded-full bg-white" style={{ color: "#3F7A1F" }}>
                <Heart className="w-3.5 h-3.5 fill-current" /> Pillar 02 · なんでも福祉相談室
              </p>
              <h2 className="font-black tracking-[-0.03em] leading-[0.95] mb-6" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", color: INK }}>
                なごみカフェ。<br />
                <span style={{ color: "#1F4A0E" }}>誰でも来れる、相談できる。</span>
              </h2>
              <p className="text-base md:text-lg leading-[1.85] mb-8 max-w-xl" style={{ color: INK, opacity: 0.85 }}>
                {lvnInfo.nagomiCafe.description}
              </p>
              <div className="flex flex-wrap items-center gap-2 mb-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-white" style={{ color: INK }}>
                  <Calendar className="w-3.5 h-3.5" style={{ color: CORAL }} /> 月 1 回・講習会と同日午前
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-white" style={{ color: INK }}>
                  <Users2 className="w-3.5 h-3.5" style={{ color: SKY }} /> 当事者・家族・専門職フラット
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-white" style={{ color: INK }}>
                  <Sparkles className="w-3.5 h-3.5" style={{ color: VIOLET }} /> 参加無料
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/nagomi-cafe/" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm hover:scale-105 transition-transform" style={{ background: INK, color: BG, boxShadow: "0 12px 30px rgba(42,31,26,0.4)" }}>
                  なごみカフェ詳細 <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </Link>
                <Link href="/contact/" className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm bg-white hover:scale-105 transition-transform" style={{ color: INK, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}>
                  問い合わせる
                </Link>
              </div>
            </div>

            {/* Right: nagomi-cafe schedule preview card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: -3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -1.5 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.3 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              className="bg-white rounded-3xl p-6 md:p-7 relative"
              style={{ boxShadow: "0 30px 70px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.8)" }}
            >
              <div className="flex items-center justify-between mb-5">
                <p className="text-[10px] font-mono uppercase tracking-widest opacity-50" style={{ color: INK }}>Same Day Schedule</p>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold" style={{ background: `${LIME}30`, color: "#3F7A1F" }}>2026.06.15 sat</span>
              </div>
              {[
                { time: "10:00 — 12:00", label: "なごみカフェ", sub: "なんでも福祉相談室", c: LIME, icon: HandHeart, tag: "誰でも参加 OK" },
                { time: "13:30 — 16:30", label: "月 1 講習会", sub: "2 資格の単位認定", c: CORAL, icon: Award, tag: "受講者向け" },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-2xl mb-2" style={{ background: i === 0 ? `${LIME}15` : `${CORAL}10` }}>
                    <span className="w-10 h-10 rounded-xl inline-flex items-center justify-center shrink-0" style={{ background: s.c, color: "#FFFFFF" }}>
                      <Icon className="w-5 h-5" strokeWidth={2.4} />
                    </span>
                    <div className="flex-1">
                      <p className="text-[10px] font-mono opacity-60" style={{ color: INK }}>{s.time}</p>
                      <p className="font-black text-sm leading-tight" style={{ color: INK }}>{s.label}</p>
                      <p className="text-[11px] opacity-60" style={{ color: INK }}>{s.sub}</p>
                    </div>
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap" style={{ background: "#FFFFFF", color: s.c }}>
                      {s.tag}
                    </span>
                  </div>
                );
              })}
              <p className="text-[10px] font-medium mt-3 leading-relaxed opacity-50" style={{ color: INK }}>
                同日開催なので、午前はなごみカフェに、午後は講習会に — の両方参加もできます。
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Principles — 4 vivid tiles */}
      <section className="px-6 md:px-12 py-20 md:py-32 max-w-[1400px] mx-auto">
        <div className="text-center mb-14 md:mb-20 max-w-2xl mx-auto">
          <p className="inline-flex items-center gap-2 text-xs font-bold mb-5 px-4 py-2 rounded-full" style={{ background: `${CORAL}15`, color: CORAL }}>
            <Sparkles className="w-3.5 h-3.5" /> Our Principles
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95]">
            4 つの信念で、<br />
            <span style={{ background: `linear-gradient(135deg, ${CORAL}, ${PLUM})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>毎日を彩る。</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
          {[
            { icon: Heart,    t: "心は、医療になる",    d: "楽しさは、薬の届かない場所に届く。", bg: CORAL },
            { icon: Users2,   t: "違いは、力になる",    d: "5 つの職種が交わるとき、新しい支援が生まれる。", bg: SKY },
            { icon: Compass,  t: "現場が、教科書になる", d: "知識ではなく、実感が指導者を育てる。", bg: LIME },
            { icon: Sparkles, t: "仲間が、教師になる",  d: "ともに学ぶ関係が、力をつくる。", bg: PLUM },
          ].map(({ icon: Icon, t, d, bg }, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -4, rotate: i % 2 === 0 ? -0.5 : 0.5 }}
              className="rounded-[32px] p-7 md:p-10 cursor-pointer relative overflow-hidden"
              style={{ background: bg, boxShadow: `0 16px 40px ${bg}40` }}
            >
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-30" style={{ background: BG }} />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: BG, color: INK }}>
                  <Icon className="w-7 h-7" />
                </div>
                <p className="font-black text-2xl md:text-3xl leading-tight mb-3" style={{ color: INK }}>{t}。</p>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: INK, opacity: 0.75 }}>{d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Activities — 既存 vivid 色 + tilt + shadow */}
      <section className="px-6 md:px-12 py-20 md:py-32 max-w-[1400px] mx-auto">
        <div className="text-center mb-14 md:mb-20 max-w-2xl mx-auto">
          <p className="inline-flex items-center gap-2 text-xs font-bold mb-5 px-4 py-2 rounded-full" style={{ background: `${LIME}25`, color: INK }}>
            🌈 Pillar 03 · 5 団体の活動
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95]">
            5 つの団体が、<br />
            <span style={{ background: `linear-gradient(135deg, ${SKY}, ${LIME})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>地域のすき間を埋める。</span>
          </h2>
          <p className="mt-6 text-base md:text-lg opacity-70 leading-relaxed">
            それぞれの現場で、それぞれのレクリエーションを。
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
          {activities.map((a, i) => (
            <motion.div
              key={a.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -8, rotate: i % 2 === 0 ? -1 : 1 }}
            >
              <Link href={`/activities/${a.slug}/`} className="block rounded-[28px] p-7 md:p-9 relative overflow-hidden h-full group transition-all" style={{ background: PAPER, boxShadow: `0 8px 28px ${a.hex}30` }}>
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-90" style={{ background: a.hex }} />
                <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full opacity-30 blur-xl" style={{ background: a.hex }} />
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl mb-6" style={{ background: a.hex, boxShadow: `0 6px 16px ${a.hex}60` }} />
                  <p className="font-black text-xl md:text-2xl leading-tight">{a.name}</p>
                  <p className="text-sm mt-2 leading-relaxed opacity-70">{a.tagline}</p>
                  <ArrowUpRight className="w-5 h-5 absolute -top-1 right-0 opacity-40 group-hover:opacity-100 group-hover:rotate-45 transition-all" style={{ color: INK }} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================
           多職種連携 SECTION (Pillar 04) — 5 職種が交わる場
         ========================================================= */}
      <section className="px-6 md:px-12 py-20 md:py-32 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 md:gap-16 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold mb-5 px-4 py-2 rounded-full" style={{ background: `${VIOLET}15`, color: VIOLET }}>
              <Users2 className="w-3.5 h-3.5" /> Pillar 04 · 多職種連携
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95] mb-6">
              5 つの職種が、<br />
              <span style={{ background: `linear-gradient(135deg, ${VIOLET}, ${PLUM})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>ひとつの場で交わる。</span>
            </h2>
            <p className="text-base md:text-lg leading-[1.85] mb-6 opacity-80">
              医療・福祉・保育・介護・スポーツ。<br />
              専門が違うからこそ、新しい支援が生まれる。<br />
              なごみカフェも、月 1 講習会も、5 団体活動も — すべて 5 職種が交わる場として設計しています。
            </p>
            <div className="flex flex-wrap gap-2">
              {lvnInfo.professions.map((p) => (
                <span key={p.key} className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold bg-white" style={{ color: INK, boxShadow: `0 4px 12px ${p.color}30` }}>
                  <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: p.color, boxShadow: `0 0 6px ${p.color}80` }} />
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: 5 profession orbit visualization */}
          <div className="relative aspect-square max-w-md mx-auto w-full">
            {/* central core */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full flex items-center justify-center z-20"
              style={{ background: `linear-gradient(135deg, ${VIOLET}, ${PLUM})`, boxShadow: `0 20px 50px ${VIOLET}50` }}
            >
              <div className="text-center text-white">
                <p className="text-[9px] font-mono uppercase opacity-80">Core</p>
                <p className="font-black text-sm leading-tight">連携の<br />場</p>
              </div>
            </motion.div>
            {/* orbit ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full border-2 border-dashed opacity-30" style={{ borderColor: INK }} aria-hidden />
            {/* 5 profession nodes */}
            {lvnInfo.professions.map((p, i) => {
              const angle = (i / 5) * 360 - 90;
              const rad = (angle * Math.PI) / 180;
              const radius = 42; // %
              const left = `${50 + radius * Math.cos(rad)}%`;
              const top = `${50 + radius * Math.sin(rad)}%`;
              return (
                <motion.div
                  key={p.key}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                  whileHover={{ scale: 1.15 }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                  style={{ left, top }}
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full flex flex-col items-center justify-center text-white font-black"
                    style={{ background: p.color, boxShadow: `0 12px 30px ${p.color}50` }}
                  >
                    <span className="text-xl">{p.label}</span>
                  </motion.div>
                </motion.div>
              );
            })}
            {/* connecting lines from core to each profession */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" aria-hidden>
              {lvnInfo.professions.map((p, i) => {
                const angle = (i / 5) * 360 - 90;
                const rad = (angle * Math.PI) / 180;
                const x = 50 + 42 * Math.cos(rad);
                const y = 50 + 42 * Math.sin(rad);
                return (
                  <motion.line
                    key={p.key}
                    x1="50" y1="50"
                    x2={x} y2={y}
                    stroke={p.color}
                    strokeWidth="0.3"
                    strokeDasharray="1 1"
                    opacity="0.4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 + i * 0.1 }}
                  />
                );
              })}
            </svg>
          </div>
        </div>
      </section>

      {/* CTA — マルチカラーグラデ */}
      <section className="px-6 md:px-12 py-20 md:py-32 max-w-[1400px] mx-auto">
        <div className="rounded-[36px] md:rounded-[48px] p-10 md:p-20 text-center relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${SUN}, ${CORAL} 50%, ${PLUM})` }}>
          <div className="absolute -left-20 top-10 w-72 h-72 rounded-full opacity-40 blur-2xl" style={{ background: VIOLET }} />
          <div className="absolute -right-10 bottom-0 w-80 h-80 rounded-full opacity-50 blur-2xl" style={{ background: LIME }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-30 blur-3xl" style={{ background: SKY }} />
          <div className="relative">
            <p className="inline-flex items-center gap-2 text-xs font-bold mb-6 px-4 py-2 rounded-full bg-white/90" style={{ color: INK }}>
              <Heart className="w-3.5 h-3.5 fill-current" style={{ color: CORAL }} /> Join the Community
            </p>
            <h2 className="font-black tracking-[-0.03em] leading-[0.95] mb-8" style={{ fontSize: "clamp(3rem, 9vw, 8rem)", color: INK }}>
              次の月 1 で、<br />
              <span className="relative inline-block">
                会いましょう。
                <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden>
                  <path d="M2,9 Q50,3 100,8 T198,6" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" opacity="0.5" />
                </svg>
              </span>
            </h2>
            <p className="text-base md:text-lg opacity-80 max-w-xl mx-auto mb-10 leading-relaxed" style={{ color: INK }}>
              なごみカフェに、月 1 講習会に、5 団体の活動に。<br />
              関わり方は、あなたが選んで。
            </p>
            <div className="inline-flex flex-wrap items-center gap-3 justify-center">
              <Link href="/contact/" className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm hover:scale-105 transition-transform" style={{ background: INK, color: BG, boxShadow: "0 12px 30px rgba(42,31,26,0.4)" }}>
                問い合わせる <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </Link>
              <Link href="/qualification/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-white hover:scale-105 transition-transform" style={{ color: INK }}>
                月 1 講習会
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-12 py-10 max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-4 text-xs opacity-50">
        <p>© 2026 {lvnInfo.legalNameWithStatus}</p>
        <p className="font-mono">Preview Craft × Pop · 4 Pillars</p>
      </footer>
    </div>
  );
}

// =============================================================================
// HERO COMPOSITION
// プロダクトデザイン級の凝った hero composition
// Layer 1: 多層グラデメッシュ + 微細グリッド + decorative shapes
// Layer 2: 中央 product UI card (今月の講習会 schedule)
// Layer 3: 5 種類の異なる floating chip (stat / avatar / quote / badge / activity)
// Layer 4: glowing 接続線 + animated particles
// 3D perspective tilt + glassmorphism + 多時間軸 parallax
// =============================================================================
function HeroComposition() {
  const CORAL = "#FF5A3D";
  const SUN = "#FFC93C";
  const LIME = "#A4DC4F";
  const SKY = "#5DC9F2";
  const PLUM = "#E963A8";
  const VIOLET = "#9B5BFF";
  const INK = "#2A1F1A";

  return (
    <div
      className="relative aspect-[4/5] w-full"
      style={{ perspective: "1800px" }}
    >
      {/* ===========================================================
           BG LAYER: 多層グラデメッシュ + grid + 装飾 geometric
         =========================================================== */}
      <div className="absolute inset-0 rounded-[36px] md:rounded-[48px] overflow-hidden" style={{ background: `linear-gradient(170deg, #FFF7E8 0%, #FFE9D2 50%, #FFD3B8 100%)`, boxShadow: "0 30px 90px rgba(255,90,61,0.22), 0 8px 24px rgba(255,90,61,0.1)" }}>
        {/* mesh blobs */}
        <motion.div animate={{ scale: [1, 1.12, 1], rotate: [0, 8, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 rounded-full blur-3xl opacity-65" style={{ background: `radial-gradient(circle, ${SUN}, transparent 65%)` }} aria-hidden />
        <motion.div animate={{ scale: [1, 1.15, 1], rotate: [0, -10, 0] }} transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute -bottom-1/4 -left-1/4 w-3/4 h-3/4 rounded-full blur-3xl opacity-55" style={{ background: `radial-gradient(circle, ${CORAL}, transparent 65%)` }} aria-hidden />
        <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }} className="absolute top-1/3 left-1/3 w-1/2 h-1/2 rounded-full blur-3xl opacity-40" style={{ background: `radial-gradient(circle, ${PLUM}, transparent 65%)` }} aria-hidden />

        {/* fine grid pattern (subtle texture) */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(${INK} 1px, transparent 1px), linear-gradient(90deg, ${INK} 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
            maskImage: "radial-gradient(circle at center, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 75%)",
          }}
          aria-hidden
        />

        {/* decorative rotated squares — 紙テクスチャ感 */}
        <motion.div
          animate={{ rotate: [12, 18, 12] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[8%] right-[12%] w-24 h-24 rounded-[20px] border-2 opacity-25"
          style={{ borderColor: CORAL }}
          aria-hidden
        />
        <motion.div
          animate={{ rotate: [-8, -14, -8] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[10%] left-[8%] w-20 h-20 rounded-[18px] border-2 opacity-20"
          style={{ borderColor: VIOLET }}
          aria-hidden
        />

        {/* glowing connection arcs (前景の chip 同士を弱く繋ぐ) */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 125" preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="arc-grad-a" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={CORAL} stopOpacity="0" />
              <stop offset="50%" stopColor={CORAL} stopOpacity="0.5" />
              <stop offset="100%" stopColor={PLUM} stopOpacity="0" />
            </linearGradient>
            <linearGradient id="arc-grad-b" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={SKY} stopOpacity="0" />
              <stop offset="50%" stopColor={SKY} stopOpacity="0.5" />
              <stop offset="100%" stopColor={LIME} stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 20 25 Q 50 50 80 30"
            stroke="url(#arc-grad-a)" strokeWidth="0.5" fill="none" strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, delay: 0.6, ease: "easeOut" }}
          />
          <motion.path
            d="M 15 90 Q 50 75 85 95"
            stroke="url(#arc-grad-b)" strokeWidth="0.5" fill="none" strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, delay: 0.9, ease: "easeOut" }}
          />
        </svg>
      </div>

      {/* ===========================================================
           CENTER PRODUCT CARD — 今月の講習会 (tilted with depth)
         =========================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotateY: 12, rotateX: -8 }}
        animate={{ opacity: 1, y: 0, rotateY: -8, rotateX: 6 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        whileHover={{ rotateY: 0, rotateX: 0, scale: 1.02 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[68%] z-20"
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative rounded-3xl overflow-hidden p-5 md:p-6"
          style={{
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 40px 80px -20px rgba(255,90,61,0.35), 0 20px 40px -10px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.8)",
            border: "1px solid rgba(255,255,255,0.9)",
          }}
        >
          {/* card top: date + status */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${LIME}, ${SKY})`, boxShadow: `0 4px 14px ${LIME}50` }}>
                <Calendar className="w-5 h-5 text-white" strokeWidth={2.5} />
              </span>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest opacity-50" style={{ color: INK }}>Next Same Day</p>
                <p className="font-black text-sm leading-tight" style={{ color: INK }}>2026.06.15 <span className="font-medium opacity-60">sat</span></p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold" style={{ background: `${LIME}30`, color: "#3F7A1F" }}>
              <CheckCircle2 className="w-3 h-3" />
              開催決定
            </span>
          </div>
          {/* same-day schedule blocks */}
          <div className="rounded-2xl p-2.5 mb-2.5" style={{ background: `${LIME}18` }}>
            <div className="flex items-start gap-2.5">
              <span className="w-9 h-9 rounded-lg inline-flex items-center justify-center shrink-0" style={{ background: LIME, color: "#FFFFFF" }}>
                <HandHeart className="w-4 h-4" strokeWidth={2.5} />
              </span>
              <div className="flex-1">
                <p className="text-[9px] font-mono opacity-60" style={{ color: INK }}>AM 10:00 — 12:00</p>
                <p className="font-black text-sm leading-tight" style={{ color: INK }}>なごみカフェ</p>
                <p className="text-[10px] opacity-60" style={{ color: INK }}>誰でも参加 OK · 無料</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl p-2.5 mb-3" style={{ background: `${CORAL}12` }}>
            <div className="flex items-start gap-2.5">
              <span className="w-9 h-9 rounded-lg inline-flex items-center justify-center shrink-0" style={{ background: CORAL, color: "#FFFFFF" }}>
                <Award className="w-4 h-4" strokeWidth={2.5} />
              </span>
              <div className="flex-1">
                <p className="text-[9px] font-mono opacity-60" style={{ color: INK }}>PM 13:30 — 16:30</p>
                <p className="font-black text-sm leading-tight" style={{ color: INK }}>月 1 講習会</p>
                <p className="text-[10px] opacity-60" style={{ color: INK }}>2 資格の単位認定</p>
              </div>
            </div>
          </div>
          {/* meta + cta */}
          <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: "rgba(42,31,26,0.1)" }}>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold" style={{ color: "#1A6B8F" }}>
              <MapPin className="w-3 h-3" />都内会場
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-bold" style={{ color: CORAL }}>
              詳細 <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>
        </motion.div>
        {/* card shadow plate (depth) */}
        <div className="absolute inset-0 rounded-3xl -z-10 translate-y-3 translate-x-2 opacity-40" style={{ background: CORAL, filter: "blur(20px)", transform: "translateZ(-40px) translateY(20px)" }} aria-hidden />
      </motion.div>

      {/* ===========================================================
           FLOATING CHIP 1 — 大型 stat (左上)
         =========================================================== */}
      <motion.div
        initial={{ opacity: 0, y: -20, rotate: -12 }}
        animate={{ opacity: 1, y: 0, rotate: -6 }}
        transition={{ duration: 0.9, delay: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        whileHover={{ rotate: 0, scale: 1.05 }}
        className="absolute top-[4%] left-[4%] z-30"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="rounded-2xl p-4 pr-5"
          style={{
            background: `linear-gradient(135deg, ${CORAL}, ${PLUM})`,
            boxShadow: `0 16px 36px ${CORAL}50, 0 4px 10px rgba(0,0,0,0.1)`,
            color: "#FFFFFF",
          }}
        >
          <div className="flex items-center gap-3">
            <span className="font-black tracking-tighter leading-none" style={{ fontSize: "2rem" }}>月1</span>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest opacity-80">Same Day</p>
              <p className="text-xs font-bold leading-tight">なごみカフェ<br />+ 講習会</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ===========================================================
           FLOATING CHIP 2 — avatar 連携 chip (右上)
         =========================================================== */}
      <motion.div
        initial={{ opacity: 0, y: -20, rotate: 10 }}
        animate={{ opacity: 1, y: 0, rotate: 4 }}
        transition={{ duration: 0.9, delay: 1.0, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        whileHover={{ rotate: 0, scale: 1.05 }}
        className="absolute top-[2%] right-[3%] z-30"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="rounded-2xl px-4 py-3 bg-white"
          style={{
            boxShadow: "0 14px 32px rgba(93,201,242,0.35), 0 4px 10px rgba(0,0,0,0.08)",
          }}
        >
          <p className="text-[10px] font-bold mb-2" style={{ color: INK }}>5 職種が連携 🤝</p>
          <div className="flex -space-x-1.5">
            {[CORAL, SUN, LIME, SKY, PLUM].map((c, i) => (
              <span
                key={i}
                className="w-6 h-6 rounded-full border-2 border-white inline-flex items-center justify-center text-[9px] font-black text-white"
                style={{ background: c, boxShadow: `0 2px 4px ${c}60` }}
              >
                {["医", "福", "保", "介", "ス"][i]}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* ===========================================================
           FLOATING CHIP 3 — testimonial quote (右中央)
         =========================================================== */}
      <motion.div
        initial={{ opacity: 0, x: 20, rotate: 8 }}
        animate={{ opacity: 1, x: 0, rotate: 4 }}
        transition={{ duration: 0.9, delay: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        whileHover={{ rotate: 0, scale: 1.05 }}
        className="absolute top-[44%] right-[-4%] z-30 max-w-[55%]"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="rounded-2xl p-4 bg-white"
          style={{
            boxShadow: "0 14px 32px rgba(155,91,255,0.25), 0 4px 10px rgba(0,0,0,0.08)",
          }}
        >
          <Quote className="w-4 h-4 mb-1.5" style={{ color: VIOLET }} />
          <p className="text-[11px] leading-relaxed font-medium" style={{ color: INK }}>
            「楽しい時間が、<br />誰かの暮らしを支えていた。」
          </p>
          <p className="text-[9px] font-mono mt-2 opacity-50" style={{ color: INK }}>— 受講生 H さん</p>
        </motion.div>
      </motion.div>

      {/* ===========================================================
           FLOATING CHIP 4 — activity preview tile (左下)
         =========================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -10 }}
        animate={{ opacity: 1, y: 0, rotate: -3 }}
        transition={{ duration: 0.9, delay: 1.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        whileHover={{ rotate: 0, scale: 1.05 }}
        className="absolute bottom-[10%] left-[-3%] z-30"
      >
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="rounded-2xl overflow-hidden bg-white"
          style={{
            boxShadow: "0 14px 32px rgba(164,220,79,0.4), 0 4px 10px rgba(0,0,0,0.08)",
          }}
        >
          <div className="h-3 w-full" style={{ background: `linear-gradient(90deg, ${SKY}, ${VIOLET})` }} />
          <div className="p-3 pr-5">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${SKY}25`, color: "#1A6B8F" }}>
                <Users2 className="w-4 h-4" strokeWidth={2.5} />
              </span>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest opacity-50" style={{ color: INK }}>Activities</p>
                <p className="text-xs font-black leading-tight" style={{ color: INK }}>5 団体の活動</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ===========================================================
           FLOATING CHIP 5 — small badge (右下)
         =========================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 12 }}
        animate={{ opacity: 1, y: 0, rotate: 5 }}
        transition={{ duration: 0.9, delay: 1.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        whileHover={{ rotate: 0, scale: 1.05 }}
        className="absolute bottom-[3%] right-[8%] z-30"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="rounded-full px-4 py-2.5 flex items-center gap-2"
          style={{
            background: INK,
            color: "#FFFFFF",
            boxShadow: "0 12px 28px rgba(42,31,26,0.4), 0 4px 10px rgba(0,0,0,0.15)",
          }}
        >
          <span className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${SUN}, ${CORAL})` }}>
            <Sun className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
          </span>
          <p className="text-[11px] font-bold whitespace-nowrap">
            <span style={{ color: SUN }}>月 1</span> 開催
          </p>
        </motion.div>
      </motion.div>

      {/* ===========================================================
           DECORATIVE PARTICLES (前景の光点)
         =========================================================== */}
      {[
        { top: "20%", left: "48%", c: SUN, s: 3 },
        { top: "35%", left: "88%", c: CORAL, s: 2 },
        { top: "55%", left: "8%", c: PLUM, s: 2.5 },
        { top: "75%", left: "82%", c: VIOLET, s: 2 },
        { top: "85%", left: "48%", c: LIME, s: 2.5 },
      ].map((d, i) => (
        <motion.span
          key={i}
          animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.5, 1] }}
          transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
          className="absolute rounded-full z-10 pointer-events-none"
          style={{
            top: d.top,
            left: d.left,
            width: `${d.s * 4}px`,
            height: `${d.s * 4}px`,
            background: d.c,
            boxShadow: `0 0 16px ${d.c}, 0 0 6px ${d.c}`,
          }}
          aria-hidden
        />
      ))}
    </div>
  );
}

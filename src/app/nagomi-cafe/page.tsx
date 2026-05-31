"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Heart,
  HandHeart,
  Users2,
  Sparkles,
  Calendar,
  MapPin,
  Coffee,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { lvnInfo } from "@/data/lvn-info";

// なごみカフェ専用詳細ページ
// 4 pillar の Pillar 02・なんでも福祉相談室
// メイン色: lime + sun (warmth) · BG: cream
// 同日午前 (10-12) 開催・無料・誰でも・予約不要

const CORAL = "#FF5A3D";
const SUN = "#FFC93C";
const LIME = "#A4DC4F";
const LIME_DARK = "#7BC03D";
const SKY = "#5DC9F2";
const PLUM = "#E963A8";
const VIOLET = "#9B5BFF";
const BG = "#FFFAF0";
const INK = "#2A1F1A";
const PAPER = "#FFFFFF";

const visitorTypes = [
  { icon: Heart, label: "当事者", desc: "暮らしの困りごと、進路、家族のこと" },
  { icon: Users2, label: "家族", desc: "近しい人のことで相談したい" },
  { icon: HandHeart, label: "支援者", desc: "別の支援者の視点を聞きたい" },
  { icon: Sparkles, label: "学び中の人", desc: "現場のリアルを知りたい・繋がりたい" },
];

const flow = [
  { time: "10:00", title: "オープン", desc: "予約不要・出入り自由。受付で名札を書くだけで OK。", c: LIME },
  { time: "10:15 — 11:30", title: "フラットな対話", desc: "コーヒー片手に、相談・雑談・情報交換。5 職種の専門職もここにいます。", c: SKY },
  { time: "11:30 — 12:00", title: "クロージング", desc: "話したいことが残った人は引き続き、午後の講習会へつなぐことも可能。", c: SUN },
];

const faqs = [
  { q: "予約は必要ですか？", a: "不要です。当日その場で名札を書くだけで参加できます。出入りも自由です。" },
  { q: "費用はかかりますか？", a: "完全無料です。コーヒーや軽食もお出ししています。" },
  { q: "話したい内容が決まっていなくても OK ですか？", a: "OK です。「ただ話を聞きたい」「居場所が欲しい」だけでも歓迎します。" },
  { q: "資格はないんですが参加していいですか？", a: "もちろんです。誰でも参加 OK の場所です。資格や所属は問いません。" },
  { q: "午後の講習会も受けないとダメ？", a: "ダメではありません。なごみカフェだけの参加で構いません。" },
];

export default function NagomiCafePage() {
  return (
    <div style={{ background: BG, color: INK }} className="font-sans">
      {/* HERO */}
      <section className="relative px-6 md:px-12 pt-12 md:pt-20 pb-20 md:pb-32 max-w-[1400px] mx-auto overflow-hidden">
        {/* floating blobs */}
        <motion.div animate={{ y: [0, -22, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 right-[5%] w-56 h-56 md:w-80 md:h-80 rounded-full blur-3xl opacity-60 pointer-events-none" style={{ background: LIME }} aria-hidden />
        <motion.div animate={{ y: [0, 28, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-20 left-[-5%] w-56 h-56 md:w-96 md:h-96 rounded-full blur-3xl opacity-55 pointer-events-none" style={{ background: SUN }} aria-hidden />
        <motion.div animate={{ y: [0, -18, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-1/2 left-1/3 w-44 h-44 md:w-64 md:h-64 rounded-full blur-3xl opacity-45 pointer-events-none" style={{ background: SKY }} aria-hidden />

        <div className="relative grid md:grid-cols-[1.3fr_1fr] gap-10 md:gap-16 items-center">
          <div>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="inline-flex items-center gap-2 text-xs font-bold mb-8 px-4 py-2 rounded-full" style={{ background: PAPER, color: "#3F7A1F", boxShadow: "0 4px 14px rgba(0,0,0,0.06)" }}>
              <Coffee className="w-3.5 h-3.5" />
              Pillar 02 · なんでも福祉相談室
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="font-black tracking-[-0.04em] leading-[0.92]" style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}>
              なごみカフェ。
              <br />
              <span className="relative inline-block">
                <span style={{ background: `linear-gradient(135deg, ${LIME_DARK}, #3F7A1F)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  誰でも、来れる。
                </span>
                <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden>
                  <path d="M2,8 Q50,2 100,7 T198,5" fill="none" stroke={LIME_DARK} strokeWidth="4" strokeLinecap="round" opacity="0.8" />
                </svg>
              </span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.25 }} className="mt-10 md:mt-12 text-base md:text-lg leading-[1.85] max-w-lg opacity-80">
              暮らしの困りごとも、進路の悩みも、家族のことも。
              <br />
              月 1 回・講習会と同日の午前中、医療・福祉・保育・介護・スポーツの専門職と、
              <br />
              フラットに話せる地域の福祉相談室です。
            </motion.p>

            {/* quick facts */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4 }} className="mt-10 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold bg-white" style={{ color: INK, boxShadow: "0 4px 12px rgba(0,0,0,0.06)" }}>
                <Calendar className="w-3.5 h-3.5" style={{ color: LIME_DARK }} />
                月 1 · 同日午前 10:00 — 12:00
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold bg-white" style={{ color: INK, boxShadow: "0 4px 12px rgba(0,0,0,0.06)" }}>
                <CheckCircle2 className="w-3.5 h-3.5" style={{ color: SUN }} />
                参加無料・予約不要
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold bg-white" style={{ color: INK, boxShadow: "0 4px 12px rgba(0,0,0,0.06)" }}>
                <Users2 className="w-3.5 h-3.5" style={{ color: SKY }} />
                誰でも参加 OK
              </span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.55 }} className="mt-10 flex flex-wrap items-center gap-3">
              <Link href="/contact/" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm hover:-translate-y-0.5 transition-all" style={{ background: INK, color: BG, boxShadow: "0 12px 30px rgba(42,31,26,0.4)" }}>
                参加について問い合わせる <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </Link>
              <Link href="/schedule/" className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm hover:-translate-y-0.5 transition-all" style={{ background: PAPER, color: INK, boxShadow: "0 4px 14px rgba(0,0,0,0.08)" }}>
                次回の日程を見る
              </Link>
            </motion.div>
          </div>

          {/* Right: warm visual chip composition */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }} className="relative aspect-[4/5]">
            <div className="absolute inset-0 rounded-[36px] md:rounded-[48px] overflow-hidden" style={{ background: `linear-gradient(170deg, #DDF2A8 0%, #B6E27A 50%, #88C44A 100%)`, boxShadow: "0 30px 80px rgba(164,220,79,0.4)" }}>
              <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: `linear-gradient(${INK} 1px, transparent 1px), linear-gradient(90deg, ${INK} 1px, transparent 1px)`, backgroundSize: "28px 28px", maskImage: "radial-gradient(circle at center, black 30%, transparent 75%)", WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 75%)" }} aria-hidden />
              {/* central coffee icon */}
              <motion.div
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${LIME_DARK}, #3F7A1F)`, boxShadow: `0 20px 50px ${LIME_DARK}60` }}
              >
                <Coffee className="w-16 h-16 text-white" strokeWidth={2.2} />
              </motion.div>
            </div>
            {/* floating chips */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-5 -left-5 px-5 py-3 rounded-2xl bg-white font-bold text-xs flex items-center gap-2 z-20" style={{ boxShadow: "0 14px 32px rgba(0,0,0,0.1)" }}>
              <MessageCircle className="w-3.5 h-3.5" style={{ color: VIOLET }} />
              なんでも話せる
            </motion.div>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute -bottom-5 -right-5 px-5 py-3 rounded-2xl font-bold text-xs flex items-center gap-2 z-20" style={{ background: INK, color: BG, boxShadow: "0 14px 32px rgba(0,0,0,0.18)" }}>
              <Heart className="w-3.5 h-3.5 fill-current" style={{ color: CORAL }} />
              月 1 · 同日午前開催
            </motion.div>
            <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-1/3 -right-6 px-4 py-2.5 rounded-2xl font-bold text-[11px] flex items-center gap-2 z-20" style={{ background: SUN, color: INK, boxShadow: "0 10px 24px rgba(255,201,60,0.5)" }}>
              無料 · 予約不要 ☕
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who can come */}
      <section className="px-6 md:px-12 py-20 md:py-32 max-w-[1400px] mx-auto">
        <div className="text-center mb-14 md:mb-20 max-w-2xl mx-auto">
          <p className="inline-flex items-center gap-2 text-xs font-bold mb-5 px-4 py-2 rounded-full" style={{ background: `${SKY}15`, color: "#1A6B8F" }}>
            <Users2 className="w-3.5 h-3.5" /> Who
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95]">
            こんな人が、<br />
            <span style={{ background: `linear-gradient(135deg, ${SKY}, ${LIME})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>来ています。</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {visitorTypes.map(({ icon: Icon, label, desc }, i) => {
            const colors = [LIME, SKY, PLUM, SUN];
            const c = colors[i];
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-[24px] md:rounded-[28px] p-6 md:p-7 bg-white relative overflow-hidden h-full"
                style={{ boxShadow: `0 10px 28px ${c}30` }}
              >
                <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-50" style={{ background: c }} />
                <div className="relative">
                  <span className="w-12 h-12 rounded-2xl inline-flex items-center justify-center mb-4" style={{ background: c, color: "#FFFFFF" }}>
                    <Icon className="w-6 h-6" strokeWidth={2.4} />
                  </span>
                  <p className="font-black text-lg md:text-xl leading-tight mb-2">{label}</p>
                  <p className="text-xs leading-relaxed opacity-70">{desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Flow / 当日の流れ */}
      <section className="px-6 md:px-12 py-20 md:py-32 max-w-[1400px] mx-auto">
        <div className="text-center mb-14 md:mb-20 max-w-2xl mx-auto">
          <p className="inline-flex items-center gap-2 text-xs font-bold mb-5 px-4 py-2 rounded-full" style={{ background: `${LIME}25`, color: "#3F7A1F" }}>
            <Calendar className="w-3.5 h-3.5" /> Flow
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95]">
            当日の流れ。
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {flow.map((f, i) => (
            <motion.div
              key={f.time}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-[24px] p-6 md:p-7 bg-white flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
              style={{ boxShadow: `0 8px 24px ${f.c}25` }}
            >
              <div className="md:w-44 shrink-0">
                <p className="text-[10px] font-mono uppercase tracking-widest opacity-50">Time</p>
                <p className="font-black text-xl md:text-2xl leading-tight" style={{ color: f.c === SUN ? "#7A5300" : f.c === LIME ? "#3F7A1F" : "#1A6B8F" }}>{f.time}</p>
              </div>
              <div className="flex-1 md:border-l md:pl-6" style={{ borderColor: "rgba(42,31,26,0.1)" }}>
                <p className="font-black text-lg md:text-xl mb-1">{f.title}</p>
                <p className="text-sm md:text-base opacity-70 leading-relaxed">{f.desc}</p>
              </div>
              <span className="w-8 h-8 rounded-full inline-flex items-center justify-center shrink-0 md:order-last" style={{ background: f.c, color: "#FFFFFF" }}>
                <span className="text-xs font-black">{i + 1}</span>
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Same Day connection — 月1講習会との繋がり */}
      <section className="px-6 md:px-12 py-20 md:py-32 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="rounded-[36px] md:rounded-[48px] p-10 md:p-16 relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${SUN} 0%, ${CORAL} 100%)` }}
        >
          <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full opacity-40 blur-2xl" style={{ background: PLUM }} />
          <div className="absolute -left-12 -bottom-12 w-64 h-64 rounded-full opacity-40 blur-2xl" style={{ background: LIME }} />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-bold mb-5 px-4 py-2 rounded-full bg-white" style={{ color: INK }}>
                <Calendar className="w-3.5 h-3.5" style={{ color: CORAL }} /> Same Day · 同日開催
              </p>
              <h2 className="text-3xl md:text-5xl font-black leading-tight mb-4" style={{ color: INK }}>
                午後は、月 1 講習会。<br />
                その流れで一緒に。
              </h2>
              <p className="text-sm md:text-base leading-relaxed opacity-85 max-w-xl" style={{ color: INK }}>
                なごみカフェのあとは、午後 13:30 から「月 1 講習会」(2 資格の単位認定)。
                話して、つながって、学ぶ。一日で全部できます。
              </p>
            </div>
            <Link href="/qualification/" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm hover:scale-105 transition-transform whitespace-nowrap" style={{ background: INK, color: BG, boxShadow: "0 12px 30px rgba(42,31,26,0.4)" }}>
              月 1 講習会・資格詳細 <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-12 py-20 md:py-32 max-w-[1400px] mx-auto">
        <div className="text-center mb-14 md:mb-20 max-w-2xl mx-auto">
          <p className="inline-flex items-center gap-2 text-xs font-bold mb-5 px-4 py-2 rounded-full" style={{ background: `${VIOLET}15`, color: VIOLET }}>
            <MessageCircle className="w-3.5 h-3.5" /> FAQ
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95]">
            よくある質問。
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <motion.details
              key={f.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl bg-white overflow-hidden"
              style={{ boxShadow: "0 6px 20px rgba(0,0,0,0.05)" }}
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-5 md:p-6">
                <p className="font-black text-sm md:text-base leading-tight">{f.q}</p>
                <span className="w-7 h-7 rounded-full inline-flex items-center justify-center shrink-0 transition-transform group-open:rotate-45" style={{ background: `${VIOLET}20`, color: VIOLET }}>+</span>
              </summary>
              <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm leading-relaxed opacity-75">{f.a}</p>
            </motion.details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-12 py-20 md:py-32 max-w-[1400px] mx-auto">
        <div className="rounded-[36px] md:rounded-[48px] p-10 md:p-20 text-center relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${LIME} 0%, #88C44A 100%)` }}>
          <div className="absolute -left-20 top-10 w-72 h-72 rounded-full opacity-40 blur-2xl" style={{ background: SUN }} />
          <div className="absolute -right-10 bottom-0 w-80 h-80 rounded-full opacity-50 blur-2xl" style={{ background: SKY }} />
          <div className="relative">
            <p className="inline-flex items-center gap-2 text-xs font-bold mb-6 px-4 py-2 rounded-full bg-white/90" style={{ color: "#3F7A1F" }}>
              <Coffee className="w-3.5 h-3.5" /> Come anytime
            </p>
            <h2 className="font-black tracking-[-0.03em] leading-[0.95] mb-8" style={{ fontSize: "clamp(2.5rem, 8vw, 6.5rem)", color: INK }}>
              話したい、を、<br />
              聴ける場所に。
            </h2>
            <p className="text-base md:text-lg opacity-80 max-w-xl mx-auto mb-10 leading-relaxed" style={{ color: INK }}>
              次の月 1 で、まずは顔を見に来てください。<br />
              手ぶらで、ふらっとで、構いません。
            </p>
            <div className="inline-flex flex-wrap items-center gap-3 justify-center">
              <Link href="/contact/" className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm hover:scale-105 transition-transform" style={{ background: INK, color: BG, boxShadow: "0 12px 30px rgba(42,31,26,0.4)" }}>
                問い合わせる <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </Link>
              <Link href="/schedule/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-white hover:scale-105 transition-transform" style={{ color: INK }}>
                次回の日程を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-12 py-10 max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-4 text-xs opacity-50">
        <p>© 2026 {lvnInfo.legalNameWithStatus}</p>
        <p className="font-mono">Nagomi Cafe · Pillar 02</p>
      </footer>
    </div>
  );
}

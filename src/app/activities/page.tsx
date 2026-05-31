"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Coffee } from "lucide-react";
import { activities } from "@/data/activities";
import { CRAFT, EASE } from "@/lib/craft";
import { PageHero } from "@/components/craft/PageHero";

export default function ActivitiesPage() {
  return (
    <div style={{ background: CRAFT.BG, color: CRAFT.INK }} className="font-sans">
      <PageHero
        eyebrow="Pillar 03 · 5 団体の活動"
        eyebrowIcon={Sparkles}
        eyebrowColor={CRAFT.SKY}
        title={
          <>
            5 つの団体が、<br />
            <span style={{ background: `linear-gradient(135deg, ${CRAFT.SKY}, ${CRAFT.LIME})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>地域のすき間を埋める。</span>
          </>
        }
        subtitle={
          <>
            それぞれの現場で、それぞれのレクリエーションを。
            <br />
            なんでも福祉相談室「<Link href="/nagomi-cafe/" className="underline font-bold inline-flex items-center gap-1" style={{ color: CRAFT.LIME_DARK }}><Coffee className="w-4 h-4" /> なごみカフェ</Link>」は、月 1 講習会と同日午前に別軸で開催しています。
          </>
        }
      />

      {/* 5 団体グリッド */}
      <section className="px-6 md:px-12 py-12 md:py-20 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {activities.map((a, i) => (
            <motion.div
              key={a.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
              whileHover={{ y: -8, rotate: i % 2 === 0 ? -1 : 1 }}
            >
              <Link
                href={`/activities/${a.slug}/`}
                className="block rounded-[28px] p-7 md:p-9 relative overflow-hidden h-full group transition-all bg-white"
                style={{ boxShadow: `0 10px 28px ${a.hex}30` }}
              >
                <div className="absolute -right-12 -top-12 w-44 h-44 rounded-full opacity-90" style={{ background: a.hex }} />
                <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-30 blur-xl" style={{ background: a.hex }} />
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl mb-6" style={{ background: a.hex, boxShadow: `0 6px 16px ${a.hex}60` }} />
                  <p className="text-[10px] font-mono uppercase tracking-widest opacity-50 mb-1">0{i + 1} / 05</p>
                  <p className="font-black text-2xl md:text-3xl leading-tight mb-3">{a.name}</p>
                  <p className="text-sm leading-relaxed opacity-70">{a.tagline}</p>
                  <ArrowUpRight className="w-5 h-5 absolute top-0 right-0 opacity-40 group-hover:opacity-100 group-hover:rotate-45 transition-all" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* なごみカフェ誘導 */}
      <section className="px-6 md:px-12 py-20 md:py-32 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="rounded-[36px] md:rounded-[48px] p-10 md:p-16 relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${CRAFT.LIME} 0%, #88C44A 100%)` }}
        >
          <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full opacity-40 blur-2xl" style={{ background: CRAFT.SUN }} />
          <div className="absolute -left-12 -bottom-12 w-64 h-64 rounded-full opacity-40 blur-2xl" style={{ background: CRAFT.SKY }} />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-6 md:gap-12 items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-bold mb-5 px-4 py-2 rounded-full bg-white" style={{ color: "#3F7A1F" }}>
                <Coffee className="w-3.5 h-3.5" /> Pillar 02 · なんでも福祉相談室
              </p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight mb-4" style={{ color: CRAFT.INK }}>
                5 団体活動とは別軸、<br />
                月 1 同日午前に「なごみカフェ」。
              </h2>
              <p className="text-sm md:text-base leading-relaxed opacity-85 max-w-xl" style={{ color: CRAFT.INK }}>
                資格や所属を問わず、誰でも無料で立ち寄れる地域の福祉相談室。月 1 講習会と同日午前 (10:00 - 12:00) 開催。
              </p>
            </div>
            <Link href="/nagomi-cafe/" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm hover:scale-105 transition-transform whitespace-nowrap" style={{ background: CRAFT.INK, color: CRAFT.BG, boxShadow: "0 12px 30px rgba(42,31,26,0.4)" }}>
              なごみカフェ詳細 <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

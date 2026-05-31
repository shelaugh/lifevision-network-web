"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, ArrowUpRight, Coffee, Award, Sparkles, Compass } from "lucide-react";
import { CRAFT, EASE } from "@/lib/craft";
import { PageHero } from "@/components/craft/PageHero";

const channels = [
  { icon: Mail, label: "メール", value: "[未設定]", color: CRAFT.CORAL },
  { icon: Phone, label: "電話", value: "[未設定]", color: CRAFT.SKY },
  { icon: MessageCircle, label: "LINE 公式", value: "[未設定]", color: CRAFT.LIME },
];

const reasons = [
  { icon: Coffee,    label: "なごみカフェに行く",  desc: "次回の参加日程・場所が知りたい", color: CRAFT.LIME },
  { icon: Award,     label: "月 1 講習会を受ける", desc: "資格取得・申込について",         color: CRAFT.CORAL },
  { icon: Sparkles,  label: "5 団体活動に参加",    desc: "ボドレク / Co Lab / 国際文化等", color: CRAFT.SKY },
  { icon: Compass,   label: "多職種連携で協業",    desc: "団体・機関からの連携依頼",       color: CRAFT.VIOLET },
];

export default function ContactPage() {
  return (
    <div style={{ background: CRAFT.BG, color: CRAFT.INK }} className="font-sans">
      <PageHero
        eyebrow="Contact · お問い合わせ"
        eyebrowIcon={Mail}
        eyebrowColor={CRAFT.CORAL}
        title={
          <>
            お問い合わせ。
          </>
        }
        subtitle={
          <>
            なごみカフェ参加・月 1 講習会の受講・5 団体活動への参加・多職種連携の協業・取材依頼など、お気軽にご連絡ください。
            <br />
            通常 2-3 営業日以内にご返信します。
          </>
        }
      />

      {/* 4 reasons (4 pillar) */}
      <section className="px-6 md:px-12 py-12 md:py-20 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
                whileHover={{ y: -4 }}
                className="rounded-[24px] p-6 bg-white relative overflow-hidden"
                style={{ boxShadow: `0 10px 28px ${r.color}30` }}
              >
                <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-40" style={{ background: r.color }} />
                <div className="relative">
                  <span className="w-11 h-11 rounded-xl inline-flex items-center justify-center mb-4" style={{ background: r.color, color: "#FFFFFF" }}>
                    <Icon className="w-5 h-5" strokeWidth={2.4} />
                  </span>
                  <p className="font-black text-base md:text-lg leading-tight mb-1">{r.label}</p>
                  <p className="text-xs leading-relaxed opacity-65">{r.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 連絡方法 */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-[1400px] mx-auto">
        <p className="inline-flex items-center gap-2 text-xs font-bold mb-5 px-4 py-2 rounded-full" style={{ background: `${CRAFT.PLUM}15`, color: CRAFT.PLUM }}>
          Channels · 連絡方法
        </p>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight mb-10">
          3 つの窓口。
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-12">
          {channels.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-[28px] p-7 md:p-8 bg-white relative overflow-hidden"
                style={{ boxShadow: `0 10px 30px ${c.color}30` }}
              >
                <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full opacity-30" style={{ background: c.color }} />
                <div className="relative">
                  <span className="w-14 h-14 rounded-2xl inline-flex items-center justify-center mb-5" style={{ background: c.color, color: "#FFFFFF" }}>
                    <Icon className="w-7 h-7" strokeWidth={2.2} />
                  </span>
                  <p className="text-[10px] font-mono uppercase tracking-widest opacity-50 mb-2">{c.label}</p>
                  <p className="text-base font-bold">{c.value}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="rounded-[24px] p-8 md:p-12 text-center bg-white" style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
          <p className="text-sm opacity-60 leading-relaxed">
            🚧 お問い合わせフォームは Phase 3 で実装予定
            <br />
            連絡先情報は確定次第更新します。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-20 md:py-32 max-w-[1400px] mx-auto">
        <div className="rounded-[36px] md:rounded-[48px] p-10 md:p-20 text-center relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${CRAFT.SUN}, ${CRAFT.CORAL} 50%, ${CRAFT.PLUM})` }}>
          <div className="absolute -left-20 top-10 w-72 h-72 rounded-full opacity-40 blur-2xl" style={{ background: CRAFT.VIOLET }} />
          <div className="absolute -right-10 bottom-0 w-80 h-80 rounded-full opacity-50 blur-2xl" style={{ background: CRAFT.LIME }} />
          <div className="relative">
            <h2 className="font-black tracking-[-0.03em] leading-[0.95] mb-8" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", color: CRAFT.INK }}>
              まずは、<br />
              スケジュールから。
            </h2>
            <p className="text-base md:text-lg opacity-80 max-w-xl mx-auto mb-10 leading-relaxed" style={{ color: CRAFT.INK }}>
              次回のなごみカフェ・月 1 講習会の日程を見て、来られそうな日に来てください。
            </p>
            <div className="inline-flex flex-wrap items-center gap-3 justify-center">
              <Link href="/schedule/" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm hover:scale-105 transition-transform" style={{ background: CRAFT.INK, color: CRAFT.BG, boxShadow: "0 12px 30px rgba(42,31,26,0.4)" }}>
                スケジュールを見る <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </Link>
              <Link href="/nagomi-cafe/" className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm bg-white hover:scale-105 transition-transform" style={{ color: CRAFT.INK }}>
                <Coffee className="w-4 h-4" /> なごみカフェ詳細
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

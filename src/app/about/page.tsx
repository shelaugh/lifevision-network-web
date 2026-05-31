"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Heart, Compass, Stethoscope, HandHeart, Baby, Activity, Dumbbell } from "lucide-react";
import { lvnInfo } from "@/data/lvn-info";
import { CRAFT, EASE } from "@/lib/craft";
import { PageHero } from "@/components/craft/PageHero";

const roles = [
  { ja: "医療",    en: "Medical",   color: CRAFT.CORAL,  icon: Stethoscope },
  { ja: "福祉",    en: "Welfare",   color: CRAFT.SUN,    icon: HandHeart },
  { ja: "保育",    en: "Childcare", color: CRAFT.LIME,   icon: Baby },
  { ja: "介護",    en: "Nursing",   color: CRAFT.SKY,    icon: Activity },
  { ja: "スポーツ", en: "Sports",    color: CRAFT.PLUM,   icon: Dumbbell },
];

const values = [
  { title: "いのち",          body: "あなたの存在は、誰にも代えられない。\nそのままのあなたを、まっすぐ抱きしめる。", color: CRAFT.PLUM },
  { title: "おもいやり",      body: "少しの工夫で、あなたの世界が広がる。\nできるようになるよ、あなたの方法で。", color: CRAFT.SUN },
  { title: "しあわせとは",    body: "いちばん大切なのは、あなたの幸せ。\nその笑顔のために、みんなが動き出す。", color: CRAFT.LIME },
  { title: "愛され慈しむ",    body: "小さな手も、迷う気持ちも、大事に包む。\nあなたは、愛されて育つひかり。", color: CRAFT.VIOLET },
  { title: "レクリエーション", body: "日々のくらしに、よろこびと彩りを。\n生きること、こころを豊かにすること。", color: CRAFT.CORAL },
];

const corporateInfo = [
  { label: "法人名", value: lvnInfo.legalNameWithStatus },
  { label: "略称", value: lvnInfo.abbreviation },
  { label: "所在地", value: lvnInfo.address },
  { label: "設立", value: lvnInfo.established },
  { label: "事業内容", value: "なごみカフェ (なんでも福祉相談室) / 月 1 講習会 (2 資格単位認定) / 5 団体の活動 / 多職種連携支援" },
];

export default function AboutPage() {
  return (
    <div style={{ background: CRAFT.BG, color: CRAFT.INK }} className="font-sans">
      <PageHero
        eyebrow="About Us · 団体紹介"
        eyebrowIcon={Compass}
        eyebrowColor={CRAFT.CORAL}
        title={
          <>
            関わるすべての人が、<br />
            <span style={{ background: `linear-gradient(135deg, ${CRAFT.CORAL}, ${CRAFT.PLUM} 50%, ${CRAFT.VIOLET})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>幸福に暮らす社会へ。</span>
          </>
        }
        subtitle={
          <>
            医療・福祉・保育・介護・スポーツの 5 職種がレクリエーションを共通言語に連携し、地域のすき間にあたたかな支援を届けます。
          </>
        }
      />

      {/* ミッション */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="rounded-[36px] md:rounded-[48px] p-10 md:p-16 relative overflow-hidden bg-white"
          style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.06)" }}
        >
          <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full opacity-30 blur-3xl" style={{ background: CRAFT.SUN }} />
          <div className="absolute -left-16 -bottom-16 w-72 h-72 rounded-full opacity-30 blur-3xl" style={{ background: CRAFT.LIME }} />
          <div className="relative max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs font-bold mb-5 px-4 py-2 rounded-full" style={{ background: `${CRAFT.CORAL}15`, color: CRAFT.CORAL }}>
              <Heart className="w-3.5 h-3.5" /> Our Mission
            </p>
            <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter mb-6">
              多職種連携 × レクリエーション。
            </h2>
            <p className="text-base md:text-lg leading-[1.85] opacity-80">
              NPO 法人(申請中) ライフビジョンネットは、医療・福祉・保育・介護・スポーツの専門領域がレクリエーション活動を中心に据えながら連携し、それぞれの専門性を高めつつ、互いの職種への理解を深め、垣根を越えて多職種連携を図ります。
              <br /><br />
              科学的根拠 (エビデンス) に基づいた実践を通じて、支援のあり方を共に考え、常に進化し続ける組織を目指します。
            </p>
          </div>
        </motion.div>
      </section>

      {/* 5 職種 */}
      <section className="px-6 md:px-12 py-20 md:py-32 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-10 md:gap-16 mb-12 md:mb-16 items-end">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold mb-5 px-4 py-2 rounded-full" style={{ background: `${CRAFT.VIOLET}15`, color: CRAFT.VIOLET }}>
              5 Professions
            </p>
            <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter">
              5 つの専門が、<br />
              <span style={{ background: `linear-gradient(135deg, ${CRAFT.VIOLET}, ${CRAFT.PLUM})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>ひとつになる。</span>
            </h2>
          </div>
          <p className="text-base md:text-lg leading-relaxed opacity-70">
            医療・福祉・保育・介護・スポーツ。普段は別々に動く 5 つの専門領域が、レクリエーションを共通言語に連携します。それぞれの強みを活かしながら、地域に寄り添う支援を共に作っていきます。
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5">
          {roles.map((role, i) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={role.ja}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6, rotate: i % 2 === 0 ? -1 : 1 }}
                className="rounded-[24px] md:rounded-[28px] p-6 md:p-7 bg-white relative overflow-hidden h-full"
                style={{ boxShadow: `0 10px 28px ${role.color}30` }}
              >
                <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-50" style={{ background: role.color }} />
                <div className="relative">
                  <span className="w-12 h-12 rounded-2xl inline-flex items-center justify-center mb-4" style={{ background: role.color, color: "#FFFFFF" }}>
                    <Icon className="w-6 h-6" strokeWidth={2.2} />
                  </span>
                  <p className="font-black text-2xl leading-tight">{role.ja}</p>
                  <p className="text-[10px] font-mono uppercase tracking-widest opacity-50 mt-1">{role.en}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 大切にしている言葉 (5 values) */}
      <section className="px-6 md:px-12 py-20 md:py-32 max-w-[1400px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="inline-flex items-center gap-2 text-xs font-bold mb-5 px-4 py-2 rounded-full" style={{ background: `${CRAFT.SUN}25`, color: "#7A5300" }}>
            Our Values
          </p>
          <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter">
            大切にしている言葉。
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: EASE }}
              whileHover={{ y: -4 }}
              className={`rounded-[28px] p-7 md:p-9 relative overflow-hidden ${i === 4 ? "md:col-span-2" : ""}`}
              style={{ background: v.color }}
            >
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-30" style={{ background: CRAFT.BG }} />
              <div className="relative">
                <p className="font-black text-2xl md:text-3xl leading-tight mb-3" style={{ color: CRAFT.INK }}>{v.title}</p>
                <p className="text-sm md:text-base leading-relaxed whitespace-pre-line opacity-80" style={{ color: CRAFT.INK }}>{v.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 法人情報 */}
      <section className="px-6 md:px-12 py-20 md:py-32 max-w-[1400px] mx-auto">
        <div className="max-w-4xl mx-auto">
          <p className="inline-flex items-center gap-2 text-xs font-bold mb-5 px-4 py-2 rounded-full" style={{ background: `${CRAFT.INK}10`, color: CRAFT.INK }}>
            Corporate Information
          </p>
          <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter mb-12">
            法人情報
          </h2>

          <dl className="rounded-[28px] bg-white overflow-hidden" style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}>
            {corporateInfo.map((item, i) => (
              <div
                key={item.label}
                className="grid grid-cols-[110px_1fr] md:grid-cols-[200px_1fr]"
                style={{ borderTop: i === 0 ? "none" : "1px solid rgba(42,31,26,0.08)" }}
              >
                <dt className="py-5 md:py-6 px-6 md:px-8 font-black text-sm md:text-base opacity-60">{item.label}</dt>
                <dd className="py-5 md:py-6 px-6 md:px-8 text-sm md:text-base leading-relaxed">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-20 md:py-32 max-w-[1400px] mx-auto">
        <div className="rounded-[36px] md:rounded-[48px] p-10 md:p-20 text-center relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${CRAFT.SUN}, ${CRAFT.CORAL} 50%, ${CRAFT.PLUM})` }}>
          <div className="absolute -left-20 top-10 w-72 h-72 rounded-full opacity-40 blur-2xl" style={{ background: CRAFT.VIOLET }} />
          <div className="absolute -right-10 bottom-0 w-80 h-80 rounded-full opacity-50 blur-2xl" style={{ background: CRAFT.LIME }} />
          <div className="relative">
            <h2 className="font-black tracking-[-0.03em] leading-[0.95] mb-8" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", color: CRAFT.INK }}>
              一緒に、地域を、<br />
              彩りませんか？
            </h2>
            <div className="inline-flex flex-wrap items-center gap-3 justify-center">
              <Link href="/nagomi-cafe/" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm hover:scale-105 transition-transform" style={{ background: CRAFT.INK, color: CRAFT.BG, boxShadow: "0 12px 30px rgba(42,31,26,0.4)" }}>
                なごみカフェに行く <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </Link>
              <Link href="/contact/" className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm bg-white hover:scale-105 transition-transform" style={{ color: CRAFT.INK }}>
                問い合わせる
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

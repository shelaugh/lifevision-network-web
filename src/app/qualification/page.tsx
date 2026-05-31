"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Award, Rocket, Clock, Check, X, Coffee, GraduationCap } from "lucide-react";
import { lvnInfo } from "@/data/lvn-info";
import { CRAFT, EASE } from "@/lib/craft";
import { PageHero } from "@/components/craft/PageHero";

const stages = [
  { no: 1, label: "知る", desc: "資格の概要・月 1 講習会の流れ・多職種連携での活かし方を知る", icon: BookOpen, color: CRAFT.SUN },
  { no: 2, label: "取る", desc: "月 1 回の講習会に参加して単位を積み重ね、認定を受ける", icon: Award, color: CRAFT.CORAL },
  { no: 3, label: "活かす", desc: "5 団体活動デビュー — 取得後すぐに 5 つの団体活動で実践できる", icon: Rocket, color: CRAFT.LIME },
];

const qualifications = [
  {
    name: "レクリエーション\nインストラクター",
    short: "レクの基礎を、現場で活かせる形で。",
    hours: ["理論 9h", "実技 27h", "演習 15h"],
    desc: "「心を元気にする」レクリエーション支援の基礎を身につける。福祉・介護・保育・地域活動の現場で活躍。",
    color: CRAFT.CORAL,
  },
  {
    name: "スポーツ・\nレクリエーション指導者",
    short: "誰もが楽しめるスポーツを、クリエイトする。",
    hours: ["理論 9h", "実技 36h", "演習 6h"],
    desc: "運動に親しんでいない人も含め、誰もが楽しめるスポーツ・レクの場をクリエイトする指導者。",
    color: CRAFT.SKY,
  },
];

const comparison = [
  { label: "両資格の単位対応", lvn: true, others: false },
  { label: "日本レクリエーション協会公認", lvn: true, others: true },
  { label: "月 1 回の定例講習会", lvn: true, others: false },
  { label: "多職種連携の現場で学べる", lvn: true, others: false },
  { label: "同日午前なごみカフェに参加可能", lvn: true, others: false },
  { label: "5 団体活動でデビューできる", lvn: true, others: false },
];

const faqs = [
  { q: "未経験でも取得できますか？", a: "はい、特別な資格や経験は必要ありません。月 1 講習会と並走しながら学べる課程を用意しています。" },
  { q: "費用はどれくらいかかりますか？", a: "資格・受講形態によって異なります。無料相談で具体的なプランをご案内します。" },
  { q: "どちらの資格を取るか迷っています。", a: "「主に福祉・介護・保育の現場で活かしたい方」はレクリエーションインストラクター、「スポーツ寄りで活躍したい方」はスポーツ・レクリエーション指導者がおすすめです。無料相談で適性をご一緒に整理できます。" },
  { q: "両方の資格を取れますか？", a: "可能です。月 1 回の講習会はどちらの単位としても認定されるため、順次取得を目指せます。" },
  { q: "取得後、すぐに現場で活動できますか？", a: "はい。本団体が連携する 5 団体の活動 (ボドレク / Co Lab LIFE / 国際文化 / こどもパネル / my スポーツ) があり、取得後すぐに 5 団体活動デビューとして実践できます。" },
  { q: "なごみカフェには資格がなくても行けますか？", a: "はい。なごみカフェ (なんでも福祉相談室) は月 1 講習会と同日午前に開催され、誰でも無料で参加できます。資格や予約は不要です。" },
];

export default function QualificationPage() {
  return (
    <div style={{ background: CRAFT.BG, color: CRAFT.INK }} className="font-sans">
      <PageHero
        eyebrow="Pillar 01 · 月 1 講習会・2 資格"
        eyebrowIcon={GraduationCap}
        eyebrowColor={CRAFT.CORAL}
        title={
          <>
            この資格、<br />
            <span style={{ background: `linear-gradient(135deg, ${CRAFT.CORAL}, ${CRAFT.SUN})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>月 1 で、取れる。</span>
          </>
        }
        subtitle={
          <>
            「レクリエーションインストラクター」と「スポーツ・レクリエーション指導者」。
            <br />
            両資格の単位として認定される月 1 講習会を運営しています。
          </>
        }
      >
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4 }} className="mt-10 flex flex-wrap items-center gap-3">
          <Link href="#apply" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm hover:-translate-y-0.5 transition-all" style={{ background: CRAFT.CORAL, color: CRAFT.BG, boxShadow: "0 8px 24px rgba(255,90,61,0.4)" }}>
            無料で相談する <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </Link>
          <Link href="/schedule/" className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm bg-white hover:-translate-y-0.5 transition-all" style={{ color: CRAFT.INK, boxShadow: "0 4px 14px rgba(0,0,0,0.08)" }}>
            講習会スケジュール
          </Link>
        </motion.div>
      </PageHero>

      {/* なぜ「両資格」か (公認情報) */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="rounded-[36px] md:rounded-[48px] p-10 md:p-16 relative overflow-hidden"
          style={{ background: CRAFT.INK, color: CRAFT.BG }}
        >
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full opacity-20 blur-3xl" style={{ background: CRAFT.SUN }} />
          <div className="absolute -left-12 -bottom-12 w-64 h-64 rounded-full opacity-20 blur-3xl" style={{ background: CRAFT.CORAL }} />
          <div className="relative grid md:grid-cols-[1fr_1.5fr] gap-10 md:gap-16">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-bold mb-5 px-4 py-2 rounded-full" style={{ background: `${CRAFT.SUN}25`, color: CRAFT.SUN }}>
                Authorized by
              </p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
                日本レクリエーション協会<br />
                <span style={{ color: CRAFT.SUN }}>公認</span>。
              </h2>
            </div>
            <div className="md:pt-2">
              <p className="text-base md:text-lg leading-[1.85] opacity-80 mb-6">
                {lvnInfo.authority.description}
              </p>
              <a
                href={lvnInfo.authority.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold underline-offset-4 hover:underline"
                style={{ color: CRAFT.SUN }}
              >
                公益財団法人 日本レクリエーション協会 公式 <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3 段階 */}
      <section className="px-6 md:px-12 py-20 md:py-32 max-w-[1400px] mx-auto">
        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          <p className="inline-flex items-center gap-2 text-xs font-bold mb-5 px-4 py-2 rounded-full" style={{ background: `${CRAFT.VIOLET}15`, color: CRAFT.VIOLET }}>
            Step by Step
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
            知る → 取る → 活かす。
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
          {stages.map((stage, i) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.no}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                whileHover={{ y: -6 }}
                className="rounded-[28px] p-8 md:p-10 bg-white relative overflow-hidden h-full"
                style={{ boxShadow: `0 12px 30px ${stage.color}30` }}
              >
                <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-30" style={{ background: stage.color }} />
                <div className="relative">
                  <div className="flex items-baseline gap-4 mb-5">
                    <p className="font-black tracking-tighter leading-none" style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", color: stage.color }}>{stage.no}</p>
                    <span className="w-10 h-10 rounded-xl inline-flex items-center justify-center" style={{ background: `${stage.color}25`, color: stage.color }}>
                      <Icon className="w-5 h-5" strokeWidth={2.4} />
                    </span>
                  </div>
                  <p className="font-black text-2xl md:text-3xl leading-tight mb-3">{stage.label}</p>
                  <p className="text-sm leading-relaxed opacity-70">{stage.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 月 1 講習会 spotlight */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="rounded-[36px] md:rounded-[48px] p-10 md:p-16 relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${CRAFT.SUN} 0%, ${CRAFT.CORAL} 100%)` }}
        >
          <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full opacity-30 blur-2xl" style={{ background: CRAFT.PLUM }} />
          <div className="absolute -left-12 -bottom-12 w-64 h-64 rounded-full opacity-30 blur-2xl" style={{ background: CRAFT.LIME }} />
          <div className="relative grid lg:grid-cols-[auto_1fr] gap-10 md:gap-16 items-center">
            <div className="text-center shrink-0">
              <p className="text-[10px] font-mono uppercase tracking-[0.4em] opacity-70 mb-3" style={{ color: CRAFT.INK }}>Monthly Session</p>
              <p className="font-black tracking-tighter leading-[0.85]" style={{ color: CRAFT.INK }}>
                <span className="block" style={{ fontSize: "clamp(6rem, 14vw, 11rem)" }}>月1</span>
                <span className="block text-xl md:text-2xl mt-2">回開催</span>
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight mb-5" style={{ color: CRAFT.INK }}>
                2 資格、どちらを選んでも、<br />
                ここで取れる。
              </h2>
              <p className="text-base md:text-lg leading-[1.85] mb-8 opacity-85" style={{ color: CRAFT.INK }}>
                月 1 回の講習会は、レクリエーションインストラクターまたはスポーツ・レクリエーション指導者、どちらかの単位として認定されます。同日午前にはなごみカフェも開催。
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/schedule/" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm hover:scale-105 transition-transform" style={{ background: CRAFT.INK, color: CRAFT.BG, boxShadow: "0 12px 30px rgba(42,31,26,0.4)" }}>
                  講習会スケジュール <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </Link>
                <Link href="/nagomi-cafe/" className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm bg-white hover:scale-105 transition-transform" style={{ color: CRAFT.INK }}>
                  <Coffee className="w-4 h-4" /> 同日午前のなごみカフェ
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2 資格紹介 */}
      <section className="px-6 md:px-12 py-20 md:py-32 max-w-[1400px] mx-auto">
        <div className="mb-12 md:mb-16 max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs font-bold mb-5 px-4 py-2 rounded-full" style={{ background: `${CRAFT.PLUM}15`, color: CRAFT.PLUM }}>
            Public Certifications
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
            取得できる 2 つの資格。
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
          {qualifications.map((q, i) => (
            <motion.div
              key={q.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-[28px] p-8 md:p-10 bg-white relative overflow-hidden h-full"
              style={{ boxShadow: `0 12px 30px ${q.color}30` }}
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-30" style={{ background: q.color }} />
              <div className="relative">
                <div className="w-12 h-1.5 mb-6 rounded-full" style={{ background: q.color }} />
                <h3 className="text-2xl md:text-3xl font-black mb-4 leading-tight whitespace-pre-line">
                  {q.name}
                </h3>
                <p className="text-base font-bold mb-5 opacity-80">{q.short}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {q.hours.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold"
                      style={{ background: `${q.color}20`, color: CRAFT.INK }}
                    >
                      <Clock className="w-3 h-3" /> {h}
                    </span>
                  ))}
                </div>
                <p className="text-sm md:text-base leading-relaxed opacity-70">{q.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 比較表 */}
      <section className="px-6 md:px-12 py-20 md:py-32 max-w-[1400px] mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 max-w-2xl">
            <p className="inline-flex items-center gap-2 text-xs font-bold mb-5 px-4 py-2 rounded-full" style={{ background: `${CRAFT.SKY}20`, color: "#1A6B8F" }}>
              本団体 vs 他団体
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
              なぜ、ここで取るのか。
            </h2>
          </div>

          <div className="rounded-[28px] bg-white overflow-hidden" style={{ boxShadow: "0 12px 30px rgba(0,0,0,0.06)" }}>
            <div className="grid grid-cols-[1fr_90px_90px] md:grid-cols-[1fr_140px_140px] font-black text-sm md:text-base" style={{ background: CRAFT.INK, color: CRAFT.BG }}>
              <div className="p-4 md:p-5">項目</div>
              <div className="p-4 md:p-5 text-center" style={{ background: CRAFT.CORAL }}>本団体</div>
              <div className="p-4 md:p-5 text-center opacity-70">他団体</div>
            </div>
            {comparison.map((row, i) => (
              <div
                key={row.label}
                className="grid grid-cols-[1fr_90px_90px] md:grid-cols-[1fr_140px_140px] text-sm md:text-base"
                style={{ borderTop: i === 0 ? "none" : "1px solid rgba(42,31,26,0.06)" }}
              >
                <div className="p-4 md:p-5 font-bold">{row.label}</div>
                <div className="p-4 md:p-5 text-center" style={{ background: `${CRAFT.CORAL}10` }}>
                  {row.lvn ? (
                    <Check className="w-6 h-6 mx-auto" strokeWidth={3} style={{ color: CRAFT.LIME_DARK }} />
                  ) : (
                    <X className="w-6 h-6 mx-auto opacity-30" strokeWidth={3} />
                  )}
                </div>
                <div className="p-4 md:p-5 text-center">
                  {row.others ? (
                    <Check className="w-6 h-6 mx-auto opacity-40" strokeWidth={2.5} />
                  ) : (
                    <X className="w-6 h-6 mx-auto opacity-30" strokeWidth={2.5} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-12 py-20 md:py-32 max-w-[1400px] mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="inline-flex items-center gap-2 text-xs font-bold mb-5 px-4 py-2 rounded-full" style={{ background: `${CRAFT.VIOLET}15`, color: CRAFT.VIOLET }}>
              FAQ
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
              よくあるご質問。
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.details
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="group rounded-2xl bg-white overflow-hidden"
                style={{ boxShadow: "0 6px 20px rgba(0,0,0,0.05)" }}
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-5 md:p-6">
                  <p className="font-black text-sm md:text-base leading-tight">{faq.q}</p>
                  <span className="w-7 h-7 rounded-full inline-flex items-center justify-center shrink-0 transition-transform group-open:rotate-45" style={{ background: `${CRAFT.VIOLET}20`, color: CRAFT.VIOLET }}>+</span>
                </summary>
                <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm leading-relaxed opacity-75">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* 申込 CTA */}
      <section id="apply" className="px-6 md:px-12 py-20 md:py-32 max-w-[1400px] mx-auto">
        <div className="rounded-[36px] md:rounded-[48px] p-10 md:p-20 text-center relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${CRAFT.SUN}, ${CRAFT.CORAL} 50%, ${CRAFT.PLUM})` }}>
          <div className="absolute -left-20 top-10 w-72 h-72 rounded-full opacity-40 blur-2xl" style={{ background: CRAFT.VIOLET }} />
          <div className="absolute -right-10 bottom-0 w-80 h-80 rounded-full opacity-50 blur-2xl" style={{ background: CRAFT.LIME }} />
          <div className="relative">
            <h2 className="font-black tracking-[-0.03em] leading-[0.95] mb-8" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", color: CRAFT.INK }}>
              あなたも、<br />
              指導者になる。
            </h2>
            <p className="text-base md:text-lg opacity-85 max-w-xl mx-auto mb-10 leading-relaxed" style={{ color: CRAFT.INK }}>
              まずは無料の相談から。<br />
              自分に向いているか、費用や期間など、何でもお気軽にご相談ください。
            </p>
            <div className="inline-flex flex-wrap items-center gap-3 justify-center">
              <Link href="/contact/" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm hover:scale-105 transition-transform" style={{ background: CRAFT.INK, color: CRAFT.BG, boxShadow: "0 12px 30px rgba(42,31,26,0.4)" }}>
                無料で相談する <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </Link>
              <Link href="/schedule/" className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm bg-white hover:scale-105 transition-transform" style={{ color: CRAFT.INK }}>
                講習会スケジュール
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

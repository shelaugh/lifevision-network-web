"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  getUpcomingEvents,
  getCategoryColor,
  getCategoryLabel,
  formatDate,
  formatTime,
  formatDayOfWeek,
} from "@/data/events";
import { ArrowUpRight, MapPin, Users, Tag, Calendar, Coffee, Award, HandHeart } from "lucide-react";
import { CRAFT, EASE } from "@/lib/craft";
import { PageHero } from "@/components/craft/PageHero";

export default function SchedulePage() {
  const upcoming = getUpcomingEvents();

  return (
    <div style={{ background: CRAFT.BG, color: CRAFT.INK }} className="font-sans">
      <PageHero
        eyebrow="Schedule · スケジュール"
        eyebrowIcon={Calendar}
        eyebrowColor={CRAFT.LIME_DARK}
        title={
          <>
            なごみカフェ・<br />
            <span style={{ background: `linear-gradient(135deg, ${CRAFT.LIME_DARK}, ${CRAFT.CORAL})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>講習会・5 団体。</span>
          </>
        }
        subtitle={
          <>
            月 1 回の「なごみカフェ」(午前・なんでも福祉相談室) と「月 1 講習会」(午後・2 資格単位)、5 団体の体験会・トークセッション。
            <br />
            気になるイベントから、ぜひお気軽にご参加ください。
          </>
        }
      />

      {/* 同日タイムテーブル */}
      <section className="px-6 md:px-12 py-12 md:py-20 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="rounded-[36px] md:rounded-[48px] p-8 md:p-14 relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${CRAFT.LIME} 0%, #88C44A 100%)` }}
        >
          <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full opacity-40 blur-2xl" style={{ background: CRAFT.SUN }} />
          <div className="absolute -left-12 -bottom-12 w-64 h-64 rounded-full opacity-40 blur-2xl" style={{ background: CRAFT.SKY }} />
          <div className="relative max-w-3xl mx-auto text-center">
            <p className="inline-flex items-center gap-2 text-xs font-bold mb-6 px-4 py-2 rounded-full bg-white" style={{ color: "#3F7A1F" }}>
              <Calendar className="w-3.5 h-3.5" /> Monthly Same Day
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight mb-8" style={{ color: CRAFT.INK }}>
              月 1 同日、<br />
              午前カフェ + 午後講習会。
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
              {[
                { time: "AM 10:00 — 12:00", label: "なごみカフェ", desc: "なんでも福祉相談室 · 誰でも参加 OK · 無料", icon: HandHeart, c: CRAFT.LIME_DARK },
                { time: "PM 13:30 — 16:30", label: "月 1 講習会", desc: "2 資格どちらの単位としても認定", icon: Award, c: CRAFT.CORAL },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="bg-white rounded-2xl p-5 flex items-start gap-3">
                    <span className="w-11 h-11 rounded-xl inline-flex items-center justify-center shrink-0" style={{ background: s.c, color: "#FFFFFF" }}>
                      <Icon className="w-5 h-5" strokeWidth={2.4} />
                    </span>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-widest opacity-60">{s.time}</p>
                      <p className="font-black text-base md:text-lg leading-tight mt-0.5">{s.label}</p>
                      <p className="text-xs opacity-70 leading-relaxed mt-1">{s.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-xs opacity-80 mb-8" style={{ color: CRAFT.INK }}>
              同日開催なので、午前のみ・午後のみ・両方参加、どれも OK です。
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/nagomi-cafe/"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm hover:scale-105 transition-transform"
                style={{ background: CRAFT.INK, color: CRAFT.BG, boxShadow: "0 12px 30px rgba(42,31,26,0.4)" }}
              >
                <Coffee className="w-4 h-4" /> なごみカフェ詳細 <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </Link>
              <Link
                href="/qualification/"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm bg-white hover:scale-105 transition-transform"
                style={{ color: CRAFT.INK }}
              >
                月 1 講習会・資格詳細
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* イベント一覧 */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-[1400px] mx-auto">
        <p className="inline-flex items-center gap-2 text-xs font-bold mb-5 px-4 py-2 rounded-full" style={{ background: `${CRAFT.SKY}20`, color: "#1A6B8F" }}>
          <Tag className="w-3.5 h-3.5" /> Upcoming Events
        </p>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight mb-10">
          直近の予定。
        </h2>

        {upcoming.length === 0 ? (
          <div className="rounded-[24px] p-12 text-center text-sm opacity-60 bg-white" style={{ boxShadow: "0 6px 20px rgba(0,0,0,0.05)" }}>
            現在予定されているイベントはありません。
          </div>
        ) : (
          <ul className="space-y-4 md:space-y-5">
            {upcoming.map((event, i) => {
              const color = getCategoryColor(event.category);
              const categoryLabel = getCategoryLabel(event.category);
              return (
                <motion.li
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                >
                  <Link
                    href={`/events/${event.id}/`}
                    className="group relative grid grid-cols-1 md:grid-cols-[200px_1fr_auto] gap-5 md:gap-8 items-start md:items-center bg-white rounded-[24px] md:rounded-[28px] p-6 md:p-8 hover:-translate-y-1 transition-transform"
                    style={{ boxShadow: `0 8px 24px ${color}25` }}
                  >
                    {/* 日付 */}
                    <div className="flex md:flex-col items-baseline md:items-start gap-3 md:gap-1">
                      <div
                        className="w-1 h-8 md:h-12 hidden md:block rounded-full"
                        style={{ background: color }}
                        aria-hidden="true"
                      />
                      <p className="font-black text-3xl md:text-4xl leading-none tracking-tighter">
                        {formatDate(event.startAt).split(".").slice(1).join(".")}
                      </p>
                      <p className="text-sm font-bold opacity-60">
                        {formatDate(event.startAt).split(".")[0]} ({formatDayOfWeek(event.startAt)})
                      </p>
                      <p className="text-sm font-bold opacity-60 md:mt-1">
                        {formatTime(event.startAt)}
                        {event.endAt ? ` - ${formatTime(event.endAt)}` : null}
                      </p>
                    </div>

                    {/* メイン */}
                    <div className="md:border-l md:pl-8" style={{ borderColor: "rgba(42,31,26,0.08)" }}>
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black"
                          style={{ background: color, color: CRAFT.INK }}
                        >
                          <Tag className="w-3 h-3" />
                          {categoryLabel}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-black mb-2 leading-tight">
                        {event.title}
                      </h3>
                      <p className="text-sm opacity-70 leading-relaxed mb-3">{event.summary}</p>
                      <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs opacity-60">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {event.location}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Users className="w-3.5 h-3.5" />
                          {event.target}
                        </span>
                        <span className="inline-flex items-center gap-1 font-bold">{event.fee}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="md:text-right">
                      <span
                        className="inline-flex items-center gap-1.5 text-sm font-bold group-hover:translate-x-1 transition-transform"
                        style={{ color }}
                      >
                        詳細を見る <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}

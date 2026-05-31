import { notFound } from "next/navigation";
import Link from "next/link";
import {
  events,
  getCategoryColor,
  getCategoryLabel,
  formatDate,
  formatTime,
  formatDayOfWeek,
} from "@/data/events";
import {
  ArrowLeft,
  ArrowUpRight,
  MapPin,
  Users,
  Clock,
  Tag,
  CalendarDays,
  Banknote,
} from "lucide-react";
import { CRAFT } from "@/lib/craft";

export function generateStaticParams() {
  return events.map((e) => ({ id: e.id }));
}

type Props = { params: Promise<{ id: string }> };

export default async function EventDetail({ params }: Props) {
  const { id } = await params;
  const event = events.find((e) => e.id === id);
  if (!event) notFound();

  const color = getCategoryColor(event.category);
  const categoryLabel = getCategoryLabel(event.category);

  const metaItems = [
    {
      icon: CalendarDays,
      label: "開催日",
      value: `${formatDate(event.startAt)} (${formatDayOfWeek(event.startAt)})`,
    },
    {
      icon: Clock,
      label: "時間",
      value: event.endAt
        ? `${formatTime(event.startAt)} - ${formatTime(event.endAt)}`
        : formatTime(event.startAt),
    },
    { icon: MapPin, label: "会場", value: event.location },
    { icon: Banknote, label: "参加費", value: event.fee },
  ];

  return (
    <div style={{ background: CRAFT.BG, color: CRAFT.INK }} className="font-sans">
      {/* Hero (カテゴリ色タイル) */}
      <section className="px-6 md:px-12 pt-8 md:pt-12 pb-16 md:pb-20 max-w-[1400px] mx-auto">
        <Link
          href="/schedule/"
          className="inline-flex items-center gap-2 text-sm font-bold mb-6 px-4 py-2 rounded-full bg-white hover:scale-105 transition-transform"
          style={{ color: CRAFT.INK, boxShadow: "0 4px 14px rgba(0,0,0,0.06)" }}
        >
          <ArrowLeft className="w-4 h-4" /> スケジュール一覧に戻る
        </Link>

        <div
          className="rounded-[36px] md:rounded-[48px] p-10 md:p-16 relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`, boxShadow: `0 24px 70px ${color}40` }}
        >
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full opacity-30 blur-3xl" style={{ background: CRAFT.BG }} />
          <div className="absolute -left-12 -bottom-12 w-64 h-64 rounded-full opacity-20 blur-3xl" style={{ background: CRAFT.INK }} />
          <div className="relative">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black mb-5" style={{ background: CRAFT.INK, color: CRAFT.BG }}>
              <Tag className="w-3 h-3" /> {categoryLabel}
            </div>
            <h1 className="font-black tracking-[-0.03em] leading-[0.95] mb-6" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", color: CRAFT.INK }}>
              {event.title}
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: CRAFT.INK, opacity: 0.85 }}>
              {event.summary}
            </p>
          </div>
        </div>
      </section>

      {/* メタ情報グリッド */}
      <section className="px-6 md:px-12 py-12 md:py-16 max-w-[1400px] mx-auto">
        <div className="rounded-[28px] bg-white p-8 md:p-10" style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {metaItems.map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.label}>
                  <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest opacity-50 mb-2">
                    <Icon className="w-3.5 h-3.5" />
                    {m.label}
                  </div>
                  <p className="text-base md:text-lg font-bold leading-snug">{m.value}</p>
                </div>
              );
            })}
          </div>

          {event.capacity || event.deadlineAt ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pt-8" style={{ borderTop: "1px solid rgba(42,31,26,0.08)" }}>
              {event.capacity ? (
                <div>
                  <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest opacity-50 mb-2">
                    <Users className="w-3.5 h-3.5" /> 定員
                  </div>
                  <p className="text-base font-bold">{event.capacity} 名</p>
                </div>
              ) : null}
              {event.deadlineAt ? (
                <div>
                  <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest opacity-50 mb-2">
                    <CalendarDays className="w-3.5 h-3.5" /> 申込締切
                  </div>
                  <p className="text-base font-bold">{formatDate(event.deadlineAt)}</p>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </section>

      {/* 詳細説明 */}
      <section className="px-6 md:px-12 py-12 md:py-16 max-w-[1400px] mx-auto">
        <div className="rounded-[28px] bg-white p-8 md:p-12 max-w-3xl mx-auto" style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
          <p className="inline-flex items-center gap-2 text-xs font-bold mb-5 px-4 py-2 rounded-full" style={{ background: `${color}25`, color: CRAFT.INK }}>
            イベント詳細
          </p>
          <h2 className="text-2xl md:text-3xl font-black tracking-tighter mb-5">概要</h2>
          <p className="whitespace-pre-line leading-[1.85] opacity-80">{event.description}</p>
          <div className="mt-8 pt-8" style={{ borderTop: "1px solid rgba(42,31,26,0.08)" }}>
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest opacity-50 mb-2">
              <Users className="w-3.5 h-3.5" /> 対象
            </div>
            <p className="text-base font-bold">{event.target}</p>
          </div>
        </div>
      </section>

      {/* 申込 CTA */}
      <section className="px-6 md:px-12 py-20 md:py-32 max-w-[1400px] mx-auto">
        <div className="rounded-[36px] md:rounded-[48px] p-10 md:p-20 text-center relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${CRAFT.SUN}, ${color})` }}>
          <div className="absolute -left-20 top-10 w-72 h-72 rounded-full opacity-30 blur-2xl" style={{ background: CRAFT.LIME }} />
          <div className="absolute -right-10 bottom-0 w-72 h-72 rounded-full opacity-30 blur-2xl" style={{ background: CRAFT.SKY }} />
          <div className="relative">
            <h2 className="font-black tracking-[-0.03em] leading-[0.95] mb-6" style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)", color: CRAFT.INK }}>
              参加申込・<br />
              お問い合わせ。
            </h2>
            <p className="text-base md:text-lg opacity-85 max-w-xl mx-auto mb-10 leading-relaxed" style={{ color: CRAFT.INK }}>
              参加のお申込み・ご質問はお問い合わせよりご連絡ください。<br />
              イベント名を添えていただけるとスムーズです。
            </p>
            <div className="inline-flex flex-wrap items-center gap-3 justify-center">
              <Link
                href={`/contact/?event=${encodeURIComponent(event.id)}`}
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm hover:scale-105 transition-transform"
                style={{ background: CRAFT.INK, color: CRAFT.BG, boxShadow: "0 12px 30px rgba(42,31,26,0.4)" }}
              >
                このイベントに申込む <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </Link>
              <Link
                href="/schedule/"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-white hover:scale-105 transition-transform"
                style={{ color: CRAFT.INK }}
              >
                他のイベントを見る
              </Link>
            </div>
            {event.flyerUrl ? (
              <p className="mt-6 text-sm" style={{ color: CRAFT.INK }}>
                <a
                  href={event.flyerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 underline-offset-2 hover:underline"
                >
                  📎 チラシ PDF をダウンロード
                </a>
              </p>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}

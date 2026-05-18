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
  ArrowRight,
  MapPin,
  Users,
  Clock,
  Tag,
  CalendarDays,
  Banknote,
} from "lucide-react";

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

  return (
    <div>
      {/* ============ Hero (カテゴリ色テーマ) ============ */}
      <section
        className="px-6 md:px-10 pt-16 md:pt-24 pb-12 md:pb-16 border-b-2 border-black"
        style={{ background: color }}
      >
        <div className="max-w-5xl mx-auto">
          <Link
            href="/schedule/"
            className="inline-flex items-center gap-2 text-sm font-bold mb-6 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> スケジュール一覧に戻る
          </Link>
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black text-white text-xs font-black mb-5">
            <Tag className="w-3 h-3" /> {categoryLabel}
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            {event.title}
          </h1>
          <p className="text-base md:text-lg leading-relaxed max-w-2xl">
            {event.summary}
          </p>
        </div>
      </section>

      {/* ============ メタ情報グリッド ============ */}
      <section className="bg-white px-6 md:px-10 py-12 md:py-16 border-b border-[color:var(--color-border)]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
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
            {
              icon: Banknote,
              label: "参加費",
              value: event.fee,
            },
          ].map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.label}>
                <div className="flex items-center gap-2 text-xs font-black text-[color:var(--color-text-muted)] tracking-wider mb-2">
                  <Icon className="w-4 h-4" />
                  {m.label}
                </div>
                <p className="text-base md:text-lg font-bold leading-snug">
                  {m.value}
                </p>
              </div>
            );
          })}
        </div>

        {event.capacity || event.deadlineAt ? (
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pt-8 border-t border-[color:var(--color-border)]">
            {event.capacity && (
              <div>
                <div className="flex items-center gap-2 text-xs font-black text-[color:var(--color-text-muted)] tracking-wider mb-2">
                  <Users className="w-4 h-4" /> 定員
                </div>
                <p className="text-base font-bold">{event.capacity} 名</p>
              </div>
            )}
            {event.deadlineAt && (
              <div>
                <div className="flex items-center gap-2 text-xs font-black text-[color:var(--color-text-muted)] tracking-wider mb-2">
                  <CalendarDays className="w-4 h-4" /> 申込締切
                </div>
                <p className="text-base font-bold">{formatDate(event.deadlineAt)}</p>
              </div>
            )}
          </div>
        ) : null}
      </section>

      {/* ============ 詳細説明 ============ */}
      <section className="bg-white px-6 md:px-10 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-5">イベント詳細</h2>
          <div className="prose prose-base md:prose-lg max-w-none">
            <p className="whitespace-pre-line leading-relaxed text-[color:var(--color-text)]">
              {event.description}
            </p>
          </div>
          <div className="mt-8 pt-8 border-t border-[color:var(--color-border)]">
            <div className="flex items-center gap-2 text-xs font-black text-[color:var(--color-text-muted)] tracking-wider mb-2">
              <Users className="w-4 h-4" /> 対象
            </div>
            <p className="text-base font-bold">{event.target}</p>
          </div>
        </div>
      </section>

      {/* ============ 申込 CTA ============ */}
      <section className="bg-white px-6 md:px-10 py-16 md:py-24 border-t border-[color:var(--color-border)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black leading-tight mb-5">
            参加申込・お問い合わせ
          </h2>
          <p className="text-base md:text-lg text-[color:var(--color-text-muted)] mb-8 max-w-xl mx-auto leading-relaxed">
            参加のお申込み・ご質問は、お問い合わせフォームよりご連絡ください。
            <br />
            参加希望イベント名をお書き添えいただけるとスムーズです。
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href={`/contact/?event=${encodeURIComponent(event.id)}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FFD647] text-black font-black shadow-lg hover:scale-105 transition-transform"
            >
              このイベントに申込む <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/schedule/"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-black text-black font-bold hover:bg-black hover:text-white transition-colors"
            >
              他のイベントを見る
            </Link>
          </div>
          {event.flyerUrl && (
            <p className="mt-6 text-sm">
              <a
                href={event.flyerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[color:var(--color-text-muted)] hover:underline"
              >
                📎 チラシ PDF をダウンロード
              </a>
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

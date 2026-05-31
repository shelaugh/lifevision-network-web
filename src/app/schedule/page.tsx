import Link from "next/link";
import {
  getUpcomingEvents,
  getCategoryColor,
  getCategoryLabel,
  formatDate,
  formatTime,
  formatDayOfWeek,
} from "@/data/events";
import { ArrowRight, MapPin, Users, Tag } from "lucide-react";

export default function SchedulePage() {
  const upcoming = getUpcomingEvents();

  return (
    <div>
      {/* ============ Hero ============ */}
      <section className="bg-white px-6 md:px-10 pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto">
          <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-[color:var(--color-text-muted)] font-bold mb-4">
            Schedule
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-6">
            なごみカフェ・<br />
            講習会・<br />
            5 団体スケジュール
          </h1>
          <p className="text-base md:text-lg text-[color:var(--color-text-muted)] max-w-2xl leading-relaxed">
            月 1 回の「なごみカフェ」(午前・なんでも福祉相談室) と「月 1 講習会」(午後・2 資格単位)、5 団体の体験会・トークセッション。
            <br />
            気になるイベントから、ぜひお気軽にご参加ください。
          </p>
        </div>
      </section>

      {/* ============ イベント一覧 ============ */}
      <section className="bg-[#FAFAFA] px-6 md:px-10 py-16 md:py-20 border-t border-[color:var(--color-border)]">
        <div className="max-w-7xl mx-auto">
          {upcoming.length === 0 ? (
            <div className="text-center py-20 text-[color:var(--color-text-muted)]">
              現在予定されているイベントはありません。
            </div>
          ) : (
            <ul className="space-y-5 md:space-y-6">
              {upcoming.map((event) => {
                const color = getCategoryColor(event.category);
                const categoryLabel = getCategoryLabel(event.category);
                return (
                  <li key={event.id}>
                    <Link
                      href={`/events/${event.id}/`}
                      className="group relative grid grid-cols-1 md:grid-cols-[200px_1fr_auto] gap-6 md:gap-8 items-start md:items-center bg-white rounded-2xl p-6 md:p-8 border border-[color:var(--color-border)] hover:border-black hover:shadow-lg transition-all"
                    >
                      {/* 日付 */}
                      <div className="flex md:flex-col items-baseline md:items-start gap-3 md:gap-1">
                        <div
                          className="w-1 h-8 md:h-12 hidden md:block"
                          style={{ background: color }}
                          aria-hidden="true"
                        />
                        <p className="font-black text-3xl md:text-4xl leading-none">
                          {formatDate(event.startAt).split(".").slice(1).join(".")}
                        </p>
                        <p className="text-sm font-bold text-[color:var(--color-text-muted)]">
                          {formatDate(event.startAt).split(".")[0]} ({formatDayOfWeek(event.startAt)})
                        </p>
                        <p className="text-sm font-bold text-[color:var(--color-text-muted)] md:mt-1">
                          {formatTime(event.startAt)}
                          {event.endAt && ` - ${formatTime(event.endAt)}`}
                        </p>
                      </div>

                      {/* メイン */}
                      <div className="md:border-l md:border-[color:var(--color-border)] md:pl-8">
                        <div className="flex items-center gap-2 mb-3">
                          <span
                            className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black border-2 border-black"
                            style={{ background: color, color: "#000" }}
                          >
                            <Tag className="w-3 h-3" />
                            {categoryLabel}
                          </span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-black mb-2 group-hover:underline leading-tight">
                          {event.title}
                        </h2>
                        <p className="text-sm text-[color:var(--color-text-muted)] leading-relaxed mb-3">
                          {event.summary}
                        </p>
                        <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-[color:var(--color-text-muted)]">
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {event.location}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Users className="w-3.5 h-3.5" />
                            {event.target}
                          </span>
                          <span className="inline-flex items-center gap-1 font-bold">
                            {event.fee}
                          </span>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="md:text-right">
                        <span className="inline-flex items-center gap-1 text-sm font-black group-hover:translate-x-1 transition-transform">
                          詳細を見る <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>

      {/* ============ 月 1 セット (なごみカフェ + 講習会) ============ */}
      <section className="bg-[#A4DC4F] px-6 md:px-10 py-20 md:py-28 border-t-2 border-black border-b-2">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase font-black mb-4">
            Monthly Same-Day Schedule
          </p>
          <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">
            月 1 同日、午前なごみカフェ + 午後講習会。
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-5">
              <p className="text-[10px] font-mono uppercase tracking-widest opacity-60 mb-1">AM 10:00 — 12:00</p>
              <p className="font-black text-xl mb-1">なごみカフェ</p>
              <p className="text-sm opacity-70 leading-relaxed">なんでも福祉相談室・誰でも参加 OK・無料</p>
            </div>
            <div className="bg-white rounded-2xl p-5">
              <p className="text-[10px] font-mono uppercase tracking-widest opacity-60 mb-1">PM 13:30 — 16:30</p>
              <p className="font-black text-xl mb-1">月 1 講習会</p>
              <p className="text-sm opacity-70 leading-relaxed">2 資格どちらの単位としても認定</p>
            </div>
          </div>
          <p className="text-sm opacity-80 mb-8">
            同日開催なので、午前のみ・午後のみ・両方参加、どれも OK です。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/nagomi-cafe/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-black text-[#A4DC4F] font-black hover:scale-105 transition-transform"
            >
              なごみカフェ詳細 <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/qualification/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-black hover:scale-105 transition-transform"
            >
              月 1 講習会・資格詳細 <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

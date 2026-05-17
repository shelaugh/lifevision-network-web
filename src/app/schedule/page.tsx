export default function SchedulePage() {
  return (
    <div>
      <section className="px-4 md:px-6 pt-16 md:pt-20 pb-10 md:pb-12 text-center">
        <p className="font-[var(--font-poppins)] text-sm tracking-widest uppercase text-[color:var(--color-text-muted)] mb-3 font-bold">
          Schedule
        </p>
        <h1 className="text-4xl md:text-5xl font-black mb-4">スケジュール</h1>
        <p className="text-base md:text-lg text-[color:var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed">
          講座・イベントのスケジュールをご確認いただけます。
        </p>
      </section>

      <section className="px-4 md:px-6 py-20 text-center text-[color:var(--color-text-muted)]">
        <div className="max-w-2xl mx-auto py-16 px-8 rounded-3xl bg-gray-50">
          <p className="text-base mb-4">
            🚧 カレンダー (FullCalendar) + 個別イベントカード + 申込導線は Phase 3 で実装予定
          </p>
          <p className="text-xs">microCMS のイベント API スキーマと連動します。</p>
        </div>
      </section>
    </div>
  );
}

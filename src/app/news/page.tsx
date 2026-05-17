export default function NewsPage() {
  return (
    <div>
      <section className="px-4 md:px-6 pt-16 md:pt-20 pb-10 md:pb-12 text-center">
        <p className="font-[var(--font-poppins)] text-sm tracking-widest uppercase text-[color:var(--color-text-muted)] mb-3 font-bold">
          News
        </p>
        <h1 className="text-4xl md:text-5xl font-black mb-4">お知らせ</h1>
        <p className="text-base md:text-lg text-[color:var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed">
          活動レポート・受講者の声・講師インタビューなど、最新情報をお届けします。
        </p>
      </section>

      <section className="px-4 md:px-6 py-20 text-center text-[color:var(--color-text-muted)]">
        <div className="max-w-2xl mx-auto py-16 px-8 rounded-3xl bg-gray-50">
          <p className="text-base mb-4">
            🚧 メディア型 3 系列 (活動レポート / 受講者の声 / 講師インタビュー) は Phase 3 で実装予定
          </p>
          <p className="text-xs">microCMS の articles API から fetch + ページング表示。</p>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div>
      <section className="px-4 md:px-6 pt-16 md:pt-20 pb-10 md:pb-12 text-center">
        <p className="font-[var(--font-poppins)] text-sm tracking-widest uppercase text-[color:var(--color-text-muted)] mb-3 font-bold">
          Contact
        </p>
        <h1 className="text-4xl md:text-5xl font-black mb-4">お問い合わせ</h1>
        <p className="text-base md:text-lg text-[color:var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed">
          資格・講座・イベント・取材など、ご質問はお気軽にどうぞ。
        </p>
      </section>

      <section className="px-4 md:px-6 py-16 md:py-20">
        <div className="max-w-2xl mx-auto py-16 px-8 rounded-3xl bg-gray-50 text-center text-[color:var(--color-text-muted)]">
          <p className="text-base mb-6">
            🚧 お問い合わせフォームは Phase 3 で実装予定
          </p>
          <div className="text-sm space-y-2">
            <p>当面は以下までご連絡ください:</p>
            <p>📧 (メールアドレス未設定)</p>
            <p>📱 (LINE 公式アカウント未設定)</p>
            <p>📞 (電話番号未設定)</p>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import { Mail, Phone, MessageCircle, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div>
      {/* ============ Hero ============ */}
      <section className="bg-white px-6 md:px-10 pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto">
          <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-[color:var(--color-text-muted)] font-bold mb-4">
            Contact
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-6">
            お問い合わせ。
          </h1>
          <p className="text-base md:text-lg text-[color:var(--color-text-muted)] max-w-2xl leading-relaxed">
            資格・講習会・イベント・取材依頼など、お気軽にご連絡ください。
            <br />
            通常 2-3 営業日以内にご返信します。
          </p>
        </div>
      </section>

      {/* ============ 連絡方法 ============ */}
      <section className="bg-[#FAFAFA] px-6 md:px-10 py-20 md:py-28 border-t border-[color:var(--color-border)]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {[
              { icon: Mail, label: "メール", value: "[未設定]", hex: "#FFD647" },
              { icon: Phone, label: "電話", value: "[未設定]", hex: "#2D8BFF" },
              { icon: MessageCircle, label: "LINE 公式", value: "[未設定]", hex: "#4FC04F" },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.label} className="bg-white rounded-2xl border border-[color:var(--color-border)] p-6 md:p-8">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: c.hex }}
                  >
                    <Icon className="w-7 h-7" strokeWidth={2.2} />
                  </div>
                  <p className="text-xs font-black text-[color:var(--color-text-muted)] mb-2 tracking-wider">
                    {c.label}
                  </p>
                  <p className="text-base font-bold">{c.value}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center py-16 px-8 rounded-2xl bg-white border border-[color:var(--color-border)] text-sm text-[color:var(--color-text-muted)]">
            🚧 お問い合わせフォームは Phase 3 で実装予定
            <br />
            <br />
            連絡先情報は確定次第更新します。
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="bg-white px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black leading-tight mb-8">
            まずはスケジュールから。
          </h2>
          <p className="text-base md:text-lg text-[color:var(--color-text-muted)] mb-10 max-w-xl mx-auto leading-relaxed">
            講習会やイベントの予定をご覧いただけます。
            気になるものがあればお問い合わせください。
          </p>
          <Link
            href="/schedule/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FFD647] text-black font-black hover:scale-105 transition-transform"
          >
            スケジュールを見る <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

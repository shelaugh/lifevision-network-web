import Image from "next/image";
import Link from "next/link";
import { lvnInfo } from "@/data/lvn-info";
import { ArrowRight, BookOpen, Award, Rocket, Clock, Check, X } from "lucide-react";

const stages = [
  { no: 1, label: "知る", desc: "資格の概要・LVN で取る意義・多職種連携での活かし方を知る", icon: BookOpen },
  { no: 2, label: "取る", desc: "月 1 回の講習会に参加して単位を積み重ね、認定を受ける", icon: Award },
  { no: 3, label: "活かす", desc: "★LVN 活動デビュー — 取得後すぐに 6 活動で実践できる", icon: Rocket },
];

const qualifications = [
  {
    name: "レクリエーション\nインストラクター",
    short: "レクの基礎を、現場で活かせる形で。",
    hours: ["理論 9h", "実技 27h", "演習 15h"],
    desc: "「心を元気にする」レクリエーション支援の基礎を身につける。福祉・介護・保育・地域活動の現場で活躍。",
  },
  {
    name: "スポーツ・\nレクリエーション指導者",
    short: "誰もが楽しめるスポーツを、クリエイトする。",
    hours: ["理論 9h", "実技 36h", "演習 6h"],
    desc: "運動に親しんでいない人も含め、誰もが楽しめるスポーツ・レクの場をクリエイトする指導者。",
  },
];

const comparison = [
  { label: "両資格が取得できる", lvn: true, others: false },
  { label: "日本レクリエーション協会公認", lvn: true, others: true },
  { label: "月 1 回の定例講習会", lvn: true, others: false },
  { label: "多職種連携の現場で学べる", lvn: true, others: false },
  { label: "6 つの実践活動でデビューできる", lvn: true, others: false },
];

const faqs = [
  { q: "未経験でも取得できますか？", a: "はい、特別な資格や経験は必要ありません。LVN では現場と並走しながら学べる課程を用意しています。" },
  { q: "費用はどれくらいかかりますか？", a: "資格・受講形態によって異なります。無料相談で具体的なプランをご案内します。" },
  { q: "どちらの資格を取るか迷っています。", a: "「主に福祉・介護・保育の現場で活かしたい方」はレクリエーションインストラクター、「スポーツ寄りで活躍したい方」はスポーツ・レクリエーション指導者がおすすめです。無料相談で適性をご一緒に整理できます。" },
  { q: "両方の資格を取れますか？", a: "可能です。月 1 回の講習会はどちらの単位としても認定されるため、順次取得を目指せます。" },
  { q: "取得後、すぐに現場で活動できますか？", a: "はい。LVN は 6 つの活動 (なごみカフェ / ボドレク / Co Lab LIFE / 国際文化 / こどもパネル / my スポーツ) を運営しており、取得後すぐに「★LVN 活動デビュー」として実践できます。" },
];

export default function QualificationPage() {
  return (
    <div>
      {/* ============ Hero ============ */}
      <section className="relative h-[80vh] md:h-[90vh] min-h-[550px] overflow-hidden bg-[#1a1a1a]">
        <Image
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=2400&q=85&auto=format&fit=crop"
          alt="講習会の現場で学ぶ受講者"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
        <div className="relative h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10 text-white">
            <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-[#FFD647] font-bold mb-6">
              Qualification
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-8 max-w-4xl">
              この資格、
              <br />
              <span className="text-[#FFD647]">LVN でしか</span>
              <br />
              取れません。
            </h1>
            <p className="text-base md:text-lg max-w-2xl leading-relaxed opacity-90 mb-8">
              「レクリエーションインストラクター」と「スポーツ・レクリエーション指導者」。
              <br />
              両資格の取得課程を持つ、日本で唯一の民間団体です。
            </p>
            <Link
              href="#apply"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FFD647] text-black font-black hover:scale-105 transition-transform shadow-2xl"
            >
              無料で相談する <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ なぜ「唯一」か (黒帯) ============ */}
      <section className="bg-black text-white px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-16">
          <div>
            <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-[#FFD647] font-bold mb-4">
              Authorized by
            </p>
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              公益財団法人 日本レクリエーション協会
              <span className="text-[#FFD647]"> 公認</span>。
            </h2>
          </div>
          <div className="md:pt-4">
            <p className="text-base md:text-lg leading-relaxed text-white/80 mb-6">
              {lvnInfo.authority.description}
            </p>
            <a
              href={lvnInfo.authority.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#FFD647] hover:underline"
            >
              公益財団法人 日本レクリエーション協会 公式 <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ============ 3 段階 ============ */}
      <section className="bg-white px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-14 md:mb-20">
            <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-[color:var(--color-text-muted)] font-bold mb-4">
              Step by Step
            </p>
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              知る → 取る → 活かす。
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {stages.map((stage) => {
              const Icon = stage.icon;
              return (
                <div key={stage.no} className="border-t-2 border-black pt-6">
                  <div className="flex items-baseline gap-4 mb-4">
                    <p className="font-black text-6xl md:text-7xl leading-none">{stage.no}</p>
                    <Icon className="w-8 h-8" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black mb-3">{stage.label}</h3>
                  <p className="text-sm md:text-base leading-relaxed text-[color:var(--color-text-muted)]">
                    {stage.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 月 1 回講習会 (黄色帯) ============ */}
      <section className="bg-[#FFD647] px-6 md:px-10 py-20 md:py-28 border-y-2 border-black">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-center">
          <div className="text-center">
            <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase font-black mb-4">
              Monthly Session
            </p>
            <p className="font-black leading-none">
              <span className="block text-7xl md:text-9xl lg:text-[12rem]">月1</span>
              <span className="block text-2xl md:text-3xl mt-2">回開催</span>
            </p>
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight mb-5">
              2 資格、どちらを選んでも、
              <br />
              ここで取れる。
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-6">
              月 1 回の講習会は、レクリエーションインストラクターまたはスポーツ・レクリエーション指導者、どちらかの単位として認定されます。あなたが目指す資格を選んで参加できます。
            </p>
            <Link
              href="/schedule/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-[#FFD647] font-black hover:scale-105 transition-transform"
            >
              講習会スケジュールを見る <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ 2 資格紹介 ============ */}
      <section className="bg-white px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-14 md:mb-20">
            <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-[color:var(--color-text-muted)] font-bold mb-4">
              Public Certifications
            </p>
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              取得できる 2 つの資格。
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {qualifications.map((q) => (
              <div key={q.name} className="border-t-2 border-black pt-8">
                <h3 className="text-2xl md:text-3xl font-black mb-4 leading-tight whitespace-pre-line">
                  {q.name}
                </h3>
                <p className="text-base font-bold mb-5">{q.short}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {q.hours.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black text-white text-xs font-bold"
                    >
                      <Clock className="w-3 h-3" /> {h}
                    </span>
                  ))}
                </div>
                <p className="text-sm md:text-base leading-relaxed text-[color:var(--color-text-muted)]">
                  {q.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 比較表 ============ */}
      <section className="bg-[#FAFAFA] px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl mb-14 md:mb-16">
            <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-[color:var(--color-text-muted)] font-bold mb-4">
              LVN vs Others
            </p>
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              なぜ LVN なのか。
            </h2>
          </div>

          <div className="bg-white rounded-2xl border-2 border-black overflow-hidden">
            <div className="grid grid-cols-[1fr_90px_90px] md:grid-cols-[1fr_140px_140px] bg-black text-white font-black text-sm md:text-base">
              <div className="p-4 md:p-5">項目</div>
              <div className="p-4 md:p-5 text-center bg-[#FFD647] text-black">LVN</div>
              <div className="p-4 md:p-5 text-center">他団体</div>
            </div>
            {comparison.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[1fr_90px_90px] md:grid-cols-[1fr_140px_140px] border-t border-[color:var(--color-border)] text-sm md:text-base"
              >
                <div className="p-4 md:p-5 font-bold">{row.label}</div>
                <div className="p-4 md:p-5 text-center bg-[#FFD647]/20">
                  {row.lvn ? (
                    <Check className="w-6 h-6 mx-auto text-[#4FC04F]" strokeWidth={3} />
                  ) : (
                    <X className="w-6 h-6 mx-auto text-[color:var(--color-text-muted)]" strokeWidth={3} />
                  )}
                </div>
                <div className="p-4 md:p-5 text-center">
                  {row.others ? (
                    <Check className="w-6 h-6 mx-auto text-[color:var(--color-text-muted)]" strokeWidth={2.5} />
                  ) : (
                    <X className="w-6 h-6 mx-auto text-[color:var(--color-text-muted)]" strokeWidth={2.5} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-white px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl mb-14 md:mb-16">
            <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-[color:var(--color-text-muted)] font-bold mb-4">
              FAQ
            </p>
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              よくあるご質問。
            </h2>
          </div>

          <div className="space-y-3 border-t-2 border-black">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group border-b border-[color:var(--color-border)] py-1"
              >
                <summary className="cursor-pointer py-5 md:py-6 flex items-center justify-between gap-4 font-black text-base md:text-lg list-none [&::-webkit-details-marker]:hidden">
                  <span>{faq.q}</span>
                  <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-black text-xl group-open:rotate-45 transition-transform shrink-0">
                    +
                  </span>
                </summary>
                <div className="pb-5 md:pb-6 text-sm md:text-base leading-relaxed text-[color:var(--color-text-muted)]">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 申込 CTA ============ */}
      <section id="apply" className="bg-[#FFD647] px-6 md:px-10 py-24 md:py-32 border-t-2 border-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            あなたも、
            <br />
            指導者になる。
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            まずは無料の相談から。
            <br />
            自分に向いているか、費用や期間など、何でもお気軽にご相談ください。
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-[#FFD647] font-black hover:scale-105 transition-transform shadow-xl"
            >
              無料で相談する <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/schedule/"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-black text-black font-bold hover:bg-black hover:text-[#FFD647] transition-colors"
            >
              講習会スケジュール
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

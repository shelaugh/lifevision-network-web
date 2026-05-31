import Link from "next/link";
import { Heart, ArrowUpRight } from "lucide-react";
import { CRAFT } from "@/lib/craft";

const linkGroups = [
  {
    title: "メイン事業 (4 pillar)",
    links: [
      { href: "/nagomi-cafe/", label: "なごみカフェ" },
      { href: "/qualification/", label: "月 1 講習会・資格" },
      { href: "/activities/", label: "5 団体の活動" },
      { href: "/about/", label: "多職種連携" },
    ],
  },
  {
    title: "サイト",
    links: [
      { href: "/schedule/", label: "スケジュール" },
      { href: "/news/", label: "お知らせ" },
      { href: "/about/", label: "団体紹介" },
      { href: "/contact/", label: "お問い合わせ" },
    ],
  },
  {
    title: "サポート",
    links: [
      { href: "/privacy-policy/", label: "プライバシーポリシー" },
      { href: "/terms/", label: "利用規約" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-24 relative overflow-hidden" style={{ background: CRAFT.INK, color: CRAFT.BG }}>
      {/* atmospheric glow */}
      <div className="absolute -top-1/3 -left-1/4 w-[60%] h-[80%] rounded-full opacity-15 blur-3xl pointer-events-none" style={{ background: CRAFT.CORAL }} aria-hidden />
      <div className="absolute -bottom-1/3 -right-1/4 w-[60%] h-[80%] rounded-full opacity-15 blur-3xl pointer-events-none" style={{ background: CRAFT.LIME }} aria-hidden />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-20">
        {/* タグライン */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-black tracking-tighter leading-[0.95] mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            楽しいは、<br className="md:hidden" />
            <span style={{ background: `linear-gradient(135deg, ${CRAFT.CORAL}, ${CRAFT.SUN}, ${CRAFT.LIME})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>最高の医療。</span>
          </h2>
          <p className="text-sm md:text-base opacity-70">
            なごみカフェ + 月 1 講習会 + 5 団体活動 + 多職種連携
          </p>
        </div>

        {/* メイン */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 md:gap-12 mb-14">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-5">
              <span className="w-8 h-8 rounded-full inline-flex items-center justify-center" style={{ background: CRAFT.CORAL, color: CRAFT.BG }}>
                <Heart className="w-4 h-4 fill-current" />
              </span>
              <span className="font-black text-base leading-tight">
                ライフビジョンネット
                <span className="block text-[10px] font-medium opacity-60">NPO 法人(申請中)</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed opacity-70 max-w-md">
              月 1 のなんでも福祉相談室「なごみカフェ」と、資格単位にもなる月 1 講習会、5 団体の活動で、地域と多職種をフラットにつなぐ NPO 法人(申請中) です。
            </p>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-1.5 mt-5 px-5 py-2.5 rounded-full text-xs font-bold hover:scale-[1.03] transition-transform"
              style={{ background: CRAFT.BG, color: CRAFT.INK }}
            >
              問い合わせる <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-bold text-xs mb-4 uppercase tracking-widest opacity-60">{group.title}</h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={`${group.title}-${link.href}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* カラーバー (4 pillar 色 + 6 色) */}
        <div className="flex h-1.5 rounded-full overflow-hidden mb-6">
          <div className="flex-1" style={{ background: CRAFT.CORAL }} />
          <div className="flex-1" style={{ background: CRAFT.SUN }} />
          <div className="flex-1" style={{ background: CRAFT.LIME }} />
          <div className="flex-1" style={{ background: CRAFT.SKY }} />
          <div className="flex-1" style={{ background: CRAFT.PLUM }} />
          <div className="flex-1" style={{ background: CRAFT.VIOLET }} />
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 text-xs opacity-60">
          <p>© {new Date().getFullYear()} NPO 法人(申請中) ライフビジョンネット. All rights reserved.</p>
          <p className="font-mono tracking-widest uppercase">Craft × Pop · 4 Pillars</p>
        </div>
      </div>
    </footer>
  );
}

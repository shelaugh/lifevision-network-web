import Image from "next/image";
import Link from "next/link";

const linkGroups = [
  {
    title: "サイト",
    links: [
      { href: "/qualification/", label: "資格を取る" },
      { href: "/activities/", label: "活動紹介" },
      { href: "/about/", label: "団体紹介" },
      { href: "/schedule/", label: "スケジュール" },
      { href: "/news/", label: "お知らせ" },
    ],
  },
  {
    title: "サポート",
    links: [
      { href: "/contact/", label: "お問い合わせ" },
      { href: "/privacy-policy/", label: "プライバシーポリシー" },
      { href: "/terms/", label: "利用規約" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[color:var(--color-border)] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* タグライン */}
        <div className="text-center mb-10">
          <p className="text-lg md:text-2xl font-bold mb-3 leading-relaxed">
            多職種連携が、社会の土台に
          </p>
          <p className="text-xs md:text-sm text-[color:var(--color-text-muted)]">
            医療・福祉・保育・介護・スポーツが手を取り合う未来。
          </p>
        </div>

        {/* メイン */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="ライフビジョンネット"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <span className="font-bold text-base">ライフビジョンネット <span className="text-xs font-medium opacity-60">(NPO 法人申請中)</span></span>
            </Link>
            <p className="text-sm text-[color:var(--color-text-muted)] leading-relaxed max-w-md">
              月 1 のなんでも福祉相談室「なごみカフェ」と、資格単位にもなる月 1 講習会、5 団体の活動で、地域と多職種をフラットにつなぐ NPO 法人(申請中) です。
            </p>
          </div>
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-bold text-sm mb-3">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[color:var(--color-text-muted)] hover:text-[color:var(--color-text)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* カラーバー (LVN 8 色) */}
        <div className="flex h-1.5 rounded-full overflow-hidden mb-6">
          <div className="flex-1" style={{ background: "#FF4FB0" }} />
          <div className="flex-1" style={{ background: "#FF5A5A" }} />
          <div className="flex-1" style={{ background: "#9B5BFF" }} />
          <div className="flex-1" style={{ background: "#2D8BFF" }} />
          <div className="flex-1" style={{ background: "#B6EE5E" }} />
          <div className="flex-1" style={{ background: "#4FC04F" }} />
          <div className="flex-1" style={{ background: "#FFD647" }} />
          <div className="flex-1" style={{ background: "#FFA235" }} />
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-xs text-[color:var(--color-text-muted)]">
          <p>© {new Date().getFullYear()} NPO 法人(申請中) ライフビジョンネット. All rights reserved.</p>
          <p>関わるすべての人が幸福に暮らし、共に生きる社会の実現へ</p>
        </div>
      </div>
    </footer>
  );
}

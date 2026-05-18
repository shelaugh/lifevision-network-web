import Image from "next/image";
import Link from "next/link";
import {
  sortByPublished,
  newsList,
  getCategoryLabel,
  getCategoryColor,
  formatPublishedDate,
} from "@/data/news";
import { ArrowRight, Tag } from "lucide-react";

export default function NewsPage() {
  const list = sortByPublished(newsList);

  return (
    <div>
      {/* ============ Hero ============ */}
      <section className="bg-white px-6 md:px-10 pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto">
          <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-[color:var(--color-text-muted)] font-bold mb-4">
            News
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-6">
            お知らせ・
            <br />
            活動レポート。
          </h1>
          <p className="text-base md:text-lg text-[color:var(--color-text-muted)] max-w-2xl leading-relaxed">
            イベントのご案内、活動レポート、受講者の声、講師インタビュー。
            <br />
            LVN の最新情報をお届けします。
          </p>
        </div>
      </section>

      {/* ============ 記事一覧 ============ */}
      <section className="bg-[#FAFAFA] px-6 md:px-10 py-16 md:py-20 border-t border-[color:var(--color-border)]">
        <div className="max-w-7xl mx-auto">
          {list.length === 0 ? (
            <div className="text-center py-20 text-[color:var(--color-text-muted)]">
              現在お知らせはありません。
            </div>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {list.map((n) => {
                const color = getCategoryColor(n.category);
                const label = getCategoryLabel(n.category);
                return (
                  <li key={n.id}>
                    <Link
                      href={`/news/${n.id}/`}
                      className="group block bg-white rounded-2xl border border-[color:var(--color-border)] hover:border-black hover:shadow-lg transition-all overflow-hidden h-full"
                    >
                      {/* カバー画像 */}
                      <div className="relative aspect-[16/9] bg-gray-100 overflow-hidden">
                        {n.coverUrl ? (
                          <Image
                            src={n.coverUrl}
                            alt=""
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full" style={{ background: color }} />
                        )}
                        <div className="absolute top-3 left-3">
                          <span
                            className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black border-2 border-black"
                            style={{ background: color, color: "#000" }}
                          >
                            <Tag className="w-3 h-3" />
                            {label}
                          </span>
                        </div>
                      </div>

                      {/* 本文 */}
                      <div className="p-5 md:p-6">
                        <p className="text-xs font-bold text-[color:var(--color-text-muted)] mb-2 font-mono">
                          {formatPublishedDate(n.publishedAt)}
                        </p>
                        <h3 className="text-lg md:text-xl font-black mb-2 group-hover:underline leading-tight">
                          {n.title}
                        </h3>
                        <p className="text-sm text-[color:var(--color-text-muted)] leading-relaxed line-clamp-2">
                          {n.summary}
                        </p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}

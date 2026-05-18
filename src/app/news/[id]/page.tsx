import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  newsList,
  getCategoryLabel,
  getCategoryColor,
  formatPublishedDate,
} from "@/data/news";
import { ArrowLeft, ArrowRight, Tag } from "lucide-react";

export function generateStaticParams() {
  return newsList.map((n) => ({ id: n.id }));
}

type Props = { params: Promise<{ id: string }> };

export default async function NewsDetail({ params }: Props) {
  const { id } = await params;
  const n = newsList.find((x) => x.id === id);
  if (!n) notFound();

  const color = getCategoryColor(n.category);
  const label = getCategoryLabel(n.category);

  return (
    <div>
      {/* ============ Hero (カバー画像があれば全面・なければ色背景) ============ */}
      {n.coverUrl ? (
        <section className="relative h-[50vh] md:h-[65vh] min-h-[400px] overflow-hidden bg-[#1a1a1a]">
          <Image
            src={n.coverUrl}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
          <div className="relative h-full flex items-end">
            <div className="w-full max-w-5xl mx-auto px-6 md:px-10 pb-12 md:pb-16 text-white">
              <Link
                href="/news/"
                className="inline-flex items-center gap-2 text-sm font-bold mb-6 hover:underline opacity-90"
              >
                <ArrowLeft className="w-4 h-4" /> お知らせ一覧に戻る
              </Link>
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black border-2 border-white mb-5" style={{ background: color, color: "#000" }}>
                <Tag className="w-3 h-3" /> {label}
              </div>
              <p className="text-sm font-bold opacity-90 mb-4 font-mono">
                {formatPublishedDate(n.publishedAt)}
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight max-w-3xl">
                {n.title}
              </h1>
            </div>
          </div>
        </section>
      ) : (
        <section className="px-6 md:px-10 pt-16 md:pt-24 pb-12 md:pb-16 border-b-2 border-black" style={{ background: color }}>
          <div className="max-w-5xl mx-auto">
            <Link
              href="/news/"
              className="inline-flex items-center gap-2 text-sm font-bold mb-6 hover:underline"
            >
              <ArrowLeft className="w-4 h-4" /> お知らせ一覧に戻る
            </Link>
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black text-white text-xs font-black mb-5">
              <Tag className="w-3 h-3" /> {label}
            </div>
            <p className="text-sm font-bold mb-4 font-mono">
              {formatPublishedDate(n.publishedAt)}
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight max-w-3xl">
              {n.title}
            </h1>
          </div>
        </section>
      )}

      {/* ============ 本文 ============ */}
      <section className="bg-white px-6 md:px-10 py-16 md:py-24">
        <article className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl font-bold leading-relaxed mb-10 pb-10 border-b-2 border-black">
            {n.summary}
          </p>
          <div className="text-base md:text-lg leading-loose whitespace-pre-line text-[color:var(--color-text)]">
            {n.body}
          </div>
          {n.externalUrl && (
            <a
              href={n.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-10 text-sm font-bold underline"
            >
              関連リンクを開く <ArrowRight className="w-4 h-4" />
            </a>
          )}
        </article>
      </section>

      {/* ============ 戻る + CTA ============ */}
      <section className="bg-white px-6 md:px-10 py-16 md:py-20 border-t border-[color:var(--color-border)]">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-3 justify-center">
          <Link
            href="/news/"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-black text-black font-bold hover:bg-black hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> 一覧に戻る
          </Link>
          <Link
            href="/schedule/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FFD647] text-black font-black hover:scale-105 transition-transform"
          >
            イベントを見る <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

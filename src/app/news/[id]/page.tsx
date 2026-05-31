import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  newsList,
  getCategoryLabel,
  getCategoryColor,
  formatPublishedDate,
} from "@/data/news";
import { ArrowLeft, ArrowUpRight, Tag } from "lucide-react";
import { CRAFT } from "@/lib/craft";

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
    <div style={{ background: CRAFT.BG, color: CRAFT.INK }} className="font-sans">
      {/* Hero */}
      <section className="px-6 md:px-12 pt-8 md:pt-12 pb-16 md:pb-20 max-w-[1400px] mx-auto">
        <Link
          href="/news/"
          className="inline-flex items-center gap-2 text-sm font-bold mb-6 px-4 py-2 rounded-full bg-white hover:scale-105 transition-transform"
          style={{ color: CRAFT.INK, boxShadow: "0 4px 14px rgba(0,0,0,0.06)" }}
        >
          <ArrowLeft className="w-4 h-4" /> お知らせ一覧に戻る
        </Link>

        {n.coverUrl ? (
          <div className="relative rounded-[36px] md:rounded-[48px] overflow-hidden aspect-[16/9] md:aspect-[21/9]" style={{ background: color, boxShadow: `0 24px 70px ${color}40` }}>
            <Image
              src={n.coverUrl}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-90 mix-blend-luminosity"
            />
            <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${CRAFT.INK}80, transparent 60%)` }} />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14" style={{ color: CRAFT.BG }}>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-black mb-5" style={{ background: CRAFT.BG, color: CRAFT.INK }}>
                <Tag className="w-3 h-3" /> {label}
              </div>
              <p className="text-[10px] font-mono uppercase tracking-widest opacity-70 mb-3">
                {formatPublishedDate(n.publishedAt)}
              </p>
              <h1 className="font-black tracking-[-0.03em] leading-[0.95] max-w-3xl" style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)" }}>
                {n.title}
              </h1>
            </div>
          </div>
        ) : (
          <div
            className="rounded-[36px] md:rounded-[48px] p-10 md:p-16 relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`, boxShadow: `0 24px 70px ${color}40` }}
          >
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full opacity-30 blur-3xl" style={{ background: CRAFT.BG }} />
            <div className="relative" style={{ color: CRAFT.INK }}>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-black mb-5" style={{ background: CRAFT.INK, color: CRAFT.BG }}>
                <Tag className="w-3 h-3" /> {label}
              </div>
              <p className="text-[10px] font-mono uppercase tracking-widest opacity-70 mb-3">
                {formatPublishedDate(n.publishedAt)}
              </p>
              <h1 className="font-black tracking-[-0.03em] leading-[0.95] max-w-3xl" style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}>
                {n.title}
              </h1>
            </div>
          </div>
        )}
      </section>

      {/* 本文 */}
      <section className="px-6 md:px-12 py-12 md:py-16 max-w-[1400px] mx-auto">
        <article className="rounded-[28px] bg-white p-8 md:p-14 max-w-3xl mx-auto" style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
          <p className="text-lg md:text-xl font-bold leading-relaxed mb-8 pb-8" style={{ borderBottom: `2px solid ${color}` }}>
            {n.summary}
          </p>
          <div className="text-base md:text-lg leading-[1.95] whitespace-pre-line opacity-85">
            {n.body}
          </div>
          {n.externalUrl ? (
            <a
              href={n.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-10 text-sm font-bold px-5 py-3 rounded-full transition-transform hover:scale-105"
              style={{ background: color, color: CRAFT.INK, boxShadow: `0 8px 24px ${color}50` }}
            >
              関連リンクを開く <ArrowUpRight className="w-4 h-4" />
            </a>
          ) : null}
        </article>
      </section>

      {/* 戻る + CTA */}
      <section className="px-6 md:px-12 py-16 md:py-20 max-w-[1400px] mx-auto">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-3 justify-center">
          <Link
            href="/news/"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm bg-white hover:scale-105 transition-transform"
            style={{ color: CRAFT.INK, boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}
          >
            <ArrowLeft className="w-4 h-4" /> 一覧に戻る
          </Link>
          <Link
            href="/schedule/"
            className="group inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm hover:scale-105 transition-transform"
            style={{ background: CRAFT.INK, color: CRAFT.BG, boxShadow: "0 12px 30px rgba(42,31,26,0.4)" }}
          >
            イベントを見る <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}

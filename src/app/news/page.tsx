"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  sortByPublished,
  newsList,
  getCategoryLabel,
  getCategoryColor,
  formatPublishedDate,
} from "@/data/news";
import { Tag, Newspaper, ArrowUpRight } from "lucide-react";
import { CRAFT, EASE } from "@/lib/craft";
import { PageHero } from "@/components/craft/PageHero";

export default function NewsPage() {
  const list = sortByPublished(newsList);

  return (
    <div style={{ background: CRAFT.BG, color: CRAFT.INK }} className="font-sans">
      <PageHero
        eyebrow="News · お知らせ"
        eyebrowIcon={Newspaper}
        eyebrowColor={CRAFT.PLUM}
        title={
          <>
            お知らせ・<br />
            <span style={{ background: `linear-gradient(135deg, ${CRAFT.PLUM}, ${CRAFT.VIOLET})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>活動レポート。</span>
          </>
        }
        subtitle={
          <>
            なごみカフェ・月 1 講習会・5 団体活動からの最新情報、受講者の声、講師インタビューをお届けします。
          </>
        }
      />

      {/* 記事一覧 */}
      <section className="px-6 md:px-12 py-12 md:py-20 max-w-[1400px] mx-auto">
        {list.length === 0 ? (
          <div className="rounded-[24px] bg-white p-12 text-center text-sm opacity-60" style={{ boxShadow: "0 6px 20px rgba(0,0,0,0.05)" }}>
            現在お知らせはありません。
          </div>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
            {list.map((n, i) => {
              const color = getCategoryColor(n.category);
              const label = getCategoryLabel(n.category);
              return (
                <motion.li
                  key={n.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                  whileHover={{ y: -6 }}
                >
                  <Link
                    href={`/news/${n.id}/`}
                    className="group block bg-white rounded-[28px] overflow-hidden h-full transition-all"
                    style={{ boxShadow: `0 10px 28px ${color}25` }}
                  >
                    {/* カバー */}
                    <div className="relative aspect-[16/9] overflow-hidden" style={{ background: color }}>
                      {n.coverUrl ? (
                        <Image
                          src={n.coverUrl}
                          alt=""
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-luminosity opacity-95"
                        />
                      ) : null}
                      <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${color}40, transparent 50%)` }} />
                      <div className="absolute top-4 left-4">
                        <span
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-black"
                          style={{ background: CRAFT.INK, color: CRAFT.BG }}
                        >
                          <Tag className="w-3 h-3" />
                          {label}
                        </span>
                      </div>
                    </div>

                    {/* 本文 */}
                    <div className="p-6 md:p-7">
                      <p className="text-[10px] font-mono uppercase tracking-widest opacity-50 mb-2">
                        {formatPublishedDate(n.publishedAt)}
                      </p>
                      <h3 className="text-lg md:text-xl font-black mb-2 leading-tight">{n.title}</h3>
                      <p className="text-sm leading-relaxed opacity-70 line-clamp-2">{n.summary}</p>
                      <span className="inline-flex items-center gap-1 mt-4 text-xs font-bold group-hover:translate-x-1 transition-transform" style={{ color }}>
                        続きを読む <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}

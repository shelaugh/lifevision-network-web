"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { CRAFT } from "@/lib/craft";
import { FloatingBlobs } from "./FloatingBlobs";

/**
 * 各下層ページ共通の Craft × Pop hero.
 * - 軽量 (Hero composition は使わない・ページタイトル + 大型タイポ + 浮遊ブロブのみ)
 * - eyebrow + title + subtitle + optional gradient color
 */
export function PageHero({
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  eyebrowColor = CRAFT.CORAL,
  title,
  titleGradient,
  subtitle,
  children,
}: {
  eyebrow: string;
  eyebrowIcon?: LucideIcon;
  eyebrowColor?: string;
  title: React.ReactNode;
  titleGradient?: [string, string];
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative px-6 md:px-12 pt-12 md:pt-20 pb-16 md:pb-28 max-w-[1400px] mx-auto overflow-hidden">
      <FloatingBlobs variant="compact" />
      <div className="relative">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 text-xs font-bold mb-8 px-4 py-2 rounded-full"
          style={{ background: CRAFT.PAPER, color: eyebrowColor, boxShadow: "0 4px 14px rgba(0,0,0,0.06)" }}
        >
          {EyebrowIcon ? <EyebrowIcon className="w-3.5 h-3.5" /> : null}
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-black tracking-[-0.04em] leading-[0.95] max-w-4xl"
          style={{ fontSize: "clamp(2.5rem, 8vw, 6.5rem)" }}
        >
          {titleGradient ? (
            <span style={{ background: `linear-gradient(135deg, ${titleGradient[0]}, ${titleGradient[1]})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {title}
            </span>
          ) : (
            title
          )}
        </motion.h1>
        {subtitle ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-8 md:mt-10 text-base md:text-lg leading-[1.85] max-w-2xl opacity-80"
          >
            {subtitle}
          </motion.div>
        ) : null}
        {children}
      </div>
    </section>
  );
}

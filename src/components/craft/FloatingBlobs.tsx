"use client";

import { motion } from "framer-motion";
import { CRAFT } from "@/lib/craft";

/**
 * Craft × Pop の atmospheric BG blob 装飾。
 * 5 色の柔らかいブロブが各々の周期で浮遊。
 * 親要素は `relative overflow-hidden` 必須。
 *
 * variant:
 *   - "full"  : Hero 用・大型 5 ブロブ
 *   - "compact": section 用・小型 3 ブロブ
 */
export function FloatingBlobs({ variant = "full" }: { variant?: "full" | "compact" }) {
  if (variant === "compact") {
    return (
      <>
        <motion.div animate={{ y: [0, -18, 0], rotate: [0, 5, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 right-[5%] w-44 h-44 md:w-64 md:h-64 rounded-full blur-3xl opacity-50 pointer-events-none" style={{ background: CRAFT.SUN }} aria-hidden />
        <motion.div animate={{ y: [0, 20, 0], rotate: [0, -6, 0] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-20 left-[-5%] w-48 h-48 md:w-72 md:h-72 rounded-full blur-3xl opacity-45 pointer-events-none" style={{ background: CRAFT.LIME }} aria-hidden />
        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-1/3 left-1/2 w-36 h-36 md:w-52 md:h-52 rounded-full blur-3xl opacity-35 pointer-events-none" style={{ background: CRAFT.SKY }} aria-hidden />
      </>
    );
  }
  return (
    <>
      <motion.div animate={{ y: [0, -22, 0], rotate: [0, 6, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 right-[5%] w-52 h-52 md:w-80 md:h-80 rounded-full blur-2xl opacity-60 pointer-events-none" style={{ background: CRAFT.CORAL }} aria-hidden />
      <motion.div animate={{ y: [0, 30, 0], rotate: [0, -8, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-20 left-[-5%] w-56 h-56 md:w-96 md:h-96 rounded-full blur-3xl opacity-55 pointer-events-none" style={{ background: CRAFT.LIME }} aria-hidden />
      <motion.div animate={{ y: [0, -28, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-1/2 right-[25%] w-44 h-44 md:w-64 md:h-64 rounded-full blur-3xl opacity-50 pointer-events-none" style={{ background: CRAFT.SKY }} aria-hidden />
      <motion.div animate={{ y: [0, 18, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-32 left-[30%] w-36 h-36 md:w-52 md:h-52 rounded-full blur-3xl opacity-45 pointer-events-none" style={{ background: CRAFT.PLUM }} aria-hidden />
      <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute bottom-1/3 right-[40%] w-32 h-32 md:w-44 md:h-44 rounded-full blur-3xl opacity-40 pointer-events-none" style={{ background: CRAFT.SUN }} aria-hidden />
    </>
  );
}

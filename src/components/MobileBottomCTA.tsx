"use client";

import Link from "next/link";
import { Coffee, Mail } from "lucide-react";
import { CRAFT } from "@/lib/craft";

/**
 * モバイルのみ表示される下部固定 CTA バー。
 * Craft × Pop palette · なごみカフェ + 問い合わせ 2 ボタン。
 */
export default function MobileBottomCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden grid grid-cols-2 backdrop-blur-md" style={{ background: "rgba(255,250,240,0.95)", borderTop: "1px solid rgba(42,31,26,0.08)" }}>
      <Link
        href="/nagomi-cafe/"
        className="flex items-center justify-center gap-2 py-4 font-bold text-sm"
        style={{ background: CRAFT.LIME, color: CRAFT.INK }}
      >
        <Coffee className="w-4 h-4" strokeWidth={2.5} />
        なごみカフェ
      </Link>
      <Link
        href="/contact/"
        className="flex items-center justify-center gap-2 py-4 font-bold text-sm"
        style={{ background: CRAFT.INK, color: CRAFT.BG }}
      >
        <Mail className="w-4 h-4" />
        問い合わせ
      </Link>
    </div>
  );
}

"use client";

import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";

/**
 * モバイルのみ表示される下部固定 CTA バー。
 * SOU GROUP 流: LINE / メール 2 ボタン。
 */
export default function MobileBottomCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden grid grid-cols-2 border-t-2 border-black">
      <Link
        href="/contact/"
        className="flex items-center justify-center gap-2 bg-black text-white py-4 font-black text-sm"
      >
        <Mail className="w-4 h-4" />
        お問い合わせ
      </Link>
      <Link
        href="/qualification/"
        className="flex items-center justify-center gap-2 bg-[#FFD647] text-black py-4 font-black text-sm"
      >
        <MessageCircle className="w-4 h-4" />
        資格相談
      </Link>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { Heart, ArrowUpRight } from "lucide-react";
import { CRAFT } from "@/lib/craft";

const navItems = [
  { href: "/nagomi-cafe/", label: "なごみカフェ" },
  { href: "/qualification/", label: "月 1 講習会" },
  { href: "/activities/", label: "5 団体活動" },
  { href: "/about/", label: "団体" },
  { href: "/schedule/", label: "スケジュール" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md" style={{ background: "rgba(255,250,240,0.85)", borderBottom: "1px solid rgba(42,31,26,0.06)" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4 md:py-5 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="font-black text-lg tracking-tight inline-flex items-center gap-1.5 shrink-0" style={{ color: CRAFT.INK }}>
          <span className="w-8 h-8 rounded-full inline-flex items-center justify-center" style={{ background: CRAFT.CORAL, color: CRAFT.BG }}>
            <Heart className="w-4 h-4 fill-current" />
          </span>
          <span className="hidden sm:inline-block leading-tight">
            ライフビジョンネット
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 rounded-full text-sm font-medium hover:bg-black/5 transition-colors"
              style={{ color: CRAFT.INK }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-2">
          <Link
            href="/contact/"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold hover:scale-[1.03] transition-transform"
            style={{ background: CRAFT.INK, color: CRAFT.BG }}
          >
            問い合わせ <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <button
            type="button"
            aria-label="メニューを開く"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            style={{ color: CRAFT.INK }}
          >
            <span className={`block w-6 h-0.5 bg-current transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open ? (
        <nav className="lg:hidden border-t" style={{ borderColor: "rgba(42,31,26,0.06)", background: CRAFT.BG }}>
          <ul className="max-w-[1400px] mx-auto px-6 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 px-3 rounded-2xl font-bold hover:bg-black/5"
                  style={{ color: CRAFT.INK }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact/"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-1.5 py-3.5 px-3 mt-2 rounded-full text-center font-bold text-sm"
                style={{ background: CRAFT.INK, color: CRAFT.BG }}
              >
                問い合わせ <ArrowUpRight className="w-4 h-4" />
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/qualification/", label: "資格を取る", emphasis: true },
  { href: "/activities/", label: "活動紹介" },
  { href: "/about/", label: "団体紹介" },
  { href: "/schedule/", label: "スケジュール" },
  { href: "/news/", label: "お知らせ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[color:var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.png"
            alt="Life Vision NetWork"
            width={48}
            height={48}
            priority
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />
          <span className="hidden sm:inline-block font-bold text-sm md:text-base leading-tight">
            Life Vision <br className="md:hidden" />
            NetWork
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-[color:var(--color-lvn-blue)] ${
                item.emphasis ? "text-[color:var(--color-lvn-blue)]" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA — always visible (ヘッダー固定 CTA) */}
        <div className="flex items-center gap-3">
          <Link
            href="/qualification/#apply"
            className="hidden sm:inline-flex items-center px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-[#FFD647] text-black text-sm font-black hover:scale-[1.03] transition-transform"
          >
            資格を取得する
          </Link>
          <button
            type="button"
            aria-label="メニューを開く"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <span className={`block w-6 h-0.5 bg-current transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="lg:hidden border-t border-[color:var(--color-border)] bg-white">
          <ul className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 px-2 rounded-lg font-medium hover:bg-gray-50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/qualification/#apply"
                onClick={() => setOpen(false)}
                className="block py-3 px-2 mt-2 rounded-full bg-[#FFD647] text-black text-center font-black"
              >
                資格を取得する
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

import type { Metadata } from "next";
import { Zen_Maru_Gothic, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomCTA from "@/components/MobileBottomCTA";

const zenMaru = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-zen-maru",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "ライフビジョンネット | NPO 法人(申請中)",
  description:
    "月 1 のなんでも福祉相談室「なごみカフェ」と、資格単位にもなる月 1 講習会、5 団体の活動で、地域と多職種をフラットにつなぐ NPO 法人(申請中) ライフビジョンネット。",
  // Phase 1-4 仮公開期間は検索エンジンに載せない (Phase 5 本公開時に外す)
  robots: { index: false, follow: false },
  openGraph: {
    title: "ライフビジョンネット",
    description:
      "なごみカフェ + 月 1 講習会 + 5 団体活動 + 多職種連携 ── 地域と多職種をつなぐ NPO 法人(申請中)。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${zenMaru.variable} ${poppins.variable} min-h-full flex flex-col pb-14 md:pb-0`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileBottomCTA />
      </body>
    </html>
  );
}

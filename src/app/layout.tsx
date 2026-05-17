import type { Metadata } from "next";
import { Zen_Maru_Gothic, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  title: "Life Vision NetWork (LVN) | 一般社団法人",
  description:
    "関わるすべての人が幸福に暮らし、共に生きる社会の実現へ。多職種連携 × レクリエーションで「心を元気にする」社会を目指す一般社団法人ライフビジョンネットワーク。",
  openGraph: {
    title: "Life Vision NetWork (LVN)",
    description:
      "関わるすべての人が幸福に暮らし、共に生きる社会の実現へ。",
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
      <body className={`${zenMaru.variable} ${poppins.variable} min-h-full flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

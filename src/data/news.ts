/**
 * お知らせ・活動レポートデータ (SSOT)。
 * Phase 3 で microCMS に移植する想定。
 */

export type NewsCategory =
  | "announcement"   // お知らせ
  | "report"         // 活動レポート
  | "voice"          // 受講者の声
  | "interview";     // 講師インタビュー

export type News = {
  id: string;
  title: string;
  publishedAt: string; // ISO 8601
  category: NewsCategory;
  /** カバー画像 URL (Unsplash 等・任意) */
  coverUrl?: string;
  /** 一覧カード用要約 */
  summary: string;
  /** 詳細本文 (Markdown 風プレーンテキスト・改行 OK) */
  body: string;
  /** 関連リンク・任意 */
  externalUrl?: string;
};

export const newsList: News[] = [
  {
    id: "2026-05-monthly-session-info",
    title: "2026 年 6 月 指導者資格講習会のご案内",
    publishedAt: "2026-05-18T10:00:00+09:00",
    category: "announcement",
    coverUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=85&auto=format&fit=crop",
    summary: "6 月 22 日 (月) に、指導者資格講習会を開催します。両資格どちらの単位としても認定されます。",
    body: "2026 年 6 月の指導者資格講習会のご案内です。\n\n■ 日時: 6 月 22 日 (月) 10:00 - 17:00\n■ 内容: 理論 + 実技演習\n■ 認定: レクリエーションインストラクター / スポーツ・レクリエーション指導者 (どちらかの単位として認定)\n\n初参加・経験者問わず歓迎。事前のお申込みが必要です。詳細はスケジュールページからご確認ください。",
  },
  {
    id: "2026-05-bodorec-report",
    title: "5 月のボドレク体験会レポート",
    publishedAt: "2026-05-15T15:00:00+09:00",
    category: "report",
    coverUrl: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1600&q=85&auto=format&fit=crop",
    summary: "5 月 11 日のボドレク体験会を開催しました。25 名のご参加、ありがとうございました。",
    body: "5 月 11 日に開催した「ボドレク体験会」のレポートです。\n\n会場には介護施設の職員さんや保育士さんなど、25 名にご参加いただきました。今回は協力型ボードゲーム 3 種類を中心に体験。「現場ですぐ使えそう」「利用者さんの反応が想像できた」といった声を多くいただきました。\n\n次回は 6 月 8 日 (日) 開催予定です。ご興味のある方はお気軽にご参加ください。",
  },
  {
    id: "2026-04-graduate-voice",
    title: "受講者の声: 介護現場で活きる、レクの力",
    publishedAt: "2026-05-10T12:00:00+09:00",
    category: "voice",
    coverUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600&q=85&auto=format&fit=crop",
    summary: "「資格を取って、現場での会話が変わりました」— 介護施設勤務 / 30 代女性 / レクリエーションインストラクター取得。",
    body: "介護施設で働く 30 代女性 (匿名希望) の方から、資格取得後の変化についてお話を伺いました。\n\nー LVN で資格を取ろうと思ったきっかけは?\nー 利用者さんとのコミュニケーションに、もう一つ引き出しが欲しかったからです。施設長から「レクの資格があると現場で活きるよ」と聞いて、調べたら LVN だけが両方の資格を扱っていて。月 1 回の通学なら無理なく続けられそうだと思いました。\n\nー 資格取得後、現場での変化は?\nー 利用者さんとの会話が増えました。「今日は何をしましょうか」と一緒に選ぶことができるようになって、その日のレクの内容も豊かになりました。何より、私自身が現場を楽しめるようになったのが大きいです。",
  },
  {
    id: "2026-04-multidisciplinary-collab",
    title: "Co Lab LIFE: 多職種連携トークセッションを開催しました",
    publishedAt: "2026-05-03T14:00:00+09:00",
    category: "report",
    coverUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=85&auto=format&fit=crop",
    summary: "医療・福祉・保育・介護・スポーツの 5 領域から、それぞれの現場感を共有する場が生まれました。",
    body: "Co Lab LIFE では「『楽しい』を支援にどう組み込むか」をテーマに、5 つの専門領域の方々がオンラインで対話する場を持ちました。\n\n医療現場からは「楽しさは治療効果と直結している実感がある」、福祉現場からは「『指導』ではなく『共にいる』姿勢の重要性」、保育現場からは「遊びの中に学びが自然に組み込まれている」など、それぞれの視点が交差する 2 時間でした。\n\n次回は 6 月 29 日 (月) 19:00 開催予定。テーマは継続して『楽しい』を深掘りします。",
  },
  {
    id: "2026-04-instructor-interview",
    title: "講師インタビュー: 「現場で困っている人を、一人でも減らしたい」",
    publishedAt: "2026-04-25T11:00:00+09:00",
    category: "interview",
    coverUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1600&q=85&auto=format&fit=crop",
    summary: "LVN の主任講師にインタビュー。「資格は通過点。現場で活かせる支援者を育てたい」と語る。",
    body: "LVN で 5 年間講師を務める主任講師の方にインタビュー。\n\nー 講師として大切にしていることは?\nー 「資格を取ること」は通過点で、ゴールではない、ということです。受講者の方が現場に戻ったときに、利用者さんや子どもたちと向き合える支援者になってもらえるよう、知識だけではなく「考える力」を育てたいと思っています。\n\nー LVN ならではの特徴は?\nー 多職種連携の現場で実際に学べるのが最大の特徴です。教室の中だけで学ぶのではなく、6 つの活動の現場に入って、医療職・福祉職・保育士・介護職・スポーツ指導者と一緒に動く。これは他の団体ではできないと思います。",
  },
  {
    id: "2026-04-spring-session-announcement",
    title: "春の特別講習会のお知らせ",
    publishedAt: "2026-04-15T09:00:00+09:00",
    category: "announcement",
    coverUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1600&q=85&auto=format&fit=crop",
    summary: "5 月の月例講習会は、春の屋外レクリエーション特別編として実施します。",
    body: "5 月の指導者資格講習会は、屋外レクリエーションの特別編として実施します。\n\n屋外での活動は気分のリフレッシュと身体活動を同時に提供できる、レクリエーションの中でも特に価値の高い分野です。雨天時は屋内プログラムに切り替えますので、安心してご参加ください。\n\n参加お申込みは、お問い合わせフォームよりお願いします。",
  },
];

// =============================
// Utility
// =============================

const categoryLabelMap: Record<NewsCategory, string> = {
  announcement: "お知らせ",
  report: "活動レポート",
  voice: "受講者の声",
  interview: "講師インタビュー",
};

const categoryColorMap: Record<NewsCategory, string> = {
  announcement: "#FFD647",
  report: "#4FC04F",
  voice: "#FF4FB0",
  interview: "#2D8BFF",
};

export function getCategoryLabel(c: NewsCategory): string {
  return categoryLabelMap[c];
}

export function getCategoryColor(c: NewsCategory): string {
  return categoryColorMap[c];
}

export function sortByPublished(ns: News[]): News[] {
  return [...ns].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getLatestNews(limit = 3): News[] {
  return sortByPublished(newsList).slice(0, limit);
}

export function formatPublishedDate(iso: string): string {
  const d = new Date(iso);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

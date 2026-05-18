/**
 * イベント・講習会データ (SSOT)。
 * Phase 3 で microCMS に移植する想定。スキーマはそのまま microCMS の
 * `events` API スキーマに対応できるよう設計。
 */

import { activities } from "./activities";

export type EventCategory =
  | "kousyukai" // 月1回の指導者資格講習会
  | "nagomi-cafe"
  | "bodorec"
  | "co-lab-life"
  | "international-culture"
  | "kodomo-panel"
  | "my-sports";

export type Event = {
  /** URL slug 兼 ID */
  id: string;
  /** タイトル */
  title: string;
  /** 開始日時 (ISO 8601) */
  startAt: string;
  /** 終了日時 (ISO 8601・省略可) */
  endAt?: string;
  /** 場所 */
  location: string;
  /** カテゴリ */
  category: EventCategory;
  /** 短い説明 (一覧カードに表示) */
  summary: string;
  /** 詳細説明 (詳細ページに表示・改行 OK) */
  description: string;
  /** 対象者 */
  target: string;
  /** 定員 */
  capacity?: number;
  /** 参加費 (例: "無料" / "¥3,000") */
  fee: string;
  /** チラシ PDF (任意) */
  flyerUrl?: string;
  /** 申込締切 (ISO 8601・任意) */
  deadlineAt?: string;
  /** おすすめフラグ (TOP に出る) */
  featured?: boolean;
};

export const events: Event[] = [
  // === 月 1 回の指導者資格講習会 (3 ヶ月分) ===
  {
    id: "kousyukai-2026-06",
    title: "2026 年 6 月 指導者資格講習会",
    startAt: "2026-06-22T10:00:00+09:00",
    endAt: "2026-06-22T17:00:00+09:00",
    location: "[会場未定]",
    category: "kousyukai",
    summary: "両資格のどちらの単位としても認定される、月 1 回の定例講習会。",
    description:
      "レクリエーションインストラクター / スポーツ・レクリエーション指導者、どちらかの資格取得に向けた単位として認定されます。お申込時に取得を目指す資格をお選びください。\n\n午前: 理論 (心を元気にする支援の基礎)\n午後: 実技演習 (現場で使えるアクティビティ)\n\n初参加・経験者問わず歓迎。",
    target: "資格取得を目指す方 / 興味のある方",
    capacity: 30,
    fee: "¥[金額未定]",
    featured: true,
  },
  {
    id: "kousyukai-2026-07",
    title: "2026 年 7 月 指導者資格講習会",
    startAt: "2026-07-27T10:00:00+09:00",
    endAt: "2026-07-27T17:00:00+09:00",
    location: "[会場未定]",
    category: "kousyukai",
    summary: "両資格のどちらの単位としても認定される、月 1 回の定例講習会。",
    description:
      "7 月の講習会テーマ: 屋外レクリエーション。\n\nレクリエーションインストラクター / スポーツ・レクリエーション指導者、どちらかの資格取得に向けた単位として認定されます。",
    target: "資格取得を目指す方 / 興味のある方",
    capacity: 30,
    fee: "¥[金額未定]",
  },
  {
    id: "kousyukai-2026-08",
    title: "2026 年 8 月 指導者資格講習会",
    startAt: "2026-08-24T10:00:00+09:00",
    endAt: "2026-08-24T17:00:00+09:00",
    location: "[会場未定]",
    category: "kousyukai",
    summary: "両資格のどちらの単位としても認定される、月 1 回の定例講習会。",
    description:
      "8 月の講習会テーマ: ボードゲーム×多世代交流。\n\nレクリエーションインストラクター / スポーツ・レクリエーション指導者、どちらかの資格取得に向けた単位として認定されます。",
    target: "資格取得を目指す方 / 興味のある方",
    capacity: 30,
    fee: "¥[金額未定]",
  },

  // === 6 活動のイベント (サンプル) ===
  {
    id: "nagomi-cafe-2026-06",
    title: "なごみカフェ 6 月",
    startAt: "2026-06-15T14:00:00+09:00",
    endAt: "2026-06-15T16:30:00+09:00",
    location: "[地域コミュニティスペース]",
    category: "nagomi-cafe",
    summary: "誰でも気軽に立ち寄れる、月 1 回の地域の居場所。",
    description:
      "地域にお住まいの方なら、年齢・所属問わずどなたでも参加できます。お茶を飲みながらのんびりおしゃべりするだけでも OK。\n\nレクリエーション活動 (お好きなものに任意参加) も並行開催します。",
    target: "地域にお住まいの方 (年齢問わず)",
    fee: "無料 (お茶代 ¥200)",
    featured: true,
  },
  {
    id: "bodorec-2026-06",
    title: "ボドレク体験会 6 月",
    startAt: "2026-06-08T13:00:00+09:00",
    endAt: "2026-06-08T16:00:00+09:00",
    location: "[会場未定]",
    category: "bodorec",
    summary: "ボードゲームを使ったレクリエーション活動を体験できます。",
    description:
      "福祉現場のニーズを汲んで開発・選定したボードゲームを実際に体験できる会。介護・福祉・保育の現場で使えるレクリエーションのヒントが見つかります。\n\n初心者大歓迎・経験豊富なスタッフがサポートします。",
    target: "福祉・介護・保育関係者 / 興味のある方",
    capacity: 20,
    fee: "¥1,500",
  },
  {
    id: "co-lab-life-2026-06",
    title: "Co Lab LIFE トークセッション",
    startAt: "2026-06-29T19:00:00+09:00",
    endAt: "2026-06-29T21:00:00+09:00",
    location: "[オンライン / 会場ハイブリッド]",
    category: "co-lab-life",
    summary: "多職種が交わり、新しい支援のあり方を語り合う場。",
    description:
      "医療・福祉・保育・介護・スポーツの専門家が、テーマを決めて共創的に語り合うオープンな対話の場。\n\n6 月のテーマ: 「『楽しい』を支援にどう組み込むか」",
    target: "多職種連携に関心のある専門職 / 学生 / 一般",
    fee: "¥1,000 (オンライン無料)",
    featured: true,
  },
  {
    id: "kodomo-panel-2026-07",
    title: "こどもパネル夏休み特別企画",
    startAt: "2026-07-21T10:00:00+09:00",
    endAt: "2026-07-21T15:00:00+09:00",
    location: "[公民館]",
    category: "kodomo-panel",
    summary: "こどもの声から、こどものための社会を考える。",
    description:
      "小学生 〜 中学生がパネリストとして登壇し、自分たちの社会に対する考えを発表する場。大人は聞き手として参加します。",
    target: "小学生〜中学生 (発表者) / 大人 (聞き手)",
    capacity: 40,
    fee: "無料",
  },
  {
    id: "my-sports-2026-06",
    title: "my スポーツ体験デー",
    startAt: "2026-06-14T10:00:00+09:00",
    endAt: "2026-06-14T15:00:00+09:00",
    location: "[体育館 / 屋外グラウンド]",
    category: "my-sports",
    summary: "運動が苦手でも、自分のペースで楽しめるスポーツ体験。",
    description:
      "「運動はちょっと…」という方でも安心して参加できる、ゆるやかなスポーツ体験会。種目はお好きなものを選べます。\n\n用意する種目: ニュースポーツ、軽い球技、ストレッチ、お散歩 etc.",
    target: "どなたでも (運動に苦手意識のある方歓迎)",
    fee: "無料",
  },
];

// =============================
// Utility
// =============================

const categoryColorMap: Record<EventCategory, string> = {
  kousyukai: "#FFD647",
  "nagomi-cafe": "#B6EE5E",
  bodorec: "#FFD647",
  "co-lab-life": "#2D8BFF",
  "international-culture": "#9B5BFF",
  "kodomo-panel": "#FF4FB0",
  "my-sports": "#FF5A5A",
};

const categoryLabelMap: Record<EventCategory, string> = {
  kousyukai: "指導者資格講習会",
  "nagomi-cafe": "なごみカフェ",
  bodorec: "ボドレク",
  "co-lab-life": "Co Lab LIFE",
  "international-culture": "国際文化",
  "kodomo-panel": "こどもパネル",
  "my-sports": "my スポーツ",
};

export function getCategoryColor(category: EventCategory): string {
  return categoryColorMap[category];
}

export function getCategoryLabel(category: EventCategory): string {
  return categoryLabelMap[category];
}

/** 活動 slug (activities.ts と統一) を返す。kousyukai は null。 */
export function getActivitySlug(category: EventCategory): string | null {
  if (category === "kousyukai") return null;
  return activities.find((a) => a.slug === category)?.slug ?? null;
}

/** 開催日順 (昇順) にソート */
export function sortByDate(es: Event[]): Event[] {
  return [...es].sort((a, b) => a.startAt.localeCompare(b.startAt));
}

/** 現時刻以降のイベントを返す (デプロイ時点で固定) */
export function getUpcomingEvents(): Event[] {
  const now = new Date().toISOString();
  return sortByDate(events.filter((e) => e.startAt >= now));
}

/** TOP に出す featured かつ upcoming な 3 件 */
export function getFeaturedUpcoming(limit = 3): Event[] {
  const upcoming = getUpcomingEvents();
  const featured = upcoming.filter((e) => e.featured);
  return featured.length >= limit ? featured.slice(0, limit) : upcoming.slice(0, limit);
}

/** 日付フォーマット (YYYY.MM.DD) */
export function formatDate(iso: string): string {
  const d = new Date(iso);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

/** 時刻フォーマット (HH:mm) */
export function formatTime(iso: string): string {
  const d = new Date(iso);
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}

/** 曜日 (日月火...) */
export function formatDayOfWeek(iso: string): string {
  const days = ["日", "月", "火", "水", "木", "金", "土"];
  return days[new Date(iso).getDay()];
}

export type Activity = {
  slug: string;
  name: string;
  tagline: string;
  color: string; // CSS variable name
  hex: string;
};

/**
 * 5 団体の活動 (NPO 法人ライフビジョンネット連携)
 *
 * 2026-05-31: なごみカフェは「なんでも福祉相談室」として 4 pillar の独立軸に昇格。
 * 活動一覧からは外し、メインページ上は専用セクションで扱う。
 */
export const activities: Activity[] = [
  {
    slug: "bodorec",
    name: "ボドレク",
    tagline: "ボードゲームで広げるレクリエーションの可能性",
    color: "--color-lvn-yellow",
    hex: "#FFD647",
  },
  {
    slug: "co-lab-life",
    name: "Co Lab LIFE",
    tagline: "多職種が交わり、新しい支援を生み出す共創の場",
    color: "--color-lvn-blue",
    hex: "#2D8BFF",
  },
  {
    slug: "international-culture",
    name: "国際文化",
    tagline: "国境を越えて、文化を通じてつながる",
    color: "--color-lvn-purple",
    hex: "#9B5BFF",
  },
  {
    slug: "kodomo-panel",
    name: "こどもパネル",
    tagline: "こどもの声から、こどものための社会を",
    color: "--color-lvn-pink",
    hex: "#FF4FB0",
  },
  {
    slug: "my-sports",
    name: "my スポーツ",
    tagline: "自分のペースで、自分らしいスポーツを楽しむ",
    color: "--color-lvn-red",
    hex: "#FF5A5A",
  },
];

export type Activity = {
  slug: string;
  name: string;
  tagline: string;
  color: string; // CSS variable name
  hex: string;
};

export const activities: Activity[] = [
  {
    slug: "nagomi-cafe",
    name: "なごみカフェ",
    tagline: "誰でも気軽に立ち寄れる、地域の居場所",
    color: "--color-lvn-lime",
    hex: "#B6EE5E",
  },
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

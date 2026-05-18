/**
 * LVN 法人情報・USP・実績の SSOT。
 * 数値 placeholder は Phase 3 でオーナー確認後に実数差し替え。
 */

export const lvnInfo = {
  legalName: "一般社団法人 Life Vision NetWork",
  abbreviation: "LVN",
  established: "2024", // TODO: 実際の設立年確認
  address: "[所在地未設定]", // TODO: 実住所
  phone: "[電話番号未設定]",
  email: "[メールアドレス未設定]",

  // USP (Unique Selling Point) — サイト全体で繰り返し強調する核
  usp: {
    headline: "日本で唯一。",
    subline:
      "「レクリエーションインストラクター」と「スポーツ・レクリエーション指導者」の2資格が取得できる、唯一の民間団体です。",
    short: "2 資格が取れる唯一の民間団体",
  },

  // 実績 (placeholder — オーナー確認後に実数差し替え)
  stats: [
    { label: "唯一の民間団体", value: "1", suffix: "", note: "2 資格取得可能" },
    { label: "取得可能資格", value: "2", suffix: "種", note: "公認指導者資格" },
    { label: "活動領域", value: "6", suffix: "つ", note: "多職種連携" },
    { label: "連携専門領域", value: "5", suffix: "職種", note: "医療/福祉/保育/介護/スポーツ" },
  ],

  // 講習会 (月 1 回・両資格どちらの単位としても認定 = LVN の大きな特徴)
  monthlySession: {
    frequency: "月 1 回",
    feature: "両資格どちらの単位としても取得可能",
    benefit: "月 1 回の講習会は、「レクリエーションインストラクター」または「スポーツ・レクリエーション指導者」、どちらかの単位として認定されます。あなたが目指す資格を選んで参加できます。",
  },

  // 認証根拠 (なぜ「唯一」と言えるか)
  authority: {
    source: "公益財団法人 日本レクリエーション協会",
    sourceUrl: "https://shikaku.recreation.or.jp/become/",
    description:
      "両資格は公益財団法人日本レクリエーション協会の公認指導者資格。LVN は両資格の取得課程を運営する唯一の民間団体として認定されています。",
  },

  // SNS placeholder
  social: {
    twitter: "",
    instagram: "",
    facebook: "",
    line: "",
    youtube: "",
  },
};

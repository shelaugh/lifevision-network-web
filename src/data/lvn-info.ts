/**
 * NPO 法人ライフビジョンネット (申請中) 情報の SSOT。
 *
 * 2026-05-31 大幅再構築:
 *   旧: 一般社団法人 Life Vision NetWork (LVN・親組織)
 *   新: NPO 法人(申請中) ライフビジョンネット (本サイトの主体)
 *
 * 主軸 4 pillar:
 *   1. 月 1 講習会 (資格単位認定)
 *   2. なごみカフェ (なんでも福祉相談室・講習会の午前中に開催)
 *   3. 5 団体の活動 (ボドレク / Co Lab LIFE / 国際文化 / こどもパネル / my スポーツ)
 *   4. 多職種連携 (5 職種: 医療 / 福祉 / 保育 / 介護 / スポーツ)
 *
 * 数値 / 連絡先 placeholder は Phase 3 でオーナー確認後に実数差し替え。
 */

export const lvnInfo = {
  legalName: "NPO 法人ライフビジョンネット",
  legalNameWithStatus: "NPO 法人(申請中) ライフビジョンネット",
  abbreviation: "LVN",
  status: "申請中", // NPO 法人認証申請中・正式認証後に空文字へ
  established: "2024", // TODO: 任意団体としての設立年確認
  address: "[所在地未設定]", // TODO: 実住所
  phone: "[電話番号未設定]",
  email: "[メールアドレス未設定]",

  // メインメッセージ — 4 pillar の核
  usp: {
    headline: "楽しいは、最高の医療。",
    subline:
      "月 1 の福祉相談室「なごみカフェ」と、資格単位にもなる月 1 講習会、5 団体の活動で、地域と多職種をつなぐ NPO 法人(申請中) です。",
    short: "なごみカフェ + 月 1 講習会 + 5 団体 + 多職種連携",
  },

  // 4 pillar (サイト全体の骨格)
  pillars: [
    {
      key: "kousyukai",
      label: "月 1 講習会",
      tag: "資格単位認定",
      short: "資格の単位にもなる、月 1 の学びの場",
      detail:
        "「レクリエーションインストラクター」または「スポーツ・レクリエーション指導者」、どちらかの単位として認定される月 1 回の講習会。受講申込みは初回 OK・両資格に対応。",
    },
    {
      key: "nagomi-cafe",
      label: "なごみカフェ",
      tag: "なんでも福祉相談室",
      short: "月 1 講習会の午前中に開催する、誰でも来れる福祉相談室",
      detail:
        "暮らしの中の困りごとを気軽に話せる「なんでも福祉相談室」。月 1 講習会と同日午前に開催し、当事者・家族・支援者がフラットに集まり、医療・福祉・保育・介護・スポーツの専門職と話せる地域の居場所。",
    },
    {
      key: "five-groups",
      label: "5 団体の活動",
      tag: "現場のレクリエーション",
      short: "ボドレク / Co Lab LIFE / 国際文化 / こどもパネル / my スポーツ",
      detail:
        "それぞれの団体が、それぞれの現場で。ボードゲーム、共創ラボ、国際文化、こどもパネル、my スポーツ — 5 つの団体が連携し、地域のすき間にレクリエーションを届ける。",
    },
    {
      key: "multi-professional",
      label: "多職種連携",
      tag: "5 職種が交わる",
      short: "医療・福祉・保育・介護・スポーツが、ひとつの場で",
      detail:
        "5 つの職種が一つの場で交わるとき、新しい支援が生まれる。なごみカフェも講習会も、5 団体活動も、すべて多職種連携の現場として設計しています。",
    },
  ],

  // 実績 (placeholder — オーナー確認後に実数差し替え)
  stats: [
    { label: "月 1 開催", value: "月1", suffix: "", note: "なごみカフェ + 講習会" },
    { label: "団体の活動", value: "5", suffix: "団体", note: "現場のレクリエーション" },
    { label: "連携専門領域", value: "5", suffix: "職種", note: "医療/福祉/保育/介護/スポーツ" },
    { label: "資格対応", value: "2", suffix: "資格", note: "公認指導者資格の単位認定" },
  ],

  // 講習会 (4 pillar の 1 つ・詳細)
  monthlySession: {
    frequency: "月 1 回",
    feature: "両資格どちらの単位としても取得可能",
    benefit:
      "月 1 回の講習会は、「レクリエーションインストラクター」または「スポーツ・レクリエーション指導者」、どちらかの単位として認定されます。同日午前にはなごみカフェ (なんでも福祉相談室) も開催。学びと地域支援が一日で繋がります。",
  },

  // なごみカフェ (4 pillar の 1 つ・詳細)
  nagomiCafe: {
    name: "なごみカフェ",
    subtitle: "なんでも福祉相談室",
    schedule: "月 1 回・月 1 講習会と同日午前に開催",
    description:
      "暮らしの困りごと、進路の悩み、家族のこと、専門職に聞きたいこと ── 誰でも気軽に立ち寄れて、フラットに話せる地域の福祉相談室です。当事者・家族・支援者・専門職が同じテーブルにつき、月 1 講習会の午前中に開いています。",
    color: "#A4DC4F",
  },

  // 資格情報
  authority: {
    source: "公益財団法人 日本レクリエーション協会",
    sourceUrl: "https://shikaku.recreation.or.jp/become/",
    description:
      "「レクリエーションインストラクター」「スポーツ・レクリエーション指導者」はいずれも公益財団法人日本レクリエーション協会の公認指導者資格。本団体の月 1 講習会は、両資格どちらの単位としても認定されます。",
  },

  // 多職種連携 (5 職種)
  professions: [
    { key: "medical",   label: "医療",     color: "#FF5A3D" },
    { key: "welfare",   label: "福祉",     color: "#FFC93C" },
    { key: "childcare", label: "保育",     color: "#A4DC4F" },
    { key: "care",      label: "介護",     color: "#5DC9F2" },
    { key: "sports",    label: "スポーツ", color: "#E963A8" },
  ],

  // SNS placeholder
  social: {
    twitter: "",
    instagram: "",
    facebook: "",
    line: "",
    youtube: "",
  },
};

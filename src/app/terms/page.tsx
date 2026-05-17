import { lvnInfo } from "@/data/lvn-info";

export const metadata = {
  title: "特定商取引法に基づく表記 | Life Vision NetWork",
};

export default function TermsPage() {
  const rows = [
    { label: "販売事業者", value: lvnInfo.legalName },
    { label: "所在地", value: lvnInfo.address },
    { label: "電話番号", value: lvnInfo.phone },
    { label: "メールアドレス", value: lvnInfo.email },
    { label: "販売価格", value: "各講座・サービスページに掲載 (税込価格)" },
    { label: "商品代金以外の必要料金", value: "決済手数料 (該当する場合) / 振込手数料 (お客様負担)" },
    { label: "お支払い方法", value: "クレジットカード / 銀行振込 / 各種電子決済" },
    { label: "お支払い時期", value: "お申込み確定後 7 日以内" },
    { label: "商品の引渡し・サービス開始時期", value: "各講座開講日・各サービス案内に従う" },
    {
      label: "返品・キャンセル",
      value: "お申込み後のキャンセル・返金は各講座・サービスごとの規約に従う。詳細は申込時に明示。",
    },
  ];

  return (
    <div className="px-4 md:px-6 pt-16 md:pt-24 pb-20 md:pb-28">
      <article className="max-w-3xl mx-auto">
        <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-[color:var(--color-text-muted)] font-bold mb-3">
          Specified Commercial Transactions Act
        </p>
        <h1 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
          特定商取引法に基づく表記
        </h1>
        <p className="text-sm text-[color:var(--color-text-muted)] mb-10">
          最終更新: 2026 年 5 月 18 日
        </p>

        <div className="bg-white rounded-3xl border-2 border-black shadow-[5px_5px_0_0_rgba(0,0,0,1)] overflow-hidden">
          <dl>
            {rows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-[140px_1fr] md:grid-cols-[200px_1fr] ${
                  i > 0 ? "border-t-2 border-black" : ""
                }`}
              >
                <dt className="p-4 md:p-5 bg-[#FAFAFA] font-black text-sm border-r-2 border-black">
                  {row.label}
                </dt>
                <dd className="p-4 md:p-5 text-sm leading-relaxed">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="text-xs text-[color:var(--color-text-muted)] mt-12 text-center">
          🚧 本表記はひな型です。Phase 3 で法務確認後に最終版を反映します。
        </p>
      </article>
    </div>
  );
}

import { lvnInfo } from "@/data/lvn-info";
import { CRAFT } from "@/lib/craft";

export const metadata = {
  title: "特定商取引法に基づく表記 | ライフビジョンネット",
};

export default function TermsPage() {
  const rows = [
    { label: "販売事業者", value: lvnInfo.legalNameWithStatus },
    { label: "所在地", value: lvnInfo.address },
    { label: "電話番号", value: lvnInfo.phone },
    { label: "メールアドレス", value: lvnInfo.email },
    { label: "販売価格", value: "各講座・サービスページに掲載 (税込価格)" },
    { label: "商品代金以外の必要料金", value: "決済手数料 (該当する場合) / 振込手数料 (お客様負担)" },
    { label: "お支払い方法", value: "クレジットカード / 銀行振込 / 各種電子決済" },
    { label: "お支払い時期", value: "お申込み確定後 7 日以内" },
    { label: "商品の引渡し・サービス開始時期", value: "各講座開講日・各サービス案内に従う" },
    { label: "返品・キャンセル", value: "お申込み後のキャンセル・返金は各講座・サービスごとの規約に従う。詳細は申込時に明示。" },
  ];

  return (
    <div style={{ background: CRAFT.BG, color: CRAFT.INK }} className="font-sans">
      <section className="px-6 md:px-12 pt-12 md:pt-20 pb-10 md:pb-16 max-w-[1400px] mx-auto">
        <div className="max-w-3xl mx-auto">
          <p className="inline-flex items-center gap-2 text-xs font-bold mb-5 px-4 py-2 rounded-full" style={{ background: `${CRAFT.VIOLET}15`, color: CRAFT.VIOLET }}>
            Specified Commercial Transactions Act
          </p>
          <h1 className="font-black tracking-[-0.04em] leading-[0.95] mb-4" style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}>
            特定商取引法に基づく表記。
          </h1>
          <p className="text-xs font-mono opacity-50">最終更新: 2026.05.31</p>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-20 md:pb-28 max-w-[1400px] mx-auto">
        <article className="max-w-3xl mx-auto">
          <div className="rounded-[28px] bg-white overflow-hidden" style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <dl>
              {rows.map((row, i) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[120px_1fr] md:grid-cols-[200px_1fr]"
                  style={{ borderTop: i === 0 ? "none" : "1px solid rgba(42,31,26,0.06)" }}
                >
                  <dt className="p-4 md:p-5 font-black text-xs md:text-sm opacity-60" style={{ background: "rgba(42,31,26,0.025)" }}>
                    {row.label}
                  </dt>
                  <dd className="p-4 md:p-5 text-sm leading-relaxed">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="text-xs opacity-50 mt-10 text-center">
            🚧 本表記はひな型です。Phase 3 で法務確認後に最終版を反映します。
          </p>
        </article>
      </section>
    </div>
  );
}

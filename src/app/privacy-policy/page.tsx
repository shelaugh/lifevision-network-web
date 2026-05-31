import { lvnInfo } from "@/data/lvn-info";
import { CRAFT } from "@/lib/craft";

export const metadata = {
  title: "プライバシーポリシー | ライフビジョンネット",
};

const sections = [
  { title: "第 1 条（個人情報の定義）", body: "本ポリシーにおいて、「個人情報」とは個人情報保護法第 2 条第 1 項に定める「個人情報」を指します。" },
  { title: "第 2 条（個人情報の収集方法）", body: "当団体は、利用者が問い合わせフォーム・資格申込・イベント参加申込等を行う際に、氏名・連絡先・所属等の個人情報をお尋ねすることがあります。" },
  { title: "第 3 条（個人情報を収集・利用する目的）", list: ["資格取得・講座申込に関するご案内", "なごみカフェ・イベント・活動に関するご案内", "お問い合わせへのご返信", "当団体の活動報告・ニュースレターの送信 (希望者のみ)"] },
  { title: "第 4 条（個人情報の第三者提供）", body: "当団体は、法令に定める場合および利用者の同意がある場合を除き、収集した個人情報を第三者に提供することはありません。" },
  { title: "第 5 条（個人情報の開示・訂正・削除）", body: "当団体は、利用者本人から個人情報の開示・訂正・削除等のご要望があった場合、本人確認の上、合理的な範囲で速やかに対応します。" },
  { title: "第 6 条（Cookie・アクセス解析）", body: "本サイトでは、サイト改善のためアクセス解析ツールを使用することがあります。これらのツールはトラフィックデータを収集するために Cookie を使用しており、これらのトラフィックデータは匿名で収集されており、個人を特定するものではありません。" },
  { title: "第 7 条（本ポリシーの変更）", body: "当団体は、必要に応じて本ポリシーを変更することがあります。変更後のポリシーは本ページに掲載した時点で効力を生じます。" },
];

export default function PrivacyPolicyPage() {
  return (
    <div style={{ background: CRAFT.BG, color: CRAFT.INK }} className="font-sans">
      <section className="px-6 md:px-12 pt-12 md:pt-20 pb-10 md:pb-16 max-w-[1400px] mx-auto">
        <div className="max-w-3xl mx-auto">
          <p className="inline-flex items-center gap-2 text-xs font-bold mb-5 px-4 py-2 rounded-full" style={{ background: `${CRAFT.SKY}20`, color: "#1A6B8F" }}>
            Privacy Policy
          </p>
          <h1 className="font-black tracking-[-0.04em] leading-[0.95] mb-4" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}>
            プライバシーポリシー。
          </h1>
          <p className="text-xs font-mono opacity-50">最終更新: 2026.05.31</p>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-20 md:pb-28 max-w-[1400px] mx-auto">
        <article className="max-w-3xl mx-auto rounded-[28px] bg-white p-8 md:p-12 space-y-8 leading-relaxed" style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-lg md:text-xl font-black mb-3">{s.title}</h2>
              {s.body ? <p className="text-sm md:text-base opacity-80">{s.body}</p> : null}
              {s.list ? (
                <ul className="list-disc pl-5 space-y-2 text-sm md:text-base opacity-80">
                  {s.list.map((item) => <li key={item}>{item}</li>)}
                </ul>
              ) : null}
            </section>
          ))}

          <section>
            <h2 className="text-lg md:text-xl font-black mb-3">第 8 条（お問い合わせ窓口）</h2>
            <p className="text-sm md:text-base opacity-80 mb-4">本ポリシーに関するお問い合わせは、下記までお願いいたします。</p>
            <div className="rounded-2xl p-5" style={{ background: `${CRAFT.LIME}15`, border: `1px solid ${CRAFT.LIME}40` }}>
              <p className="font-black">{lvnInfo.legalNameWithStatus}</p>
              <p className="text-sm mt-2 opacity-70">所在地: {lvnInfo.address}</p>
              <p className="text-sm opacity-70">メール: {lvnInfo.email}</p>
            </div>
          </section>

          <p className="text-xs opacity-50 text-center pt-4">
            🚧 本ポリシーはひな型です。Phase 3 で法務確認後に最終版を反映します。
          </p>
        </article>
      </section>
    </div>
  );
}

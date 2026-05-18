import { lvnInfo } from "@/data/lvn-info";

export const metadata = {
  title: "プライバシーポリシー | Life Vision NetWork",
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <section className="bg-white px-6 md:px-10 pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="max-w-3xl mx-auto">
          <p className="font-[var(--font-poppins)] text-xs md:text-sm tracking-[0.3em] uppercase text-[color:var(--color-text-muted)] font-bold mb-4">
            Privacy Policy
          </p>
          <h1 className="text-4xl md:text-6xl font-black leading-[0.95] mb-6">
            プライバシーポリシー。
          </h1>
          <p className="text-sm text-[color:var(--color-text-muted)] font-mono">
            最終更新: 2026.05.18
          </p>
        </div>
      </section>
      <article className="bg-white max-w-3xl mx-auto px-6 md:px-10 pb-20 md:pb-28">
        <div style={{ display: "none" }}>__placeholder__</div>

        <div className="prose prose-sm md:prose-base max-w-none space-y-8 text-[color:var(--color-text)] leading-relaxed">
          <section>
            <h2 className="text-xl md:text-2xl font-black mb-3 mt-8">第 1 条（個人情報の定義）</h2>
            <p>
              本ポリシーにおいて、「個人情報」とは個人情報保護法第 2 条第 1 項に定める「個人情報」を指します。
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black mb-3 mt-8">第 2 条（個人情報の収集方法）</h2>
            <p>
              当団体は、利用者が問い合わせフォーム・資格申込・イベント参加申込等を行う際に、氏名・連絡先・所属等の個人情報をお尋ねすることがあります。
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black mb-3 mt-8">第 3 条（個人情報を収集・利用する目的）</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>資格取得・講座申込に関するご案内</li>
              <li>イベント・活動に関するご案内</li>
              <li>お問い合わせへのご返信</li>
              <li>当団体の活動報告・ニュースレターの送信 (希望者のみ)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black mb-3 mt-8">第 4 条（個人情報の第三者提供）</h2>
            <p>
              当団体は、法令に定める場合および利用者の同意がある場合を除き、収集した個人情報を第三者に提供することはありません。
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black mb-3 mt-8">第 5 条（個人情報の開示・訂正・削除）</h2>
            <p>
              当団体は、利用者本人から個人情報の開示・訂正・削除等のご要望があった場合、本人確認の上、合理的な範囲で速やかに対応します。
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black mb-3 mt-8">第 6 条（Cookie・アクセス解析）</h2>
            <p>
              本サイトでは、サイト改善のためアクセス解析ツールを使用することがあります。これらのツールはトラフィックデータを収集するために Cookie を使用しており、これらのトラフィックデータは匿名で収集されており、個人を特定するものではありません。
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black mb-3 mt-8">第 7 条（本ポリシーの変更）</h2>
            <p>
              当団体は、必要に応じて本ポリシーを変更することがあります。変更後のポリシーは本ページに掲載した時点で効力を生じます。
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-black mb-3 mt-8">第 8 条（お問い合わせ窓口）</h2>
            <p>
              本ポリシーに関するお問い合わせは、下記までお願いいたします。
            </p>
            <div className="mt-4 p-5 bg-[#FAFAFA] border-2 border-black rounded-2xl">
              <p className="font-bold">{lvnInfo.legalName}</p>
              <p className="text-sm mt-2">所在地: {lvnInfo.address}</p>
              <p className="text-sm">メール: {lvnInfo.email}</p>
            </div>
          </section>
        </div>

        <p className="text-xs text-[color:var(--color-text-muted)] mt-12 text-center">
          🚧 本ポリシーはひな型です。Phase 3 で法務確認後に最終版を反映します。
        </p>
      </article>
    </div>
  );
}


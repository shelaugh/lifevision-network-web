const roles = [
  { ja: "医療", en: "Medical", hex: "#2D8BFF" },
  { ja: "福祉", en: "Welfare", hex: "#9B5BFF" },
  { ja: "保育", en: "Childcare", hex: "#FF4FB0" },
  { ja: "介護", en: "Nursing", hex: "#4FC04F" },
  { ja: "スポーツ", en: "Sports", hex: "#FF5A5A" },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero — 理念 */}
      <section className="px-4 md:px-6 pt-16 md:pt-20 pb-12 md:pb-16 text-center">
        <p className="font-[var(--font-poppins)] text-sm tracking-widest uppercase text-[color:var(--color-text-muted)] mb-3 font-bold">
          About Us
        </p>
        <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
          関わるすべての人が、
          <br />
          <span className="bg-gradient-to-r from-[#FF4FB0] via-[#9B5BFF] to-[#2D8BFF] bg-clip-text text-transparent">
            幸福に暮らす社会へ
          </span>
        </h1>
        <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-[color:var(--color-text-muted)]">
          一般社団法人 Life Vision NetWork (LVN) は、
          医療・福祉・保育・介護・スポーツの専門領域がレクリエーション活動を中心に据えながら連携し、
          多職種連携によって支援のあり方を共に考える組織です。
        </p>
      </section>

      {/* 多職種連携 5 職種カラー */}
      <section className="px-4 md:px-6 py-12 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-4">
            多職種連携が、社会の土台に
          </h2>
          <p className="text-sm md:text-base text-center text-[color:var(--color-text-muted)] mb-10 md:mb-14 max-w-2xl mx-auto leading-relaxed">
            5 つの専門領域が手を取り合い、それぞれの強みを活かして「心を元気にする」社会を目指します。
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-5">
            {roles.map((role) => (
              <div
                key={role.ja}
                className="bg-white rounded-2xl p-4 md:p-5 text-center shadow-sm hover:scale-[1.05] transition-transform"
              >
                <div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-2xl mx-auto mb-3"
                  style={{ background: role.hex }}
                  aria-hidden="true"
                />
                <div className="font-bold text-base md:text-lg">{role.ja}</div>
                <div className="font-[var(--font-poppins)] text-xs text-[color:var(--color-text-muted)] mt-1">
                  {role.en}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 つのキャッチコピー (poem.md より) */}
      <section className="px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto space-y-8">
          <Catch hex="#FF4FB0" title="いのち">
            あなたの存在は、誰にも代えられない。
            <br />
            そのままのあなたを、まっすぐ抱きしめる。
          </Catch>
          <Catch hex="#FFD647" title="おもいやり">
            少しの工夫で、あなたの世界が広がる。
            <br />
            できるようになるよ、あなたの方法で。
          </Catch>
          <Catch hex="#4FC04F" title="しあわせとは">
            いちばん大切なのは、あなたの幸せ。
            <br />
            その笑顔のために、みんなが動き出す。
          </Catch>
          <Catch hex="#9B5BFF" title="愛され慈しむ">
            小さな手も、迷う気持ちも、大事に包む。
            <br />
            あなたは、愛されて育つひかり。
          </Catch>
          <Catch hex="#FF5A5A" title="レクリエーション">
            日々のくらしに、よろこびと彩りを。
            <br />
            生きること、こころを豊かにすること。
          </Catch>
        </div>
      </section>

      {/* 沿革・理事 placeholder */}
      <section className="px-4 md:px-6 py-12 md:py-16 bg-gray-50 text-center text-sm text-[color:var(--color-text-muted)]">
        🚧 沿革・理事紹介・アクセス情報は Phase 3 で実装予定
      </section>
    </div>
  );
}

function Catch({
  hex,
  title,
  children,
}: {
  hex: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-l-4 pl-5 md:pl-7" style={{ borderColor: hex }}>
      <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: hex }}>
        {title}
      </h3>
      <p className="text-base md:text-lg leading-relaxed">{children}</p>
    </div>
  );
}

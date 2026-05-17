import Image from "next/image";

const lvnColors = [
  { name: "pink", hex: "#FF4FB0", role: "保育 / こどもパネル" },
  { name: "red", hex: "#FF5A5A", role: "スポーツ / 資格申込 CTA" },
  { name: "purple", hex: "#9B5BFF", role: "福祉 / 国際文化" },
  { name: "blue", hex: "#2D8BFF", role: "医療 / Co Lab LIFE" },
  { name: "lime", hex: "#B6EE5E", role: "おもいやり / なごみカフェ" },
  { name: "green", hex: "#4FC04F", role: "介護 / しあわせ" },
  { name: "yellow", hex: "#FFD647", role: "レクリエーション / ボドレク" },
  { name: "orange", hex: "#FFA235", role: "お知らせ強調" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
        <div className="max-w-2xl mb-12">
          <p className="text-sm text-[color:var(--color-text-muted)] mb-6 tracking-widest uppercase">
            Phase 2 — Sanity Check
          </p>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Life Vision NetWork
          </h1>
          <p className="text-lg md:text-xl text-[color:var(--color-text-muted)] leading-relaxed">
            関わるすべての人が幸福に暮らし、共に生きる社会の実現へ
          </p>
        </div>

        <div className="w-full max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">LVN カラーパレット</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {lvnColors.map((c) => (
              <div
                key={c.name}
                className="rounded-2xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform"
              >
                <div
                  className="h-24"
                  style={{ backgroundColor: c.hex }}
                  aria-label={`${c.name} ${c.hex}`}
                />
                <div className="p-3 bg-white text-left">
                  <div className="font-mono text-xs text-[color:var(--color-text-muted)]">
                    {c.hex}
                  </div>
                  <div className="text-sm font-bold mt-1">{c.name}</div>
                  <div className="text-xs text-[color:var(--color-text-muted)] mt-1">
                    {c.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-16 text-sm text-[color:var(--color-text-muted)]">
          🚧 Phase 2 着手中 — Next.js 16 + Cloudflare Workers + TailwindCSS v4
        </p>
      </section>
    </div>
  );
}

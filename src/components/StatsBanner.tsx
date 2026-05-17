import { lvnInfo } from "@/data/lvn-info";

/**
 * 大型数字で実績を見せるバナー。ネオブルータリズム調 (太枠 + ハードシャドウ)。
 */
export default function StatsBanner() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
      {lvnInfo.stats.map((stat, i) => {
        const accents = ["#FF5A5A", "#2D8BFF", "#FFD647", "#9B5BFF"];
        const hex = accents[i % accents.length];
        return (
          <div
            key={stat.label}
            className="relative bg-white border-2 border-black rounded-2xl p-5 md:p-6 shadow-[5px_5px_0_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all overflow-hidden"
          >
            <div
              className="absolute -top-4 -right-4 w-16 h-16 rounded-full opacity-90"
              style={{ background: hex }}
              aria-hidden="true"
            />
            <p className="relative text-xs md:text-sm font-bold text-[color:var(--color-text-muted)] mb-2">
              {stat.label}
            </p>
            <p className="relative font-black text-4xl md:text-6xl leading-none mb-1">
              {stat.value}
              <span className="text-lg md:text-2xl ml-1">{stat.suffix}</span>
            </p>
            <p className="relative text-xs text-[color:var(--color-text-muted)] mt-2 leading-tight">
              {stat.note}
            </p>
          </div>
        );
      })}
    </div>
  );
}

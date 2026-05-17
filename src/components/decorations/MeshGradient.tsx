/**
 * メッシュグラデーション風背景。
 * 複数の radial-gradient を重ねて多色メッシュ感を出す (LVN 8 色から 5 色選択)。
 */
export default function MeshGradient({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        background: `
          radial-gradient(at 18% 22%, #FF4FB0 0px, transparent 50%),
          radial-gradient(at 78% 15%, #FFD647 0px, transparent 50%),
          radial-gradient(at 88% 78%, #2D8BFF 0px, transparent 50%),
          radial-gradient(at 12% 78%, #4FC04F 0px, transparent 50%),
          radial-gradient(at 50% 50%, #9B5BFF 0px, transparent 50%)
        `,
        opacity: 0.45,
        filter: "blur(40px) saturate(1.2)",
      }}
    />
  );
}

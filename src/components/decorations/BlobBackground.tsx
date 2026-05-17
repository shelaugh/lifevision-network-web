/**
 * 多色 blob が浮遊する Hero 背景装飾。
 * 8 LVN カラーから 4 色をランダム配置・CSS animation で動き。
 * `prefers-reduced-motion: reduce` で停止。
 */
export default function BlobBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <div className="absolute -top-24 -left-24 w-[40rem] h-[40rem] rounded-full bg-[#FF4FB0]/30 blur-3xl animate-blob" />
      <div
        className="absolute top-1/3 -right-32 w-[36rem] h-[36rem] rounded-full bg-[#FFD647]/30 blur-3xl animate-blob"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute -bottom-32 left-1/4 w-[34rem] h-[34rem] rounded-full bg-[#2D8BFF]/30 blur-3xl animate-blob"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute top-1/4 left-1/3 w-[28rem] h-[28rem] rounded-full bg-[#9B5BFF]/25 blur-3xl animate-blob"
        style={{ animationDelay: "1s" }}
      />
    </div>
  );
}

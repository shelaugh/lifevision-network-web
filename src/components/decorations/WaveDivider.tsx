/**
 * セクション境界の波線。flip / color を props で制御。
 */
type Props = {
  fill?: string;
  flip?: boolean;
  className?: string;
};

export default function WaveDivider({ fill = "#FFFFFF", flip = false, className = "" }: Props) {
  return (
    <div
      aria-hidden="true"
      className={`w-full leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="w-full h-12 md:h-20 block"
      >
        <path
          d="M0,32 C240,90 480,0 720,32 C960,64 1200,16 1440,48 L1440,90 L0,90 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

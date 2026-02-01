export default function ClockLogo({ size = 38 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className="text-cyan-400"
      fill="none"
      stroke="currentColor"
      strokeWidth="26"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Left bracket */}
      <path d="M120 80 H90 Q60 80 60 110 V402 Q60 432 90 432 H120" />

      {/* Right bracket */}
      <path d="M392 80 H422 Q452 80 452 110 V402 Q452 432 422 432 H392" />

      {/* Center hub */}
      <circle cx="256" cy="256" r="22" fill="currentColor" />

      {/* Clock hands */}
      <path d="M256 256 L350 150" />
      <path d="M256 256 L170 210" />
      <path d="M256 256 L220 380" />
    </svg>
  );
}

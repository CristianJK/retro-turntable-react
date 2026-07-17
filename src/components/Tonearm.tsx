import React from "react";

interface TonearmProps {
  isPlaying: boolean;
  size?: number;
}

const ANGLE_IDLE = -30;
const ANGLE_PLAYING = -6;

export default function Tonearm({ isPlaying, size = 170 }: TonearmProps) {
  const angle = isPlaying ? ANGLE_PLAYING : ANGLE_IDLE;

  return (
    <svg
      viewBox="0 0 170 170"
      width={size}
      height={size}
      className="tonearm"
      role="img"
      aria-label="Brazo del tornamesa"
    >
      <g
        className="tonearm__pivotGroup"
        style={{ "--tonearm-angle": `${angle}deg` } as React.CSSProperties}
      >
        <circle cx="140" cy="30" r="11" className="tonearm__base" />
        <circle cx="140" cy="30" r="4" className="tonearm__baseDot" />

        <g className="tonearm__arm">
          <line x1="140" y1="30" x2="52" y2="98" className="tonearm__rod" />
          <circle cx="150" cy="18" r="6" className="tonearm__counterweight" />
          <rect
            x="40"
            y="92"
            width="22"
            height="13"
            rx="3"
            className="tonearm__headshell"
          />
        </g>
      </g>
    </svg>
  );
}

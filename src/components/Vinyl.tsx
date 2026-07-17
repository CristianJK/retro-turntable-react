import React from "react";

interface VinylProps {
  isPlaying: boolean;
  size?: number;
}

const GROOVES = [72, 62, 52, 42, 32];

export default function Vinyl({ isPlaying, size = 170 }: VinylProps) {
  return (
    <svg
      viewBox="0 0 170 170"
      width={size}
      height={size}
      className={`vinyl ${isPlaying ? "vinyl--spinning" : ""}`}
      role="img"
      aria-label="Disco de vinilo"
    >
      <circle cx="85" cy="85" r="82" className="vinyl__disc" />

      {GROOVES.map((r) => (
        <circle key={r} cx="85" cy="85" r={r} className="vinyl__groove" />
      ))}

      <path d="M 30 30 A 78 78 0 0 1 60 18" className="vinyl__sheen" />

      <circle cx="85" cy="85" r="28" className="vinyl__label" />
      <text x="85" y="80" textAnchor="middle" className="vinyl__labelText">
        LASTLY
      </text>
      <text x="85" y="93" textAnchor="middle" className="vinyl__labelText">
        LISTENED
      </text>

      <circle cx="85" cy="85" r="3" className="vinyl__spindle" />
    </svg>
  );
}

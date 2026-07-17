import React from "react";
import type { Track } from "../types";

interface DisplayProps {
  tracks: Track[];
  currentIndex?: number;
}

export default function Display({
  tracks = [],
  currentIndex = 0,
}: DisplayProps) {
  return (
    <div className="display">
      <div className="display__header">Now playing</div>
      <ul className="display__list">
        {tracks.map((track, i) => {
          const isCurrent = i === currentIndex;
          return (
            <li
              key={track.id ?? i}
              className={`display__row${isCurrent ? " display__row--active" : ""}`}
            >
              <span className="display__marker">{isCurrent ? "♪" : i + 1}</span>
              <span className="display__title">{track.title}</span>
              <span className="display__time">{track.duration}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

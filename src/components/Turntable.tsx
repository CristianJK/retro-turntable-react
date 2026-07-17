import React from "react";
import Display from "./Display";
import Vinyl from "./Vinyl";
import Tonearm from "./Tonearm";
import useAudioPlayer from "../hooks/useAudioPlayer";
import type { Track, UseAudioPlayerReturn } from "../types";
import "../index.css";

interface TurntableProps {
  tracks: Track[];
}

/**
 * NOTA: ajusta el destructuring de abajo a lo que realmente devuelva
 * tu useAudioPlayer. Se asume la forma de UseAudioPlayerReturn en types.ts.
 */
export default function Turntable({ tracks = [] }: TurntableProps) {
  const { currentIndex, isPlaying, togglePlay } = useAudioPlayer(
    tracks,
  ) as UseAudioPlayerReturn;

  return (
    <div className="turntable">
      <Display tracks={tracks} currentIndex={currentIndex} />

      <div className="turntable__stage">
        <div className="turntable__platter">
          <Vinyl isPlaying={isPlaying} />
          <Tonearm isPlaying={isPlaying} />
        </div>

        <button
          type="button"
          className="turntable__fader"
          onClick={togglePlay}
          aria-pressed={isPlaying}
          aria-label={isPlaying ? "Pausar" : "Reproducir"}
        >
          <span className="turntable__faderTrack" />
          <span
            className={`turntable__faderHandle${isPlaying ? " turntable__faderHandle--up" : ""}`}
          />
        </button>
      </div>

      <span className="turntable__screw turntable__screw--tl" />
      <span className="turntable__screw turntable__screw--tr" />
      <span className="turntable__screw turntable__screw--bl" />
      <span className="turntable__screw turntable__screw--br" />
    </div>
  );
}

import { useState, useEffect, useRef, useCallback } from "react";

// Asume songs: Array<{ src: string, ... }>. Si aun manejas array de strings,
// cambia songs[currentTrackIndex] por songs[currentTrackIndex].src donde diga src.
const useAudioPlayer = (songs) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  if (audioRef.current === null) {
    audioRef.current = new Audio();
  }

  const nextTrack = useCallback(() => {
    setCurrentTrackIndex((prev) => (prev + 1) % songs.length);
  }, [songs.length]);

  const prevTrack = useCallback(() => {
    setCurrentTrackIndex((prev) => (prev - 1 + songs.length) % songs.length);
  }, [songs.length]);

  // listeners: se registran una sola vez, no dependen de la pista actual
  useEffect(() => {
    const audio = audioRef.current;
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleEnded = () => nextTrack();

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [nextTrack]);

  const src = songs[currentTrackIndex]?.src;

  // cambia el src SOLO cuando cambia de pista, nunca por isPlaying
  useEffect(() => {
    if (!src) return;
    const audio = audioRef.current;
    if (audio.src !== src) {
      audio.src = src;
      setCurrentTime(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTrackIndex, songs]);

  // play/pause responde solo a isPlaying, sin tocar el src
  useEffect(() => {
    if (!src) return;
    const audio = audioRef.current;
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, src]);

  const togglePlay = () => setIsPlaying((prev) => !prev);

  return {
    isPlaying,
    currentTime,
    currentTrackIndex,
    togglePlay,
    nextTrack,
    prevTrack,
  };
};

export default useAudioPlayer;

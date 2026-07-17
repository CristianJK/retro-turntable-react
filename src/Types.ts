export interface Track {
  id?: string | number;
  title: string;
  duration: string;
  src?: string;
}

export interface UseAudioPlayerReturn {
  tracks: Track[];
  currentIndex: number;
  isPlaying: boolean;
  togglePlay: () => void;
}

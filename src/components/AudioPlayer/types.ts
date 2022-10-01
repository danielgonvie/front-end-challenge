export type Song = {
  id: number;
  name: string;
  image: string;
  description: string;
  genre: string;
  audio: { url: string };
  author: { name: string };
  liked: boolean;
  isPlaying: boolean;
};

export type Props = {
  className?: string;
  currentSong: Song;
  isPlaying: boolean;
};

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
  allSongs: Song[];
  className?: string;
  currentSong: Song;
  currentTime: number;
  likedSongs: number[];
  handleLiked: (a: number, b: boolean) => void;
  handlePlay: (a: number, b: boolean) => void;
  handlePrev: (id: number) => void;
  handleNext: (id: number) => void;
};

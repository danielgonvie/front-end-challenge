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

export type AppState = {
  songs: Song[];
  searchQuery: string;
  likedSongs: number[];
  sortedBy: string;
  currentPlaying: Song;
  currentTime: number;
};

export type Data = {
  songs: {
    songs: [Song];
  };
};

export type Song = {
  id: number;
  name: string;
  image: string;
  description: string;
  genre: string;
  audio: { url: string };
  author: { name: string };
  liked?: boolean;
};

export type CoreContext = {
  vanillaSongs: Array<Song>;
  filteredSongs: Array<Song>;
  searchQuery: string;
  sortedBy: string;
  likedSongs: number[];
  currentPlaying: Song;
  isPlaying: boolean;
  setVanillaSongs: (songs: Song[]) => void;
  setFilteredSongs: (songs: Song[]) => void;
  setSearchQuery: (query: string) => void;
  setSortedBy: (sort: string) => void;
  setLikedSongs: (songsIds: number[]) => void;
  setCurrentPlaying: (song: Song) => void;
  setIsPlaying: (isPlaying: boolean) => void;
};

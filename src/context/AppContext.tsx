import { createContext, ReactNode, useState } from 'react';

import { CoreContext, Song } from './types';

export const AppContext = createContext<CoreContext>({
  vanillaSongs: [] as Song[],
  filteredSongs: [] as Song[],
  searchQuery: '',
  sortedBy: 'name',
  likedSongs: [] as number[],
  currentPlaying: {} as Song,
  isPlaying: false,
  setVanillaSongs: () => {},
  setFilteredSongs: () => {},
  setSearchQuery: () => {},
  setSortedBy: () => {},
  setLikedSongs: () => {},
  setCurrentPlaying: () => {},
  setIsPlaying: () => {},
});

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [vanillaSongs, setVanillaSongs] = useState([] as Song[]);
  const [filteredSongs, setFilteredSongs] = useState([] as Song[]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortedBy, setSortedBy] = useState('name');
  const [likedSongs, setLikedSongs] = useState([] as number[]);
  const [currentPlaying, setCurrentPlaying] = useState({} as Song);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <AppContext.Provider
      value={{
        vanillaSongs,
        setVanillaSongs,
        filteredSongs,
        setFilteredSongs,
        searchQuery,
        setSearchQuery,
        sortedBy,
        setSortedBy,
        likedSongs,
        setLikedSongs,
        currentPlaying,
        setCurrentPlaying,
        isPlaying,
        setIsPlaying,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

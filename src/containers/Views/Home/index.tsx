import { Text } from '$/components/Text';
import { useGetSongs } from '$/services/SongService';
import React, { useEffect } from 'react';

import { Container, FeaturedSongs, SearchInput } from './styles';
import { AppState, Data, Song } from './types';

function HomeView(): JSX.Element {
  const [appState, setAppState] = React.useState<AppState>({
    songs: [] as Array<Song>,
    searchQuery: '',
    sortedBy: 'name',
    likedSongs: [] as number[],
    currentPlaying: {} as Song,
    currentTime: 0,
  });

  const result: Song[] | object | undefined = useGetSongs();

  function checkLiked(song: Song) {
    if (JSON.parse(localStorage.getItem('likedSongs')) !== null) {
      return JSON.parse(localStorage.getItem('likedSongs')).includes(song.id);
    }
    return false;
  }

  function sortMethod(arr: Song[]) {
    return appState.sortedBy === 'author'
      ? arr.sort((a, b) => a.author.name.localeCompare(b.author.name))
      : arr.sort((a, b) =>
          a[appState.sortedBy].localeCompare(b[appState.sortedBy]),
        );
  }

  function playCurrentSong() {
    console.log('playing', appState.currentPlaying);
  }

  useEffect(() => {
    if (!result.loading) {
      let auxArr: Song[] = [...result];
      auxArr = auxArr.map((song) => ({
        ...song,
        liked: checkLiked(song),
        isPlaying: false,
      }));
      setAppState({ ...appState, songs: sortMethod(auxArr) });
    }
  }, [result.loading]);

  useEffect(() => {
    const auxArr = appState.songs;
    setAppState({ ...appState, songs: sortMethod(auxArr) });
  }, [appState.sortedBy]);

  useEffect(() => {
    playCurrentSong();
  }, [appState.currentPlaying]);

  function onFilterQuery(filter: string) {
    const filteredArr: Song[] = result.filter((song: Song) =>
      Object.values(song).some((keyValue: any) =>
        keyValue.toString().toLowerCase().includes(filter.toLowerCase()),
      ),
    ) as Song[];
    setAppState({ ...appState, songs: sortMethod(filteredArr) });
  }

  function onChangeSort(sort: string) {
    setAppState({ ...appState, sortedBy: sort });
  }

  function onChangeLiked(id: number, liked: boolean) {
    const arrCopy: number[] =
      JSON.parse(localStorage.getItem('likedSongs')) !== null
        ? JSON.parse(localStorage.getItem('likedSongs'))
        : [];
    liked ? arrCopy.splice(arrCopy.indexOf(id), 1) : arrCopy.push(id);
    localStorage.setItem('likedSongs', JSON.stringify(arrCopy));
    setAppState({ ...appState, likedSongs: arrCopy });
  }

  function onChangePlay(id: number, playing: boolean) {
    let auxSongs: Song[] = [...appState.songs];
    auxSongs = auxSongs.map((song) => ({ ...song, isPlaying: false }));
    const songIdx: number = auxSongs.findIndex((song) => song.id === id);
    auxSongs[songIdx].isPlaying = playing;
    setAppState({
      ...appState,
      songs: auxSongs,
      currentPlaying: auxSongs[songIdx],
    });
  }

  if (result.loading) {
    return <h2>Cargando..</h2>;
  }
  if (result.error) {
    return <h2>Ha habido un problema..</h2>;
  }
  return (
    <Container>
      <Text tag="h1" variant="title1">
        Explore
      </Text>
      <SearchInput
        placeholder="Search by title, genre..."
        handleChange={onFilterQuery}
      />
      <FeaturedSongs
        allSongs={appState.songs}
        handleSort={onChangeSort}
        handleLiked={(id, liked) => onChangeLiked(id, liked)}
        handlePlay={(id, playing) => onChangePlay(id, playing)}
      />
    </Container>
  );
}

export default HomeView;

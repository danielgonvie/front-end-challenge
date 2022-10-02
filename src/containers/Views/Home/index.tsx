import { Text } from '$/components/Text';
import { AppContext } from '$/context/AppContext';
import { Song } from '$/context/types';
import { useGetSongs } from '$/services/SongService';
import { checkLiked, filterAndSort } from '$/utils/helpers/commonHelper';
import { ApolloError } from '@apollo/client';
import React, { useContext, useEffect } from 'react';

import { Container, FeaturedSongs, MusicPlayer, SearchInput } from './styles';

function HomeView(): JSX.Element {
  const { vanillaSongs, setVanillaSongs } = useContext(AppContext);
  const { filteredSongs, setFilteredSongs } = useContext(AppContext);
  const { likedSongs, setLikedSongs } = useContext(AppContext);
  const { currentPlaying, setCurrentPlaying } = useContext(AppContext);
  const { sortedBy, setSortedBy } = useContext(AppContext);
  const { searchQuery, setSearchQuery } = useContext(AppContext);

  const result:
    | Song[]
    | { loading: true; error?: undefined }
    | { error: ApolloError; loading?: undefined }
    | undefined = useGetSongs();

  // checkLiked se fue a helpers

  //sortMethod se fue a helpers

  //Depues de obtener la llamada, una vez termine de cargar
  useEffect(() => {
    if (!result.loading) {
      let songsRecieved: Song[] = [...result] as Song[];
      songsRecieved = songsRecieved.map((song) => ({
        ...song,
      }));
      setVanillaSongs(songsRecieved);
      setFilteredSongs(songsRecieved);
      JSON.parse(localStorage.getItem('likedSongs')) !== null
        ? setLikedSongs(JSON.parse(localStorage.getItem('likedSongs')))
        : '';
    }
  }, [result, setVanillaSongs, setFilteredSongs, setLikedSongs]);

  //Cambió sortedBy o searchQuery
  useEffect(() => {
    const sortedAndFiltered = [...vanillaSongs];
    setFilteredSongs(filterAndSort(sortedAndFiltered, sortedBy, searchQuery));
    console.log('entró en el sort and filter');
  }, [sortedBy, searchQuery, vanillaSongs, setFilteredSongs]);

  function onFilterQuery(filter: string) {
    setSearchQuery(filter);
  }

  // function pressedPrev(id: number) {
  //   const actualSongId = appState.currentPlaying.id;
  //   const actualIndex = result.findIndex((song) => song.id === actualSongId);

  //   if (actualIndex === 0) {
  //     const nextSong = { ...result[result.length - 1] };
  //     nextSong.isPlaying = true;
  //     return setAppState({ ...appState, currentPlaying: nextSong });
  //   }
  //   const nextSong = { ...result[actualIndex - 1] };
  //   nextSong.isPlaying = true;

  //   return setAppState({
  //     ...appState,
  //     currentPlaying: nextSong,
  //   });
  // }

  // function pressedNext(id: number) {
  //   const actualSongId = appState.currentPlaying.id;
  //   const actualIndex = result.findIndex((song) => song.id === actualSongId);

  //   const songsCopy = [...appState.songs];
  //   songsCopy[actualIndex].isPlaying = false;

  //   if (actualIndex === result.length - 1) {
  //     const nextSong = { ...result[0] };
  //     nextSong.isPlaying = true;
  //     songsCopy[0].isPlaying = true;
  //     return setAppState({
  //       ...appState,
  //       songs: songsCopy,
  //       currentPlaying: nextSong,
  //     });
  //   }
  //   const nextSong = { ...result[actualIndex + 1] };
  //   nextSong.isPlaying = true;
  //   songsCopy[actualIndex + 1].isPlaying = true;
  //   return setAppState({
  //     ...appState,
  //     songs: songsCopy,
  //     currentPlaying: nextSong,
  //   });
  // }

  // function onChangePlay(id: number, playing: boolean) {
  //   let auxSongs: Song[] = [...appState.songs];
  //   auxSongs = auxSongs.map((song) => ({ ...song, isPlaying: false }));
  //   const songIdx: number = auxSongs.findIndex((song) => song.id === id);
  //   auxSongs[songIdx].isPlaying = playing;
  //   setAppState({
  //     ...appState,
  //     songs: auxSongs,
  //     currentPlaying: auxSongs[songIdx],
  //   });
  // }

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
      <FeaturedSongs allSongs={filteredSongs} />
      {/* <MusicPlayer
        allSongs={vanillaSongs}
        likedSongs={likedSongs}
        handleLiked={(id, liked) => onChangeLiked(id, liked)}
        handlePlay={(id, playing) => onChangePlay(id, playing)}
        handlePrev={(id) => pressedPrev(id)}
        handleNext={(id) => pressedNext(id)}
        currentSong={currentPlaying}
        currentTime={}
        isPlaying={}
      /> */}
    </Container>
  );
}

export default HomeView;

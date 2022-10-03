import { ErrorState } from '$/components/ErrorState';
import { LoadingState } from '$/components/LoadingState';
import { Text } from '$/components/Text';
import { AppContext } from '$/context/AppContext';
import { Song } from '$/context/types';
import { useGetSongs } from '$/services/SongService';
import { filterAndSort } from '$/utils/helpers/commonHelper';
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

  useEffect(() => {
    if (!result.loading && !result.error) {
      let songsRecieved: Song[] = [...result] as Song[];
      songsRecieved = songsRecieved.map((song) => ({
        ...song,
      }));
      setVanillaSongs(songsRecieved);
      setFilteredSongs(songsRecieved);
      if (JSON.parse(localStorage.getItem('likedSongs')) !== null) {
        setLikedSongs(
          JSON.parse(localStorage.getItem('likedSongs')) as number[],
        );
      }
      setCurrentPlaying(songsRecieved[0]);
    }
  }, [result, setVanillaSongs, setFilteredSongs, setLikedSongs]);

  useEffect(() => {
    const sortedAndFiltered = [...vanillaSongs];
    setFilteredSongs(filterAndSort(sortedAndFiltered, sortedBy, searchQuery));
  }, [sortedBy, searchQuery, vanillaSongs, setFilteredSongs]);

  function onFilterQuery(filter: string) {
    setSearchQuery(filter);
  }

  if (result.loading) {
    return <LoadingState />;
  }
  if (result.error) {
    return (
      <ErrorState errorMessage="Ups! Media Player not available. Try again later!" />
    );
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
      <MusicPlayer playlist={vanillaSongs} />
    </Container>
  );
}

export default HomeView;

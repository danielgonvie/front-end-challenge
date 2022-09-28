import { SongCard } from '$/components/SongCard';
import { Text } from '$/components/Text';
import React, { useEffect } from 'react';

import { Container, Dropdown, FlexContainer } from './styles';
import { Props, Song } from './types';

export const FeaturedSongs = React.forwardRef<HTMLDivElement, Props>(
  (
    { className, allSongs, handleSort, handleLiked, handlePlay, ...props },
    ref,
  ) => {
    const [songs, setSongs] = React.useState(allSongs);

    useEffect(() => setSongs(allSongs), [allSongs]);

    if (songs.length === 0) {
      return <h2>No hay canciones disponibles.</h2>;
    }

    return (
      <Container>
        <FlexContainer>
          <Text tag="h2" variant="title2">
            Featured songs
          </Text>
          <Dropdown onChangeSort={handleSort} />
        </FlexContainer>
        {allSongs.map((song) => (
          <SongCard
            key={song.id}
            songData={song}
            onChangeLiked={(id, liked) => handleLiked(id, liked)}
            onChangePlay={(id, playing) => handlePlay(id, playing)}
            isPlaying={song.isPlaying}
          />
        ))}
      </Container>
    );
  },
);

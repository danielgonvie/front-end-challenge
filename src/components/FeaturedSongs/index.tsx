import { SongCard } from '$/components/SongCard';
import { Text } from '$/components/Text';
import { AppContext } from '$/context/AppContext';
import React, { useContext } from 'react';

import { Container, Dropdown, FlexContainer } from './styles';
import { Props } from './types';

export const FeaturedSongs = React.forwardRef<HTMLDivElement, Props>(
  ({ className }, ref) => {
    const { filteredSongs } = useContext(AppContext);

    if (filteredSongs.length === 0) {
      return (
        <Text tag="h2" variant="title2">
          No hay canciones disponibles.
        </Text>
      );
    }

    return (
      <Container className={className} ref={ref}>
        <FlexContainer>
          <Text tag="h2" variant="title2">
            Featured songs
          </Text>
          <Dropdown />
        </FlexContainer>
        {filteredSongs.map((song) => {
                    console.log(song, "venga guapo");
          return (
          <SongCard key={song.id} songData={song} />
        )})}
      </Container>
    );
  },
);

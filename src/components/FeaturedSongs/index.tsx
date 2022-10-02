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
      return <h2>No hay canciones disponibles.</h2>;
    }

    return (
      <Container>
        <FlexContainer>
          <Text tag="h2" variant="title2">
            Featured songs
          </Text>
          <Dropdown />
        </FlexContainer>
        {filteredSongs.map((song) => (
          <SongCard key={song.id} songData={song} />
        ))}
      </Container>
    );
  },
);

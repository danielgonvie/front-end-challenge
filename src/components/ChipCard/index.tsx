import { Text } from '$/components/Text';
import React from 'react';

import { Container } from './styles';
import { Props } from './types';

export const ChipCard = React.forwardRef<HTMLDivElement, Props>(
  ({ className, genre, ...props }, ref) => {
    const parseGenre = (genreType: string) =>
      genreType
        .replaceAll('_', ' ')
        .replace(/(\B)[^ ]*/g, (match) => match.toLowerCase())
        .replace(/^[^ ]/g, (match) => match.toUpperCase());
    return (
      <Container className={className}>
        <Text tag="p" variant="caption">
          {parseGenre(genre)}
        </Text>
      </Container>
    );
  },
);

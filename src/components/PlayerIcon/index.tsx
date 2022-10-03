import React, { useEffect } from 'react';

import { Container, PlayState } from './styles';
import { Props } from './types';

export const PlayerIcon = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, isPlaying, pressedPlay }, ref) => {
    const [playing, setPlaying] = React.useState(isPlaying);

    function playChanged() {
      return pressedPlay(!playing);
    }

    useEffect(() => setPlaying(isPlaying), [isPlaying]);
    return (
      <Container className={className} onClick={playChanged}>
        {isPlaying ? (
          <PlayState ref={ref} className="material-icons">&#xe034;</PlayState>
        ) : (
          <PlayState ref={ref} className="material-icons">&#xe037;</PlayState>
        )}
      </Container>
    );
  },
);

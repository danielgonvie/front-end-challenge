import React, { useEffect } from 'react';

import { Container, PlayState } from './styles';
import { Props } from './types';

export const PlayerIcon = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, isPlaying, pressedPlay }, ref) => {
    const [playing, setPlaying] = React.useState(isPlaying);

    function playChanged() {
      return pressedPlay(!playing);
    }

    // useEffect(() => pressedPlay(playing), [playing]);
    useEffect(() => setPlaying(isPlaying), [isPlaying]);
    return (
      <Container className={className} ref={ref} onClick={playChanged}>
        {isPlaying ? (
          <PlayState className="material-icons">&#xe034;</PlayState>
        ) : (
          <PlayState className="material-icons">&#xe037;</PlayState>
        )}
      </Container>
    );
  },
);

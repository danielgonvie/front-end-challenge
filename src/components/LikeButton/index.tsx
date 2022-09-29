import React, { useEffect } from 'react';

import { Container, LikedButton, UnlikedButton } from './styles';
import { Props } from './types';

export const LikeButton = React.forwardRef<HTMLDivElement, Props>(
  ({ className, isLiked, pressedLike, ...props }, ref) => {
    const [liked, setLiked] = React.useState(isLiked);

    function likeChanged() {
      setLiked(!liked);
      return pressedLike(liked);
    }

    useEffect(() => {
      setLiked(isLiked);
    }, [isLiked]);

    return (
      <Container className={className} onClick={likeChanged}>
        {liked ? <LikedButton /> : <UnlikedButton />}
      </Container>
    );
  },
);

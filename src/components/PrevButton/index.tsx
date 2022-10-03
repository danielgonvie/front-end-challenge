import React from 'react';

import { Container, PreviousIcon } from './styles';
import { Props } from './types';

export const PrevButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, pressedPrev }, ref) => (
    <Container className={className} onClick={pressedPrev}>
      <PreviousIcon ref={ref} className="material-icons">
        &#xe045;
      </PreviousIcon>
    </Container>
  ),
);

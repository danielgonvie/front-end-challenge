import React from 'react';

import { Container, PreviousIcon } from './styles';
import { Props } from './types';

export const PrevButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, pressedPrev }, ref) => (
    <Container className={className} ref={ref} onClick={pressedPrev}>
      <PreviousIcon className="material-icons">&#xe045;</PreviousIcon>
    </Container>
  ),
);

import React from 'react';

import { Container, NextIcon } from './styles';
import { Props } from './types';

export const NextButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, pressedNext }, ref) => (
    <Container className={className} onClick={pressedNext}>
      <NextIcon ref={ref} className="material-icons">&#xe044;</NextIcon>
    </Container>
  ),
);

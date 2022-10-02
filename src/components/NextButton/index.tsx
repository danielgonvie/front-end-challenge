import React from 'react';

import { Container, NextIcon } from './styles';
import { Props } from './types';

export const NextButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, pressedNext, ...props }, ref) => (
    <Container className={className} onClick={pressedNext}>
      <NextIcon className="material-icons">&#xe044;</NextIcon>
    </Container>
  ),
);

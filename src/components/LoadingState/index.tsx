import React from 'react';

import { Container, StyledSpinner } from './styles';
import { Props } from './types';

export const LoadingState = React.forwardRef<HTMLDivElement, Props>(
  ({ className, ...props }, ref) => (
    <Container className={className}>
      <StyledSpinner viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
        />
      </StyledSpinner>
    </Container>
  ),
);

import { Text } from '$/components/Text';
import React from 'react';

import { Container } from './styles';
import { Props } from './types';

export const ErrorState = React.forwardRef<HTMLDivElement, Props>(
  ({ className, errorMessage, ...props }, ref) => (
    <Container className={className}>
      <Text tag="h2" variant="title2">
        {errorMessage} :(
      </Text>
    </Container>
  ),
);

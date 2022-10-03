import React from 'react';

import { Container } from './styles';
import type { TextProps } from './types';

export const Text = ({
  tag,
  variant,
  children,
  className,
  color = 'grayscale900',
  ...props
}: TextProps) => (
  <Container
    as={tag}
    $variant={variant}
    className={className}
    $color={color}
    {...props}
  >
    {children}
  </Container>
);

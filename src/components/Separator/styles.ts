import styled from 'styled-components';

import { ContainerProps } from './types';

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 1.5rem;

  background-image: radial-gradient(
    ${({ theme }) => theme.color.grayscale200} 0.0625rem,
    transparent 0.0625rem
  );
  background-repeat: repeat-x;
  background-position: -0.25rem 50%;
  background-size: 1rem 1rem;
  margin-block-start: ${({ $spaceBlockStart }) => $spaceBlockStart};
  margin-block-end: ${({ $spaceBlockEnd }) => $spaceBlockEnd};
`;

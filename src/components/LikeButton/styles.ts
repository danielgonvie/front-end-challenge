import Unliked from '$/assets/icons/heart-outline.svg';
import Liked from '$/assets/icons/heart.svg';
import styled, { keyframes } from 'styled-components';

const playingAnimated = keyframes`
0%{transform: scale(1);}
25%{transform: scale(1.2);}
50%{transform: scale(1.4);}
50%{transform: scale(1.6);}
100%{transform: scale(1);}
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1.25rem;
  color: #22223d;
`;

export const LikedButton = styled(Liked)`
  fill: ${({ theme }) => theme.color.geraldine900};
  cursor: pointer;
  animation: ${playingAnimated} 0.3s linear 0.1s;
  transform-origin: center;

  &:hover {
    filter: drop-shadow(0 0 2px #bf508b);
  }
`;

export const UnlikedButton = styled(Unliked)`
  fill: ${({ theme }) => theme.color.grayscale300};
  cursor: pointer;

  &:hover {
    fill: ${({ theme }) => theme.color.geraldine900};
    filter: drop-shadow(0 0 1px ${({ theme }) => theme.color.geraldine900});
  }
`;

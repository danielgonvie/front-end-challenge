import animated from '$/assets/icons/animated-icon.svg';
import { Text } from '$/components/Text';
import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-width: 10rem;
  margin: 1rem 0rem;
`;

export const Thumbnail = styled.div`
  display: flex;
  justify-content: center;
  width: 8.75rem;
  height: 8.75rem;
  min-width: 8.75rem;
  min-height: 8.75rem;
  position: relative;
`;

export const ThumbnailCover = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 0.75rem;
`;

export const SongBody = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 1.25rem;
`;

export const BottomDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const BackgroundDiv = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.75rem;
`;

export const TextDuration = styled(Text)`
  margin: 0 0.75rem;
  color: #484a69;
`;

export const TextDescription = styled(Text)`
  display: -webkit-box;
  max-width: 70%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const playingAnimated = keyframes`
0%{transform: scaleY(1)}
25%{transform: scaleY(0.3)}
50%{transform: scaleY(0.7)}
75%{transform: scaleY(0.15);}
`;

export const AnimatedIcon = styled(animated)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  margin: auto;
  width: 100%; /* Need a specific value to work */
  fill:white;

  & #animated-left {
    animation: ${playingAnimated} 1s linear 0.1s infinite;
    transform-origin: center;
  }
  & #animated-middle {
    animation: ${playingAnimated} 1s linear 0.2s infinite;
    transform-origin: center;
  }

  & #animated-right {
    animation: ${playingAnimated} 1s linear 0.4s infinite;
    transform-origin: center;
  }
`;

import styled from 'styled-components';
import { PlayerIcon as PlayerIconDefault } from '$/components/PlayerIcon';
import { PrevButton as PrevButtonDefault } from '$/components/PrevButton';
import { NextButton as NextButtonDefault } from '$/components/NextButton';


export const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 5rem;
  width: 100vw;
  background-color: ${({ theme }) => theme.color.grayscale900};
  padding: 1rem 1.5rem;
  border-radius: 1rem 1rem 0 0;
  color: ${({ theme }) => theme.color.white};
`;

export const Thumbnail = styled.div`
  display: flex;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  min-width: 3rem;
  min-height: 3rem;
  position: relative;
`;

export const ThumbnailCover = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 0.75rem;
`;

export const SongInfo = styled.div`

`;

export const PlayerIcon = styled(PlayerIconDefault)`
  background-color: white;
  & span {
    color: black;
  }
`;

export const PrevButton = styled(PrevButtonDefault)`
  & span {
    color: white;
  }
`;

export const NextButton = styled(NextButtonDefault)`
  & span {
    color: white;
  }
`;
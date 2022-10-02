import { AudioPlayer as AudioPlayerDefault } from '$/components/AudioPlayer';
import { NextButton as NextButtonDefault } from '$/components/NextButton';
import { PlayerIcon as PlayerIconDefault } from '$/components/PlayerIcon';
import { PrevButton as PrevButtonDefault } from '$/components/PrevButton';
import { LikeButton as LikeButtonDefault } from '$/components/LikeButton';
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  width: 100vw;
  background-color: ${({ theme }) => theme.color.grayscale900};
  padding: 1rem 1.5rem;
  border-radius: 1rem 1rem 0 0;
  color: ${({ theme }) => theme.color.white};
  box-shadow: 0rem -0.0625rem 0.1875rem ${({ theme }) => theme.color.grayscale900};
`;

export const Thumbnail = styled.div`
  display: flex;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  min-width: 3rem;
  min-height: 3rem;
  position: relative;
  margin: 0 0.34375rem;
`;

export const ThumbnailCover = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 0.75rem;
  margin: 0 0.34375rem;
`;

export const SongInfo = styled.div`
  margin: 0 0.34375rem;
`;

export const LikeButton = styled(LikeButtonDefault)`
  margin: 0 0.34375rem;
`;

export const PlayerIcon = styled(PlayerIconDefault)`
  background-color: white;
  height: 2.5rem;
  width: 2.5rem;
  margin: 0 1rem;
  & span {
    color: black;
    font-size: 1.875rem;
  }
`;

export const PrevButton = styled(PrevButtonDefault)`
  & span {
    color: white;
    &:hover{
      filter: drop-shadow(0px 0px 0.09375rem white);
    }

  }
`;

export const NextButton = styled(NextButtonDefault)`
  & span {
    color: white;
    &:hover{
      filter: drop-shadow(0px 0px 0.09375rem white);
    }
  }
`;

export const AudioPlayer = styled(AudioPlayerDefault)`

`;

export const ContainerFlex = styled.div`
  display: flex;
  align-items: center;
  width: 35%;
`;

export const ContainerControl = styled.div`
  display: flex;
  align-items: center;
`;

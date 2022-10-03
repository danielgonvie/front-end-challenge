import { LoadingState } from '$/components/LoadingState';
import { Text } from '$/components/Text';
import { AppContext } from '$/context/AppContext';
import {
  checkLiked,
  handleNext,
  handlePrev,
  likeHasChange,
  playHasChange,
} from '$/utils/helpers/commonHelper';
import React, { useContext } from 'react';

import {
  AudioPlayer,
  Container,
  ContainerControl,
  ContainerFlex,
  LikeButton,
  NextButton,
  PlayerIcon,
  PrevButton,
  SongInfo,
  Thumbnail,
  ThumbnailCover,
} from './styles';
import { Props } from './types';

export const MusicPlayer = React.forwardRef<HTMLDivElement, Props>(
  ({ className, playlist }, ref) => {
    const { currentPlaying, setCurrentPlaying } = useContext(AppContext);
    const { isPlaying, setIsPlaying } = useContext(AppContext);
    const { likedSongs, setLikedSongs } = useContext(AppContext);

    if (!currentPlaying.hasOwnProperty('author')) {
      return (
        <Container>
          <LoadingState />
        </Container>
      );
    }

    return (
      <Container className={className} ref={ref}>
        <ContainerFlex>
          <LikeButton
            isLiked={checkLiked(currentPlaying)}
            pressedLike={(e) =>
              likeHasChange(e, likedSongs, setLikedSongs, currentPlaying.id)
            }
          />
          <Thumbnail>
            <ThumbnailCover src={currentPlaying.image} alt="Song cover image" />
          </Thumbnail>
          <SongInfo>
            <Text tag="h3" variant="bodyBold">
              {currentPlaying.name}
            </Text>
            <Text tag="p" variant="body">
              {currentPlaying.author.name}
            </Text>
          </SongInfo>
        </ContainerFlex>
        <ContainerControl>
          <PrevButton
            pressedPrev={() =>
              handlePrev(currentPlaying.id, playlist, setCurrentPlaying)
            }
          />
          <PlayerIcon
            isPlaying={isPlaying}
            pressedPlay={(e) =>
              playHasChange(e, currentPlaying, setIsPlaying, setCurrentPlaying)
            }
          />
          <NextButton
            pressedNext={() =>
              handleNext(currentPlaying.id, playlist, setCurrentPlaying)
            }
          />
        </ContainerControl>
        <AudioPlayer />
      </Container>
    );
  },
);

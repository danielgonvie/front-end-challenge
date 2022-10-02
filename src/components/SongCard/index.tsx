import { ChipCard } from '$/components/ChipCard';
import { LikeButton } from '$/components/LikeButton';
import { PlayerIcon } from '$/components/PlayerIcon';
import { Text } from '$/components/Text';
import { AppContext } from '$/context/AppContext';
import {
  checkLiked,
  getAudioDuration,
  likeHasChange,
  playHasChange,
} from '$/utils/helpers/commonHelper';
import React, { useContext, useEffect } from 'react';

import {
  AnimatedIcon,
  BackgroundDiv,
  BottomDiv,
  Container,
  SongBody,
  TextDescription,
  TextDuration,
  Thumbnail,
  ThumbnailCover,
} from './styles';
import { Props } from './types';

export const SongCard = React.forwardRef<HTMLDivElement, Props>(
  ({ className, songData }, ref) => {
    const [songTime, setSongTime] = React.useState('0');
    const [song] = React.useState(songData);
    const { likedSongs, setLikedSongs } = useContext(AppContext);
    const { currentPlaying, setCurrentPlaying } = useContext(AppContext);
    const { isPlaying, setIsPlaying } = useContext(AppContext);

    const au = document.createElement('audio');
    au.src = song.audio.url;
    au.addEventListener(
      'loadedmetadata',
      function () {
        setSongTime(getAudioDuration(au));
      },
      false,
    );

    return (
      <Container className={className}>
        <Thumbnail>
          <ThumbnailCover src={song.image} alt="Song cover image" />
          {isPlaying && currentPlaying.id === song.id ? (
            <BackgroundDiv>
              <AnimatedIcon />
            </BackgroundDiv>
          ) : (
            ''
          )}
        </Thumbnail>
        <SongBody>
          <Text tag="h3" variant="bodyBold">
            {song.name}
          </Text>
          <Text tag="p" variant="body">
            {song.author.name}
          </Text>
          <TextDescription tag="p" variant="body2">
            {song.description}
          </TextDescription>
          <BottomDiv>
            <PlayerIcon
              isPlaying={isPlaying && currentPlaying.id === song.id}
              pressedPlay={(e) =>
                playHasChange(e, song, setIsPlaying, setCurrentPlaying)
              }
            />
            <TextDuration tag="p" variant="caption">
              {songTime}
            </TextDuration>
            <ChipCard genre={song.genre} />
          </BottomDiv>
        </SongBody>
        <LikeButton
          isLiked={checkLiked(song)}
          pressedLike={(e) =>
            likeHasChange(e, likedSongs, setLikedSongs, song.id)
          }
        />
      </Container>
    );
  },
);

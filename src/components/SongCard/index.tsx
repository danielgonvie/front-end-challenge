import { ChipCard } from '$/components/ChipCard';
import { LikeButton } from '$/components/LikeButton';
import { PlayerIcon } from '$/components/PlayerIcon';
import { Text } from '$/components/Text';
import React, { useEffect } from 'react';

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
  ({ className, songData, likedSongs, onChangeLiked, onChangePlay }, ref) => {
    const [songTime, setSongTime] = React.useState('0');
    const [song, setSong] = React.useState(songData);

    useEffect(() => {
      const songCopy = { ...songData };
      songCopy.liked = likedSongs.some((id) => id === songCopy.id);
      setSong(songCopy);
    }, [songData, likedSongs]);

    const au = document.createElement('audio');
    au.src = song.audio.url;
    au.addEventListener(
      'loadedmetadata',
      function () {
        const duration = au.duration;
        const totalNumberOfSeconds = Math.round(duration);
        const hours = Math.floor(totalNumberOfSeconds / 3600);
        const minutes = Math.floor((totalNumberOfSeconds - hours * 3600) / 60);
        const seconds = Math.floor(
          totalNumberOfSeconds - (hours * 3600 + minutes * 60),
        );
        const result = `${minutes < 10 ? +minutes : minutes}:${
          seconds < 10 ? `0${seconds}` : seconds
        }`;

        setSongTime(result);
      },
      false,
    );

    function likeHasChange(liked: boolean) {
      setSong({ ...song, liked });
      onChangeLiked(song.id, liked);
    }

    function playHasChange(playing: boolean) {
      setSong({ ...song, isPlaying: playing });
      onChangePlay(song.id, playing);
    }

    return (
      <Container className={className}>
        <Thumbnail>
          <ThumbnailCover src={song.image} alt="Song cover image" />
          {song.isPlaying ? (
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
              isPlaying={song.isPlaying}
              pressedPlay={(e) => playHasChange(e)}
            />
            <TextDuration tag="p" variant="caption">
              {songTime}
            </TextDuration>
            <ChipCard genre={song.genre} />
          </BottomDiv>
        </SongBody>
        <LikeButton
          isLiked={song.liked}
          pressedLike={(e) => likeHasChange(e)}
        />
      </Container>
    );
  },
);

import { ChipCard } from '$/components/ChipCard';
import { LikeButton } from '$/components/LikeButton';
import { PlayerIcon } from '$/components/PlayerIcon';
import { Text } from '$/components/Text';
import { AppContext } from '$/context/AppContext';
import { checkLiked, getAudioDuration } from '$/utils/helpers/commonHelper';
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

    function likeHasChange(liked: boolean) {
      const likedSongsArr: number[] = [...likedSongs];
      liked
        ? likedSongsArr.splice(likedSongsArr.indexOf(song.id), 1)
        : likedSongsArr.push(song.id);
      localStorage.setItem('likedSongs', JSON.stringify(likedSongsArr));
      setLikedSongs(likedSongsArr);
    }

    function playHasChange(playing: boolean) {
      setIsPlaying(playing);
      setCurrentPlaying(song);
    }

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
              pressedPlay={(e) => playHasChange(e)}
            />
            <TextDuration tag="p" variant="caption">
              {songTime}
            </TextDuration>
            <ChipCard genre={song.genre} />
          </BottomDiv>
        </SongBody>
        <LikeButton
          isLiked={checkLiked(song)}
          pressedLike={(e) => likeHasChange(e)}
        />
      </Container>
    );
  },
);

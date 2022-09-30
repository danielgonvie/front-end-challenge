import { LikeButton } from '$/components/LikeButton';
import { Text } from '$/components/Text';
import React, { useEffect } from 'react';

import { Container, SongInfo, Thumbnail, ThumbnailCover, PlayerIcon, PrevButton, NextButton } from './styles';
import { Props, Song } from './types';

export const MusicPlayer = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      className,
      currentSong,
      currentTime,
      likedSongs,
      handleLiked,
      handlePlay,
      handlePrev,
      handleNext,
      ...props
    },
    ref,
  ) => {
    const [song, setSong] = React.useState<Song>(currentSong);

    function likeHasChange(liked: boolean) {
      handleLiked(currentSong.id, liked);
    }

    function playHasChange(playing: boolean) {
      setSong({ ...song, isPlaying: playing });
      handlePlay(song.id, playing);
    }

    useEffect(() => {
      const songCopy = { ...currentSong };
      songCopy.liked = likedSongs.some((id) => id === songCopy.id);
      setSong(songCopy);
    }, [currentSong, likedSongs]);

    if (!song.hasOwnProperty('author')) {
      return (
        <Container>
          <Text tag="h3" variant="bodyBold">
            Cargando...
          </Text>
        </Container>
      );
    }

    return (
      <Container>
        <LikeButton
          isLiked={song.liked}
          pressedLike={(e) => likeHasChange(e)}
        />
        <Thumbnail>
          <ThumbnailCover src={song.image} alt="Song cover image" />
        </Thumbnail>
        <SongInfo>
          <Text tag="h3" variant="bodyBold">
            {song.name}
          </Text>
          <Text tag="p" variant="body">
            {song.author.name}
          </Text>
        </SongInfo>
        <PrevButton pressedPrev={handlePrev} />
        <PlayerIcon
          isPlaying={song.isPlaying}
          pressedPlay={(e) => playHasChange(e)}
        />
        <NextButton pressedNext={handleNext} />
      </Container>
    );
  },
);

import { SongCard } from '$/components/SongCard';
import { Text } from '$/components/Text';
import React, { useEffect } from 'react';

import { Container, MainAudio, SongRange, Timer } from './styles';
import { Props, Song } from './types';

export const AudioPlayer = React.forwardRef<HTMLDivElement, Props>(
  ({ className, currentSong }, ref) => {
    const [song, setSong] = React.useState<Song>(currentSong);
    const [songDuration, setSongDuration] = React.useState(0);
    const [songCurrentTime, setSongCurrentTime] = React.useState(0);

    console.log(currentSong, 'Que llega al audio player');
    console.log('Prueba');

    useEffect(() => {
      const au = document.getElementById('main-audio') as HTMLAudioElement;
      au.src = song.audio.url;
      au.addEventListener(
        'loadedmetadata',
        function () {
          setSongDuration(au.duration);
        },
        false,
      );
    }, [song.audio.url]);

    function parseTime(time: number) {
      const totalNumberOfSeconds = Math.floor(time);
      const hours = Math.floor(totalNumberOfSeconds / 3600);
      const minutes = Math.floor((totalNumberOfSeconds - hours * 3600) / 60);
      const seconds = Math.floor(
        totalNumberOfSeconds - (hours * 3600 + minutes * 60),
      );
      const result = `${minutes < 10 ? +minutes : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
      }`;
      return result;
    }

    function updateTime(e: React.ChangeEvent<HTMLInputElement>) {
      setSongCurrentTime(+e.target.value);
    }

    return (
      <Container>
        <MainAudio id="main-audio" src={song.audio.url} />
        <Timer>{parseTime(songCurrentTime)}</Timer>
        <SongRange
          type="range"
          max={songDuration}
          min="0"
          onChange={(e) => updateTime(e)}
        />
        <Timer>{parseTime(songDuration)}</Timer>
      </Container>
    );
  },
);

import { AppContext } from '$/context/AppContext';
import { parseTime, handleNext } from '$/utils/helpers/commonHelper';
import React, { useContext, useEffect } from 'react';

import { Container, MainAudio, SongRange, Timer } from './styles';
import { Props } from './types';

export const AudioPlayer = React.forwardRef<HTMLDivElement, Props>(
  ({ className }, ref) => {
    const { currentPlaying, setCurrentPlaying } = useContext(AppContext);
    const { vanillaSongs } = useContext(AppContext);
    const { isPlaying } = useContext(AppContext);
    const { currentTime, setCurrentTime } = useContext(AppContext);
    const [songDuration, setSongDuration] = React.useState(0);

    function startTimer(audio: HTMLAudioElement) {
      setInterval(() => {
        setCurrentTime(audio.currentTime);
      }, 250);
    }

    function updateTime(e: React.ChangeEvent<HTMLInputElement>) {
      const au = document.querySelector('#main-audio') as HTMLAudioElement;
      au.currentTime = +e.target.value;
      setCurrentTime(+e.target.value);
    }

    useEffect(() => {
      const au = document.getElementById('main-audio') as HTMLAudioElement;
      au.src = currentPlaying.audio.url;
      au.addEventListener(
        'loadedmetadata',
        () => {
          setSongDuration(au.duration);
        },
        { once: true },
      );

      if (isPlaying) {
        au.play()
          .then(() => console.log())
          .catch((error) => console.log(error, 'error del play'));
      } else {
        au.pause();
      }
    }, [currentPlaying]);

    useEffect(() => {
      const au = document.getElementById('main-audio') as HTMLAudioElement;
      if (isPlaying) {
        au.play()
          .then(() => console.log())
          .catch((error) => console.log(error, 'error del play'));
      } else {
        au.pause();
      }
    }, [isPlaying]);

    useEffect(() => {
      const au = document.getElementById('main-audio') as HTMLAudioElement;
      currentTime >= au.duration ? handleNext(currentPlaying.id, vanillaSongs, setCurrentPlaying) : '';
    }, [currentTime]);

    useEffect(() => {
      const au = document.getElementById('main-audio') as HTMLAudioElement;
      startTimer(au);
    }, []);

    return (
      <Container>
        <MainAudio id="main-audio" src={currentPlaying.audio.url} />
        <Timer>{parseTime(currentTime)}</Timer>
        <SongRange
          type="range"
          max={Math.floor(songDuration)}
          min="0"
          onChange={(e) => updateTime(e)}
          value={currentTime}
        />
        <Timer>{parseTime(songDuration)}</Timer>
      </Container>
    );
  },
);

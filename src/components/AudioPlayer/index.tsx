import { AppContext } from '$/context/AppContext';
import { handleNext, parseTime } from '$/utils/helpers/commonHelper';
import React, { useContext, useEffect, useRef } from 'react';

import {
  Container,
  MainAudio,
  SongRange,
  Timer,
  VolumeControl,
} from './styles';
import { Props } from './types';

export const AudioPlayer = React.forwardRef<HTMLDivElement, Props>(
  ({ className }, ref) => {
    const { currentPlaying, setCurrentPlaying } = useContext(AppContext);
    const { vanillaSongs } = useContext(AppContext);
    const { isPlaying } = useContext(AppContext);
    const { currentTime, setCurrentTime } = useContext(AppContext);
    const { volumeIsOn, setVolumeIsOn } = useContext(AppContext);
    const [songDuration, setSongDuration] = React.useState(0);
    const audioPlayer = useRef<HTMLAudioElement>(null);

    function startTimer(audio: HTMLAudioElement) {
      setInterval(() => {
        setCurrentTime(audio.currentTime);
      }, 250);
    }

    function updateTime(e: React.ChangeEvent<HTMLInputElement>) {
      if (audioPlayer && audioPlayer.current) {
        audioPlayer.current.currentTime = +e.target.value;
        setCurrentTime(+e.target.value);
      }
    }

    useEffect(() => {
      if (audioPlayer && audioPlayer.current) {
        audioPlayer.current.src = currentPlaying.audio.url;
        audioPlayer.current.addEventListener(
          'loadedmetadata',
          () => {
            if (audioPlayer.current) {
              setSongDuration(audioPlayer.current.duration);
            }
          },
          { once: true },
        );

        if (isPlaying) {
          audioPlayer.current
            .play()
            .then(() => console.log())
            .catch((error) => console.log(error, 'error del play'));
        } else {
          audioPlayer.current.pause();
        }
      }
    }, [currentPlaying]);

    useEffect(() => {
      if (isPlaying && audioPlayer && audioPlayer.current) {
        audioPlayer.current
          .play()
          .then(() => console.log())
          .catch((error) => console.log(error, 'error del play'));
      } else if (audioPlayer && audioPlayer.current) {
        audioPlayer.current.pause();
      }
    }, [isPlaying]);

    useEffect(() => {
      if (isPlaying && audioPlayer && audioPlayer.current) {
        if (currentTime >= audioPlayer.current.duration) {
          handleNext(currentPlaying.id, vanillaSongs, setCurrentPlaying);
        }
      }
    }, [currentTime]);

    useEffect(() => {
      if (audioPlayer && audioPlayer.current) {
        startTimer(audioPlayer.current);
      }
    }, []);

    useEffect(() => {
      if (audioPlayer && audioPlayer.current) {
        audioPlayer.current.muted = !volumeIsOn;
      }
    }, [volumeIsOn]);

    return (
      <Container className={className} ref={ref}>
        <MainAudio
          ref={audioPlayer}
          id="main-audio"
          src={currentPlaying.audio.url}
        />
        <Timer>{parseTime(currentTime)}</Timer>
        <SongRange
          type="range"
          max={Math.floor(songDuration)}
          min="0"
          onChange={(e) => updateTime(e)}
          value={currentTime}
        />
        <Timer>{parseTime(songDuration)}</Timer>
        {volumeIsOn ? (
          <VolumeControl
            className="material-icons"
            onClick={() => setVolumeIsOn(false)}
          >
            &#xe04d;
          </VolumeControl>
        ) : (
          <VolumeControl
            className="material-icons"
            onClick={() => setVolumeIsOn(true)}
          >
            &#xe04f;
          </VolumeControl>
        )}
      </Container>
    );
  },
);

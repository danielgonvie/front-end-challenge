import { HTMLAttributes } from 'react';

interface Song {
  id: number;
  name: string;
  image: string;
  description: string;
  genre: string;
  audio: { url: string };
  author: { name: string };
  liked: boolean;
  isPlaying: boolean;
}

export type Props = HTMLAttributes<HTMLDivElement> & {
  className?: string;
  songData: Song;
  isPlaying: boolean;
  onChangeLiked: (a: number, b: boolean) => void;
  onChangePlay: (a: number, b: boolean) => void;
};

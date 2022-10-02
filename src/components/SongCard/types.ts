import { HTMLAttributes } from 'react';

interface Song {
  id: number;
  name: string;
  image: string;
  description: string;
  genre: string;
  audio: { url: string };
  author: { name: string };
}

export type Props = HTMLAttributes<HTMLDivElement> & {
  className?: string;
  songData: Song;
};

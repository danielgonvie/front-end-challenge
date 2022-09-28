import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLButtonElement> & {
  className?: string;
  isPlaying: boolean;
  pressedPlay: (a: boolean) => void;
};

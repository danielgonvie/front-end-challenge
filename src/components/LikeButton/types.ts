import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLButtonElement> & {
  className?: string;
  isLiked: boolean;
  pressedLike: (a: boolean) => void;
};

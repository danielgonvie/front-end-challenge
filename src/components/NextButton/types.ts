import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLButtonElement> & {
  className?: string;
  pressedNext: () => void;
};

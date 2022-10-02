import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLButtonElement> & {
  className?: string;
  errorMessage: string;
};

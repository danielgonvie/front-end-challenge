import { SelectHTMLAttributes } from 'react';

export type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  className?: string;
  onChangeSort: (a: string) => void;
};

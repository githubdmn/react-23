import { ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode;
  version?: string;
  type: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
};

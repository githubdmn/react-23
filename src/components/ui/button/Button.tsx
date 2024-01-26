import { memo } from 'react';
import { PropsWithChildren } from '../../../shared/types/ChildrenComponent';
import styles from './button.module.css';

type ButtonProps = PropsWithChildren & {
  onClick?: () => void;
};

export const Button = memo(({ children, onClick }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
});

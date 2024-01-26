import { ReactNode, memo } from 'react';
import { PropsWithChildren } from '../../../shared/types/ChildrenComponent';
import styles from './button.module.css';

type ButtonProps = PropsWithChildren & {
  type?: 'primary' | 'secondary';
  onClick?: () => void;
  icon?: ReactNode;
};

export const Button = memo(
  ({ children, type = 'primary', onClick, icon }: ButtonProps) => {
    const buttonTypeStyles =
      type === 'primary' ? styles.primaryButton : styles.secondaryButton;

    return (
      <button
        className={`${styles.button} ${buttonTypeStyles}`}
        onClick={onClick}
      >
        {children}
        {icon && <div className={styles.iconContainer}>{icon}</div>}
      </button>
    );
  }
);

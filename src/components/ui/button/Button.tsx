import { ReactNode, memo } from 'react';
import { PropsWithChildren } from '../../../shared/types/ChildrenComponent';
import styles from './button.module.css';
import { ClipLoader } from 'react-spinners';

type ButtonProps = PropsWithChildren & {
  type?: 'primary' | 'secondary';
  onClick?: () => void;
  icon?: ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
};

export const Button = memo(
  ({
    children,
    type = 'primary',
    onClick,
    icon,
    isDisabled,
    isLoading,
  }: ButtonProps) => {
    const buttonTypeStyles =
      type === 'primary' ? styles.primaryButton : styles.secondaryButton;

    return (
      <button
        className={`${styles.button} ${buttonTypeStyles}`}
        onClick={onClick}
        disabled={isDisabled}
      >
        {isLoading ? <ClipLoader size={'0.825rem'} /> : children}
        {icon && <div className={styles.iconContainer}>{icon}</div>}
      </button>
    );
  }
);

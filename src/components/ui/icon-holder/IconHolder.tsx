import { PropsWithChildren } from 'react';
import styles from './iconHolder.module.css';

type IconHolderProps = {
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
} & PropsWithChildren;

export const IconHolder = ({ children, onClick }: IconHolderProps) => {
  return (
    <div className={styles.iconWrapper} onClick={onClick}>
      {children}
    </div>
  );
};

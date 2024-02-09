import { PropsWithChildren } from '../../../shared/types/ChildrenComponent';
import styles from './popup.module.css';

type PopupProps = {
  onOutsideClick?: () => void;
} & PropsWithChildren;

export const Popup = ({ onOutsideClick, children }: PopupProps) => {
  return (
    <>
      <div className={styles.overlay} onClick={onOutsideClick} />
      <div className={styles.popup}>{children}</div>
    </>
  );
};

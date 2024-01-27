import { PropsWithChildren } from '../../shared/types/ChildrenComponent';
import { EditIcon } from '../../assets/iconography/EditIcon';
import styles from './todoItem.module.css';
import { useState } from 'react';
import { Popup } from '../ui/popup/Popup';
import { IconHolder } from '../ui/icon-holder/IconHolder';

export const TodoItem = ({ children }: PropsWithChildren) => {
  const [isEditModeOpen, setIsEditModeOpen] = useState<boolean>(false);

  const togglePopup = () => {
    setIsEditModeOpen((prevState) => !prevState);
  };

  return (
    <>
      {isEditModeOpen && (
        <Popup onOutsideClick={togglePopup}>
          <div></div>
        </Popup>
      )}
      <div className={styles.itemWrapper}>
        {children}
        <div className={styles.editIconContainer}>
          <IconHolder onClick={togglePopup}>
            <EditIcon />
          </IconHolder>
        </div>
      </div>
    </>
  );
};

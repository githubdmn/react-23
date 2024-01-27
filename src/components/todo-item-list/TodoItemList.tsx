import { Button } from '../ui/button/Button';
import { ArrowDownIcon } from '../../assets/iconography/ArrowDownIcon';
import { useState } from 'react';
import styles from './todoItemList.module.css';
import { TodoItem } from '../todo-item/TodoItem';
import { Popup } from '../ui/popup/Popup';
import { DeleteIcon } from '../../assets/iconography/DeleteIcon';
import { EditIcon } from '../../assets/iconography/EditIcon';
import { IconHolder } from '../ui/icon-holder/IconHolder';

type TodoListProps = {
  title: string;
  items: string[];
};

export const TodoList = ({ title, items }: TodoListProps) => {
  const [isAddNewItemActive, setIsAddNewItemActive] = useState<boolean>(false);
  const [isEditListActive, setIsEditListActive] = useState<boolean>(false);
  const [isItemOpened, setIsItemOpened] = useState<boolean>(false);

  const toggleTodoItem = () => {
    setIsItemOpened((prevState) => !prevState);
  };

  const toggleAddNewItemPopup = () => {
    setIsAddNewItemActive((prevState) => !prevState);
  };

  const openEditListPopup = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsEditListActive(true);
  };

  const closeEditListPopup = () => {
    setIsEditListActive(false);
  };

  const handleListDelete = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      {isAddNewItemActive && (
        <Popup onOutsideClick={toggleAddNewItemPopup}>
          <></>
        </Popup>
      )}
      {isEditListActive && (
        <Popup onOutsideClick={closeEditListPopup}>
          <></>
        </Popup>
      )}
      <div>
        <Button
          type="secondary"
          icon={
            <div
              className={`${styles.arrowWrapper} ${
                isItemOpened
                  ? styles.arrowWrapperOpen
                  : styles.arrowWrapperClose
              }`}
            >
              <ArrowDownIcon />
            </div>
          }
          onClick={toggleTodoItem}
        >
          {title}
          <div className={styles.iconsContainer}>
            <IconHolder onClick={handleListDelete}>
              <DeleteIcon />
            </IconHolder>
            <IconHolder onClick={openEditListPopup}>
              <EditIcon color="white" />
            </IconHolder>
          </div>
        </Button>
        <div
          className={`${styles.itemsContainer} ${
            isItemOpened
              ? styles.itemsContainerOpen
              : styles.itemsContainerClose
          }`}
        >
          <div className={styles.itemsBodyWrapper}>
            <div className={styles.itemsListContainer}>
              {items.map((item) => (
                <TodoItem key={item}>{item}</TodoItem>
              ))}
              <div className={styles.addItem} onClick={toggleAddNewItemPopup}>
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

import { Button } from '../ui/button/Button';
import { ArrowDown } from '../../assets/iconography/ArrowDown';
import { useState } from 'react';
import styles from './todoItemList.module.css';
import { TodoItem } from '../todo-item/TodoItem';

type TodoItemProps = {
  title: string;
  items: string[];
};

export const TodoItemList = ({ title, items }: TodoItemProps) => {
  const [isItemOpened, setIsItemOpened] = useState<boolean>(false);

  const toggleTodoItem = () => {
    setIsItemOpened((prevState) => !prevState);
  };

  return (
    <div>
      <Button
        type="secondary"
        icon={
          <div
            className={`${styles.arrowWrapper} ${
              isItemOpened ? styles.arrowWrapperOpen : styles.arrowWrapperClose
            }`}
          >
            <ArrowDown />
          </div>
        }
        onClick={toggleTodoItem}
      >
        {title}
      </Button>
      <div
        className={`${styles.itemsContainer} ${
          isItemOpened ? styles.itemsContainerOpen : styles.itemsContainerClose
        }`}
      >
        <div className={styles.itemsBodyWrapper}>
          <div className={styles.itemsListContainer}>
            {items.map((item) => (
              <TodoItem>{item}</TodoItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

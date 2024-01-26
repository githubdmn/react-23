import { Button } from '../../../components/ui/button/Button';
import { useUser } from '../../../store/user/UserContext';
import styles from './home.module.css';
import { mockedTodoList } from './mockedTodoList';
import { TodoItemList } from '../../../components/todo-item-list/TodoItemList';

export const Home = () => {
  const { clearUser, user } = useUser();

  return (
    <main>
      <h1>Welcome back {user!.username}</h1>
      <div className={styles.logOutButtonWrapper}>
        <Button onClick={clearUser}>Log out</Button>
      </div>
      <div className={styles.listContainer}>
        <p className={styles.listTitle}>Your Todo list:</p>
        <div className={styles.listItemsWrapper}>
          {mockedTodoList.map((todoItem) => (
            <TodoItemList title={todoItem.title} items={todoItem.items} />
          ))}
        </div>
      </div>
    </main>
  );
};

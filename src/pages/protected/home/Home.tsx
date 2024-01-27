import { Button } from '../../../components/ui/button/Button';
import { useUser } from '../../../store/user/UserContext';
import styles from './home.module.css';
import { mockedTodoList } from './mockedTodoList';
import { TodoList } from '../../../components/todo-item-list/TodoItemList';
import { useQuery } from 'react-query';
import { getQueryKey } from '../../../shared/helpers/getQueryKey';
import { ApiResource } from '../../../enums/apiResource';
import { apiProtectedClient } from '../../../api/axiosClient';
import { apiEndpoints } from '../../../api/apiEndpoints';
import { useState } from 'react';
import { Popup } from '../../../components/ui/popup/Popup';

export const Home = () => {
  const [isAddListPopupOpen, setIsAddListPopupOpen] = useState<boolean>(false);

  const { clearUser, user } = useUser();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: getQueryKey(ApiResource.TODO_LIST, user!.id),
    queryFn: () =>
      apiProtectedClient.get(apiEndpoints.get.lists, {
        headers: {
          access_token: '?',
        },
      }),
  });

  const toggleAddListPopup = () => {
    setIsAddListPopupOpen((prevState) => !prevState);
  };

  return (
    <>
      {isAddListPopupOpen && (
        <Popup onOutsideClick={toggleAddListPopup}>
          <></>
        </Popup>
      )}
      <main>
        <h1>Welcome back {user!.id}</h1>
        <div className={styles.logOutButtonWrapper}>
          <Button onClick={clearUser}>Log out</Button>
        </div>
        <div className={styles.listContainer}>
          <div className={styles.listTitleWrapper}>
            <p className={styles.listTitle}>Your Todo list:</p>
            <div className={styles.addNewList} onClick={toggleAddListPopup}>
              Add new list +
            </div>
          </div>
          <div className={styles.listItemsWrapper}>
            {mockedTodoList.map((todoItem) => (
              <TodoList
                key={todoItem.title}
                title={todoItem.title}
                items={todoItem.items}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

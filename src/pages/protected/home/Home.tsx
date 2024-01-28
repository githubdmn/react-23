import { useUser } from '../../../store/user/UserContext';
import styles from './home.module.css';
import protectedStyles from '../../../shared/styles/protected-styles/protectedStyles.module.css';
import { TodoList } from '../../../components/todo-item-list/TodoItemList';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getQueryKey } from '../../../shared/helpers/getQueryKey';
import { ApiResource } from '../../../enums/apiResource';
import { apiClient } from '../../../api/axiosClient';
import { apiEndpoints } from '../../../api/apiEndpoints';
import { useState } from 'react';
import { Popup } from '../../../components/ui/popup/Popup';
import { FormInput } from '../../../components/ui/input/FormInput';
import { useForm } from 'react-hook-form';
import {
  AddItemFormData,
  addItemFormFields,
  addItemSchema,
} from '../../../shared/schemas/addListSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../../../components/ui/button/Button';
import { AxiosResponse } from 'axios';
import { AddListRequest } from '../../../api/requestes/AddListRequest';
import { ClipLoader } from 'react-spinners';
import { TodoListsResponse } from '../../../api/responses/TodoListsResponse';

export const Home = () => {
  const queryClient = useQueryClient();

  const [isAddListPopupOpen, setIsAddListPopupOpen] = useState<boolean>(false);

  const { user } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<AddItemFormData>({
    mode: 'onChange',
    resolver: zodResolver(addItemSchema),
  });

  const {
    data: todoLists,
    isLoading: isLoadingLists,
    isError: isErrorLists,
    refetch,
  } = useQuery<AxiosResponse<TodoListsResponse[]>>({
    queryKey: getQueryKey(ApiResource.TODO_LISTS, user!.id),
    queryFn: () => apiClient.get(apiEndpoints.get.lists),
  });

  const { mutate, isLoading: isLoadingAddList } = useMutation<
    AxiosResponse,
    Error,
    AddListRequest
  >({
    mutationFn: (data) => apiClient.post(apiEndpoints.post.createList, data),
    onSuccess: () => {
      queryClient.invalidateQueries(
        getQueryKey(ApiResource.TODO_LISTS, user!.id)
      );
      toggleAddListPopup();
      setValue(addItemFormFields.title, '');
    },
  });

  const toggleAddListPopup = () => {
    setIsAddListPopupOpen((prevState) => !prevState);
  };

  const handleAddNewList = ({ title }: AddItemFormData) => {
    mutate({ title, userId: user!.id.toString() });
  };

  if (isLoadingLists) return <ClipLoader />;

  if (isErrorLists || !todoLists)
    return <Button onClick={refetch}>Refetch!</Button>;

  return (
    <>
      {isAddListPopupOpen && (
        <Popup onOutsideClick={toggleAddListPopup}>
          <form
            className={protectedStyles.addItemFormWrapper}
            onSubmit={handleSubmit(handleAddNewList)}
          >
            <FormInput
              name={addItemFormFields.title}
              label="Title"
              register={register}
              error={errors[addItemFormFields.title]}
            />
            <Button isLoading={isLoadingAddList}>Add</Button>
          </form>
        </Popup>
      )}
      <main>
        <h1>Welcome back {user?.id}</h1>
        <div className={styles.listContainer}>
          <div className={styles.listTitleWrapper}>
            <p className={styles.listTitle}>Your Todo list:</p>
            <div className={styles.addNewList} onClick={toggleAddListPopup}>
              Add new list +
            </div>
          </div>
          <div className={styles.listItemsWrapper}>
            {todoLists.data.map(({ title, listId }) => (
              <TodoList key={title} title={title} listId={listId} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

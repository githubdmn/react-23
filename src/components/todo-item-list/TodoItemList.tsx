import { Button } from '../ui/button/Button';
import { ArrowDownIcon } from '../../assets/iconography/ArrowDownIcon';
import protectedStyles from '../../shared/styles/protected-styles/protectedStyles.module.css';
import { useState } from 'react';
import styles from './todoItemList.module.css';
import { Popup } from '../ui/popup/Popup';
import { DeleteIcon } from '../../assets/iconography/DeleteIcon';
import { EditIcon } from '../../assets/iconography/EditIcon';
import { IconHolder } from '../ui/icon-holder/IconHolder';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getQueryKey } from '../../shared/helpers/getQueryKey';
import { ApiResource } from '../../enums/apiResource';
import { AxiosResponse } from 'axios';
import { apiClient } from '../../api/axiosClient';
import { apiEndpoints } from '../../api/apiEndpoints';
import { useUser } from '../../store/user/UserContext';
import { TodoListResponse } from '../../api/responses/TodoListResponse';
import { TodoItem } from '../todo-item/TodoItem';
import { ClipLoader } from 'react-spinners';
import {
  AddItemFormData,
  addItemFormFields,
  addItemSchema,
} from '../../shared/schemas/addListSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormInput } from '../ui/input/FormInput';
import { AddItemRequest } from '../../api/requestes/AddItemRequest';
import { EditListRequest } from '../../api/requestes/EditListRequest';

type TodoListProps = {
  title: string;
  listId: string;
};

export const TodoList = ({ title, listId }: TodoListProps) => {
  const queryClient = useQueryClient();

  const [isAddNewItemActive, setIsAddNewItemActive] = useState<boolean>(false);
  const [isEditListActive, setIsEditListActive] = useState<boolean>(false);
  const [isItemOpened, setIsItemOpened] = useState<boolean>(false);

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
    register: registerEditList,
    handleSubmit: handleSubmitEditList,
    formState: { errors: errorsEditList },
    setValue: setValueEditList,
  } = useForm<AddItemFormData>({
    mode: 'onChange',
    resolver: zodResolver(addItemSchema),
  });

  const {
    data: todoList,
    isLoading: isLoadingList,
    isError: isErrorList,
    refetch,
  } = useQuery<AxiosResponse<TodoListResponse, Error>>({
    queryKey: getQueryKey(ApiResource.TODO_LIST, listId),
    queryFn: () => apiClient.get(apiEndpoints.get.list(listId)),
  });

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

  const { mutate: mutateAddItem, isLoading: isLoadingAddItem } = useMutation<
    AxiosResponse,
    Error,
    AddItemRequest
  >({
    mutationFn: (data) => apiClient.post(apiEndpoints.post.item, data),
    onSuccess: () => {
      queryClient.invalidateQueries(getQueryKey(ApiResource.TODO_LIST, listId));
      setValue(addItemFormFields.title, '');
      toggleAddNewItemPopup();
    },
  });

  const { mutate: mutateEditList, isLoading: isLoadingEditList } = useMutation<
    AxiosResponse,
    Error,
    EditListRequest
  >({
    mutationFn: (data) => apiClient.patch(apiEndpoints.update.updateList, data),
    onSuccess: () => {
      queryClient.invalidateQueries(
        getQueryKey(ApiResource.TODO_LISTS, user!.id)
      );
      setValueEditList(addItemFormFields.title, '');
      toggleAddNewItemPopup();
    },
  });

  const { mutate: deleteList } = useMutation<AxiosResponse>({
    mutationFn: () => apiClient.delete(apiEndpoints.delete.list(listId)),
    onSuccess: () => {
      queryClient.invalidateQueries(getQueryKey(ApiResource.TODO_LISTS));
    },
  });

  const handleListDelete = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    deleteList();
  };

  const handleAddNewItem = ({ title }: AddItemFormData) => {
    mutateAddItem({
      listId,
      userId: user!.id.toString(),
      text: title,
      isDone: false,
    });
  };

  const handleListEdit = ({ title }: AddItemFormData) => {
    mutateEditList({
      userId: user!.id.toString(),
      listId,
      title,
    });
  };

  if (isLoadingList) return <ClipLoader />;

  if (isErrorList) return <Button onClick={refetch}>Refetch!</Button>;

  return (
    <>
      {isAddNewItemActive && (
        <Popup onOutsideClick={toggleAddNewItemPopup}>
          <form
            className={protectedStyles.addItemFormWrapper}
            onSubmit={handleSubmit(handleAddNewItem)}
          >
            <FormInput
              name={addItemFormFields.title}
              label="Title"
              register={register}
              error={errors[addItemFormFields.title]}
            />
            <Button isLoading={isLoadingAddItem}>Add</Button>
          </form>
        </Popup>
      )}
      {isEditListActive && (
        <Popup onOutsideClick={closeEditListPopup}>
          <form
            className={protectedStyles.addItemFormWrapper}
            onSubmit={handleSubmitEditList(handleListEdit)}
          >
            <FormInput
              name={addItemFormFields.title}
              label="Title"
              register={registerEditList}
              error={errorsEditList[addItemFormFields.title]}
            />
            <Button isLoading={isLoadingEditList}>Add</Button>
          </form>
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
              {todoList?.data.items.map(({ itemId, text, isDone }) => (
                <TodoItem
                  key={itemId}
                  text={text}
                  listId={listId}
                  itemId={itemId}
                  isDone={isDone}
                />
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

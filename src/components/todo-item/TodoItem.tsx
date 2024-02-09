import protectedStyles from '../../shared/styles/protected-styles/protectedStyles.module.css';
import { EditIcon } from '../../assets/iconography/EditIcon';
import styles from './todoItem.module.css';
import { useState } from 'react';
import { Popup } from '../ui/popup/Popup';
import { IconHolder } from '../ui/icon-holder/IconHolder';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  AddItemFormData,
  addItemFormFields,
  addItemSchema,
} from '../../shared/schemas/addListSchema';
import { FormInput } from '../ui/input/FormInput';
import { Button } from '../ui/button/Button';
import { useMutation, useQueryClient } from 'react-query';
import { AxiosResponse } from 'axios';
import { apiClient } from '../../api/axiosClient';
import { apiEndpoints } from '../../api/apiEndpoints';
import { UpdateItemRequest } from '../../api/requestes/UpdateItemRequest';
import { getQueryKey } from '../../shared/helpers/getQueryKey';
import { ApiResource } from '../../enums/apiResource';
import { useUser } from '../../store/user/UserContext';
import { CheckedIcon } from '../../assets/iconography/CheckedIcon';

type TodoItemProps = {
  listId: string;
  itemId: string;
  isDone: boolean;
  text: string;
};

export const TodoItem = ({ listId, itemId, isDone, text }: TodoItemProps) => {
  const queryClient = useQueryClient();

  const [isEditModeOpen, setIsEditModeOpen] = useState<boolean>(false);

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

  const openPopup = () => {
    setIsEditModeOpen(true);
  };

  const closePopup = () => {
    setIsEditModeOpen(false);
  };

  const { mutate, isLoading } = useMutation<
    AxiosResponse,
    Error,
    UpdateItemRequest
  >({
    mutationFn: (data) => apiClient.patch(apiEndpoints.post.item, data),
    onSuccess: () => {
      queryClient.invalidateQueries(getQueryKey(ApiResource.TODO_LIST, listId));
      setValue(addItemFormFields.title, '');
      closePopup();
    },
  });

  const handleEditItem = ({ title }: AddItemFormData) => {
    mutate({
      userId: user!.id.toString(),
      listId,
      itemId,
      text: title,
      isDone: false,
    });
  };

  return (
    <>
      {isEditModeOpen && (
        <Popup onOutsideClick={closePopup}>
          <form
            className={protectedStyles.addItemFormWrapper}
            onSubmit={handleSubmit(handleEditItem)}
          >
            <FormInput
              name={addItemFormFields.title}
              label="Title"
              register={register}
              error={errors[addItemFormFields.title]}
            />
            <Button isLoading={isLoading}>Add</Button>
          </form>
        </Popup>
      )}
      <div className={`${styles.itemWrapper} ${isDone && styles.itemDone}`}>
        {text}
        {!isDone && (
          <div className={styles.iconsContainer}>
            <IconHolder onClick={openPopup}>
              <EditIcon />
            </IconHolder>
            <IconHolder
              onClick={(e) => {
                e.stopPropagation();
                mutate({
                  userId: user!.id.toString(),
                  listId,
                  itemId,
                  text,
                  isDone: true,
                });
              }}
            >
              <CheckedIcon />
            </IconHolder>
          </div>
        )}
      </div>
    </>
  );
};

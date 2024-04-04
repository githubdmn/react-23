import { useMutation } from 'react-query';
import { endpoints } from '../../api/endpoints';
import { axiosInstance } from '../../api/axiosInstance';
import { getAccessToken } from '../../api/tokenHelpers';
import { UserResponse } from '../../api/responses/userResponse';
import { useUserStore } from '../../store/userStore';
import { useEffect } from 'react';

export const useGetUser = () => {
  const { email } = useUserStore();
  const accessToken = getAccessToken();

  const { data, mutate, isError, isLoading } = useMutation<UserResponse>({
    mutationFn: () => axiosInstance.post(endpoints.user, { email }),
  });

  useEffect(() => {
    if (email && !data) mutate();
  }, [email, mutate, data]);

  return { data, isLoading, isError, accessToken, mutate, email };
};

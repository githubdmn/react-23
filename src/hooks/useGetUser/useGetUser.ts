import { useQuery } from 'react-query';
import { endpoints } from '../../api/endpoints';
import { ApiResource } from '../../enums/apiResource';
import { axiosInstance } from '../../api/axiosInstance';
import { getAccessToken } from '../../api/tokenHelpers';
import { AxiosResponse } from 'axios';
import { UserResponse } from '../../api/responses/userResponse';

export const useGetUser = () => {
  const accessToken = getAccessToken();

  const { data, isLoading, isError } = useQuery<AxiosResponse<UserResponse>>({
    queryKey: ApiResource.USER,
    queryFn: () => axiosInstance.get(endpoints.user),
  });

  return { data, isLoading, isError, accessToken };
};

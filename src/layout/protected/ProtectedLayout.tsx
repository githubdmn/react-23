import { Outlet } from 'react-router-dom';
import styles from './protectedLayout.module.css';
import { Button } from '../../components/ui/button/Button';
import { useUser } from '../../store/user/UserContext';
import { useQuery, useQueryClient } from 'react-query';
import { apiClient } from '../../api/axiosClient';
import { apiEndpoints } from '../../api/apiEndpoints';
import { ClipLoader } from 'react-spinners';
import { removeAccessToken, removeRefreshToken } from '../../api/tokenHelpers';
import { useState } from 'react';

export const ProtectedLayout = () => {
  const [isLogoutActive, setIsLogoutActive] = useState<boolean>(false);

  const { clearUser } = useUser();

  const queryClient = useQueryClient();

  useQuery({
    queryFn: () => apiClient.get(apiEndpoints.get.logout),
    onSuccess: () => {
      clearUser();
      removeAccessToken();
      removeRefreshToken();
      queryClient.invalidateQueries();
    },
    onSettled: () => {
      setIsLogoutActive(false);
    },
    enabled: isLogoutActive,
  });

  if (isLogoutActive)
    return (
      <div className={styles.logoutLoaderWrapper}>
        <ClipLoader />
      </div>
    );

  return (
    <div className={styles.protectedLayoutContainer}>
      <div className={styles.logOutButtonWrapper}>
        <Button onClick={() => setIsLogoutActive(true)}>Log out</Button>
      </div>
      <Outlet />
    </div>
  );
};

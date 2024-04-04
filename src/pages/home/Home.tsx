import { useEffect } from 'react';
import { Button, Heading, Spinner } from '../../components';
import { useGetUser } from '../../hooks/useGetUser/useGetUser';
import { SpinnerWrapper } from '../../shared/styles/spinnerWrapper.styles';
import { useUserStore } from '../../store/userStore';
import { removeAccessToken, removeRefreshToken } from '../../api/tokenHelpers';

export const Home = () => {
  const { removeEmail } = useUserStore();
  const { data, isLoading, isError, mutate } = useGetUser();

  useEffect(() => {
    mutate();
  }, [mutate]);

  const handleLogoutClick = () => {
    removeEmail();
    removeAccessToken();
    removeRefreshToken();
  };

  if (isLoading) {
    return (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    );
  }

  if (isError) {
    return <Heading>Request failed!</Heading>;
  }

  if (data)
    return (
      <>
        <Heading>{data?.message}</Heading>
        <Button onClick={handleLogoutClick}>Logout</Button>
      </>
    );
};

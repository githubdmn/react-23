import { Navigate, Outlet } from 'react-router-dom';

import { routes } from '../../router/routes';
import { SpinnerWrapper } from '../../shared/styles/spinnerWrapper.styles';
import { Spinner } from '..';
import { useGetUser } from '../../hooks/useGetUser/useGetUser';

export const ProtectedRoute = () => {
  const { email, isLoading, accessToken } = useGetUser();

  if (!accessToken) {
    return <Navigate to={routes.signUp} />;
  }

  if (isLoading) {
    return (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    );
  }

  if (!email) {
    return <Navigate to={routes.signUp} />;
  }

  return <Outlet />;
};

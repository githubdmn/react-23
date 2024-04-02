import { Navigate } from 'react-router-dom';

import { routes } from '../../router/routes';
import { SpinnerWrapper } from '../../shared/styles/spinnerWrapper.styles';
import { Spinner } from '..';
import { ReactNode } from 'react';
import { useGetUser } from '../../hooks/useGetUser/useGetUser';

type ProtectedRouteProps = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { data, isLoading, accessToken } = useGetUser();

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

  if (!data) {
    return <Navigate to={routes.root} />;
  }

  return <>{children}</>;
};

import { ReactNode } from 'react';
import { SpinnerWrapper } from '../../shared/styles/spinnerWrapper.styles';
import { Spinner } from '..';
import { Navigate } from 'react-router-dom';
import { routes } from '../../router/routes';
import { useGetUser } from '../../hooks/useGetUser/useGetUser';

type PublicRouteProps = {
  children: ReactNode;
};

export const PublicRoute = ({ children }: PublicRouteProps) => {
  const { data, isLoading, accessToken } = useGetUser();

  if (isLoading && accessToken) {
    return (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    );
  }

  if (!data) {
    return <Navigate to={routes.signUp} />;
  }

  return <>{children}</>;
};

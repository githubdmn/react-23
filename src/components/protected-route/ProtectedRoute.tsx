import { useMemo } from 'react';
import { PropsWithChildren } from '../../shared/types/ChildrenComponent';
import { useUser } from '../../store/user/UserContext';
import { Navigate } from 'react-router-dom';
import { routes } from '../../router/routes';

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { user } = useUser();

  const isUserAuthenticated = useMemo(() => !!user, [user]);

  if (!isUserAuthenticated) return <Navigate to={routes.auth} />;

  return <>{children}</>;
};

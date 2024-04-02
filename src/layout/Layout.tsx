import { Outlet } from 'react-router-dom';
import { StyledLayout } from './layout.styles';

export const Layout = () => {
  return (
    <StyledLayout>
      <Outlet />
    </StyledLayout>
  );
};

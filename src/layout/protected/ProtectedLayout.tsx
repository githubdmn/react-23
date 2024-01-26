import { Outlet } from 'react-router-dom';
import styles from './protectedLayout.module.css';

export const ProtectedLayout = () => {
  return (
    <div className={styles.protectedLayoutContainer}>
      <Outlet />
    </div>
  );
};

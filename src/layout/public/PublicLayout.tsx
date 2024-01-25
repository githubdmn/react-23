import { Outlet } from 'react-router-dom';
import styles from './publicLayout.module.css';

export const PublicLayout = () => {
  return (
    <div className={styles.publicLayoutContainer}>
      <Outlet />
    </div>
  );
};

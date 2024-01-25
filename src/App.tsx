import { RouterProvider } from 'react-router-dom';
import { router } from './router/Router';
import { UserProvider } from './store/user/UserContext';
import './shared/styles/global-styles/globalStyles.module.css';

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;

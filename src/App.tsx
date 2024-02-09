import { RouterProvider } from 'react-router-dom';
import { router } from './router/Router';
import { UserProvider } from './store/user/UserContext';
import './shared/styles/global-styles/globalStyles.module.css';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;

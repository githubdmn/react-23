import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/Router';
import { GlobalStyles } from './globalStyles';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;

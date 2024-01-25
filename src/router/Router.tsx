import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { routes } from './routes';
import { PublicLayout } from '../layout/public/PublicLayout';
import { ProtectedLayout } from '../layout/protected/ProtectedLayout';
import { Login } from '../pages/public/login/Login';
import { Registration } from '../pages/public/registration/Registration';
import { Home } from '../pages/protected/home/Home';
import { ProtectedRoute } from '../components/protected-route/ProtectedRoute';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={routes.auth} element={<PublicLayout />}>
        <Route index element={<Login />} />
        <Route path={routes.register} element={<Registration />} />
      </Route>
      <Route
        path={routes.root}
        element={
          <ProtectedRoute>
            <ProtectedLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Home />} />
      </Route>
    </>
  )
);

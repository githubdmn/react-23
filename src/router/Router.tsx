import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import { PublicRoute } from '../components/public-route/PublicRoute';

import { routes } from './routes';
import { SignUp } from '../pages/sign-up/SignUp';
import { NotFound } from '../pages/not-found/NotFound';
import { ProtectedRoute } from '../components/protected-route/ProtectedRoute';
import { Home } from '../pages/home/Home';
import { Layout } from '../layout/Layout';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        element={
          <PublicRoute>
            <Layout />
          </PublicRoute>
        }
      >
        <Route path={routes.signUp} element={<SignUp />} />
      </Route>
      <Route path={routes.root} element={<ProtectedRoute />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);

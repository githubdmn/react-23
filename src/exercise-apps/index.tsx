import { JSX } from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import { AppConfig } from './types';
import App01Counter from './App01Counter';
import {App01Settings, App01Dashboard, ExerciseAppsMenu} from './components'


export default function ExerciseAppsRoot(): JSX.Element {
  const appsConfig: AppConfig[] = [
    {
      name: 'App01 Counter',
      path: '/counter',
      component: App01Counter,
      color: 'bg-green-500 hover:bg-green-600 focus:ring-green-400',
    },
    {
      name: 'App01 Settings',
      path: '/settings',
      component: App01Settings,
      color: 'bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-400',
    },
    {
      name: 'App01 Dashboard',
      path: '/dashboard',
      component: App01Dashboard,
      color: 'bg-purple-500 hover:bg-purple-600 focus:ring-purple-400',
    },
    // Add new apps here!
    // Example: { name: 'App01 New Feature', path: '/new-feature', component: App01NewFeature, color: 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-400' },
  ];

  // The useEffect for injecting styles is removed from here as styles are now in index.css
  return (
    <BrowserRouter basename="/exercise">
      <Routes>
        <Route
          path="/"
          element={<ExerciseAppsMenu appsConfig={appsConfig} />}
        />

        {appsConfig.map(
          (app: AppConfig): JSX.Element => (
            <Route key={app.path} path={app.path} element={<app.component />} />
          ),
        )}
      </Routes>
    </BrowserRouter>
  );
}

import { JSX } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useNavigate,
  NavigateFunction,
} from 'react-router-dom';

import { AppConfig, ExerciseAppsMenuPropsType } from './types';
import App01Counter from './App01Counter';

const App01Settings: () => JSX.Element = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center p-4 rounded-xl shadow-inner animate-fade-in">
      <div className="bg-white p-8 rounded-xl shadow-2xl border border-teal-200 w-full max-w-sm text-center relative">
        <button
          onClick={(): void => navigate('/')}
          className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 text-sm font-bold w-8 h-8 flex items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
          aria-label="Close Settings App"
        >
          X
        </button>
        <h2 className="text-4xl font-bold text-teal-700 mb-4">
          App01 Settings
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Manage your application settings here.
        </p>
        <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50">
          Save Settings
        </button>
      </div>
    </div>
  );
};

const App01Dashboard: () => JSX.Element = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center p-4 rounded-xl shadow-inner animate-fade-in">
      <div className="bg-white p-8 rounded-xl shadow-2xl border border-orange-200 w-full max-w-sm text-center relative">
        <button
          onClick={() => navigate('/')}
          className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 text-sm font-bold w-8 h-8 flex items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
          aria-label="Close Dashboard App"
        >
          X
        </button>
        <h2 className="text-4xl font-bold text-orange-700 mb-4">
          App01 Dashboard
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          View your application's key metrics.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50">
          Refresh Data
        </button>
      </div>
    </div>
  );
};

const ExerciseAppsMenu: ({
  appsConfig,
}: ExerciseAppsMenuPropsType) => JSX.Element = ({
  appsConfig,
}: ExerciseAppsMenuPropsType): JSX.Element => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="bg-white p-8 rounded-xl shadow-2xl border border-gray-200 w-full max-w-md text-center z-10">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-4 animate-fade-in-down">
          01<span className="text-blue-500">App</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 animate-fade-in-up delay-200">
          Choose an Exercise App:
        </p>

        <div className="space-y-4">
          {appsConfig.map(
            (app: AppConfig): JSX.Element => (
              <Link key={app.path} to={app.path} className="block">
                <button
                  // You can customize button styles based on app.name or add a specific color prop
                  className={`w-full text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50
                  ${app.name === 'App01 Counter' ? 'bg-green-500 hover:bg-green-600 focus:ring-green-400' : ''}
                  ${app.name === 'App01 Settings' ? 'bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-400' : ''}
                  ${app.name === 'App01 Dashboard' ? 'bg-purple-500 hover:bg-purple-600 focus:ring-purple-400' : ''}
                  ${!app.color && !app.name.startsWith('App01') ? 'bg-gray-700 hover:bg-gray-800 focus:ring-gray-600' : ''}
                  ${app.color ? app.color : ''}
                `}
                >
                  {app.name}
                </button>
              </Link>
            ),
          )}
        </div>

        <p className="mt-8 text-sm text-gray-400">
          Built with React Router and Tailwind CSS.
        </p>
      </div>
    </div>
  );
};

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

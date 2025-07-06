import { AppConfig, ExerciseAppsMenuPropsType } from '@/exercise-apps/types';
import { JSX } from 'react';
import { Link } from 'react-router-dom';

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

export default ExerciseAppsMenu;

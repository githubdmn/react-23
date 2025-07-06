import { JSX } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

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

export default App01Dashboard;
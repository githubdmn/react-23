import { AlertContext } from '../../context';
import { useContext } from 'react';

const Alert = () => {
  const { alert } = useContext(AlertContext);
  return (
    <div>
      {alert !== null && (
        <div className="flex items-start mb-4 space-x-2">
          {alert.type === 'error' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="flex-none w-6 h-6 alert-error"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx="12" cy="12" r="10" fill='#FECDD3' />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
          <p className="flex-1 text-base font-semibold leading-7 text-white">
            <strong>{alert.message}</strong>
          </p>
        </div>
      )}
    </div>
  );
};export default Alert;

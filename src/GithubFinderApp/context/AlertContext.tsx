import { createContext, useReducer, ReactNode } from 'react';
import alertReducer, { AlertState } from './AlertReducer';

interface AlertContextType {
  alert: AlertState;
  setAlert: (message: string, type: string) => void;
}

const AlertContext = createContext<AlertContextType>({
  alert: null,
  setAlert: () => {},
});

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const initialState: AlertState = null;
  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (message: string, type: string) => {
    dispatch({
      type: 'SET_ALERT',
      payload: { message, type },
    });

    setTimeout(() => {
      dispatch({
        type: 'REMOVE_ALERT',
      });
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;

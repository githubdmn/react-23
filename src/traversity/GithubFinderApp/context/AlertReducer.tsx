export type AlertState = { message: string; type: string } | null;

export type AlertAction =
  | { type: 'SET_ALERT'; payload: { message: string; type: string } }
  | { type: 'REMOVE_ALERT' };

const alertReducer = (state: AlertState, action: AlertAction): AlertState => {
  switch (action.type) {
    case 'SET_ALERT':
      return action.payload;
    case 'REMOVE_ALERT':
      return null;
    default:
      return state;
  }
};

export default alertReducer;

/* eslint-disable @typescript-eslint/no-explicit-any */

const GithubReducer = (state: any, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};
export default GithubReducer;

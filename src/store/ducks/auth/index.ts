import { Reducer } from 'redux';
import { AuthState, AuthTypes } from './types';

const INITIAL_STATE: AuthState = {
  data: [],
  error: false,
  isLoggedIn: false,
  loading: false,
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.LOAD_REQUEST:
      return { ...state, loading: true, isLoggedIn: false };
    case AuthTypes.LOAD_SUCCCES:
      return {
        ...state,
        loading: false,
        error: false,
        isLoggedIn: true,
        data: action.payload.data,
      };
    case AuthTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        isLoggedIn: false,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;

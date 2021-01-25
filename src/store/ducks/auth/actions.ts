import { action } from 'typesafe-actions';
import { AuthTypes, Auth } from './types';

export function authentication(auth: Auth) {
  return {
    type: AuthTypes.LOAD_REQUEST,
    payload: {
      auth,
    },
  };
}
export function authenticationSuccess(auth: Auth) {
  return {
    type: AuthTypes.LOAD_SUCCCES,
    payload: {
      auth,
    },
  };
}
export function authenticationFailure() {
  return {
    type: AuthTypes.LOAD_FAILURE,
    payload: {},
  };
}

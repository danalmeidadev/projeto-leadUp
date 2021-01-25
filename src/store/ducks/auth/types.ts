/**
 * Action types
 */
export enum AuthTypes {
  LOAD_REQUEST = '@Auth/LOAD_REQUEST',
  LOAD_SUCCCES = '@Auth/LOAD_SUCCCES',
  LOAD_FAILURE = '@Auth/LOAD_FAILURE',
}

/**
 * Data types
 */
export interface Auth {
  email: string;
  password: string;
}

/**
 * State type
 */
export interface AuthState {
  readonly data: Auth[];
  readonly loading: boolean;
  readonly isLoggedIn: boolean;
  readonly error: boolean;
}

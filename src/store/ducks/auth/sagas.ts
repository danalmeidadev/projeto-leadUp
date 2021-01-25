import { Alert } from 'react-native';
import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { authenticationSuccess, authenticationFailure } from './actions';
import { Auth } from './types';

export function* loadAuth(action: any) {
  try {
    // const login = action.payload.auth;
    try {
      const response = yield call(api.get, '/users');
      const users = response.data;
      const email = users.findIndex(
        (user: Auth) => user.email === action.payload.auth.email,
      );
      const password = users.findIndex(
        (user: Auth) => user.password === action.payload.auth.password,
      );

      if (email <= 0 || password <= 0) {
        Alert.alert('Oops! Email ou senha invalidos');
        return yield put(authenticationFailure());
      }
      yield put(authenticationSuccess(response.data));
    } catch (err) {
      yield put(authenticationFailure());
    }
  } catch (err) {
    console.log(err);
  }
}

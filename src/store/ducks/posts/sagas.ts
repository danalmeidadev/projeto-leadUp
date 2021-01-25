import { Alert } from 'react-native';
import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { postSuccess, loadFailure } from './actions';
import { Posts } from './types';

export function* Postload() {
  try {
    const response = yield call(api.get, '/posts');
    yield put(postSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

export function* PostloadId(action: any) {
  try {
    const post_id = action.payload.postId;
    const response = yield call(api.delete, `/posts/${post_id}`);

    if (response.status === 200) {
      Alert.alert('Post excluido com sucesso!');
    }
  } catch (err) {
    yield put(loadFailure());
  }
}

export function* PostCreate(action: any) {
  try {
    const { title, description } = action.payload.data;
    const response = yield call(api.post, `/posts`, {
      title,
      description,
    });
    if (response.status === 201) {
      Alert.alert('Post cadastrado com sucesso!');
    }
  } catch (err) {
    yield put(loadFailure());
  }
}

export function* PostloadEdit(action: any) {
  try {
    const { title, description, id } = action.payload.postId;

    const response = yield call(api.put, `/posts/${id}`, {
      id,
      title,
      description,
    });

    if (response.status === 200) {
      Alert.alert('Post atualizado com sucesso!');
    }
  } catch (err) {
    yield put(loadFailure());
  }
}

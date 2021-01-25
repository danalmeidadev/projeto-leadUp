import { all, takeLatest } from 'redux-saga/effects';

import { PostsTypes } from './posts/types';
import { Postload, PostloadId, PostCreate, PostloadEdit } from './posts/sagas';

import { AuthTypes } from './auth/types';
import { loadAuth } from './auth/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(PostsTypes.LOAD_REQUEST, Postload),
    takeLatest(PostsTypes.LOAD_REQUEST, PostCreate),
    takeLatest(PostsTypes.LOAD_REQUEST_ID, PostloadId),
    takeLatest(PostsTypes.LOAD_REQUEST_EDIT, PostloadEdit),
    takeLatest(AuthTypes.LOAD_REQUEST, loadAuth),
  ]);
}

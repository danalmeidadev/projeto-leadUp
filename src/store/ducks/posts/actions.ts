import { action } from 'typesafe-actions';
import { AuthTypes } from '../auth/types';
import { PostsTypes, Posts } from './types';

export function postRequest() {
  return {
    type: PostsTypes.LOAD_REQUEST,
  };
}

export function postRequestId(postId: Posts) {
  return {
    type: PostsTypes.LOAD_REQUEST_ID,
    payload: {
      postId,
    },
  };
}
export function postSuccess(data: Posts[]) {
  return {
    type: PostsTypes.LOAD_SUCCCES,
    payload: {
      data,
    },
  };
}

export function postRequestCreate(data: Posts) {
  return {
    type: PostsTypes.LOAD_REQUEST,
    payload: {
      data,
    },
  };
}

export function postRequestEdit(postId: Posts) {
  return {
    type: PostsTypes.LOAD_REQUEST_EDIT,
    payload: {
      postId,
    },
  };
}

export const loadFailure = () => action(PostsTypes.LOAD_FAILURE);

import { Reducer } from 'redux';
import { PostsState, PostsTypes } from './types';

const INITIAL_STATE: PostsState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<PostsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostsTypes.LOAD_REQUEST:
      return { ...state, loading: false };
    case PostsTypes.LOAD_SUCCCES:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case PostsTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;

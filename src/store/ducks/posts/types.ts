/**
 * Action types
 */
export enum PostsTypes {
  LOAD_REQUEST_ID = '@Posts/LOAD_REQUEST_ID',
  LOAD_REQUEST = '@Posts/LOAD_REQUEST',
  LOAD_REQUEST_EDIT = '@Posts/LOAD_REQUEST_EDIT',
  LOAD_SUCCCES = '@Posts/LOAD_SUCCCES',
  LOAD_FAILURE = '@Posts/LOAD_FAILURE',
}

/**
 * Data types
 */
export interface Posts {
  id: number;
  title: string;
  description: string;
  imagem: string;
}

/**
 * State type
 */
export interface PostsState {
  readonly data: Posts[];
  readonly loading: boolean;
  readonly error: boolean;
}

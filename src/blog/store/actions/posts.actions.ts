import {Action} from '@ngrx/store';
import {Posts} from '../../blog-posts/models/posts';

export const ADD_POST = '[POST] Add';
export const REMOVE_POST = '[POST] Remove';
export const LOAD_POSTS = '[POST] Load Posts';
export const LOAD_POSTS_FAIL = '[POST] Load Posts Fail';
export const LOAD_POSTS_SUCCESS = '[POST] Load Posts Success';

export class AddPost implements Action {
  readonly type = ADD_POST;

  constructor(public payload: Posts) {
  }
}

export class LoadPosts implements Action {
  readonly type = LOAD_POSTS;
}

export class LoadPostsFail implements Action {
  readonly type = LOAD_POSTS_FAIL;

  constructor(public payload: any) {
  }
}

export class LoadPostsSuccess implements Action {
  readonly type = LOAD_POSTS_SUCCESS;

  constructor(public payload: Posts[]) {
  }
}

export class RemovePost implements Action {
  readonly type = REMOVE_POST;

  constructor(public payload: string) {
  }
}

export type PostsActions = AddPost | RemovePost | LoadPosts | LoadPostsFail | LoadPostsSuccess;

import {Posts} from '../../blog-posts/models/posts';
import * as fromPosts from '../actions/posts.actions';

export interface PostsState {
  data: Posts;
  loaded: boolean;
  loading: boolean;
}

export const initialState = {
  data: undefined,
  loaded: false,
  loading: false
};

export function reducer(state = initialState, action: fromPosts.PostsActions): any {
  switch (action.type) {
    case fromPosts.LOAD_POSTS: {
      return {
        ...state, loading: true
      };
    }
    case fromPosts.LOAD_POSTS_FAIL: {
      return {
        ...state, loading: false, loaded: false
      };
    }
    case fromPosts.LOAD_POSTS_SUCCESS: {
      const data = action.payload;
      return {
        ...state, loading: false, loaded: true, data,
      };
    }
  }
  return state;
}

export const getPostsLoading = (state: PostsState) => state.loading;
export const getPostsLoaded = (state: PostsState) => state.loaded;
export const getPosts = (state: PostsState) => state.data;

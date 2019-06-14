import {createSelector} from '@ngrx/store';
import {PostsState} from '../reducers';
import * as fromFeature from '../reducers/index';

export const getAllPosts = createSelector(fromFeature.getPostsState, (state: PostsState) => {
  return state.posts.data;
});

export const getSelectedPost = (id) => createSelector(fromFeature.getPostsState, (items) => {
    let result = [];
    if (items.posts.data) {
      result = items.posts.data.filter((item) => {
        return item._id === id;
      });
      return result;
    }
    return [];
  }
);

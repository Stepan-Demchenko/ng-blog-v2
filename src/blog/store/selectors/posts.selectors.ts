import {createSelector} from '@ngrx/store';
import {PostsState} from '../reducers';
import * as fromFeature from '../reducers/index';
import {Posts} from '../../blog-posts/models/posts';

export const getAllPosts = createSelector(fromFeature.getPostsState, (state: PostsState) => state.posts.data);

export const getSelectedPost = (id) => createSelector(fromFeature.getPostsState, (items) => {
    let data: Posts;
    for (let key in items.posts.data) {
      if (items.posts.data[key]._id === id) {
        data = items.posts.data[key];
      }
    }
    return data;
  }
);

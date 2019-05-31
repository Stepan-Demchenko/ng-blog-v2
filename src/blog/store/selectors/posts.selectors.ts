import {createSelector} from '@ngrx/store';
import {PostsState} from '../reducers';
import * as fromFeature from '../reducers/index';
import * as fromRoot from '../../../app/store';
import {Posts} from '../../blog-posts/posts/models/posts';

export const getAllPosts = createSelector(fromFeature.getPostsState, (state: PostsState) => state.posts.data);

// export const getSelectedPost = createSelector(
//   getAllPosts,
//   fromRoot.getRouterState,
//   (data): Posts => {
//     return data[data._id];
//   }
// );

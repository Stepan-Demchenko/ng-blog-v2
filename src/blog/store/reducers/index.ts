import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action
} from '@ngrx/store';
import {storeFreeze} from 'ngrx-store-freeze';
import {environment} from '../../../environments/environment';
import {Posts} from '../../blog-posts/posts/models/posts';
import * as PostsActions from '../actions/posts.actions';
import * as fromPosts from './posts.reducer';

export interface PostsState {
  posts: fromPosts.PostsState;
}

export const reducers: ActionReducerMap<any> = {
  posts: fromPosts.reducer
};

export const getPostsState = createFeatureSelector<PostsState>('posts');

export const getAllPosts = createSelector(getPostsState, (state: PostsState) => state.posts.data);


export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];

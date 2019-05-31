import {ActionReducerMap, createFeatureSelector, MetaReducer,} from '@ngrx/store';
import * as fromPosts from './posts.reducer';
import {environment} from '../../../environments/environment';
import {storeFreeze} from 'ngrx-store-freeze';

export interface PostsState {
  posts: fromPosts.PostsState;
}

export const reducers: ActionReducerMap<any> = {
  posts: fromPosts.reducer
};
export const getPostsState = createFeatureSelector<PostsState>('posts');
export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];

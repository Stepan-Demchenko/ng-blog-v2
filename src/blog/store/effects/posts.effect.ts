import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as postsActions from '../actions/posts.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {PostsService} from '../../blog-posts/posts/services/posts.service';
import {of} from 'rxjs';

@Injectable()
export class PostsEffect {
  constructor(private actions$: Actions, private postsService: PostsService) {
  }

  @Effect()
  loadPosts$ = this.actions$.pipe(ofType(postsActions.LOAD_POSTS), switchMap(() => {
    return this.postsService.getList().pipe(
      map(posts => new postsActions.LoadPostsSuccess(posts),
        catchError(err => of(new postsActions.LoadPostsFail(err)
        ))
      ));
  }));

}

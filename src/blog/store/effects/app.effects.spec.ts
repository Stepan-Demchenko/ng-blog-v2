import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PostsEffect } from './posts.effect';

describe('PostsEffect', () => {
  let actions$: Observable<any>;
  let effects: PostsEffect;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PostsEffect,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(PostsEffect);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

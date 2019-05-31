import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListPostsComponent} from './list-posts/list-posts.component';
import {PostComponent} from './post/post.component';
import {RouterModule, Routes} from '@angular/router';
import {PostFormComponent} from './post/post-form/post-form.component';
import {DeleteDialogComponent} from './list-posts/delete-dialog/delete-dialog.component';
import {MaterialModule} from '../../../app/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {reducers, effects} from '../../store';
import {EffectsModule} from '@ngrx/effects';
import {AuthGuard} from '../../shared/guard/auth.guard';
import {PostResolver} from './resolvers/post.resolver';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: ListPostsComponent
  },
  {
    canActivate: [AuthGuard],
    path: 'post/new',
    component: PostComponent
  },
  {
    canActivate: [AuthGuard],
    resolve: {post: PostResolver},
    path: 'post/:id',
    component: PostComponent
  }

];


@NgModule({
  declarations: [ListPostsComponent, PostComponent, PostFormComponent, DeleteDialogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature('posts', reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [PostResolver],
  entryComponents: [DeleteDialogComponent]
})
export class PostsModule {
}

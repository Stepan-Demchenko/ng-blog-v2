import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListPostsComponent} from './list-posts/list-posts.component';
import {PostComponent} from './post/post.component';
import {RouterModule, Routes} from '@angular/router';
import {PostFormComponent} from './post/post-form/post-form.component';
import {DeleteDialogComponent} from './list-posts/delete-dialog/delete-dialog.component';
import {MaterialModule} from '../../../app/material.module';
import {ReactiveFormsModule} from '@angular/forms';

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
    path: 'post/new',
    component: PostComponent
  },
  {
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
    ReactiveFormsModule
  ],
  entryComponents: [DeleteDialogComponent]
})
export class PostsModule {
}

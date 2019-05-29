import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: '../blog/blog-posts/posts/posts.module#PostsModule'

  },
  // {
  //   path: 'posts',
  //   loadChildren: '../blog/blog-posts/posts/posts.module#PostsModule'
  // },
  {
    path: 'authorization',
    outlet: 'auth',
    loadChildren: '../blog/auth/login/login.module#LoginModule'
  },
  {
    path: 'registration',
    outlet: 'auth',
    loadChildren: '../blog/auth/registration/registration.module#RegistrationModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

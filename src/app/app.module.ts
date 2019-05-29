import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MaterialModule} from './material.module';
import {NavigationComponent} from '../blog/navigation/navigation.component';
import {AuthModalComponent} from '../blog/auth/auth-modal/auth-modal.component';
import {HttpClientModule} from '@angular/common/http';
import {httpInterceptors} from 'src/blog/shared/interceptors/http-interceptors';
import {PostsModule} from '../blog/blog-posts/posts/posts.module';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AuthModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    MaterialModule,
  ],
  entryComponents: [
    AuthModalComponent
  ],
  providers: [httpInterceptors],
  bootstrap: [AppComponent]
})
export class AppModule {
}

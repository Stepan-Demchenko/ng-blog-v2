import {EffectsModule} from '@ngrx/effects';
import {PostsEffect} from '../blog/store/effects/posts.effect';
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
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducers} from '../blog/store/reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

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
    StoreModule.forRoot({}, {metaReducers}),
    EffectsModule.forRoot([PostsEffect]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
  ],
  entryComponents: [
    AuthModalComponent
  ],
  providers: [httpInterceptors],
  bootstrap: [AppComponent]
})
export class AppModule {
}

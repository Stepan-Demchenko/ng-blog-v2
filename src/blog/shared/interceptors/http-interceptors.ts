import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {UrlIntercept} from './url-interceptor';
import {AuthInterceptor} from './auth.interceptor';
import {LoaderInterceptor} from './loader.interceptor';


export const httpInterceptors = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: UrlIntercept, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},

];

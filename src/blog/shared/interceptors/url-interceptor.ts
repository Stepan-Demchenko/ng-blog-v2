import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class UrlIntercept implements HttpInterceptor {
  constructor() {
  }

  private urlEnvironment = environment.url;

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const contentTypeReq = req.clone({
      url: this.urlEnvironment + req.url
    });
    return next.handle(contentTypeReq);
  }
}

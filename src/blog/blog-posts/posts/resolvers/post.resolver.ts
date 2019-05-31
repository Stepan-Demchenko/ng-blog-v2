import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Posts} from '../models/posts';
import {Observable} from 'rxjs';
import {PostsService} from '../services/posts.service';

@Injectable()
export class PostResolver implements Resolve<Posts> {
  constructor(private postsService: PostsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Posts> {
    return this.postsService.getPost(route.params.id);
  }
}

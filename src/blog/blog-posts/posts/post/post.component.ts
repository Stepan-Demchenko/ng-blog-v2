import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Observable, of, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {InfoMessageService} from '../../../services/info-message.service';
import {Posts} from '../models/posts';


@Component({
  selector: 'app-post',
  styleUrls: ['./post.component.scss'],
  template: `
    <app-post-form [post]="posts$ | async" (create)="addPost($event)" (edit)="editPost($event)"></app-post-form>   `
})
export class PostComponent implements OnInit, OnDestroy {
  private unsubscribe: Subject<void> = new Subject();
  private postId;
  public posts$: Observable<Posts>;


  constructor(
    private route: Router,
    private postsService: PostsService,
    private infoMessage: InfoMessageService,
    private activatedRoute: ActivatedRoute,
  ) {


  }

  ngOnInit() {
    this.postId = this.activatedRoute.snapshot.params.id;
    if (this.activatedRoute.snapshot.params.id) {
      this.activatedRoute.data.pipe(takeUntil(this.unsubscribe)).subscribe((data: any) => {
        this.posts$ = of(data.post);
      });
    }
    // this.posts$ = this.store.select(fromStore.getSelectedPost);
  }

  addPost(event) {
    this.postsService.create(event).pipe(takeUntil(this.unsubscribe)).subscribe(result => {
      this.route.navigateByUrl('/');
      this.infoMessage.alertShow('Post created!');
    }, error => {
      this.infoMessage.alertShow();
    });
  }

  editPost(event) {
    this.postsService.update(this.postId, event).pipe(takeUntil(this.unsubscribe)).subscribe(result => {
      this.route.navigateByUrl('/');
      this.infoMessage.alertShow('Post is updated!');
    }, error => {
      this.infoMessage.alertShow();
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {InfoMessageService} from '../../../services/info-message.service';
import {MatDialog} from '@angular/material';
import {PostsService} from '../services/posts.service';
import {AuthService} from '../../../auth/services/auth.service';
import {Observable, Subject} from 'rxjs';
import {Posts} from '../models/posts';
import {Auth} from '../../../auth/models/auth';
import {switchMap, takeUntil} from 'rxjs/operators';
import {DeleteDialogComponent} from './delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit, OnDestroy {
  private unsubscribe: Subject<void> = new Subject();

  listData$: Observable<Posts>;
  isAuth: Observable<Auth>;

  constructor(
    private route: ActivatedRoute,
    private infoMessage: InfoMessageService,
    public dialog: MatDialog,
    private postsService: PostsService,
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.isAuth = this.authService.currentUser;
    this.listData$ = this.route.params.pipe(switchMap(event => this.postsService.getList()));

  }

  public getList() {
    this.listData$ = this.postsService.getList();
  }

  public deletePostDialog(id: string, title: string) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '400px',
      height: '200px',
      data: {id, title}
    }).afterClosed().pipe(takeUntil(this.unsubscribe)).subscribe(result => {
      if (result) {
        this.listData$ = this.route.params.pipe(switchMap(event => this.postsService.getList()));
        this.infoMessage.alertShow('POST successfully removed');
      }
    }, error1 => {
      this.infoMessage.alertShow('Something went wrong');
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}

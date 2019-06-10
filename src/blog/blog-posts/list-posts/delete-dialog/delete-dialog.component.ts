import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PostsService} from '../../services/posts.service';
import {InfoMessageService} from '../../../services/info-message.service';
import {of, Subject} from 'rxjs';
import {catchError, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit, OnDestroy {
  private unsubscribe: Subject<void> = new Subject();

  constructor(
    private infoMessage: InfoMessageService,
    private postsService: PostsService,
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit() {
  }

  deletePosts() {
    this.postsService.delete(this.data.id).pipe(takeUntil(this.unsubscribe), catchError(err => of(this.infoMessage.alertShow()))).subscribe(result => {
      if (result) {
        this.dialogRef.close(true);
      }
    }, error1 => {
      return error1;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}

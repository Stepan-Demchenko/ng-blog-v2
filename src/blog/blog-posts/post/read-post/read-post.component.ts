import {Component, OnInit} from '@angular/core';
import * as fromStore from '../../../store';
import {Observable} from 'rxjs';
import {Posts} from '../../models/posts';
import {Store} from '@ngrx/store';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-read-post',
  templateUrl: './read-post.component.html',
  styleUrls: ['./read-post.component.scss']
})
export class ReadPostComponent implements OnInit {

  post$: Observable<Posts[]>;
  private postId;

  constructor(private store: Store<fromStore.PostsState>,
              private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.postId = this.activatedRoute.snapshot.params.id;
    this.post$ = this.store.select(fromStore.getSelectedPost(this.postId));
  }

}

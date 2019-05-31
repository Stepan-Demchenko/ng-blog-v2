import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Posts} from '../../models/posts';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PostsService} from '../../services/posts.service';
import {InfoMessageService} from '../../../../services/info-message.service';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnChanges {

  @Output() create = new EventEmitter<Posts>();
  @Output() edit = new EventEmitter<Posts>();
  @Input() post: Posts;

  private unsubscribe: Subject<void> = new Subject();
  id: string;
  postForm: FormGroup;
  imgUrl;


  constructor(
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private postsService: PostsService,
    private router: Router,
    private infoMessage: InfoMessageService
  ) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.post.currentValue) {
      const value = this.post;
      this.postForm.patchValue(value);
      this.imgUrl = this.postForm.value.image;
    } else {
      this.postForm.reset();
    }
  }

  createPost() {
    this.create.emit(this.postForm.value);
  }

  editPost() {
    this.edit.emit(this.postForm.value);
  }

  selectImg(event) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = (e) => {
        this.imgUrl = reader.result;
      };
    }
    this.postForm.value.image = 'https://cdn.stocksnap.io/img-thumbs/960w/V5DUZ3DZYA.jpg';
  }

  // get required() {
  //   return (
  //     this.postForm.get(controlName).hasError('required') && this.postForm.get(controlName).touched
  //   );
  // }
}

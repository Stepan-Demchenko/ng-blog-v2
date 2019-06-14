import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Posts} from '../../models/posts';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnChanges {

  @Output() create = new EventEmitter<Posts>();
  @Output() edit = new EventEmitter<Posts>();
  @Input() post: Posts[];

  id: string;
  postForm: FormGroup;
  imgUrl;
  isCreate: boolean;

  constructor(
    public fb: FormBuilder,
  ) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      content: ['', Validators.required],
      image: [''],
      description: ['', Validators.required]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.post.currentValue.length >= 1) {
      this.isCreate = false;
      this.postForm.patchValue(this.post[0]);
      this.imgUrl = this.postForm.value.image;
      console.log('lol');
    } else {
      this.isCreate = true;
      this.postForm.reset();
      console.log('kek');
    }
  }

  createPost() {
    this.postForm.value.image = 'https://cdn.stocksnap.io/img-thumbs/960w/V5DUZ3DZYA.jpg';
    this.create.emit(this.postForm.value);
  }

  updatePost() {
    this.edit.emit(this.postForm.value);
  }

  get required(): boolean {
    return this.postForm.invalid;
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
  }
}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent {
  hide = true;
  icon = 'visibility_off';
  @Output() formSubmit = new EventEmitter<FormGroup>();


  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AuthFormComponent>,
  ) {
  }

  onSubmit() {
    this.formSubmit.emit(this.loginForm);
  }

  showPassword() {
    this.hide = !this.hide;
    if (this.hide) {
      return this.icon = 'visibility';
    }
    return this.icon = 'visibility_off';
  }

  close(): void {
    this.dialogRef.close();
  }
}

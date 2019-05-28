import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import {RouterModule} from '@angular/router';
import { AuthFormComponent } from './auth-form/auth-form.component';

@NgModule({
  declarations: [LoginComponent, AuthModalComponent, AuthFormComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AuthModule { }

import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AuthFormComponent} from './auth-form/auth-form.component';
import {AuthService} from './services/auth.service';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../app/material.module';

@NgModule({
  declarations: [AuthFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    AuthFormComponent
  ]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        AuthService
      ]
    };
  }
}

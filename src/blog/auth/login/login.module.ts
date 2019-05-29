import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {AuthFormComponent} from '../auth-form/auth-form.component';
import {AuthModule} from '../auth.module';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from '../../../app/material.module';

export const ROUTES: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthModule.forRoot(),
    RouterModule.forChild(ROUTES),
    MaterialModule
  ],
  entryComponents: [
    AuthFormComponent
  ]
})
export class LoginModule {
}

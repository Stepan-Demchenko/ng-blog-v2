import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegistrationComponent} from './registration.component';
import {AuthModule} from '../auth.module';
import {RouterModule, Routes} from '@angular/router';

export const ROUTES: Routes = [{
  path: '',
  component: RegistrationComponent
}];

@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    AuthModule.forRoot(),
    RouterModule.forChild(ROUTES)
  ]
})
export class RegistrationModule {
}

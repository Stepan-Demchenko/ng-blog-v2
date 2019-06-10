import {Component, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material';
import {FormGroup} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {InfoMessageService} from '../../services/info-message.service';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor(
    private infoMessage: InfoMessageService,
    private authService: AuthService,
    private dialog: MatDialog
  ) {
  }



  signIn(data: FormGroup) {
    this.authService.login(data.value).pipe(catchError(
      (err, caught) =>
        throwError(
          this.infoMessage.alertShow('invalid email or password')
        ))).subscribe(() => {
      this.dialog.closeAll();
    });
  }

}

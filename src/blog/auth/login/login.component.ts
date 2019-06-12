import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {FormGroup} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {InfoMessageService} from '../../services/info-message.service';


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
    this.authService.login(data.value).subscribe(() => {
        this.dialog.closeAll();
      },
      error1 => {
        this.infoMessage.alertShow('Invalid email or password');
      });
  }
}

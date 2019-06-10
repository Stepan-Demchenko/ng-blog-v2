import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {InfoMessageService} from '../../services/info-message.service';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  constructor(
    private authService: AuthService,
    private infoMessage: InfoMessageService,
    private dialog: MatDialog
  ) { }


  regUser(event: FormGroup) {
    this.authService.register(event.value).pipe(catchError(err =>
      of(
        this.infoMessage.alertShow(),
        this.dialog.closeAll()
      ))).subscribe(() => {
      this.dialog.closeAll();
    });
  }

}

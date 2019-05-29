import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class InfoMessageService {

  constructor(
    private snackBar: MatSnackBar
  ) {
  }

  alertShow(message: string = 'something went wrong', duration: number = 4000, action: string = 'Ok') {
    return this.snackBar.open(
      message.toUpperCase(),
      action,
      {
        duration: duration,
      }
    );
  }
}

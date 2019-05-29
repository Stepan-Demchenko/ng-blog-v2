import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {AuthService} from '../auth/services/auth.service';
import {Auth} from '../auth/models/auth';
import {Observable} from 'rxjs';
import {AuthModalComponent} from '../auth/auth-modal/auth-modal.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  animal: string;
  name: string;
  isAuth: Observable<Auth>;

  constructor(public dialog: MatDialog, private router: Router,
              private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.isAuth = this.authService.currentUser;
  }

  exit() {
    this.authService.logout();
  }

  private openModal(url: string) {
    return this.router.navigate([{
      outlets: {
        auth: [url]
      }
    }]).then(() => {
      const dialogRef = this.dialog.open(AuthModalComponent, {
        width: '20vw',
      });
      dialogRef.afterClosed().subscribe(result => {
        this.router.navigate([{
          outlets: {
            auth: null
          }
        }]);
      });
    });
  }

  openDialog(url: string) {
    this.openModal(url);
  }
}

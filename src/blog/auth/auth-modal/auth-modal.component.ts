import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-auth-modal',
  styleUrls: ['./auth-modal.component.scss'],
  template: `
    <router-outlet name="auth"></router-outlet>
  `
})
export class AuthModalComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

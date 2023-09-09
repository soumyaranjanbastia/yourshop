import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  allowEmploy = true;

  employLoginStatus = 'no one can login';

  constructor() {
    setTimeout(() => {
      this.allowEmploy = false;
    }, 5000);
  }

  onLoginEmploy() {
    this.employLoginStatus = 'you are logged in as Employer';
  }
}

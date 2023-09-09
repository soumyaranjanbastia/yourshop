import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  //template: `<h1>Hello World</h1>`,
  styleUrls: ['./login.component.css'],
  // styles: [
  //   `
  //     h1 {
  //       background-color: orange;
  //     }
  //   `,
  // ],
})
export class LoginComponent {
  employTime: number = 10;
  employStatus: string = 'online';

  getemployStatus() {
    return this.employStatus;
  }
}

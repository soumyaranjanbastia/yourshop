import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  employName = '';
  onUpadteEnployName(event: any) {
    this.employName = (<HTMLInputElement>event.target).value;
  }
}

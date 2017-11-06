import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1><img src="./assets/ParkMeIcon_50.png"/>Parking Lots</h1>
    <div class="header-bar"></div>
    <app-lots></app-lots>  
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}

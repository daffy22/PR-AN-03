import { Component } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styles: [
    `
    a {
      text-decoration: none;
      color: black;
    }
    `
  ]
})
export class ErrorPageComponent {
  constructor() { }
}

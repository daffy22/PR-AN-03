import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styles: [
    `
    .container {
      display: flex;
      justify-content: space-between;
      min-width: 100%;
    }
    .container div {
      flex: 0 0 calc(33.3% - 1rem);
    }

    .container div:nth-child(2) {
      text-align: center;
      font-size: 15px;
    }

    .container span {
      padding: 0 10px;
      cursor: pointer;
    }

    .container div:nth-child(3) {
      text-align: right;
    }

    `
  ]
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

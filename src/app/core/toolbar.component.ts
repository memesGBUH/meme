import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  template: `
    <mat-toolbar color="primary">
      <button mat-button routerLink='/meme/thegood'>The Good</button>
      <button mat-button routerLink='/meme/thebad'>The Bad</button>
      <button mat-button routerLink='/meme/theugly'>The Ugly</button>
      <button mat-button routerLink='history'>The History</button>
      <button mat-button routerLink='history'>The Hero</button>
    </mat-toolbar>
  `,
  styles: [`
    mat-toolbar {
      margin-top: 0px;
      height: 35px;
    }
  `]
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  template: `
    <mat-card>
      <mat-card-title>404 Page Not Found</mat-card-title>
      <mat-card-content>
        <button mat-raised-button color="primary" routerLink='/home'>Home</button>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    :host {
      text-align: center;
    }
  `]
})
export class NotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

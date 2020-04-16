import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { nextImg, prevImg, getCurrentMemeNameAndMeme, getIsLoading, getErrMsg } from './meme.store/meme.reducer';

@Component({
  selector: 'app-meme',
  template: `
  <div [style.background]="'red'" *ngIf="errMsg$|async">{{errMsg$|async}}</div>
  <!--
  Meme: {{(src$|async)?.memeName}} PixSrc: {{(src$|async)?.memeState?.urls[(src$|async)?.memeState?.idx].id}}
  -->

  <div (swipeleft)="next()" (swiperight)="prev()">
  
  <mat-card>
    <mat-card-header>
      <mat-card-title >{{(src$|async)?.memeState?.urls[(src$|async)?.memeState?.idx]?.txt}}</mat-card-title>
    </mat-card-header>
    <img mat-card-image src="{{prefix+((src$|async)?.memeState?.urls[(src$|async)?.memeState?.idx]?.id)}}">
  </mat-card>
  </div>
  <!--
  <button mat-button color="primary" (click)="next()">Next</button>
  <button mat-button color="primary" (click)="prev()">Prev</button>
  -->
  <app-spinner [overlay]="true" *ngIf="isLoading$|async"></app-spinner>
  
  `,
  styles: []
})
export class MemeComponent implements OnInit {
  prefix = 'https://lh3.googleusercontent.com/';
  src$ = this.store.pipe(select(getCurrentMemeNameAndMeme));
  isLoading$ = this.store.pipe(select(getIsLoading));
  errMsg$ = this.store.pipe(select(getErrMsg));


  constructor(private store: Store<object>) { }

  ngOnInit(): void {
  }
  next() {
    this.store.dispatch(nextImg());
  }

  prev() {
    this.store.dispatch(prevImg());
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HistoryComponent }
]

@NgModule({
  declarations: [HistoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
//    RouterModule
  ]
})
export class HistoryModule { }

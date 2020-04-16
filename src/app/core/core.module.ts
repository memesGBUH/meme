import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner.component';
import { ToolbarComponent } from './toolbar.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound.component';



@NgModule({
  declarations: [SpinnerComponent, ToolbarComponent, NotfoundComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [SpinnerComponent, ToolbarComponent, MaterialModule, NotfoundComponent]
})
export class CoreModule { }

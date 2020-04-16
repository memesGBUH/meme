import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';

const COMPS = [MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatProgressSpinnerModule, MatToolbarModule];
@NgModule({
  imports: COMPS,
  exports: COMPS,
})
export class MaterialModule { }

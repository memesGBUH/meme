import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemeComponent } from './meme.component';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { MEMES_STATE_KEY, memeReducer } from './meme.store/meme.reducer';
import { actionEnricher } from './meme.store/action-enricher.reducer';
import { MemeEffects } from './meme.store/meme.effects';
import { EffectsModule } from '@ngrx/effects';
import { CoreModule } from '../core/core.module';

const routes: Routes = [
  { path: ':id', component: MemeComponent }
]

@NgModule({
  declarations: [MemeComponent],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(MEMES_STATE_KEY,memeReducer,{
        metaReducers:[actionEnricher], 
    }),
   EffectsModule.forFeature([MemeEffects]),
   
  ]
})
export class MemeModule { }

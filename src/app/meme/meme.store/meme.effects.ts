import { Injectable } from "@angular/core"
import { LoadMemeRequest, getCurrentMemeNameAndMeme, LoadMemeSucess, LoadMemeFailure } from "./meme.reducer"
import { createEffect, ofType, Actions } from "@ngrx/effects"
import { Store, select, createAction } from "@ngrx/store"
import { map, filter, mergeMap, catchError, tap, switchMap } from 'rxjs/operators';
import { FbService } from "../services/fb.service";
import { of } from "rxjs";

@Injectable()
export class MemeEffects {

    constructor(private store: Store<object>, private dbService: FbService, private action$: Actions) { }

    meme$ = createEffect(() => {
        return this.store.pipe(
            select(getCurrentMemeNameAndMeme),
            filter(
                x => x.memeName !== undefined && x.memeState === undefined
            ),
            map(y => { debugger; return LoadMemeRequest({ id: y.memeName }) }),
        )
    });

    loadingmeme$ = createEffect(() => {
        return this.action$.pipe(
            ofType(LoadMemeRequest),
            mergeMap(action => {
                console.log(action.id);
                return this.dbService.getAll(action.id).pipe(
                    map(payload => { console.log(payload); return LoadMemeSucess({ payload, memeName: action.id }) }),
                    catchError(err => of(LoadMemeFailure({ errMsg: err }))
                    )
                )
            })
        )
    })



}
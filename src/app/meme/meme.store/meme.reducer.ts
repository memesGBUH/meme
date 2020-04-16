import { createFeatureSelector, createAction, createReducer, createSelector, Action, props } from "@ngrx/store";
import { mutableOn } from 'ngrx-etc';
import { selectRouterParam } from "../../router.store/router.selectors";
import { Actions } from '@ngrx/effects';

export const nextImg = createAction('[meme] next meme');
export const prevImg = createAction('[meme] prev meme');
export const LoadMemeRequest = createAction('[meme] loading request', props<{ id: string }>());
export const LoadMemeSucess = createAction('[meme] loading sucess', props<{ payload: any, memeName: string }>());
export const LoadMemeFailure = createAction('[meme] loading failure', props<{ errMsg: string }>());

interface Meme {
    id: string;
    txt: string;
}

interface MemeState {
    idx: number | null;
    urls: Meme[] | null;
}
interface MemesState {
    isLoading: boolean;
    errMsg: string | null;
    memes: Record<string, MemeState> | null
}

interface ActionWithMemeId extends Action {
    id: string;
}

const initState: MemesState = {
    isLoading: false,
    errMsg: null,
    memes: {}//{ 'thegood': { idx: 0, urls: ['pix0', 'pix1', 'pix2'] }, 'thebad': { idx: 0, urls: ['thebad0', 'thebad1'] } }
}


function _reduceMeme<A extends ActionWithMemeId>(reducer: (state: MemeState, len: number) => void) {
    return (state: MemesState, action: A) => {
        debugger;
        const memestate = state.memes[action.id];
        const len = state.memes[action.id].urls.length;
        memestate && reducer(memestate, len);
    }
}
function flipZero(idx: number, len: number) {
    if (idx < 0)
        return len - 1;
    return idx;
}
export const memeReducer = createReducer<MemesState>(
    initState,
    mutableOn(LoadMemeRequest, (s, action) => { debugger; s.isLoading = true; s.errMsg = null }),
    mutableOn(LoadMemeFailure, (s, action) => { debugger; s.isLoading = false; s.errMsg = action.errMsg }),
    mutableOn(LoadMemeSucess, (s, action) => { debugger; s.isLoading = false; s.errMsg = null; s.memes = { ...s.memes, [action.memeName]: { idx: 0, urls: action.payload } } }),
    mutableOn(nextImg, _reduceMeme((memestate, len) => memestate.idx = ++memestate.idx % len)),
    mutableOn(prevImg, _reduceMeme((memestate, len) => memestate.idx = flipZero(memestate.idx - 1, len) % len))

)


//selector
export const MEMES_STATE_KEY = 'memestate';
const getAllMemesState = createFeatureSelector<MemesState>(MEMES_STATE_KEY);
export const getCurrentMemeName = selectRouterParam('id');
const getCurrentMemeState = createSelector(
    getAllMemesState,
    getCurrentMemeName,
    (s, p) => { debugger; return s.memes[p] }
);

/*export const getCurrentMemeSrc = createSelector(
    getCurrentMemeState,
    s => s.urls[s.idx]
)*/
export const getCurrentMemeNameAndMeme = createSelector(
    getCurrentMemeName,
    getCurrentMemeState,
    (memeName, memeState) => ({ memeName, memeState })
);

export const getIsLoading = createSelector(getAllMemesState, s => s.isLoading);
export const getErrMsg = createSelector(getAllMemesState, s => s.errMsg);
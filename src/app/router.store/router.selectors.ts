import { createFeatureSelector, createSelector, } from '@ngrx/store';
import { RouterReducerState } from "@ngrx/router-store"
import { ParamsRouterState } from './params-serializer';

export const routerStateKey = 'routerstate';

const selectRouterSlice = createFeatureSelector<RouterReducerState<ParamsRouterState>>(routerStateKey);

export const selectRouteParams = createSelector(selectRouterSlice, state =>
  (state && state.state && state.state.params) || {}
);
export const selectRouterParam = (paramName: string) => createSelector(selectRouteParams, params => params[paramName]);




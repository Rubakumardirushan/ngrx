import { isDevMode } from '@angular/core';
import { counterReducer } from '../shared/store/counter.reducer';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
counter: counterReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];

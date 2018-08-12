import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { RouterStateUrl } from './customSerializer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
};

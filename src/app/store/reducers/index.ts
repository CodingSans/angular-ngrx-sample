import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { RouterStateUrl } from './customSerializer';
import { IPeopleReducer, peopleReducer } from './people.reducer';

export interface AppState {
  people: IPeopleReducer;
  router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<AppState> = {
  people: peopleReducer,
  router: routerReducer,
};

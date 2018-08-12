import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { PeopleService } from '../../shared/people.service';
import { EditPerson, PeopleActionTypes, SelectPerson } from '../actions/people.actions';

@Injectable()
export class PeopleEffects {
  // Listen for the 'LOGIN' action
  @Effect()
  selectPerson$: Observable<Action> = this.actions$.pipe(
    ofType<SelectPerson>(PeopleActionTypes.SELECT_PERSON),
    map(action => action.payload && action.payload.id),
    switchMap((id: number) => {
      return this.peopleService.selectPerson(id)
        .pipe(
          map((person) => new EditPerson({ person }))
        );
    })
  );

  constructor(private peopleService: PeopleService, private actions$: Actions) {}
}

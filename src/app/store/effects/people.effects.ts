import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { ResetAction, SetValueAction } from 'ngrx-forms';
import { Observable } from 'rxjs';
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { EditPersonBsModalComponent } from '../../bootstrap-form/editPersonModal/edit-person-bs-modal.component';
import { PeopleService } from '../../shared/people.service';
import { EditPerson, EditPersonSuccess, PeopleActionTypes, RemovePerson,
  RemovePersonSuccess, SelectPerson, SelectPersonSuccess } from '../actions/people.actions';
import { AppState } from '../reducers';
import { NEW_PERSON, PERSON_EDIT_FORM_ID } from '../reducers/edit-person.reducer';
import { getSelectedPerson } from '../reducers/people.reducer';

@Injectable()
export class PeopleEffects {
  @Effect()
  selectPerson$: Observable<Action> = this.actions$.pipe(
    ofType<SelectPerson>(PeopleActionTypes.SELECT_PERSON),
    map(action => action.payload && action.payload.id),
    switchMap((id: string | undefined) => {
      return this.peopleService.selectPerson(id)
        .pipe(
          switchMap((person) => {
            console.log(person);
            return [
              new SelectPersonSuccess({ person }),
              new SetValueAction(PERSON_EDIT_FORM_ID, person)
            ];
          })
        );
    })
  );

  @Effect({ dispatch: false })
  selectPersonSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<SelectPersonSuccess>(PeopleActionTypes.SELECT_PERSON_SUCCESS),
    tap(() => {
      this.modalService.open(EditPersonBsModalComponent);

    })
  );

  @Effect()
  editPerson$: Observable<Action> = this.actions$.pipe(
    ofType<EditPerson>(PeopleActionTypes.EDIT_PERSON),
    map(action => action.payload.person),
    withLatestFrom(this.store.pipe(select(getSelectedPerson))),
    switchMap(([person, selected]) => {
      if (selected && selected.id) {
        return this.peopleService.editPerson(selected.id, person)
          .pipe(
            map((saved) => new EditPersonSuccess({ person: saved }))
          );
      }
      return this.peopleService.createPerson(person)
          .pipe(
            map((created) => new EditPersonSuccess({ person: created})),
          );
    })
  );

  @Effect()
  editPersonSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<EditPersonSuccess>(PeopleActionTypes.EDIT_PERSON_SUCCESS),
    switchMap(_ => [
      new ResetAction(PERSON_EDIT_FORM_ID),
      new SetValueAction(PERSON_EDIT_FORM_ID, NEW_PERSON),
    ]),
  );

  @Effect()
  removePerson$: Observable<Action> = this.actions$.pipe(
    ofType<RemovePerson>(PeopleActionTypes.REMOVE_PERSON),
    map(action => action.payload.id),
    switchMap((id) => {
      return this.peopleService.removePerson(id)
        .pipe(
          map(() => new RemovePersonSuccess({ id }))
        );
    })
  );

  @Effect()
  removePersonSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<RemovePersonSuccess>(PeopleActionTypes.REMOVE_PERSON_SUCCESS),
    switchMap(_ => [
      new ResetAction(PERSON_EDIT_FORM_ID),
      new SetValueAction(PERSON_EDIT_FORM_ID, NEW_PERSON),
    ]),
  );

  constructor(
    private store: Store<AppState>,
    private peopleService: PeopleService,
    private modalService: NgbModal,
    private actions$: Actions) {}
}

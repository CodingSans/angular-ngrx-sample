import { Action } from '@ngrx/store';
import { Person } from '../reducers/people.reducer';

export enum PeopleActionTypes {
  ADD_PERSON = '[People] Add Person',
  ADD_PERSON_SUCCESS = '[People] Add Person Success',
  ADD_PERSON_FAILED = '[People] Add Person Failed',
  SELECT_PERSON = '[People] Select Person',
  EDIT_PERSON = '[People] Edit Person',
  EDIT_PERSON_SUCCESS = '[People] Edit Person Success',
  EDIT_PERSON_FAILED = '[People] Edit Person Failed',
}

export class AddPerson implements Action {
  readonly type = PeopleActionTypes.ADD_PERSON;
  constructor() {}
}

export class AddPersonSuccess implements Action {
  readonly type = PeopleActionTypes.ADD_PERSON_SUCCESS;
  constructor(public payload: { person: Person }) {}
}

export class AddPersonFailed implements Action {
  readonly type = PeopleActionTypes.ADD_PERSON_FAILED;
  constructor() {}
}

export class SelectPerson implements Action {
  readonly type = PeopleActionTypes.SELECT_PERSON;
  constructor(public payload?: { id: number }) {}
}

export class EditPerson implements Action {
  readonly type = PeopleActionTypes.EDIT_PERSON;
  constructor(public payload: { person: Person }) {}
}

export class EditPersonSuccess implements Action {
  readonly type = PeopleActionTypes.EDIT_PERSON_SUCCESS;
  constructor(public payload: { person: Person }) {}
}

export class EditPersonFailed implements Action {
  readonly type = PeopleActionTypes.EDIT_PERSON_FAILED;
  constructor() {}
}

export type PeopleAction =
  AddPerson | AddPersonSuccess | AddPersonFailed |
  SelectPerson |
  EditPerson | EditPersonSuccess | EditPersonFailed;

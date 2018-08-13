import { Action } from '@ngrx/store';
import { createFormGroupState, formGroupReducer, updateGroup, validate } from 'ngrx-forms';
import { required } from 'ngrx-forms/validation';

export interface IEditPersonForm {
  name: string;
  birthPlace: string;
  birthDate: string;
}

export const PERSON_EDIT_FORM_ID = 'editPersonForm';

export const NEW_PERSON = {
  name: '',
  birthPlace: '',
  birthDate: '',
};

export const editPersonInitialState = createFormGroupState<IEditPersonForm>(
  PERSON_EDIT_FORM_ID,
  NEW_PERSON,
);

const updateAndValidate = updateGroup<IEditPersonForm>({
  name: validate<string>(required),
  birthPlace: validate<string>(required),
  birthDate: validate<string>(required),
});

export function editPersonFormReducer(state = editPersonInitialState, action: Action) {
  return updateAndValidate(formGroupReducer(state, action));
}

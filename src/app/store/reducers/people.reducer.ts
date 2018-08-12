import { PeopleAction, PeopleActionTypes } from '../actions/people.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FormGroupState } from 'ngrx-forms';
import { IEditPersonForm, editPersonInitialState, NEW_PERSON } from './edit-person.reducer';

export interface Person {
  id?: number;
  name: string;
  birthPlace: string;
  birthDate: string;
}

export interface IPeopleReducer {
  forms: {
    editPerson: FormGroupState<IEditPersonForm>;
  };
  list: Person[];
  selected: Person | null;
}

const initialState: IPeopleReducer = {
  forms: {
    editPerson: editPersonInitialState,
  },
  list: [],
  selected: null,
};

export function peopleReducer(state: IPeopleReducer = initialState, action: PeopleAction) {
  switch (action.type) {
    case PeopleActionTypes.ADD_PERSON_SUCCESS: {
      const { person } = action.payload;
      return { ...state, list: [...state.list, person] };
    }
    case PeopleActionTypes.EDIT_PERSON: {
      const { person } = action.payload;
      return { ...state, selected: person };
    }
    case PeopleActionTypes.EDIT_PERSON_SUCCESS: {
      const { person } = action.payload;
      return { ...state, selected: null, list: [...state.list, person] };
    }
    default: {
      return { ...state };
    }
  }
}

const peopleState = createFeatureSelector<IPeopleReducer>('people');
export const getPeople = createSelector(peopleState, (state) => state.list);
export const getSelectedPerson = createSelector(peopleState, (state) => state.selected);
export const getSelectedPersonForm = createSelector(peopleState, (state) => state.forms.editPerson);

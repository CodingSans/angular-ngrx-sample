import { combineReducers, createFeatureSelector, createSelector } from '@ngrx/store';
import { findIndex } from 'lodash';
import { FormGroupState } from 'ngrx-forms';
import { PeopleAction, PeopleActionTypes } from '../actions/people.actions';
import { editPersonFormReducer, editPersonInitialState, IEditPersonForm } from './edit-person.reducer';
import { PeopleDao } from '../../shared/dao/people.dao';

export interface Person {
  id?: string;
  name: string;
  birthPlace: string;
  birthDate: string;
}

export interface IForms {
  editPerson: FormGroupState<IEditPersonForm>;
}

export interface IPeopleReducer {
  forms: IForms;
  list: Person[];
  selected: Person | null;
}

const dao = new PeopleDao();

const initialState: IPeopleReducer = {
  forms: {
    editPerson: editPersonInitialState,
  },
  list: dao.findAll(),
  selected: null,
};

const formsReducer = combineReducers<IForms>({
  editPerson: editPersonFormReducer,
});

export function peopleReducer(state: IPeopleReducer = initialState, action: PeopleAction) {
  const forms = formsReducer(state.forms, action);

  if (state.forms !== forms) {
    state = { ...state, forms };
  }

  switch (action.type) {
    case PeopleActionTypes.ADD_PERSON_SUCCESS: {
      const { person } = action.payload;
      return { ...state, list: [...state.list, person] };
    }
    case PeopleActionTypes.SELECT_PERSON_SUCCESS: {
      const { person } = action.payload;
      return { ...state, selected: person };
    }
    case PeopleActionTypes.EDIT_PERSON_SUCCESS: {
      const { person } = action.payload;
      const currentIndex = findIndex(state.list, (p) => p.id === person.id);
      if (currentIndex === -1) {
        return { ...state, selected: null, list: [...state.list, person] };
      }
      return { ...state, selected: null, list: [...state.list.slice(0, currentIndex), person, ...state.list.slice(currentIndex + 1)] };
    }
    case PeopleActionTypes.REMOVE_PERSON_SUCCESS: {
      const { id } = action.payload;
      return { ...state, selected: null, list: state.list.filter(p => p.id !== id) };
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

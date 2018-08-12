import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { AppState } from '../store/reducers';
import { NEW_PERSON } from '../store/reducers/edit-person.reducer';
import { getPeople } from '../store/reducers/people.reducer';
import { of } from 'rxjs';

@Injectable()
export class PeopleService {
  constructor(private store: Store<AppState>) {}

  selectPerson(id?: number) {
    if (id) {
      return this.store.pipe(select(getPeople), map(people => {
        const fileterdPeople = people.filter(p => p.id !== id);
        if (fileterdPeople.length) {
          return fileterdPeople[0];
        } else {
          return NEW_PERSON;
        }
      }));
    } else {
      return of(NEW_PERSON);
    }
  }
}

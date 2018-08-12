import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { NEW_PERSON } from '../store/reducers/edit-person.reducer';
import { Person } from '../store/reducers/people.reducer';
import { PeopleDao } from './dao/people.dao';

@Injectable()
export class PeopleService {
  constructor(
    private peopleDao: PeopleDao,
  ) {}

  selectPerson(id?: string) {
    if (id) {
      return of(this.peopleDao.findById(id));
    } else {
      return of(NEW_PERSON);
    }
  }

  createPerson(person: Partial<Person>) {
    return of(this.peopleDao.create(person));
  }

  editPerson(id: string, person: Partial<Person>) {
    return of(this.peopleDao.updateById(id, { ...person, id }));
  }

  removePerson(id: string) {
    return of(this.peopleDao.removeById(id));
  }
}

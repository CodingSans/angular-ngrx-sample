import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SelectPerson, RemovePerson } from '../store/actions/people.actions';
import { AppState } from '../store/reducers';
import { getPeople, Person } from '../store/reducers/people.reducer';

@Component({
  selector: 'app-bootstrap-form',
  templateUrl: './bootstrap-form.component.html',
  styleUrls: ['./bootstrap-form.component.scss']
})
export class BootstrapFormComponent {
  public people$ = this.store.pipe(select(getPeople));

  constructor(private store: Store<AppState>) { }

  public startEditPerson(person?: Person) {
    const id = person && person.id;
    this.store.dispatch(new SelectPerson({ id }));
  }

  public startRemovePerson(person?: Person) {
    const id = person && person.id;
    this.store.dispatch(new RemovePerson({ id }));
  }
}

import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../store/reducers';
import { getPeople } from '../store/reducers/people.reducer';
import { SelectPerson } from '../store/actions/people.actions';

@Component({
  selector: 'app-material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.scss']
})
export class MaterialFormComponent {
  public displayedColumns: string[] = ['name', 'birthPlace', 'birthDate', 'actions'];
  public people$ = this.store.pipe(select(getPeople));

  constructor(private store: Store<AppState>) { }

  startEditPerson(person) {
    const id = person && person.id;
    this.store.dispatch(new SelectPerson({ id, type: 'material' }));
  }
}

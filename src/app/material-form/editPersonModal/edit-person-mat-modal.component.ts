import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngrx/store';
import { FormGroupState } from 'ngrx-forms';
import { CountryService } from '../../shared/services/country.service';
import { DateToString } from '../../shared/helpers/datepicker.formatter';
import { EditPerson, RemovePerson } from '../../store/actions/people.actions';
import { AppState } from '../../store/reducers';
import { IEditPersonForm } from '../../store/reducers/edit-person.reducer';
import { getSelectedPerson, getSelectedPersonForm, Person } from '../../store/reducers/people.reducer';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  templateUrl: './edit-person-mat-modal.component.html',
})
export class EditPersonMatModalComponent {
  public dateToString = new DateToString();

  public selected$ = this.store.pipe(select(getSelectedPerson));
  public formState$ = this.store.pipe(select(getSelectedPersonForm));
  public countries$ = this.countryService.getCountries();

  constructor(
    private store: Store<AppState>,
    private countryService: CountryService,
    public dialogRef: MatDialogRef<EditPersonMatModalComponent>,
  ) {}

  public submitPerson(formState: FormGroupState<IEditPersonForm>) {
    if (formState.isValid) {
      const person = formState.value;
      this.store.dispatch(new EditPerson({ person }));
      this.dialogRef.close({ success: true });
    }
  }

  public removePerson(selected: Person) {
    this.store.dispatch(new RemovePerson({ id: selected.id }));
    this.dialogRef.close({ success: true });
  }
}

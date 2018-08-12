import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngrx/store';
import { FormGroupState } from 'ngrx-forms';
import { CountryService } from '../../shared/country.service';
import { DateToString } from '../../shared/datepicker.formatter';
import { EditPerson, RemovePerson } from '../../store/actions/people.actions';
import { AppState } from '../../store/reducers';
import { IEditPersonForm } from '../../store/reducers/edit-person.reducer';
import { getSelectedPerson, getSelectedPersonForm, Person } from '../../store/reducers/people.reducer';

@Component({
  templateUrl: './edit-person-bs-modal.component.html',
})
export class EditPersonBsModalComponent {
  public dateToString = new DateToString();

  public selected$ = this.store.pipe(select(getSelectedPerson));
  public formState$ = this.store.pipe(select(getSelectedPersonForm));
  public countries$ = this.countryService.getCountries();

  constructor(
    private store: Store<AppState>,
    private countryService: CountryService,
    public activeModal: NgbActiveModal
  ) {}

  public submitPerson(formState: FormGroupState<IEditPersonForm>) {
    if (formState.isValid) {
      const person = formState.value;
      this.store.dispatch(new EditPerson({ person }));
      this.activeModal.close({ success: true });
    }
  }

  public removePerson(selected: Person) {
    this.store.dispatch(new RemovePerson({ id: selected.id }));
    this.activeModal.close({ success: true });
  }
}

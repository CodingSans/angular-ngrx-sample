import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppState } from '../../store/reducers';
import { Store, select } from '@ngrx/store';
import { getSelectedPersonForm } from '../../store/reducers/people.reducer';

@Component({
  templateUrl: './edit-person-bs-modal.component.html',
})
export class EditPersonBsModalComponent {
  formState$ = this.store.pipe(select(getSelectedPersonForm));

  constructor(
    private store: Store<AppState>,
    public activeModal: NgbActiveModal
  ) {}

}

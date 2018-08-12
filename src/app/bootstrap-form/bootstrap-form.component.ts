import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngrx/store';
import { SelectPerson } from '../store/actions/people.actions';
import { AppState } from '../store/reducers';
import { getPeople } from '../store/reducers/people.reducer';
import { EditPersonBsModalComponent } from './editPersonModal/edit-person-bs-modal.component';

@Component({
  selector: 'app-bootstrap-form',
  templateUrl: './bootstrap-form.component.html',
  styleUrls: ['./bootstrap-form.component.scss']
})
export class BootstrapFormComponent {
  public people$ = this.store.pipe(select(getPeople));

  constructor(private store: Store<AppState>, private modalService: NgbModal) { }

  public startAddPerson() {
    this.store.dispatch(new SelectPerson());
    this.modalService.open(EditPersonBsModalComponent);
  }
}

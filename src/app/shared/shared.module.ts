import { NgModule } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgrxFormsModule } from 'ngrx-forms';
import { PeopleService } from './people.service';

@NgModule({
  imports: [
    NgbModalModule.forRoot(),
    NgrxFormsModule,
  ],
  exports: [
    NgbModalModule,
    NgrxFormsModule,
  ],
  providers: [
    PeopleService,
  ]
})
export class SharedModule {}

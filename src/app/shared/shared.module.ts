import { NgModule } from '@angular/core';
import { NgbDateAdapter, NgbDateNativeAdapter, NgbDatepickerModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgrxFormsModule } from 'ngrx-forms';
import { CountryService } from './country.service';
import { PeopleService } from './people.service';
import { PeopleDao } from './dao/people.dao';

@NgModule({
  imports: [
    NgbModalModule.forRoot(),
    NgbDatepickerModule.forRoot(),
    NgrxFormsModule,
  ],
  exports: [
    NgbModalModule,
    NgbDatepickerModule,
    NgrxFormsModule,
  ],
  providers: [
    CountryService,
    PeopleService,
    PeopleDao,
    { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter },
  ]
})
export class SharedModule {}

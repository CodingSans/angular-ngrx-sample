import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbDateAdapter, NgbDateNativeAdapter, NgbDatepickerModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgrxFormsModule } from 'ngrx-forms';
import { AppRoutingModule } from '../app-routing.module';
import { PeopleDao } from './dao/people.dao';
import { CountryService } from './services/country.service';
import { PeopleService } from './services/people.service';
import { NgrxMatSelectViewAdapter } from './helpers/mat-select-view-adapter';

@NgModule({
  declarations: [NgrxMatSelectViewAdapter],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModalModule.forRoot(),
    NgbDatepickerModule.forRoot(),
    NgrxFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModalModule,
    NgbDatepickerModule,
    NgrxFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgrxMatSelectViewAdapter,
  ],
  providers: [
    CountryService,
    PeopleService,
    PeopleDao,
    { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter },
  ]
})
export class SharedModule {}

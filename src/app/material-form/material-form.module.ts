import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EditPersonMatModalComponent } from './editPersonModal/edit-person-mat-modal.component';

@NgModule({
  declarations: [
    EditPersonMatModalComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
})
export class MaterialFormModule {}

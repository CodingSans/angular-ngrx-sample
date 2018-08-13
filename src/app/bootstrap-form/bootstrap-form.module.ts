import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BootstrapFormComponent } from './bootstrap-form.component';
import { EditPersonBsModalComponent } from './editPersonModal/edit-person-bs-modal.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    EditPersonBsModalComponent,
    BootstrapFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
})
export class BootstrapFormModule {}

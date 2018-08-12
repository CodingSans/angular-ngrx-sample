import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BootstrapFormComponent } from './bootstrap-form/bootstrap-form.component';
import { MaterialFormComponent } from './material-form/material-form.component';

const appRoutes: Routes = [
  { path: 'bootstrap', component: BootstrapFormComponent },
  { path: 'material', component: MaterialFormComponent },
  { path: '**', redirectTo: 'bootstrap' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

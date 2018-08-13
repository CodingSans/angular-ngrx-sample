import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapFormModule } from './bootstrap-form/bootstrap-form.module';
import { EditPersonBsModalComponent } from './bootstrap-form/editPersonModal/edit-person-bs-modal.component';
import { MaterialFormComponent } from './material-form/material-form.component';
import { MaterialFormModule } from './material-form/material-form.module';
import { SharedModule } from './shared/shared.module';
import { PeopleEffects } from './store/effects/people.effects';
import { reducers } from './store/reducers';
import { customSerializerProvider } from './store/reducers/customSerializer';
import { EditPersonMatModalComponent } from './material-form/editPersonModal/edit-person-mat-modal.component';

@NgModule({
  declarations: [AppComponent, MaterialFormComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    SharedModule,
    BootstrapFormModule,
    MaterialFormModule,
    EffectsModule.forRoot([PeopleEffects]),
  ],
  providers: [
    customSerializerProvider,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    EditPersonBsModalComponent,
    EditPersonMatModalComponent,
  ]
})
export class AppModule {}

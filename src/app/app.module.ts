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
import { SharedModule } from './shared/shared.module';
import { PeopleEffects } from './store/effects/people.effects';
import { reducers } from './store/reducers';
import { customSerializerProvider } from './store/reducers/customSerializer';

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
    AppRoutingModule,
    SharedModule,
    BootstrapFormModule,
    EffectsModule.forRoot([PeopleEffects]),
  ],
  providers: [
    customSerializerProvider,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    EditPersonBsModalComponent,
  ]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapFormComponent } from './bootstrap-form/bootstrap-form.component';
import { MaterialFormComponent } from './material-form/material-form.component';
import { reducers } from './store/reducers';
import { customSerializerProvider } from './store/reducers/customSerializer';

@NgModule({
  declarations: [AppComponent, MaterialFormComponent, BootstrapFormComponent],
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
  ],
  providers: [customSerializerProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}

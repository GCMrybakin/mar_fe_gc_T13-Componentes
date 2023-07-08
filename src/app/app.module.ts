import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { DatosClienteComponent } from './datos-cliente/datos-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    AltaClienteComponent,
    DatosClienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

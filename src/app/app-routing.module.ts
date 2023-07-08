import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';

const routes: Routes = [
  { path: 'alta-cliente', component: AltaClienteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

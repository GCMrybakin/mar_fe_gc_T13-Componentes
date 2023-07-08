import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clientes: any[] = [];

  agregarCliente(cliente: any) {
    this.clientes.push(cliente);
  }
}

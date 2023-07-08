import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent {
  @Output() clienteGuardado = new EventEmitter<any>();
  cliente: any = {};

  submitForm() {
    this.clienteGuardado.emit(this.cliente);
    this.cliente = {};
  }
  clientes: any[] = [];

  agregarCliente(cliente: any) {
    this.clientes.push(cliente);
  }
}

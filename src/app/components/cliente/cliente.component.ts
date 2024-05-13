import { Cliente } from './../../interfaces/Cliente';
import { ClienteService } from './../../services/cliente.service';
import { Component, OnInit } from '@angular/core';

import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})  
export class ClienteComponent implements OnInit { 

  clientes: Cliente[] = [];

  constructor(private clienteService : ClienteService) { }

  ngOnInit(): void {
    this.getClientes();
  }

  // Método para buscar a lista de clientes do serviço
  getClientes() {
    this.clienteService.getListaClientes()
      .subscribe(clientes => this.clientes = clientes);
  }

  editarCliente(cliente: Cliente) {
    console.log('Cliente para edição:', cliente);
    // Aqui você pode implementar a lógica para editar o cliente
}

excluirCliente(cliente: Cliente) {
    console.log('Cliente para exclusão:', cliente);
    // Aqui você pode implementar a lógica para excluir o cliente
}
}

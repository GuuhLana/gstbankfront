import { Cliente } from './../../interfaces/Cliente';
import { ClienteService } from './../../services/cliente.service';
import { Component, OnInit } from '@angular/core';

import { ConfirmDialogComponent } from './../../confirm-dialog/confirm-dialog.component';
import { CadastroDialogComponent } from './../../cadastro-dialog/cadastro-dialog.component';


import { MatDialog } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})  
export class ClienteComponent implements OnInit { 

  clientes: Cliente[] = [];

  constructor(private clienteService : ClienteService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getClientes();
  }

  // Método para buscar a lista de clientes do serviço
  getClientes() {
    this.clienteService.recuperaListaClientes()
      .subscribe(clientes => this.clientes = clientes);
  }

  editarCliente(cliente: Cliente) {
    console.log('Cliente para edição:', cliente);
    // Aqui você pode implementar a lógica para editar o cliente
}

  openConfirmDialog(cliente: Cliente){
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteAccount(cliente);
        this.reloadPage();
      }
    });
  }

  openCadastroDialog() {
    const dialogRef = this.dialog.open(CadastroDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getClientes();
        this.reloadPage();
      }
    });
  }

  deleteAccount(cliente: Cliente) {
    this.clienteService.deletaCliente(cliente.id).subscribe(
    );
  }

  reloadPage() {
    location.reload();
  }
}
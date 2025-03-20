import { Cliente } from './../../interfaces/Cliente';
import { ClienteService } from './../../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConfirmDialogComponent } from './../../confirm-dialog/confirm-dialog.component';

import { MatDialog } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})  
export class ClienteComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clienteService : ClienteService, public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes() {
    this.clienteService.recuperaListaClientes().subscribe((clientes) => {
      this.clientes = clientes.sort((a, b) => a.id - b.id);
    });
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

  openCadastro() {
    this.router.navigate(['/cadastro-conta']);
  }

  openMenu() {
    this.router.navigate(['/menu']);
    }

  openTransferencia() {
    this.router.navigate(['/transferencia']);
  }

  deleteAccount(cliente: Cliente) {
    this.clienteService.deletaCliente(cliente.id).subscribe(
    );
  }

  openListaEventos() {
    this.router.navigate(['/lista-eventos']);
  }

  reloadPage() {
    location.reload();
  }
}
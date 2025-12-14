import { Cliente } from './../../interfaces/Cliente';
import { ClienteService } from './../../services/cliente.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConfirmDialogComponent } from './../../confirm-dialog/confirm-dialog.component';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit, AfterViewInit {

  clientes: Cliente[] = [];

  displayedColumns: string[] = ['id', 'agencia', 'numero', 'cpf', 'titular', 'saldo', 'tipo', 'acoes'];
  dataSource = new MatTableDataSource<Cliente>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private clienteService: ClienteService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getClientes();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  getClientes() {
    this.clienteService.recuperaListaClientes().subscribe((clientes) => {
      const ordenado = clientes.sort((a, b) => a.id - b.id);
      this.clientes = ordenado;
      this.dataSource.data = ordenado;

      // garante que após recarregar dados você volta para a primeira página
      if (this.paginator) {
        this.paginator.firstPage();
      }
    });
  }

  openConfirmDialog(cliente: Cliente) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteAccount(cliente);
      }
    });
  }

  deleteAccount(cliente: Cliente) {
    this.clienteService.deletaCliente(cliente.id).subscribe(() => {
      // Recarrega a lista após deletar (sem reload da página)
      this.getClientes();
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

  openListaEventos() {
    this.router.navigate(['/lista-eventos']);
  }
}

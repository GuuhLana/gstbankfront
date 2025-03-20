import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {
  transferenciaForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.transferenciaForm = this.fb.group({
      contaOrigemNumero: ['', Validators.required],
      contaOrigemAgencia: ['', Validators.required],
      contaDestinoNumero: ['', Validators.required],
      contaDestinoAgencia: ['', Validators.required],
      valor: ['', [Validators.required, Validators.min(0.01)]], // Valor mínimo de 0.01
    });
  }

  onSubmit(): void {
    if (this.transferenciaForm.valid) {
      this.clienteService.transferir(this.transferenciaForm.value).subscribe(
        (response) => {
          const successMessage = typeof response === 'string' ? response : response.message;
          Swal.fire({
            icon: 'success',
            title: 'Sucesso!',
            text: successMessage || 'Transferência realizada com sucesso!',
          });
          this.router.navigate(['/lista-clientes']);
        },
        (error) => {
          const errorMessage = error.error?.message || error.error || 'Erro desconhecido ao realizar transferência';
          Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'Erro ao realizar transferência: ' + errorMessage,
          });
        }
      );
    }
  }

  onCancel(): void {
    this.router.navigate(['/lista-clientes']); // Volta para a lista sem realizar a transferência
  }
}
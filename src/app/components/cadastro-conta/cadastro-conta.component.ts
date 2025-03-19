import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-conta',
  templateUrl: './cadastro-conta.component.html',
  styleUrls: ['./cadastro-conta.component.css'],
})
export class CadastroContaComponent implements OnInit {
  cadastroForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      titular: ['', Validators.required],
      numero: ['', Validators.required],
      agencia: ['', Validators.required],
      saldo: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.cadastroForm.valid) {
      this.clienteService.cadastrarConta(this.cadastroForm.value).subscribe(
        (response) => {
          this.router.navigate(['/lista-clientes']);
        },
        (error) => {
          console.error('Erro ao cadastrar conta:', error);
        }
      );
    }
  }

  onCancel(): void {
    this.router.navigate(['/lista-clientes']);
  }
}
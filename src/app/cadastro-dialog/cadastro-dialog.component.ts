import { ClienteService } from './../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cadastro-dialog',
  templateUrl: './cadastro-dialog.component.html',
  styleUrls: ['./cadastro-dialog.component.css']
})
export class CadastroDialogComponent implements OnInit {

  cadastroForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CadastroDialogComponent>,
    private fb: FormBuilder,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      titular: ['', Validators.required],
      numero: ['', Validators.required],
      agencia: ['', Validators.required],
      saldo: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.cadastroForm.valid) {
      this.clienteService.cadastrarConta(this.cadastroForm.value).subscribe(
        response => {
          this.dialogRef.close(response);
        },
        error => {
          console.error('Erro ao cadastrar conta:', error);
        }
      );
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContaService } from '../conta.service';

@Component({
  selector: 'app-cadastro-dialog',
  templateUrl: './cadastro-dialog.component.html',
  styleUrls: ['./cadastro-dialog.component.css']
})
export class CadastroDialogComponent implements OnInit {

  cconstructor(
    private dialogRef: MatDialogRef<CadastroDialogComponent>,
    private fb: FormBuilder,
    private contaService: ContaService
  ) {
    this.cadastroForm = this.fb.group({
      titular: ['', Validators.required],
      numero: ['', Validators.required],
      agencia: ['', Validators.required],
      saldo: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      this.contaService.cadastrarConta(this.cadastroForm.value).subscribe(
        response => {
          this.dialogRef.close(response);
        },
        error => {
          console.error('Erro ao cadastrar a conta', error);
        }
      );
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}

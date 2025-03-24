import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {

  constructor(private router: Router) { }

  title = 'banco-app';

  onButtonClick(option: string) {
    console.log(`Opção selecionada: ${option}`);
    if (option == 'Listar-Contas') {
      this.router.navigate(['/lista-clientes']);
    }
    if (option == 'Listar-Eventos') {
      this.router.navigate(['/lista-eventos']);
    }
    if (option == 'Transferência') {
      this.router.navigate(['/transferencia']);
    }
    if (option == 'Cadastrar') {
      this.router.navigate(['/cadastro-conta']);
    }
    // if (option == 'Extrato') {
    //   this.router.navigate(['']);
    // }
  }

}

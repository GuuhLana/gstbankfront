import { EventoComponent } from './components/evento/evento.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: ClienteComponent },
  { path: 'lista-clientes', component: ClienteComponent },
  { path: 'lista-eventos', component: EventoComponent }

];

@NgModule({
  declarations: [],
  imports: [ 
    CommonModule, 
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }

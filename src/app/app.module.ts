import { CadastroContaComponent } from './components/cadastro-conta/cadastro-conta.component';
import { FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { EventoComponent } from './components/evento/evento.component';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { MenuComponent } from './components/menu/menu.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ConfirmDialogComponent,
    CadastroContaComponent,
    EventoComponent,
    FormatDatePipe,
    MenuComponent,
    TransferenciaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

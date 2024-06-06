import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastroDialogComponent } from './cadastro-dialog/cadastro-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ConfirmDialogComponent,
    CadastroDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

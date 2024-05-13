import { Cliente } from './../interfaces/Cliente';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clienteUrl = "http://localhost:8080/api/conta"

  constructor( private httpClient: HttpClient ) { }

  getListaClientes(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.clienteUrl + "/lista-contas");
  }
}
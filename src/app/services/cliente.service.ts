import { Cliente } from './../interfaces/Cliente';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clienteUrl = "http://localhost:8080/api/conta"
  private deleteUrl = "http://localhost:8080/api/conta/deletar"
  private createUrl = "http://localhost:8080/api/conta/cadastrar"

  constructor( private httpClient: HttpClient ) { }

  recuperaListaClientes(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.clienteUrl + "/lista-contas");
  }

  deletaCliente(clienteId: number): Observable<string> {
    const url = `${this.deleteUrl}/${clienteId}`;
    return this.httpClient.delete<string>(url).pipe(
      catchError(this.handleError)
    );
  }

  cadastrarConta(conta: any): Observable<any> {
    return this.httpClient.post(`${this.createUrl}/`, conta);
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
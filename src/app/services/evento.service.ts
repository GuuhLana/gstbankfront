import { Evento } from './../interfaces/Evento';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private eventoUrl = "http://localhost:8080/api/eventos"


  constructor( private httpClient: HttpClient ) { }

  recuperaListaEventos(): Observable<Evento[]> {
    return this.httpClient.get<Evento[]>(this.eventoUrl + "/listar");
  }
}

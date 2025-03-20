import { EventoService } from './../../services/evento.service';
import { Evento } from './../../interfaces/Evento';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  eventos: Evento[] = [];

  constructor(private eventoService : EventoService, private router: Router) { }

  ngOnInit(): void {
    this.getEventos();
  }

  getEventos(){
    this.eventoService.recuperaListaEventos().subscribe(eventos => {
      this.eventos = eventos.sort((a, b) => b.id - a.id);
  });
  }

  voltar(){
    this.router.navigate(['/menu']);
  }

}

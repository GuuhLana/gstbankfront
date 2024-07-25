import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {
  transform(horarioEvento: any): string {
    if (typeof horarioEvento === 'string') {
      // Tente converter a string em um objeto Date
      const data = new Date(horarioEvento);

      if (isNaN(data.getTime())) {
        console.error('Data inválida a partir da string:', horarioEvento);
        return 'Data inválida';
      }

      return this.formatDate(data);
    } else if (Array.isArray(horarioEvento) && horarioEvento.length >= 6) {
      const [ano, mes, dia, hora, minuto, segundo] = horarioEvento;

      if ([ano, mes, dia, hora, minuto, segundo].some(val => isNaN(val))) {
        console.error('Valores inválidos para construir data:', horarioEvento);
        return 'Data inválida';
      }

      const data = new Date(ano, mes - 1, dia, hora, minuto, segundo);

      if (isNaN(data.getTime())) {
        console.error('Data inválida construída a partir de valores:', horarioEvento);
        return 'Data inválida';
      }

      return this.formatDate(data);
    } else {
      console.error('horarioEvento não é um array válido:', horarioEvento);
      return 'Data inválida';
    }
  }

  private formatDate(data: Date): string {
    const diaFormatado = data.getDate().toString().padStart(2, '0');
    const mesFormatado = (data.getMonth() + 1).toString().padStart(2, '0');
    const anoFormatado = data.getFullYear();
    const horaFormatada = data.getHours().toString().padStart(2, '0');
    const minutoFormatado = data.getMinutes().toString().padStart(2, '0');
    const segundoFormatado = data.getSeconds().toString().padStart(2, '0');

    return `${diaFormatado}/${mesFormatado}/${anoFormatado} - ${horaFormatada}:${minutoFormatado}:${segundoFormatado}`;
  }
}
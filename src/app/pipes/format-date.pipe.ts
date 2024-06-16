import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(horarioEvento: number): string {
    // Verifique se horarioEvento é um array e possui pelo menos 7 elementos
    if (!Array.isArray(horarioEvento) || horarioEvento.length < 7) {
      console.error('horarioEvento não é um array válido:', horarioEvento);
      return 'Data inválida';
    }

    const ano = horarioEvento[0];
    const mes = horarioEvento[1] - 1; // Meses em JavaScript vão de 0 a 11
    const dia = horarioEvento[2];
    const hora = horarioEvento[3];
    const minuto = horarioEvento[4];
    const segundo = horarioEvento[5];

    // Verifique se os valores numéricos são válidos para construir a data
    if (isNaN(ano) || isNaN(mes) || isNaN(dia) || isNaN(hora) || isNaN(minuto) || isNaN(segundo)) {
      console.error('Valores inválidos para construir data:', horarioEvento);
      return 'Data inválida';
    }

    const data = new Date(ano, mes, dia, hora, minuto, segundo);

    if (isNaN(data.getTime())) {
      console.error('Data inválida construída a partir de valores:', horarioEvento);
      return 'Data inválida';
    }

    const diaFormatado = data.getDate();
    const mesFormatado = data.getMonth() + 1; // Adiciona 1 porque os meses começam em 0
    const anoFormatado = data.getFullYear();
    const horaFormatada = data.getHours().toString().padStart(2, '0');
    const minutoFormatado = data.getMinutes().toString().padStart(2, '0');
    const segundoFormatado = data.getSeconds().toString().padStart(2, '0');

    return `${diaFormatado}/${mesFormatado}/${anoFormatado} - ${horaFormatada}:${minutoFormatado}:${segundoFormatado}`;
  }
}

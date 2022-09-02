import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busqueda'
})
export class BusquedaPipe implements PipeTransform {

  transform(arreglo: any[] , texto: string): any {

    if (!texto) return;

    if(!arreglo) return;

    texto = texto.toLocaleLowerCase();
    if (arreglo[0] && arreglo[0].nombreMunicipio) {

      return arreglo = arreglo.filter((depaMuni) => {
        return (depaMuni.nombreMunicipio.toLowerCase().indexOf(texto.toLowerCase()) > -1  ||
              depaMuni.nombreDepartamento.toLowerCase().indexOf(texto.toLowerCase()) > -1 );
        });
    }

    if (arreglo[0] && arreglo[0].nombreEspecialidad) {

      return arreglo = arreglo.filter((especialidad) => {
        return (especialidad.nombreEspecialidad.toLowerCase().indexOf(texto.toLowerCase()) > -1 );
      });
    }

    if (arreglo[0] && arreglo[0].nombreExamen) {

      return arreglo = arreglo.filter((examen) => {
        return (examen.nombreExamen.toLowerCase().indexOf(texto.toLowerCase()) > -1 );
      });
    }

  }
}

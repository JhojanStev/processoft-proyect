import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.prod';
import { throwError, of, catchError } from 'rxjs';
import { timeout, map } from 'rxjs/operators';
import Swal from 'sweetalert2';

const headers = new HttpHeaders().set('Content-Type', 'application/json');

const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root',
})
export class AplicationService {
  constructor(private http: HttpClient) {}

  /**
   * Método reutilizable tipo GET
   * @param partialEndPoint Cadena tipo string con el endpoint a realizar la solicitud
   */
  public getRequest(partialEndPoint: string) {
    return this.http.get(apiUrl + partialEndPoint, { headers }).pipe(
      map((res: any) => {
        if (!res.ok || !res) {
          return;
        }
        return res;
      }),
      timeout(3000),
      catchError((e) => {
        if (e.status === 0) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error en la conexión, por favor revisa tu conexión o intentalo más tarde.!',
          });
          console.log(
            'Error',
            'Error en la conexión, por favor revisa tu conexión o intentalo más tarde.',
            'error'
          );
          return e;
        }
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: e.mensaje,
        });
        console.log('Error', e.mensaje, 'error');

        return of(null);
      })
    );
  }

  /**
   * Método reutilizable tipo POST
   * @param partialEndPoint Cadena tipo string con el endpoint a realizar la solicitud
   */
  public postRequest(partialEndPoint: string, data: any, coti: boolean) {
    return this.http.post(apiUrl + partialEndPoint, data, { headers }).pipe(
      map((res: any) => {
        if (!res.ok || !res) {
          if (coti == true) {
            Swal.fire({
              title: '¡Gracias por confiar en nosotros y dejarnos tus datos!',
              text: 'para SsangYong tu eres lo más importante y pronto nos pondremos en contacto contigo',
              width: 800,
              html: '<p>para SsangYong tu eres lo más importante y pronto nos pondremos en contacto contigo</p><br><h4>CONOCE MÁS DE TU FUTURA CAMIONETA</h4><br><iframe width="600" height="300" src="https://www.youtube.com/embed/Mg98oOikjmE" title="SsangYong Rexton 🔥 Un 4X4 de verdad 🔥 Prueba - Reseña ➡️  4K" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
              confirmButtonColor: '#000',
              confirmButtonText: 'Cerrar',
            });
          }

          return;
        }

        return res;
      }),
      timeout(3000),
      catchError((e) => {
        if (e.status === 0) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error en la conexión, por favor revisa tu conexión o intentalo más tarde.!',
          });
          console.log(
            'Error',
            'Error en la conexión, por favor revisa tu conexión o intentalo más tarde.',
            'error'
          );
          return e;
        }
        console.log('Error', e.mensaje, 'error');
        Swal.fire({
          icon: 'error',
          title: 'Algo salio mal',
          text:  e.error.mensaje ,
        });

        return of(null);
      })
    );
  }
}

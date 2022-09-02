import { Injectable } from '@angular/core';
import { AplicationService } from './aplication.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor(private appService: AplicationService) {}

  // ======================================
  // Método get para obtener los municipios
  //
  // ======================================
  async getMunic() {
    let temp = await this.appService.getRequest(`/api/municipios`).toPromise();
    return temp;
  }

  // ======================================
  // Método get para obtener los departamentos
  //
  // ======================================
  async getDepar() {
    let temp = await this.appService.getRequest(`/api/departamentos`).toPromise();
    return temp;
  }

  // ======================================
  // Método get para obtener los modelos de los vehiculos
  //
  // ======================================
  async getModels() {
    let temp = await this.appService.getRequest(`/api/modelos`).toPromise();
    return temp;
  }

  // ======================================
  // Metodo post para enviar informacion de cotizacion
  // ======================================
  async postQuotation(info: any) {
    let temp = await this.appService.postRequest(`/api/cotizaciones`, info, true).toPromise();
    return temp;
  }

  // ======================================
  // Metodo post para enviar correos
  // ======================================
  async postmail(info: any) {
    let temp = await this.appService.postRequest(`/api/email`, info, false).toPromise();
    return temp;
  }
}

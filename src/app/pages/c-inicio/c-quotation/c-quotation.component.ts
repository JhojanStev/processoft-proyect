import { GlobalService } from './../../../services/global.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-c-quotation',
  templateUrl: './c-quotation.component.html',
  styleUrls: ['./c-quotation.component.scss'],
})
export class CQuotationComponent implements OnInit {
  public formRegister: FormGroup | any;
  public buscarDepasMunic: any;
  public estado: any;
  public depasMunic: Array<any> = [];
  public depas: any;
  public munic: any;
  public modelCar = 'Selecciona';
  public models: any;

  constructor(public globalService: GlobalService) {}

  ngOnInit(): void {
    this.initForm();
    this.getDepas();
    this.getMunic();
    this.getModels();
  }

  /**
   * Metodo que permite inicializar el formulario para guardar la informacion de los campos.
   */
  // tslint:disable-next-line:typedef
  initForm() {
    this.formRegister = new FormGroup({
      nombre: new FormControl(null, [
        Validators.required,
        Validators.pattern('[a-zA-Z ]{0,254}'),
      ]),
      correo: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ]),
      celular: new FormControl(null, [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern('[0-9]+'),
      ]),
      municipio: new FormControl(null),
      modelos: new FormControl(null),
      departamento: new FormControl(null),
      aceptoTerminos: new FormControl(null, Validators.requiredTrue),
    });
  }

  /**
   * Metodo que permite enviar la informacion de Cotizacion hacia la base de datos.
   */
  // tslint:disable-next-line:typedef
  sendForm() {
    let date: Date = new Date();
    let cotizacion = {
      nombre: this.formRegister.get('nombre').value,
      email: this.formRegister.get('correo').value,
      celular: this.formRegister.get('celular').value,
      municipio: this.formRegister.get('municipio').value,
      departamento: this.formRegister.get('departamento').value,
      modelos: this.formRegister.get('modelos').value,
      fecha: date.getDate()+'/'+ date.getMonth()+'/'+ date.getFullYear()
    };
    this.globalService.postQuotation(cotizacion).then(() => {});
  }
  /**
   * Metodo que permite enviar la informacion de Email hacia la base de datos.
   */
  // tslint:disable-next-line:typedef
  sendEmail() {
    let email = {
      mensaje: {
        nombre: this.formRegister.get('nombre').value,
        correo: this.formRegister.get('correo').value,
        celular: this.formRegister.get('celular').value,
        municipio: this.formRegister.get('municipio').value,
        departamento: this.formRegister.get('departamento').value,
        modelos: this.formRegister.get('modelos').value,
      },
      asunto: 'Datos para cotización de vehiculos',
    };
    this.globalService.postmail(email).then(() => {});
  }

  /**
   * Metodo para obtener los departamentos desde la base de datos.
   */
  // tslint:disable-next-line:typedef
  getDepas() {
    this.globalService.getDepar().then((res: any) => {
      this.depas = res;
    });
  }

  /**
   * Metodo para obtener los municipios desde la base de datos.
   */
  // tslint:disable-next-line:typedef
  getMunic() {
    this.globalService.getMunic().then((res: any) => {
      this.munic = res;
    });
  }
  /**
   * Metodo para obtener los modelos de vehiculos desde la base de datos.
   */
  // tslint:disable-next-line:typedef
  getModels() {
    this.globalService.getModels().then((res: any) => {
      this.models = res;
    });
  }
}

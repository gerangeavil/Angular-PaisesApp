import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;

  constructor(
    private paisesService: PaisesService
  ) { }

  buscar() {
    this.hayError = false;
    console.log(this.termino);
    this.paisesService.buscarPais(this.termino).subscribe((res) => {

      // if (res.status == '404') {
      //   console.log('Error', res.status);
      //   this.hayError = true;
      // } else {
      console.log(res);
      // }
    }, (err) => {
      console.log('Error', err);
      this.hayError = true;
    });

  }
}

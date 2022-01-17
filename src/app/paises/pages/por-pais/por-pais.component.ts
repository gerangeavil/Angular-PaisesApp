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
    this.paisesService.buscarPais(this.termino).subscribe((paises) => {
      console.log(paises);
    }, (err) => {
      console.log('Error', err);
      this.hayError = true;
    });
  }
}

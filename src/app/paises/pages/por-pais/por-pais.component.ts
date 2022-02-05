import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(
    private paisesService: PaisesService
  ) { }

  buscar() {
    this.hayError = false;
    this.paisesService.buscarPais(this.termino).subscribe((paises) => {
      this.paises = paises;
      console.log(paises);
    }, (err) => {
      console.log('Error', err);
      this.hayError = true;
      this.paises = [];
    });
  }
}

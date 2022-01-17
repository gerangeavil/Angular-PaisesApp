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

  constructor(
    private paisesService: PaisesService
  ) { }

  buscar() {
    console.log(this.termino);
    this.paisesService.buscarPais(this.termino).subscribe(res => {
      console.log(res);
    });

  }
}

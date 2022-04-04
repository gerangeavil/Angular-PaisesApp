import { Component } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(
    private paisesService: PaisesService
  ) { }

  getClaseCSS(region: string): string {
    return region === this.regionActiva ? 'btn-primary' : 'btn-outline-primary';
  }

  activarRegion(region: string) {
    if (region === this.regionActiva) {
      return;
    }

    this.regionActiva = region;
    this.paises = [];

    this.paisesService.buscarRegion(region).subscribe((paises) => {
      this.paises = paises;
      console.log(paises);
    }, error => {
      console.error(error);
      this.paises = [];
    });
  }
}

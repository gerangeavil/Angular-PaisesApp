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

  constructor(
    private paisesService: PaisesService
  ) { }

  getClaseCSS(region: string): string {
    return region === this.regionActiva ? 'btn-primary' : 'btn-outline-primary';
  }

  activarRegion(region: string) {
    this.regionActiva = region;
  }
}

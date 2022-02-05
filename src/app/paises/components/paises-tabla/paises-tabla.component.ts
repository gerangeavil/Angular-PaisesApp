import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-paises-tabla',
  templateUrl: './paises-tabla.component.html'
})
export class PaisesTablaComponent implements OnInit {
  @Input() paises: Country[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

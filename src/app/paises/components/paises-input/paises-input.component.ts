import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paises-input',
  templateUrl: './paises-input.component.html'
})
export class PaisesInputComponent implements OnInit {
  termino: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  buscar() {
    console.log('hola mundo');
    console.log(this.termino);
  }
}

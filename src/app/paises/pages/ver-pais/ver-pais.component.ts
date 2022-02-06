import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  pais: Country[] = [];
  isResult: boolean = false;

  constructor(
    private activatedRouter: ActivatedRoute,
    private paisService: PaisesService
  ) { }

  ngOnInit(): void {
    /*this.activatedRouter.params.pipe(
      switchMap(({ id }) => this.paisService.getPaisPorAlpha(id)),
      tap(console.log)).subscribe(pais => {
        this.pais = pais[0];
      });*/

    this.activatedRouter.params.subscribe(({ id }) => {
      this.paisService.getPaisPorAlpha(id).subscribe(pais => {
        this.pais = pais;
        this.isResult = true;
        console.log(pais);
      }, error => {
        console.error(error);
        this.isResult = false;
      });
    });
  }

}

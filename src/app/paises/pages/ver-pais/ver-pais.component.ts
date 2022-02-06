import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(
    private activatedRouter: ActivatedRoute,
    private paisService: PaisesService
  ) { }

  ngOnInit(): void {
    this.activatedRouter.params.pipe(
      switchMap(({ id }) => this.paisService.getPaisPorAlpha(id))
    ).subscribe(res => {
      console.log(res);
    });

    /* this.activatedRouter.params.subscribe(({ id }) => {
      console.log(id);
      this.paisService.getPaisPorAlpha(id).subscribe(pais => {
        console.log(pais);
      });
    }); */
  }

}

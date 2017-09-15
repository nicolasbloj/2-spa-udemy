import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes-detalle',
  templateUrl: './heroes-detalle.component.html'
})
export class HeroesDetalleComponent implements OnInit {

  @Input()
  heroes: Heroe[] = [];

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  // No funciona por q tengo un array acotado
  /*verHeroe(idx: number) {
    console.log('index -> ' + idx);

    this._router.navigate(['/heroe', idx]);

  }*/

  verHeroe(nombre: string) {
    console.log('nombre de heroe  -> ' + nombre);
    this._router.navigate(['/heroe', nombre]);
  }

}

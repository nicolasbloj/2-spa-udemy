import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: Heroe ; // interface no puede tener constructor {} ?  . aqui un problema

  constructor(private _activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {
    this._activatedRoute.params.subscribe((params) => {
      console.log('Params:id -> ' + params['nombre']);
      this.heroe = _heroesService.getHeroe(params['nombre']);
    });

  }

  ngOnInit() {
  }

}

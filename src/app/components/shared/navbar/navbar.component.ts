import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private _heroesService: HeroesService, private _router: Router) { }

  ngOnInit() {
  }

  buscarHeroes(termino: string): void {
    this._router.navigate(['/heroes-filtrado', termino] );
  }

}

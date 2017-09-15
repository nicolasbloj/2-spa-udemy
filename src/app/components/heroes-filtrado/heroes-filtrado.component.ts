import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes-filtrado',
  templateUrl: './heroes-filtrado.component.html'
})
export class HeroesFiltradoComponent implements OnInit {

  termino: string;

  heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log('ngOnInit');
    this._activatedRoute.params.subscribe((params) => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(this.termino);
    });
  }


}

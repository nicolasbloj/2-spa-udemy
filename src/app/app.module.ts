import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routes
import { APP_ROUTING } from './app.routes';

// services
import { HeroesService } from './services/heroes.service';

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesFiltradoComponent } from './components/heroes-filtrado/heroes-filtrado.component';
import { HeroesDetalleComponent } from './components/heroes-detalle/heroes-detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    HeroesFiltradoComponent,
    HeroesDetalleComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

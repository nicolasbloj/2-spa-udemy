import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroeComponent } from './components/heroe/heroe.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' } // Si no puede machear ninguna de las anteriores
];

// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true}); // soporte parametros, mas navegadores webs
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES); //   necesario <base href="/"> en index

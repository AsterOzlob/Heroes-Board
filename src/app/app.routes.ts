import { Routes } from '@angular/router';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

export const routes: Routes = [
    { path: 'heroes', component: HeroesListComponent },
    { path: 'heroes/:id', component: HeroDetailComponent },
    { path: '', redirectTo: '/heroes', pathMatch: 'full'}
];

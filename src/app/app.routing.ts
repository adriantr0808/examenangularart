
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
const appRoutes: Routes = [

    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "peliculasNacionalidad/:idNac", component: PeliculasComponent },
    { path: "peliculasGenero/:idGen", component: PeliculasComponent },




];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =
    RouterModule.forRoot(appRoutes);
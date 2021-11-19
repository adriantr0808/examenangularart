import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { ServicePeliculas } from './services/peliculas.service';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { DetallepeliculasComponent } from './components/detallepeliculas/detallepeliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    PeliculasComponent,
    DetallepeliculasComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders, ServicePeliculas],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Routes } from '@angular/router';
import { ServicePeliculas } from 'src/app/services/peliculas.service';
import { Pelicula } from 'src/app/models/pelicula';
import { Nacionalidad } from 'src/app/models/nacionalidad';
import { Genero } from 'src/app/models/genero';
import { Router } from '@angular/router';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  public pelis!: Array<Pelicula>;

  public detalles!: Pelicula;
  public nac!: Nacionalidad;
  public gen!: Genero;
  public nacr!: string;
  public genr!: string;
  constructor(private _activateRoute: ActivatedRoute, private _service: ServicePeliculas, private _router: Router) { }

  cargarPeliculasNac(id: string): void {
    this._service.getPeliculasNac(id).subscribe(res => {
      this.pelis = res;
    });
  }
  cargarPeliculasGen(id: string): void {
    this._service.getPeliculasGen(id).subscribe(res => {
      this.pelis = res;
    });
  }
  seleccionarDetalleParent(event: Pelicula): void {
    this.detalles = event;
    console.log(this.detalles);

  }

  cargarNacionalidadId(id: string): void {
    this._service.getNacionalidadId(id).subscribe(res => {
      this.nac = res;
      console.log(this.nac);
    });
  }

  cargarGeneroId(id: string): void {
    this._service.getGeneroId(id).subscribe(res => {
      this.gen = res;
      console.log(this.gen);
    });
  }

  eliminarPelicula(id: number): void {
    this._service.deletePelicula(id).subscribe(res => {
      console.log(res);
      console.log(this.nacr);
      if (this.nacr) {
        this.cargarPeliculasNac(this.nacr);
      } else {
        this.cargarPeliculasGen(this.genr);
      }
    })
  }


  ngOnInit(): void {
    this._activateRoute.params.subscribe((params: Params) => {


      console.log(params['idNac']);
      console.log(params['idGen']);

      if (params['idNac']) {
        this.cargarPeliculasNac(params['idNac']);
        this.cargarNacionalidadId(params['idNac']);
        this.nacr = params['idNac'];
      } else if (params['idGen']) {
        this.cargarPeliculasGen(params['idGen']);
        this.cargarGeneroId(params['idGen']);
        this.genr = params['idGen'];
      }
    });
  }


}

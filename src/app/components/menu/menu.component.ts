import { Component, OnInit } from '@angular/core';
import { ServicePeliculas } from 'src/app/services/peliculas.service';
import { Genero } from 'src/app/models/genero';
import { Nacionalidad } from 'src/app/models/nacionalidad';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public generos!: Array<Genero>;
  public nacs!: Array<Nacionalidad>;
  constructor(private _service: ServicePeliculas) { }

  ngOnInit(): void {

    this._service.getGeneros().subscribe(res => {
      this.generos = res
      console.log(this.generos);
    });

    this._service.getNacionalidades().subscribe(res => {
      this.nacs = res;
      console.log(this.nacs);
    });
  }

}

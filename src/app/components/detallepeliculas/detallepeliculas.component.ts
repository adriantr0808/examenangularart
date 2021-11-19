import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
@Component({
  selector: 'app-detallepeliculas',
  templateUrl: './detallepeliculas.component.html',
  styleUrls: ['./detallepeliculas.component.css']
})
export class DetallepeliculasComponent implements OnInit {
  @Input() pelicula!: Pelicula;
  @Output() seleccionarDetalle: EventEmitter<any> = new EventEmitter();

  seleccionarDetalleHijo(): void {
    this.seleccionarDetalle.emit(this.pelicula);
  }
  ngOnInit(): void {
  }

  constructor() { }


}

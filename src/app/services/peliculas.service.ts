import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "../Global";

@Injectable()
export class ServicePeliculas {
    constructor(private _http: HttpClient) {

    }

    getGeneros(): Observable<any> {
        var request = '/api/Generos';
        var url = Global.urlpeliculas + request;
        return this._http.get(url);
    }
    getNacionalidades(): Observable<any> {
        var request = '/api/Nacionalidades';
        var url = Global.urlpeliculas + request;
        return this._http.get(url);
    }


    getPeliculasNac(id: string): Observable<any> {
        var request = '/api/Peliculas/PeliculasNacionalidad/' + id;
        var url = Global.urlpeliculas + request;
        return this._http.get(url);
    }


    getPeliculasGen(id: string): Observable<any> {
        var request = '/api/Peliculas/PeliculasGenero/' + id;
        var url = Global.urlpeliculas + request;
        return this._http.get(url);
    }

    getNacionalidadId(id: string): Observable<any> {
        var request = '/api/Nacionalidades/' + id;
        var url = Global.urlpeliculas + request;
        return this._http.get(url);
    }
    getGeneroId(id: string): Observable<any> {
        var request = '/api/Generos/' + id;
        var url = Global.urlpeliculas + request;
        return this._http.get(url);
    }

    deletePelicula(id: number): Observable<any> {
        var request = '/api/Peliculas/' + id;
        var url = Global.urlpeliculas + request;
        return this._http.delete(url);
    }
}
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';
import { Articulo } from '../models/articulo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario:Usuario = new Usuario();
  constructor(private http:HttpClient) {
    this.usuario.usuarioID = 1
    this.usuario.nombre = 'Jhonny'
    this.usuario.apellido = 'Gomez'
  }

  leerNoticias() : Observable<Articulo[]>
   {
    return this.http.get<Articulo[]>('https://jsonplaceholder.typicode.com/posts')
  }
}

import { Injectable } from '@angular/core';
import { Articulo } from '../models/articulo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
articulo:Articulo = new Articulo();

  constructor(private http: HttpClient) { }

  leerNoticias() : Observable<Articulo[]>
  {
   return this.http.get<Articulo[]>('https://jsonplaceholder.typicode.com/posts')
 }
}

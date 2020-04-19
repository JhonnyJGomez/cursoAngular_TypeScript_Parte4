import { Injectable } from '@angular/core';
import { Articulo } from '../models/articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
articulo:Articulo = new Articulo();

  constructor() { }
}

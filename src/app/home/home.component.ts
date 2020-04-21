import { Component, OnInit } from '@angular/core';
import { Articulo } from '../models/articulo';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';
import { ArticulosService } from '../services/articulos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articulo:Array<Articulo> = new Array<Articulo>();
  constructor(public UsuarioInyectado:UsuarioService, public ArticuloInyectado:ArticulosService, public ruta:Router) { }

  ngOnInit(): void {
    this.ArticuloInyectado.leerNoticias().subscribe((articulosDesdeApi)=>{
      this.articulo = articulosDesdeApi      
    });
   
  }

  irAlDetalle(listaArticulos:Articulo){
    this.ArticuloInyectado.articulo = listaArticulos
    this.ruta.navigateByUrl('/articulo-detalle')
  }

  
}

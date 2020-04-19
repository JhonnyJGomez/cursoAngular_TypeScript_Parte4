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

    this.articulo.push(
    {
      nombre: "Curso NET Core",
      descripcion: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      fecha: new Date(),
      usuario: `${this.UsuarioInyectado.usuario.nombre} ${this.UsuarioInyectado.usuario.apellido}`
    },
    {
      nombre: "Curso Angular",
      descripcion: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      fecha: new Date('12/25/2020'),
      usuario: `${this.UsuarioInyectado.usuario.nombre} ${this.UsuarioInyectado.usuario.apellido}`
    },
    {
      nombre: "Curso Vue js",
      descripcion: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      fecha: new Date('10/21/2020'),
      usuario: `${this.UsuarioInyectado.usuario.nombre} ${this.UsuarioInyectado.usuario.apellido}`
    })
  }

  irAlDetalle(listaArticulos:Articulo){
    this.ArticuloInyectado.articulo = listaArticulos
    this.ruta.navigateByUrl('/articulo-detalle')
    
    
  }

}

import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../services/articulos.service';
import { User } from '../models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Articulo } from '../models/articulo';

@Component({
  selector: 'app-agregar-articulo',
  templateUrl: './agregar-articulo.component.html',
  styleUrls: ['./agregar-articulo.component.scss']
})
export class AgregarArticuloComponent implements OnInit {
  usuarios:Array<User> = new Array<User>();
  formularioArticulo: FormGroup;
  articulo:Articulo = new Articulo();

  constructor(private articuloInyectado : ArticulosService, private fbGenerador: FormBuilder) { }

  ngOnInit(): void {
    this.articuloInyectado.leerTodosUsuarios().subscribe((usuariosInyecdos)=>{
      this.usuarios = usuariosInyecdos
    });

     this.formularioArticulo = this.fbGenerador.group({
       title: ['',Validators.required],
       body: ['', Validators.required],
       userId: ['',Validators.required]
     })
    
  }


  agregar(){
    this.articulo = this.formularioArticulo.value as Articulo;
    this.articuloInyectado.guardarArticulo(this.articulo).subscribe((articuloRecibido)=>{
    this.formularioArticulo.reset()
    })
  }
}

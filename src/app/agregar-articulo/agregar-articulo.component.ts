import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../services/articulos.service';
import { User } from '../models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Articulo } from '../models/articulo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-articulo',
  templateUrl: './agregar-articulo.component.html',
  styleUrls: ['./agregar-articulo.component.scss']
})
export class AgregarArticuloComponent implements OnInit {
  usuarios:Array<User> = new Array<User>();
  formularioArticulo: FormGroup;
  articulo:Articulo = new Articulo();
  titulo:string ='';
  esNuevo:Boolean;

  constructor(private articuloInyectado : ArticulosService, private fbGenerador: FormBuilder,
     private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.esNuevo = JSON.parse(this.rutaActiva.snapshot.params.esNuevo);
    this.titulo = this.esNuevo ? 'Agregar':'Editar'
    this.articuloInyectado.leerTodosUsuarios().subscribe((usuariosInyectados)=>{
      this.usuarios = usuariosInyectados
    });

     this.formularioArticulo = this.fbGenerador.group({
       title: ['',Validators.required],
       body: ['', Validators.required],
       userId: ['',Validators.required]
     })
    
    if (!this.esNuevo){ 
      this.articulo = this.articuloInyectado.articulo;
      this.formularioArticulo.setValue({
        title: this.articulo.title,
        body: this.articulo.body,
        userId: this.articulo.userId
      })
    }
  }

  ngAfterViewChecked(){
    this.esNuevo = JSON.parse(this.rutaActiva.snapshot.params.esNuevo);
  }

  agregar(){
    this.articulo = this.formularioArticulo.value as Articulo;
    this.articuloInyectado.guardarArticulo(this.articulo).subscribe((articuloRecibido)=>{
    this.formularioArticulo.reset()
    console.log(articuloRecibido)
    console.log(`Se ha creado el articulo ${articuloRecibido.id} Correctamente`)
    })
  }

  editar(){
    this.articulo.id = this.formularioArticulo.value.id
    this.articulo.title = this.formularioArticulo.value.title
    this.articulo.body = this.formularioArticulo.value.body

    this.articuloInyectado.actualizarArticulo(this.articulo).subscribe((articuloActualizado)=>{
      console.log(articuloActualizado)
      console.log(`Se ha actualizado el articulo ${this.articulo.id} Correctamente`)
    })
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuarioService } from './services/usuario.service';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';
import { ArticulosService } from './services/articulos.service';
import { HttpClientModule } from '@angular/common/http';
import { AgregarArticuloComponent } from './agregar-articulo/agregar-articulo.component'
import { ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    HomeComponent,
    PerfilComponent,
    ArticuloDetalleComponent,
    AgregarArticuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    UsuarioService,
    ArticulosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

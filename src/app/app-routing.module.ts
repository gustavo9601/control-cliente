import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TableroComponent} from "src/app/componentes/tablero/tablero.component";
import {LoginComponent} from "src/app/componentes/login/login.component";
import {RegistroComponent} from "src/app/componentes/registro/registro.component";
import {ConfiguracionComponent} from "src/app/componentes/configuracion/configuracion.component";
import {EditarClienteComponent} from "src/app/componentes/editar-cliente/editar-cliente.component";
import {NoEncontradoComponent} from "src/app/componentes/no-encontrado/no-encontrado.component";
import {AgregarClienteComponent} from "src/app/componentes/agregar-cliente/agregar-cliente.component";


const routes: Routes = [
  {path: '', component: TableroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'configuracion', component: ConfiguracionComponent},
  {path: 'agregar-cliente', component: AgregarClienteComponent},
  {path: 'cliente/editar/:id', component: EditarClienteComponent},
  {path: '**', component: NoEncontradoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


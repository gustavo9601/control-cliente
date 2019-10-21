/*Angular*/
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";

/*Componentes*/
import {AppComponent} from './app.component';
import {CabeceroComponent} from './componentes/cabecero/cabecero.component';
import {TableroComponent} from './componentes/tablero/tablero.component';
import {ClientesComponent} from './componentes/clientes/clientes.component';
import {EditarClienteComponent} from './componentes/editar-cliente/editar-cliente.component';
import {LoginComponent} from './componentes/login/login.component';
import {RegistroComponent} from './componentes/registro/registro.component';
import {ConfiguracionComponent} from './componentes/configuracion/configuracion.component';
import {NoEncontradoComponent} from './componentes/no-encontrado/no-encontrado.component';
import {PiePaginaComponent} from './componentes/pie-pagina/pie-pagina.component';
import {AppRoutingModule} from "src/app/app-routing.module";


/*Archivo de enviroment*/
import {environment} from "src/environments/environment";

/*Firebase*/
import {AngularFireModule} from "@angular/fire";
import {AngularFirestoreModule, FirestoreSettingsToken} from "@angular/fire/firestore";
import {AngularFireAuthModule} from "@angular/fire/auth";

/*Flash Messages*/
import {FlashMessagesModule} from "angular2-flash-messages";
import { AgregarClienteComponent } from './componentes/agregar-cliente/agregar-cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    TableroComponent,
    ClientesComponent,
    EditarClienteComponent,
    LoginComponent,
    RegistroComponent,
    ConfiguracionComponent,
    NoEncontradoComponent,
    PiePaginaComponent,
    AgregarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firestore, 'control-clientes'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

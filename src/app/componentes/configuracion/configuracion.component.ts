import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ConfiguracionService} from "src/app/servicios/configuracion.service";

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {


  permitirRegistro:boolean;


  constructor(
    private router:Router,
    private _configuracionService:ConfiguracionService
  ) { }

  ngOnInit() {

    this._configuracionService.getConfiguracion().subscribe(
      (respuesta:any) => {
        //Actualizamos el valor de la BD si esta permitido crear registor

        console.log(respuesta);
        this.permitirRegistro = respuesta.permitirRegistro;

      }
    )
  }

  guardar(){
    let configuracion = {permitirRegistro: this.permitirRegistro};
    this._configuracionService.modificarConfiguracion(configuracion);

    this.router.navigate(['/']);
  }

}

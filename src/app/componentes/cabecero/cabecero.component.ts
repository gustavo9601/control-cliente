import { Component, OnInit } from '@angular/core';
import {LoginService} from "src/app/servicios/login.service";
import {Router} from "@angular/router";
import {ConfiguracionService} from "src/app/servicios/configuracion.service";

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {


  isLoggedIn:boolean;
  loggedInUser:string;

  permitirRegistro:boolean;

  constructor(private _loginService:LoginService,
              private router:Router,
              private _configuracionService:ConfiguracionService) { }

  ngOnInit() {

    this._loginService.getAuth().subscribe(
      (respuesta:any) =>{

        if(respuesta){
          this.isLoggedIn = true;
          this.loggedInUser = respuesta.email;
        }else{
          this.isLoggedIn = false;
        }

      }
    )



    this._configuracionService.getConfiguracion().subscribe(
      (respuesta) => {
        this.permitirRegistro = respuesta.permitirRegistro;

        console.log(this.permitirRegistro);
      }
    )

  }


  logout(){
    this._loginService.logout();
    this.isLoggedIn =false;
    this.router.navigate(['/login']);
  }

}

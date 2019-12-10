import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {ConfiguracionService} from "src/app/servicios/configuracion.service";
import {map} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class RegistrarseGuard implements CanActivate {

  constructor(private _configuracionService: ConfiguracionService,
              private router:Router){

  }
  canActivate(): Observable<boolean>{

   return this._configuracionService.getConfiguracion().pipe(
      map(
        (respuesta) => {
          if(respuesta.permitirRegistro){
            return true;
          }else{
            this.router.navigate(['/login']);
            return false;
          }
        }
      )
    )
  }
}

import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {LoginService} from "src/app/servicios/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;

  constructor(private router:Router,
              private _flasMessages:FlashMessagesService,
              private _loginService:LoginService) { }

  ngOnInit() {
    this._loginService.getAuth().subscribe(
      (respuesta) => {
        if(respuesta){
          this.router.navigate(['/']);
        }
      }
    )

  }


  login(formulario){
    console.log("formulario", formulario.value);

    this._loginService.login(this.email, this.password)
      .then(
          (respuesta) => {

            this.router.navigate(['/']);
        }
      ).catch(
      (error)=> {
        this._flasMessages.show(error.message, {
          cssClass: 'alert-danger',
          timeout: 4000
        });
      }
    )
  }
}

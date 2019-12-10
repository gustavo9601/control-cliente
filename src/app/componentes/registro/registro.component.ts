import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {LoginService} from "src/app/servicios/login.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  email: string;
  password: string;

  constructor(private router: Router,
              private _flasMessages: FlashMessagesService,
              private _loginService: LoginService) {
  }


  ngOnInit() {
    this._loginService.getAuth().subscribe(
      (respuesta) => {
        if (respuesta) {
          this.router.navigate(['/']);
        }
      }
    )

  }

  registro() {
    this._loginService.registrarse(this.email, this.password)
      .then(
        (respuesta) => {
          this.router.navigate(['/']);
        }
      )
      .catch(
        (error) => {
          this._flasMessages.show(error.message, {
            cssClass: 'alert-danger',
            timeout: 4000
          });
        }
      )
  }
}

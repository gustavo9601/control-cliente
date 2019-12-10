import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {map} from "rxjs/internal/operators";
import {reject} from "q";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private authService: AngularFireAuth) {
  }

  login(email: string, password: string) {

    return new Promise((resolve, reject) => {
      this.authService.auth.signInWithEmailAndPassword(email, password)
        .then(
          (respuesta) => {
            resolve(respuesta);
          }
        )
        .catch(
          (error) => {
            reject(error);
          }
        )
    })

  }


  //Retornara el usuario que se autoentico en la bd
  getAuth() {
    return this.authService.authState.pipe(
      map(
        auth => auth
      )
    )
  }

  logout() {
    return this.authService.auth.signOut();
  }

  registrarse(email: string, password: string) {

    return new Promise((resolve, reject) => {
      this.authService.auth.createUserAndRetrieveDataWithEmailAndPassword(email, password)
        .then(
          (respuesta) => {
            resolve(respuesta);
          }
        ).catch(
        (error) => {
          reject(error);
        }
      )
    });
  }

}

import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/firestore";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {

  configuracionDoc: AngularFirestoreDocument;
  configuracion: Observable<any>;

  id: string = "1";

  constructor(private db: AngularFirestore) {
  }

  getConfiguracion() {
    this.configuracionDoc = this.db.doc('configuracion/' + this.id);
    this.configuracion = this.configuracionDoc.valueChanges();

    return this.configuracion;
  }

  modificarConfiguracion(configuracion) {
    this.configuracionDoc = this.db.doc('configuracion/' + this.id);

    this.configuracionDoc.update(configuracion);
  }

}

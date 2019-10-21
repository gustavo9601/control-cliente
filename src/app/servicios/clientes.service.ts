import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/firestore";
import {Cliente} from "src/app/modelos/cliente.model";
import {Observable} from "rxjs/index";
import {map} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  /*Es una coleccion de firestore que retornara tipo Cliente*/
  clientesColeccion: AngularFirestoreCollection<Cliente>;
  clienteDoc: AngularFirestoreDocument<Cliente>;
  clientes: Observable<Cliente[]>;  //arreglo de tipo cliente
  cliente: Observable<Cliente>;

  constructor(private _db: AngularFirestore) {

    /*
    *
    * Almacenamos en this.clientesColeccion , lo que nos devuelva la conexion con la BD de Firebase
    *
    * this._db.collection('clientes', ref => ref.orderBy('nombre', 'asc'))  // ('coleccion creada en firebase', le decimos que lo ordene por cierto atributo)
    *
    * */
    this.clientesColeccion = this._db.collection('clientes', ref => ref.orderBy('nombre', 'asc'))

  }


  getClientes(): Observable<Cliente[]> {
    //Obtenemos los clientes

    this.clientes = this.clientesColeccion.snapshotChanges().pipe(
      map(
        (cambios) => {
          return cambios.map(
            (accion) => {
              const datos = accion.payload.doc.data() as Cliente;  //almacenamos temporalmente cada datos y lo retornara como Cliente
              datos.id = accion.payload.doc.id;
              return datos;
            }
          )
        }
      )
    )

    return this.clientes;
  }


  agregarCliente(cliente: Cliente) {
    let agregar = this.clientesColeccion.add(cliente);
    if (agregar) {
      return true;
    } else {
      return false;
    }

  }


  editarCliente(cliente: Cliente) {
    this.clienteDoc = this._db.doc('clientes/' + cliente.id);

    this.clienteDoc.update(cliente);

  }


  eliminarCliente(cliente: Cliente) {
    this.clienteDoc = this._db.doc('clientes/' + cliente.id);

    this.clienteDoc.delete();
  }

  getCliente(id: string) {
    this.clienteDoc = this._db.doc('clientes/' + id);

    this.cliente = this.clienteDoc.snapshotChanges().pipe(
      map(
        (respuestaBD) => {
          if (respuestaBD.payload.exists === false) {
            return null
          } else {
            const datos = respuestaBD.payload.data() as Cliente;
            datos.id = respuestaBD.payload.id;
            return datos;
          }
        }
      )
    )


    return this.cliente;
  };

}

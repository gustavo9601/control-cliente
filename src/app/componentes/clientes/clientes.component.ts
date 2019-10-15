import {Component, OnInit} from '@angular/core';
import {ClientesService} from "src/app/servicios/clientes.service";
import {Cliente} from "src/app/modelos/cliente.model";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  public clientes: Cliente[];

  constructor(private _clientesService: ClientesService) {
  }

  ngOnInit() {

    this.obtenerClientes();

  }


  obtenerClientes() {
    //Usamos el servicio que nos retorna un observable
    //y almacenamos el valor que retorne en una variable local de esta clase
    this._clientesService.getClientes().subscribe(
      (respuesta) => {
        this.clientes = respuesta

        console.log("Clientes", this.clientes);
      }
    )

  }

  getSaldoTotal() {

    let saldoTotal: number = 0;
    //si hay clientes los iteramos
    if (this.clientes) {
      this.clientes.forEach(
        (cliente) => {
          saldoTotal += parseInt(cliente.saldo)
        }
      )
    }

    return saldoTotal;

  }


}

import {Component, OnInit} from '@angular/core';
import {Cliente} from "src/app/modelos/cliente.model";
import {FlashMessagesService} from "angular2-flash-messages";
import {ClientesService} from "src/app/servicios/clientes.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {

  cliente: Cliente = {
    'nombre': '',
    'apellido': '',
    'email': '',
    'saldo': 0
  };

  constructor(private _flashMessages: FlashMessagesService,
              private _clienteService:ClientesService,
              private route:Router) {
  }

  ngOnInit() {
  }


  //Le escificamos el tipado que recibira
  agregarCliente({value, valid}: { value: Cliente, valid: boolean }) {

    console.log(value, valid);
    if (!valid) {
      this._flashMessages.show('Por favor diligencia el formulario correctamente', {
        cssClass: 'alert-danger',
        timeOut: 4000
      });
    } else {
      //Agregar nuevo cliente

      let agregar = this._clienteService.agregarCliente(value);

      if(agregar){
        this.route.navigate(['/']);
      }else{
        this._flashMessages.show('No se pudo agregar el usuario', {
          cssClass: 'alert-danger',
          timeOut: 4000
        });
      }

    }
  }




}

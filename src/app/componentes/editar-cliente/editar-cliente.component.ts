import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from "angular2-flash-messages";
import {ClientesService} from "src/app/servicios/clientes.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Cliente} from "src/app/modelos/cliente.model";

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {



  cliente: Cliente = {
    'nombre': '',
    'apellido': '',
    'email': '',
    'saldo': 0
  };

  id: string = '';

  constructor(private _flashMessages: FlashMessagesService,
              private _clienteService:ClientesService,
              private route:Router,
              private activedRoute: ActivatedRoute) { }

  ngOnInit() {

    //Capturan  el id por get

    this.id = this.activedRoute.snapshot.params['id'];


    this._clienteService.getCliente(this.id).subscribe(
      (respuesta) => {
        this.cliente = respuesta;
      }
    )

  }

  editarCliente({value, valid}: { value: Cliente, valid: boolean }){
    console.log(value, valid);


    if(!valid){
      this._flashMessages.show('Por favor diligencia el formulario correctamente', {
        cssClass: 'alert-warning',
        timeOut: 4000
      });
    }else{

      value.id = this.id;

      this._clienteService.editarCliente(value);

      this.route.navigate(['/']);


    }
  }


  eliminar(){
    if(confirm('Seguro que desea eliminar el cliente?')){

      this.cliente.id = this.id;
      this._clienteService.eliminarCliente(this.cliente);

      this.route.navigate(['/']);
    }
  }

}

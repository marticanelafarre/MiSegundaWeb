import { Component, OnInit } from '@angular/core';
import { EventGallery } from '../event-gallay';
import {FormGroup} from '@angular/forms';
import { ok } from 'assert';

@Component({
  selector: 'app-events',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  /* Creacion de variables */
  events: EventGallery[] = [];
  accion: String;

  public container: string;
  miform: FormGroup;

  comprovacion: string = "";
  minimo2letras: string = "";
  errorcorreo: string = "";
  checkerror: string = "";
  // quitarerror: string = "";
  correo = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  constructor() { }

  ngOnInit() {
  }
  /* Para accer la accion de los botos. */
  seleccionar(event) {
    console.log(event.target.value);
    if(event.target.value == "crear") {
      this.container = "crear"
    } else if(event.target.value == "modificar") {
      this.container = "modificar"
    } else if (event.target.value == "eliminar") {
      this.container = "eliminar"
    } else {
      this.accion = "";
    }
  }



  /* Prinatar errores y registrar en el array */
  registrar(nom, desc, ubicacion, mail, check) {

    if(nom.length==0){
      this.comprovacion="No puede dejar el capo vacio";
    }else if(desc.length<3){
      this.minimo2letras="La descripcion tiene que ser como mínimo una palabra de dos o mas letras.";
    }else if(!mail.match(this.correo)){
      this.errorcorreo= "El correo necessita como minimo el caracter: @";
    }else if(!check.value){
      this.checkerror= "ok";
      if((nom && desc && ubicacion && mail && check)){
        this.events.push(new EventGallery(nom, desc, ubicacion, mail));//agregamos
        this.miform.reset;
      }
    }



  }

  /* MODIFICAR */
  modificar(nom, desc, ubicacion, correo) {
    /* Lo que hacemos es elminar el que quiere modificar y poner uno nuevo xD */
    for(var i = 0; i<this.events.length; i++){
      if(this.events[i].nombre == nom){
        this.events.splice( i, 1 );
        this.events.push(new EventGallery(nom, desc, ubicacion, correo));
    }
    }
}

/* ELIMINAR */
  eliminar(nom){
      for(var i = 0; i<this.events.length; i++){
      if(this.events[i].nombre == nom){
        this.events.splice( i, 1 ); //eliminamos
      }
    }
  }
}

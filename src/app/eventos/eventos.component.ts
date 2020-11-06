import { Component, OnInit } from '@angular/core';
import { EventGallery } from '../event-gallay';

@Component({
  selector: 'app-events',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  events: EventGallery[] = [];
  accion: String;

  public container: string;

  public evento: string;
  public descripcion: string;
  public dia: string;
  public mes: string;
  public ubicacion: string;
  public contacto: string;



  constructor() { }

  ngOnInit() {
  }

  elegirAccion(event) {
    console.log(event.target.value);
    if(event.target.value == "add") {
      this.container = "add"
    } else if(event.target.value == "edit") {
      this.container = "edit"
    } else if (event.target.value == "delete") {
      this.container = "delete"
    } else {
      this.accion = "";
    }
  }

  enviarDatosAdd(event, descripcion, di, me, ubicacion, mail, check) {
    if((event && ubicacion && mail && descripcion)){
      this.events.push(new EventGallery(event, descripcion, di, me, ubicacion, mail ));
    }

  }

}

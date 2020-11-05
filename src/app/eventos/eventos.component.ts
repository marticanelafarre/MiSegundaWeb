import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  accion: String

  constructor() { }

  ngOnInit(): void {

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


}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Miembro } from '../miembro';

@Component({
  selector: 'app-lista-miembros',
  templateUrl: './lista-miembros.component.html',
  styleUrls: ['./lista-miembros.component.css']
})
export class ListaMiembrosComponent implements OnInit {

  miembros = [new Miembro(), new Miembro(), new Miembro(), new Miembro(), new Miembro()];
  @Output() informarEvent = new EventEmitter<Miembro>();

  constructor() { }

  ngOnInit() {
    this.miembros[0].nombre = 'Pepito';
    this.miembros[0].apellidos = 'Perez Castillo';
    this.miembros[0].edad = 43;
    this.miembros[0].desc = 'Amable y divertido.';

    this.miembros[1].nombre = 'Mariano';
    this.miembros[1].apellidos = 'Rajoy Brey';
    this.miembros[1].edad = 65;
    this.miembros[1].desc = 'Majo pero ...';

    this.miembros[2].nombre = 'Santi';
    this.miembros[2].apellidos = 'Lopez Fedez';
    this.miembros[2].edad = 20;
    this.miembros[2].desc = 'Juega muy bien a futbol.';

    this.miembros[3].nombre = 'Ferran';
    this.miembros[3].apellidos = 'Perez Juan';
    this.miembros[3].edad = 30;
    this.miembros[3].desc = 'Cicho estudioso.s';

    this.miembros[4].nombre = 'Laura';
    this.miembros[4].apellidos = 'Tamarit Rodriguez';
    this.miembros[4].edad = 19;
    this.miembros[4].desc = 'Simpatica y divertida.';
  }

  informarMiembro(event) {
    this.informarEvent.emit(event);
  }

}

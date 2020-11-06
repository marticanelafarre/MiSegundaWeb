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
    this.miembros[0].img = 'https://cdn.cienradios.com/wp-content/uploads/sites/3/2020/03/abuelo-ilustrativa-e1585686614541.jpg';


    this.miembros[1].nombre = 'Mariano';
    this.miembros[1].apellidos = 'Rajoy Brey';
    this.miembros[1].edad = 65;
    this.miembros[1].desc = 'Buenas gracias y muchas tardes';
    this.miembros[1].img = 'https://imagenes.20minutos.es/files/image_656_370/files/fp/uploads/imagenes/2019/10/30/libro-de-mariano-rajoy.r_d.1011-1822-3280.jpeg';

    this.miembros[2].nombre = 'Santi';
    this.miembros[2].apellidos = 'Lopez Fedez';
    this.miembros[2].edad = 20;
    this.miembros[2].desc = 'Juega muy bien a futbol.';
    this.miembros[2].img = 'https://i1.wp.com/www.sopitas.com/wp-content/uploads/2019/06/keanu-reeves-por-que-deberia-ser-persona-ano-2019.jpg';

    this.miembros[3].nombre = 'Ferran';
    this.miembros[3].apellidos = 'Perez Juan';
    this.miembros[3].edad = 30;
    this.miembros[3].desc = 'Chico estudioso.';
    this.miembros[3].img = 'https://ep01.epimg.net/verne/imagenes/2020/10/13/articulo/1602583154_225530_1602586704_miniatura_normal.jpg';

    this.miembros[4].nombre = 'Laura';
    this.miembros[4].apellidos = 'Tamarit Rodriguez';
    this.miembros[4].edad = 19;
    this.miembros[4].desc = 'Simpatica y divertida.';
    this.miembros[4].img = 'https://ca-times.brightspotcdn.com/dims4/default/f33b225/2147483647/strip/true/crop/2048x1152+0+0/resize/1486x836!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fcd%2F4c%2Fc4fbf3be4591c121ef6c012a76fd%2Fla-et-mg-selena-gomez-lupus-chemotherapy-20151-001';
  }

  informarMiembro(event) {
    this.informarEvent.emit(event);
  }

}

import { Component } from '@angular/core';
import { Miembro } from '../miembro';

@Component({
  selector: 'app-quienessomos',
  templateUrl: './quienessomos.component.html',
  styleUrls: ['./quienessomos.component.css']
})
export class QuienessomosComponent {


  constructor() { }

  miembroSeleccionado: Miembro;

  cambiarMiembroSeleccionado(miembro) {
    this.miembroSeleccionado = miembro;
  }

}

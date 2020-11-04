import { Component, OnInit, Input } from '@angular/core';
import { Miembro } from '../miembro';

@Component({
  selector: 'app-detall-membre',
  templateUrl: './detall-membre.component.html',
  styleUrls: ['./detall-membre.component.css']
})
export class DetallMembreComponent implements OnInit {

  @Input() miembro: Miembro;

  constructor() { }

  ngOnInit() {
    this.miembro = new Miembro();
    this.miembro.nombre = '';
    this.miembro.apellidos = '';
    this.miembro.edad = 0;
    this.miembro.desc = '';
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Miembro } from '../miembro';

@Component({
  selector: 'app-element-membre',
  templateUrl: './element-membre.component.html',
  styleUrls: ['./element-membre.component.css']
})
export class ElementMembreComponent implements OnInit {

  @Input() miembro: Miembro;
  @Output() selectEvent = new EventEmitter<Miembro>();

  constructor() { }

  ngOnInit() {
  }

  miembroSelected() {
    this.selectEvent.emit(this.miembro);
  }

}

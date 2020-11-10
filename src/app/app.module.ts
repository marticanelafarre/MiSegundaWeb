import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciComponent } from './inici/inici.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { QuienessomosComponent } from './quienessomos/quienessomos.component';
import { DetallMembreComponent } from './detall-membre/detall-membre.component';
import { ElementMembreComponent } from './element-membre/element-membre.component';
import { ListaMiembrosComponent } from './lista-miembros/lista-miembros.component';
import { EventosComponent } from './eventos/eventos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IniciComponent,
    HeaderComponent,
    FooterComponent,
    QuienessomosComponent,
    DetallMembreComponent,
    ElementMembreComponent,
    ListaMiembrosComponent,
    EventosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

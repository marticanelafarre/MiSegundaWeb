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
import { CrearEventoComponent } from './crear-evento/crear-evento.component';
import { EliminarEventosComponent } from './eliminar-eventos/eliminar-eventos.component';
import { ModificarEventosComponent } from './modificar-eventos/modificar-eventos.component';

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
    CrearEventoComponent,
    EliminarEventosComponent,
    ModificarEventosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

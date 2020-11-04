import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { IniciComponent } from './inici/inici.component';
import { QuienessomosComponent } from './quienessomos/quienessomos.component';
import { EventosComponent } from './eventos/eventos.component';
import { CrearEventoComponent } from './crear-evento/crear-evento.component';
import { EliminarEventosComponent } from './eliminar-eventos/eliminar-eventos.component';
import { ModificarEventosComponent } from './modificar-eventos/modificar-eventos.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'inici'},
  {path: 'header', component: HeaderComponent},
  {path: 'inicio', component: IniciComponent},
  {path: 'quienessomos', component: QuienessomosComponent},
  {path: 'eventos', component: EventosComponent},
  {path: 'crear-evento', component: CrearEventoComponent},
  {path: 'eliminar-evento', component: EliminarEventosComponent},
  {path: 'modificar-evento', component: ModificarEventosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

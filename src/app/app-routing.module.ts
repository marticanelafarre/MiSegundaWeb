import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { IniciComponent } from './inici/inici.component';
import { QuienessomosComponent } from './quienessomos/quienessomos.component';
import { EventosComponent } from './eventos/eventos.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'inicio'},
  {path: 'header', component: HeaderComponent},
  {path: 'inicio', component: IniciComponent},
  {path: 'quienessomos', component: QuienessomosComponent},
  {path: 'eventos', component: EventosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

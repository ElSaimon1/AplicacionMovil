import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaJuntaPage } from './mapa-junta.page';

const routes: Routes = [
  {
    path: '',
    component: MapaJuntaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaJuntaPageRoutingModule {}

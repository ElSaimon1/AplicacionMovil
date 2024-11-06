import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaJuntaPageRoutingModule } from './mapa-junta-routing.module';

import { MapaJuntaPage } from './mapa-junta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaJuntaPageRoutingModule
  ],
  declarations: [MapaJuntaPage]
})
export class MapaJuntaPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarPuntoEncuentroPageRoutingModule } from './agregar-punto-encuentro-routing.module';

import { AgregarPuntoEncuentroPage } from './agregar-punto-encuentro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarPuntoEncuentroPageRoutingModule
  ],
  declarations: [AgregarPuntoEncuentroPage]
})
export class AgregarPuntoEncuentroPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarPerroPageRoutingModule } from './agregar-perro-routing.module';

import { AgregarPerroPage } from './agregar-perro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AgregarPerroPageRoutingModule
  ],
  declarations: [AgregarPerroPage]
})
export class AgregarPerroPageModule {}

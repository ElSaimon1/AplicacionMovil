import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPerroPageRoutingModule } from './info-perro-routing.module';

import { InfoPerroPage } from './info-perro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoPerroPageRoutingModule
  ],
  declarations: [InfoPerroPage]
})
export class InfoPerroPageModule {}

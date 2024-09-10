import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPrinipalPageRoutingModule } from './menu-prinipal-routing.module';

import { MenuPrinipalPage } from './menu-prinipal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPrinipalPageRoutingModule
  ],
  declarations: [MenuPrinipalPage]
})
export class MenuPrinipalPageModule {}

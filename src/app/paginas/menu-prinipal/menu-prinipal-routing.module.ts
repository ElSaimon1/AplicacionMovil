import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPrinipalPage } from './menu-prinipal.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPrinipalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPrinipalPageRoutingModule {}

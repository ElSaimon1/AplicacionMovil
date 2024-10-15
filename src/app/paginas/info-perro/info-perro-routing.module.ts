import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoPerroPage } from './info-perro.page';

const routes: Routes = [
  {
    path: '',
    component: InfoPerroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPerroPageRoutingModule {}

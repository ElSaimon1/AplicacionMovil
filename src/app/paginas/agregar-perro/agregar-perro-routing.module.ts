import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarPerroPage } from './agregar-perro.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarPerroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarPerroPageRoutingModule {}

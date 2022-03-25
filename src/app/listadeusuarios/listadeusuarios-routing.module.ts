import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadeusuariosPage } from './listadeusuarios.page';

const routes: Routes = [
  {
    path: '',
    component: ListadeusuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadeusuariosPageRoutingModule {}

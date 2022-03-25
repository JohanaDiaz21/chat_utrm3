import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadeusuariosPageRoutingModule } from './listadeusuarios-routing.module';

import { ListadeusuariosPage } from './listadeusuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadeusuariosPageRoutingModule
  ],
  declarations: [ListadeusuariosPage]
})
export class ListadeusuariosPageModule {}

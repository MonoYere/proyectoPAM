import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearTrabajadoresPageRoutingModule } from './crear-trabajadores-routing.module';

import { CrearTrabajadoresPage } from './crear-trabajadores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearTrabajadoresPageRoutingModule
  ],
  declarations: [CrearTrabajadoresPage]
})
export class CrearTrabajadoresPageModule {}

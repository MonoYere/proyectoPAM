import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearTrabajadoresPage } from './crear-trabajadores.page';

const routes: Routes = [
  {
    path: '',
    component: CrearTrabajadoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearTrabajadoresPageRoutingModule {}

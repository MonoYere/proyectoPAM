import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'crear-trabajadores',
    loadChildren: () => import('./crear-trabajadores/crear-trabajadores.module').then( m => m.CrearTrabajadoresPageModule)
  },
  {
    path: 'listar-trabajadores',
    loadChildren: () => import('./listar-trabajadores/listar-trabajadores.module').then( m => m.ListarTrabajadoresPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

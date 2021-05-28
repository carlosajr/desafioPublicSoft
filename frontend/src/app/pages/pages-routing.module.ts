import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      // {
      //   path: '',
      //   component: DashboardComponent,
      // },
      {
        path: 'prestadores',
        loadChildren: () => import('./prestadores/prestadores.module').then(m => m.PrestadoresModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

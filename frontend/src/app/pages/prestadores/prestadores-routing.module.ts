import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrestadoresComponent } from './prestadores.component';
import { PrestadoresListComponent } from './prestadores-list/prestadores-list.component';
import { PrestadoresCreateComponent } from './prestadores-create/prestadores-create.component';
import { PrestadoresUpdateComponent } from './prestadores-update/prestadores-update.component';
import { PrestadoresDeleteComponent } from './prestadores-delete/prestadores-delete.component';

const routes: Routes = [
  {
    path: '',
    component: PrestadoresComponent,
    children: [
      {
        path: '',
        component: PrestadoresListComponent,
      },
      {
        path: 'cadastrar',
        component: PrestadoresCreateComponent,
      },
      {
        path: 'atualizar/:prestador_id',
        component: PrestadoresUpdateComponent,
      },
      {
        path: 'deletar/:prestador_id',
        component: PrestadoresDeleteComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestadoresRoutingModule { }

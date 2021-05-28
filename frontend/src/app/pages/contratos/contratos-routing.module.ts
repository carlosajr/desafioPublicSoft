import { ContratosUpdateComponent } from './contratos-update/contratos-update.component';
import { ContratosDeleteComponent } from './contratos-delete/contratos-delete.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContratosComponent } from './contratos.component'
import { ContratosListComponent } from './contratos-list/contratos-list.component'
import { ContratosCreateComponent } from './contratos-create/contratos-create.component';

const routes: Routes = [
  {
    path: '',
    component: ContratosComponent,
    children: [
      {
        path: '',
        component: ContratosListComponent,
      },
      {
        path: 'cadastrar',
        component: ContratosCreateComponent,
      },
      {
        path: 'atualizar/:contrato_id',
        component: ContratosUpdateComponent,
      },
      {
        path: 'deletar/:contrato_id',
        component: ContratosDeleteComponent,
      }
    ]
  }
];;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratosRoutingModule { }

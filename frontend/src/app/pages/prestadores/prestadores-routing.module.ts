import { PrestadoresUpdateComponent } from './prestadores-update/prestadores-update.component';
import { PrestadoresCreateComponent } from './prestadores-create/prestadores-create.component';
import { PrestadoresListComponent } from './prestadores-list/prestadores-list.component';
import { PrestadoresComponent } from './prestadores.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestadoresRoutingModule { }

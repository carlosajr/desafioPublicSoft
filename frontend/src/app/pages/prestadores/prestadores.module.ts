
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestadoresRoutingModule } from './prestadores-routing.module';
import { PrestadoresComponent } from './prestadores.component';
import { PrestadoresListComponent } from './prestadores-list/prestadores-list.component';
import { PrestadoresCreateComponent } from './prestadores-create/prestadores-create.component';
import { IconsProviderModule } from '../icons-provider.module';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { PrestadoresUpdateComponent } from './prestadores-update/prestadores-update.component';

@NgModule({
  declarations: [PrestadoresComponent, PrestadoresListComponent, PrestadoresCreateComponent, PrestadoresUpdateComponent],
  imports: [
    CommonModule,
    PrestadoresRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzGridModule,
    NzSelectModule,
    IconsProviderModule,
    NzMessageModule
  ]
})
export class PrestadoresModule { }

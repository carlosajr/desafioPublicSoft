
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IconsProviderModule } from '../icons-provider.module';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';

import { ContratosRoutingModule } from './contratos-routing.module';
import { ContratosComponent } from './contratos.component';
import { ContratosListComponent } from './contratos-list/contratos-list.component';
import { ContratosCreateComponent } from './contratos-create/contratos-create.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { ContratosDeleteComponent } from './contratos-delete/contratos-delete.component';
import { ContratosUpdateComponent } from './contratos-update/contratos-update.component';

@NgModule({
  declarations: [ContratosComponent, ContratosListComponent, ContratosCreateComponent, ContratosDeleteComponent, ContratosUpdateComponent],
  imports: [
    CommonModule,
    ContratosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzGridModule,
    NzSelectModule,
    IconsProviderModule,
    NzMessageModule,
    NzModalModule,
    NzTableModule,
    NzDividerModule,
    NzDatePickerModule
  ]
})
export class ContratosModule { }

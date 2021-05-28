import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzMessageModule } from 'ng-zorro-antd/message';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [HomeComponent, LoginComponent, CadastroComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzGridModule,
    NzFormModule,
    NzLayoutModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzCardModule,
    NzMessageModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }

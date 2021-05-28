import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from './icons-provider.module';

import { NzButtonModule } from 'ng-zorro-antd/button';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    IconsProviderModule,
  ]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PhongVeComponent} from './phong-ve.component';
import {PhongVeRoutingModule} from './phong-ve-routing.module';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { GheComponent } from './ghe/ghe.component';

@NgModule({
  declarations: [
    PhongVeComponent,
    DanhSachGheComponent,
    GheComponent,
  ],
  imports: [
    CommonModule,
    PhongVeRoutingModule,
  ],
  exports:[
    PhongVeComponent,
    DanhSachGheComponent,
    GheComponent,
  ]
})
export class PhongVeModule { }

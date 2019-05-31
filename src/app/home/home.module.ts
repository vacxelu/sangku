import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {ChiTietComponent} from './trang-chu/chi-tiet/chi-tiet.component';
import {HeaderComponent} from './trang-chu/header/header.component';
import {TinTucConComponent} from './trang-chu/tin-tuc-con/tin-tuc-con.component';
import { SafePipe } from '../_core/pipe/safe.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    ChiTietComponent,
    HeaderComponent,
    TinTucConComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  exports:[
    HomeComponent,
    ChiTietComponent,
    HeaderComponent,
    SafePipe
  ],
})
export class HomeModule { }

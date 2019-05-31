import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TrangChuComponent } from './trang-chu.component';
// import {CarouselComponent} from './../trang-chu/carousel/carousel.component';
// import {ChiTietComponent} from './chi-tiet/chi-tiet.component';

const routes: Routes = [
    {
      path: '', component: TrangChuComponent,
      //  children: [
      //   {
      //     path: 'chi-tiet/:id', component: ChiTietComponent
      //   },
      // ]
    }
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class TrangchuRoutingModule { }

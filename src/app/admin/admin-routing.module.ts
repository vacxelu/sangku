import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ThemnguoidungComponent } from './themnguoidung/themnguoidung.component';
import { ThemPhimComponent } from './them-phim/them-phim.component';
import { CapNhatNguoiDungComponent } from './cap-nhat-nguoi-dung/cap-nhat-nguoi-dung.component';
import { CapNhatPhimComponent } from './cap-nhat-phim/cap-nhat-phim.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      {
        path: '', component:ThemPhimComponent
      },
      {
        path:'cap-nhat-phim/:id',component:CapNhatPhimComponent
      },
      {
        path: 'them-nguoi-dung', component:ThemnguoidungComponent
      },
      {
        path:'cap-nhat-nguoi-dung/:id',component:CapNhatNguoiDungComponent
      },

    ]

  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

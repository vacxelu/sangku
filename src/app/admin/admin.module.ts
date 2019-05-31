import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ThemnguoidungComponent } from './themnguoidung/themnguoidung.component';
import { FormsModule } from '@angular/forms';
import { ThemPhimComponent } from './them-phim/them-phim.component';
import { CapNhatNguoiDungComponent } from './cap-nhat-nguoi-dung/cap-nhat-nguoi-dung.component';
import { CapNhatPhimComponent } from './cap-nhat-phim/cap-nhat-phim.component';
@NgModule({
  declarations: [AdminComponent, ThemnguoidungComponent, ThemPhimComponent, CapNhatNguoiDungComponent, CapNhatPhimComponent],
  exports: [AdminComponent,ThemnguoidungComponent],

  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }

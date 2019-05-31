import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { FormsModule } from '@angular/forms'
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
@NgModule({
  declarations: [
    FormComponent,
    DangKyComponent,
    DangNhapComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormRoutingModule
  ],
  exports: [
    FormComponent,
    DangKyComponent,
    DangNhapComponent
  ],
})
export class FormModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TrangchuRoutingModule} from './trangchu-routing.module';
import { CarouselComponent } from './carousel/carousel.component';
import {TrangChuComponent} from './trang-chu.component';
// import { HeaderComponent } from './header/header.component';
import { DienAnhComponent } from './dien-anh/dien-anh.component';
import { FormLienHeComponent } from './form-lien-he/form-lien-he.component';
import { ItemPhimComponent } from './item-phim/item-phim.component';
import { KhuyenMaiComponent } from './khuyen-mai/khuyen-mai.component';
import { LienHeComponent } from './lien-he/lien-he.component';
import { LoaiPhimComponent } from './loai-phim/loai-phim.component';
import { PhimDangChieuComponent } from './phim-dang-chieu/phim-dang-chieu.component';
import { PhimSapChieuComponent } from './phim-sap-chieu/phim-sap-chieu.component';
import { ReviewComponent } from './review/review.component';
import { ThongTinLienHeComponent } from './thong-tin-lien-he/thong-tin-lien-he.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { ItemTinTucComponent } from './item-tin-tuc/item-tin-tuc.component';
// import { PhongVeComponent } from './phong-ve/phong-ve.component';
// import { ChiTietComponent } from './chi-tiet/chi-tiet.component';
import { OwlModule } from 'ngx-owl-carousel';
import { ModalComponent } from './modal/modal.component';
import { Safe1Pipe } from 'src/app/_core/pipe/safe1.pipe';
import { FooterComponent } from './footer/footer.component';
// import { SafePipe } from 'src/app/_core/pipe/safe.pipe';
// import { TinTucConComponent } from './tin-tuc-con/tin-tuc-con.component';

@NgModule({
  declarations: [
    CarouselComponent,
    TrangChuComponent,
    // HeaderComponent,
    DienAnhComponent,
    FormLienHeComponent,
    ItemPhimComponent,
    KhuyenMaiComponent,
    LienHeComponent,
    LoaiPhimComponent,
    PhimDangChieuComponent,
    PhimSapChieuComponent,
    ReviewComponent,
    ThongTinLienHeComponent,
    TinTucComponent,
    ItemTinTucComponent,
    ModalComponent,
    // TinTucConComponent,
    // PhongVeComponent,
    // ChiTietComponent
    // SafePipe
    Safe1Pipe,
    FooterComponent
  ],
  imports: [
    CommonModule,
    TrangchuRoutingModule,
    OwlModule,
  ],
  exports:[
    CarouselComponent,
    TrangChuComponent,
    Safe1Pipe
  ]
})
export class TrangChuModule { }

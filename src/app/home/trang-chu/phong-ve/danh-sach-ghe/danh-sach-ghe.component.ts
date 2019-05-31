import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { QuanLyPhimService } from '../../../../_core/service/quan-ly-phim.service';
import { Router,ActivatedRoute } from '@angular/router';
import { GheComponent } from '../ghe/ghe.component';
import  Swal from 'sweetalert2'

@Component({
  selector: 'app-danh-sach-ghe',
  templateUrl: './danh-sach-ghe.component.html',
  styleUrls: ['./danh-sach-ghe.component.scss']
})
export class DanhSachGheComponent implements OnInit {
  @ViewChildren(GheComponent) tagListItemPhim: QueryList<GheComponent>;
  GheDuocDat = [];
  trangthaihuy: boolean = true;
  constructor(
    private quanLyPhimService: QuanLyPhimService,
    private activatedRoute: ActivatedRoute,
    private router: Router,

  ) { }
  id: any;
  danhSachGhe = [];
  ngOnInit() {
    this.getParams();
    this.getDanhSachGhe();
  }
  getParams() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);
  }

  getDanhSachGhe() {
    this.quanLyPhimService.getDanhSachGhe(this.id).subscribe((result: any) => {
      this.danhSachGhe = result.DanhSachGhe;
      console.log(result);
    })
  }
  datghe(objGhe) {
    if (this.GheDuocDat.indexOf(objGhe) < 0) {
      this.GheDuocDat.push(objGhe);
    }
    else {
      const index = this.GheDuocDat.findIndex(ghe => ghe.MaGhe === objGhe.MaGhe);
      this.GheDuocDat.splice(index, 1);
    }
  }
  tinhtong() {
    let total = 0;
    this.GheDuocDat.map(gia => {
      total += gia.GiaVe;
    })
    return total;
  }
  Huy(soghe) {
    const index = this.GheDuocDat.findIndex(item => item.MaGhe === soghe);
    this.GheDuocDat.splice(index, 1);
    let ghe = this.tagListItemPhim.find(item => item.ghe.MaGhe === soghe);
    ghe.gheduocChon = false;
    ghe.ghe.TrangThai = false;
    // ghe.DaDat
    // this.trangthaihuy = true;
  }
  huyVe() {
    this.tagListItemPhim.map(item => {
      item.gheduocChon = false;
      item.ghe.TrangThai = false;
    })
    this.GheDuocDat.splice(0);
    // this.trangthaihuy = true;

  }
  datVe() {
    if (localStorage.getItem("user")) {
      this.tagListItemPhim.map(item => {
        if (item.gheduocChon === true) {
          item.ghe.TrangThai = true;
        }
      Swal.fire('Bạn đặt vé thành công')

      })
    }else{
      Swal.fire('Bạn phải đăng nhập mới được đặt vé')
      this.router.navigate(['/home/form/login']);
    }
  }
}

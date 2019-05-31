import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/_core/service/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-cap-nhat-phim',
  templateUrl: './cap-nhat-phim.component.html',
  styleUrls: ['./cap-nhat-phim.component.scss']
})
export class CapNhatPhimComponent implements OnInit {
  @ViewChild("FormCapNhat") FormCapNhat;

  constructor(
    private data: DataService,
    private activated: ActivatedRoute,
    private router: Router
  ) { }
  ChiTietPhim;

  ngOnInit() {
    let id = this.activated.snapshot.paramMap.get("id")
    let url = `QuanLyPhim/LayChiTietPhim?MaPhim=${id}`
    this.data.get(url).subscribe(result => {
      console.log(result)
      this.ChiTietPhim = result
      console.log(this.ChiTietPhim.TenPhim)
      this.FormCapNhat.setValue({
        MaPhim: this.ChiTietPhim.MaPhim,
        Trailer:this.ChiTietPhim.Trailer,
        TenPhim: this.ChiTietPhim.TenPhim,
        HinhAnh: this.ChiTietPhim.HinhAnh,
        MoTa: this.ChiTietPhim.MoTa,
        MaNhom: this.ChiTietPhim.MaNhom,
        NgayKhoiChieu: this.ChiTietPhim.NgayKhoiChieu,
        DanhGia: this.ChiTietPhim.DanhGia
      })
    })
  }
  CapNhat(FormCapNhat) {
    // console.log(FormCapNhat)
    let url = `QuanLyPhim/CapNhatPhim`
    this.data.post(url, FormCapNhat).subscribe(result => {
      // console.log(result)

      Swal.fire('Bạn Đã Cập Nhật Thành Công')
      this.router.navigate(['/admin'])
    })
  }
}

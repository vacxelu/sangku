import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/_core/service/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
let urlMaNhom = '';

@Component({
  selector: 'app-cap-nhat-nguoi-dung',
  templateUrl: './cap-nhat-nguoi-dung.component.html',
  styleUrls: ['./cap-nhat-nguoi-dung.component.scss']
})
export class CapNhatNguoiDungComponent implements OnInit {

  constructor(
    private data: DataService,
    private activated: ActivatedRoute,
    private router: Router
  ) {
    urlMaNhom = environment.urlMaNhom
  }
  danhSachNguoiDung;
  objNguoiDung;
  @ViewChild("FormCapNhatNguoiDung") FormCapNhatNguoiDung;
  ngOnInit() {
    let id = this.activated.snapshot.paramMap.get("id");
    let url = `QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${urlMaNhom}`
    this.data.get(url).subscribe(result => {
      // console.log(result)
      this.danhSachNguoiDung = result
      this.danhSachNguoiDung.map((item) => {
        if (item.TaiKhoan == id) {
          this.objNguoiDung = item;
          console.log(this.objNguoiDung)
          this.FormCapNhatNguoiDung.setValue({
            TaiKhoan: this.objNguoiDung.TaiKhoan,
            MatKhau: this.objNguoiDung.MatKhau,
            HoTen: this.objNguoiDung.HoTen,
            MaLoaiNguoiDung: this.objNguoiDung.MaLoaiNguoiDung,
            MaNhom: this.objNguoiDung.MaNhom,

          })
        }
      })
    })
  }
  CapNhatNguoiDung(FormValue,Form){
    let url=`QuanLyNguoiDung/CapNhatThongTin`
    this.data.post(url,FormValue).subscribe(result=>{
      // console.log(url)
      Swal.fire('Cập Nhật Thành Công')
      this.router.navigate(['/admin/them-nguoi-dung'])
    })
  }
}

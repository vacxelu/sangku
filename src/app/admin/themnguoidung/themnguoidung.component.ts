import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/service/data.service';
import { environment } from 'src/environments/environment';
let urlMaNhom = '';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-themnguoidung',
  templateUrl: './themnguoidung.component.html',
  styleUrls: ['./themnguoidung.component.scss']
})
export class ThemnguoidungComponent implements OnInit {
  danhSachNguoiDung;
  constructor(
    private data: DataService
  ) {
    urlMaNhom = environment.urlMaNhom
  }

  ngOnInit() {
    let url = `QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${urlMaNhom}`
    // let url = `QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP06`
    this.data.get(url).subscribe(result => {
      console.log(result)
      this.danhSachNguoiDung = result
    })
  }
  ThemNguoiDung(NguoiDung) {
    let url = `QuanLyNguoiDung/ThemNguoiDung`;


    this.data.post(url, NguoiDung).subscribe(result => {
      console.log(result)
      if (result == "Tài khoản đã tồn tại") {
        Swal.fire('Tài Khoản Đã Tồn Tại')
      }
      else {
        Swal.fire('Bạn Đã Thêm Thành Công!')
        this.danhSachNguoiDung.push(NguoiDung)
      }
    })
  }
  XoaNguoiDung(NguoiDung) {
    // console.log(NguoiDung)

    Swal.fire({
      title: 'Bạn Có Muốn Xóa?',
      text: 'Sẽ Xóa Dữ Liệu Trên Toàn Hệ Thống!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa!',
      cancelButtonText: 'Giữ Lại'
    }).then((result) => {
      if (result.value) {
        let url = `QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${NguoiDung.TaiKhoan}`
        this.data.delete(url).subscribe(result => {
          // console.log(result)
          this.danhSachNguoiDung.map((item, index) => {
            if (item.TaiKhoan === NguoiDung.TaiKhoan) {
              this.danhSachNguoiDung.splice(index, 1)
            }
          })
        })
        Swal.fire(
          'Đã Xóa!',
          '',
          'success'
        )
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Đã Hủy Xóa',
          '',
          'error'
        )
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../_core/service/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.scss']
})
export class DangKyComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router

  ) { }

  ngOnInit() {
  }

  dangKy(user) {
    let objNguoiDung = {
      TaiKhoan: user.TaiKhoan,
      MatKhau: user.MatKhau,
      Email: user.Email,
      SoDT: user.SoDT,
      MaNhom: 'GP06',
      MaLoaiNguoiDung: 'KhachHang'

    }
    this.userService.registerUser(objNguoiDung).subscribe(result => {
      console.log(result);
      if(result === "Tài khoản đã tồn tại"){
        alert("Tài khoản đã tồn tại")
      }
      else if(typeof result === "object"){
        alert("bạn đã đăng ký thành công");
        localStorage.setItem("user", JSON.stringify(result));
        this.router.navigate(['/']);
      }
      // console.log(typeof result)
    })

  }
}

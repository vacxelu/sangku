import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../../_core/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.scss']
})
export class DangNhapComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  goBack() {
    window.history.back();
  }
  dangNhap(user) {
    this.userService.loginUser(user.TaiKhoan, user.MatKhau).subscribe(resutl => {
      // console.log(resutl);
      if (resutl === "Tài khoản hoặc mật khẩu không đúng !") {
        alert(resutl);
      } else {
        localStorage.setItem("user", JSON.stringify(resutl));
        alert("Login thành công");
        // this.router.navigate(['/home']);
         window.history.back();
      }
    })
  }
}

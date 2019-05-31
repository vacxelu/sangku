import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  dangNhap = true;
  user;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    //nó sẽ theo dõi component nếu sự kiện nào thay đổi sẽ chạy hàm này trước
    if (localStorage.getItem("user")) {
      this.user = JSON.parse(localStorage.getItem("user"));
      this.dangNhap = false;

    }
    else{
      this.dangNhap = true
      
    }
  }
  dangXuat(){
    localStorage.removeItem("user");
    alert("dang xuat thanh cong");
    // this.router.navigate(['/home']);
  }
}

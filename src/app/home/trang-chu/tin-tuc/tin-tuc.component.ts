import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tin-tuc',
  templateUrl: './tin-tuc.component.html',
  styleUrls: ['./tin-tuc.component.scss']
})
export class TinTucComponent implements OnInit {

  loaiTinTuc: string = 'DienAnh';
  dienanh: boolean = false ;
  review: boolean = true;
  khuyenmai: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  ChonLoaiTin(val: any) {
    this.loaiTinTuc = val;
  }

  chon1() {
    this.dienanh = false;
    this.review = true;
    this.khuyenmai = true;
  }
  chon2() {
    this.dienanh = true;
    this.review = false;
    this.khuyenmai = true;
  }
  chon3() {
    this.dienanh = true;
    this.review = true;
    this.khuyenmai = false;
  }
}

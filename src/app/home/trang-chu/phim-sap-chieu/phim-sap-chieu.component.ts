import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../../../_core/service/data.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-phim-sap-chieu',
  templateUrl: './phim-sap-chieu.component.html',
  styleUrls: ['./phim-sap-chieu.component.scss']
})
export class PhimSapChieuComponent implements OnInit {

  constructor(
    private dataService: DataService,
  ) { }

  subDanhSachPhim = new Subscription();

   ngOnInit() {
    this.getDanhSachPhim();
  }

  DanhSachPhimSapChieu = null;
  getDanhSachPhim() {
    const uri = "QuanLyPhim/LayDanhSachPhim?MaNhom=GP06";
    this.subDanhSachPhim = this.dataService.get(uri).subscribe((result: any) => {
      this.DanhSachPhimSapChieu = result;
      console.log(this.DanhSachPhimSapChieu);
      
    });
  }


  slidesOptions = {
    loop: true,
    margin: 10,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 5,
        nav: true,
        loop: false
      }
    }
  }
  ngAfterViewInit() {
    // this.subDanhSachPhim.unsubscribe();
  }
}

import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../../../_core/service/data.service';
import { TransformService } from 'src/app/_core/service/transform.service';

@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./phim-dang-chieu.component.scss']
})
export class PhimDangChieuComponent implements OnInit {
  @Output() eventItem = new EventEmitter();
  constructor(
    private dataService: DataService,
     private data:TransformService
  ) { }

  subDanhSachPhim = new Subscription();

  ngOnInit() {
    this.getDanhSachPhim();
  }

  modalDetail(data){
 
    this.eventItem.emit(data);
    console.log(data);
    
  }

  DanhSachPhimDangChieu = null;
  getDanhSachPhim() {
    const uri = "QuanLyPhim/LayDanhSachPhim?MaNhom=GP06";
    this.subDanhSachPhim = this.dataService.get(uri).subscribe((result: any) => {
      this.DanhSachPhimDangChieu = result;
      // console.log(this.DanhSachPhimDangChieu);
      this.data.transformData(result);
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
  ngOnDestroy() {
    // this.subDanhSachPhim.unsubscribe();
  }
}






















// ngAfterViewInit() {

  //   $('.owl-carousel').owlCarousel({
  //     loop: true,
  //     margin: 10,
  //     nav: true,
  //     // rows: true,
  //     // rowsCount: 2,
  //     multipleRow: true,
  //     rows: 2,
  //     responsive: {
  //       0: {
  //         items: 1,
  //         rows: 2
  //       },
  //       600: {
  //         items: 3,
  //         rows: 2
  //       },
  //       1000: {
  //         items: 5,
  //         rows: 2
  //       }
  //     }
  //   });
  // }
  // })
    // this.quanLyPhimService.getDanhSachPhim().subscribe((result: any) => {
      // count = result.leght;
      // this.DanhSachPhimDangChieu = result;
      // console.log(this.DanhSachPhimDangChieu);
      // setTimeout(() => {
      //   $('.owl-carousel').owlCarousel({
      //     loop: true,
      //     margin: 10,
      //     nav: true,
      //     responsive: {
      //       0: {
      //         items: 1
      //       },
      //       600: {
      //         items: 3
      //       },
      //       1000: {
      //         items: 5
      //       }
      //     }
      //   })
      // }, 100);
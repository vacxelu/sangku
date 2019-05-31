import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuanLyPhimService } from '../../../_core/service/quan-ly-phim.service';

@Component({
  selector: 'app-chi-tiet',
  templateUrl: './chi-tiet.component.html',
  styleUrls: ['./chi-tiet.component.scss']
})
export class ChiTietComponent implements OnInit {
 

  constructor(
    private router: Router,
    private quanLyPhimService: QuanLyPhimService,
    private activatedroute: ActivatedRoute,
  ) { }
  id: any;
  tenPhim:any;
  detailMovie:any;
  ngOnInit() {
    this.getParams();
    this.getChiTietPhim();
  }
  getParams() {
    this.id = this.activatedroute.snapshot.paramMap.get("id");
    // console.log(this.tenPhim);  console.log("hiep");
  }
  getChiTietPhim() {
    this.quanLyPhimService.getChiTietPhim(this.id).subscribe((result: any) => {
      console.log(result);

      this.detailMovie = result
    })
  }
  datve(maLichChieu){
    this.router.navigate(['/home/phong-ve',maLichChieu]);
    // console.log("hiep");
    
  }
}

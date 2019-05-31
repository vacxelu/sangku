import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  constructor() { }

  DanhSachReview = [
    {
      TieuDeTinTuc: "'Gia thần' Ma Dong Seok 'ăn hành'",
      HinhAnh: '../../../../assets/img/review1.jpg',
      noidung:"[Review] The Hustle - Thật nực cười kẻ bị lừa lại muốn đi lừa người khác",
      noidung1:"'Gia thần' Ma Dong Seok 'ăn hành' trong trailer Trùm, Cớm và Ác Quỷ mới nhất",
      noidung2:"Bộ phim sẽ là cuộc đi săn đầy máu lửa khi ông trùm xã hội kết hợp với cớp 'giang hồ' vì một mục đích chung.",
    },
    {
      TieuDeTinTuc: "X-MEN THE PHOENIX",
      HinhAnh: '../../../../assets/img/review2.jpg',
      noidung:"DARK PHOENIX phượng hoàng bóng tối Ngày X-Men - 20 năm thương hiệu dị nhân xuất hiện trên màn ảnh rộng",
      noidung1:"DARK PHOENIX: Ngày X-Men - 20 năm thương hiệu dị nhân xuất hiện trên màn ảnh rộng",
      noidung2:"phượng hoàng bóng tối Ngày",
   
    },

  ];

  ngOnInit() {
  }

}

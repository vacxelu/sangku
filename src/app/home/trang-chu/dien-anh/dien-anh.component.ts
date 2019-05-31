import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dien-anh',
  templateUrl: './dien-anh.component.html',
  styleUrls: ['./dien-anh.component.scss']
})
export class DienAnhComponent implements OnInit {

  DanhSachDienAnh = [
    {
      TieuDeTinTuc: "'Gia thần' Ma Dong Seok 'ăn hành'",
      HinhAnh: '../../../../assets/img/hinh1.jpg',
      noidung:"Bộ phim sẽ là cuộc đi săn đầy máu lửa khi ông trùm xã hội kết hợp với cớp 'giang hồ' vì một mục đích chung.",
      noidung1:"'Gia thần' Ma Dong Seok 'ăn hành' trong trailer Trùm, Cớm và Ác Quỷ mới nhất",
      noidung2:"Bộ phim sẽ là cuộc đi săn đầy máu lửa khi ông trùm xã hội kết hợp với cớp 'giang hồ' vì một mục đích chung.",
      maTin:"01",
    },
    {
      TieuDeTinTuc: "X-MEN THE PHOENIX",
      HinhAnh: '../../../../assets/img/hinh2.jpg',
      noidung:"DARK PHOENIX phượng hoàng bóng tối Ngày X-Men - 20 năm thương hiệu dị nhân xuất hiện trên màn ảnh rộng",
      noidung1:"DARK PHOENIX: Ngày X-Men - 20 năm thương hiệu dị nhân xuất hiện trên màn ảnh rộng",
      noidung2:"phượng hoàng bóng tối Ngày",
      maTin:"02",
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

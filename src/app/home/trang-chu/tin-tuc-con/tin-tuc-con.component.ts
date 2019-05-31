import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tin-tuc-con',
  templateUrl: './tin-tuc-con.component.html',
  styleUrls: ['./tin-tuc-con.component.scss']
})
export class TinTucConComponent implements OnInit {
  mangTinTucTuTao = [
    {
      HinhAnh: "../../../../assets/img/sieu-pham-kinh-di-chung-ta-nhan-mua-loi-khen-15525405922012.jpg",
      title: "Siêu phẩm kinh dị Chúng Ta nhận mưa lời khen",
      subtitle: "Tiếp nối cơn sốt Get Out, đạo diễn Jordan Peele lại cho ra mắt một tác phẩm kinh dị có một không hai.",
      text1:"Liên hoan phim SXSW (South by South West) là hoạt động được tổ chức thường niên tại Texas, Mỹ với hơn 30 năm tuổi đời. Đây được coi là liên hoan phim độc lập uy tín và đình đám nhất hiện nay dành cho thể loại kinh dị. Liên hoan phim này nổi tiếng với các suất chiếu đêm khiến khán giả và giới phê bình phải “khóc thét” nhưng đồng thời vỗ tay tán thưởng không ngớt vì chất lượng của tác phẩm tham dự.",
      text2:"Năm nay, Liên hoan phim SXSW đã chọn siêu phẩm Chúng Ta (tựa gốc: Us) của đạo diễn Jordan Peele làm tác phẩm mở màn. Sau buổi chiếu đầu tiên, Chúng Ta lập tức trở thành một hiện tượng kinh dị được giới phê bình xôn xao khen ngợi trên mọi mặt báo.",
      text3:"Tờ Hollywood Reporter khẳng định Chúng Ta làm được nhiều hơn việc dọa dẫm khán giả xem phim một cách đơn thuần. Tờ Vanity Fair nhận xét rằng bộ phim đã “hòa trộn những mảng miếng kỳ lạ nhất từ trí tưởng tượng của Peele với trí tưởng tượng của chính chúng ta để tạo nên một sự kinh hoàng còn khủng khiếp và quỷ quyệt hơn nhiều những gì bộ phim thể hiện”.",
      HinhItem1:"../../../../assets/img/chung-ta-01-f70b20.jpg",
      HinhItem2:"../../../../assets/img/chung-ta-02-1d7d34.jpg",
      HinhItem3:"../../../../assets/img/chung-ta-03-e7cacf.jpg",
      iframe:"https://www.youtube.com/embed/3T9c42gxXzg",

      maTin:"01"
    },
    
    {
      HinhAnh: "../../../../assets/img/shazam-sieu-anh-hung-nha-dc-noi-tiep-thanh-cong-vang-doi-cua-aquaman-15524677708606.jpg",
      title: "Shazam - siêu anh hùng nhà DC nối tiếp thành công vang dội của Aquaman",
      subtitle: "Shazam đang được giới phê bình khen ngợi hết lời và được dự đoán sẽ trở thành hiện tượng siêu anh hùng mới của năm 2019.",
      text1:"Với thành công vang dội của siêu phẩm Aquaman: Đế Vương Atlantis trong năm 2018 vừa rồi, hãng Warner Bros. tiếp tục trình làng tới khán giả trên toàn thế giới một “bom tấn” siêu anh hùng khác với tên gọi Shazam! (tựa Việt: Shazam!).",
      text2:"Thành công của Aquaman: Đế Vương Atlantis đã biến Shazam! trở thành niềm hy vọng cũng như con Át chủ bài của Vũ trụ điện ảnh DC trong năm 2019 với kỳ vọng thống lĩnh phòng vé thế giới. Bộ phim được hãng Warner Bros. đầu tư khá kỹ lưỡng cả về nội dung lẫn phần kỹ xảo hình ảnh. Không những vậy, khác với các bộ phim siêu anh hùng trước đây của nhà DC, Shazam là gương măt hứa hẹn sẽ mang lại màu sắc vô cùng mới mẻ và khác biệt cho vũ trụ điện ảnh DC với tính cách nhân vật cực kỳ hài hước và lầy lội.",
      text3:"Nội dung bộ phim xoay quanh Billy Batson – cậu bé 14 tuổi sở hữu nhiều tố chất đáng quý như thông minh, dũng cảm và hào hiệp. Thấy vậy, một pháp sư đã chọn Billy là người thừa kế sức mạnh quyền năng của mình. Billy chỉ cần hô lớn câu thần chú Shazam! thì lập tức cậu bé sẽ biến thành siêu anh hùng cao lớn với sức mạnh vĩ đại của một vị thần. Theo đó, Shazam có khả năng tập hợp quyền năng tối thượng của 6 vị thần bao gồm trí tuệ của vua Solomon, sức mạnh của anh hùng Hercules, sức bền của người khổng lồ Atlas, phép thuật của thần Zeus, lòng can đảm của anh hùng Achilles và tốc độ của thần Mercury, và bản thân cái tên Shazam cũng là tập hợp chữ cái đầu tiên của tên 6 huyền thoại đó.",
      HinhItem1:"../../../../assets/img/shazam-01-4decb9.jpg",
      HinhItem2:"../../../../assets/img/shazam-02-19679d.jpg",
      HinhItem3:"../../../../assets/img/shazam-06-746314.jpg",
      iframe:"https://www.youtube.com/embed/kqkrLxd3A4M",
      maTin:"02"
    },
   
    {
      HinhAnh: "../../../../assets/img/lat-mat-4-tung-trailer-he-lo-chuyen-ma-den-choi-nha-vua-so-vua-hai-15523792375152.jpg",
      title: "Lật Mặt 4 tung trailer hé lộ chuyện 'ma đến chơi nhà’ vừa sợ vừa hài",
      subtitle: "Phần 4 của series Lật Mặt khiến khán giả vừa tò mò vừa thích thú với câu chuyện hội trai ‘lầy’ gặp ma khi ghé nhà người lạ.",
      text1:"Chỉ cách đây vài giờ đồng hồ, trailer chính thức của bom tấn phim Việt mùa hè Lật Mặt: Nhà Có Khách đã trình làng khán giả. Qua từng phần phim được ra mắt trong vòng 4 năm qua, series Lật Mặt ngày càng được khán giả yêu mến bởi sự chất lượng trong kịch bản, khâu tuyển chọn diễn viên, sự đầu tư, chăm chút vào các yếu tố kĩ thuật khác của ekip và đặc biệt là bản sắc “độc nhất vô nhị” không lẫn với ai trong thị trường điện ảnh nước nhà của đạo diễn – biên kịch Lý Hải.",
      text2:"Nếu như ở Lật Mặt: Ba Chàng Khuyết, Lý Hải – Minh Hà đã giới thiệu thành công nữ diễn viên, hotgirl đến từ “xứ sở Chùa Vàng” Nene đến gần hơn với khán giả thì trong dự án điện ảnh thứ tư này, cặp vợ chồng được yêu mến của làng giải trí Việt một lần nữa lại chứng tỏ sự “mát tay” của mình khi tiếp tục “khai quật” một nhân tố nữ khác cũng sáng giá không kém là Katleen Phan Võ. Trailer chính thức lần này đã đi sâu hé lộ thêm nhiều diễn biến nội dung cực kỳ đáng mong chờ.",
      text3:"Ngay từ lúc mở đầu, trailer đã liên tiếp mở ra hàng loạt cảnh tượng gây ấn tượng mạnh khiến khán giả thót tim lẫn dấy lên những mối nghi hoặc khó tả: Đầu tiên là một trận cuồng phong thổi cây bật gốc khiến người mẹ đã cao tuổi (nghệ sĩ Tú Trinh) phải chạy hoảng loạn khỏi cơn bão chực chờ trong sự gào thét của cậu con trai tên Hoàng (diễn viên Tiến Ngô).",
      HinhItem1:"../../../../assets/img/lat-mat-nha-co-khach-trailer-01-8c288c.jpg",
      HinhItem2:"../../../../assets/img/lat-mat-nha-co-khach-trailer-02-947790.jpg",
      HinhItem3:"../../../../assets/img/lat-mat-nha-co-khach-trailer-06-7488ca.jpg",
      iframe:"https://www.youtube.com/embed/JvHqCk3l3UE",

      maTin:"03"
    }
  ]
  danhSachTinDuocLay;
  constructor(private activated : ActivatedRoute) { }

  ngOnInit() {
    let id = this.activated.snapshot.paramMap.get("id")
    this.mangTinTucTuTao.map(item=>{
      if(item.maTin == id){
        this.danhSachTinDuocLay = item
      }
    })
  }

}

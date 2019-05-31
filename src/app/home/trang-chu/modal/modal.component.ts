import { Component, OnInit, Input, KeyValueDiffers } from '@angular/core';
import { ItemPhimComponent } from '../item-phim/item-phim.component';
import { TransformService } from 'src/app/_core/service/transform.service';
declare var $;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  trangthai: boolean = true
  imgA: any = []//"https://www.youtube.com/embed/N6iqLi1SEAI?list=RDMMN6iqLi1SEAI";
  // mangB:[];
  @Input() Item: any;
  status: any = [];

  constructor(
    private transform: TransformService
  ) { }

  ngOnInit() {
    // this.transform.asData.subscribe((kq => {
    //   if (kq != null) {
    //     // kq.map((phim,index)=>{
    //       // if(phim.MaPhim===this.Item){
    //         // this.status = kq[index].Trailer;
    //         // console.log(this.ItemPhim);
    //         // this.imgA = this.status;
    //       // }
    //     // })
    //   }
    // }));

  }
  dong() {
    // if (this.trangthai) {
      this.status = this.Item;
      // this.Item = ''
      // console.log(this.status);
      if ($('#myModal').modal('hide')) {
        // this.trangthai = true;
        this.Item = "";
      } else if(($('#myModal').modal('show'))) {
        this.Item = this.status;
        // this.trangthai = false;
        // console.log("1");
        // setTimeout(() => {
        //   this.Item = this.status; //"https://www.youtube.com/embed/N6iqLi1SEAI?list=RDMMN6iqLi1SEAI";
        //   console.log (this.status);
        // }, 10)
      }
    // }
  }
}

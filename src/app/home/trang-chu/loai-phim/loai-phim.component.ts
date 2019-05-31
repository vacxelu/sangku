import { Component, OnInit , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-loai-phim',
  templateUrl: './loai-phim.component.html',
  styleUrls: ['./loai-phim.component.scss']
})
export class LoaiPhimComponent implements OnInit {
  @Output() eventItem = new EventEmitter();
  
  dangChieuStatus:boolean=true;
  constructor() { }

  HienPhimDangChieu(){
    this.dangChieuStatus=true;
  }

  HienPhimSapChieu(){
    this.dangChieuStatus=false;
  }

  modalDetail(data){
 
    this.eventItem.emit(data);
    console.log(data);
    
  }


  ngOnInit() {
  }

}

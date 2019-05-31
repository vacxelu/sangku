import { Component, OnInit, OnChanges } from '@angular/core';
import { TransformService } from 'src/app/_core/service/transform.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.scss']
})
export class TrangChuComponent implements OnInit {

  constructor(
    private transform: TransformService,
    private sanitizer: DomSanitizer
  ) { 
  }

  item: any="";
  ngOnInit() {
  }
  
  modalDetail(item1) {
    // if (item1 === null) {
    //   item1 = "../../../assets/img/hinh1.jpg"
    // }
    this.item = this.convertLinkVideo(item1);
    // console.log(item1);

  }
  
  convertLinkVideo (linkGoc) {
    if (linkGoc.split('embed').length !== -1) {
      return linkGoc;
    }else{
      this.item = linkGoc.replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/") + "?rel=0&autoplay=1";
      return this.sanitizer.bypassSecurityTrustResourceUrl(this.item);
    }
    

  }
}


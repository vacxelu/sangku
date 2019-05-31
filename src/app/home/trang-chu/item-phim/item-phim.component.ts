import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';
// import { Router } from '@angular/router';
// import { ModalComponent } from '../modal/modal.component';
// import { EventEmitter } from 'protractor';
import { TransformService } from 'src/app/_core/service/transform.service';

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {
  @Input() ItemPhim;
  @Output() eventItem = new EventEmitter();
  statusmo: boolean = false;
  constructor(
    // private router: Router,
    // private data: TransformService
  ) { }
  
  ngOnInit() {

  }

  modalDetail(data){
 
    this.eventItem.emit(data);
    console.log(data);
    
  }

}

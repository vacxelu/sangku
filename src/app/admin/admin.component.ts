import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  trangthai:boolean=true
  constructor() { }

  ngOnInit() {
  }
  show1(){
    this.trangthai=true
  }
  show2(){
    this.trangthai=false
  }

}

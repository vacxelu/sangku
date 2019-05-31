import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {
  @Input() ghe;
  @Output() eventGhe = new EventEmitter();
  public gheduocChon: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  duocChon(ghe) {
    this.gheduocChon = !this.gheduocChon;
    this.eventGhe.emit(ghe);
  }

}

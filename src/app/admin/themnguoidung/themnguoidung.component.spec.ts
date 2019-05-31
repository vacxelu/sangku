import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemnguoidungComponent } from './themnguoidung.component';

describe('ThemnguoidungComponent', () => {
  let component: ThemnguoidungComponent;
  let fixture: ComponentFixture<ThemnguoidungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemnguoidungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemnguoidungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

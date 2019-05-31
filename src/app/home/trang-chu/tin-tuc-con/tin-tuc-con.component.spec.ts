import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinTucConComponent } from './tin-tuc-con.component';

describe('TinTucConComponent', () => {
  let component: TinTucConComponent;
  let fixture: ComponentFixture<TinTucConComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinTucConComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinTucConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

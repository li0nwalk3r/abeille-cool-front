import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnConnectComponent } from './btn-connect.component';

describe('BtnConnectComponent', () => {
  let component: BtnConnectComponent;
  let fixture: ComponentFixture<BtnConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailhydromelComponent } from './detailhydromel.component';

describe('DetailhydromelComponent', () => {
  let component: DetailhydromelComponent;
  let fixture: ComponentFixture<DetailhydromelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailhydromelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailhydromelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

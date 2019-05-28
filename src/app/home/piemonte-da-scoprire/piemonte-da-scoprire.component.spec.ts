import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiemonteDaScoprireComponent } from './piemonte-da-scoprire.component';

describe('PiemonteDaScoprireComponent', () => {
  let component: PiemonteDaScoprireComponent;
  let fixture: ComponentFixture<PiemonteDaScoprireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiemonteDaScoprireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiemonteDaScoprireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

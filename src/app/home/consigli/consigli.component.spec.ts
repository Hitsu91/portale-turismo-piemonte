import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsigliComponent } from './consigli.component';

describe('ConsigliComponent', () => {
  let component: ConsigliComponent;
  let fixture: ComponentFixture<ConsigliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsigliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsigliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

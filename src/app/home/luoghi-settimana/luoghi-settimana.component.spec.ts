import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuoghiSettimanaComponent } from './luoghi-settimana.component';

describe('LuoghiSettimanaComponent', () => {
  let component: LuoghiSettimanaComponent;
  let fixture: ComponentFixture<LuoghiSettimanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuoghiSettimanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuoghiSettimanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

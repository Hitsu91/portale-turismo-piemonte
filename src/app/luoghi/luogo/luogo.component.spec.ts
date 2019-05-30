import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuogoComponent } from './luogo.component';

describe('LuogoComponent', () => {
  let component: LuogoComponent;
  let fixture: ComponentFixture<LuogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

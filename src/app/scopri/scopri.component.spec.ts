import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopriComponent } from './scopri.component';

describe('ScopriComponent', () => {
  let component: ScopriComponent;
  let fixture: ComponentFixture<ScopriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScopriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScopriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

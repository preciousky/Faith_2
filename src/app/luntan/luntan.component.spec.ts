import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuntanComponent } from './luntan.component';

describe('LuntanComponent', () => {
  let component: LuntanComponent;
  let fixture: ComponentFixture<LuntanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuntanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuntanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fnew2Component } from './fnew2.component';

describe('Fnew2Component', () => {
  let component: Fnew2Component;
  let fixture: ComponentFixture<Fnew2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fnew2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fnew2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

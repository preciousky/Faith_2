import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunDetailsLeftComponent } from './fun-details-left.component';

describe('FunDetailsLeftComponent', () => {
  let component: FunDetailsLeftComponent;
  let fixture: ComponentFixture<FunDetailsLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunDetailsLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunDetailsLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

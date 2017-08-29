import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunDetailsExpenseComponent } from './fun-details-expense.component';

describe('FunDetailsExpenseComponent', () => {
  let component: FunDetailsExpenseComponent;
  let fixture: ComponentFixture<FunDetailsExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunDetailsExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunDetailsExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

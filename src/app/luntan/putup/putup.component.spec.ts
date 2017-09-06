import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutupComponent } from './putup.component';

describe('PutupComponent', () => {
  let component: PutupComponent;
  let fixture: ComponentFixture<PutupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
